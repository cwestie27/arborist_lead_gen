"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  TreeDeciduous,
  Leaf,
  Droplets,
  Zap,
  ArrowRight,
  Share2,
  ExternalLink,
} from "lucide-react";
import { Button, Card, CardContent } from "@/components/ui";
import { formatCurrency } from "@/lib/utils";
import type { TreeValuation } from "@/types";

// Generate tracked affiliate link
function getTrackedLink(target: string, treeId: string): string {
  const params = new URLSearchParams({
    target,
    tree_id: treeId,
  });
  return `/api/redirect?${params.toString()}`;
}

// Mock data for demo - in production this would fetch from database
function getMockValuation(id: string): TreeValuation & { speciesName: string } {
  // Generate consistent mock data based on ID
  const seed = id.split("").reduce((a, b) => a + b.charCodeAt(0), 0);
  const structuralValue = 8000 + (seed % 20000);
  const ecoTotal = 400 + (seed % 800);
  const carbonLbs = 200 + (seed % 300);
  const stormwaterGallons = 1500 + (seed % 2000);

  return {
    structuralValue,
    ecoValue: {
      carbon: Math.round(ecoTotal * 0.35),
      carbonLbsPerYear: carbonLbs,
      stormwater: Math.round(ecoTotal * 0.4),
      stormwaterGallonsPerYear: stormwaterGallons,
      energy: Math.round(ecoTotal * 0.25),
      total: ecoTotal,
    },
    totalValue: structuralValue + ecoTotal * 10,
    inputs: {
      dbhInches: 18 + (seed % 20),
      heightFeet: 35 + (seed % 30),
      speciesRating: 0.7 + (seed % 30) / 100,
      regionalMultiplier: 85 + (seed % 40),
      conditionRating: 0.8,
    },
    speciesName: ["Oak", "Maple", "Pine", "Spruce", "Birch"][seed % 5],
  };
}

export default function ReportPage() {
  const params = useParams();
  const id = params.id as string;
  const [shareSuccess, setShareSuccess] = useState(false);

  // Compute valuation synchronously using useMemo (avoids setState in effect)
  const valuation = useMemo(() => getMockValuation(id), [id]);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: `My ${valuation.speciesName} Tree is Worth ${formatCurrency(valuation.structuralValue)}!`,
          text: "I just discovered my tree's value using TreeValue Pro!",
          url,
        });
      } catch {
        // User cancelled or share failed
      }
    } else {
      // Fallback to clipboard
      await navigator.clipboard.writeText(url);
      setShareSuccess(true);
      setTimeout(() => setShareSuccess(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-forest-700 text-white">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-forest-600 rounded-full text-sm font-medium mb-6">
            <TreeDeciduous className="w-4 h-4" />
            Tree Valuation Report
          </div>

          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            This {valuation.speciesName} is Worth
          </h1>

          <div className="font-mono text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            {formatCurrency(valuation.structuralValue)}
          </div>

          <p className="text-forest-100 text-lg mb-6">
            Replacement value based on CTLA Trunk Formula Method
          </p>

          <Button
            variant="secondary"
            leftIcon={<Share2 className="w-4 h-4" />}
            onClick={handleShare}
          >
            {shareSuccess ? "Link Copied!" : "Share This Report"}
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Eco Value Card */}
        <Card className="mb-8 overflow-hidden">
          <div className="bg-earth-50 p-6 border-b border-earth-100">
            <h2 className="font-heading text-xl font-semibold text-charcoal-900">
              Annual Ecosystem Benefits
            </h2>
            <p className="text-charcoal-600 text-sm mt-1">
              This tree provides these free services every year
            </p>
          </div>
          <CardContent className="p-0">
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-charcoal-100">
              {/* Carbon */}
              <div className="p-6 text-center">
                <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Leaf className="w-6 h-6 text-forest-600" />
                </div>
                <p className="text-sm text-charcoal-500 mb-1">
                  Carbon Sequestration
                </p>
                <p className="font-mono text-2xl font-bold text-forest-700">
                  {formatCurrency(valuation.ecoValue.carbon)}/yr
                </p>
              </div>

              {/* Stormwater */}
              <div className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Droplets className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-sm text-charcoal-500 mb-1">
                  Stormwater Management
                </p>
                <p className="font-mono text-2xl font-bold text-blue-700">
                  {formatCurrency(valuation.ecoValue.stormwater)}/yr
                </p>
              </div>

              {/* Energy */}
              <div className="p-6 text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-amber-600" />
                </div>
                <p className="text-sm text-charcoal-500 mb-1">Energy Savings</p>
                <p className="font-mono text-2xl font-bold text-amber-700">
                  {formatCurrency(valuation.ecoValue.energy)}/yr
                </p>
              </div>
            </div>

            {/* Total Eco Value */}
            <div className="bg-earth-50 p-6 border-t border-earth-100">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-charcoal-700">
                  Total Annual Value
                </span>
                <span className="font-mono text-2xl font-bold text-earth-700">
                  {formatCurrency(valuation.ecoValue.total)}/yr
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Calculation Details */}
        <Card className="mb-8">
          <CardContent>
            <h2 className="font-heading text-lg font-semibold text-charcoal-900 mb-4">
              Calculation Details
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-charcoal-500">Estimated DBH</p>
                <p className="font-semibold text-charcoal-800">
                  {valuation.inputs.dbhInches}&quot;
                </p>
              </div>
              <div>
                <p className="text-charcoal-500">Estimated Height</p>
                <p className="font-semibold text-charcoal-800">
                  {valuation.inputs.heightFeet} ft
                </p>
              </div>
              <div>
                <p className="text-charcoal-500">Species Rating</p>
                <p className="font-semibold text-charcoal-800">
                  {(valuation.inputs.speciesRating * 100).toFixed(0)}%
                </p>
              </div>
              <div>
                <p className="text-charcoal-500">Regional Rate</p>
                <p className="font-semibold text-charcoal-800">
                  ${valuation.inputs.regionalMultiplier}/in²
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="bg-forest-50 border-forest-200">
          <CardContent>
            <div className="text-center">
              <h2 className="font-heading text-xl font-semibold text-charcoal-900 mb-2">
                Protect This {formatCurrency(valuation.structuralValue)} Asset
              </h2>
              <p className="text-charcoal-600 mb-6">
                Regular professional care keeps trees healthy and maintains
                their value
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={getTrackedLink("arborist", id)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    rightIcon={<ExternalLink className="w-4 h-4" />}
                  >
                    Find a Certified Arborist
                  </Button>
                </a>

                <a
                  href={getTrackedLink("pruning", id)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="secondary"
                    size="lg"
                    rightIcon={<ExternalLink className="w-4 h-4" />}
                  >
                    Get Tree Care Quote
                  </Button>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Calculate Your Own CTA */}
        <div className="mt-12 text-center">
          <p className="text-charcoal-600 mb-4">
            Want to know what your trees are worth?
          </p>
          <Link href="/calculator">
            <Button size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Calculate Your Tree&apos;s Value
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-charcoal-900 text-charcoal-400 py-8 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center text-sm">
          <p className="mb-2">
            Valuations are estimates based on the CTLA Trunk Formula Method and
            i-Tree ecosystem algorithms.
          </p>
          <p>
            For official appraisals, please consult a certified arborist in your
            area.
          </p>
        </div>
      </footer>
    </div>
  );
}
