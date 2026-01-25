import { NextRequest, NextResponse } from "next/server";
import {
  identifyTree,
  parseIdentificationResult,
  parseHealthAssessment,
  healthToConditionRating,
} from "@/lib/kindwise/client";

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.KINDWISE_API_KEY;
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

    // Call Kindwise API
    const response = await identifyTree(validImages, { apiKey }, { includeHealth });

    // Parse results
    const identification = parseIdentificationResult(response);
    const healthAssessment = includeHealth
      ? parseHealthAssessment(response)
      : null;

    // Determine suggested condition if health assessment available
    const suggestedCondition = healthAssessment
      ? healthToConditionRating(healthAssessment)
      : null;

    return NextResponse.json({
      success: true,
      identification,
      healthAssessment,
      suggestedCondition,
      isPlant: response.result?.is_plant?.binary ?? false,
      plantProbability: response.result?.is_plant?.probability ?? 0,
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
