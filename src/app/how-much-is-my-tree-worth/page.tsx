import Link from "next/link";
import { TreeDeciduous, Calculator, ArrowRight, Shield, DollarSign, MapPin, Ruler, Heart, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Much Is My Tree Worth? Tree Value Calculator & Guide 2025",
  description: "Discover your tree's true value with our free calculator. Learn factors affecting tree worth, typical value ranges ($2,000-$20,000+), and when to get professional appraisals.",
  keywords: "how much is my tree worth, tree value calculator, tree appraisal value, what is my tree worth, tree replacement cost",
  openGraph: {
    title: "How Much Is My Tree Worth? Free Tree Value Calculator",
    description: "Calculate your tree's replacement value and annual benefits. Professional-grade valuations in 2 minutes.",
    type: "article"
  }
};

export default function HowMuchIsMyTreeWorth() {
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
              <DollarSign className="w-4 h-4" />
              Free Tree Valuation Guide
            </div>

            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 leading-tight mb-6">
              How Much Is My Tree Worth?
            </h1>

            <p className="text-lg md:text-xl text-charcoal-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Your mature tree could be worth thousands of dollars. Discover the factors that determine tree value, typical price ranges, and how to get an accurate appraisal for your property.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator">
                <Button size="lg" rightIcon={<Calculator className="w-5 h-5" />}>
                  Calculate My Tree's Value Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tree Value Ranges */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              What's Your Tree Actually Worth?
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Tree values vary dramatically based on size, species, location, and condition. Here's what you can expect for different types of trees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-cream rounded-2xl p-8 border border-charcoal-100">
              <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center mb-6">
                <TreeDeciduous className="w-7 h-7 text-forest-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3">
                Young Trees (6-12 inches)
              </h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Newly planted to established saplings with moderate size and limited canopy coverage.
              </p>
              <p className="text-3xl font-mono font-bold text-forest-700">
                $500 - $2,500
              </p>
            </div>

            <div className="bg-cream rounded-2xl p-8 border border-charcoal-100">
              <div className="w-14 h-14 bg-earth-100 rounded-xl flex items-center justify-center mb-6">
                <TreeDeciduous className="w-7 h-7 text-earth-600" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3">
                Mature Trees (12-24 inches)
              </h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Well-established trees with full canopies providing significant landscape value.
              </p>
              <p className="text-3xl font-mono font-bold text-earth-600">
                $2,500 - $15,000
              </p>
            </div>

            <div className="bg-cream rounded-2xl p-8 border border-charcoal-100">
              <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center mb-6">
                <TreeDeciduous className="w-7 h-7 text-forest-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3">
                Heritage Trees (24+ inches)
              </h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Large, specimen trees that dominate the landscape and take decades to replace.
              </p>
              <p className="text-3xl font-mono font-bold text-forest-700">
                $15,000 - $50,000+
              </p>
            </div>
          </div>

          <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                  Record-Setting Tree Values
                </h4>
                <p className="text-charcoal-600 leading-relaxed">
                  Some exceptional trees have been appraised for over $100,000. A 100-year-old heritage oak in California was valued at $187,000, and a champion American elm in New York reached $125,000. Location, rarity, and historical significance all play a role.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factors That Affect Tree Value */}
      <section className="py-20 md:py-28 bg-forest-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              6 Key Factors That Determine Tree Value
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Understanding these factors helps you estimate your tree's worth and identify opportunities to increase its value through proper care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 border border-charcoal-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center">
                  <TreeDeciduous className="w-6 h-6 text-forest-700" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900">
                  1. Species & Desirability
                </h3>
              </div>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Native species and popular landscape trees command higher values. Oaks, maples, and flowering trees are typically worth more than fast-growing species like willows or poplars.
              </p>
              <div className="bg-forest-50 p-4 rounded-xl">
                <p className="text-sm text-charcoal-600">
                  <strong className="text-forest-700">High Value:</strong> Oak, Maple, Cherry, Dogwood<br />
                  <strong className="text-forest-700">Medium Value:</strong> Pine, Spruce, Birch<br />
                  <strong className="text-forest-700">Lower Value:</strong> Willow, Poplar, Tree of Heaven
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-charcoal-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-earth-100 rounded-xl flex items-center justify-center">
                  <Ruler className="w-6 h-6 text-earth-600" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900">
                  2. Size & Age
                </h3>
              </div>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Larger, older trees are worth exponentially more because they take decades to replace. A tree's diameter at breast height (DBH) is the primary size measurement used in appraisals.
              </p>
              <div className="bg-earth-50 p-4 rounded-xl">
                <p className="text-sm text-charcoal-600">
                  <strong className="text-earth-600">6" DBH:</strong> ~$500-1,500<br />
                  <strong className="text-earth-600">12" DBH:</strong> ~$2,000-6,000<br />
                  <strong className="text-earth-600">24" DBH:</strong> ~$8,000-25,000+
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-charcoal-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-forest-700" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900">
                  3. Health & Condition
                </h3>
              </div>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Healthy trees with good structure command full value. Diseased, damaged, or declining trees may be worth 50-90% less, depending on the severity of problems.
              </p>
              <div className="bg-forest-50 p-4 rounded-xl">
                <p className="text-sm text-charcoal-600">
                  <strong className="text-forest-700">Excellent:</strong> 100% of base value<br />
                  <strong className="text-forest-700">Good:</strong> 80-99% of base value<br />
                  <strong className="text-forest-700">Poor:</strong> 10-50% of base value
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-charcoal-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-earth-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-earth-600" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900">
                  4. Location & Placement
                </h3>
              </div>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Trees in prominent locations (front yard, property entrance) or providing energy savings (shading the house) are worth more than trees in less visible or functional locations.
              </p>
              <div className="bg-earth-50 p-4 rounded-xl">
                <p className="text-sm text-charcoal-600">
                  <strong className="text-earth-600">Premium:</strong> Front yard, entrance<br />
                  <strong className="text-earth-600">Standard:</strong> Side/back yard<br />
                  <strong className="text-earth-600">Reduced:</strong> Poor drainage, confined space
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-charcoal-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-forest-700" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900">
                  5. Local Market Conditions
                </h3>
              </div>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Tree values vary by region based on local preferences, growing conditions, and nursery costs. Urban areas typically see higher valuations than rural locations.
              </p>
              <div className="bg-forest-50 p-4 rounded-xl">
                <p className="text-sm text-charcoal-600">
                  Geographic multipliers can range from 0.8x in rural areas to 1.5x in premium urban markets.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-charcoal-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-earth-100 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-earth-600" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900">
                  6. Functional Benefits
                </h3>
              </div>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Trees providing energy savings, privacy screening, or noise reduction may receive value adjustments. Annual ecosystem services add to overall worth.
              </p>
              <div className="bg-earth-50 p-4 rounded-xl">
                <p className="text-sm text-charcoal-600">
                  Energy savings alone can add $100-500 annually to a tree's value proposition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIY vs Professional */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              DIY Estimation vs Professional Appraisal
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Understanding when a free estimate is sufficient and when you need a certified appraisal can save you time and money.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-forest-50 rounded-2xl p-8 border border-forest-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-forest-700" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900">
                  Free DIY Estimation
                </h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-600 mt-0.5" />
                  <span className="text-charcoal-600">Quick ballpark valuation for planning</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-600 mt-0.5" />
                  <span className="text-charcoal-600">Insurance claim estimation</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-600 mt-0.5" />
                  <span className="text-charcoal-600">Property value curiosity</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-600 mt-0.5" />
                  <span className="text-charcoal-600">Maintenance investment decisions</span>
                </div>
              </div>

              <Link href="/calculator">
                <Button className="w-full" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Get Free Tree Valuation
                </Button>
              </Link>
            </div>

            <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900">
                  Professional Appraisal
                </h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                  <span className="text-charcoal-600">Legal disputes or litigation</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                  <span className="text-charcoal-600">Estate planning and taxation</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                  <span className="text-charcoal-600">Insurance claims over $5,000</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                  <span className="text-charcoal-600">Municipal permit requirements</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl">
                <p className="text-sm text-charcoal-600">
                  <strong>Cost:</strong> $150-$450 for basic appraisals<br />
                  <strong>Timeline:</strong> 1-2 weeks for report<br />
                  <strong>Credential:</strong> ISA Certified Arborist required
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-charcoal-600">
              Common questions about tree valuation and appraisals
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 border border-charcoal-100">
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-4">
                How accurate are online tree value calculators?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Online calculators provide good ballpark estimates (typically within 25-40% of professional appraisals) but aren't legally defensible. They're excellent for planning purposes, insurance estimates, and understanding your tree's general worth. For legal matters or high-value trees, always get a certified appraisal.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-charcoal-100">
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-4">
                Does tree value affect my property taxes?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                In most areas, individual tree values don't directly impact property taxes since trees are considered part of overall landscaping. However, exceptional specimens or extensive mature landscaping can contribute to higher property assessments. The increase in property value from mature trees typically outweighs any tax implications.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-charcoal-100">
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-4">
                What's the difference between replacement cost and market value?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Replacement cost (CTLA method) calculates what it would cost to replace your tree with one of similar size and species today. Market value considers what someone would actually pay for the tree. Replacement cost is typically higher and is used for insurance claims and legal matters, while market value applies to actual sales.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-charcoal-100">
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-4">
                Can I increase my tree's value through maintenance?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Absolutely! Proper pruning, pest management, soil care, and health monitoring can significantly increase tree value. A well-maintained tree may be worth 2-3 times more than a neglected tree of the same size. Regular care also extends tree life and prevents costly problems.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-charcoal-100">
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-4">
                Should I remove a tree that's declining in value?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Not necessarily. Even declining trees may provide benefits and can sometimes be restored with proper care. Consider the cost of removal, stump grinding, and replacement planting. Consult an arborist about treatment options before deciding to remove. Some trees are worth treating even at reduced values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-forest-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
            Ready to Discover Your Tree's True Worth?
          </h2>
          <p className="text-xl text-forest-100 mb-10 leading-relaxed">
            Get a professional-grade valuation of your tree's replacement cost and annual benefits. Our calculator uses the same CTLA methods employed by certified arborists.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/calculator">
              <Button size="lg" variant="secondary" rightIcon={<Calculator className="w-5 h-5" />}>
                Calculate Your Tree's Value Now
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-forest-300 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-forest-100 mb-2">Professional Methods</h4>
                <p className="text-forest-200 text-sm">Based on CTLA trunk formula and i-Tree ecosystem calculations used by certified arborists</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-forest-300 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-forest-100 mb-2">Detailed Report</h4>
                <p className="text-forest-200 text-sm">Comprehensive Tree Wealth Report with valuation breakdown and care recommendations</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-forest-600">
            <p className="text-forest-300 text-sm">
              Related Resources: 
              <Link href="/tree-appraisal-guide" className="text-forest-100 hover:underline ml-2">Tree Appraisal Guide</Link>
              <span className="mx-2">•</span>
              <Link href="/tree-replacement-cost" className="text-forest-100 hover:underline">Tree Replacement Cost</Link>
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
                Arbor Value
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
              &copy; {new Date().getFullYear()} Arbor Value. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}