import Link from "next/link";
import { TreeDeciduous, Calculator, ArrowRight, DollarSign, Leaf, Clock, MapPin, Shield } from "lucide-react";
import { Button } from "@/components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Oak Tree Value Calculator | Free Estimate | ArborValue",
  description: "Calculate the value of your live oak tree for free. Get replacement cost, heritage value, shade benefits, and ecosystem worth using professional CTLA methods.",
  keywords: "live oak tree value calculator, live oak tree worth, live oak appraisal value, how much is a live oak worth, live oak property value",
  openGraph: {
    title: "Live Oak Tree Value Calculator | Free Estimate",
    description: "How much is your live oak worth? Free professional-grade valuation...",
    type: "article",
  },
};

export default function LiveOakCalculatorPage() {
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
              Quercus virginiana
            </div>

            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 leading-tight mb-6">
              Live Oak Tree Value Calculator
            </h1>

            <p className="text-lg md:text-xl text-charcoal-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Live oaks are among the most iconic and valuable trees in the Southern United States. With massive spreading canopies, hurricane-tested resilience, and lifespans exceeding 500 years, they command some of the highest landscape valuations of any tree species.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator">
                <Button size="lg" rightIcon={<Calculator className="w-5 h-5" />}>
                  Calculate Live Oak Value
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
              Live Oak Tree Value Overview
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Live oaks consistently rank among the most valuable landscape trees in the country, with heritage specimens valued well into six figures.
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
                $15K - $80K+
              </p>
              <p className="text-sm text-charcoal-600">
                Mature landscape specimens
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreeDeciduous className="w-10 h-10 text-amber-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-2">
                Heritage Specimens
              </h3>
              <p className="text-3xl font-mono font-bold text-amber-700 mb-2">
                $100K+
              </p>
              <p className="text-sm text-charcoal-600">
                Protected historic trees
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-rose-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-2">
                Energy Savings
              </h3>
              <p className="text-3xl font-mono font-bold text-rose-700 mb-2">
                $300 - $600
              </p>
              <p className="text-sm text-charcoal-600">
                Annual cooling cost reduction
              </p>
            </div>
          </div>

          <div className="bg-forest-50 rounded-2xl p-8">
            <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-6">
              Live Oak Value by Size
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-charcoal-900 mb-2 text-green-700">Large Specimens (3ft+ trunk)</h4>
                <div className="space-y-2">
                  <p className="text-sm"><strong>3-4 ft diameter:</strong> $25K-$60K+</p>
                  <p className="text-sm"><strong>5-6 ft diameter:</strong> $40K-$80K+</p>
                  <p className="text-sm"><strong>7+ ft diameter:</strong> $60K-$100K+ (heritage class)</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-charcoal-900 mb-2 text-orange-700">Young &amp; Mid-Size</h4>
                <div className="space-y-2">
                  <p className="text-sm"><strong>Under 1 ft diameter:</strong> $3K-$8K</p>
                  <p className="text-sm"><strong>1-2 ft diameter:</strong> $8K-$20K</p>
                  <p className="text-sm"><strong>2-3 ft diameter:</strong> $15K-$35K</p>
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
              Why Live Oaks Command Premium Valuations
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                  <TreeDeciduous className="w-5 h-5 text-forest-700" />
                  Massive Spreading Canopy
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Live oaks produce canopy spreads of 60 to 120 feet, far exceeding most other tree species. A single mature live oak can shade an entire yard, patio, and driveway. This massive coverage provides year-round shade since live oaks are semi-evergreen, keeping their leaves through most of the winter in mild climates.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-amber-700" />
                  Hurricane and Storm Resistance
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Live oaks are legendary for their wind resistance. Studies after Hurricane Katrina showed live oaks had the lowest failure rate of any urban tree species. Their dense, spreading branch structure and deep root systems allow them to withstand winds exceeding 100 mph, making them one of the safest large trees for coastal properties.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-earth-700" />
                  Heritage and Historic Value
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Many communities protect live oaks through heritage tree ordinances, which can add significant legal and cultural value. The Live Oak Society, founded in 1934, registers trees with trunk circumferences over 17 feet. Some insured heritage live oaks carry valuations exceeding $200,000 based on their age, size, and historic significance.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-rose-700" />
                  Southern Real Estate Premium
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Properties with mature live oaks sell for 10-25% more than comparable lots without them in Southern markets. In cities like Savannah, Charleston, and New Orleans, live oak-lined streets are among the most desirable and expensive neighborhoods. A single large live oak can add $20,000-$50,000 to a property&apos;s sale price.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-charcoal-100">
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-4">
                Live Oak Characteristics
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Scientific Name:</span>
                  <span className="font-medium text-charcoal-900">Quercus virginiana</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Maturity Time:</span>
                  <span className="font-medium text-charcoal-900">50-75 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Max Height:</span>
                  <span className="font-medium text-charcoal-900">40-80 feet</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Max Spread:</span>
                  <span className="font-medium text-charcoal-900">60-120 feet</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Max Trunk:</span>
                  <span className="font-medium text-charcoal-900">3-8 feet</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Hardness Rating:</span>
                  <span className="font-medium text-charcoal-900">2,680 (extremely hard)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Lifespan:</span>
                  <span className="font-medium text-charcoal-900">200-500+ years</span>
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
            Calculate Your Live Oak&apos;s True Value
          </h2>
          <p className="text-xl text-forest-100 mb-10 max-w-2xl mx-auto">
            Find your live oak&apos;s exact value including heritage potential, shade benefits, and storm resilience. Our calculator uses professional CTLA methods trusted by arborists and insurance companies.
          </p>
          <Link href="/calculator">
            <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />} className="bg-amber-500 hover:bg-amber-600 text-forest-900">
              Calculate Live Oak Value Now
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
              Live Oak Value Questions
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                How much is a live oak tree worth?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Mature live oaks range from $15,000 to $80,000+ for standard landscape specimens. Heritage-class trees with trunk diameters over 5 feet regularly appraise above $100,000. The highest documented live oak appraisals have exceeded $200,000 for historically significant specimens in urban settings.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                Why are live oaks so valuable compared to other trees?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Live oaks combine several premium characteristics that other species lack. Their massive spreading canopy (up to 120 feet), proven hurricane resistance, semi-evergreen foliage, extreme longevity (500+ years), and cultural significance in the South all contribute to valuations that far exceed most other landscape trees.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                What is heritage tree designation and how does it affect value?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Heritage tree designation is a legal protection granted by many Southern cities and counties to large or historically significant live oaks. Once designated, these trees cannot be removed without special permits, which protects their value. Heritage status typically increases a tree&apos;s appraised value by 20-50% because it signals exceptional size, age, and community importance.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                Can live oaks really survive hurricanes?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Yes. Post-hurricane studies consistently show live oaks outperforming all other urban tree species in storm survival. After Hurricane Katrina, live oaks had failure rates under 10% while many other species exceeded 30-50%. Their low, spreading growth habit and dense wood create a naturally wind-resistant structure that has evolved over millions of years along the Gulf Coast.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                How fast do live oaks grow?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Live oaks grow 1-2 feet in height per year when young, slowing as they mature. They reach a usable canopy size in 15-20 years and full maturity in 50-75 years. While they grow slower than some species, their extreme longevity and ever-increasing canopy spread mean they deliver compounding value over decades, making them one of the best long-term landscape investments.
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
              More information about live oaks, heritage trees, and tree valuation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/calculator" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Tree Value Calculator</h3>
                <p className="text-sm text-charcoal-600">Get your live oak&apos;s exact value</p>
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
                <p className="text-sm text-charcoal-600">See live oak&apos;s top ranking</p>
              </div>
            </Link>

            <Link href="/oak-tree-value-calculator" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Oak Tree Calculator</h3>
                <p className="text-sm text-charcoal-600">Compare other oak species</p>
              </div>
            </Link>

            <Link href="/property-value-trees" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Trees &amp; Property Value</h3>
                <p className="text-sm text-charcoal-600">How trees boost real estate prices</p>
              </div>
            </Link>

            <Link href="/tree-damage-insurance-claim" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Insurance Protection</h3>
                <p className="text-sm text-charcoal-600">Protect your valuable live oak</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
