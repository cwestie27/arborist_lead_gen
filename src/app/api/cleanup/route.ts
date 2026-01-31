import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

// Secret key to protect the cleanup endpoint
const CLEANUP_SECRET = process.env.CLEANUP_SECRET || process.env.CRON_SECRET;

/**
 * Cleanup expired reports and old analytics data
 *
 * This endpoint should be called by a cron job (e.g., Vercel Cron, GitHub Actions)
 * Protected by a secret key in the Authorization header
 *
 * Vercel Cron config (add to vercel.json):
 * {
 *   "crons": [{
 *     "path": "/api/cleanup",
 *     "schedule": "0 3 * * *"
 *   }]
 * }
 */
export async function POST(request: NextRequest) {
  try {
    // Verify authorization
    const authHeader = request.headers.get("authorization");
    const providedSecret = authHeader?.replace("Bearer ", "");

    if (!CLEANUP_SECRET) {
      console.warn("CLEANUP_SECRET not configured - cleanup endpoint disabled");
      return NextResponse.json(
        { error: "Cleanup not configured" },
        { status: 503 }
      );
    }

    if (providedSecret !== CLEANUP_SECRET) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const supabase = createAdminClient();
    const now = new Date().toISOString();
    const results: Record<string, number> = {};

    // 1. Delete expired reports (past expires_at date)
    const { data: expiredReports, error: reportsError } = await supabase
      .from("reports")
      .delete()
      .lt("expires_at", now)
      .select("id");

    if (reportsError) {
      console.error("Error deleting expired reports:", reportsError);
    } else {
      results.expiredReports = expiredReports?.length || 0;
    }

    // 2. Delete old analytics events (older than 90 days)
    const ninetyDaysAgo = new Date();
    ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);

    const { data: oldAnalytics, error: analyticsError } = await supabase
      .from("analytics_events")
      .delete()
      .lt("created_at", ninetyDaysAgo.toISOString())
      .select("id");

    if (analyticsError) {
      console.error("Error deleting old analytics:", analyticsError);
    } else {
      results.oldAnalyticsEvents = oldAnalytics?.length || 0;
    }

    // 3. Delete old ad clicks (older than 180 days)
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setDate(sixMonthsAgo.getDate() - 180);

    const { data: oldClicks, error: clicksError } = await supabase
      .from("ad_clicks")
      .delete()
      .lt("clicked_at", sixMonthsAgo.toISOString())
      .select("id");

    if (clicksError) {
      console.error("Error deleting old ad clicks:", clicksError);
    } else {
      results.oldAdClicks = oldClicks?.length || 0;
    }

    console.log("Cleanup completed:", results);

    return NextResponse.json({
      success: true,
      cleaned: results,
      timestamp: now,
    });
  } catch (error) {
    console.error("Cleanup error:", error);
    return NextResponse.json(
      { error: "Cleanup failed" },
      { status: 500 }
    );
  }
}

// GET endpoint for health checks
export async function GET() {
  return NextResponse.json({
    status: "ok",
    endpoint: "cleanup",
    description: "POST with Authorization: Bearer <CLEANUP_SECRET> to run cleanup",
  });
}
