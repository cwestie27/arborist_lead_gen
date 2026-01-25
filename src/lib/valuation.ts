import type {
  SpeciesCategory,
  HeightHeuristic,
  GirthHeuristic,
  HealthCondition,
  TreeValuation,
} from "@/types";
import {
  HEIGHT_MAP,
  GIRTH_MAP,
  SPECIES_RATINGS,
  CONDITION_MULTIPLIERS,
  REGIONAL_COSTS,
  ZIP_TIERS,
  LOCATION_RATING,
  MAX_STANDARD_DBH,
  REPLACEMENT_DBH,
  CO2_VALUE_PER_LB,
  STORMWATER_VALUE_PER_GALLON,
  ENERGY_SAVINGS_LARGE_TREE,
  ENERGY_HEIGHT_THRESHOLD,
} from "./constants";

// ========================================
// Input Validation & Sanity Checks
// ========================================

/**
 * Validates and adjusts inputs for biological congruence
 * A 36" DBH tree can't be 12' tall, etc.
 */
function validateInputs(dbh: number, height: number): { dbh: number; height: number } {
  let adjustedDbh = dbh;
  let adjustedHeight = height;

  // Stoutness Cap: If DBH > 20 AND Height < 25, bump height
  if (dbh > 20 && height < 25) {
    adjustedHeight = 42; // Assume user underestimated height
  }

  // Slenderness Floor: If Height > 60 AND DBH < 10, bump DBH
  if (height > 60 && dbh < 10) {
    adjustedDbh = 15; // Physically impossible otherwise
  }

  return { dbh: adjustedDbh, height: adjustedHeight };
}

// ========================================
// Regional Pricing
// ========================================

/**
 * Determines the cost tier based on zip code
 */
export function getRegionalMultiplier(zipCode: string | null): number {
  if (!zipCode || zipCode.length < 2) {
    return REGIONAL_COSTS.tier2; // Default to average
  }

  const prefix = zipCode.substring(0, 2);
  const tier = ZIP_TIERS[prefix] || "tier3";
  return REGIONAL_COSTS[tier];
}

// ========================================
// CTLA Trunk Formula Method
// ========================================

/**
 * Calculates trunk cross-sectional area in square inches
 */
function calculateTrunkArea(dbh: number): number {
  return Math.PI * Math.pow(dbh / 2, 2);
}

/**
 * Applies the Adjusted Trunk Area formula for large trees
 * This prevents unrealistic valuations for very large specimens
 */
function calculateAdjustedTrunkArea(actualArea: number): number {
  const replacementArea = calculateTrunkArea(REPLACEMENT_DBH);
  return 0.5 * (actualArea - replacementArea) + replacementArea;
}

/**
 * Calculates structural (replacement) value using CTLA method
 */
function calculateStructuralValue(
  dbh: number,
  speciesRating: number,
  conditionRating: number,
  unitCost: number
): number {
  let trunkArea = calculateTrunkArea(dbh);

  // Apply large tree adjustment if DBH exceeds threshold
  if (dbh > MAX_STANDARD_DBH) {
    trunkArea = calculateAdjustedTrunkArea(trunkArea);
  }

  // CTLA Formula: Area × Unit Cost × Species × Condition × Location
  const value =
    trunkArea *
    unitCost *
    speciesRating *
    conditionRating *
    LOCATION_RATING;

  return Math.round(value);
}

// ========================================
// Ecosystem Services Valuation
// ========================================

/**
 * Calculates carbon sequestration - returns both value and raw lbs/year
 */
function calculateCarbonSequestration(dbh: number, height: number): { value: number; lbsPerYear: number } {
  // Above Ground Biomass (USDA Allometry)
  const agb = 0.25 * Math.pow(dbh, 2) * height;

  // Carbon calculations
  const carbonMass = agb * 0.5; // 50% of dry weight is carbon
  const co2Sequestered = carbonMass * 3.67; // CO2/C atomic ratio

  // Annual sequestration (mature trees sequester ~3-5% of total annually)
  const annualCo2 = co2Sequestered * 0.04;

  return {
    value: Math.round(annualCo2 * CO2_VALUE_PER_LB),
    lbsPerYear: Math.round(annualCo2),
  };
}

/**
 * Calculates stormwater interception - returns both value and raw gallons/year
 */
