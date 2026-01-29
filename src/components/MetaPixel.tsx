"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const PIXEL_ID = "886836400756092";

// Declare fbq for TypeScript
declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
    _fbq: (...args: unknown[]) => void;
  }
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
export const MetaEvents = {
  // Standard events
  pageView: () => trackMetaEvent("PageView"),
  viewContent: (contentName?: string) =>
    trackMetaEvent("ViewContent", { content_name: contentName }),
  lead: (value?: number) =>
    trackMetaEvent("Lead", value ? { value, currency: "USD" } : undefined),
  completeRegistration: (value?: number) =>
    trackMetaEvent("CompleteRegistration", value ? { value, currency: "USD" } : undefined),

  // Custom events for our funnel
  wizardStarted: () => trackMetaCustomEvent("WizardStarted"),
  wizardStepCompleted: (step: string) =>
    trackMetaCustomEvent("WizardStepCompleted", { step }),
  emailCaptured: () => trackMetaCustomEvent("EmailCaptured"),
  valuationCompleted: (structuralValue: number, ecoValue: number) =>
    trackMetaCustomEvent("ValuationCompleted", {
      structural_value: structuralValue,
      eco_value: ecoValue,
      total_value: structuralValue + ecoValue,
    }),
  reportViewed: () => trackMetaCustomEvent("ReportViewed"),
  affiliateClicked: (target: string) =>
    trackMetaCustomEvent("AffiliateClicked", { target }),
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
