"use client";

import { useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  TreeDeciduous,
  CheckCircle,
  ArrowRight,
  Shield,
  Clock,
  Star,
  Scan,
} from "lucide-react";
import { Button } from "@/components/ui";
import { MetaEvents } from "@/components/MetaPixel";

function UTMTracker() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Store UTM params for attribution
    const utmSource = searchParams.get("utm_source");
    const utmCampaign = searchParams.get("utm_campaign");
    const utmContent = searchParams.get("utm_content");

    if (utmSource) {
      sessionStorage.setItem("utm_source", utmSource);
      sessionStorage.setItem("utm_campaign", utmCampaign || "");
      sessionStorage.setItem("utm_content", utmContent || "");
    }
  }, [searchParams]);

  return null;
}

function LandingPageContent() {
  // Track landing page view
  useEffect(() => {
    MetaEvents.viewContent("Facebook Landing Page");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-forest-50 to-white">
      {/* Minimal Header - No Navigation */}
      <header className="py-4 px-6">
        <div className="max-w-3xl mx-auto flex items-center justify-center">
          <div className="flex items-center gap-2">
            <TreeDeciduous className="w-6 h-6 text-forest-600" />
            <span className="font-heading text-lg font-semibold text-charcoal-900">
              Arbor Value
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section - Above the Fold */}
      <main className="px-6 py-8 md:py-12">
        <div className="max-w-3xl mx-auto text-center">
          {/* Social Proof Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            10,000+ Trees Valued This Month
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight mb-4">
            Your Backyard Tree Could Be Worth{" "}
            <span className="text-forest-600">$15,000+</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-charcoal-600 mb-8 max-w-2xl mx-auto">
            Find out your tree&apos;s exact replacement value in 60 seconds.
            Free instant report based on certified arborist methods.
          </p>

          {/* Primary CTA */}
          <Link href="/calculator">
            <Button
              size="lg"
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow"
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              Get My Free Tree Valuation
            </Button>
          </Link>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-6 text-sm text-charcoal-500">
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-forest-600" />
              100% Free
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-forest-600" />
              Takes 60 Seconds
            </div>
            <div className="flex items-center gap-1">
              <Shield className="w-4 h-4 text-forest-600" />
              No Credit Card
            </div>
          </div>

          {/* Health Risk Callout */}
          <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
            <Scan className="w-4 h-4" />
            <span>Plus: Free AI health assessment to spot disease &amp; hazards</span>
          </div>
        </div>

        {/* Value Preview Cards */}
        <div className="max-w-3xl mx-auto mt-12 md:mt-16">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-charcoal-100 text-center">
              <div className="text-3xl font-mono font-bold text-forest-700 mb-2">
                $5,000+
              </div>
              <p className="text-sm text-charcoal-600">
                Average young tree value
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-forest-700 rounded-xl p-6 shadow-md text-center text-white">
              <div className="text-3xl font-mono font-bold mb-2">
                $15,000+
              </div>
              <p className="text-sm text-forest-100">
                Average mature tree value
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-charcoal-100 text-center">
              <div className="text-3xl font-mono font-bold text-forest-700 mb-2">
                $50,000+
              </div>
              <p className="text-sm text-charcoal-600">
                Large heritage tree value
              </p>
            </div>
          </div>
        </div>

        {/* How It Works - Simple */}
        <div className="max-w-3xl mx-auto mt-12 md:mt-16">
          <h2 className="font-heading text-xl md:text-2xl font-semibold text-charcoal-900 text-center mb-8">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4 text-forest-700 font-bold text-xl">
                1
              </div>
              <h3 className="font-semibold text-charcoal-900 mb-2">
                Describe Your Tree
              </h3>
              <p className="text-sm text-charcoal-600">
                Answer 4 simple questions about size and type
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4 text-forest-700 font-bold text-xl">
                2
              </div>
              <h3 className="font-semibold text-charcoal-900 mb-2">
                Get Instant Value
              </h3>
              <p className="text-sm text-charcoal-600">
                See replacement cost + annual eco benefits
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4 text-forest-700 font-bold text-xl">
                3
              </div>
              <h3 className="font-semibold text-charcoal-900 mb-2">
                Get Your Report
              </h3>
              <p className="text-sm text-charcoal-600">
                Full valuation report sent to your email
              </p>
            </div>
          </div>
        </div>

        {/* Second CTA */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <Link href="/calculator">
            <Button
              size="lg"
              className="text-lg px-8 py-6 shadow-lg"
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              Calculate My Tree&apos;s Value Free
            </Button>
          </Link>
        </div>

        {/* Social Proof / Testimonials */}
        <div className="max-w-3xl mx-auto mt-12 md:mt-16">
          <div className="bg-cream rounded-xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-forest-200 rounded-full flex items-center justify-center">
                  <span className="text-forest-700 font-bold">JM</span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-charcoal-700 mb-2">
                  &ldquo;I had no idea my oak tree was worth over $18,000! The health
                  check also caught early signs of oak wilt I would have missed.
                  This could have saved me thousands in removal costs.&rdquo;
                </p>
                <p className="text-sm text-charcoal-500">
                  — Jennifer M., Virginia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Section */}
        <div className="max-w-3xl mx-auto mt-12 md:mt-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-charcoal-500">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-forest-600" />
              <span>Based on CTLA appraisal standards</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-charcoal-300" />
            <div className="flex items-center gap-2">
              <TreeDeciduous className="w-5 h-5 text-forest-600" />
              <span>i-Tree ecosystem formulas</span>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-3xl mx-auto mt-12 md:mt-16 mb-8">
          <div className="bg-forest-700 rounded-2xl p-8 md:p-10 text-center text-white">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Don&apos;t Leave Money on the Table
            </h2>
            <p className="text-forest-100 mb-6 max-w-lg mx-auto">
              Most homeowners have no idea what their trees are worth—or when
              they&apos;re at risk. Get your free valuation and health check now.
            </p>
            <Link href="/calculator">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-forest-700 hover:bg-forest-50 text-lg px-8 py-6"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Get My Free Valuation
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="py-6 px-6 border-t border-charcoal-100">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-charcoal-500">
          <p>&copy; {new Date().getFullYear()} Arbor Value</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-charcoal-700">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-charcoal-700">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function FacebookLandingPage() {
  return (
    <>
      <Suspense fallback={null}>
        <UTMTracker />
      </Suspense>
      <LandingPageContent />
    </>
  );
}
