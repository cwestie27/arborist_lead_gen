"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Mail,
  MapPin,
  TreeDeciduous,
  DollarSign,
  AlertTriangle,
  Leaf,
  Droplets,
  CheckCircle,
  Clock,
  Smartphone,
  Calendar,
  Ruler,
  Heart,
} from "lucide-react";
import { Button, Card, CardContent } from "@/components/ui";
import { formatCurrency } from "@/lib/utils";

interface LeadDetail {
  email: string;
  reports: Array<{
    id: string;
    email: string;
    zip_code: string;
    created_at: string;
    property_valuation: {
      address?: string;
      zipCode?: string;
      trees: Array<{
        id: string;
        species?: string;
        customSpecies?: string;
        height?: string;
        girth?: string;
        location?: string;
        healthCondition?: string;
        identificationPhotos?: Array<{ base64: string; fileName: string }>;
        healthPhotos?: Array<{ base64: string; fileName: string }>;
        identificationResult?: {
          commonName: string;
          scientificName: string;
          probability: number;
        };
        healthAssessment?: {
          isHealthy: boolean;
          healthProbability: number;
          diseases?: Array<{ name: string; probability: number }>;
        };
        valuation?: {
          structuralValue: number;
          ecoValue: {
            total: number;
            carbonLbsPerYear: number;
            stormwaterGallonsPerYear: number;
          };
          inputs: {
            dbhInches: number;
            heightFeet: number;
          };
        };
      }>;
      totals: {
        structuralValue: number;
        annualEcoValue: number;
        carbonLbsPerYear: number;
        stormwaterGallonsPerYear: number;
        treeCount: number;
      };
    };
  }>;
  serviceInterests: Array<{
    id: string;
    service_type: string;
    created_at: string;
    tree_value: number;
    user_agent?: string;
  }>;
}

function formatHeight(height: string | undefined): string {
  const map: Record<string, string> = {
    "1_story": "1 story (~15 ft)",
    "2_story": "2 story (~25 ft)",
    "taller_2_story": "Taller than 2 story (~40 ft)",
    "towering": "Towering (~60+ ft)",
  };
  return map[height || ""] || height || "Unknown";
}

function formatGirth(girth: string | undefined): string {
  const map: Record<string, string> = {
    "fingers_wrap": "Fingers wrap (~3\" DBH)",
    "paint_bucket": "Paint bucket (~8\" DBH)",
    "arms_wrap": "Arms wrap (~18\" DBH)",
    "two_people_hug": "Two people hug (~36\" DBH)",
  };
  return map[girth || ""] || girth || "Unknown";
}

function getDeviceInfo(userAgent: string | undefined): string {
  if (!userAgent) return "Unknown";
  if (userAgent.includes("FB_IAB")) return "Facebook App";
  if (userAgent.includes("Instagram")) return "Instagram App";
  if (userAgent.includes("iPhone")) return "iPhone";
  if (userAgent.includes("Android")) return "Android";
  if (userAgent.includes("Windows")) return "Windows";
  if (userAgent.includes("Mac")) return "Mac";
  return "Web Browser";
}

