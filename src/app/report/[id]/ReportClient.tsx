"use client";

import { useState } from "react";
import Link from "next/link";
import {
  TreeDeciduous,
  Leaf,
  Droplets,
  Zap,
  ArrowRight,
  Share2,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Heart,
  Wind,
} from "lucide-react";
import { Button, Card, CardContent, TreeInfoCard } from "@/components/ui";
import { formatCurrency } from "@/lib/utils";
import { getTreeInfo } from "@/lib/tree-database";
import type { TreeSpeciesInfo } from "@/lib/tree-database";
import type { PropertyValuation, TreeData, TreeValuation } from "@/types";

// Generate tracked affiliate link
function getTrackedLink(target: string, reportId: string, email: string | null): string {
  const params = new URLSearchParams({
    target,
    report_id: reportId,
    ...(email && { uid: email }),
  });
  return `/api/redirect?${params.toString()}`;
}

// Get display name for a tree
function getTreeDisplayName(tree: TreeData, index: number): string {
  if (tree.nickname) return tree.nickname;
  if (tree.customSpecies) return tree.customSpecies;
  if (tree.identificationResult) return tree.identificationResult.commonName;
  if (tree.species && tree.species !== "other") {
    return tree.species.charAt(0).toUpperCase() + tree.species.slice(1).replace("_", " ");
  }
  return `Tree ${index + 1}`;
}

// Look up tree species info from database
function getTreeSpeciesInfo(tree: TreeData): TreeSpeciesInfo | null {
  if (tree.identificationResult?.scientificName) {
    const info = getTreeInfo(tree.identificationResult.scientificName);
    if (info) return info;
  }
  if (tree.identificationResult?.commonName) {
    const info = getTreeInfo(tree.identificationResult.commonName);
    if (info) return info;
  }
  if (tree.customSpecies) {
    const info = getTreeInfo(tree.customSpecies);
    if (info) return info;
  }
  if (tree.species && tree.species !== "other") {
    const info = getTreeInfo(tree.species);
    if (info) return info;
  }
  return null;
}

