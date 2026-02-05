import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    const supabase = createAdminClient();

    // Search reports by email
    const { data: reports, error: reportsError } = await supabase
      .from("reports")
      .select("*")
      .ilike("email", `%${email}%`)
      .order("created_at", { ascending: false })
      .limit(10);

    if (reportsError) {
      console.error("Reports lookup error:", reportsError);
    }

    // Search service interests by email
    const { data: interests, error: interestsError } = await supabase
      .from("service_interests")
      .select("*")
      .ilike("email", `%${email}%`)
      .order("created_at", { ascending: false })
      .limit(10);

    if (interestsError) {
      console.error("Interests lookup error:", interestsError);
    }

    // Search analytics by properties containing email
    const { data: events, error: eventsError } = await supabase
      .from("analytics_events")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(100);

    // Filter events that might be related (by session or properties)
    const relatedSessions = new Set<string>();
    reports?.forEach(r => {
      // Try to find session from report timing
    });

    return NextResponse.json({
      email,
      reports: reports || [],
      serviceInterests: interests || [],
      totalReports: reports?.length || 0,
      totalInterests: interests?.length || 0,
    });
  } catch (error) {
    console.error("Lookup API error:", error);
    return NextResponse.json({ error: "Lookup failed" }, { status: 500 });
  }
}
