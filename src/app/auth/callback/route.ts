import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/dashboard";

  if (code) {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error && data.user) {
      // Upsert profile record
      await supabase.from("profiles").upsert(
        {
          id: data.user.id,
          email: data.user.email!,
          updated_at: new Date().toISOString(),
        },
        {
          onConflict: "id",
        }
      );

      // Redirect to dashboard or specified next page
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // Return error if code exchange failed
  return NextResponse.redirect(`${origin}/auth/login?error=auth_failed`);
}
