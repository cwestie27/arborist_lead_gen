import { NextRequest, NextResponse } from "next/server";
import { sendPropertyReportEmail } from "@/lib/email/resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      email,
      reportId,
      totalValue,
      treeCount,
      annualEcoValue,
      carbonLbsPerYear,
      stormwaterGallonsPerYear,
    } = body;

    // Validate required fields
    if (!email || !reportId) {
      return NextResponse.json(
        { error: "Email and reportId are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    const result = await sendPropertyReportEmail({
      to: email,
      reportId,
      totalValue: totalValue || 0,
      treeCount: treeCount || 1,
      annualEcoValue: annualEcoValue || 0,
      carbonLbsPerYear: carbonLbsPerYear || 0,
      stormwaterGallonsPerYear: stormwaterGallonsPerYear || 0,
    });

    if (!result.success) {
      // If email service not configured, return success with demo mode indicator
      if (result.error === "Email service not configured") {
        return NextResponse.json({
          success: true,
          demoMode: true,
          message: "Email service not configured - report saved but email not sent",
        });
      }
      return NextResponse.json(
        { error: result.error || "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Send property report email API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
