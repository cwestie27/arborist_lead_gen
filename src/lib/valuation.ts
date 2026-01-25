import type {
  SpeciesCategory,
  HeightHeuristic,
  GirthHeuristic,
  TreeValuation,
} from "@/types";
import {
  HEIGHT_MAP,
  GIRTH_MAP,
  SPECIES_RATINGS,
  REGIONAL_COSTS,
  ZIP_TIERS,
  CONDITION_RATING,
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
    CONDITION_RATING *
    LOCATION_RATING;

  return Math.round(value);
}

// ========================================
// Ecosystem Services Valuation
// ========================================

/**
 * Calculates carbon sequestration value
 */
function calculateCarbonValue(dbh: number, height: number): number {
  // Above Ground Biomass (USDA Allometry)
  const agb = 0.25 * Math.pow(dbh, 2) * height;

  // Carbon calculations
  const carbonMass = agb * 0.5; // 50% of dry weight is carbon
  const co2Sequestered = carbonMass * 3.67; // CO2/C atomic ratio

  return co2Sequestered * CO2_VALUE_PER_LB;
}

/**
 * Calculates stormwater interception value
 */
function calculateStormwaterValue(
  dbh: number,
  height: number,
  speciesRating: number
): number {
  // Evergreens (lower species rating typically) intercept more
  const speciesFactor = speciesRating < 0.7 ? 1.5 : 0.8;
  const gallonsIntercepted = dbh * height * speciesFactor;

  return gallonsIntercepted * STORMWATER_VALUE_PER_GALLON;
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
): { total: number; carbon: number; stormwater: number; energy: number } {
  const carbon = calculateCarbonValue(dbh, height);
  const stormwater = calculateStormwaterValue(dbh, height, speciesRating);
  const energy = calculateEnergyValue(height);

  return {
    total: Math.round(carbon + stormwater + energy),
    carbon: Math.round(carbon),
    stormwater: Math.round(stormwater),
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
  const unitCost = getRegionalMultiplier(inputs.zipCode || null);

  // Validate and adjust for biological congruence
  const { dbh, height } = validateInputs(rawDbh, rawHeight);

  // Calculate values
  const structuralValue = calculateStructuralValue(dbh, speciesRating, unitCost);
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
Regional Cost: $${inputs.regionalMultiplier}/sq in

Structural (Replacement) Value: $${structuralValue.toLocaleString()}
Annual Ecosystem Benefits: $${ecoValue.total.toLocaleString()}/year
  - Carbon Sequestration: $${ecoValue.carbon}/year
  - Stormwater Management: $${ecoValue.stormwater}/year
  - Energy Savings: $${ecoValue.energy}/year
`.trim();
}
