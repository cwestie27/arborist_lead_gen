import { NextRequest, NextResponse } from "next/server";
import { sendTreeReportEmail } from "@/lib/email/resend";

export const dynamic = "force-dynamic";

interface SendReportRequest {
  email: string;
  treeId: string;
  structuralValue: number;
  ecoValue: number;
  speciesName: string;
}

export async function POST(request: NextRequest) {
  try {
    // Check for API key
    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY not configured, email not sent");
      return NextResponse.json({
        success: true,
        message: "Email delivery skipped (no API key configured)",
        demo: true,
      });
    }

    // Parse request body
    let body: SendReportRequest;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON body" },
        { status: 400 }
      );
    }

    // Validate required fields
    const { email, treeId, structuralValue, ecoValue, speciesName } = body;

    if (!email || !treeId || !structuralValue || !speciesName) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Send email
    const result = await sendTreeReportEmail({
      to: email,
      treeId,
      structuralValue,
      ecoValue: ecoValue || 0,
      speciesName,
    });

    if (!result.success) {
      return NextResponse.json(
        { error: "Failed to send email", message: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Report email sent successfully",
    });
  } catch (error) {
    console.error("Send report error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
