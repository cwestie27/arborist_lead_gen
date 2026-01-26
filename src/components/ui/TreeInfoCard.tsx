"use client";

import { useState } from "react";
import {
  MapPin,
  Sun,
  Droplets,
  Wind,
  Bug,
  Heart,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  Leaf,
  TreeDeciduous,
  AlertTriangle,
  Scissors,
  Globe,
} from "lucide-react";
import { Card, CardContent } from "./card";
import type { TreeSpeciesInfo } from "@/lib/tree-database";

interface TreeInfoCardProps {
  treeInfo: TreeSpeciesInfo;
}

export function TreeInfoCard({ treeInfo }: TreeInfoCardProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>("benefits");

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const Section = ({
    id,
    title,
    icon: Icon,
    iconColor,
    children,
  }: {
    id: string;
    title: string;
    icon: React.ElementType;
    iconColor: string;
    children: React.ReactNode;
  }) => {
    const isExpanded = expandedSection === id;
    return (
      <div className="border-b border-charcoal-100 last:border-b-0">
        <button
          onClick={() => toggleSection(id)}
          className="w-full flex items-center justify-between p-4 hover:bg-charcoal-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${iconColor}`}>
              <Icon className="w-4 h-4" />
            </div>
            <span className="font-medium text-charcoal-900">{title}</span>
          </div>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-charcoal-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-charcoal-400" />
          )}
        </button>
        {isExpanded && <div className="px-4 pb-4">{children}</div>}
      </div>
    );
  };

  return (
    <Card className="overflow-hidden">
      {/* Header */}
      <div className="bg-forest-50 p-6 border-b border-forest-100">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <TreeDeciduous className="w-7 h-7 text-forest-600" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-heading text-xl font-semibold text-charcoal-900">
              {treeInfo.commonNames[0]}
            </h3>
            <p className="text-sm text-charcoal-500 italic">{treeInfo.scientificName}</p>
            <p className="text-sm text-forest-600 mt-1">{treeInfo.family} family</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
          <div className="bg-white rounded-lg p-3 text-center">
            <p className="text-xs text-charcoal-500">Height</p>
            <p className="text-sm font-semibold text-charcoal-800">{treeInfo.characteristics.matureHeight}</p>
          </div>
          <div className="bg-white rounded-lg p-3 text-center">
            <p className="text-xs text-charcoal-500">Lifespan</p>
            <p className="text-sm font-semibold text-charcoal-800">{treeInfo.characteristics.lifespan}</p>
          </div>
          <div className="bg-white rounded-lg p-3 text-center">
            <p className="text-xs text-charcoal-500">Growth Rate</p>
            <p className="text-sm font-semibold text-charcoal-800">{treeInfo.characteristics.growthRate.split(" ")[0]}</p>
          </div>
          <div className="bg-white rounded-lg p-3 text-center">
            <p className="text-xs text-charcoal-500">USDA Zones</p>
            <p className="text-sm font-semibold text-charcoal-800">{treeInfo.climate.usdaZones}</p>
          </div>
        </div>
      </div>

      <CardContent className="p-0">
        {/* Origin & Range */}
        <Section id="origin" title="Origin & Native Range" icon={Globe} iconColor="bg-blue-100 text-blue-600">
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-charcoal-800">Origin: {treeInfo.origin}</p>
                <p className="text-charcoal-600 mt-1">{treeInfo.nativeRange}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Sun className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
              <p className="text-charcoal-600">{treeInfo.climate.description}</p>
            </div>
          </div>
        </Section>

        {/* Benefits */}
        <Section id="benefits" title="Benefits of This Tree" icon={Heart} iconColor="bg-green-100 text-green-600">
          <ul className="space-y-2 text-sm">
            {treeInfo.benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-2">
                <Leaf className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-charcoal-700">{benefit}</span>
              </li>
            ))}
          </ul>
          {treeInfo.wildlife.length > 0 && (
            <div className="mt-4 pt-4 border-t border-charcoal-100">
              <p className="text-sm font-medium text-charcoal-800 mb-2">Wildlife Value:</p>
              <ul className="space-y-1 text-sm text-charcoal-600">
                {treeInfo.wildlife.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          )}
        </Section>

        {/* Common Issues */}
        <Section id="issues" title="Common Issues to Watch" icon={Bug} iconColor="bg-orange-100 text-orange-600">
          <div className="space-y-4 text-sm">
            {/* Diseases */}
            <div>
              <p className="font-medium text-charcoal-800 mb-2">Diseases:</p>
              <div className="space-y-2">
                {treeInfo.commonIssues.diseases.map((disease, i) => (
                  <div key={i} className="flex items-start gap-2 p-2 bg-charcoal-50 rounded-lg">
                    <AlertTriangle
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        disease.severity === "high"
                          ? "text-red-500"
                          : disease.severity === "moderate"
                          ? "text-orange-500"
                          : "text-yellow-500"
                      }`}
                    />
                    <div>
                      <span className="font-medium text-charcoal-800">{disease.name}</span>
                      <span
                        className={`ml-2 text-xs px-1.5 py-0.5 rounded ${
                          disease.severity === "high"
                            ? "bg-red-100 text-red-700"
                            : disease.severity === "moderate"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {disease.severity}
                      </span>
                      <p className="text-charcoal-600 mt-1">{disease.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pests */}
            <div>
              <p className="font-medium text-charcoal-800 mb-2">Pests:</p>
              <div className="space-y-2">
                {treeInfo.commonIssues.pests.map((pest, i) => (
                  <div key={i} className="flex items-start gap-2 p-2 bg-charcoal-50 rounded-lg">
                    <Bug
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        pest.severity === "high"
                          ? "text-red-500"
                          : pest.severity === "moderate"
                          ? "text-orange-500"
                          : "text-yellow-500"
                      }`}
                    />
                    <div>
                      <span className="font-medium text-charcoal-800">{pest.name}</span>
                      <span
                        className={`ml-2 text-xs px-1.5 py-0.5 rounded ${
                          pest.severity === "high"
                            ? "bg-red-100 text-red-700"
                            : pest.severity === "moderate"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {pest.severity}
                      </span>
                      <p className="text-charcoal-600 mt-1">{pest.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Environmental */}
            {treeInfo.commonIssues.environmental.length > 0 && (
              <div>
                <p className="font-medium text-charcoal-800 mb-2">Environmental Sensitivities:</p>
                <ul className="space-y-1 text-charcoal-600">
                  {treeInfo.commonIssues.environmental.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Section>

        {/* Care Notes */}
        <Section id="care" title="Care Recommendations" icon={Scissors} iconColor="bg-purple-100 text-purple-600">
          <div className="grid gap-3 text-sm">
            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
              <Droplets className="w-5 h-5 text-blue-500 flex-shrink-0" />
              <div>
                <p className="font-medium text-charcoal-800">Water</p>
                <p className="text-charcoal-600">{treeInfo.careNotes.water}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
              <Sun className="w-5 h-5 text-amber-500 flex-shrink-0" />
              <div>
                <p className="font-medium text-charcoal-800">Sunlight</p>
                <p className="text-charcoal-600">{treeInfo.careNotes.sunlight}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-earth-50 rounded-lg">
              <Wind className="w-5 h-5 text-earth-500 flex-shrink-0" />
              <div>
                <p className="font-medium text-charcoal-800">Soil</p>
                <p className="text-charcoal-600">{treeInfo.careNotes.soil}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
              <Scissors className="w-5 h-5 text-green-500 flex-shrink-0" />
              <div>
                <p className="font-medium text-charcoal-800">Pruning</p>
                <p className="text-charcoal-600">{treeInfo.careNotes.pruning}</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Fun Facts */}
        <Section id="facts" title="Did You Know?" icon={Lightbulb} iconColor="bg-yellow-100 text-yellow-600">
          <ul className="space-y-2 text-sm">
            {treeInfo.funFacts.map((fact, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-yellow-500">✨</span>
                <span className="text-charcoal-700">{fact}</span>
              </li>
            ))}
          </ul>
        </Section>
      </CardContent>
    </Card>
  );
}
