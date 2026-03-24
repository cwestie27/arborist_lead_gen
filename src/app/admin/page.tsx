"use client";

import { Fragment, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Download,
  Mail,
  MapPin,
  TreeDeciduous,
  DollarSign,
  AlertTriangle,
  BarChart3,
  Users,
  MousePointerClick,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Leaf,
} from "lucide-react";
import { Button, Card, CardContent } from "@/components/ui";
import { formatCurrency } from "@/lib/utils";

interface AnalyticsData {
  metrics: {
    total: number;
    byEvent: Record<string, number>;
    byDay: Record<string, number>;
    uniqueSessions: number;
  };
}

interface PhotoUploadData {
  id: string;
  base64: string;
  mimeType: string;
  fileName?: string;
}

interface TreeInput {
  species?: string;
  height?: string;
  girth?: string;
  healthCondition?: string;
  identificationPhotos?: PhotoUploadData[];
  healthPhotos?: PhotoUploadData[];
  identificationResult?: {
    commonName?: string;
    scientificName?: string;
    probability?: number;
  };
  healthAssessment?: {
    isHealthy?: boolean;
    healthProbability?: number;
    diseases?: Array<{ name: string; probability: number }>;
  };
  valuation?: {
    structuralValue?: number;
    ecoValue?: { total?: number; carbon?: number; stormwater?: number; energy?: number; airQuality?: number };
    totalValue?: number;
  };
}

interface Lead {
  id: string;
  created_at: string;
  service_type: string;
  email: string | null;
  zip_code: string | null;
  tree_value: number | null;
  address?: string;
  total_value?: number;
  tree_count?: number;
  health_issues?: boolean;
  trees?: TreeInput[];
  property_valuation?: Record<string, unknown>;
}

interface ReportRow {
  email: string;
  zip_code: string;
  created_at: string;
  property_valuation: {
    email?: string;
    zipCode?: string;
    address?: string;
    trees?: TreeInput[];
    totals?: {
      structuralValue?: number;
      ecoValue?: number;
      totalValue?: number;
      treeCount?: number;
    };
  };
}

function StatCard({ label, value, icon: Icon, color = "forest" }: {
  label: string;
  value: string | number;
  icon: React.ComponentType<{ className?: string }>;
  color?: string;
}) {
  const colors: Record<string, string> = {
    forest: "text-forest-700 bg-forest-100",
    amber: "text-amber-600 bg-amber-100",
    sky: "text-sky-600 bg-sky-100",
    purple: "text-purple-600 bg-purple-100",
  };
  const [iconColor, bgColor] = (colors[color] || colors.forest).split(" ");
  return (
    <Card>
      <CardContent className="py-4 px-5">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 ${bgColor} rounded-lg flex items-center justify-center`}>
            <Icon className={`w-5 h-5 ${iconColor}`} />
          </div>
          <div>
            <p className="text-2xl font-bold text-charcoal-900">{value}</p>
            <p className="text-xs text-charcoal-500">{label}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function FunnelBar({ label, value, max }: { label: string; value: number; max: number }) {
  const pct = max > 0 ? (value / max) * 100 : 0;
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-charcoal-600 w-28 text-right">{label}</span>
      <div className="flex-1 h-5 bg-charcoal-100 rounded-full overflow-hidden">
        <div className="h-full bg-forest-500 rounded-full transition-all" style={{ width: `${pct}%` }} />
      </div>
      <span className="text-xs font-mono text-charcoal-700 w-12 text-right">{value}</span>
    </div>
  );
}

function PhotoLightbox({ src, mimeType, onClose }: { src: string; mimeType: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div className="relative max-w-3xl max-h-full" onClick={e => e.stopPropagation()}>
        <img
          src={`data:${mimeType};base64,${src}`}
          alt="Tree photo enlarged"
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
        />
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-charcoal-700 hover:bg-charcoal-100 text-lg font-bold"
        >
          ×
        </button>
      </div>
    </div>
  );
}

function MethodBadge({ usedAI, label }: { usedAI: boolean; label: string }) {
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium ${
      usedAI ? "bg-violet-100 text-violet-700" : "bg-charcoal-100 text-charcoal-600"
    }`}>
      {usedAI ? "📷 AI" : "✋ Manual"} {label}
    </span>
  );
}

