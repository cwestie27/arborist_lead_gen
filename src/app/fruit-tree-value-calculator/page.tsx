import Link from "next/link";
import { TreeDeciduous, Calculator, ArrowRight, DollarSign, Leaf, Clock, MapPin, Apple } from "lucide-react";
import { Button } from "@/components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fruit Tree Value Calculator | Free Estimate | ArborValue",
  description: "Calculate the value of your fruit tree for free. Get replacement cost, annual fruit production revenue, and landscape benefits for apple, cherry, pear, citrus, and more.",
  keywords: "fruit tree value calculator, how much is a fruit tree worth, fruit tree appraisal, apple tree value, cherry tree value, citrus tree value",
  openGraph: {
    title: "Fruit Tree Value Calculator | Free Estimate",
    description: "How much is your fruit tree worth? Free professional-grade valuation...",
    type: "article",
  },
};

export default function FruitTreeCalculatorPage() {
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
              <Apple className="w-4 h-4" />
              Fruit-Bearing Species
            </div>

            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 leading-tight mb-6">
              Fruit Tree Value Calculator
            </h1>

            <p className="text-lg md:text-xl text-charcoal-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Fruit trees combine landscape beauty with annual harvests worth hundreds or thousands of dollars. Whether you own apple, cherry, pear, or citrus trees, calculate their full value including replacement cost, production revenue, and property benefits.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator">
                <Button size="lg" rightIcon={<Calculator className="w-5 h-5" />}>
                  Calculate Fruit Tree Value
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
              Fruit Tree Value Overview
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Fruit trees deliver value through three channels: landscape replacement cost, annual fruit production, and aesthetic appeal including spring blossoms and seasonal interest.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-10 h-10 text-forest-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-2">
                Landscape Value Range
              </h3>
              <p className="text-3xl font-mono font-bold text-forest-700 mb-2">
                $2K - $25K+
              </p>
              <p className="text-sm text-charcoal-600">
                Mature specimen trees
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Apple className="w-10 h-10 text-amber-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-2">
                Annual Harvest
              </h3>
              <p className="text-3xl font-mono font-bold text-amber-700 mb-2">
                $100 - $2,000
              </p>
              <p className="text-sm text-charcoal-600">
                Per tree depending on species
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-10 h-10 text-rose-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-2">
                Blossom Premium
              </h3>
              <p className="text-3xl font-mono font-bold text-rose-700 mb-2">
                10 - 20%
              </p>
              <p className="text-sm text-charcoal-600">
                Added landscape value from spring blooms
              </p>
            </div>
          </div>

          <div className="bg-forest-50 rounded-2xl p-8">
            <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-6">
              Fruit Tree Value by Species
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-charcoal-900 mb-2 text-green-700">Highest Value Species</h4>
                <div className="space-y-2">
                  <p className="text-sm"><strong>Cherry (sweet):</strong> $5K-$20K+ (premium fruit + ornamental)</p>
                  <p className="text-sm"><strong>Apple (heritage):</strong> $3K-$15K+ (production + cider value)</p>
                  <p className="text-sm"><strong>Avocado:</strong> $5K-$25K+ (high-value fruit, warm climates)</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-charcoal-900 mb-2 text-orange-700">Popular Landscape Fruit Trees</h4>
                <div className="space-y-2">
                  <p className="text-sm"><strong>Citrus (lemon/orange):</strong> $2K-$12K+ (year-round in warm zones)</p>
                  <p className="text-sm"><strong>Pear:</strong> $3K-$12K+ (hardy, long-lived)</p>
                  <p className="text-sm"><strong>Peach:</strong> $2K-$8K+ (shorter-lived, high production)</p>
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
              What Makes Fruit Trees Valuable
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                  <Apple className="w-5 h-5 text-amber-700" />
                  Annual Fruit Production Revenue
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  A mature apple tree produces 400-800 pounds of fruit annually, worth $200-800 at farmers market prices. Cherry trees yield 100-200 pounds ($300-1,000+), while a single avocado tree in Southern California can produce $500-2,000 worth of fruit per year. This recurring revenue adds substantial present value to any fruit tree appraisal.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-rose-700" />
                  Spring Blossom Aesthetic Value
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Fruit trees deliver spectacular spring displays that rival purely ornamental species. Cherry blossoms, apple blossoms, and pear flowers add 10-20% to a tree&apos;s landscape appraisal value. This seasonal show creates emotional attachment and curb appeal that directly translates to higher property values.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                  <TreeDeciduous className="w-5 h-5 text-forest-700" />
                  Pollination and Ecosystem Benefits
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Fruit trees attract pollinators like bees, butterflies, and birds, supporting local ecosystems and improving pollination for nearby gardens. A single fruit tree can support thousands of pollinator visits during bloom season, boosting yields in surrounding vegetable gardens by 20-40%.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-earth-700" />
                  Organic and Local Food Premium
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Homegrown organic fruit commands premium prices. Organic apples sell for $3-5 per pound at farmers markets, organic cherries for $6-12 per pound, and organic citrus for $2-4 per pound. Trees that produce without commercial pesticides carry additional value for health-conscious homeowners and can reduce grocery bills by $500-2,000 per year.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-charcoal-100">
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-4">
                Fruit Tree Characteristics (Ranges)
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Common Species:</span>
                  <span className="font-medium text-charcoal-900">Apple, Cherry, Pear, Citrus</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">First Harvest:</span>
                  <span className="font-medium text-charcoal-900">3-7 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Peak Production:</span>
                  <span className="font-medium text-charcoal-900">5-15 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Max Height:</span>
                  <span className="font-medium text-charcoal-900">15-50 feet</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Annual Yield:</span>
                  <span className="font-medium text-charcoal-900">50-800 lbs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Blossom Season:</span>
                  <span className="font-medium text-charcoal-900">Spring (Mar-May)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Lifespan:</span>
                  <span className="font-medium text-charcoal-900">30-150 years</span>
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
            Calculate Your Fruit Tree&apos;s True Value
          </h2>
          <p className="text-xl text-forest-100 mb-10 max-w-2xl mx-auto">
            Get your fruit tree&apos;s complete value including production revenue, landscape replacement cost, and ecosystem benefits. Works for apple, cherry, pear, citrus, and all other fruit-bearing species.
          </p>
          <Link href="/calculator">
            <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />} className="bg-amber-500 hover:bg-amber-600 text-forest-900">
              Calculate Fruit Tree Value Now
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
              Fruit Tree Value Questions
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                How much is a fruit tree worth?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Fruit tree values range from $2,000 to $25,000+ depending on species, size, age, and production capacity. A mature sweet cherry tree in good health may appraise at $5,000-$20,000, while a productive apple tree typically falls in the $3,000-$15,000 range. Avocado trees in prime growing regions can exceed $25,000.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                Which fruit trees are the most valuable?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Avocado trees top the list in warm climates due to their high-value fruit ($500-2,000/year production). Sweet cherry trees rank highly for their combined ornamental and production value. Heritage apple varieties, especially those suited to cider production, have seen increasing valuations as craft cider demand grows. Citrus trees in frost-free zones also command premium prices.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                How do you calculate the production value of a fruit tree?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Multiply the tree&apos;s average annual yield (in pounds) by the local market price per pound, then calculate the present value of that income stream over the tree&apos;s remaining productive life. For example, an apple tree yielding 500 lbs/year at $2/lb generates $1,000 annually. Over a 30-year remaining life with a discount rate, that production adds $8,000-$15,000 in present value.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                Do fruit trees increase property value?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Yes. Mature fruit trees increase property values by 5-15% on average. Buyers pay premiums for established, producing trees because they take years to reach full production. Properties marketed with &quot;mature fruit orchard&quot; or &quot;producing fruit trees&quot; consistently attract more interest and higher offers, especially in markets where local food and sustainability are valued.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                How do you appraise an orchard vs a single landscape fruit tree?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Single landscape fruit trees are appraised using the CTLA method, which considers replacement cost based on size, species, condition, and location. Orchards use an income-based approach, calculating the present value of expected fruit revenue minus operating costs. A well-maintained 10-tree home orchard might appraise at $30,000-$100,000+ depending on species mix and production history.
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
              More information about fruit trees, production value, and tree appraisal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/calculator" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Tree Value Calculator</h3>
                <p className="text-sm text-charcoal-600">Get your fruit tree&apos;s exact value</p>
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
                <p className="text-sm text-charcoal-600">Where fruit trees rank overall</p>
              </div>
            </Link>

            <Link href="/property-value-trees" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Trees &amp; Property Value</h3>
                <p className="text-sm text-charcoal-600">How trees boost real estate prices</p>
              </div>
            </Link>

            <Link href="/pecan-tree-value-calculator" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Pecan Tree Calculator</h3>
                <p className="text-sm text-charcoal-600">Another top nut-producing species</p>
              </div>
            </Link>

            <Link href="/tree-damage-insurance-claim" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Insurance Protection</h3>
                <p className="text-sm text-charcoal-600">Protect your fruit tree investment</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
