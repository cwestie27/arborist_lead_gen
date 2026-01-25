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

const KINDWISE_API_URL = "https://plant.id/api/v3/identification";

interface KindwiseClientConfig {
  apiKey: string;
}

/**
 * Call the Kindwise plant.id API for tree identification and health assessment
 */
export async function identifyTree(
  images: string[],
  config: KindwiseClientConfig,
  options?: {
    includeHealth?: boolean;
    latitude?: number;
    longitude?: number;
  }
): Promise<KindwiseResponse> {
  const { apiKey } = config;
  const { includeHealth = true, latitude, longitude } = options || {};

  // Build query params
  const params = new URLSearchParams();
  params.set("details", "common_names,taxonomy,description");
  if (includeHealth) {
    params.set("health", "all");
  }

  const url = `${KINDWISE_API_URL}?${params.toString()}`;

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
  response: KindwiseResponse
): KindwiseHealthAssessment | null {
  const healthAssessment = response.result?.health_assessment;
  if (!healthAssessment) {
    return null;
  }

  const diseases = (healthAssessment.diseases || []).map((disease) => ({
    name: disease.name,
    probability: disease.probability,
    description: disease.disease_details?.description,
    treatment: [
      ...(disease.disease_details?.treatment?.prevention || []),
      ...(disease.disease_details?.treatment?.biological || []),
      ...(disease.disease_details?.treatment?.chemical || []),
    ].join(" "),
  }));

  return {
    isHealthy: healthAssessment.is_healthy.binary,
    healthProbability: healthAssessment.is_healthy.probability,
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

  // Check for severe diseases
  const severeDisease = diseases.find((d) => d.probability > 0.7);
  if (severeDisease) {
    return "critical";
  }

  const moderateDisease = diseases.find((d) => d.probability > 0.4);
  if (moderateDisease) {
    return "poor";
  }

  // Based on overall health probability
  if (isHealthy && healthProbability > 0.9) {
    return "excellent";
  }
  if (isHealthy && healthProbability > 0.7) {
    return "good";
  }
  if (healthProbability > 0.5) {
    return "fair";
  }

  return "poor";
}