// Tree card component
function TreeCard({
  tree,
  index,
  isExpanded,
  onToggle,
  treeInfo,
}: {
  tree: TreeData & { valuation?: TreeValuation };
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
  treeInfo: TreeSpeciesInfo | null;
}) {
  const name = getTreeDisplayName(tree, index);
  const healthCondition = tree.healthCondition || "good";
  const healthColor = {
    excellent: "text-green-600",
    good: "text-blue-600",
    fair: "text-yellow-600",
    poor: "text-orange-600",
    critical: "text-red-600",
  }[healthCondition];

  // Safe valuation access with defaults
  const defaultValuation = {
    structuralValue: 0,
    ecoValue: { total: 0, carbonLbsPerYear: 0, stormwaterGallonsPerYear: 0 },
    inputs: { dbhInches: 0, heightFeet: 0 },
  };
  const valuation = tree.valuation ?? defaultValuation;

  return (
    <div className="space-y-3">
      <Card className="overflow-hidden">
        <button
          onClick={onToggle}
          className="w-full p-4 flex items-center justify-between hover:bg-charcoal-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-forest-100 rounded-full flex items-center justify-center">
              <TreeDeciduous className="w-5 h-5 text-forest-600" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-charcoal-900">{name}</p>
              <p className={`text-sm ${healthColor}`}>
                {healthCondition.charAt(0).toUpperCase()}
                {healthCondition.slice(1)} condition
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-lg font-bold text-forest-700">
              {formatCurrency(valuation.structuralValue)}
            </span>
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-charcoal-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-charcoal-400" />
            )}
          </div>
        </button>

        {isExpanded && (
          <CardContent className="pt-0 border-t border-charcoal-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 text-sm">
              <div>
                <p className="text-charcoal-500">DBH</p>
                <p className="font-semibold">{valuation.inputs?.dbhInches ?? "—"}&quot;</p>
              </div>
              <div>
                <p className="text-charcoal-500">Height</p>
                <p className="font-semibold">{valuation.inputs?.heightFeet ?? "—"} ft</p>
              </div>
              <div>
                <p className="text-charcoal-500">Carbon/yr</p>
                <p className="font-semibold">{valuation.ecoValue?.carbonLbsPerYear ?? 0} lbs</p>
              </div>
              <div>
                <p className="text-charcoal-500">Stormwater/yr</p>
                <p className="font-semibold">{valuation.ecoValue?.stormwaterGallonsPerYear ?? 0} gal</p>
              </div>
            </div>

            {tree.healthAssessment && tree.healthAssessment.diseases.length > 0 && (
              <div className="py-3 border-t border-charcoal-100">
                <p className="text-sm font-medium text-orange-700 mb-2">Detected Issues:</p>
                <ul className="text-sm text-charcoal-600 space-y-1">
                  {tree.healthAssessment.diseases
                    .filter((d) => d.probability > 0.2)
                    .slice(0, 2)
                    .map((disease, i) => (
                      <li key={i}>
                        {disease.name} ({(disease.probability * 100).toFixed(0)}%)
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </CardContent>
        )}
      </Card>

      {/* Tree Species Information */}
      {isExpanded && treeInfo && <TreeInfoCard treeInfo={treeInfo} />}
    </div>
  );
}

interface ReportClientProps {
  data: PropertyValuation;
  reportId: string;
}

export function ReportClient({ data, reportId }: ReportClientProps) {
  const [shareSuccess, setShareSuccess] = useState(false);
  const [expandedTrees, setExpandedTrees] = useState<Set<number>>(new Set());

  // Safely extract data with defaults for missing fields
  const trees = data?.trees || [];
  const rawTotals = data?.totals as Record<string, unknown> | undefined;
  const totals = {
    treeCount: (rawTotals?.treeCount as number) ?? trees.length ?? 0,
    structuralValue: (rawTotals?.structuralValue as number) ?? 0,
    annualEcoValue: (rawTotals?.annualEcoValue as number) ?? (rawTotals?.ecoValue as number) ?? 0,
    carbonLbsPerYear: (rawTotals?.carbonLbsPerYear as number) ?? 0,
    stormwaterGallonsPerYear: (rawTotals?.stormwaterGallonsPerYear as number) ?? 0,
    energySavings: (rawTotals?.energySavings as number) ?? 0,
  };
  const hasMultipleTrees = trees.length > 1;

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: hasMultipleTrees
            ? `My ${totals.treeCount} Trees are Worth ${formatCurrency(totals.structuralValue)}!`
            : `My Tree is Worth ${formatCurrency(totals.structuralValue)}!`,
          text: "I just discovered my tree's value using TreeValue Pro!",
          url,
        });
      } catch {
        // User cancelled or share failed
      }
    } else {
      await navigator.clipboard.writeText(url);
      setShareSuccess(true);
      setTimeout(() => setShareSuccess(false), 2000);
    }
  };

  const toggleTree = (index: number) => {
    setExpandedTrees((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-forest-700 text-white">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-forest-600 rounded-full text-sm font-medium mb-6">
            <TreeDeciduous className="w-4 h-4" />
            Your Property Tree Report
          </div>

          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {hasMultipleTrees
              ? `Your ${totals.treeCount} Trees are Worth`
              : "Your Tree is Worth"}
          </h1>

          <div className="font-mono text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            {formatCurrency(totals.structuralValue)}
          </div>

          <p className="text-forest-100 text-lg mb-6">
            Total replacement value based on CTLA Trunk Formula Method
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
        {/* Eco Impact Summary */}
        <Card className="mb-8 overflow-hidden">
          <div className="bg-earth-50 p-6 border-b border-earth-100">
            <h2 className="font-heading text-xl font-semibold text-charcoal-900">
              Annual Ecosystem Impact
            </h2>
            <p className="text-charcoal-600 text-sm mt-1">
              Your trees provide these free environmental services every year
            </p>
          </div>
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-charcoal-100">
              {/* Carbon */}
              <div className="p-6 text-center">
                <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Leaf className="w-6 h-6 text-forest-600" />
                </div>
                <p className="text-sm text-charcoal-500 mb-1">Carbon Captured</p>
                <p className="font-mono text-2xl font-bold text-forest-700">
                  {totals.carbonLbsPerYear.toLocaleString()}
                </p>
                <p className="text-sm text-charcoal-500">lbs CO2/year</p>
              </div>

              {/* Stormwater */}
              <div className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Droplets className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-sm text-charcoal-500 mb-1">Stormwater Managed</p>
                <p className="font-mono text-2xl font-bold text-blue-700">
                  {totals.stormwaterGallonsPerYear.toLocaleString()}
                </p>
                <p className="text-sm text-charcoal-500">gallons/year</p>
              </div>

              {/* Energy */}
              <div className="p-6 text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-amber-600" />
                </div>
                <p className="text-sm text-charcoal-500 mb-1">Energy Savings</p>
                <p className="font-mono text-2xl font-bold text-amber-700">
                  {formatCurrency(totals.energySavings)}
                </p>
                <p className="text-sm text-charcoal-500">per year</p>
              </div>

              {/* Total Value */}
              <div className="p-6 text-center bg-earth-50">
                <div className="w-12 h-12 bg-earth-200 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Wind className="w-6 h-6 text-earth-700" />
                </div>
                <p className="text-sm text-charcoal-500 mb-1">Total Eco Value</p>
                <p className="font-mono text-2xl font-bold text-earth-700">
                  {formatCurrency(totals.annualEcoValue)}
                </p>
                <p className="text-sm text-charcoal-500">per year</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Environmental Context */}
        <Card className="mb-8">
          <CardContent>
            <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-4">
              What This Means for the Environment
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-start gap-3 p-3 bg-forest-50 rounded-lg">
                <Leaf className="w-5 h-5 text-forest-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-charcoal-800">
                    {Math.round(totals.carbonLbsPerYear / 8887).toLocaleString() || "< 1"} car trips
                  </p>
                  <p className="text-charcoal-600">
                    equivalent CO2 offset per year
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                <Droplets className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-charcoal-800">
                    {Math.round(totals.stormwaterGallonsPerYear / 100).toLocaleString()} bathtubs
                  </p>
                  <p className="text-charcoal-600">
                    of stormwater filtered annually
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
                <Heart className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-charcoal-800">Cleaner air</p>
                  <p className="text-charcoal-600">
                    Filters pollutants and produces oxygen
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Individual Trees */}
        {trees.length > 0 && (
          <div className="mb-8">
            <h2 className="font-heading text-xl font-semibold text-charcoal-900 mb-4">
              {hasMultipleTrees ? "Your Trees" : "Tree Details"}
            </h2>
            <div className="space-y-3">
              {trees.map((tree, index) => (
                <TreeCard
                  key={tree.id}
                  tree={tree}
                  index={index}
                  isExpanded={expandedTrees.has(index)}
                  onToggle={() => toggleTree(index)}
                  treeInfo={getTreeSpeciesInfo(tree)}
                />
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <Card className="bg-forest-50 border-forest-200">
          <CardContent>
            <div className="text-center">
              <h2 className="font-heading text-xl font-semibold text-charcoal-900 mb-2">
                Protect Your {formatCurrency(totals.structuralValue)} Asset
              </h2>
              <p className="text-charcoal-600 mb-6">
                Regular professional care keeps your trees healthy and maintains
                their value
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={getTrackedLink("arborist", reportId, data.email)}
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
                  href={getTrackedLink("pruning", reportId, data.email)}
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
            Want to assess more trees?
          </p>
          <Link href="/calculator">
            <Button size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Start New Assessment
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
          <p className="mb-4">
            For official appraisals, please consult a certified arborist in your
            area.
          </p>
          <p className="text-charcoal-500 text-xs">
            Report ID: {reportId.slice(0, 8)} | Valid for 90 days
          </p>
        </div>
      </footer>
    </div>
  );
}
