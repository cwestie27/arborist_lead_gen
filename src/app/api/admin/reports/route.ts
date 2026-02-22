import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const supabase = createAdminClient();

    const { data: reports, error } = await supabase
      .from("reports")
      .select("email, zip_code, created_at, property_valuation")
      .order("created_at", { ascending: false })
      .limit(500);

    if (error) {
      console.error("Error fetching reports:", error);
      return NextResponse.json({ error: "Failed to fetch reports" }, { status: 500 });
    }

    return NextResponse.json({ reports: reports || [] });
  } catch (error) {
    console.error("Admin reports API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
