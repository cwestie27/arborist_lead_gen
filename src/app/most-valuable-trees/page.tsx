import Link from "next/link";
import { TreeDeciduous, Calculator, ArrowRight, DollarSign, Star, Leaf, MapPin } from "lucide-react";
import { Button } from "@/components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Most Valuable Trees for Your Property | Tree Species Value Rankings 2025",
  description: "Discover which trees are worth the most. Complete guide to high-value tree species including oaks, maples, black walnut, and more. See value ranges from $5,000 to $100,000+.",
  keywords: "most valuable trees, valuable tree species, high value trees, tree worth by species, expensive trees, black walnut tree value, oak tree value",
  openGraph: {
    title: "Most Valuable Trees for Your Property | Species Value Rankings",
    description: "Which trees are worth the most? Complete species value guide with price ranges and what makes certain trees so valuable.",
    type: "article",
  },
};

const highValueTrees = [
  {
    name: "White Oak",
    scientific: "Quercus alba",
    valueRange: "$15,000 - $60,000+",
    description: "One of the most valuable landscape trees in North America. Prized for its strong wood, beautiful fall color, and incredible longevity. Mature specimens can live 200-600 years.",
    whyValuable: "Extremely slow growth rate, desirable hardwood, wildlife habitat, historic significance.",
    annualBenefits: "$200 - $500/year in ecosystem services",
  },
  {
    name: "Sugar Maple",
    scientific: "Acer saccharum",
    valueRange: "$10,000 - $45,000+",
    description: "Famous for spectacular fall foliage and maple syrup production. A cornerstone of northeastern landscapes and one of the most iconic American trees.",
    whyValuable: "Stunning autumn color, syrup production value, dense shade, premium hardwood lumber.",
    annualBenefits: "$150 - $400/year in ecosystem services",
  },
  {
    name: "Black Walnut",
    scientific: "Juglans nigra",
    valueRange: "$10,000 - $50,000+",
    description: "Unique among landscape trees because both the standing tree AND the timber have significant value. Mature black walnuts are actively sought by lumber buyers.",
    whyValuable: "Premium timber value ($2,000-$10,000+ for logs), edible nuts, furniture-grade wood.",
    annualBenefits: "$100 - $300/year in ecosystem services plus nut harvest",
  },
  {
    name: "American Elm",
    scientific: "Ulmus americana",
    valueRange: "$12,000 - $40,000+",
    description: "Once the most planted street tree in America before Dutch elm disease. Surviving mature specimens are rare and highly valued for their classic vase-shaped canopy.",
    whyValuable: "Rarity (most lost to disease), iconic canopy shape, historical significance, massive shade coverage.",
    annualBenefits: "$180 - $450/year in ecosystem services",
  },
  {
    name: "Live Oak",
    scientific: "Quercus virginiana",
    valueRange: "$15,000 - $75,000+",
    description: "The quintessential southern tree with massive spreading canopies. Some live oaks have canopy spreads exceeding 100 feet and can live for centuries.",
    whyValuable: "Enormous size, evergreen in mild climates, extremely long-lived, cultural significance in the South.",
    annualBenefits: "$250 - $600/year in ecosystem services",
  },
  {
    name: "Japanese Maple",
    scientific: "Acer palmatum",
    valueRange: "$5,000 - $25,000+",
    description: "Smaller than most high-value trees but commands premium prices per inch of trunk. Rare cultivars and well-shaped specimens are prized by collectors and landscapers.",
    whyValuable: "Extremely slow growth, ornamental beauty, collector demand, landscape design centerpiece.",
    annualBenefits: "$50 - $150/year in ecosystem services",
  },
];

const mediumValueTrees = [
  { name: "Red Oak", range: "$8,000 - $30,000", note: "Faster growing than white oak but still premium" },
  { name: "Tulip Poplar", range: "$5,000 - $20,000", note: "Tallest eastern hardwood, impressive specimen" },
  { name: "American Sycamore", range: "$6,000 - $25,000", note: "Massive size, distinctive white bark" },
  { name: "Eastern White Pine", range: "$4,000 - $15,000", note: "Largest northeastern conifer" },
  { name: "Flowering Dogwood", range: "$3,000 - $12,000", note: "High ornamental value relative to size" },
  { name: "Bald Cypress", range: "$5,000 - $20,000", note: "Unique deciduous conifer, very long-lived" },
];

