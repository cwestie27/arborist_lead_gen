import { NextRequest, NextResponse } from "next/server";
import { saveReport } from "@/lib/reports";
import type { PropertyValuation } from "@/types";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const propertyValuation = body.propertyValuation as PropertyValuation;

    if (!propertyValuation || !propertyValuation.trees || !propertyValuation.totals) {
      return NextResponse.json(
        { error: "Invalid property valuation data" },
        { status: 400 }
      );
    }

    const { id, error } = await saveReport(propertyValuation);

    if (error || !id) {
      return NextResponse.json(
        { error: error || "Failed to save report" },
        { status: 500 }
      );
    }

    return NextResponse.json({ reportId: id });
  } catch (err) {
    console.error("Save report API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
