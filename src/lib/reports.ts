import { createAdminClient } from "@/lib/supabase/server";
import type { PropertyValuation } from "@/types";

/**
 * Save a property report to the database
 * @param data The property valuation data to save
 * @returns The report ID (UUID) or null if save failed
 */
export async function saveReport(
  data: PropertyValuation
): Promise<{ id: string | null; error?: string }> {
  try {
    const supabase = createAdminClient();

    const { data: report, error } = await supabase
      .from("reports")
      .insert({
        email: data.email,
        zip_code: data.zipCode,
        property_valuation: data,
      })
      .select("id")
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return { id: null, error: error.message };
    }

    return { id: report.id };
  } catch (err) {
    console.error("Save report error:", err);
    return {
      id: null,
      error: err instanceof Error ? err.message : "Unknown error",
    };
  }
}

/**
 * Retrieve a property report by ID
 * @param id The report UUID
 * @returns The property valuation data or null if not found
 */
export async function getReport(
  id: string
): Promise<{ data: PropertyValuation | null; error?: string; expired?: boolean }> {
  try {
    const supabase = createAdminClient();

    const { data: report, error } = await supabase
      .from("reports")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      if (error.code === "PGRST116") {
        // No rows found
        return { data: null, error: "Report not found" };
      }
      console.error("Supabase select error:", error);
      return { data: null, error: error.message };
    }

    // Check if report is expired
    if (report.expires_at) {
      const expiresAt = new Date(report.expires_at);
      if (expiresAt < new Date()) {
        return { data: null, error: "Report has expired", expired: true };
      }
    }

    return { data: report.property_valuation as PropertyValuation };
  } catch (err) {
    console.error("Get report error:", err);
    return {
      data: null,
      error: err instanceof Error ? err.message : "Unknown error",
    };
  }
}
