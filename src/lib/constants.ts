import type {
  SpeciesCategory,
  HeightHeuristic,
  GirthHeuristic,
  HealthCondition,
  LocationType,
  SelectionOption,
} from "@/types";

// ========================================
// Heuristic Mappings
// ========================================

/**
 * Maps height heuristics to feet
 */
export const HEIGHT_MAP: Record<HeightHeuristic, number> = {
  "1_story": 12,
  "2_story": 25,
  taller_2_story: 42,
  towering: 65,
} as const;

/**
 * Maps girth heuristics to DBH in inches
 */
export const GIRTH_MAP: Record<GirthHeuristic, number> = {
  fingers_wrap: 3,
  paint_bucket: 10,
  arms_wrap: 20,
  two_people_hug: 36,
} as const;

/**
 * Species ratings for CTLA calculation (0-1)
 */
export const SPECIES_RATINGS: Record<SpeciesCategory, number> = {
  oak: 0.9,
  maple: 0.85,
  pine: 0.6,
  fruit_tree: 0.75,
  other: 0.5,
} as const;

/**
 * Condition multipliers based on health assessment
 */
export const CONDITION_MULTIPLIERS: Record<HealthCondition, number> = {
  excellent: 1.0,
  good: 0.8,
  fair: 0.6,
  poor: 0.4,
  critical: 0.2,
} as const;

// ========================================
// Regional Pricing
// ========================================

/**
 * Regional cost per square inch of trunk area
 */
export const REGIONAL_COSTS = {
  tier1: 55.0, // CA, NY, MA, CT, NJ, WA, CO
  tier2: 45.0, // VA, IL, TX, FL, GA, NC, PA
  tier3: 35.0, // Rural / Lower cost areas
} as const;

/**
 * Zip code prefixes for pricing tiers
 */
export const ZIP_TIERS: Record<string, keyof typeof REGIONAL_COSTS> = {
  // Tier 1 - High Cost
  "90": "tier1", // CA - Los Angeles
  "91": "tier1", // CA - Pasadena
  "92": "tier1", // CA - San Diego
  "93": "tier1", // CA - Central Valley
  "94": "tier1", // CA - San Francisco
  "95": "tier1", // CA - Sacramento
  "10": "tier1", // NY - Manhattan
  "11": "tier1", // NY - Brooklyn/Queens
  "02": "tier1", // MA - Boston
  "06": "tier1", // CT
  "07": "tier1", // NJ
  "98": "tier1", // WA - Seattle
  "80": "tier1", // CO - Denver

  // Tier 2 - Average Cost
  "22": "tier2", // VA - DC Area
  "20": "tier2", // DC
  "21": "tier2", // MD
  "60": "tier2", // IL - Chicago
  "75": "tier2", // TX - Dallas
  "77": "tier2", // TX - Houston
  "33": "tier2", // FL - Miami
  "32": "tier2", // FL - Jacksonville
  "30": "tier2", // GA - Atlanta
  "27": "tier2", // NC - Raleigh
  "28": "tier2", // NC - Charlotte
  "19": "tier2", // PA - Philadelphia
  "15": "tier2", // PA - Pittsburgh
} as const;

// ========================================
// CTLA Constants
// ========================================

/**
 * Default condition rating (assuming "good" health for lead gen)
 */
export const CONDITION_RATING = 0.8;

/**
 * Default location rating (residential front yard)
 */
export const LOCATION_RATING = 0.85;

/**
 * Maximum DBH before applying large tree adjustment
 */
export const MAX_STANDARD_DBH = 30;

/**
 * DBH of largest commonly available nursery stock
 */
export const REPLACEMENT_DBH = 4;

// ========================================
// Ecosystem Value Constants
// ========================================

/**
 * Dollar value per pound of CO2 sequestered
 */
export const CO2_VALUE_PER_LB = 0.05;

/**
 * Dollar value per gallon of stormwater intercepted
 */
export const STORMWATER_VALUE_PER_GALLON = 0.02;

