import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { createAdminClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { serviceType, email, treeValue, zipCode } = body as {
      serviceType: "arborist" | "tree_care_quote";
      email?: string;
      treeValue?: number;
      zipCode?: string;
    };

    if (!serviceType) {
      return NextResponse.json(
        { error: "Service type is required" },
        { status: 400 }
      );
    }

    // Get request metadata
    const headersList = await headers();
    const userAgent = headersList.get("user-agent");
    const forwardedFor = headersList.get("x-forwarded-for");
    const realIp = headersList.get("x-real-ip");
    const ip = forwardedFor?.split(",")[0] || realIp || "unknown";

    // Save to database
    const supabase = createAdminClient();

    const { error } = await supabase.from("service_interests").insert({
      service_type: serviceType,
      email: email || null,
      tree_value: treeValue || null,
      zip_code: zipCode || null,
      ip_address: ip,
      user_agent: userAgent,
    });

    if (error) {
      console.error("Failed to save service interest:", error);
      // Still return success to user - don't expose DB errors
    }

    console.log("Service interest recorded:", {
      serviceType,
      email: email ? `${email.substring(0, 3)}...` : null,
      treeValue,
      zipCode,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: serviceType === "arborist"
        ? "We'll help you find a certified arborist in your area."
        : "We'll connect you with tree care professionals for a quote.",
    });
  } catch (error) {
    console.error("Service interest API error:", error);
    return NextResponse.json(
      { error: "Failed to record interest" },
      { status: 500 }
    );
  }
}