export default function MostValuableTreesPage() {
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
              <Star className="w-4 h-4" />
              Tree Species Value Guide
            </div>

            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 leading-tight mb-6">
              The Most Valuable Trees You Can Have on Your Property
            </h1>

            <p className="text-lg md:text-xl text-charcoal-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Not all trees are created equal. Some species are worth 10x more than others. Here are the trees that add the most value to your property - and what makes them so valuable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator">
                <Button size="lg" rightIcon={<Calculator className="w-5 h-5" />}>
                  Calculate Your Tree's Value
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* High Value Trees */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              Top 6 Most Valuable Tree Species
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              These species consistently rank highest in CTLA appraisals. If you have one of these in your yard, you might be sitting on a small fortune.
            </p>
          </div>

          <div className="space-y-8">
            {highValueTrees.map((tree, idx) => (
              <div key={tree.name} className="bg-cream rounded-2xl p-8 border border-charcoal-100">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex items-center gap-4 md:w-1/3">
                    <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-mono font-bold text-forest-700">#{idx + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-charcoal-900">
                        {tree.name}
                      </h3>
                      <p className="text-sm text-charcoal-500 italic">{tree.scientific}</p>
                      <p className="text-2xl font-mono font-bold text-forest-700 mt-2">
                        {tree.valueRange}
                      </p>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-charcoal-600 leading-relaxed mb-4">
                      {tree.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-xl">
                        <p className="text-sm font-semibold text-forest-700 mb-1">Why It's Valuable</p>
                        <p className="text-sm text-charcoal-600">{tree.whyValuable}</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl">
                        <p className="text-sm font-semibold text-earth-600 mb-1">Annual Benefits</p>
                        <p className="text-sm text-charcoal-600">{tree.annualBenefits}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medium Value Trees */}
      <section className="py-20 md:py-28 bg-forest-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              Other High-Value Species Worth Knowing
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              These trees may not top the list, but they still carry significant value - especially as mature specimens.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediumValueTrees.map((tree) => (
              <div key={tree.name} className="bg-white rounded-2xl p-6 border border-charcoal-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-earth-100 rounded-lg flex items-center justify-center">
                    <TreeDeciduous className="w-5 h-5 text-earth-600" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-charcoal-900">{tree.name}</h3>
                </div>
                <p className="text-2xl font-mono font-bold text-forest-700 mb-3">{tree.range}</p>
                <p className="text-sm text-charcoal-600">{tree.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Trees Valuable */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              What Actually Makes a Tree Valuable?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-cream rounded-2xl p-8 border border-charcoal-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-forest-700" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900">Slow Growth = High Value</h3>
              </div>
              <p className="text-charcoal-600 leading-relaxed">
                Trees that grow slowly are more valuable because they take decades to replace. A 24-inch white oak took 60-80 years to grow. You can't just buy another one. This irreplaceability is the core of the CTLA appraisal method.
              </p>
            </div>

            <div className="bg-cream rounded-2xl p-8 border border-charcoal-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-earth-100 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-earth-600" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900">Size Matters Exponentially</h3>
              </div>
              <p className="text-charcoal-600 leading-relaxed">
                Tree value scales with the cross-sectional area of the trunk, not the diameter. This means a tree with a 24-inch trunk isn't twice as valuable as a 12-inch tree - it's four times as valuable. Larger trees are disproportionately more expensive to replace.
              </p>
            </div>

            <div className="bg-cream rounded-2xl p-8 border border-charcoal-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-forest-700" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900">Location Is Everything</h3>
              </div>
              <p className="text-charcoal-600 leading-relaxed">
                The same tree can be worth dramatically more in a front yard than in a back corner. Trees that frame a home entrance, provide patio shade, or enhance curb appeal get location multipliers of 80-100%. Trees crowded in a forest get much less.
              </p>
            </div>

            <div className="bg-cream rounded-2xl p-8 border border-charcoal-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-earth-100 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-earth-600" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900">Condition & Health</h3>
              </div>
              <p className="text-charcoal-600 leading-relaxed">
                A healthy tree with excellent structure gets 90-100% of its calculated value. Dead branches, trunk decay, pest damage, or poor pruning can cut the value by 50% or more. Regular maintenance literally pays for itself in preserved tree value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-forest-50 to-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-6">
            What Are Your Trees Worth?
          </h2>
          <p className="text-lg text-charcoal-600 mb-10 max-w-2xl mx-auto">
            Use our free calculator to find out the replacement value and annual ecosystem benefits of any tree on your property. Takes less than 2 minutes.
          </p>
          <Link href="/calculator">
            <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
              Calculate Your Tree's Value Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
