import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { createAdminClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

interface AnalyticsPayload {
  event: string;
  properties?: Record<string, unknown>;
  sessionId?: string;
  userId?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: AnalyticsPayload = await request.json();

    // Validate required fields
    if (!body.event) {
      return NextResponse.json(
        { error: "Event type is required" },
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
    try {
      const supabase = createAdminClient();
      await supabase.from("analytics_events").insert({
        event_type: body.event,
        properties: body.properties || {},
        session_id: body.sessionId,
        user_id: body.userId,
        ip_address: ip,
        user_agent: userAgent,
      });
    } catch (dbError) {
      // Log but don't fail - analytics shouldn't break user experience
      console.error("Failed to save analytics event:", dbError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Analytics API error:", error);
    return NextResponse.json({ success: false }, { status: 200 }); // Return 200 to not retry
  }
}

// GET endpoint for fetching analytics (admin only)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const days = parseInt(searchParams.get("days") || "7", 10);
    const eventType = searchParams.get("event");

    const supabase = createAdminClient();

    // Calculate date range
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    // Build query
    let query = supabase
      .from("analytics_events")
      .select("*")
      .gte("created_at", startDate.toISOString())
      .order("created_at", { ascending: false })
      .limit(1000);

    if (eventType) {
      query = query.eq("event_type", eventType);
    }

    const { data, error } = await query;

    if (error) {
      throw error;
    }

    // Aggregate metrics
    const events = data || [];
    const metrics = {
      total: events.length,
      byEvent: {} as Record<string, number>,
      byDay: {} as Record<string, number>,
      uniqueSessions: new Set(events.map((e) => e.session_id).filter(Boolean)).size,
    };

    events.forEach((event) => {
      // Count by event type
      metrics.byEvent[event.event_type] = (metrics.byEvent[event.event_type] || 0) + 1;

      // Count by day
      const day = new Date(event.created_at).toISOString().split("T")[0];
      metrics.byDay[day] = (metrics.byDay[day] || 0) + 1;
    });

    return NextResponse.json({ events, metrics });
  } catch (error) {
    console.error("Analytics GET error:", error);
    return NextResponse.json(
      { error: "Failed to fetch analytics" },
      { status: 500 }
    );
  }
}
