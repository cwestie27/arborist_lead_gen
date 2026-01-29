"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const COOKIE_CONSENT_KEY = "treevalue-cookie-consent";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({
      essential: true,
      analytics: true,
      timestamp: new Date().toISOString()
    }));
    setShowBanner(false);
  };

  const acceptEssential = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({
      essential: true,
      analytics: false,
      timestamp: new Date().toISOString()
    }));
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-charcoal-900 border-t border-charcoal-700 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-charcoal-200 text-sm text-center sm:text-left">
          <p>
            We use cookies to improve your experience and analyze site usage.{" "}
            <Link href="/privacy" className="text-forest-400 hover:text-forest-300 underline">
              Learn more
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={acceptEssential}
            className="px-4 py-2 text-sm text-charcoal-300 hover:text-white border border-charcoal-600 rounded-lg transition-colors"
          >
            Essential Only
          </button>
          <button
            onClick={acceptAll}
            className="px-4 py-2 text-sm bg-forest-600 hover:bg-forest-700 text-white rounded-lg transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
