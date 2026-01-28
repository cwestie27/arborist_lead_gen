import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { createAdminClient } from "@/lib/supabase/server";

// Force dynamic to prevent caching
export const dynamic = "force-dynamic";

// Partner URL mapping
const PARTNER_URLS: Record<string, string> = {
  arborist: "https://www.treesaregood.org/findanarborist",
  pruning: "https://www.homeadvisor.com/c.Tree-Trimming.html",
  removal: "https://www.homeadvisor.com/c.Tree-Removal.html",
  health: "https://www.treesaregood.org/treeowner/caringforyourtrees",
};

// Rate limiting store (in-memory for now, would use Redis in production)
const clickCounts = new Map<string, { count: number; resetAt: number }>();

// Rate limit configuration
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 10; // 10 clicks per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = clickCounts.get(ip);

  if (!record || now > record.resetAt) {
    clickCounts.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return true;
  }

  record.count++;
  return false;
}

// Bot detection patterns
const BOT_PATTERNS = [
  /googlebot/i,
  /bingbot/i,
  /yandexbot/i,
  /baiduspider/i,
  /facebookexternalhit/i,
  /twitterbot/i,
  /rogerbot/i,
  /linkedinbot/i,
  /embedly/i,
  /quora link preview/i,
  /showyoubot/i,
  /outbrain/i,
  /pinterest/i,
  /slackbot/i,
  /vkshare/i,
  /w3c_validator/i,
  /redditbot/i,
  /applebot/i,
  /whatsapp/i,
  /flipboard/i,
  /tumblr/i,
  /bitlybot/i,
  /skypeuripreview/i,
  /nuzzel/i,
  /discordbot/i,
  /qwantify/i,
  /pinterestbot/i,
  /bitrix link preview/i,
  /xing-contenttabreceiver/i,
  /chrome-lighthouse/i,
  /telegrambot/i,
];

function isBot(userAgent: string | null): boolean {
  if (!userAgent) return false;
  return BOT_PATTERNS.some((pattern) => pattern.test(userAgent));
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Get parameters
    const target = searchParams.get("target");
    const treeId = searchParams.get("tree_id");
    const userId = searchParams.get("uid");

    // Validate target
    if (!target || !PARTNER_URLS[target]) {
      // Default to arborist search if invalid target
      const fallbackUrl = PARTNER_URLS.arborist;
      return NextResponse.redirect(fallbackUrl, { status: 307 });
    }

    // Get request metadata
    const headersList = await headers();
    const userAgent = headersList.get("user-agent");
    const forwardedFor = headersList.get("x-forwarded-for");
    const realIp = headersList.get("x-real-ip");
    const ip = forwardedFor?.split(",")[0] || realIp || "unknown";

    // Skip tracking for bots
    if (isBot(userAgent)) {
      return NextResponse.redirect(PARTNER_URLS[target], { status: 307 });
    }

    // Check rate limit (but still redirect)
    const rateLimited = isRateLimited(ip);

    // Log click (only if not rate limited)
    if (!rateLimited) {
      // Save click to database
      try {
        const supabase = createAdminClient();
        await supabase.from('ad_clicks').insert({
          tree_id: treeId || null,
          user_id: userId || null,
          target_url: PARTNER_URLS[target],
          ip_address: ip,
          user_agent: userAgent,
        });
      } catch (dbError) {
        // Log but don't fail the redirect
        console.error("Failed to save click to database:", dbError);
      }

      // Also log to console for debugging
      console.log("Click tracked:", {
        target,
        treeId,
        userId,
        ip: ip.substring(0, 10) + "...", // Partial IP for privacy in logs
        userAgent: userAgent?.substring(0, 50),
        timestamp: new Date().toISOString(),
      });
    }

    // Get destination URL
    const destinationUrl = PARTNER_URLS[target];

    // Return redirect
    return NextResponse.redirect(destinationUrl, {
      status: 307, // Temporary redirect (preserves method)
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate",
        Pragma: "no-cache",
      },
    });
  } catch (error) {
    console.error("Redirect API error:", error);

    // On error, redirect to default URL
    return NextResponse.redirect(PARTNER_URLS.arborist, { status: 307 });
  }
}

// Inform about correct usage
export async function POST() {
  return NextResponse.json(
    {
      error: "Method not allowed",
      message: "Use GET with query parameters: target, tree_id, uid",
    },
    { status: 405 }
  );
}
