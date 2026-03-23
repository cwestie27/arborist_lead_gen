import Link from "next/link";
import { TreeDeciduous, Calculator, ArrowRight, DollarSign, Leaf, Clock, MapPin, Shield } from "lucide-react";
import { Button } from "@/components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tree Damage Insurance Claim Atlanta | Get Your Tree Appraised First",
  description: "Tree fell on your house in Atlanta? Get a professional tree appraisal BEFORE filing your insurance claim. Atlanta storms cause thousands of tree damage claims annually - know your rights.",
  keywords: "tree damage claim Atlanta, tree fell on house Atlanta, Atlanta tree insurance claim, tree storm damage Atlanta, Atlanta tree appraisal insurance, ice storm tree damage Atlanta",
  openGraph: {
    title: "Tree Damage Insurance Claim Atlanta | Get Your Tree Appraised First",
    description: "Before you file your Atlanta tree damage claim - get an appraisal. It could double your settlement.",
    type: "article",
  },
};

export default function TreeDamageClaimAtlantaPage() {
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
              <Shield className="w-4 h-4" />
              Atlanta Storm Damage
            </div>

            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 leading-tight mb-6">
              Tree Damage Insurance Claim - Atlanta, GA
            </h1>

            <p className="text-lg md:text-xl text-charcoal-600 mb-6 max-w-3xl mx-auto leading-relaxed">
              A tree fell on your house, fence, or car in Atlanta. Your first call should not be to your insurer. It should be to get your tree appraised.
            </p>

            <p className="text-base text-charcoal-500 mb-10 max-w-2xl mx-auto">
              Without a formal appraisal, insurers often pay only removal costs - not the true replacement value of the tree itself. That's money left on the table.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator">
                <Button size="lg" rightIcon={<Calculator className="w-5 h-5" />}>
                  Get Free Tree Appraisal Estimate
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Atlanta Storm Context */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              Atlanta's Storm Risk - Why Tree Damage Claims Are Common
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Atlanta sits in one of the most storm-prone regions in the Southeast. Combined with 47% tree canopy coverage, tree damage events are a near-annual occurrence for many homeowners.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10 text-forest-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-2">
                Ice Storms
              </h3>
              <p className="text-sm text-charcoal-600 leading-relaxed">
                Atlanta's infamous ice storms (SnowJam, Icepocalypse) load tree branches beyond their limits. Loblolly pines and hardwoods shed major limbs - or topple entirely - under ice accumulation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreeDeciduous className="w-10 h-10 text-earth-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-2">
                Severe Thunderstorms
              </h3>
              <p className="text-sm text-charcoal-600 leading-relaxed">
                Atlanta averages 50+ severe thunderstorm days per year. Straight-line winds of 60-80 mph regularly topple trees in Buckhead, Decatur, and Virginia-Highland neighborhoods.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-10 h-10 text-amber-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-2">
                Tornadoes
              </h3>
              <p className="text-sm text-charcoal-600 leading-relaxed">
                Georgia averages 20+ tornadoes per year, and the Atlanta metro has been hit multiple times. The 2008 Atlanta tornado caused extensive tree damage across Midtown and Downtown neighborhoods.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-amber-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3">
                  Critical: What Insurance Companies Don't Volunteer
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Homeowner's policies that cover "loss of trees" typically pay replacement value - not just removal. But replacement value for a mature 24" willow oak could be $15,000-$25,000. Insurers will not automatically calculate this for you. You need an appraisal to claim it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appraisal Before Claim */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-forest-50 to-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              Why You Need an Appraisal BEFORE Filing
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              The sequence matters. Here's what happens with and without a proper tree appraisal in your Atlanta storm damage claim.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
              <h3 className="font-heading text-xl font-semibold text-red-900 mb-4">
                Without an Appraisal
              </h3>
              <div className="space-y-4 text-sm text-red-800">
                <div className="flex items-start gap-3">
                  <span className="font-bold text-red-600 mt-0.5">1.</span>
                  <p>You call insurer, report tree fell on your house</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-red-600 mt-0.5">2.</span>
                  <p>Adjuster comes out, estimates structural damage repair</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-red-600 mt-0.5">3.</span>
                  <p>Insurer pays for structural repairs + basic removal ($500-$1,000)</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-red-600 mt-0.5">4.</span>
                  <p>No one calculates tree replacement value - you don't ask, they don't offer</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-red-600 mt-0.5">5.</span>
                  <p>You settle for far less than the full value of your loss</p>
                </div>
                <p className="font-semibold text-red-900 mt-4 border-t border-red-200 pt-4">
                  Result: $12,000-$20,000 left unclaimed
                </p>
              </div>
            </div>

            <div className="bg-forest-50 border border-forest-200 rounded-2xl p-8">
              <h3 className="font-heading text-xl font-semibold text-forest-900 mb-4">
                With a Proper Appraisal
              </h3>
              <div className="space-y-4 text-sm text-forest-800">
                <div className="flex items-start gap-3">
                  <span className="font-bold text-forest-600 mt-0.5">1.</span>
                  <p>Tree falls - you document everything immediately (photos, measurements)</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-forest-600 mt-0.5">2.</span>
                  <p>Get a professional appraisal using CTLA methods (before or during cleanup)</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-forest-600 mt-0.5">3.</span>
                  <p>File claim including appraisal report documenting tree replacement value</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-forest-600 mt-0.5">4.</span>
                  <p>Insurer must address tree value as part of the claim</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-forest-600 mt-0.5">5.</span>
                  <p>You receive full compensation including tree replacement value</p>
                </div>
                <p className="font-semibold text-forest-900 mt-4 border-t border-forest-200 pt-4">
                  Result: Full recovery of your loss
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Do After Storm */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              What to Do When a Tree Falls in Atlanta
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-forest-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-forest-700 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal-900 mb-1">Safety First</h3>
                  <p className="text-sm text-charcoal-600">Ensure everyone is safe. Stay away from downed power lines. Do not enter structurally compromised areas.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-forest-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-forest-700 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal-900 mb-1">Document Everything</h3>
                  <p className="text-sm text-charcoal-600">Take extensive photos and video before any cleanup. Capture the whole tree, the damage, and any identifying features. This is your evidence.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-earth-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-earth-700 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal-900 mb-1">Measure the Tree</h3>
                  <p className="text-sm text-charcoal-600">Before it's cut up and removed - measure the trunk diameter (DBH) at 4.5 feet above grade. This is the most important number for your appraisal.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-earth-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-earth-700 font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal-900 mb-1">Get an Appraisal</h3>
                  <p className="text-sm text-charcoal-600">Use our free calculator for an immediate estimate, then get a written report from an ISA certified arborist if the value warrants it ($200-$400 for a written report).</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-700 font-bold">5</span>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal-900 mb-1">Then File Your Claim</h3>
                  <p className="text-sm text-charcoal-600">Contact your insurer with your documentation packet - photos, measurements, and appraisal report. A written appraisal significantly strengthens your position.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-charcoal-100">
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-6">
                Atlanta Policy Coverage Basics
              </h3>
              <div className="space-y-5">
                <div>
                  <h4 className="font-semibold text-charcoal-900 mb-1">Tree fell on your structure</h4>
                  <p className="text-sm text-charcoal-600">Structural damage is typically covered under dwelling coverage. Tree removal and tree replacement value may be additional claims.</p>
                </div>
                <div className="border-t border-charcoal-100 pt-4">
                  <h4 className="font-semibold text-charcoal-900 mb-1">Tree fell but missed your house</h4>
                  <p className="text-sm text-charcoal-600">Many policies cover tree removal ($500-$1,000) even when no structure was damaged. Tree replacement value claim is still valid.</p>
                </div>
                <div className="border-t border-charcoal-100 pt-4">
                  <h4 className="font-semibold text-charcoal-900 mb-1">Neighbor's tree fell on your property</h4>
                  <p className="text-sm text-charcoal-600">Typically covered by YOUR policy, not the neighbor's - unless negligence can be proven (e.g., the tree was visibly dead and complained about).</p>
                </div>
                <div className="border-t border-charcoal-100 pt-4">
                  <h4 className="font-semibold text-charcoal-900 mb-1">Policy limits for tree coverage</h4>
                  <p className="text-sm text-charcoal-600">Most standard policies have a $500-$1,500 sub-limit for trees per occurrence. Scheduling high-value trees separately is possible - and often worthwhile for Buckhead or Druid Hills properties.</p>
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
            Get Your Free Tree Appraisal Estimate Now
          </h2>
          <p className="text-xl text-forest-100 mb-10 max-w-2xl mx-auto">
            Whether your tree is still standing or already down - knowing its appraised value is essential for any insurance claim. Get an instant estimate using professional CTLA methods.
          </p>
          <Link href="/calculator">
            <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />} className="bg-amber-500 hover:bg-amber-600 text-forest-900">
              Calculate Tree Appraisal Value
            </Button>
          </Link>
          <p className="text-sm text-forest-200 mt-4">
            Free - Takes 2 minutes - No email required
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              Atlanta Tree Damage Claim Questions
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                A tree fell on my house in Atlanta - what do I do first?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Ensure everyone's safety, then document with extensive photos and video before any cleanup. Measure the trunk diameter before the tree is removed. Then get a tree appraisal estimate - you can start with our free calculator. Finally, call your insurance company with your documentation packet. Sequence matters: documentation before cleanup, appraisal before filing.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                Does homeowner's insurance cover tree replacement value in Atlanta?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Some policies do - but you typically need to specifically claim it with a formal appraisal. Standard policies have sub-limits of $500-$1,500 for trees, but for high-value specimens, you may be able to claim replacement cost above that limit with a certified appraisal. Review your specific policy or consult a public adjuster.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                How do Atlanta ice storms affect my tree claim?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Ice storms are generally covered under standard homeowner's wind/ice perils. When ice accumulation causes a tree to fall on your home, the event is typically covered. Document the weather conditions (use local news reports), the tree's pre-storm condition, and get your appraisal. Ice storm tree claims in Atlanta are handled routinely by local adjusters.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                What is a public adjuster and should I use one in Atlanta?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Public adjusters are licensed professionals who work on your behalf (not the insurer's) to maximize your claim settlement. For large tree damage claims involving high-value specimens ($10,000+ in tree value), a public adjuster can often recover significantly more than the initial offer. They typically charge 10-15% of the settlement - often worth it on complex claims.
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
                <h3 className="font-semibold text-charcoal-900 mb-2">Free Tree Appraisal Calculator</h3>
                <p className="text-sm text-charcoal-600">Get an immediate CTLA estimate</p>
              </div>
            </Link>

            <Link href="/tree-appraisal-atlanta" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Tree Appraisal Atlanta</h3>
                <p className="text-sm text-charcoal-600">Full guide to Atlanta tree appraisals</p>
              </div>
            </Link>

            <Link href="/tree-damage-insurance-claim" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">National Insurance Claim Guide</h3>
                <p className="text-sm text-charcoal-600">Comprehensive tree damage claim guide</p>
              </div>
            </Link>

            <Link href="/certified-arborist-atlanta" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Find Atlanta Arborists</h3>
                <p className="text-sm text-charcoal-600">ISA certified experts for written reports</p>
              </div>
            </Link>

            <Link href="/atlanta-tree-removal-cost" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Atlanta Removal Costs</h3>
                <p className="text-sm text-charcoal-600">What removal typically costs in Atlanta</p>
              </div>
            </Link>

            <Link href="/ctla-tree-appraisal-method" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">CTLA Appraisal Method</h3>
                <p className="text-sm text-charcoal-600">How professional valuations are calculated</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
