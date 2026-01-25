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
 * Health condition rating
 */
export type HealthCondition = "excellent" | "good" | "fair" | "poor" | "critical";

/**
 * Photo upload data
 */
export interface PhotoUpload {
  id: string;
  base64: string;
  fileName: string;
  mimeType: string;
  uploadedAt: string;
}

/**
 * Kindwise API identification result
 */
export interface KindwiseIdentification {
  scientificName: string;
  commonName: string;
  probability: number;
  genus: string;
  family: string;
  description?: string;
  imageUrl?: string;
}

/**
 * Kindwise API health assessment result
 */
export interface KindwiseHealthAssessment {
  isHealthy: boolean;
  healthProbability: number;
  diseases: Array<{
    name: string;
    probability: number;
    description?: string;
    treatment?: string;
  }>;
}

/**
 * Single tree data in the wizard
 */
export interface TreeData {
  id: string;
  nickname?: string;
  species: SpeciesCategory | null;
  customSpecies?: string; // From Kindwise identification
  identificationResult?: KindwiseIdentification;
  height: HeightHeuristic | null;
  girth: GirthHeuristic | null;
  location: LocationType | null;
  identificationPhotos: PhotoUpload[];
  healthPhotos: PhotoUpload[];
  healthAssessment?: KindwiseHealthAssessment;
  healthCondition: HealthCondition | null;
  valuation?: TreeValuation;
}

/**
 * Wizard step data - now supports multiple trees
 */
export interface WizardData {
  trees: TreeData[];
  currentTreeIndex: number;
  email: string | null;
  zipCode: string | null;
  propertyName?: string;
}

/**
 * Tree valuation result
 */
export interface TreeValuation {
  structuralValue: number;
  ecoValue: {
    total: number;
    carbon: number;
    carbonLbsPerYear: number; // Actual pounds of CO2 per year
    stormwater: number;
    stormwaterGallonsPerYear: number; // Actual gallons intercepted
    energy: number;
  };
  totalValue: number;
  inputs: {
    dbhInches: number;
    heightFeet: number;
    speciesRating: number;
    regionalMultiplier: number;
    conditionRating: number;
  };
}

/**
 * Property valuation summary
 */
export interface PropertyValuation {
  trees: Array<TreeData & { valuation: TreeValuation }>;
  totals: {
    structuralValue: number;
    annualEcoValue: number;
    carbonLbsPerYear: number;
    stormwaterGallonsPerYear: number;
    energySavings: number;
    treeCount: number;
  };
  email: string | null;
  zipCode: string | null;
  createdAt: string;
}

/**
 * Database tree record
 */
export interface TreeRecord {
  id: string;
  userId: string;
  propertyId: string;
  speciesInput: SpeciesCategory;
  customSpecies?: string;
  heightHeuristic: HeightHeuristic;
  girthHeuristic: GirthHeuristic;
  locationType: LocationType;
  healthCondition: HealthCondition;
  calculatedValueStructural: number;
  calculatedValueEco: number;
  carbonLbsPerYear: number;
  imageUrl: string | null;
  healthImageUrl: string | null;
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
  field: string;
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

/**
 * Kindwise API request
 */
export interface KindwiseRequest {
  images: string[]; // Base64 encoded images
  latitude?: number;
  longitude?: number;
  similar_images?: boolean;
}

/**
 * Kindwise API response
 */
export interface KindwiseResponse {
  access_token: string;
  result: {
    is_plant: {
      probability: number;
      binary: boolean;
    };
    classification: {
      suggestions: Array<{
        id: string;
        name: string;
        probability: number;
        similar_images?: Array<{
          id: string;
          url: string;
        }>;
        details?: {
          common_names?: string[];
          taxonomy?: {
            genus: string;
            family: string;
            order: string;
            class: string;
            phylum: string;
            kingdom: string;
          };
          description?: {
            value: string;
          };
        };
      }>;
    };
    health_assessment?: {
      is_healthy: {
        probability: number;
        binary: boolean;
      };
      diseases?: Array<{
        name: string;
        probability: number;
        disease_details?: {
          description?: string;
          treatment?: {
            prevention?: string[];
            biological?: string[];
            chemical?: string[];
          };
        };
      }>;
    };
  };
}
