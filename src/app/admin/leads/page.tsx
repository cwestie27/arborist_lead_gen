"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, Download, Mail, MapPin, TreeDeciduous, DollarSign, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { Button, Card, CardContent } from "@/components/ui";
import { formatCurrency } from "@/lib/utils";

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
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "arborist" | "tree_care_quote">("all");

  useEffect(() => {
    fetchLeads();
  }, []);

  async function fetchLeads() {
    try {
      const res = await fetch("/api/admin/leads");
      if (!res.ok) throw new Error("Failed to fetch leads");
      const data = await res.json();
      setLeads(data.leads || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load leads");
    } finally {
      setLoading(false);
    }
  }

  const filteredLeads = filter === "all"
    ? leads
    : leads.filter(l => l.service_type === filter);

  const exportCSV = () => {
    const headers = ["Date", "Service", "Email", "Zip Code", "Address", "Tree Value", "Total Value", "Tree Count"];
    const rows = filteredLeads.map(l => [
      new Date(l.created_at).toLocaleDateString(),
      l.service_type,
      l.email || "",
      l.zip_code || "",
      l.address || "",
      l.tree_value?.toString() || "",
      l.total_value?.toString() || "",
      l.tree_count?.toString() || "",
    ]);

    const csv = [headers, ...rows].map(r => r.map(c => `"${c}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="animate-pulse text-charcoal-600">Loading leads...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="text-center py-8">
            <AlertTriangle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
            <p className="text-charcoal-700">{error}</p>
            <p className="text-sm text-charcoal-500 mt-2">Make sure you're authenticated as an admin.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-white border-b border-charcoal-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="text-charcoal-500 hover:text-charcoal-700">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="font-heading text-xl font-bold text-charcoal-900">Leads Dashboard</h1>
                <p className="text-sm text-charcoal-500">{leads.length} total leads captured</p>
              </div>
            </div>
            <Button
              variant="secondary"
              size="sm"
              leftIcon={<Download className="w-4 h-4" />}
              onClick={exportCSV}
            >
              Export CSV
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="py-4 text-center">
              <p className="text-2xl font-bold text-forest-700">{leads.length}</p>
              <p className="text-sm text-charcoal-500">Total Leads</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="py-4 text-center">
              <p className="text-2xl font-bold text-forest-700">
                {leads.filter(l => l.service_type === "arborist").length}
              </p>
              <p className="text-sm text-charcoal-500">Want Arborist</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="py-4 text-center">
              <p className="text-2xl font-bold text-forest-700">
                {leads.filter(l => l.service_type === "tree_care_quote").length}
              </p>
              <p className="text-sm text-charcoal-500">Want Quote</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="py-4 text-center">
              <p className="text-2xl font-bold text-amber-600">
                {leads.filter(l => l.health_issues).length}
              </p>
              <p className="text-sm text-charcoal-500">Hot Leads (Health Issues)</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === "all"
                ? "bg-forest-600 text-white"
                : "bg-white text-charcoal-600 hover:bg-charcoal-50"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("arborist")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === "arborist"
                ? "bg-forest-600 text-white"
                : "bg-white text-charcoal-600 hover:bg-charcoal-50"
            }`}
          >
            Find Arborist
          </button>
          <button
            onClick={() => setFilter("tree_care_quote")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === "tree_care_quote"
                ? "bg-forest-600 text-white"
                : "bg-white text-charcoal-600 hover:bg-charcoal-50"
            }`}
          >
            Get Quote
          </button>
        </div>

        {/* Leads Table */}
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-charcoal-50 border-b border-charcoal-200">
                <tr>
                  <th className="text-left px-4 py-3 text-sm font-medium text-charcoal-600">Date</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-charcoal-600">Contact</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-charcoal-600">Location</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-charcoal-600">Value</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-charcoal-600">Interest</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-charcoal-600">Priority</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-charcoal-100">
                {filteredLeads.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-12 text-center text-charcoal-500">
                      No leads yet. They'll appear here when users click "Find Arborist" or "Get Quote".
                    </td>
                  </tr>
                ) : (
                  filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-charcoal-50">
                      <td className="px-4 py-3 text-sm text-charcoal-600">
                        {new Date(lead.created_at).toLocaleDateString()}
                        <br />
                        <span className="text-xs text-charcoal-400">
                          {new Date(lead.created_at).toLocaleTimeString()}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        {lead.email ? (
                          <Link
                            href={`/admin/leads/${encodeURIComponent(lead.email)}`}
                            className="flex items-center gap-2 text-sm text-forest-600 hover:underline"
                          >
                            <Mail className="w-4 h-4" />
                            {lead.email}
                          </Link>
                        ) : (
                          <span className="text-sm text-charcoal-400">No email</span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-start gap-2 text-sm">
                          <MapPin className="w-4 h-4 text-charcoal-400 mt-0.5" />
                          <div>
                            {lead.address && <div className="text-charcoal-700">{lead.address}</div>}
                            <div className="text-charcoal-500">{lead.zip_code || "No zip"}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2 text-sm">
                          <DollarSign className="w-4 h-4 text-forest-500" />
                          <span className="font-mono font-medium text-forest-700">
                            {lead.total_value
                              ? formatCurrency(lead.total_value)
                              : lead.tree_value
                                ? formatCurrency(lead.tree_value)
                                : "—"}
                          </span>
                        </div>
                        {lead.tree_count && lead.tree_count > 1 && (
                          <div className="flex items-center gap-1 text-xs text-charcoal-500 mt-1">
                            <TreeDeciduous className="w-3 h-3" />
                            {lead.tree_count} trees
                          </div>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex px-2 py-1 rounded text-xs font-medium ${
                          lead.service_type === "arborist"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-green-100 text-green-700"
                        }`}>
                          {lead.service_type === "arborist" ? "Find Arborist" : "Get Quote"}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        {lead.health_issues ? (
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-amber-100 text-amber-700 text-xs font-medium">
                            <AlertTriangle className="w-3 h-3" />
                            Hot Lead
                          </span>
                        ) : lead.total_value && lead.total_value > 10000 ? (
                          <span className="inline-flex px-2 py-1 rounded bg-forest-100 text-forest-700 text-xs font-medium">
                            High Value
                          </span>
                        ) : (
                          <span className="text-xs text-charcoal-400">Normal</span>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>
      </main>
    </div>
  );
}
