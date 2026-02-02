import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const supabase = createAdminClient();

    // Fetch service interests (CTA clicks)
    const { data: interests, error: interestsError } = await supabase
      .from("service_interests")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(500);

    if (interestsError) {
      console.error("Error fetching service interests:", interestsError);
      return NextResponse.json(
        { error: "Failed to fetch leads" },
        { status: 500 }
      );
    }

    // Fetch reports to enrich lead data
    const { data: reports, error: reportsError } = await supabase
      .from("reports")
      .select("email, zip_code, property_valuation")
      .order("created_at", { ascending: false })
      .limit(500);

    if (reportsError) {
      console.error("Error fetching reports:", reportsError);
    }

    // Create a map of email to report data for enrichment
    const reportsByEmail = new Map<string, {
      address?: string;
      total_value?: number;
      tree_count?: number;
      health_issues?: boolean;
    }>();

    if (reports) {
      for (const report of reports) {
        if (report.email && !reportsByEmail.has(report.email)) {
          const pv = report.property_valuation as {
            address?: string;
            trees?: Array<{
              healthCondition?: string;
              healthAssessment?: { diseases?: Array<{ probability: number }> };
            }>;
            totals?: {
              structuralValue?: number;
              treeCount?: number;
            };
          };

          // Check if any tree has health issues
          const hasHealthIssues = pv.trees?.some(tree =>
            tree.healthCondition === "poor" ||
            tree.healthCondition === "critical" ||
            (tree.healthAssessment?.diseases?.some(d => d.probability > 0.5))
          ) || false;

          reportsByEmail.set(report.email, {
            address: pv.address,
            total_value: pv.totals?.structuralValue,
            tree_count: pv.totals?.treeCount,
            health_issues: hasHealthIssues,
          });
        }
      }
    }

    // Enrich leads with report data
    const leads = (interests || []).map(interest => {
      const reportData = interest.email ? reportsByEmail.get(interest.email) : null;
      return {
        id: interest.id,
        created_at: interest.created_at,
        service_type: interest.service_type,
        email: interest.email,
        zip_code: interest.zip_code,
        tree_value: interest.tree_value,
        address: reportData?.address,
        total_value: reportData?.total_value,
        tree_count: reportData?.tree_count,
        health_issues: reportData?.health_issues,
      };
    });

    return NextResponse.json({ leads });
  } catch (error) {
    console.error("Admin leads API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
