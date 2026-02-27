import Link from "next/link";
import { TreeDeciduous, Calculator, ArrowRight, DollarSign, Leaf, Clock, MapPin, Droplets } from "lucide-react";
import { Button } from "@/components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maple Tree Value Calculator | Free Estimate | ArborValue",
  description: "Calculate the value of your maple tree for free. Get replacement cost, lumber value, syrup production potential, and ecosystem benefits using professional CTLA methods.",
  keywords: "maple tree value calculator, maple tree worth, how much is a maple tree worth, maple tree appraisal, sugar maple value, red maple value",
  openGraph: {
    title: "Maple Tree Value Calculator | Free Estimate",
    description: "How much is your maple tree worth? Free professional-grade valuation...",
    type: "article",
  },
};

export default function MapleCalculatorPage() {
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
              Acer genus
            </div>

            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 leading-tight mb-6">
              Maple Tree Value Calculator
            </h1>

            <p className="text-lg md:text-xl text-charcoal-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Maple trees offer exceptional value through premium hardwood, spectacular fall color, and syrup production potential. Calculate your tree's total worth using certified appraisal methods.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator">
                <Button size="lg" rightIcon={<Calculator className="w-5 h-5" />}>
                  Calculate Maple Value
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
              Maple Tree Value Overview
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Maple trees provide exceptional value through multiple revenue streams and stunning aesthetic benefits.
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
                $10K - $45K+
              </p>
              <p className="text-sm text-charcoal-600">
                Mature landscape specimens
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-10 h-10 text-amber-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-2">
                Syrup Production
              </h3>
              <p className="text-3xl font-mono font-bold text-amber-700 mb-2">
                $20 - $200
              </p>
              <p className="text-sm text-charcoal-600">
                Annual syrup value per tree
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-10 h-10 text-rose-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-2">
                Fall Color Premium
              </h3>
              <p className="text-3xl font-mono font-bold text-rose-700 mb-2">
                Premium
              </p>
              <p className="text-sm text-charcoal-600">
                Adds 15-25% value
              </p>
            </div>
          </div>

          <div className="bg-forest-50 rounded-2xl p-8">
            <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-6">
              Top Maple Species Value Rankings
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-charcoal-900 mb-2 text-green-700">Highest Value Species</h4>
                <div className="space-y-2">
                  <p className="text-sm"><strong>Sugar Maple:</strong> $12K-$45K+</p>
                  <p className="text-sm"><strong>Red Maple:</strong> $8K-$35K+</p>
                  <p className="text-sm"><strong>Black Maple:</strong> $10K-$40K+</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-charcoal-900 mb-2 text-orange-700">Ornamental Maples</h4>
                <div className="space-y-2">
                  <p className="text-sm"><strong>Japanese Maple:</strong> $5K-$25K+</p>
                  <p className="text-sm"><strong>Silver Maple:</strong> $6K-$25K+</p>
                  <p className="text-sm"><strong>Boxelder:</strong> $3K-$15K+</p>
                </div>
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
              Why Maple Trees Offer Exceptional Multi-Value Benefits
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                  <Droplets className="w-5 h-5 text-rose-700" />
                  Syrup Production Value
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  A mature sugar maple produces 10-20 gallons of sap annually, yielding 1/2 to 1 gallon of syrup worth $48-98. This ongoing revenue stream continues for the tree's lifetime, adding $750-$2,000+ in present value to landscapes, particularly in northern regions.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-amber-700" />
                  Premium Aesthetic Premium
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Sugar maples consistently produce the most spectacular fall color displays - brilliant oranges, reds, and yellows that enhance property values by 15-25%. Their predictable, stunning autumn show makes them the ultimate landscape focal point.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-earth-700" />
                  Dense Shade & Energy Savings
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Maples provide exceptionally dense summer shade that reduces cooling costs by $200-400+ annually. Their distinctive, palmate leaves create a lush canopy that delivers both visual beauty and practical energy savings throughout the growing season.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-forest-700" />
                  Seasonal Interest Cycle
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Maple trees provide interest through all four seasons - spring flowers, dense summer shade, spectacular autumn color, and distinctive winter branching structure. This year-round appeal contributes significantly to their overall landscape value.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-charcoal-100">
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-4">
                Maple Tree Characteristics
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Scientific Name:</span>
                  <span className="font-medium text-charcoal-900">Acer genus</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Maturity Time:</span>
                  <span className="font-medium text-charcoal-900">30-50 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Max Height:</span>
                  <span className="font-medium text-charcoal-900">40-80 feet</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Max Trunk:</span>
                  <span className="font-medium text-charcoal-900">2-4 feet</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Hardness Rating:</span>
                  <span className="font-medium text-charcoal-900">1,450 (hard)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Sap Production:</span>
                  <span className="font-medium text-charcoal-900">10-20 gal/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Lifespan:</span>
                  <span className="font-medium text-charcoal-900">80-250 years</span>
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
            Calculate Your Maple Tree's True Value
          </h2>
          <p className="text-xl text-forest-100 mb-10 max-w-2xl mx-auto">
            Find your maple's exact value including syrup production potential and premium hardwood worth. Our calculator factors in species, diameter, location, and annual benefits.
          </p>
          <Link href="/calculator">
            <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />} className="bg-amber-500 hover:bg-amber-600 text-forest-900">
              Calculate Maple Value Now
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
              Maple Tree Value Questions
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                How much is a maple tree worth?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Maple trees range from $10,000 to $45,000+ for mature landscape specimens. Sugar maples command premium pricing at $12,000-$45,000+, while red maples range $8,000-$35,000+ depending on size and condition.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                What is the syrup production value from a maple tree?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                A mature sugar maple produces 10-20 gallons of sap (1/2 to 1 gallon syrup) worth $48-98 annually. Over 50-80 years, this adds $750-$2,500+ in present value to the tree's landscape worth, mostly valued in northern regions.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                How do I know if my maple tree is a sugar maple vs red maple?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Sugar maple has rounded leaf lobes and bark in shaggy strips, while red maple has pointed lobes with red stems and smooth silver bark. Sugar maples are substantially more valuable due to superior syrup production and fall color.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                How do I calculate my maple tree's value?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Measure trunk circumference at 4.5 feet high. Use our professional calculator which factors in species (sugar vs red), location (shade vs ornamental placement), and condition to provide insurance-grade valuations.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                Are maple trees worth more in northern states?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Yes, northern states show 15-25% higher values for maples due to enhanced fall color and syrup production potential. Climate affects both sugar concentration in sap and autumn color intensity, increasing landscape value.
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
              More information about maple trees, syrup production, and tree valuation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/calculator" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Tree Value Calculator</h3>
                <p className="text-sm text-charcoal-600">Get your maple's exact value</p>
              </div>
            </Link>

            <Link href="/tree-appraisal-guide" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Tree Appraisal Guide</h3>
                <p className="text-sm text-charcoal-600">Learn professional valuation methods</p>
              </div>
            </Link>

            <Link href="/most-valuable-trees" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Most Valuable Trees</h3>
                <p className="text-sm text-charcoal-600">See maple's ranking among top species</p>
              </div>
            </Link>

            <Link href="/oak-tree-value-calculator" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Oak Tree Calculator</h3>
                <p className="text-sm text-charcoal-600">Compare with another premium hardwood</p>
              </div>
            </Link>

            <Link href="/black-walnut-tree-value-calculator" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Black Walnut Calculator</h3>
                <p className="text-sm text-charcoal-600">Another valuable hardwood species</p>
              </div>
            </Link>

            <Link href="/tree-damage-insurance-claim" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Insurance Protection</h3>
                <p className="text-sm text-charcoal-600">Protect your valuable maple investment</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}