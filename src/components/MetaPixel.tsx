"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const PIXEL_ID = "789674546740065";

// Session ID for analytics tracking
let sessionId: string | null = null;
function getSessionId(): string {
  if (typeof window === "undefined") return "";
  if (!sessionId) {
    sessionId = sessionStorage.getItem("analytics_session_id");
    if (!sessionId) {
      sessionId = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
      sessionStorage.setItem("analytics_session_id", sessionId);
    }
  }
  return sessionId;
}

// Declare fbq for TypeScript
declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
    _fbq: (...args: unknown[]) => void;
  }
}

/**
 * Track to our own analytics API
 */
function trackToDatabase(eventName: string, properties?: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  // Fire and forget - don't block UI
  fetch("/api/analytics", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      event: eventName,
      properties,
      sessionId: getSessionId(),
    }),
  }).catch(() => {
    // Silently fail - analytics shouldn't break the app
  });
}

/**
 * Track Meta Pixel standard events
 */
export function trackMetaEvent(
  eventName: string,
  params?: Record<string, unknown>
) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, params);
  }
}

/**
 * Track Meta Pixel custom events
 */
export function trackMetaCustomEvent(
  eventName: string,
  params?: Record<string, unknown>
) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("trackCustom", eventName, params);
  }
}

// Pre-defined event helpers for the conversion funnel
// Tracks to both Meta Pixel AND our own database
export const MetaEvents = {
  // Standard events
  pageView: () => {
    trackMetaEvent("PageView");
    trackToDatabase("page_view");
  },
  viewContent: (contentName?: string) => {
    trackMetaEvent("ViewContent", { content_name: contentName });
    trackToDatabase("view_content", { content_name: contentName });
  },
  lead: (value?: number) => {
    trackMetaEvent("Lead", value ? { value, currency: "USD" } : undefined);
    trackToDatabase("lead", { value });
  },
  completeRegistration: (value?: number) => {
    trackMetaEvent("CompleteRegistration", value ? { value, currency: "USD" } : undefined);
    trackToDatabase("complete_registration", { value });
  },

  // Custom events for our funnel
  wizardStarted: () => {
    trackMetaCustomEvent("WizardStarted");
    trackToDatabase("wizard_started");
  },
  wizardStepCompleted: (step: string) => {
    trackMetaCustomEvent("WizardStepCompleted", { step });
    trackToDatabase("wizard_step_completed", { step });
  },
  emailCaptured: () => {
    trackMetaCustomEvent("EmailCaptured");
    trackToDatabase("email_captured");
  },
  valuationCompleted: (structuralValue: number, ecoValue: number) => {
    trackMetaCustomEvent("ValuationCompleted", {
      structural_value: structuralValue,
      eco_value: ecoValue,
      total_value: structuralValue + ecoValue,
    });
    trackToDatabase("valuation_completed", {
      structural_value: structuralValue,
      eco_value: ecoValue,
      total_value: structuralValue + ecoValue,
    });
  },
  reportViewed: () => {
    trackMetaCustomEvent("ReportViewed");
    trackToDatabase("report_viewed");
  },
  affiliateClicked: (target: string) => {
    trackMetaCustomEvent("AffiliateClicked", { target });
    trackToDatabase("affiliate_clicked", { target });
  },
};

/**
 * Meta Pixel component - add to root layout
 */
export function MetaPixel() {
  const pathname = usePathname();

  // Track page views on route change
  useEffect(() => {
    if (window.fbq) {
      window.fbq("track", "PageView");
    }
  }, [pathname]);

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
