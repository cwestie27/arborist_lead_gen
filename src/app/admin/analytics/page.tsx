import { Suspense } from "react";
import Link from "next/link";
import {
  BarChart3,
  TrendingUp,
  Users,
  MousePointerClick,
  ArrowLeft,
  TreeDeciduous,
  Mail,
  FileText,
} from "lucide-react";
import { createAdminClient } from "@/lib/supabase/server";
import { Card, CardContent } from "@/components/ui";

export const dynamic = "force-dynamic";

interface EventMetrics {
  wizard_started: number;
  email_captured: number;
  valuation_completed: number;
  report_viewed: number;
  affiliate_clicked: number;
  page_view: number;
}

interface DailyMetric {
  date: string;
  count: number;
}

async function getAnalyticsData(days: number = 7) {
  const supabase = createAdminClient();

  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);

  const { data: events, error } = await supabase
    .from("analytics_events")
    .select("*")
    .gte("created_at", startDate.toISOString())
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch analytics:", error);
    return null;
  }

  // Initialize metrics
  const metrics: EventMetrics = {
    wizard_started: 0,
    email_captured: 0,
    valuation_completed: 0,
    report_viewed: 0,
    affiliate_clicked: 0,
    page_view: 0,
  };

  const dailyData: Record<string, number> = {};
  const uniqueSessions = new Set<string>();

  // Process events
  (events || []).forEach((event) => {
    // Count by event type
    if (event.event_type in metrics) {
      metrics[event.event_type as keyof EventMetrics]++;
    }

    // Count by day
    const day = new Date(event.created_at).toISOString().split("T")[0];
    dailyData[day] = (dailyData[day] || 0) + 1;

    // Track unique sessions
    if (event.session_id) {
      uniqueSessions.add(event.session_id);
    }
  });

  // Convert daily data to sorted array
  const dailyMetrics: DailyMetric[] = Object.entries(dailyData)
    .map(([date, count]) => ({ date, count }))
    .sort((a, b) => a.date.localeCompare(b.date));

  return {
    metrics,
    dailyMetrics,
    totalEvents: events?.length || 0,
    uniqueSessions: uniqueSessions.size,
  };
}

async function getClickData(days: number = 7) {
  const supabase = createAdminClient();

  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);

  const { data: clicks, error } = await supabase
    .from("ad_clicks")
    .select("*")
    .gte("clicked_at", startDate.toISOString());

  if (error) {
    console.error("Failed to fetch clicks:", error);
    return { total: 0, byTarget: {} };
  }

  const byTarget: Record<string, number> = {};
  (clicks || []).forEach((click) => {
    const target = click.target_url?.split("/").pop() || "unknown";
    byTarget[target] = (byTarget[target] || 0) + 1;
  });

  return {
    total: clicks?.length || 0,
    byTarget,
  };
}

