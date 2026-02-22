/**
 * Analytics event tracking for Arbor Value
 *
 * Tracks user journey through the wizard, conversions, and affiliate clicks.
 * Events are stored in Supabase for dashboard reporting.
 */

// Event types for the conversion funnel
export type AnalyticsEventType =
  | "page_view"
  | "wizard_started"
  | "wizard_step_completed"
  | "wizard_abandoned"
  | "email_captured"
  | "valuation_completed"
  | "report_viewed"
  | "report_shared"
  | "affiliate_clicked"
  | "user_signup"
  | "user_login";

export interface AnalyticsEvent {
  event: AnalyticsEventType;
  properties?: Record<string, unknown>;
  sessionId?: string;
  userId?: string;
}

// Generate a session ID for anonymous tracking
function getSessionId(): string {
  if (typeof window === "undefined") return "";

  let sessionId = sessionStorage.getItem("tv_session_id");
  if (!sessionId) {
    sessionId = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    sessionStorage.setItem("tv_session_id", sessionId);
  }
  return sessionId;
}

// Get or create an anonymous ID for cross-session tracking
function getAnonymousId(): string {
  if (typeof window === "undefined") return "";

  let anonId = localStorage.getItem("tv_anon_id");
  if (!anonId) {
    anonId = `anon_${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
    localStorage.setItem("tv_anon_id", anonId);
  }
  return anonId;
}

/**
 * Track an analytics event
 */
export async function track(
  event: AnalyticsEventType,
  properties?: Record<string, unknown>
): Promise<void> {
  const payload: AnalyticsEvent = {
    event,
    properties: {
      ...properties,
      url: typeof window !== "undefined" ? window.location.pathname : undefined,
      referrer: typeof document !== "undefined" ? document.referrer : undefined,
      timestamp: new Date().toISOString(),
    },
    sessionId: getSessionId(),
  };

  // Add anonymous ID for cross-session tracking
  const anonId = getAnonymousId();
  if (anonId) {
    payload.properties = { ...payload.properties, anonymousId: anonId };
  }

  // Send to API endpoint
  try {
    await fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    // Fail silently - don't break user experience for analytics
    console.debug("Analytics tracking failed:", error);
  }
}

/**
 * Track page view
 */
export function trackPageView(pageName?: string): void {
  track("page_view", { page: pageName || window.location.pathname });
}

/**
 * Track wizard start
 */
export function trackWizardStarted(): void {
  track("wizard_started");
}

/**
 * Track wizard step completion
 */
export function trackWizardStep(step: string, data?: Record<string, unknown>): void {
  track("wizard_step_completed", { step, ...data });
}

/**
 * Track wizard abandonment
 */
export function trackWizardAbandoned(lastStep: string): void {
  track("wizard_abandoned", { lastStep });
}

/**
 * Track email capture
 */
export function trackEmailCaptured(hashedEmail?: string): void {
  track("email_captured", { hashedEmail });
}

/**
 * Track valuation completion
 */
export function trackValuationCompleted(data: {
  species: string;
  structuralValue: number;
  ecoValue: number;
}): void {
  track("valuation_completed", data);
}

/**
 * Track report view
 */
export function trackReportViewed(reportId: string): void {
  track("report_viewed", { reportId });
}

/**
 * Track affiliate click
 */
export function trackAffiliateClicked(target: string): void {
  track("affiliate_clicked", { target });
}

// Export a default analytics object for convenience
const analytics = {
  track,
  trackPageView,
  trackWizardStarted,
  trackWizardStep,
  trackWizardAbandoned,
  trackEmailCaptured,
  trackValuationCompleted,
  trackReportViewed,
  trackAffiliateClicked,
};

export default analytics;
