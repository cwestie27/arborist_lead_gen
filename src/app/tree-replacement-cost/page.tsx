import Link from "next/link";
import { TreeDeciduous, Calculator, ArrowRight, Shield, DollarSign, FileText, TrendingUp, AlertCircle, CheckCircle, Camera, PieChart } from "lucide-react";
import { Button } from "@/components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tree Replacement Cost Calculator & Guide - CTLA Method 2025",
  description: "Calculate tree replacement costs using CTLA methodology. Understand why replacement value matters for insurance, legal disputes, and property valuation. Free calculator included.",
  keywords: "tree replacement cost, tree replacement cost calculator, cost to replace a tree, CTLA trunk formula, tree insurance value",
  openGraph: {
    title: "Tree Replacement Cost: What You Need to Know",
    description: "Professional tree replacement cost calculations using industry-standard CTLA methods. Get your free estimate now.",
    type: "article"
  }
};

export default function TreeReplacementCost() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-forest-50 to-cream">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 bg-forest-200 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-earth-200 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-forest-100 text-forest-800 rounded-full text-sm font-medium mb-8">
              <PieChart className="w-4 h-4" />
              CTLA Replacement Cost Method
            </div>

            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 leading-tight mb-6">
              Tree Replacement Cost: What You Need to Know
            </h1>

            <p className="text-lg md:text-xl text-charcoal-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Tree replacement cost determines what it would cost to replace your tree with one of similar size and species today. This CTLA-based valuation is crucial for insurance claims, legal disputes, and property assessments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator">
                <Button size="lg" rightIcon={<Calculator className="w-5 h-5" />}>
                  Calculate Your Tree's Replacement Cost
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Replacement Cost */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              Understanding Tree Replacement Cost
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Replacement cost isn't just the price of a new sapling - it's the theoretical cost to replace your mature tree with one of identical size, species, and quality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-cream rounded-2xl p-8 border border-charcoal-100">
              <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center mb-6">
                <TreeDeciduous className="w-7 h-7 text-forest-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3">
                CTLA Trunk Formula
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                The industry-standard method calculates replacement cost based on trunk area, species value, condition rating, and location factors.
              </p>
            </div>

            <div className="bg-cream rounded-2xl p-8 border border-charcoal-100">
              <div className="w-14 h-14 bg-earth-100 rounded-xl flex items-center justify-center mb-6">
                <DollarSign className="w-7 h-7 text-earth-600" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3">
                Fair Market Value
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Based on current nursery prices, installation costs, and local market conditions. Updated annually to reflect real costs.
              </p>
            </div>

            <div className="bg-cream rounded-2xl p-8 border border-charcoal-100">
              <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-forest-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3">
                Legally Defensible
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                CTLA methodology is accepted by courts, insurance companies, and government agencies for official valuations.
              </p>
            </div>
          </div>

          <div className="bg-forest-50 rounded-2xl p-8 border border-forest-200">
            <h3 className="font-heading text-2xl font-semibold text-charcoal-900 mb-6 text-center">
              How the CTLA Trunk Formula Works
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-xl">
                <h4 className="font-semibold text-charcoal-900 mb-4">Basic Formula</h4>
                <div className="bg-charcoal-50 p-4 rounded-lg font-mono text-sm text-charcoal-700 mb-4">
                  Trunk Area × Base Price × Species × Condition × Location = Replacement Cost
                </div>
                <ul className="text-sm text-charcoal-600 space-y-2">
                  <li>• <strong>Trunk Area:</strong> Cross-sectional area at 4.5' height</li>
                  <li>• <strong>Base Price:</strong> Current cost per square inch</li>
                  <li>• <strong>Species Factor:</strong> 0.8 to 1.2 multiplier</li>
                  <li>• <strong>Condition:</strong> 0.1 to 1.0 based on health</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl">
                <h4 className="font-semibold text-charcoal-900 mb-4">Example Calculation</h4>
                <div className="space-y-2 text-sm text-charcoal-600">
                  <div className="flex justify-between">
                    <span>20" Oak (314 sq in trunk area)</span>
                    <span>314</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Base price ($12/sq in)</span>
                    <span>$3,768</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Species factor (Oak = 1.1)</span>
                    <span>$4,145</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Condition (Good = 0.9)</span>
                    <span>$3,730</span>
                  </div>
                  <div className="flex justify-between border-t pt-2 font-semibold">
                    <span>Total Replacement Cost</span>
                    <span>$3,730</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-charcoal-900 mb-2">Important Note</h4>
                  <p className="text-charcoal-600 text-sm">
                    This represents the theoretical cost to replace a mature tree instantly. In reality, it's impossible to purchase and install a 20-inch oak tree - they must be grown over decades. This is why replacement costs often exceed $10,000-$50,000 for large trees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost by Tree Size Table */}
      <section className="py-20 md:py-28 bg-amber-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              Typical Replacement Costs by Tree Size
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              These ranges assume good condition, moderate species value, and average location factors. Your actual costs may vary based on specific circumstances.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-amber-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-charcoal-200">
                    <th className="text-left py-4 font-heading font-semibold text-charcoal-900">Tree Size (DBH)</th>
                    <th className="text-left py-4 font-heading font-semibold text-charcoal-900">Trunk Area</th>
                    <th className="text-left py-4 font-heading font-semibold text-charcoal-900">Typical Age</th>
                    <th className="text-left py-4 font-heading font-semibold text-charcoal-900">Replacement Cost Range</th>
                  </tr>
                </thead>
                <tbody className="text-charcoal-600">
                  <tr className="border-b border-charcoal-100">
                    <td className="py-4 font-medium">6 inches</td>
                    <td className="py-4">28 sq in</td>
                    <td className="py-4">8-15 years</td>
                    <td className="py-4 font-mono font-bold text-forest-700">$400 - $1,200</td>
                  </tr>
                  <tr className="border-b border-charcoal-100">
                    <td className="py-4 font-medium">8 inches</td>
                    <td className="py-4">50 sq in</td>
                    <td className="py-4">12-20 years</td>
                    <td className="py-4 font-mono font-bold text-forest-700">$700 - $2,100</td>
                  </tr>
                  <tr className="border-b border-charcoal-100">
                    <td className="py-4 font-medium">12 inches</td>
                    <td className="py-4">113 sq in</td>
                    <td className="py-4">20-35 years</td>
                    <td className="py-4 font-mono font-bold text-earth-600">$1,600 - $4,800</td>
                  </tr>
                  <tr className="border-b border-charcoal-100">
                    <td className="py-4 font-medium">16 inches</td>
                    <td className="py-4">201 sq in</td>
                    <td className="py-4">30-50 years</td>
                    <td className="py-4 font-mono font-bold text-earth-600">$2,800 - $8,400</td>
                  </tr>
                  <tr className="border-b border-charcoal-100">
                    <td className="py-4 font-medium">20 inches</td>
                    <td className="py-4">314 sq in</td>
                    <td className="py-4">40-65 years</td>
                    <td className="py-4 font-mono font-bold text-amber-600">$4,400 - $13,200</td>
                  </tr>
                  <tr className="border-b border-charcoal-100">
                    <td className="py-4 font-medium">24 inches</td>
                    <td className="py-4">452 sq in</td>
                    <td className="py-4">50-80 years</td>
                    <td className="py-4 font-mono font-bold text-amber-600">$6,300 - $19,000</td>
                  </tr>
                  <tr className="border-b border-charcoal-100">
                    <td className="py-4 font-medium">30 inches</td>
                    <td className="py-4">707 sq in</td>
                    <td className="py-4">65-100+ years</td>
                    <td className="py-4 font-mono font-bold text-amber-700">$9,900 - $29,700</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium">36+ inches</td>
                    <td className="py-4">1,018+ sq in</td>
                    <td className="py-4">80-150+ years</td>
                    <td className="py-4 font-mono font-bold text-amber-700">$14,200 - $42,600+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-amber-200">
              <h4 className="font-semibold text-charcoal-900 mb-3">Lower End Factors</h4>
              <ul className="text-sm text-charcoal-600 space-y-1">
                <li>• Fast-growing species (Willow, Poplar)</li>
                <li>• Poor condition or health issues</li>
                <li>• Rural or low-cost areas</li>
                <li>• Limited landscape value location</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-amber-200">
              <h4 className="font-semibold text-charcoal-900 mb-3">Higher End Factors</h4>
              <ul className="text-sm text-charcoal-600 space-y-1">
                <li>• Desirable species (Oak, Maple, Cherry)</li>
                <li>• Excellent health and structure</li>
                <li>• Premium urban locations</li>
                <li>• High landscape/functional value</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-amber-200">
              <h4 className="font-semibold text-charcoal-900 mb-3">Premium Examples</h4>
              <ul className="text-sm text-charcoal-600 space-y-1">
                <li>• Heritage specimens can exceed $100k</li>
                <li>• Rare or unusual species</li>
                <li>• Perfect specimens in ideal locations</li>
                <li>• Trees with historical significance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Replacement Cost Matters */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              Why Tree Replacement Cost Matters
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Understanding replacement cost is crucial for protecting your investment and ensuring adequate coverage for various scenarios.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="bg-forest-50 rounded-2xl p-8 border border-forest-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-forest-700" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3">
                      Insurance Claims
                    </h3>
                    <p className="text-charcoal-600 leading-relaxed mb-4">
                      When storms, disease, or accidents damage your trees, replacement cost determines your insurance payout. Without proper documentation, you may receive only a fraction of your tree's true value.
                    </p>
                    <ul className="text-sm text-charcoal-600 space-y-1">
                      <li>• Storm damage claims</li>
                      <li>• Vehicle impact coverage</li>
                      <li>• Vandalism or arson</li>
                      <li>• Disease outbreak losses</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-earth-50 rounded-2xl p-8 border border-earth-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-earth-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-earth-600" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3">
                      Legal Disputes
                    </h3>
                    <p className="text-charcoal-600 leading-relaxed mb-4">
                      Property line conflicts, neighbor disputes, or construction damage often require legal proceedings where replacement cost establishes damages.
                    </p>
                    <ul className="text-sm text-charcoal-600 space-y-1">
                      <li>• Neighbor tree damage</li>
                      <li>• Construction impact claims</li>
                      <li>• Property boundary disputes</li>
                      <li>• Utility company damages</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3">
                      Property Valuation
                    </h3>
                    <p className="text-charcoal-600 leading-relaxed mb-4">
                      Mature landscaping significantly impacts property values. Understanding tree replacement costs helps in pricing, purchasing, and improving your property.
                    </p>
                    <ul className="text-sm text-charcoal-600 space-y-1">
                      <li>• Real estate transactions</li>
                      <li>• Property tax assessments</li>
                      <li>• Investment in tree care</li>
                      <li>• Landscape planning decisions</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-forest-50 rounded-2xl p-8 border border-forest-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-forest-700" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3">
                      Tax and Estate Planning
                    </h3>
                    <p className="text-charcoal-600 leading-relaxed mb-4">
                      The IRS recognizes tree replacement costs for estate taxation and charitable donations. Proper documentation can provide significant tax benefits.
                    </p>
                    <ul className="text-sm text-charcoal-600 space-y-1">
                      <li>• Estate tax valuations</li>
                      <li>• Conservation easements</li>
                      <li>• Charitable land donations</li>
                      <li>• Casualty loss deductions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factors That Increase/Decrease Cost */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              What Increases or Decreases Replacement Cost?
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Understanding these factors helps you maximize your tree's value through proper care and strategic planning.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-heading text-2xl font-semibold text-charcoal-900 mb-8 text-center">
                <TrendingUp className="w-8 h-8 text-forest-700 mx-auto mb-2" />
                Factors That Increase Cost
              </h3>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-charcoal-200">
                  <h4 className="font-semibold text-charcoal-900 mb-3">Premium Species Selection</h4>
                  <p className="text-charcoal-600 text-sm mb-3">
                    Native hardwoods, flowering trees, and landscape favorites command higher species factors (1.1-1.2x base value).
                  </p>
                  <div className="bg-forest-50 p-3 rounded text-xs text-charcoal-600">
                    <strong>High-value species:</strong> Oak, Maple, Cherry, Dogwood, American Elm, Black Walnut
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-charcoal-200">
                  <h4 className="font-semibold text-charcoal-900 mb-3">Excellent Health & Structure</h4>
                  <p className="text-charcoal-600 text-sm mb-3">
                    Well-maintained trees with perfect structure and no health issues receive full condition ratings (1.0).
                  </p>
                  <div className="bg-forest-50 p-3 rounded text-xs text-charcoal-600">
                    <strong>Perfect condition indicators:</strong> No dead wood, balanced canopy, strong branch attachments, disease-free
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-charcoal-200">
                  <h4 className="font-semibold text-charcoal-900 mb-3">Premium Locations</h4>
                  <p className="text-charcoal-600 text-sm mb-3">
                    Prominent placement where trees provide maximum landscape and functional value increases location factors.
                  </p>
                  <div className="bg-forest-50 p-3 rounded text-xs text-charcoal-600">
                    <strong>Premium placements:</strong> Front yard specimens, property entrances, energy-saving positions
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-charcoal-200">
                  <h4 className="font-semibold text-charcoal-900 mb-3">High-Cost Markets</h4>
                  <p className="text-charcoal-600 text-sm mb-3">
                    Urban areas with high nursery costs, difficult installation conditions, and premium real estate values.
                  </p>
                  <div className="bg-forest-50 p-3 rounded text-xs text-charcoal-600">
                    <strong>Premium markets:</strong> Major metropolitan areas, high-end suburbs, difficult access sites
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-heading text-2xl font-semibold text-charcoal-900 mb-8 text-center">
                <TrendingUp className="w-8 h-8 text-amber-600 mx-auto mb-2 rotate-180" />
                Factors That Decrease Cost
              </h3>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-charcoal-200">
                  <h4 className="font-semibold text-charcoal-900 mb-3">Fast-Growing Species</h4>
                  <p className="text-charcoal-600 text-sm mb-3">
                    Quick-growing, short-lived, or weedy species receive lower species factors (0.8-0.9x base value).
                  </p>
                  <div className="bg-amber-50 p-3 rounded text-xs text-charcoal-600">
                    <strong>Lower-value species:</strong> Willow, Poplar, Tree of Heaven, Silver Maple, Bradford Pear
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-charcoal-200">
                  <h4 className="font-semibold text-charcoal-900 mb-3">Poor Health & Condition</h4>
                  <p className="text-charcoal-600 text-sm mb-3">
                    Disease, structural problems, or declining health significantly reduce condition ratings (0.1-0.8x).
                  </p>
                  <div className="bg-amber-50 p-3 rounded text-xs text-charcoal-600">
                    <strong>Condition problems:</strong> Dead branches, disease, pest damage, structural defects, decline
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-charcoal-200">
                  <h4 className="font-semibold text-charcoal-900 mb-3">Poor Placement</h4>
                  <p className="text-charcoal-600 text-sm mb-3">
                    Trees in less visible or functional locations, or those causing problems, receive lower location ratings.
                  </p>
                  <div className="bg-amber-50 p-3 rounded text-xs text-charcoal-600">
                    <strong>Problem locations:</strong> Too close to buildings, power lines, poor drainage, confined spaces
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-charcoal-200">
                  <h4 className="font-semibold text-charcoal-900 mb-3">Low-Cost Markets</h4>
                  <p className="text-charcoal-600 text-sm mb-3">
                    Rural areas with lower installation costs and nursery prices result in reduced base pricing.
                  </p>
                  <div className="bg-amber-50 p-3 rounded text-xs text-charcoal-600">
                    <strong>Lower-cost areas:</strong> Rural regions, areas with low real estate values, easy access sites
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation for Insurance */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              Documenting Your Trees for Insurance
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Proper documentation before damage occurs can mean the difference between receiving full compensation or a minimal payout.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-forest-50 rounded-2xl p-8 border border-forest-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center">
                  <Camera className="w-6 h-6 text-forest-700" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900">
                  Photo Documentation
                </h3>
              </div>
              
              <ul className="space-y-3 text-charcoal-600 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-forest-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">Full tree photos from multiple angles</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-forest-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">Close-up shots showing healthy condition</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-forest-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">Trunk measurements with tape measure visible</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-forest-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">Context shots showing location and setting</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-forest-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">Date stamps on all photos</span>
                </li>
              </ul>

              <div className="bg-white p-4 rounded-xl">
                <p className="text-xs text-charcoal-500">
                  <strong>Pro tip:</strong> Take annual photos during peak health season to document tree growth and maintain current records.
                </p>
              </div>
            </div>

            <div className="bg-earth-50 rounded-2xl p-8 border border-earth-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-earth-100 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-earth-600" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900">
                  Written Records
                </h3>
              </div>
              
              <ul className="space-y-3 text-charcoal-600 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-earth-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">Tree species identification and age estimates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-earth-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">Professional maintenance and care records</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-earth-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">Pre-loss value estimates or appraisals</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-earth-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">Planting receipts or installation costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-earth-600 mt-1 flex-shrink-0" />
                  <span className="text-sm">Property survey showing tree locations</span>
                </li>
              </ul>

              <div className="bg-white p-4 rounded-xl">
                <p className="text-xs text-charcoal-500">
                  <strong>Keep copies safe:</strong> Store documentation both digitally and physically in separate locations from your property.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200">
            <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-6">
              What Insurance Companies Look For
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-charcoal-900 mb-3">Pre-Loss Condition</h4>
                <p className="text-sm text-charcoal-600">
                  Clear evidence the tree was healthy before the damaging event. Photos, professional reports, and maintenance records establish this.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-charcoal-900 mb-3">Actual Damage</h4>
                <p className="text-sm text-charcoal-600">
                  Documentation of specific damage caused by the covered event, not pre-existing conditions or natural decline.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-charcoal-900 mb-3">Reasonable Value</h4>
                <p className="text-sm text-charcoal-600">
                  Replacement cost calculations that follow accepted industry methods (CTLA) and reflect local market conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-forest-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
            Calculate Your Tree's Replacement Cost
          </h2>
          <p className="text-xl text-forest-100 mb-10 leading-relaxed">
            Get an accurate estimate of your tree's replacement value using professional CTLA methodology. Know your tree's worth before you need the information.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/calculator">
              <Button size="lg" variant="secondary" rightIcon={<Calculator className="w-5 h-5" />}>
                Start Free Replacement Cost Calculator
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-forest-300 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-forest-100 mb-1">CTLA Standard Method</h4>
                <p className="text-forest-200 text-sm">Same trunk formula calculation used by certified appraisers</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-forest-300 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-forest-100 mb-1">Insurance-Ready Report</h4>
                <p className="text-forest-200 text-sm">Detailed valuation breakdown perfect for claim documentation</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-forest-300 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-forest-100 mb-1">Know Before You Need It</h4>
                <p className="text-forest-200 text-sm">Document tree values before storms, construction, or other risks</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-forest-600">
            <p className="text-forest-300 text-sm">
              Related Resources: 
              <Link href="/how-much-is-my-tree-worth" className="text-forest-100 hover:underline ml-2">Tree Value Guide</Link>
              <span className="mx-2">•</span>
              <Link href="/tree-appraisal-guide" className="text-forest-100 hover:underline">Professional Appraisal Guide</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-charcoal-900 text-charcoal-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <TreeDeciduous className="w-6 h-6 text-forest-400" />
              <span className="font-heading text-xl font-semibold text-white">
                TreeValue Pro
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/resources" className="hover:text-white transition-colors">
                Resources
              </Link>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} TreeValue Pro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}