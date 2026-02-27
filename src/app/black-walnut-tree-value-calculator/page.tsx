import Link from "next/link";
import { TreeDeciduous, Calculator, ArrowRight, DollarSign, Leaf, Clock, MapPin, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Black Walnut Tree Value Calculator | Free Estimate | ArborValue",
  description: "Calculate the value of your black walnut tree for free. Get replacement cost, lumber value, and ecosystem benefits using professional CTLA appraisal methods.",
  keywords: "black walnut tree value calculator, black walnut tree worth, how much is a black walnut tree worth, black walnut tree appraisal",
  openGraph: {
    title: "Black Walnut Tree Value Calculator | Free Estimate",
    description: "How much is your black walnut tree worth? Free professional-grade valuation...",
    type: "article",
  },
};

export default function BlackWalnutCalculatorPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-cream">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 bg-forest-200 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-earth-200 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-forest-100 text-forest-800 rounded-full text-sm font-medium mb-8">
              <Leaf className="w-4 h-4" />
              Juglans nigra
            </div>

            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 leading-tight mb-6">
              Black Walnut Tree Value Calculator
            </h1>

            <p className="text-lg md:text-xl text-charcoal-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Black walnut trees are among the most valuable in North America. Calculate your tree's worth for timber value, nut production, and landscape significance with our free tool.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator">
                <Button size="lg" rightIcon={<Calculator className="w-5 h-5" />}>
                  Calculate Black Walnut Value
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Overview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              Black Walnut Tree Value Overview
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Black walnut trees consistently rank in the top 3 most valuable trees. Here's what drives their exceptional worth.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-10 h-10 text-forest-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-2">
                Overall Value Range
              </h3>
              <p className="text-3xl font-mono font-bold text-forest-700 mb-2">
                $10K - $50K+
              </p>
              <p className="text-sm text-charcoal-600">
                Mature landscape specimens
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreeDeciduous className="w-10 h-10 text-earth-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-2">
                Timber Value
              </h3>
              <p className="text-3xl font-mono font-bold text-earth-700 mb-2">
                $2K - $10K
              </p>
              <p className="text-sm text-charcoal-600">
                Per mature log
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-10 h-10 text-amber-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-2">
                Nut Production
              </h3>
              <p className="text-3xl font-mono font-bold text-amber-700 mb-2">
                $50 - $500
              </p>
              <p className="text-sm text-charcoal-600">
                Annual nut harvest value
              </p>
            </div>
          </div>

          <div className="bg-forest-50 rounded-2xl p-8">
            <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-4">
              What Affects Black Walnut Value
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-charcoal-900 mb-2">Timber Quality Factors</h4>
                <ul className="text-sm text-charcoal-600 space-y-1">
                  <li>• Clear trunk height (20+ feet ideal)</li>
                  <li>• Straight trunk without forks</li>
                  <li>• Mature diameter (18+ inches)</li>
                  <li>• No heart damage or decay</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-charcoal-900 mb-2">Landscape Factors</h4>
                <ul className="text-sm text-charcoal-600 space-y-1">
                  <li>• Central landscape placement</li>
                  <li>• Structural soundness</li>
                  <li>• Shade canopy value</li>
                  <li>• Long-term nut production</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Species-Specific Info */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-forest-50 to-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              Why Black Walnut Trees Are So Valuable
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-forest-700" />
                  Extremely Slow Growth
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Black walnuts grow just 12-24 inches per year, making mature trees nearly irreplaceable within a human lifetime. A 24-inch diameter trunk represents 60-80 years of growth - impossible to substitute quickly.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-earth-700" />
                  Premium Hardwood
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Black walnut wood commands $8-15 per board foot for high-quality lumber. Cabinet makers, gunstock manufacturers, and fine furniture makers prize the rich, dark wood. A single healthy tree can yield 800-1,500 board feet.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-700" />
                  Rarity in Landscapes
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  While abundant in forests, excellent landscape specimens are rare due to the tree's juglone toxicity and tendency to create bare, weedy areas underneath. Mature, healthy landscape walnuts are prized when properly maintained.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-forest-700" />
                  Dual Value Stream
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Unlike most trees, black walnuts provide value in two ways: annual nut production worth $50-500/year, plus eventual timber value. This dual-purpose nature makes them exceptionally valuable as long-term landscape investments.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-charcoal-100">
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-4">
                Black Walnut Tree at a Glance
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Scientific Name:</span>
                  <span className="font-medium text-charcoal-900">Juglans nigra</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Maturity Time:</span>
                  <span className="font-medium text-charcoal-900">60-80 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Max Height:</span>
                  <span className="font-medium text-charcoal-900">75-100 feet</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Max Trunk:</span>
                  <span className="font-medium text-charcoal-900">3-6 feet diameter</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Hardness Rating:</span>
                  <span className="font-medium text-charcoal-900">1010 (very hard)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Lifespan:</span>
                  <span className="font-medium text-charcoal-900">150-250 years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-forest-900 to-forest-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
            Get Your Black Walnut Tree's Value Now
          </h2>
          <p className="text-xl text-forest-100 mb-10 max-w-2xl mx-auto">
            Find out exactly what your black walnut tree is worth. Our calculator uses professional CTLA appraisal methods trusted by certified arborists and insurance companies nationwide.
          </p>
          <Link href="/calculator">
            <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />} className="bg-amber-500 hover:bg-amber-600 text-forest-900">
              Calculate Value Now
            </Button>
          </Link>
          <p className="text-sm text-forest-200 mt-4">
            Takes 2 minutes - No email required
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              Black Walnut Tree Value Questions
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                How much is a black walnut tree worth?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Black walnut trees range from $10,000 to $50,000+ for landscape specimens, depending on size, condition, and location. Timber value alone can be $2,000-$10,000 per mature log for high-quality trees.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                What is the lumber value of a black walnut tree?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Premium black walnut lumber averages $8-15 per board foot for furniture-grade wood. A typical 24-inch diameter tree yields 800-1,500 board feet, making total timber value $6,400-$22,500 for excellent specimens.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                How do I know if my black walnut tree has timber value?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Inspect for: clear trunk height of 20+ feet, straight trunk with single leader (no forks), diameter of 18+ inches at chest height, healthy bark with no damage, and well-spaced branches with no dead wood.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                How do I get a black walnut tree appraised?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Use certified arborists who use CTLA appraisal methods. Provide tree measurements, condition details, and location context. Many will provide free informal assessments, while written reports may cost $200-500.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                Why are black walnut trees more valuable than oak?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Black walnut wood is significantly more expensive ($8-15 vs $3-7 per board foot), the trees are rarer in landscapes due to juglone toxicity, and they provide dual value through both nut production and timber.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-20 bg-forest-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl font-semibold text-charcoal-900 mb-4">
              Related Resources
            </h2>
            <p className="text-charcoal-600">
              More information about black walnut trees and tree valuation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/calculator" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Tree Value Calculator</h3>
                <p className="text-sm text-charcoal-600">Get your black walnut's exact value</p>
              </div>
            </Link>

            <Link href="/tree-appraisal-guide" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Tree Appraisal Guide</h3>
                <p className="text-sm text-charcoal-600">Learn how experts assess tree value</p>
              </div>
            </Link>

            <Link href="/most-valuable-trees" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Most Valuable Trees</h3>
                <p className="text-sm text-charcoal-600">See how walnut compares to other species</p>
              </div>
            </Link>

            <Link href="/oak-tree-value-calculator" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Oak Tree Value Calculator</h3>
                <p className="text-sm text-charcoal-600">Compare with another premium species</p>
              </div>
            </Link>

            <Link href="/maple-tree-value-calculator" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Maple Tree Value Calculator</h3>
                <p className="text-sm text-charcoal-600">Another valuable hardwood species</p>
              </div>
            </Link>

            <Link href="/tree-damage-insurance-claim" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Insurance Claims</h3>
                <p className="text-sm text-charcoal-600">Protect your valuable tree investment</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}