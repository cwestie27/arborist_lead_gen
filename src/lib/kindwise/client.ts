/**
 * Kindwise (plant.id) API Client
 * Handles tree identification and health assessment
 */

import type {
  KindwiseRequest,
  KindwiseResponse,
  KindwiseIdentification,
  KindwiseHealthAssessment,
} from "@/types";

const IDENTIFICATION_API_URL = "https://plant.id/api/v3/identification";
const HEALTH_API_URL = "https://plant.id/api/v3/health_assessment";

interface KindwiseClientConfig {
  apiKey: string;
}

/**
 * Call the Kindwise plant.id API for tree identification
 */
export async function identifyTree(
  images: string[],
  config: KindwiseClientConfig,
  options?: {
    latitude?: number;
    longitude?: number;
  }
): Promise<KindwiseResponse> {
  const { apiKey } = config;
  const { latitude, longitude } = options || {};

  // Build query params for identification details
  const params = new URLSearchParams();
  params.set("details", "common_names,taxonomy,description");

  const url = `${IDENTIFICATION_API_URL}?${params.toString()}`;

  // Build request body
  const body: KindwiseRequest = {
    images,
    similar_images: true,
  };

  if (latitude !== undefined && longitude !== undefined) {
    body.latitude = latitude;
    body.longitude = longitude;
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Api-Key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Kindwise API error: ${response.status} - ${errorText}`);
  }

  return response.json();
}

/**
 * Health assessment response structure (different from identification)
 */
interface HealthAssessmentResponse {
  result: {
    is_healthy: {
      binary: boolean;
      probability: number;
    };
    is_plant: {
      binary: boolean;
      probability: number;
    };
    disease: {
      suggestions: Array<{
        id: string;
        name: string;
        probability: number;
        similar_images?: Array<{ url: string }>;
        details?: {
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

/**
 * Call the Kindwise plant.id API for health assessment
 */
export async function assessTreeHealth(
  images: string[],
  config: KindwiseClientConfig,
  options?: {
    latitude?: number;
    longitude?: number;
  }
): Promise<HealthAssessmentResponse> {
  const { apiKey } = config;
  const { latitude, longitude } = options || {};

  // Build query params to request disease details
  const params = new URLSearchParams();
  params.set("details", "description,treatment");

  const url = `${HEALTH_API_URL}?${params.toString()}`;

  // Build request body
  const body: KindwiseRequest = {
    images,
    similar_images: true,
  };

  if (latitude !== undefined && longitude !== undefined) {
    body.latitude = latitude;
    body.longitude = longitude;
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Api-Key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Kindwise Health API error: ${response.status} - ${errorText}`);
  }

  return response.json();
}

/**
 * Parse identification results into our simplified format
 */
export function parseIdentificationResult(
  response: KindwiseResponse
): KindwiseIdentification | null {
  const suggestions = response.result?.classification?.suggestions;
  if (!suggestions || suggestions.length === 0) {
    return null;
  }

  const topMatch = suggestions[0];
  const details = topMatch.details;

  return {
    scientificName: topMatch.name,
    commonName: details?.common_names?.[0] || topMatch.name,
    probability: topMatch.probability,
    genus: details?.taxonomy?.genus || "",
    family: details?.taxonomy?.family || "",
    description: details?.description?.value,
    imageUrl: topMatch.similar_images?.[0]?.url,
  };
}

/**
 * Parse health assessment results into our simplified format
 */
export function parseHealthAssessment(
  response: HealthAssessmentResponse
): KindwiseHealthAssessment | null {
  const result = response.result;
  if (!result?.is_healthy) {
    return null;
  }

  const diseases = (result.disease?.suggestions || []).map((disease) => ({
    name: disease.name,
    probability: disease.probability,
    description: disease.details?.description,
    treatment: [
      ...(disease.details?.treatment?.prevention || []),
      ...(disease.details?.treatment?.biological || []),
      ...(disease.details?.treatment?.chemical || []),
    ].join(" "),
  }));

  return {
    isHealthy: result.is_healthy.binary,
    healthProbability: result.is_healthy.probability,
    diseases,
  };
}

/**
 * Map health assessment to condition rating
 */
export function healthToConditionRating(
  assessment: KindwiseHealthAssessment
): "excellent" | "good" | "fair" | "poor" | "critical" {
  const { isHealthy, healthProbability, diseases } = assessment;

  // Non-disease conditions to ignore (natural states, not actual problems)
  const nonDiseaseConditions = [
    "winter dormancy",
    "dormancy",
    "autumn colors",
    "fall colors",
    "seasonal change",
    "natural aging",
  ];

  // Filter to only actual diseases (exclude natural conditions)
  const actualDiseases = diseases.filter(
    (d) => !nonDiseaseConditions.some((condition) =>
      d.name.toLowerCase().includes(condition)
    )
  );

  // If tree is healthy with high confidence, prioritize that
  if (isHealthy && healthProbability > 0.8) {
    // Only downgrade if there's a severe ACTUAL disease
    const severeDisease = actualDiseases.find((d) => d.probability > 0.7);
    if (severeDisease) {
      return "poor"; // Downgrade but not critical since overall healthy
    }

    if (healthProbability > 0.9) {
      return "excellent";
    }
    return "good";
  }

  // Tree is not healthy - check disease severity
  const severeDisease = actualDiseases.find((d) => d.probability > 0.7);
  if (severeDisease) {
    return "critical";
  }

  const moderateDisease = actualDiseases.find((d) => d.probability > 0.4);
  if (moderateDisease) {
    return "poor";
  }

  // Based on overall health probability
  if (isHealthy && healthProbability > 0.7) {
    return "good";
  }
  if (healthProbability > 0.5) {
    return "fair";
  }

  return "poor";
}