function TreeDetail({ tree, index }: { tree: TreeInput; index: number }) {
  const [lightbox, setLightbox] = useState<{ base64: string; mimeType: string } | null>(null);

  const usedPhotoForSpecies = !!(tree.identificationResult || (tree.identificationPhotos && tree.identificationPhotos.length > 0));
  const usedPhotoForHealth = !!(tree.healthAssessment || (tree.healthPhotos && tree.healthPhotos.length > 0));

  // Collect all photos (id photos + health photos, deduplicated by id)
  const allPhotos: PhotoUploadData[] = [];
  const seenIds = new Set<string>();
  for (const p of [...(tree.identificationPhotos || []), ...(tree.healthPhotos || [])]) {
    if (!seenIds.has(p.id)) {
      seenIds.add(p.id);
      allPhotos.push(p);
    }
  }

  return (
    <>
    {lightbox && (
      <PhotoLightbox
        src={lightbox.base64}
        mimeType={lightbox.mimeType}
        onClose={() => setLightbox(null)}
      />
    )}
    <div className="bg-forest-50 rounded-lg p-3 text-sm space-y-3">
      <div className="flex items-center gap-2">
        <Leaf className="w-4 h-4 text-forest-600" />
        <span className="font-medium text-charcoal-800">Tree {index + 1}</span>
      </div>

      {/* Method badges */}
      <div className="flex flex-wrap gap-2">
        <MethodBadge usedAI={usedPhotoForSpecies} label="Species ID" />
        <MethodBadge usedAI={usedPhotoForHealth} label="Health" />
      </div>

      {/* Tree attributes */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
        {tree.species && (
          <div><span className="text-charcoal-500">Species:</span> <span className="capitalize">{tree.species.replace(/_/g, " ")}</span></div>
        )}
        {tree.identificationResult?.commonName && (
          <div><span className="text-charcoal-500">Identified as:</span> <span>{tree.identificationResult.commonName}</span>
            {tree.identificationResult.probability != null && (
              <span className="text-charcoal-400 ml-1">({Math.round(tree.identificationResult.probability * 100)}%)</span>
            )}
          </div>
        )}
        {tree.height && (
          <div><span className="text-charcoal-500">Height:</span> <span className="capitalize">{tree.height.replace(/_/g, " ")}</span></div>
        )}
        {tree.girth && (
          <div><span className="text-charcoal-500">Girth:</span> <span className="capitalize">{tree.girth.replace(/_/g, " ")}</span></div>
        )}
        {tree.healthCondition && (
          <div><span className="text-charcoal-500">Health:</span> <span className={`capitalize ${tree.healthCondition === "poor" || tree.healthCondition === "critical" ? "text-amber-600 font-medium" : ""}`}>{tree.healthCondition}</span></div>
        )}
        {tree.valuation?.structuralValue != null && (
          <div><span className="text-charcoal-500">Structural:</span> <span className="font-mono">{formatCurrency(tree.valuation.structuralValue)}</span></div>
        )}
        {tree.valuation?.ecoValue?.total != null && (
          <div><span className="text-charcoal-500">Eco/yr:</span> <span className="font-mono">{formatCurrency(tree.valuation.ecoValue.total)}</span></div>
        )}
      </div>

      {/* Disease flags */}
      {tree.healthAssessment?.diseases && tree.healthAssessment.diseases.length > 0 && (
        <div className="text-xs">
          <span className="text-charcoal-500">Issues detected:</span>
          {tree.healthAssessment.diseases.filter(d => d.probability > 0.3).map((d, i) => (
            <span key={i} className="ml-1 inline-flex px-1.5 py-0.5 rounded bg-amber-100 text-amber-700">
              {d.name} ({Math.round(d.probability * 100)}%)
            </span>
          ))}
        </div>
      )}

      {/* Photo thumbnails */}
      {allPhotos.length > 0 && (
        <div>
          <p className="text-xs text-charcoal-500 mb-2">
            Uploaded photo{allPhotos.length > 1 ? "s" : ""}
            {tree.identificationPhotos && tree.identificationPhotos.length > 0 && tree.healthPhotos && tree.healthPhotos.length > 0
              ? ` (${tree.identificationPhotos.length} species, ${tree.healthPhotos.length} health)`
              : ""}:
          </p>
          <div className="flex flex-wrap gap-2">
            {allPhotos.map((photo, i) => {
              const isIdPhoto = tree.identificationPhotos?.some(p => p.id === photo.id);
              const isHealthPhoto = tree.healthPhotos?.some(p => p.id === photo.id);
              const label = isIdPhoto && isHealthPhoto ? "Species & Health" : isIdPhoto ? "Species" : "Health";
              return (
                <div key={i} className="relative group">
                  <button onClick={() => setLightbox({ base64: photo.base64, mimeType: photo.mimeType })}>
                    <img
                      src={`data:${photo.mimeType};base64,${photo.base64}`}
                      alt={`Tree ${index + 1} photo ${i + 1}`}
                      className="w-24 h-24 object-cover rounded-lg border border-charcoal-200 hover:opacity-90 transition-opacity cursor-pointer"
                    />
                  </button>
                  <span className="absolute bottom-1 left-1 right-1 text-center text-[10px] bg-black/60 text-white rounded px-1 py-0.5 leading-tight">
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
    </>
  );
}

async function lookupZip(zip: string): Promise<string> {
  if (!zip || !/^\d{5}$/.test(zip)) return "";
  try {
    const res = await fetch(`https://api.zippopotam.us/us/${zip}`);
    if (!res.ok) return "";
    const data = await res.json();
    const place = data.places?.[0];
    if (!place) return "";
    return `${place["place name"]}, ${place["state abbreviation"]}`;
  } catch {
    return "";
  }
}

export default function AdminDashboard() {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [reports, setReports] = useState<ReportRow[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());
  const [filter, setFilter] = useState<"all" | "arborist" | "tree_care_quote">("all");
  const [activeTab, setActiveTab] = useState<"leads" | "calculations">("leads");
  const [days, setDays] = useState(30);
  const [zipCache, setZipCache] = useState<Map<string, string>>(new Map());

  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetch(`/api/analytics?days=${days}`).then(r => r.json()).catch(() => null),
      fetch("/api/admin/leads").then(r => r.json()).catch(() => ({ leads: [] })),
      fetch("/api/admin/reports").then(r => r.json()).catch(() => ({ reports: [] })),
    ]).then(([analyticsRes, leadsRes, reportsRes]) => {
      if (analyticsRes) {
        setAnalytics(analyticsRes);
      }
      // Filter leads by date range
      const cutoff = new Date();
      cutoff.setDate(cutoff.getDate() - days);
      const allLeads = leadsRes?.leads || [];
      setLeads(allLeads.filter((l: Lead) => new Date(l.created_at) >= cutoff));
      const allReports = reportsRes?.reports || [];
      setReports(allReports.filter((r: ReportRow) => new Date(r.created_at) >= cutoff));
      setLoading(false);
    });
  }, [days]);

  // Resolve all unique zip codes → city, state
  useEffect(() => {
    const zips = new Set<string>();
    leads.forEach(l => { if (l.zip_code) zips.add(l.zip_code); });
    reports.forEach(r => {
      const z = r.zip_code || (r.property_valuation?.zipCode as string | undefined);
      if (z) zips.add(z);
    });
    const missing = [...zips].filter(z => !zipCache.has(z));
    if (missing.length === 0) return;
    Promise.all(missing.map(z => lookupZip(z).then(city => ({ z, city })))).then(results => {
      setZipCache(prev => {
        const next = new Map(prev);
        results.forEach(({ z, city }) => next.set(z, city));
        return next;
      });
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leads, reports]);

  const toggleRow = (id: string) => {
    const next = new Set(expandedRows);
    if (next.has(id)) next.delete(id); else next.add(id);
    setExpandedRows(next);
  };

  // Build a map of email → full report data for expanding rows
  const reportsByEmail = new Map<string, ReportRow>();
  reports.forEach(r => {
    if (r.email && !reportsByEmail.has(r.email)) {
      reportsByEmail.set(r.email, r);
    }
  });

  const filteredLeads = filter === "all" ? leads : leads.filter(l => l.service_type === filter);

  const byEvent = analytics?.metrics.byEvent || {};
  const emailCaptureRate = byEvent.wizard_started > 0
    ? ((( byEvent.email_captured || 0) / byEvent.wizard_started) * 100).toFixed(1)
    : "0";

  const exportCSV = () => {
    const headers = ["Date", "Email", "Zip", "Address", "Service", "Trees", "Total Value", "Health Issues", "Species", "Heights", "Girths"];
    const rows = filteredLeads.map(l => {
      const report = l.email ? reportsByEmail.get(l.email) : null;
      const trees = report?.property_valuation?.trees || [];
      return [
        new Date(l.created_at).toLocaleDateString(),
        l.email || "",
        l.zip_code || "",
        l.address || "",
        l.service_type,
        (l.tree_count || trees.length || "").toString(),
        l.total_value?.toString() || "",
        l.health_issues ? "Yes" : "",
        trees.map(t => t.species || "").join("; "),
        trees.map(t => t.height || "").join("; "),
        trees.map(t => t.girth || "").join("; "),
      ];
    });
    const csv = [headers, ...rows].map(r => r.map(c => `"${c}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `arborvalue-leads-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-forest-600 border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <header className="bg-white border-b border-charcoal-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-charcoal-400 hover:text-charcoal-600">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="font-heading text-xl font-bold text-charcoal-900">Arbor Value Admin</h1>
              <p className="text-xs text-charcoal-500">Analytics & Leads</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex bg-charcoal-100 rounded-lg p-0.5">
              {([7, 14, 30, 90, 365] as const).map(d => (
                <button
                  key={d}
                  onClick={() => setDays(d)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                    days === d ? "bg-white text-charcoal-900 shadow-sm" : "text-charcoal-500 hover:text-charcoal-700"
                  }`}
                >
                  {d <= 30 ? `${d}d` : d === 90 ? "3mo" : "1yr"}
                </button>
              ))}
            </div>
            <Button variant="secondary" size="sm" leftIcon={<Download className="w-4 h-4" />} onClick={exportCSV}>
              Export
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Summary Stats */}
        <section>
          <h2 className="text-sm font-medium text-charcoal-500 uppercase tracking-wider mb-3">Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            <StatCard label="Page Views" value={byEvent.page_view || 0} icon={BarChart3} />
            <StatCard label="Sessions" value={analytics?.metrics.uniqueSessions || 0} icon={Users} color="sky" />
            <StatCard label="Wizards Started" value={byEvent.wizard_started || 0} icon={TrendingUp} />
            <StatCard label="Emails Captured" value={byEvent.email_captured || 0} icon={Mail} color="amber" />
            <StatCard label="Email Rate" value={`${emailCaptureRate}%`} icon={MousePointerClick} color="purple" />
            <StatCard label="Total Leads" value={leads.length} icon={TreeDeciduous} />
          </div>
        </section>

        {/* Conversion Funnel */}
        {analytics && (
          <section>
            <h2 className="text-sm font-medium text-charcoal-500 uppercase tracking-wider mb-3">Conversion Funnel</h2>
            <Card>
              <CardContent className="py-4 px-5 space-y-2">
                <FunnelBar label="Wizard Started" value={byEvent.wizard_started || 0} max={byEvent.wizard_started || 1} />
                <FunnelBar label="Email Captured" value={byEvent.email_captured || 0} max={byEvent.wizard_started || 1} />
                <FunnelBar label="Valuation Done" value={byEvent.valuation_completed || 0} max={byEvent.wizard_started || 1} />
                <FunnelBar label="Report Viewed" value={byEvent.report_viewed || 0} max={byEvent.wizard_started || 1} />
                <FunnelBar label="Affiliate Click" value={byEvent.affiliate_clicked || 0} max={byEvent.wizard_started || 1} />
              </CardContent>
            </Card>
          </section>
        )}

        {/* Tab Switcher */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab("leads")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === "leads" ? "bg-forest-600 text-white" : "bg-white text-charcoal-600 hover:bg-charcoal-50 border border-charcoal-200"
                }`}
              >
                Leads ({leads.length})
              </button>
              <button
                onClick={() => setActiveTab("calculations")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === "calculations" ? "bg-forest-600 text-white" : "bg-white text-charcoal-600 hover:bg-charcoal-50 border border-charcoal-200"
                }`}
              >
                All Calculations ({reports.length})
              </button>
            </div>
            <div className="flex gap-1">
              {activeTab === "leads" && (["all", "arborist", "tree_care_quote"] as const).map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                    filter === f ? "bg-forest-600 text-white" : "bg-white text-charcoal-600 hover:bg-charcoal-50"
                  }`}
                >
                  {f === "all" ? "All" : f === "arborist" ? "Arborist" : "Quote"}
                </button>
              ))}
            </div>
          </div>

          {activeTab === "calculations" ? (
            <Card>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-charcoal-50 border-b border-charcoal-200">
                    <tr>
                      <th className="w-8 px-3 py-3"></th>
                      <th className="text-left px-3 py-3 text-xs font-medium text-charcoal-600">Date</th>
                      <th className="text-left px-3 py-3 text-xs font-medium text-charcoal-600">Email</th>
                      <th className="text-left px-3 py-3 text-xs font-medium text-charcoal-600">Location</th>
                      <th className="text-left px-3 py-3 text-xs font-medium text-charcoal-600">Trees</th>
                      <th className="text-left px-3 py-3 text-xs font-medium text-charcoal-600">Total Value</th>
                      <th className="text-left px-3 py-3 text-xs font-medium text-charcoal-600">CTA Clicked?</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-charcoal-100">
                    {reports.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="px-4 py-12 text-center text-charcoal-500">
                          No calculations yet.
                        </td>
                      </tr>
                    ) : (
                      reports.map((report, idx) => {
                        const trees = report.property_valuation?.trees || [];
                        const isExpanded = expandedRows.has(`report-${idx}`);
                        const hasLead = leads.some(l => l.email === report.email);
                        return (
                          <Fragment key={idx}>
                            <tr
                              className="hover:bg-charcoal-50 cursor-pointer"
                              onClick={() => trees.length > 0 && toggleRow(`report-${idx}`)}
                            >
                              <td className="px-3 py-3 text-charcoal-400">
                                {trees.length > 0 && (
                                  isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                                )}
                              </td>
                              <td className="px-3 py-3 text-sm text-charcoal-600">
                                {new Date(report.created_at).toLocaleDateString()}
                                <br />
                                <span className="text-xs text-charcoal-400">
                                  {new Date(report.created_at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                                </span>
                              </td>
                              <td className="px-3 py-3">
                                {report.email ? (
                                  <span className="flex items-center gap-1.5 text-sm text-forest-600">
                                    <Mail className="w-3.5 h-3.5" />
                                    {report.email}
                                  </span>
                                ) : (
                                  <span className="text-sm text-charcoal-400">No email</span>
                                )}
                              </td>
                              <td className="px-3 py-3">
                                <div className="flex items-start gap-1.5 text-sm">
                                  <MapPin className="w-3.5 h-3.5 text-charcoal-400 mt-0.5" />
                                  <div>
                                    {report.property_valuation?.address && <div className="text-charcoal-700 text-xs">{report.property_valuation.address as string}</div>}
                                    <div className="text-charcoal-500">{report.zip_code || (report.property_valuation?.zipCode as string | undefined) || "—"}</div>
                                    {(() => {
                                      const z = report.zip_code || (report.property_valuation?.zipCode as string | undefined);
                                      const city = z ? zipCache.get(z) : undefined;
                                      return city ? <div className="text-xs text-charcoal-400">{city}</div> : null;
                                    })()}
                                  </div>
                                </div>
                              </td>
                              <td className="px-3 py-3">
                                <div className="flex items-center gap-1 text-sm">
                                  <TreeDeciduous className="w-3.5 h-3.5 text-forest-500" />
                                  <span>{report.property_valuation?.totals?.treeCount || trees.length || "—"}</span>
                                </div>
                              </td>
                              <td className="px-3 py-3">
                                <span className="text-sm font-mono font-medium text-forest-700">
                                  {report.property_valuation?.totals?.structuralValue
                                    ? formatCurrency(report.property_valuation.totals.structuralValue)
                                    : "—"}
                                </span>
                              </td>
                              <td className="px-3 py-3">
                                {hasLead ? (
                                  <span className="inline-flex px-2 py-0.5 rounded bg-green-100 text-green-700 text-xs font-medium">Yes</span>
                                ) : (
                                  <span className="inline-flex px-2 py-0.5 rounded bg-charcoal-100 text-charcoal-500 text-xs font-medium">No</span>
                                )}
                              </td>
                            </tr>
                            {isExpanded && trees.length > 0 && (
                              <tr>
                                <td colSpan={7} className="px-6 py-3 bg-charcoal-50/50">
                                  <div className="space-y-2">
                                    {trees.map((tree: TreeInput, i: number) => (
                                      <TreeDetail key={i} tree={tree} index={i} />
                                    ))}
                                  </div>
                                </td>
                              </tr>
                            )}
                          </Fragment>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </Card>
          ) : (
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-charcoal-50 border-b border-charcoal-200">
                  <tr>
                    <th className="w-8 px-3 py-3"></th>
                    <th className="text-left px-3 py-3 text-xs font-medium text-charcoal-600">Date</th>
                    <th className="text-left px-3 py-3 text-xs font-medium text-charcoal-600">Contact</th>
                    <th className="text-left px-3 py-3 text-xs font-medium text-charcoal-600">Location</th>
                    <th className="text-left px-3 py-3 text-xs font-medium text-charcoal-600">Trees</th>
                    <th className="text-left px-3 py-3 text-xs font-medium text-charcoal-600">Value</th>
                    <th className="text-left px-3 py-3 text-xs font-medium text-charcoal-600">Interest</th>
                    <th className="text-left px-3 py-3 text-xs font-medium text-charcoal-600">Priority</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-charcoal-100">
                  {filteredLeads.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="px-4 py-12 text-center text-charcoal-500">
                        No leads yet. They'll appear here when users complete the wizard.
                      </td>
                    </tr>
                  ) : (
                    filteredLeads.map((lead) => {
                      const report = lead.email ? reportsByEmail.get(lead.email) : null;
                      const trees = report?.property_valuation?.trees || [];
                      const isExpanded = expandedRows.has(lead.id);

                      return (
                        <Fragment key={lead.id}>
                          <tr
                            className="hover:bg-charcoal-50 cursor-pointer"
                            onClick={() => trees.length > 0 && toggleRow(lead.id)}
                          >
                            <td className="px-3 py-3 text-charcoal-400">
                              {trees.length > 0 && (
                                isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                              )}
                            </td>
                            <td className="px-3 py-3 text-sm text-charcoal-600">
                              {new Date(lead.created_at).toLocaleDateString()}
                              <br />
                              <span className="text-xs text-charcoal-400">
                                {new Date(lead.created_at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                              </span>
                            </td>
                            <td className="px-3 py-3">
                              {lead.email ? (
                                <span className="flex items-center gap-1.5 text-sm text-forest-600">
                                  <Mail className="w-3.5 h-3.5" />
                                  {lead.email}
                                </span>
                              ) : (
                                <span className="text-sm text-charcoal-400">No email</span>
                              )}
                            </td>
                            <td className="px-3 py-3">
                              <div className="flex items-start gap-1.5 text-sm">
                                <MapPin className="w-3.5 h-3.5 text-charcoal-400 mt-0.5" />
                                <div>
                                  {lead.address && <div className="text-charcoal-700 text-xs">{lead.address}</div>}
                                  <div className="text-charcoal-500">{lead.zip_code || "—"}</div>
                                  {lead.zip_code && zipCache.get(lead.zip_code) && (
                                    <div className="text-xs text-charcoal-400">{zipCache.get(lead.zip_code)}</div>
                                  )}
                                </div>
                              </div>
                            </td>
                            <td className="px-3 py-3">
                              <div className="flex items-center gap-1 text-sm">
                                <TreeDeciduous className="w-3.5 h-3.5 text-forest-500" />
                                <span>{lead.tree_count || trees.length || "—"}</span>
                              </div>
                            </td>
                            <td className="px-3 py-3">
                              <span className="text-sm font-mono font-medium text-forest-700">
                                {lead.total_value ? formatCurrency(lead.total_value) : lead.tree_value ? formatCurrency(lead.tree_value) : "—"}
                              </span>
                            </td>
                            <td className="px-3 py-3">
                              <span className={`inline-flex px-2 py-0.5 rounded text-xs font-medium ${
                                lead.service_type === "arborist" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"
                              }`}>
                                {lead.service_type === "arborist" ? "Arborist" : "Quote"}
                              </span>
                            </td>
                            <td className="px-3 py-3">
                              {lead.health_issues ? (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-100 text-amber-700 text-xs font-medium">
                                  <AlertTriangle className="w-3 h-3" /> Hot
                                </span>
                              ) : lead.total_value && lead.total_value > 10000 ? (
                                <span className="inline-flex px-2 py-0.5 rounded bg-forest-100 text-forest-700 text-xs font-medium">
                                  High $
                                </span>
                              ) : (
                                <span className="text-xs text-charcoal-400">Normal</span>
                              )}
                            </td>
                          </tr>
                          {isExpanded && trees.length > 0 && (
                            <tr>
                              <td colSpan={8} className="px-6 py-3 bg-charcoal-50/50">
                                <div className="space-y-2">
                                  {trees.map((tree, i) => (
                                    <TreeDetail key={i} tree={tree} index={i} />
                                  ))}
                                </div>
                              </td>
                            </tr>
                          )}
                        </Fragment>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </Card>
          )}
        </section>
      </main>
    </div>
  );
}

