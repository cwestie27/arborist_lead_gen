import { redirect } from "next/navigation";
import Link from "next/link";
import { Trees, Plus, LogOut, Calendar, DollarSign, BarChart3 } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { Button, Card, CardContent } from "@/components/ui";
import { formatCurrency } from "@/lib/utils";

export const dynamic = "force-dynamic";

interface TreeRecord {
  id: string;
  species_input: string;
  height_heuristic: string;
  girth_heuristic: string;
  calculated_value_structural: number;
  calculated_value_eco: number;
  created_at: string;
}

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  // Fetch user's trees
  const { data: trees } = await supabase
    .from("trees")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  // Calculate totals
  const totalStructural = trees?.reduce(
    (sum, tree) => sum + (tree.calculated_value_structural || 0),
    0
  ) || 0;
  const totalEco = trees?.reduce(
    (sum, tree) => sum + (tree.calculated_value_eco || 0),
    0
  ) || 0;

  return (
    <main className="min-h-screen bg-gradient-to-b from-forest-50 to-cream">
      {/* Header */}
      <header className="bg-white border-b border-charcoal-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Trees className="w-6 h-6 text-forest-600" />
            <span className="font-bold text-lg text-charcoal-900">
              Arbor Value
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/admin/analytics">
              <Button variant="ghost" size="sm" title="Analytics">
                <BarChart3 className="w-4 h-4" />
              </Button>
            </Link>
            <span className="text-sm text-charcoal-600">{user.email}</span>
            <form action="/auth/signout" method="POST">
              <Button variant="ghost" size="sm" type="submit">
                <LogOut className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-charcoal-900">
              My Tree Portfolio
            </h1>
            <p className="text-charcoal-600 mt-1">
              Track and manage your tree valuations
            </p>
          </div>
          <Link href="/calculator">
            <Button leftIcon={<Plus className="w-4 h-4" />}>
              Add Tree
            </Button>
          </Link>
        </div>

        {/* Summary Cards */}
        {trees && trees.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-forest-100 rounded-lg flex items-center justify-center">
                    <Trees className="w-5 h-5 text-forest-600" />
                  </div>
                  <div>
                    <p className="text-sm text-charcoal-500">Total Trees</p>
                    <p className="text-2xl font-bold text-charcoal-900">
                      {trees.length}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm text-charcoal-500">Structural Value</p>
                    <p className="text-2xl font-bold text-charcoal-900">
                      {formatCurrency(totalStructural)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-sm text-charcoal-500">
                      Annual Eco Benefits
                    </p>
                    <p className="text-2xl font-bold text-charcoal-900">
                      {formatCurrency(totalEco)}/yr
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Tree List or Empty State */}
        {!trees || trees.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trees className="w-10 h-10 text-forest-600" />
              </div>
              <h2 className="text-xl font-bold text-charcoal-900 mb-2">
                No trees yet
              </h2>
              <p className="text-charcoal-600 mb-6 max-w-md mx-auto">
                Start by adding your first tree to see its value and track your
                property's green assets.
              </p>
              <Link href="/calculator">
                <Button leftIcon={<Plus className="w-4 h-4" />}>
                  Add Your First Tree
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {trees.map((tree: TreeRecord) => (
              <Card key={tree.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center">
                        <Trees className="w-6 h-6 text-forest-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-charcoal-900 capitalize">
                          {tree.species_input.replace("_", " ")}
                        </h3>
                        <p className="text-sm text-charcoal-500 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(tree.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-charcoal-900">
                        {formatCurrency(tree.calculated_value_structural || 0)}
                      </p>
                      <p className="text-sm text-charcoal-500">
                        +{formatCurrency(tree.calculated_value_eco || 0)}/yr eco
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
