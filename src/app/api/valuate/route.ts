import { NextRequest, NextResponse } from "next/server";
import { calculateTreeValue } from "@/lib/valuation";
import type {
  SpeciesCategory,
  HeightHeuristic,
  GirthHeuristic,
} from "@/types";

// Force dynamic to prevent caching
export const dynamic = "force-dynamic";

// Valid input values
const VALID_SPECIES: SpeciesCategory[] = [
  "oak",
  "maple",
  "pine",
  "fruit_tree",
  "other",
];
const VALID_HEIGHTS: HeightHeuristic[] = [
  "1_story",
  "2_story",
  "taller_2_story",
  "towering",
];
const VALID_GIRTHS: GirthHeuristic[] = [
  "fingers_wrap",
  "paint_bucket",
  "arms_wrap",
  "two_people_hug",
];

interface ValuateRequest {
  species: SpeciesCategory;
  height: HeightHeuristic;
  girth: GirthHeuristic;
  zipCode?: string;
  email?: string;
}

interface ValidationError {
  field: string;
  message: string;
}

function validateRequest(body: unknown): {
  valid: boolean;
  data?: ValuateRequest;
  errors?: ValidationError[];
} {
  const errors: ValidationError[] = [];

  if (!body || typeof body !== "object") {
    return {
      valid: false,
      errors: [{ field: "body", message: "Request body must be a JSON object" }],
    };
  }

  const data = body as Record<string, unknown>;

  // Validate species
  if (!data.species) {
    errors.push({ field: "species", message: "Species is required" });
  } else if (!VALID_SPECIES.includes(data.species as SpeciesCategory)) {
    errors.push({
      field: "species",
      message: `Invalid species. Must be one of: ${VALID_SPECIES.join(", ")}`,
    });
  }

  // Validate height
  if (!data.height) {
    errors.push({ field: "height", message: "Height is required" });
  } else if (!VALID_HEIGHTS.includes(data.height as HeightHeuristic)) {
    errors.push({
      field: "height",
      message: `Invalid height. Must be one of: ${VALID_HEIGHTS.join(", ")}`,
    });
  }

  // Validate girth
  if (!data.girth) {
    errors.push({ field: "girth", message: "Girth is required" });
  } else if (!VALID_GIRTHS.includes(data.girth as GirthHeuristic)) {
    errors.push({
      field: "girth",
      message: `Invalid girth. Must be one of: ${VALID_GIRTHS.join(", ")}`,
    });
  }

  // Validate optional zipCode
  if (data.zipCode !== undefined && typeof data.zipCode !== "string") {
    errors.push({
      field: "zipCode",
      message: "Zip code must be a string",
    });
  }

  // Validate optional email
  if (data.email !== undefined) {
    if (typeof data.email !== "string") {
      errors.push({
        field: "email",
        message: "Email must be a string",
      });
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.push({
        field: "email",
        message: "Invalid email format",
      });
    }
  }

  if (errors.length > 0) {
    return { valid: false, errors };
  }

  return {
    valid: true,
    data: {
      species: data.species as SpeciesCategory,
      height: data.height as HeightHeuristic,
      girth: data.girth as GirthHeuristic,
      zipCode: data.zipCode as string | undefined,
      email: data.email as string | undefined,
    },
  };
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          error: "Invalid JSON",
          message: "Request body must be valid JSON",
        },
        { status: 400 }
      );
    }

    // Validate request
    const validation = validateRequest(body);
    if (!validation.valid) {
      return NextResponse.json(
        {
          error: "Validation failed",
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    const { species, height, girth, zipCode } = validation.data!;

    // Calculate tree value
    const valuation = calculateTreeValue({
      species,
      height,
      girth,
      zipCode,
    });

    // TODO: In production, save to database and send email
    // const supabase = createAdminClient();
    // await supabase.from('trees').insert({ ... });

    return NextResponse.json({
      success: true,
      valuation: {
        structuralValue: valuation.structuralValue,
        ecoValue: valuation.ecoValue,
        totalValue: valuation.totalValue,
        inputs: valuation.inputs,
      },
    });
  } catch (error) {
    console.error("Valuation API error:", error);

    return NextResponse.json(
      {
        error: "Internal server error",
        message: "An unexpected error occurred",
      },
      { status: 500 }
    );
  }
}

// Handle other methods
export async function GET() {
  return NextResponse.json(
    {
      error: "Method not allowed",
      message: "Use POST to calculate tree value",
    },
    { status: 405 }
  );
}
