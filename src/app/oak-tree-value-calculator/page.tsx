import Link from "next/link";
import { TreeDeciduous, Calculator, ArrowRight, DollarSign, Leaf, Clock, MapPin, Shield } from "lucide-react";
import { Button } from "@/components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oak Tree Value Calculator | Free Estimate | ArborValue",
  description: "Calculate the value of your oak tree for free. Get replacement cost, premium hardwood lumber value, and ecosystem benefits using professional CTLA appraisal methods.",
  keywords: "oak tree value calculator, oak tree worth, how much is an oak tree worth, oak tree appraisal, white oak tree value, red oak tree value",
  openGraph: {
    title: "Oak Tree Value Calculator | Free Estimate",
    description: "How much is your oak tree worth? Free professional-grade valuation...",
    type: "article",
  },
};

export default function OakCalculatorPage() {
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
              Quercus genus
            </div>

            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 leading-tight mb-6">
              Oak Tree Value Calculator
            </h1>

            <p className="text-lg md:text-xl text-charcoal-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Oak trees are North America's most valuable landscape investment. Calculate your tree's worth based on species, size, location, and premium timber value using professional appraisal methods.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator">
                <Button size="lg" rightIcon={<Calculator className="w-5 h-5" />}>
                  Calculate Oak Tree Value
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
              Oak Tree Value Overview
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Different oak species have varying values, but all oaks rank among the most valuable residential trees.
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
                $15K - $60K+
              </p>
              <p className="text-sm text-charcoal-600">
                Mature landscape specimens
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-earth-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-2">
                White Oak Premium
              </h3>
              <p className="text-3xl font-mono font-bold text-earth-700 mb-2">
                25% more
              </p>
              <p className="text-sm text-charcoal-600">
                Than red oak
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10 text-amber-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-2">
                Investment Timeline
              </h3>
              <p className="text-3xl font-mono font-bold text-amber-700 mb-2">
                200-600 years
              </p>
              <p className="text-sm text-charcoal-600">
                Potential lifespan
              </p>
            </div>
          </div>

          <div className="bg-forest-50 rounded-2xl p-8">
            <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-6">
              Oak Species Value Rankings
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-charcoal-900 mb-2 text-green-700">Highest Value</h4>
                <div className="space-y-2">
                  <p className="text-sm"><strong>White Oak:</strong> $20K-$60K+</p>
                  <p className="text-sm"><strong>Bur Oak:</strong> $15K-$50K+</p>
                  <p className="text-sm"><strong>Live Oak:</strong> $15K-$75K+</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-charcoal-900 mb-2 text-orange-700">Very High Value</h4>
                <div className="space-y-2">
                  <p className="text-sm"><strong>Red Oak:</strong> $12K-$45K+</p>
                  <p className="text-sm"><strong>Black Oak:</strong> $10K-$40K+</p>
                  <p className="text-sm"><strong>Scarlet Oak:</strong> $8K-$35K+</p>
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
              Why Oak Trees Are North America's Premium Landscaping Investment
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-forest-700" />
                  Centuries-Long Investment
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Oaks are among North America's slowest-growing trees, adding just 1/8 to 1/4 inch of diameter per year. This sluggish growth makes mature specimens incredibly valuable - a 30-inch white oak trunk represents 75-120 years of patient cultivation, impossible to replicate quickly.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-earth-700" />
                  Premium Hardwood Premium
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  White oak wood commands $25-45 per board foot for high-quality lumber, while red oak ranges $15-30. Cabinet makers, flooring manufacturers, and furniture builders prize oak's strength and distinctive grain patterns. A single mature tree yields 800-2,000 board feet.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-forest-700" />
                  Wildlife Habitat Champion
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Oaks support more wildlife than any other North American tree genus. Their acorns feed 100+ bird and mammal species, while branches host 500+ types of caterpillars. This ecological value significantly increases their overall worth in residential landscapes.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-forest-700" />
                  Unmatched Longevity
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  White oaks can live 200-600+ years, making them generational investments. Unlike fast-growing trees that decline after 50-80 years, oaks increase in value throughout their lives, becoming irreplaceable landscape features worth substantial sums.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-charcoal-100">
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-4">
                Oak Tree Characteristics
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Scientific Name:</span>
                  <span className="font-medium text-charcoal-900">Quercus genus</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Maturity Time:</span>
                  <span className="font-medium text-charcoal-900">80-120 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Max Height:</span>
                  <span className="font-medium text-charcoal-900">60-100 feet</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Max Trunk:</span>
                  <span className="font-medium text-charcoal-900">3-6 feet</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Hardness Rating:</span>
                  <span className="font-medium text-charcoal-900">1,350 (very hard)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Lifespan:</span>
                  <span className="font-medium text-charcoal-900">200-600+ years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Growth Rate:</span>
                  <span className="font-medium text-charcoal-900">Slow (1-2 ft/year)</span>
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
            Get Your Oak Tree's Professional Valuation
          </h2>
          <p className="text-xl text-forest-100 mb-10 max-w-2xl mx-auto">
            Find out exactly what your oak tree investment is worth. Our calculator considers species, diameter, location, and condition to provide insurance-grade valuations trusted nationwide.
          </p>
          <Link href="/calculator">
            <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />} className="bg-amber-500 hover:bg-amber-600 text-forest-900">
              Calculate Oak Value Now
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
              Oak Tree Value Questions
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                How much is an oak tree worth?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Oak trees range from $15,000 to $60,000+ for landscape specimens. White oaks command premium pricing at $20,000-$60,000+ (if 24-36 inches diameter), while red oaks range $12,000-$45,000+.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                What is the lumber value of an oak tree?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Premium white oak lumber averages $25-45 per board foot, while red oak ranges $15-30. A mature white oak yields 800-2,000 board feet, making total timber value $20,000-$90,000+ for excellent specimens.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                How do I distinguish white oak vs red oak?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                White oak has rounded leaf lobes (no bristle tips) and bark with a lighter, shaggier appearance. Red oak has pointed leaf lobes with bristles and darker, ridged bark. Both are valuable but white oak commands 25% premium.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                How do I get an oak tree appraised?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Use certified arborists with CTLA training. They measure trunk circumference, assess structure and health, and factor in species-specific location values. Many will provide informal assessments for $150-300.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                Why are oak trees so expensive to replace?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Oaks are expensive because they're slow-growing, have massive root systems requiring years to establish, and represent generational investments. A 30-inch oak replacement (if possible) might cost $50,000-$100,000+.
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
              More information about oak trees and professional tree valuation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/calculator" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Tree Value Calculator</h3>
                <p className="text-sm text-charcoal-600">Get your oak's exact value</p>
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
                <p className="text-sm text-charcoal-600">See oak's ranking among top species</p>
              </div>
            </Link>

            <Link href="/black-walnut-tree-value-calculator" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Black Walnut Calculator</h3>
                <p className="text-sm text-charcoal-600">Compare with another premium species</p>
              </div>
            </Link>

            <Link href="/maple-tree-value-calculator" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Maple Tree Value Calculator</h3>
                <p className="text-sm text-charcoal-600">Another exceptional hardwood species</p>
              </div>
            </Link>

            <Link href="/tree-damage-insurance-claim" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Insurance Protection</h3>
                <p className="text-sm text-charcoal-600">Safeguard your valuable oak investment</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}