/**
 * Flat annual energy savings for large shade trees
 */
export const ENERGY_SAVINGS_LARGE_TREE = 25.0;

/**
 * Height threshold (feet) for energy savings
 */
export const ENERGY_HEIGHT_THRESHOLD = 30;

// ========================================
// Wizard Options
// ========================================

export const SPECIES_OPTIONS: SelectionOption<SpeciesCategory>[] = [
  {
    value: "oak",
    label: "Oak",
    description: "Quercus species - Strong, long-lived",
  },
  {
    value: "maple",
    label: "Maple",
    description: "Acer species - Colorful fall foliage",
  },
  {
    value: "pine",
    label: "Pine / Evergreen",
    description: "Conifer species - Year-round green",
  },
  {
    value: "fruit_tree",
    label: "Fruit Tree",
    description: "Apple, pear, cherry, etc.",
  },
  {
    value: "other",
    label: "Other / Not Sure",
    description: "Upload a photo to identify",
  },
];

export const HEIGHT_OPTIONS: SelectionOption<HeightHeuristic>[] = [
  {
    value: "1_story",
    label: "Shorter than a 1-story house",
    description: "Under 15 feet tall",
  },
  {
    value: "2_story",
    label: "About as tall as a 2-story house",
    description: "Around 20-30 feet",
  },
  {
    value: "taller_2_story",
    label: "Taller than a 2-story house",
    description: "Around 35-50 feet",
  },
  {
    value: "towering",
    label: "Towering / Utility pole height",
    description: "60+ feet tall",
  },
];

export const GIRTH_OPTIONS: SelectionOption<GirthHeuristic>[] = [
  {
    value: "fingers_wrap",
    label: "Fingers can wrap around it",
    description: "Very thin trunk - 2-4 inches",
  },
  {
    value: "paint_bucket",
    label: "Size of a paint bucket",
    description: "Medium trunk - 8-12 inches",
  },
  {
    value: "arms_wrap",
    label: "I can wrap my arms around it",
    description: "Large trunk - 18-24 inches",
  },
  {
    value: "two_people_hug",
    label: "Two people needed to hug it",
    description: "Very large trunk - 30+ inches",
  },
];

export const LOCATION_OPTIONS: SelectionOption<LocationType>[] = [
  {
    value: "front_yard",
    label: "Front Yard",
    description: "Visible from the street",
  },
  {
    value: "back_yard",
    label: "Backyard",
    description: "Behind the house",
  },
  {
    value: "side_yard",
    label: "Side Yard",
    description: "Along the side of property",
  },
];

export const HEALTH_OPTIONS: SelectionOption<HealthCondition>[] = [
  {
    value: "excellent",
    label: "Excellent",
    description: "Vibrant, no visible issues",
  },
  {
    value: "good",
    label: "Good",
    description: "Healthy with minor imperfections",
  },
  {
    value: "fair",
    label: "Fair",
    description: "Some dead branches or discoloration",
  },
  {
    value: "poor",
    label: "Poor",
    description: "Significant damage or disease visible",
  },
  {
    value: "critical",
    label: "Critical",
    description: "Major structural issues or dying",
  },
];

// ========================================
// Wizard Configuration
// ========================================

export const WIZARD_STEPS = [
  {
    id: 1,
    title: "Tree Type",
    description: "What kind of tree is it?",
    field: "species" as const,
  },
  {
    id: 2,
    title: "Height",
    description: "How tall is your tree?",
    field: "height" as const,
  },
  {
    id: 3,
    title: "Trunk Size",
    description: "How thick is the trunk?",
    field: "girth" as const,
  },
  {
    id: 4,
    title: "Location",
    description: "Where is the tree located?",
    field: "location" as const,
  },
  {
    id: 5,
    title: "Health",
    description: "Assess your tree's condition",
    field: "health" as const,
  },
  {
    id: 6,
    title: "Get Report",
    description: "Enter your email to receive your report",
    field: "email" as const,
  },
];
