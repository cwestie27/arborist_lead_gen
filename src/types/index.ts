// ========================================
// TreeValue Pro Type Definitions
// ========================================

/**
 * Species categories for the wizard
 */
export type SpeciesCategory = "oak" | "maple" | "pine" | "fruit_tree" | "other";

/**
 * Height heuristic options
 */
export type HeightHeuristic =
  | "1_story"
  | "2_story"
  | "taller_2_story"
  | "towering";

/**
 * Girth heuristic options
 */
export type GirthHeuristic =
  | "fingers_wrap"
  | "paint_bucket"
  | "arms_wrap"
  | "two_people_hug";

/**
 * Location type for the tree
 */
export type LocationType = "front_yard" | "back_yard" | "side_yard";

/**
 * Wizard step data
 */
export interface WizardData {
  species: SpeciesCategory | null;
  height: HeightHeuristic | null;
  girth: GirthHeuristic | null;
  location: LocationType | null;
  email: string | null;
  zipCode: string | null;
}

/**
 * Tree valuation result
 */
export interface TreeValuation {
  structuralValue: number;
  ecoValue: {
    total: number;
    carbon: number;
    stormwater: number;
    energy: number;
  };
  totalValue: number;
  inputs: {
    dbhInches: number;
    heightFeet: number;
    speciesRating: number;
    regionalMultiplier: number;
  };
}

/**
 * Database tree record
 */
export interface TreeRecord {
  id: string;
  userId: string;
  speciesInput: SpeciesCategory;
  heightHeuristic: HeightHeuristic;
  girthHeuristic: GirthHeuristic;
  locationType: LocationType;
  calculatedValueStructural: number;
  calculatedValueEco: number;
  imageUrl: string | null;
  createdAt: string;
}

/**
 * User profile
 */
export interface UserProfile {
  id: string;
  email: string;
  zipCode: string | null;
  createdAt: string;
}

/**
 * Ad click record
 */
export interface AdClick {
  id: string;
  treeId: string;
  userId: string;
  targetUrl: string;
  clickedAt: string;
  ipAddress: string | null;
  userAgent: string | null;
}

/**
 * Wizard step configuration
 */
export interface WizardStep {
  id: number;
  title: string;
  description: string;
  field: keyof WizardData;
}

/**
 * Selection card option
 */
export interface SelectionOption<T extends string> {
  value: T;
  label: string;
  description: string;
  icon?: React.ReactNode;
}
