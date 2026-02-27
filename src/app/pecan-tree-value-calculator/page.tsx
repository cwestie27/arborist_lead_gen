import Link from "next/link";
import { TreeDeciduous, Calculator, ArrowRight, DollarSign, Leaf, Clock, MapPin, Apple } from "lucide-react";
import { Button } from "@/components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pecan Tree Value Calculator | Free Estimate | ArborValue",
  description: "Calculate the value of your pecan tree for free. Get replacement cost, nut production revenue, lumber value, and ecosystem benefits using professional CTLA methods.",
  keywords: "pecan tree value calculator, how much is a pecan tree worth, pecan tree appraisal, pecan tree value, pecan nut production value",
  openGraph: {
    title: "Pecan Tree Value Calculator | Free Estimate",
    description: "How much is your pecan tree worth? Free professional-grade valuation...",
    type: "article",
  },
};

export default function PecanCalculatorPage() {
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
              Carya illinoinensis
            </div>

            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 leading-tight mb-6">
              Pecan Tree Value Calculator
            </h1>

            <p className="text-lg md:text-xl text-charcoal-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Pecan trees are among the most valuable landscape trees in the Southern United States, combining premium hardwood, annual nut production revenue, and exceptional shade. Calculate your pecan tree&apos;s total worth using certified appraisal methods.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator">
                <Button size="lg" rightIcon={<Calculator className="w-5 h-5" />}>
                  Calculate Pecan Value
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
              Pecan Tree Value Overview
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Pecan trees deliver exceptional value through annual nut harvests, premium lumber, and massive canopy shade that reduces energy costs year after year.
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
                $8K - $60K+
              </p>
              <p className="text-sm text-charcoal-600">
                Mature landscape specimens
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Apple className="w-10 h-10 text-amber-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-2">
                Nut Production
              </h3>
              <p className="text-3xl font-mono font-bold text-amber-700 mb-2">
                $200 - $500
              </p>
              <p className="text-sm text-charcoal-600">
                Annual harvest value per tree
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreeDeciduous className="w-10 h-10 text-rose-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-2">
                Lumber Value
              </h3>
              <p className="text-3xl font-mono font-bold text-rose-700 mb-2">
                $3 - $6/bf
              </p>
              <p className="text-sm text-charcoal-600">
                Premium hardwood per board foot
              </p>
            </div>
          </div>

          <div className="bg-forest-50 rounded-2xl p-8">
            <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-6">
              Pecan Variety Value Rankings
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-charcoal-900 mb-2 text-green-700">Highest Value Varieties</h4>
                <div className="space-y-2">
                  <p className="text-sm"><strong>Desirable:</strong> $15K-$60K+ (top commercial variety)</p>
                  <p className="text-sm"><strong>Stuart:</strong> $12K-$50K+ (disease resistant)</p>
                  <p className="text-sm"><strong>Pawnee:</strong> $10K-$45K+ (early harvest)</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-charcoal-900 mb-2 text-orange-700">Heritage &amp; Native Varieties</h4>
                <div className="space-y-2">
                  <p className="text-sm"><strong>Native Seedling:</strong> $8K-$35K+ (smaller nuts, hardy)</p>
                  <p className="text-sm"><strong>Elliot:</strong> $10K-$40K+ (scab resistant)</p>
                  <p className="text-sm"><strong>Cape Fear:</strong> $8K-$30K+ (consistent producer)</p>
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
              Why Pecan Trees Are Among the Most Valuable Landscape Trees
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                  <Apple className="w-5 h-5 text-amber-700" />
                  Annual Nut Production Revenue
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  A mature pecan tree produces 50 to 150 pounds of nuts annually, with improved varieties reaching 200+ pounds in good years. At retail prices of $4-8 per pound, a single tree can generate $200-500 or more each season. Over a 100-year productive lifespan, this revenue stream adds $5,000-$15,000+ in present value.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-earth-700" />
                  Premium Hardwood Lumber
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Pecan wood is prized for furniture, flooring, and smoking meat. With a Janka hardness rating of 1,820, it ranks among the hardest domestic hardwoods. Pecan lumber sells for $3-6 per board foot, and large specimens can yield thousands of board feet of usable timber.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                  <TreeDeciduous className="w-5 h-5 text-forest-700" />
                  Massive Shade Canopy
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Pecan trees grow 70 to 100 feet tall with canopy spreads of 40-75 feet, making them one of the largest shade trees in North America. This extensive coverage reduces cooling costs by $300-600 annually and creates comfortable outdoor living spaces throughout the hot Southern summers.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-rose-700" />
                  Exceptional Longevity
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Pecan trees routinely live 200 to 300 years, with some documented specimens exceeding 500 years. This extraordinary lifespan means a pecan tree planted today will provide value for generations, making them a true legacy investment for any property.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-charcoal-100">
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-4">
                Pecan Tree Characteristics
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Scientific Name:</span>
                  <span className="font-medium text-charcoal-900">Carya illinoinensis</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Maturity Time:</span>
                  <span className="font-medium text-charcoal-900">20-30 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Max Height:</span>
                  <span className="font-medium text-charcoal-900">70-100 feet</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Max Trunk:</span>
                  <span className="font-medium text-charcoal-900">3-6 feet</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Hardness Rating:</span>
                  <span className="font-medium text-charcoal-900">1,820 (very hard)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Nut Production:</span>
                  <span className="font-medium text-charcoal-900">50-200 lbs/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Lifespan:</span>
                  <span className="font-medium text-charcoal-900">200-300+ years</span>
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
            Calculate Your Pecan Tree&apos;s True Value
          </h2>
          <p className="text-xl text-forest-100 mb-10 max-w-2xl mx-auto">
            Get your pecan tree&apos;s exact value including nut production potential and premium hardwood worth. Our calculator factors in variety, diameter, condition, and annual revenue.
          </p>
          <Link href="/calculator">
            <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />} className="bg-amber-500 hover:bg-amber-600 text-forest-900">
              Calculate Pecan Value Now
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
              Pecan Tree Value Questions
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                How much is a pecan tree worth?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Mature pecan trees range from $8,000 to $60,000+ depending on size, variety, condition, and location. Improved grafted varieties like Desirable and Stuart command premium pricing due to superior nut quality. Heritage specimens with documented age can exceed these ranges significantly.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                How much money can a pecan tree produce each year?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                A healthy mature pecan tree produces 50-200 pounds of nuts annually, worth $200-500+ at retail prices. Production varies by year since pecans are alternate-bearing, meaning heavy crop years alternate with lighter ones. Improved varieties tend to produce more consistently than native seedlings.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                How can I tell how old my pecan tree is?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Estimate pecan tree age by measuring the trunk diameter at 4.5 feet above ground. Pecan trees grow roughly 1-1.5 inches in diameter per year, so a tree with a 24-inch diameter is approximately 16-24 years old. Trees over 36 inches in diameter are typically 30+ years old and approaching peak production.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                Are pecan trees more valuable than other hardwoods?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Pecan trees often exceed other hardwoods in total value because they combine landscape replacement value with annual nut production revenue. While black walnut lumber may sell for more per board foot, the ongoing income from pecan harvests makes them one of the most valuable trees to own over time.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                Do pecan trees increase property value?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Yes, mature pecan trees can increase property value by 10-20% or more. Real estate studies show that large, healthy shade trees add $10,000-$20,000 to home values, and pecan trees carry additional value through their nut production potential. Properties with established pecan orchards command significant premiums in Southern markets.
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
              More information about pecan trees, nut production, and tree valuation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/calculator" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Tree Value Calculator</h3>
                <p className="text-sm text-charcoal-600">Get your pecan&apos;s exact value</p>
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
                <p className="text-sm text-charcoal-600">See pecan&apos;s ranking among top species</p>
              </div>
            </Link>

            <Link href="/oak-tree-value-calculator" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Oak Tree Calculator</h3>
                <p className="text-sm text-charcoal-600">Compare with another Southern favorite</p>
              </div>
            </Link>

            <Link href="/maple-tree-value-calculator" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Maple Tree Calculator</h3>
                <p className="text-sm text-charcoal-600">Another premium hardwood species</p>
              </div>
            </Link>

            <Link href="/tree-damage-insurance-claim" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Insurance Protection</h3>
                <p className="text-sm text-charcoal-600">Protect your valuable pecan investment</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
