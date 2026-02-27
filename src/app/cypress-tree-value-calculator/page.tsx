import Link from "next/link";
import { TreeDeciduous, Calculator, ArrowRight, DollarSign, Leaf, Clock, MapPin, Droplets } from "lucide-react";
import { Button } from "@/components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cypress Tree Value Calculator | Free Estimate | ArborValue",
  description: "Calculate the value of your cypress tree for free. Get replacement cost, lumber value, and ecosystem benefits for bald cypress, Italian cypress, and Leyland cypress using CTLA methods.",
  keywords: "cypress tree value calculator, cypress tree worth, bald cypress value, cypress wood value, cypress lumber value, cypress tree appraisal",
  openGraph: {
    title: "Cypress Tree Value Calculator | Free Estimate",
    description: "How much is your cypress tree worth? Free professional-grade valuation...",
    type: "article",
  },
};

export default function CypressCalculatorPage() {
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
              Taxodium distichum
            </div>

            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 leading-tight mb-6">
              Cypress Tree Value Calculator
            </h1>

            <p className="text-lg md:text-xl text-charcoal-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Cypress trees are prized for their extraordinary rot-resistant wood, wetland adaptability, and lifespans exceeding 1,000 years. Bald cypress specimens are among the most valuable landscape trees in the Southeast, with their distinctive buttressed trunks and feathery foliage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator">
                <Button size="lg" rightIcon={<Calculator className="w-5 h-5" />}>
                  Calculate Cypress Value
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
              Cypress Tree Value Overview
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Cypress trees deliver value through premium rot-resistant lumber, exceptional landscape presence, and unique ecological benefits in wetland and flood-prone areas.
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
                $8K - $50K+
              </p>
              <p className="text-sm text-charcoal-600">
                Mature bald cypress specimens
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreeDeciduous className="w-10 h-10 text-amber-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-2">
                Lumber Value
              </h3>
              <p className="text-3xl font-mono font-bold text-amber-700 mb-2">
                $4 - $8/bf
              </p>
              <p className="text-sm text-charcoal-600">
                New-growth cypress per board foot
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10 text-rose-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-2">
                Sinker Cypress
              </h3>
              <p className="text-3xl font-mono font-bold text-rose-700 mb-2">
                $10 - $25/bf
              </p>
              <p className="text-sm text-charcoal-600">
                Reclaimed old-growth per board foot
              </p>
            </div>
          </div>

          <div className="bg-forest-50 rounded-2xl p-8">
            <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-6">
              Cypress Species Value Comparison
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-charcoal-900 mb-2 text-green-700">Highest Value Species</h4>
                <div className="space-y-2">
                  <p className="text-sm"><strong>Bald Cypress:</strong> $8K-$50K+ (most valuable, native)</p>
                  <p className="text-sm"><strong>Pond Cypress:</strong> $6K-$30K+ (smaller variety)</p>
                  <p className="text-sm"><strong>Montezuma Cypress:</strong> $10K-$40K+ (rare, massive)</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-charcoal-900 mb-2 text-orange-700">Ornamental Cypress Species</h4>
                <div className="space-y-2">
                  <p className="text-sm"><strong>Italian Cypress:</strong> $3K-$15K+ (columnar accent)</p>
                  <p className="text-sm"><strong>Leyland Cypress:</strong> $1K-$5K (fast privacy screen)</p>
                  <p className="text-sm"><strong>Arizona Cypress:</strong> $2K-$8K (drought tolerant)</p>
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
              Why Cypress Wood Is Among the Most Valuable in North America
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                  <TreeDeciduous className="w-5 h-5 text-amber-700" />
                  Extraordinary Rot Resistance
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Cypress heartwood contains cypressene, a natural preservative that makes it virtually immune to rot, decay, and insect damage. This is why cypress has been the preferred building material for Southern homes, docks, and boats for centuries. Old-growth cypress timbers recovered from swamps after 100+ years underwater remain structurally sound and command premium prices.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-earth-700" />
                  Sinker Cypress Premium
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Reclaimed &quot;sinker&quot; cypress logs from old-growth trees that sank during 19th-century logging operations sell for $10-25 per board foot, making them among the most expensive domestic lumber. These logs, preserved underwater for over a century, feature tight grain patterns impossible to find in modern-growth timber. Furniture and flooring made from sinker cypress command extraordinary prices.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                  <Droplets className="w-5 h-5 text-forest-700" />
                  Flood and Wetland Tolerance
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Bald cypress thrives in standing water and flood-prone areas where most trees cannot survive. Their distinctive &quot;knees&quot; (pneumatophores) rise from the root system to provide oxygen in waterlogged soils. This unique adaptation makes them invaluable for properties near rivers, bayous, and low-lying areas, providing erosion control and stormwater management worth hundreds of dollars annually.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-rose-700" />
                  Record-Breaking Longevity
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Bald cypress trees routinely live 600 to 1,200+ years, making them among the oldest living organisms in eastern North America. The oldest known bald cypress, discovered in North Carolina, was dated at over 2,600 years old. This extraordinary lifespan means that mature cypress trees represent centuries of irreplaceable growth, driving their high appraisal values.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-charcoal-100">
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-4">
                Bald Cypress Characteristics
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Scientific Name:</span>
                  <span className="font-medium text-charcoal-900">Taxodium distichum</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Maturity Time:</span>
                  <span className="font-medium text-charcoal-900">40-60 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Max Height:</span>
                  <span className="font-medium text-charcoal-900">50-120 feet</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Max Trunk:</span>
                  <span className="font-medium text-charcoal-900">3-10 feet</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Hardness Rating:</span>
                  <span className="font-medium text-charcoal-900">510 (soft, rot-resistant)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Type:</span>
                  <span className="font-medium text-charcoal-900">Deciduous conifer</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Lifespan:</span>
                  <span className="font-medium text-charcoal-900">600-1,200+ years</span>
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
            Calculate Your Cypress Tree&apos;s True Value
          </h2>
          <p className="text-xl text-forest-100 mb-10 max-w-2xl mx-auto">
            Get your cypress tree&apos;s exact value including premium lumber worth, landscape replacement cost, and ecological benefits. Our calculator uses professional CTLA methods trusted by arborists nationwide.
          </p>
          <Link href="/calculator">
            <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />} className="bg-amber-500 hover:bg-amber-600 text-forest-900">
              Calculate Cypress Value Now
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
              Cypress Tree Value Questions
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                How much is a cypress tree worth?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Bald cypress trees range from $8,000 to $50,000+ for mature landscape specimens. Value depends heavily on trunk diameter, age, condition, and location. Large specimens with buttressed trunks and visible knees command the highest prices due to their irreplaceable character. Italian cypress trees, used as ornamental accents, range from $3,000-$15,000.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                Why is cypress wood so valuable?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Cypress heartwood contains natural preservatives that make it virtually immune to rot, decay, and termites without any chemical treatment. This makes it ideal for outdoor construction, siding, fencing, docks, and boat building. New-growth cypress sells for $4-8 per board foot, while reclaimed sinker cypress from old-growth logs commands $10-25 per board foot due to its tight grain and rarity.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                What is the difference between bald cypress and Italian cypress?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Bald cypress (Taxodium distichum) is a native North American deciduous conifer that grows in wetlands, reaches 50-120 feet tall with spreading canopies, and lives 600-1,200+ years. Italian cypress (Cupressus sempervirens) is a Mediterranean evergreen with a narrow columnar shape, reaching 40-70 feet. Bald cypress is significantly more valuable due to its size, longevity, lumber quality, and ecological importance.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                What is sinker cypress and why is it so expensive?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Sinker cypress refers to old-growth cypress logs that sank to the bottom of rivers and swamps during 19th-century logging operations. Preserved underwater for over 100 years, these logs contain extremely tight grain patterns from trees that were 500-1,000+ years old when harvested. The resulting lumber is denser, more stable, and more beautiful than anything available from modern-growth trees, commanding prices 3-5 times higher than new cypress.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                Do cypress trees increase property value?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Yes, especially bald cypress in Southern landscapes. Their dramatic appearance with buttressed trunks, feathery foliage, and distinctive knees creates a unique aesthetic that increases curb appeal. On flood-prone properties, bald cypress trees provide measurable stormwater management benefits that can reduce flood insurance considerations. Properties with mature bald cypress trees typically see 10-20% value increases.
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
              More information about cypress trees, premium lumber, and tree valuation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/calculator" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Tree Value Calculator</h3>
                <p className="text-sm text-charcoal-600">Get your cypress tree&apos;s exact value</p>
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
                <p className="text-sm text-charcoal-600">See cypress ranking among top species</p>
              </div>
            </Link>

            <Link href="/oak-tree-value-calculator" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Oak Tree Calculator</h3>
                <p className="text-sm text-charcoal-600">Another premium Southern species</p>
              </div>
            </Link>

            <Link href="/cedar-tree-value-calculator" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Cedar Tree Calculator</h3>
                <p className="text-sm text-charcoal-600">Compare another rot-resistant species</p>
              </div>
            </Link>

            <Link href="/tree-damage-insurance-claim" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Insurance Protection</h3>
                <p className="text-sm text-charcoal-600">Protect your valuable cypress investment</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
