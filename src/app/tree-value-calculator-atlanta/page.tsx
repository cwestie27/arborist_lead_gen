import Link from "next/link";
import { TreeDeciduous, Calculator, ArrowRight, DollarSign, Leaf, MapPin, Shield } from "lucide-react";
import { Button } from "@/components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tree Value Calculator Atlanta | Free Estimate | ArborValue",
  description: "Calculate the value of your Atlanta tree for free. Get a professional CTLA-based estimate for any species - willow oak, magnolia, pine, dogwood - in seconds.",
  keywords: "tree value calculator Atlanta, Atlanta tree value, how much is my tree worth Atlanta, tree appraisal calculator Atlanta, Atlanta tree worth",
  openGraph: {
    title: "Tree Value Calculator Atlanta | Free Estimate | ArborValue",
    description: "How much is your Atlanta tree worth? Free professional estimate in 2 minutes.",
    type: "article",
  },
};

export default function TreeValueCalculatorAtlantaPage() {
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
              <MapPin className="w-4 h-4" />
              Atlanta, GA
            </div>

            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 leading-tight mb-6">
              Tree Value Calculator - Atlanta, GA
            </h1>

            <p className="text-lg md:text-xl text-charcoal-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Atlanta's trees are worth more than most homeowners realize. With 47% canopy coverage and strict city ordinances, your trees are protected assets. Find out what yours are worth - free, in under 2 minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator">
                <Button size="lg" rightIcon={<Calculator className="w-5 h-5" />}>
                  Calculate My Atlanta Tree's Value
                </Button>
              </Link>
            </div>

            <p className="text-sm text-charcoal-500 mt-4">
              Uses professional CTLA appraisal methods - no email required
            </p>
          </div>
        </div>
      </section>

      {/* Quick Value Reference */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              Atlanta Tree Values at a Glance
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Common Atlanta species and their approximate appraised values for healthy, mature specimens in prime neighborhoods like Buckhead, Druid Hills, and Morningside.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreeDeciduous className="w-10 h-10 text-forest-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-2">
                Willow Oak
              </h3>
              <p className="text-3xl font-mono font-bold text-forest-700 mb-2">
                $8K - $30K+
              </p>
              <p className="text-sm text-charcoal-600">
                Atlanta's signature street tree
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-10 h-10 text-earth-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-2">
                Southern Magnolia
              </h3>
              <p className="text-3xl font-mono font-bold text-earth-700 mb-2">
                $5K - $20K+
              </p>
              <p className="text-sm text-charcoal-600">
                Iconic Atlanta ornamental
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-10 h-10 text-amber-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-2">
                Loblolly Pine
              </h3>
              <p className="text-3xl font-mono font-bold text-amber-700 mb-2">
                $3K - $15K
              </p>
              <p className="text-sm text-charcoal-600">
                Georgia's most common pine
              </p>
            </div>
          </div>

          <div className="bg-forest-50 rounded-2xl p-8">
            <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-6">
              Atlanta Neighborhood Value Factors
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-charcoal-900 mb-4">Premium Location Neighborhoods</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-charcoal-700">Buckhead</span>
                    <span className="text-xs px-2 py-1 bg-forest-100 text-forest-800 rounded-full">Highest Multiplier</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-charcoal-700">Druid Hills</span>
                    <span className="text-xs px-2 py-1 bg-forest-100 text-forest-800 rounded-full">Highest Multiplier</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-charcoal-700">Virginia-Highland</span>
                    <span className="text-xs px-2 py-1 bg-earth-100 text-earth-800 rounded-full">High Multiplier</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-charcoal-700">Morningside / Lenox Park</span>
                    <span className="text-xs px-2 py-1 bg-earth-100 text-earth-800 rounded-full">High Multiplier</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-charcoal-700">Decatur</span>
                    <span className="text-xs px-2 py-1 bg-earth-100 text-earth-800 rounded-full">High Multiplier</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-charcoal-900 mb-4">Why Location Multiplies Value</h4>
                <div className="space-y-3 text-sm text-charcoal-600">
                  <p>In CTLA appraisals, location accounts for up to 100% premium over base value. A willow oak on a Buckhead estate is worth far more than the same tree in a commercial parking lot.</p>
                  <p>Atlanta's strong real estate market means trees in high-demand neighborhoods carry proportionally higher location factors than the national average.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Affects Value */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-forest-50 to-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              What Affects Your Atlanta Tree's Value
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-charcoal-100">
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-forest-700" />
                Factors That Increase Value
              </h3>
              <div className="space-y-3 text-sm text-charcoal-700">
                <p><strong>Large diameter trunk</strong> - Value scales with the square of trunk area. A 24" tree is worth 4x a 12" tree</p>
                <p><strong>Premium species</strong> - Willow oak, magnolia, and dogwood carry high species multipliers</p>
                <p><strong>Excellent condition</strong> - No structural defects, healthy crown, no pest damage</p>
                <p><strong>Prime location</strong> - Street trees, front yard focal points, Buckhead or Druid Hills addresses</p>
                <p><strong>Age and irreplaceability</strong> - Old growth specimens are exponentially harder to replace</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-charcoal-100">
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-earth-700" />
                Factors That Reduce Value
              </h3>
              <div className="space-y-3 text-sm text-charcoal-700">
                <p><strong>Structural defects</strong> - Co-dominant stems, included bark, major cracks reduce condition rating</p>
                <p><strong>Disease or pests</strong> - Active infestations lower both condition and longevity factors</p>
                <p><strong>Poor location</strong> - Backyard trees away from street view score lower on location factor</p>
                <p><strong>Previous topping</strong> - Improper pruning creates permanent structural weakness</p>
                <p><strong>Root damage</strong> - Construction, paving, or soil compaction reduces vigor and lifespan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-forest-900 to-forest-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
            Ready to Calculate Your Atlanta Tree's Value?
          </h2>
          <p className="text-xl text-forest-100 mb-10 max-w-2xl mx-auto">
            Enter your tree's species, diameter, and location. Get a professional CTLA-based estimate instantly - the same method used by ISA certified arborists across Atlanta.
          </p>
          <Link href="/calculator">
            <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />} className="bg-amber-500 hover:bg-amber-600 text-forest-900">
              Start Free Calculation
            </Button>
          </Link>
          <p className="text-sm text-forest-200 mt-4">
            Takes 2 minutes - No email required
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              Atlanta Tree Value Questions
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                How accurate is the online tree value calculator for Atlanta?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Our calculator uses the CTLA trunk formula - the same method used by ISA certified arborists in Atlanta for formal appraisals. Results are directionally accurate and appropriate for insurance preliminary estimates. For legal or permit purposes, a written report from a licensed arborist is still required.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                What tree species are most valuable in Atlanta?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                In Atlanta, willow oaks and other oak species (white oak, water oak) typically carry the highest appraised values due to their size, longevity, and high species multipliers. Southern magnolia, beech, and large native hardwoods also appraise very well. Dogwood, while smaller, commands high value relative to size.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                Do Atlanta trees add value to my property?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Yes - significantly. Studies show mature trees increase residential property values by 10-20% in Atlanta's market. In neighborhoods like Druid Hills and Buckhead, where tree canopy is integral to the neighborhood's character, that premium can be even higher. A single large willow oak can add $15,000-$25,000 to appraised property value.
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
              More Atlanta Tree Resources
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/tree-appraisal-atlanta" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Tree Appraisal Atlanta</h3>
                <p className="text-sm text-charcoal-600">Full guide to Atlanta tree appraisals</p>
              </div>
            </Link>

            <Link href="/atlanta-tree-removal-cost" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Atlanta Tree Removal Cost</h3>
                <p className="text-sm text-charcoal-600">Know the cost - and the value - before you remove</p>
              </div>
            </Link>

            <Link href="/certified-arborist-atlanta" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Certified Arborists Atlanta</h3>
                <p className="text-sm text-charcoal-600">Find ISA certified tree experts near you</p>
              </div>
            </Link>

            <Link href="/oak-tree-value-calculator" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Oak Tree Value Calculator</h3>
                <p className="text-sm text-charcoal-600">Detailed calculator for Atlanta's most common tree</p>
              </div>
            </Link>

            <Link href="/tree-appraisal-guide" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Tree Appraisal Guide</h3>
                <p className="text-sm text-charcoal-600">Learn how professional appraisals work</p>
              </div>
            </Link>

            <Link href="/property-value-trees" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Trees and Property Value</h3>
                <p className="text-sm text-charcoal-600">How trees impact Atlanta home values</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
