import Link from "next/link";
import { TreeDeciduous, Calculator, ArrowRight, DollarSign, Leaf, Clock, MapPin, Shield } from "lucide-react";
import { Button } from "@/components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tree Removal Cost Atlanta, GA | 2025 Price Guide | ArborValue",
  description: "Atlanta tree removal costs range from $300 to $3,000+ depending on size and location. But before you remove it - find out what your tree is worth. Free estimate.",
  keywords: "tree removal cost Atlanta, Atlanta tree removal price, how much to remove a tree Atlanta, tree removal Atlanta GA, Atlanta tree cutting cost 2025",
  openGraph: {
    title: "Tree Removal Cost Atlanta, GA | 2025 Price Guide | ArborValue",
    description: "Atlanta tree removal costs $300-$3,000+. But first - find out what your tree is worth. You might be surprised.",
    type: "article",
  },
};

export default function AtlantaTreeRemovalCostPage() {
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
              Atlanta, GA - 2025 Price Guide
            </div>

            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 leading-tight mb-6">
              Tree Removal Cost Atlanta, GA
            </h1>

            <p className="text-lg md:text-xl text-charcoal-600 mb-6 max-w-3xl mx-auto leading-relaxed">
              Atlanta tree removal ranges from $300 for a small tree to $3,000+ for a large oak or pine. But before you call for removal - do you know what that tree is actually worth?
            </p>

            <p className="text-base text-charcoal-500 mb-10 max-w-2xl mx-auto">
              Many Atlanta homeowners are surprised to discover their tree is worth $10,000, $20,000, or more. That changes the calculation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator">
                <Button size="lg" rightIcon={<Calculator className="w-5 h-5" />}>
                  Find Out What Your Tree Is Worth
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              Atlanta Tree Removal Cost Guide - 2025
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Prices vary by tree size, species, location on the property, and complexity. Here's what Atlanta homeowners typically pay.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreeDeciduous className="w-10 h-10 text-forest-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-2">
                Small Trees
              </h3>
              <p className="text-3xl font-mono font-bold text-forest-700 mb-2">
                $300 - $700
              </p>
              <p className="text-sm text-charcoal-600">
                Under 25 feet tall, open access
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreeDeciduous className="w-10 h-10 text-earth-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-2">
                Medium Trees
              </h3>
              <p className="text-3xl font-mono font-bold text-earth-700 mb-2">
                $700 - $1,500
              </p>
              <p className="text-sm text-charcoal-600">
                25 to 60 feet, typical access
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-10 h-10 text-amber-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-2">
                Large Trees
              </h3>
              <p className="text-3xl font-mono font-bold text-amber-700 mb-2">
                $1,500 - $3,000+
              </p>
              <p className="text-sm text-charcoal-600">
                60+ feet, complex access, large oaks/pines
              </p>
            </div>
          </div>

          <div className="bg-forest-50 rounded-2xl p-8">
            <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-6">
              Atlanta-Specific Cost Factors
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-charcoal-900 mb-3">Increases Cost</h4>
                <div className="space-y-2">
                  <p className="text-sm text-charcoal-700"><strong>Near structures:</strong> Houses, fences, or power lines add $200-$500+</p>
                  <p className="text-sm text-charcoal-700"><strong>Limited access:</strong> Backyard with no equipment entry adds $300-$800</p>
                  <p className="text-sm text-charcoal-700"><strong>Stump grinding:</strong> Typically $100-$300 extra</p>
                  <p className="text-sm text-charcoal-700"><strong>Debris hauling:</strong> Add $100-$200 if not included</p>
                  <p className="text-sm text-charcoal-700"><strong>Emergency removal:</strong> Storm damage surcharge 25-50%</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-charcoal-900 mb-3">Atlanta-Specific Notes</h4>
                <div className="space-y-2">
                  <p className="text-sm text-charcoal-700"><strong>City permit required:</strong> Trees over 6" DBH need a permit - adds 2-4 weeks</p>
                  <p className="text-sm text-charcoal-700"><strong>Permit fee:</strong> $75-$150 for the removal permit itself</p>
                  <p className="text-sm text-charcoal-700"><strong>Replacement requirement:</strong> City may require replacement plantings</p>
                  <p className="text-sm text-charcoal-700"><strong>Buckhead/Druid Hills:</strong> HOA or historic district approval may be needed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Pivot - Tree Value */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-forest-50 to-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              Before You Remove It - Find Out What It's Worth
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Removal cost is only half the equation. What's the tree worth? This matters for insurance, property value, and your decision-making.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-forest-700" />
                  The Value vs. Cost Comparison
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  If a tree removal costs $1,500 but the tree itself is worth $18,000 in appraised value - that's an $18,000 asset you're paying $1,500 to destroy. For many Atlanta homeowners, learning their tree's value changes everything about the decision.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-earth-700" />
                  Insurance Implications
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  If the tree falls before you remove it - storm, disease, or failure - you'll need an appraisal to file an insurance claim. Knowing your tree's value now means you're prepared. Many Atlanta homeowners discover their trees are worth more than they thought and add them to their homeowner's policy as scheduled property.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-forest-700" />
                  Property Value Impact
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Mature trees add 10-20% to Atlanta property values. Removing a $20,000 willow oak from a Morningside bungalow could reduce your property's value by more than the removal cost savings. Factor this in before calling the arborist.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-amber-700" />
                  When Removal Makes Sense
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Sometimes removal is the right call - diseased trees, hazardous structural defects, construction requirements, or genuine safety issues. In those cases, knowing the tree's value helps you document the loss properly for insurance and tax purposes.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-charcoal-100">
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-6">
                Real Atlanta Examples
              </h3>
              <div className="space-y-5">
                <div className="bg-forest-50 rounded-xl p-5">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-charcoal-900">Willow Oak - Buckhead</span>
                    <span className="text-forest-700 font-bold">$22,000</span>
                  </div>
                  <p className="text-sm text-charcoal-600">24" DBH, excellent condition, street frontage. Removal cost: $2,200. Value: 10x the removal cost.</p>
                </div>
                <div className="bg-earth-50 rounded-xl p-5">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-charcoal-900">Southern Magnolia - Druid Hills</span>
                    <span className="text-earth-700 font-bold">$14,500</span>
                  </div>
                  <p className="text-sm text-charcoal-600">18" DBH, front yard focal point. Removal cost: $1,400. Owner kept it after learning its value.</p>
                </div>
                <div className="bg-amber-50 rounded-xl p-5">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-charcoal-900">Loblolly Pine - Virginia-Highland</span>
                    <span className="text-amber-700 font-bold">$7,800</span>
                  </div>
                  <p className="text-sm text-charcoal-600">22" DBH, healthy. Removal cost: $1,800. Owner filed insurance claim after storm damage instead of just removing it.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-forest-900 to-forest-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
            Know What You're Removing
          </h2>
          <p className="text-xl text-forest-100 mb-10 max-w-2xl mx-auto">
            Get a free professional appraisal estimate before any removal decision. Takes 2 minutes and could change everything about how you think about that tree.
          </p>
          <Link href="/calculator">
            <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />} className="bg-amber-500 hover:bg-amber-600 text-forest-900">
              Calculate Tree Value Before Removal
            </Button>
          </Link>
          <p className="text-sm text-forest-200 mt-4">
            Free - No email required - Uses professional CTLA methods
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              Atlanta Tree Removal Questions
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                How much does it cost to remove a large oak tree in Atlanta?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Large oak removal in Atlanta typically runs $1,500-$3,500 depending on size, access, and proximity to structures. A 30" DBH willow oak with limited access near a house might run $2,500-$3,500. Before removing, consider that the same tree is likely worth $15,000-$25,000 in appraised value.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                Do I need a permit to remove a tree in Atlanta?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Yes. Any tree 6" DBH or larger on private property requires a permit from the City of Atlanta. The permit application requires documentation of the reason for removal, and the city arborist reviews all applications. Unpermitted removal can result in fines up to $1,000 per inch of DBH.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                What's the cheapest way to remove a tree in Atlanta?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Get 3 quotes from licensed, insured arborists. Prices vary significantly. Off-season (winter) is typically cheaper. Some companies will reduce cost if they can keep the wood (valuable hardwood like oak). However - always verify the tree's appraised value first. Saving $200 on removal while destroying a $12,000 asset isn't actually saving money.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                Can I remove a tree myself in Atlanta?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                For trees under 6" DBH, you can remove without a permit, though you still need the skills and equipment to do it safely. For anything larger, Atlanta requires a licensed contractor to pull the permit. DIY on large trees near structures is extremely dangerous and not recommended.
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
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/calculator" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Free Tree Value Calculator</h3>
                <p className="text-sm text-charcoal-600">Know the value before removal</p>
              </div>
            </Link>

            <Link href="/tree-appraisal-atlanta" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Tree Appraisal Atlanta</h3>
                <p className="text-sm text-charcoal-600">Professional appraisal guide for Atlanta</p>
              </div>
            </Link>

            <Link href="/tree-damage-claim-atlanta" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Storm Damage Claims</h3>
                <p className="text-sm text-charcoal-600">If the tree falls - get your money</p>
              </div>
            </Link>

            <Link href="/tree-replacement-cost" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Tree Replacement Cost</h3>
                <p className="text-sm text-charcoal-600">What it costs to replace a mature tree</p>
              </div>
            </Link>

            <Link href="/certified-arborist-atlanta" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Find Atlanta Arborists</h3>
                <p className="text-sm text-charcoal-600">ISA certified experts for quotes</p>
              </div>
            </Link>

            <Link href="/property-value-trees" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Trees and Property Value</h3>
                <p className="text-sm text-charcoal-600">How removal impacts Atlanta home prices</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
