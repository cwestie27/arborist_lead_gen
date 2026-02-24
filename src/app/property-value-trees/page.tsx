import Link from "next/link";
import { TreeDeciduous, Calculator, ArrowRight, DollarSign, Home, TrendingUp, MapPin, Leaf } from "lucide-react";
import { Button } from "@/components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Do Trees Increase Property Value? The Data Says Yes | 2025 Guide",
  description: "Trees can increase property value by 7-19%. Learn which trees add the most value, how much shade and curb appeal are worth, and research-backed ROI numbers.",
  keywords: "do trees increase property value, trees property value, tree value real estate, curb appeal trees, trees home value, landscaping ROI",
  openGraph: {
    title: "Do Trees Increase Property Value? Research-Backed Data",
    description: "Trees add 7-19% to property values. Here's the research, the best species for ROI, and how to maximize your landscape investment.",
    type: "article",
  },
};

const studies = [
  {
    source: "USDA Forest Service",
    finding: "Mature trees add an average of 10% to property value",
    detail: "Comprehensive meta-analysis of 30+ studies across the US found consistent property value increases from tree canopy coverage.",
  },
  {
    source: "University of Washington",
    finding: "Street trees increase home prices by $7,130 on average",
    detail: "Portland study found homes on tree-lined streets sold for significantly more, with the effect strongest in lower-income neighborhoods.",
  },
  {
    source: "Clemson University",
    finding: "Good landscaping can increase property value by 12-19%",
    detail: "Mature trees are the single biggest contributor to landscape value, far outweighing flowers, shrubs, or hardscaping.",
  },
  {
    source: "Council of Tree and Landscape Appraisers",
    finding: "A single mature tree can be appraised at $10,000-$50,000+",
    detail: "Using the Trunk Formula Method, large healthy trees in prime locations consistently appraise in the five-figure range.",
  },
  {
    source: "National Association of Realtors",
    finding: "83% of agents say mature trees affect salability",
    detail: "Trees ranked as one of the top outdoor features that help close a sale, ahead of patios, gardens, and outdoor lighting.",
  },
];

const bestTrees = [
  { name: "Oak (White, Red)", roi: "Highest", reason: "Long-lived, massive canopy, universal appeal to buyers" },
  { name: "Sugar Maple", roi: "Very High", reason: "Stunning fall color, dense shade, premium wood association" },
  { name: "Dogwood", roi: "High", reason: "Four-season interest, manageable size, strong ornamental value" },
  { name: "Japanese Maple", roi: "High", reason: "Premium ornamental, collector appeal, low maintenance" },
  { name: "Crepe Myrtle", roi: "Medium-High", reason: "Long bloom season, year-round bark interest, drought tolerant" },
  { name: "Eastern Redbud", roi: "Medium-High", reason: "Early spring color, native species, grows quickly to impactful size" },
];

export default function PropertyValueTreesPage() {
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
              <TrendingUp className="w-4 h-4" />
              Property Value Guide
            </div>

            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 leading-tight mb-6">
              Do Trees Increase Property Value? The Research Says Yes.
            </h1>

            <p className="text-lg md:text-xl text-charcoal-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Multiple studies confirm that mature trees can add 7-19% to your property value. That's $20,000-$60,000+ on a $300,000 home. Here's what the data actually shows.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator">
                <Button size="lg" rightIcon={<Calculator className="w-5 h-5" />}>
                  Calculate Your Trees' Value
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Numbers */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              The Hard Numbers: What Research Shows
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              This isn't speculation. Multiple peer-reviewed studies and industry analyses have quantified the impact of trees on property values.
            </p>
          </div>

          <div className="space-y-6">
            {studies.map((study) => (
              <div key={study.source} className="bg-cream rounded-2xl p-8 border border-charcoal-100">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="md:w-1/4">
                    <p className="text-sm font-medium text-forest-700 uppercase tracking-wide">{study.source}</p>
                  </div>
                  <div className="md:w-3/4">
                    <p className="text-xl font-semibold text-charcoal-900 mb-2">{study.finding}</p>
                    <p className="text-charcoal-600 leading-relaxed">{study.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Trees Add Value */}
      <section className="py-20 md:py-28 bg-forest-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              5 Ways Trees Add Dollar Value to Your Home
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Energy Savings",
                value: "$200-$600/year",
                description: "Strategically placed shade trees can reduce summer cooling costs by 20-35%. Windbreak trees cut winter heating costs by 10-20%.",
              },
              {
                icon: Home,
                title: "Curb Appeal",
                value: "7-12% price premium",
                description: "Buyers form opinions in seconds. A well-treed front yard signals an established, cared-for property. First impressions drive offers.",
              },
              {
                icon: Leaf,
                title: "Stormwater Management",
                value: "$50-$200/year per tree",
                description: "Trees absorb thousands of gallons of rainwater annually, reducing runoff and potential drainage issues that can be expensive to fix.",
              },
              {
                icon: TrendingUp,
                title: "Faster Sales",
                value: "Days faster on market",
                description: "Homes with mature landscaping sell faster. Multiple realtor surveys confirm that tree-lined properties attract more showings and quicker offers.",
              },
              {
                icon: MapPin,
                title: "Neighborhood Effect",
                value: "3-5% additional premium",
                description: "Trees don't just help your property - they raise values for the entire street. Tree-lined neighborhoods command premium prices across the board.",
              },
              {
                icon: TreeDeciduous,
                title: "Privacy & Noise Reduction",
                value: "Hard to quantify, easy to sell",
                description: "Evergreen trees create natural privacy screens and reduce road noise by 6-10 decibels. Buyers notice the quiet immediately during showings.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 border border-charcoal-100">
                <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-forest-700" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">{item.title}</h3>
                <p className="text-xl font-mono font-bold text-forest-700 mb-3">{item.value}</p>
                <p className="text-sm text-charcoal-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Trees for ROI */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              Best Trees for Property Value ROI
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              If you're planting for property value, some species deliver much better returns than others.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestTrees.map((tree) => (
              <div key={tree.name} className="bg-cream rounded-2xl p-6 border border-charcoal-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-forest-100 rounded-lg flex items-center justify-center">
                    <TreeDeciduous className="w-5 h-5 text-forest-700" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-charcoal-900">{tree.name}</h3>
                    <p className="text-sm font-medium text-forest-700">ROI: {tree.roi}</p>
                  </div>
                </div>
                <p className="text-sm text-charcoal-600">{tree.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-forest-50 to-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-6">
            Find Out What Your Trees Are Adding to Your Home Value
          </h2>
          <p className="text-lg text-charcoal-600 mb-10 max-w-2xl mx-auto">
            Our free calculator gives you the replacement value and annual ecosystem benefits of any tree on your property. Perfect for understanding your landscape investment.
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