function MetricCard({
  title,
  value,
  icon: Icon,
  color,
  subtext,
}: {
  title: string;
  value: number | string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  subtext?: string;
}) {
  const colorClasses: Record<string, { bg: string; text: string }> = {
    forest: { bg: "bg-forest-100", text: "text-forest-600" },
    amber: { bg: "bg-amber-100", text: "text-amber-600" },
    sky: { bg: "bg-sky-100", text: "text-sky-600" },
    purple: { bg: "bg-purple-100", text: "text-purple-600" },
    rose: { bg: "bg-rose-100", text: "text-rose-600" },
  };

  const colors = colorClasses[color] || colorClasses.forest;

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 ${colors.bg} rounded-lg flex items-center justify-center`}>
            <Icon className={`w-5 h-5 ${colors.text}`} />
          </div>
          <div>
            <p className="text-sm text-charcoal-500">{title}</p>
            <p className="text-2xl font-bold text-charcoal-900">{value}</p>
            {subtext && <p className="text-xs text-charcoal-400">{subtext}</p>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function FunnelStep({
  label,
  value,
  percentage,
  isLast,
}: {
  label: string;
  value: number;
  percentage: number;
  isLast?: boolean;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-medium text-charcoal-700">{label}</span>
          <span className="text-sm text-charcoal-500">{value}</span>
        </div>
        <div className="h-3 bg-charcoal-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-forest-500 rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <p className="text-xs text-charcoal-400 mt-1">{percentage.toFixed(1)}% of visitors</p>
      </div>
      {!isLast && (
        <div className="text-charcoal-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </div>
  );
}

async function AnalyticsDashboard() {
  const [analyticsData, clickData] = await Promise.all([
    getAnalyticsData(7),
    getClickData(7),
  ]);

  if (!analyticsData) {
    return (
      <div className="text-center py-12">
        <p className="text-charcoal-500">
          Unable to load analytics. Make sure the database is configured.
        </p>
      </div>
    );
  }

  const { metrics, dailyMetrics, totalEvents, uniqueSessions } = analyticsData;

  // Calculate funnel percentages (based on page views as 100%)
  const baseCount = Math.max(metrics.page_view, metrics.wizard_started, 1);
  const funnelSteps = [
    { label: "Wizard Started", value: metrics.wizard_started },
    { label: "Email Captured", value: metrics.email_captured },
    { label: "Valuation Completed", value: metrics.valuation_completed },
    { label: "Report Viewed", value: metrics.report_viewed },
  ];

  // Calculate conversion rates
  const emailConversionRate =
    metrics.wizard_started > 0
      ? ((metrics.email_captured / metrics.wizard_started) * 100).toFixed(1)
      : "0.0";
  const completionRate =
    metrics.wizard_started > 0
      ? ((metrics.valuation_completed / metrics.wizard_started) * 100).toFixed(1)
      : "0.0";

  return (
    <div className="space-y-8">
      {/* Overview Metrics */}
      <section>
        <h2 className="text-lg font-semibold text-charcoal-900 mb-4">
          Overview (Last 7 Days)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Total Events"
            value={totalEvents.toLocaleString()}
            icon={BarChart3}
            color="forest"
          />
          <MetricCard
            title="Unique Sessions"
            value={uniqueSessions.toLocaleString()}
            icon={Users}
            color="sky"
          />
          <MetricCard
            title="Email Capture Rate"
            value={`${emailConversionRate}%`}
            icon={Mail}
            color="amber"
            subtext={`${metrics.email_captured} emails`}
          />
          <MetricCard
            title="Affiliate Clicks"
            value={clickData.total.toLocaleString()}
            icon={MousePointerClick}
            color="purple"
          />
        </div>
      </section>

      {/* Conversion Funnel */}
      <section>
        <h2 className="text-lg font-semibold text-charcoal-900 mb-4">
          Conversion Funnel
        </h2>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
              {funnelSteps.map((step, index) => (
                <FunnelStep
                  key={step.label}
                  label={step.label}
                  value={step.value}
                  percentage={(step.value / baseCount) * 100}
                  isLast={index === funnelSteps.length - 1}
                />
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-charcoal-100">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-charcoal-700">
                  Overall Completion Rate
                </span>
                <span className="text-lg font-bold text-forest-600">
                  {completionRate}%
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Daily Activity */}
      <section>
        <h2 className="text-lg font-semibold text-charcoal-900 mb-4">
          Daily Activity
        </h2>
        <Card>
          <CardContent className="p-6">
            {dailyMetrics.length > 0 ? (
              <div className="space-y-3">
                {dailyMetrics.slice(-7).map((day) => (
                  <div key={day.date} className="flex items-center gap-4">
                    <span className="text-sm text-charcoal-500 w-24">
                      {new Date(day.date).toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <div className="flex-1 h-6 bg-charcoal-100 rounded overflow-hidden">
                      <div
                        className="h-full bg-forest-400 rounded"
                        style={{
                          width: `${Math.min(100, (day.count / Math.max(...dailyMetrics.map((d) => d.count))) * 100)}%`,
                        }}
                      />
                    </div>
                    <span className="text-sm font-medium text-charcoal-700 w-16 text-right">
                      {day.count}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-charcoal-500 text-center py-8">
                No activity recorded yet
              </p>
            )}
          </CardContent>
        </Card>
      </section>

      {/* Affiliate Clicks Breakdown */}
      {clickData.total > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-charcoal-900 mb-4">
            Affiliate Clicks by Target
          </h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-3">
                {Object.entries(clickData.byTarget)
                  .sort(([, a], [, b]) => b - a)
                  .map(([target, count]) => (
                    <div key={target} className="flex items-center justify-between">
                      <span className="text-sm text-charcoal-600 capitalize">
                        {target.replace(/-/g, " ")}
                      </span>
                      <span className="text-sm font-medium text-charcoal-900">
                        {count} clicks
                      </span>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </section>
      )}
    </div>
  );
}

export default function AdminAnalyticsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-forest-50 to-cream">
      {/* Header */}
      <header className="bg-white border-b border-charcoal-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <TreeDeciduous className="w-6 h-6 text-forest-600" />
            <span className="font-bold text-lg text-charcoal-900">
              Arbor Value
            </span>
          </Link>
          <div className="flex items-center gap-2 text-sm text-charcoal-500">
            <TrendingUp className="w-4 h-4" />
            Analytics Dashboard
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1 text-sm text-charcoal-500 hover:text-charcoal-700 mb-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </Link>
            <h1 className="text-3xl font-bold text-charcoal-900">
              Analytics Dashboard
            </h1>
            <p className="text-charcoal-600 mt-1">
              Conversion funnel and user engagement metrics
            </p>
          </div>
        </div>

        <Suspense
          fallback={
            <div className="text-center py-12">
              <div className="animate-spin w-8 h-8 border-2 border-forest-600 border-t-transparent rounded-full mx-auto" />
              <p className="text-charcoal-500 mt-4">Loading analytics...</p>
            </div>
          }
        >
          <AnalyticsDashboard />
        </Suspense>
      </div>
    </main>
  );
}