export default function LeadDetailPage() {
  const params = useParams();
  const email = decodeURIComponent(params.email as string);
  const [data, setData] = useState<LeadDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLead() {
      try {
        const res = await fetch(`/api/admin/lookup?email=${encodeURIComponent(email)}`);
        if (!res.ok) throw new Error("Failed to fetch lead");
        const result = await res.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load lead");
      } finally {
        setLoading(false);
      }
    }
    fetchLead();
  }, [email]);

  if (loading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="animate-pulse text-charcoal-600">Loading lead details...</div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="text-center py-8">
            <AlertTriangle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
            <p className="text-charcoal-700">{error || "Lead not found"}</p>
            <Link href="/admin/leads" className="mt-4 inline-block">
              <Button variant="secondary">Back to Leads</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const report = data.reports[0];
  const pv = report?.property_valuation;
  const interests = data.serviceInterests;

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-white border-b border-charcoal-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link
            href="/admin/leads"
            className="inline-flex items-center gap-2 text-charcoal-500 hover:text-charcoal-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Leads
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-heading text-2xl font-bold text-charcoal-900">{email}</h1>
              {pv?.address && (
                <p className="text-charcoal-600 flex items-center gap-2 mt-1">
                  <MapPin className="w-4 h-4" />
                  {pv.address}, {pv.zipCode || report?.zip_code}
                </p>
              )}
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold font-mono text-forest-700">
                {formatCurrency(pv?.totals?.structuralValue || 0)}
              </p>
              <p className="text-sm text-charcoal-500">Total Tree Value</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8 space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="py-4 text-center">
              <TreeDeciduous className="w-6 h-6 text-forest-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-charcoal-900">{pv?.totals?.treeCount || 0}</p>
              <p className="text-xs text-charcoal-500">Trees</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="py-4 text-center">
              <Leaf className="w-6 h-6 text-forest-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-charcoal-900">
                {(pv?.totals?.carbonLbsPerYear || 0).toLocaleString()}
              </p>
              <p className="text-xs text-charcoal-500">lbs CO2/yr</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="py-4 text-center">
              <Droplets className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-charcoal-900">
                {(pv?.totals?.stormwaterGallonsPerYear || 0).toLocaleString()}
              </p>
              <p className="text-xs text-charcoal-500">gal/yr</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="py-4 text-center">
              <DollarSign className="w-6 h-6 text-amber-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-charcoal-900">
                {formatCurrency(pv?.totals?.annualEcoValue || 0)}
              </p>
              <p className="text-xs text-charcoal-500">Eco Value/yr</p>
            </CardContent>
          </Card>
        </div>

        {/* Engagement Timeline */}
        {interests.length > 0 && (
          <Card>
            <CardContent>
              <h2 className="font-heading text-lg font-semibold text-charcoal-900 mb-4">
                Engagement Timeline
              </h2>
              <div className="space-y-3">
                {report && (
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 bg-forest-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-forest-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-charcoal-800">Completed Valuation</p>
                      <p className="text-charcoal-500">
                        {new Date(report.created_at).toLocaleString()}
                      </p>
                    </div>
                  </div>
                )}
                {interests.map((interest) => (
                  <div key={interest.id} className="flex items-center gap-3 text-sm">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      interest.service_type === "arborist"
                        ? "bg-blue-100"
                        : "bg-green-100"
                    }`}>
                      {interest.service_type === "arborist" ? (
                        <TreeDeciduous className="w-4 h-4 text-blue-600" />
                      ) : (
                        <DollarSign className="w-4 h-4 text-green-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-charcoal-800">
                        {interest.service_type === "arborist"
                          ? "Clicked \"Find Arborist\""
                          : "Clicked \"Get Quote\""}
                      </p>
                      <p className="text-charcoal-500">
                        {new Date(interest.created_at).toLocaleString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-charcoal-400">
                      <Smartphone className="w-3 h-3" />
                      {getDeviceInfo(interest.user_agent)}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Trees */}
        {pv?.trees?.map((tree, index) => (
          <Card key={tree.id}>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-heading text-lg font-semibold text-charcoal-900">
                  Tree {index + 1}: {tree.identificationResult?.commonName || tree.customSpecies || tree.species || "Unknown"}
                </h2>
                <span className="font-mono text-xl font-bold text-forest-700">
                  {formatCurrency(tree.valuation?.structuralValue || 0)}
                </span>
              </div>

              {/* Tree Photos */}
              {((tree.identificationPhotos && tree.identificationPhotos.length > 0) ||
                (tree.healthPhotos && tree.healthPhotos.length > 0)) && (
                <div className="mb-4">
                  <p className="text-sm font-medium text-charcoal-700 mb-2">Photos</p>
                  <div className="flex gap-2 flex-wrap">
                    {tree.identificationPhotos?.map((photo, i) => (
                      <div key={`id-${i}`} className="relative">
                        <Image
                          src={photo.base64.startsWith("data:") ? photo.base64 : `data:image/jpeg;base64,${photo.base64}`}
                          alt={`Tree ${index + 1} identification photo ${i + 1}`}
                          width={120}
                          height={120}
                          className="rounded-lg object-cover w-[120px] h-[120px]"
                        />
                        <span className="absolute bottom-1 left-1 bg-black/60 text-white text-xs px-1 rounded">
                          ID
                        </span>
                      </div>
                    ))}
                    {tree.healthPhotos?.map((photo, i) => (
                      <div key={`health-${i}`} className="relative">
                        <Image
                          src={photo.base64.startsWith("data:") ? photo.base64 : `data:image/jpeg;base64,${photo.base64}`}
                          alt={`Tree ${index + 1} health photo ${i + 1}`}
                          width={120}
                          height={120}
                          className="rounded-lg object-cover w-[120px] h-[120px]"
                        />
                        <span className="absolute bottom-1 left-1 bg-black/60 text-white text-xs px-1 rounded">
                          Health
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tree Details Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-charcoal-500 flex items-center gap-1">
                    <TreeDeciduous className="w-3 h-3" /> Species
                  </p>
                  <p className="font-medium text-charcoal-800">
                    {tree.identificationResult?.commonName || tree.customSpecies || tree.species || "Unknown"}
                  </p>
                  {tree.identificationResult?.scientificName && (
                    <p className="text-xs text-charcoal-400 italic">
                      {tree.identificationResult.scientificName}
                    </p>
                  )}
                </div>
                <div>
                  <p className="text-charcoal-500 flex items-center gap-1">
                    <Ruler className="w-3 h-3" /> Height
                  </p>
                  <p className="font-medium text-charcoal-800">{formatHeight(tree.height)}</p>
                  {tree.valuation?.inputs?.heightFeet && (
                    <p className="text-xs text-charcoal-400">{tree.valuation.inputs.heightFeet} ft</p>
                  )}
                </div>
                <div>
                  <p className="text-charcoal-500 flex items-center gap-1">
                    <Ruler className="w-3 h-3" /> Girth
                  </p>
                  <p className="font-medium text-charcoal-800">{formatGirth(tree.girth)}</p>
                  {tree.valuation?.inputs?.dbhInches && (
                    <p className="text-xs text-charcoal-400">{tree.valuation.inputs.dbhInches}" DBH</p>
                  )}
                </div>
                <div>
                  <p className="text-charcoal-500 flex items-center gap-1">
                    <Heart className="w-3 h-3" /> Condition
                  </p>
                  <p className={`font-medium ${
                    tree.healthCondition === "excellent" || tree.healthCondition === "good"
                      ? "text-green-600"
                      : tree.healthCondition === "fair"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}>
                    {tree.healthCondition?.charAt(0).toUpperCase()}{tree.healthCondition?.slice(1) || "Unknown"}
                  </p>
                </div>
              </div>

              {/* Health Assessment */}
              {tree.healthAssessment && (
                <div className="mt-4 pt-4 border-t border-charcoal-100">
                  <p className="text-sm font-medium text-charcoal-700 mb-2">AI Health Assessment</p>
                  <div className="flex items-center gap-2">
                    {tree.healthAssessment.isHealthy ? (
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                        <CheckCircle className="w-3 h-3" />
                        Healthy ({(tree.healthAssessment.healthProbability * 100).toFixed(0)}%)
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs">
                        <AlertTriangle className="w-3 h-3" />
                        Issues Detected
                      </span>
                    )}
                  </div>
                  {tree.healthAssessment.diseases && tree.healthAssessment.diseases.length > 0 && (
                    <div className="mt-2 text-sm text-charcoal-600">
                      <p className="font-medium text-amber-700">Detected Issues:</p>
                      <ul className="list-disc list-inside">
                        {tree.healthAssessment.diseases.slice(0, 3).map((d, i) => (
                          <li key={i}>
                            {d.name} ({(d.probability * 100).toFixed(0)}%)
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Eco Impact */}
              {tree.valuation?.ecoValue && (
                <div className="mt-4 pt-4 border-t border-charcoal-100 grid grid-cols-3 gap-4 text-sm text-center">
                  <div>
                    <p className="font-mono font-bold text-forest-700">
                      {tree.valuation.ecoValue.carbonLbsPerYear?.toLocaleString() || 0}
                    </p>
                    <p className="text-xs text-charcoal-500">lbs CO2/yr</p>
                  </div>
                  <div>
                    <p className="font-mono font-bold text-blue-700">
                      {tree.valuation.ecoValue.stormwaterGallonsPerYear?.toLocaleString() || 0}
                    </p>
                    <p className="text-xs text-charcoal-500">gal stormwater/yr</p>
                  </div>
                  <div>
                    <p className="font-mono font-bold text-amber-700">
                      {formatCurrency(tree.valuation.ecoValue.total || 0)}
                    </p>
                    <p className="text-xs text-charcoal-500">eco value/yr</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}

        {/* Actions */}
        <Card className="bg-forest-50 border-forest-200">
          <CardContent>
            <h2 className="font-heading text-lg font-semibold text-charcoal-900 mb-4">
              Actions
            </h2>
            <div className="flex flex-wrap gap-3">
              <a href={`mailto:${email}`}>
                <Button leftIcon={<Mail className="w-4 h-4" />}>
                  Email Lead
                </Button>
              </a>
              {report && (
                <Link href={`/report/${report.id}`} target="_blank">
                  <Button variant="secondary">
                    View Public Report
                  </Button>
                </Link>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Metadata */}
        <Card>
          <CardContent>
            <h2 className="font-heading text-lg font-semibold text-charcoal-900 mb-4">
              Lead Metadata
            </h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-charcoal-500">Report ID</p>
                <p className="font-mono text-xs text-charcoal-700">{report?.id || "N/A"}</p>
              </div>
              <div>
                <p className="text-charcoal-500">Created</p>
                <p className="text-charcoal-700">
                  {report ? new Date(report.created_at).toLocaleString() : "N/A"}
                </p>
              </div>
              <div>
                <p className="text-charcoal-500">Zip Code</p>
                <p className="text-charcoal-700">{pv?.zipCode || report?.zip_code || "N/A"}</p>
              </div>
              <div>
                <p className="text-charcoal-500">Source</p>
                <p className="text-charcoal-700">
                  {interests[0]?.user_agent?.includes("FB_IAB") ? "Facebook Ad" : "Direct"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