function calculateStormwaterInterception(
  dbh: number,
  height: number,
  speciesRating: number
): { value: number; gallonsPerYear: number } {
  // Evergreens (lower species rating typically) intercept more
  const speciesFactor = speciesRating < 0.7 ? 1.5 : 0.8;
  // Crown spread approximation based on DBH
  const crownFactor = Math.PI * Math.pow(dbh * 0.7, 2);
  // Gallons intercepted annually (rainfall × crown area × interception rate)
  const gallonsIntercepted = crownFactor * height * speciesFactor * 0.5;

  return {
    value: Math.round(gallonsIntercepted * STORMWATER_VALUE_PER_GALLON),
    gallonsPerYear: Math.round(gallonsIntercepted),
  };
}

/**
 * Calculates energy savings from shade
 */
function calculateEnergyValue(height: number): number {
  return height > ENERGY_HEIGHT_THRESHOLD ? ENERGY_SAVINGS_LARGE_TREE : 0;
}

/**
 * Calculates total annual ecosystem value
 */
function calculateEcoValue(
  dbh: number,
  height: number,
  speciesRating: number
): {
  total: number;
  carbon: number;
  carbonLbsPerYear: number;
  stormwater: number;
  stormwaterGallonsPerYear: number;
  energy: number;
} {
  const carbonResult = calculateCarbonSequestration(dbh, height);
  const stormwaterResult = calculateStormwaterInterception(dbh, height, speciesRating);
  const energy = calculateEnergyValue(height);

  return {
    total: Math.round(carbonResult.value + stormwaterResult.value + energy),
    carbon: carbonResult.value,
    carbonLbsPerYear: carbonResult.lbsPerYear,
    stormwater: stormwaterResult.value,
    stormwaterGallonsPerYear: stormwaterResult.gallonsPerYear,
    energy: Math.round(energy),
  };
}

// ========================================
// Main Valuation Function
// ========================================

export interface ValuationInputs {
  species: SpeciesCategory;
  height: HeightHeuristic;
  girth: GirthHeuristic;
  healthCondition?: HealthCondition | null;
  zipCode?: string | null;
}

/**
 * Calculates the complete tree valuation from heuristic inputs
 */
export function calculateTreeValue(inputs: ValuationInputs): TreeValuation {
  // Convert heuristics to numeric values
  const rawDbh = GIRTH_MAP[inputs.girth];
  const rawHeight = HEIGHT_MAP[inputs.height];
  const speciesRating = SPECIES_RATINGS[inputs.species];
  const conditionRating = inputs.healthCondition
    ? CONDITION_MULTIPLIERS[inputs.healthCondition]
    : CONDITION_MULTIPLIERS.good; // Default to "good" if not specified
  const unitCost = getRegionalMultiplier(inputs.zipCode || null);

  // Validate and adjust for biological congruence
  const { dbh, height } = validateInputs(rawDbh, rawHeight);

  // Calculate values
  const structuralValue = calculateStructuralValue(dbh, speciesRating, conditionRating, unitCost);
  const ecoValue = calculateEcoValue(dbh, height, speciesRating);

  return {
    structuralValue,
    ecoValue,
    totalValue: structuralValue + ecoValue.total,
    inputs: {
      dbhInches: dbh,
      heightFeet: height,
      speciesRating,
      regionalMultiplier: unitCost,
      conditionRating,
    },
  };
}

// ========================================
// Formatting Utilities
// ========================================

/**
 * Generates a human-readable summary of the valuation
 */
export function getValuationSummary(valuation: TreeValuation): string {
  const { structuralValue, ecoValue, inputs } = valuation;

  return `
Tree Valuation Summary
======================
Estimated DBH: ${inputs.dbhInches}"
Estimated Height: ${inputs.heightFeet} ft
Species Rating: ${(inputs.speciesRating * 100).toFixed(0)}%
Condition Rating: ${(inputs.conditionRating * 100).toFixed(0)}%
Regional Cost: $${inputs.regionalMultiplier}/sq in

Structural (Replacement) Value: $${structuralValue.toLocaleString()}
Annual Ecosystem Benefits: $${ecoValue.total.toLocaleString()}/year
  - Carbon Sequestration: $${ecoValue.carbon}/year (${ecoValue.carbonLbsPerYear} lbs CO2)
  - Stormwater Management: $${ecoValue.stormwater}/year (${ecoValue.stormwaterGallonsPerYear} gal)
  - Energy Savings: $${ecoValue.energy}/year
`.trim();
}
