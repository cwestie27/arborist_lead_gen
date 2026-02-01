import { NextRequest, NextResponse } from "next/server";
import {
  identifyTree,
  assessTreeHealth,
  parseIdentificationResult,
  parseHealthAssessment,
  healthToConditionRating,
} from "@/lib/kindwise/client";

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.Kindwise_API_Key;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Kindwise API key not configured" },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { images, includeHealth = true } = body as {
      images: string[];
      includeHealth?: boolean;
    };

    if (!images || !Array.isArray(images) || images.length === 0) {
      return NextResponse.json(
        { error: "At least one image is required" },
        { status: 400 }
      );
    }

    // Validate base64 images
    const validImages = images.filter((img) => {
      return typeof img === "string" && img.length > 100;
    });

    if (validImages.length === 0) {
      return NextResponse.json(
        { error: "No valid images provided" },
        { status: 400 }
      );
    }

    // Call Kindwise identification API
    const identificationResponse = await identifyTree(validImages, { apiKey });
    const identification = parseIdentificationResult(identificationResponse);

    // Call health assessment API separately if requested
    let healthAssessment = null;
    let suggestedCondition = null;

    if (includeHealth) {
      try {
        const healthResponse = await assessTreeHealth(validImages, { apiKey });
        healthAssessment = parseHealthAssessment(healthResponse);
        if (healthAssessment) {
          suggestedCondition = healthToConditionRating(healthAssessment);
          console.log("Health assessment:", {
            isHealthy: healthAssessment.isHealthy,
            probability: healthAssessment.healthProbability,
            diseases: healthAssessment.diseases.map(d => ({ name: d.name, prob: d.probability })),
            suggestedCondition,
          });
        }
      } catch (healthError) {
        // Health assessment failed but identification succeeded - continue
        console.error("Health assessment error:", healthError);
      }
    }

    return NextResponse.json({
      success: true,
      identification,
      healthAssessment,
      suggestedCondition,
      isPlant: identificationResponse.result?.is_plant?.binary ?? false,
      plantProbability: identificationResponse.result?.is_plant?.probability ?? 0,
    });
  } catch (error) {
    console.error("Identification error:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Identification failed",
      },
      { status: 500 }
    );
  }
}
