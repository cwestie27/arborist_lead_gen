import Link from "next/link";
import { TreeDeciduous, Calculator, ArrowRight, DollarSign, Leaf, Clock, MapPin, Shield } from "lucide-react";
import { Button } from "@/components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tree Appraisal Atlanta, GA | Free CTLA Calculator | ArborValue",
  description: "Get a professional tree appraisal in Atlanta, GA. Atlanta's 47% tree canopy and city ordinance require permits for trees over 6\" DBH - know your tree's value before any decision.",
  keywords: "tree appraisal Atlanta, Atlanta tree appraisal, tree value Atlanta GA, CTLA tree appraisal Atlanta, Atlanta tree ordinance, tree permit Atlanta",
  openGraph: {
    title: "Tree Appraisal Atlanta, GA | Free CTLA Calculator | ArborValue",
    description: "Atlanta is The City in a Forest. Find out what your trees are worth with a free professional appraisal estimate.",
    type: "article",
  },
};

export default function TreeAppraisalAtlantaPage() {
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
              Atlanta, GA
            </div>

            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 leading-tight mb-6">
              Tree Appraisal Atlanta, GA
            </h1>

            <p className="text-lg md:text-xl text-charcoal-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Atlanta is called "The City in a Forest" for good reason - 47% tree canopy coverage, one of the highest of any major U.S. city. With city ordinances requiring permits before removing trees over 6" DBH, knowing your tree's value isn't optional. It's essential.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator">
                <Button size="lg" rightIcon={<Calculator className="w-5 h-5" />}>
                  Get Free Tree Appraisal
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Atlanta Tree Stats */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              Why Atlanta Trees Are So Valuable
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Atlanta's urban forest is one of America's most significant - and most regulated. Here's what makes Atlanta tree appraisals uniquely important.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-10 h-10 text-forest-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-2">
                Tree Canopy Coverage
              </h3>
              <p className="text-3xl font-mono font-bold text-forest-700 mb-2">
                47%
              </p>
              <p className="text-sm text-charcoal-600">
                Among highest for any major U.S. city
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-earth-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-2">
                Permit Threshold
              </h3>
              <p className="text-3xl font-mono font-bold text-earth-700 mb-2">
                6" DBH
              </p>
              <p className="text-sm text-charcoal-600">
                City ordinance requires permit to remove
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-10 h-10 text-amber-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-2">
                Buckhead Willow Oak
              </h3>
              <p className="text-3xl font-mono font-bold text-amber-700 mb-2">
                $8K - $30K+
              </p>
              <p className="text-sm text-charcoal-600">
                Mature specimen value range
              </p>
            </div>
          </div>

          <div className="bg-forest-50 rounded-2xl p-8">
            <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-6">
              Atlanta's Tree Protection Ordinance - What You Need to Know
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-charcoal-900 mb-3">Protected Trees</h4>
                <div className="space-y-2">
                  <p className="text-sm text-charcoal-700">Any tree 6" DBH or larger on private property requires a city permit to remove</p>
                  <p className="text-sm text-charcoal-700">Heritage trees (24"+ DBH) have the strongest protections</p>
                  <p className="text-sm text-charcoal-700">Replacement trees are often required when removal is approved</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-charcoal-900 mb-3">Why Appraisals Matter</h4>
                <div className="space-y-2">
                  <p className="text-sm text-charcoal-700">Appraisals document tree value for permit applications</p>
                  <p className="text-sm text-charcoal-700">Insurance claims require a formal appraisal for compensation</p>
                  <p className="text-sm text-charcoal-700">Property sales often require disclosure of significant trees</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Atlanta Species */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-forest-50 to-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              Common Atlanta Tree Species and Their Values
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Atlanta's Piedmont location supports a rich mix of native hardwoods and ornamental species, many with substantial appraised values.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                  <TreeDeciduous className="w-5 h-5 text-forest-700" />
                  Willow Oak (Quercus phellos)
                </h3>
                <p className="text-charcoal-600 leading-relaxed mb-2">
                  The signature street tree of Atlanta's finest neighborhoods. Willow oaks line the boulevards of Buckhead, Druid Hills, and Morningside. Mature specimens with 20-30" trunks regularly appraise for $8,000-$30,000+ under CTLA methods.
                </p>
                <p className="text-sm font-medium text-forest-700">Typical value: $8,000 - $30,000+</p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                  <TreeDeciduous className="w-5 h-5 text-forest-700" />
                  Loblolly Pine (Pinus taeda)
                </h3>
                <p className="text-charcoal-600 leading-relaxed mb-2">
                  The most common pine in Georgia's Piedmont. Fast-growing but reaching impressive sizes, loblolly pines provide significant ecosystem services and timber value. Found extensively in Virginia-Highland and Decatur backyards.
                </p>
                <p className="text-sm font-medium text-forest-700">Typical value: $3,000 - $15,000</p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-forest-700" />
                  Southern Magnolia (Magnolia grandiflora)
                </h3>
                <p className="text-charcoal-600 leading-relaxed mb-2">
                  Atlanta's iconic flowering tree. Large, old-growth Southern magnolias are landmark trees that can anchor an entire yard's aesthetic appeal. Their irreplaceable beauty significantly increases appraised value.
                </p>
                <p className="text-sm font-medium text-forest-700">Typical value: $5,000 - $20,000+</p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-earth-700" />
                  Flowering Dogwood (Cornus florida)
                </h3>
                <p className="text-charcoal-600 leading-relaxed mb-2">
                  Georgia's state tree. While smaller than oaks, dogwoods provide exceptional ornamental value and are beloved throughout Atlanta's historic neighborhoods. Declining populations make healthy specimens increasingly valuable.
                </p>
                <p className="text-sm font-medium text-earth-700">Typical value: $1,500 - $6,000</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-charcoal-100">
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-6">
                Atlanta Neighborhood Tree Values
              </h3>
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-charcoal-900">Buckhead</span>
                    <span className="text-forest-700 font-semibold">Very High</span>
                  </div>
                  <p className="text-sm text-charcoal-600">Large estates with mature willow oaks and magnolias commanding top appraisal values</p>
                </div>
                <div className="border-t border-charcoal-100 pt-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-charcoal-900">Druid Hills</span>
                    <span className="text-forest-700 font-semibold">Very High</span>
                  </div>
                  <p className="text-sm text-charcoal-600">Olmsted-designed landscape; trees are integral to historic designation and property values</p>
                </div>
                <div className="border-t border-charcoal-100 pt-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-charcoal-900">Virginia-Highland</span>
                    <span className="text-forest-700 font-semibold">High</span>
                  </div>
                  <p className="text-sm text-charcoal-600">Dense canopy street trees add significant premium to bungalow property values</p>
                </div>
                <div className="border-t border-charcoal-100 pt-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-charcoal-900">Morningside</span>
                    <span className="text-forest-700 font-semibold">High</span>
                  </div>
                  <p className="text-sm text-charcoal-600">Mature hardwoods on smaller lots create outsized relative value</p>
                </div>
                <div className="border-t border-charcoal-100 pt-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-charcoal-900">Decatur</span>
                    <span className="text-forest-700 font-semibold">High</span>
                  </div>
                  <p className="text-sm text-charcoal-600">City of Decatur has its own tree ordinance with strong protections; formal appraisals frequently required</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Appraisals Work */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              How Atlanta Tree Appraisals Work
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Professional tree appraisals in Atlanta follow CTLA (Council of Tree and Landscape Appraisers) standards - the same method used by ISA certified arborists and accepted by Atlanta courts and insurance companies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-forest-700 font-bold text-xl">1</span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-3">Measure</h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Trunk diameter at breast height (DBH), crown spread, and height are measured. Size is the primary driver of value - larger diameter means exponentially more value.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-earth-700 font-bold text-xl">2</span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-3">Assess</h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                Species, condition (structure, health, pests), and location factors are evaluated. A healthy willow oak on a Buckhead boulevard is worth far more than a declining pine in a backyard.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-amber-700 font-bold text-xl">3</span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-3">Calculate</h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                The CTLA trunk formula multiplies the basic value by species, condition, and location factors to produce a defensible appraised value accepted by Atlanta city officials and insurers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-forest-900 to-forest-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
            Get Your Atlanta Tree's Professional Valuation
          </h2>
          <p className="text-xl text-forest-100 mb-10 max-w-2xl mx-auto">
            Whether you're navigating Atlanta's permit process, filing an insurance claim, or simply curious about your tree's worth - get a free estimate in 2 minutes using CTLA methods.
          </p>
          <Link href="/calculator">
            <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />} className="bg-amber-500 hover:bg-amber-600 text-forest-900">
              Calculate Atlanta Tree Value
            </Button>
          </Link>
          <p className="text-sm text-forest-200 mt-4">
            Takes 2 minutes - No email required
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              Atlanta Tree Appraisal Questions
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                Do I need a permit to remove a tree in Atlanta?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Yes. Atlanta's Tree Protection Ordinance requires a permit to remove any tree 6" DBH or larger. The City of Atlanta Arborist reviews applications, and removal of heritage trees (24"+ DBH) requires additional justification. Fines for unpermitted removal can be substantial.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                How much does a tree appraisal cost in Atlanta?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Formal written appraisals from ISA certified arborists typically run $200-$500 per tree in the Atlanta market. For a free preliminary estimate using professional CTLA methods, use our calculator above - it's the same formula used by certified arborists.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                What is a willow oak worth in Buckhead?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Mature willow oaks in Buckhead - with 20-30" trunks and excellent condition - typically appraise between $8,000 and $30,000 under CTLA methods. The premium location factor and large size of these boulevard trees drives their significant value.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                Is a tree appraisal required for an insurance claim in Atlanta?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Most homeowners insurance policies require a formal appraisal to substantiate claims for damaged or destroyed trees. Without an appraisal, insurers may offer minimal compensation. Getting an appraisal before (or immediately after) an incident is essential for full recovery.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                Does Decatur have different tree rules than Atlanta?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Yes. The City of Decatur operates independently from Atlanta and has its own tree ordinance. Decatur is known for its strong tree protections, and formal appraisals are frequently required for permit applications. Always verify current requirements with the City of Decatur Community Development department.
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
              Related Atlanta Tree Resources
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/calculator" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Tree Value Calculator</h3>
                <p className="text-sm text-charcoal-600">Free CTLA-based estimate in 2 minutes</p>
              </div>
            </Link>

            <Link href="/tree-value-calculator-atlanta" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Atlanta Tree Value Calculator</h3>
                <p className="text-sm text-charcoal-600">Atlanta-specific estimates and data</p>
              </div>
            </Link>

            <Link href="/tree-damage-claim-atlanta" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Atlanta Tree Damage Claims</h3>
                <p className="text-sm text-charcoal-600">Insurance claim guidance for Atlanta storms</p>
              </div>
            </Link>

            <Link href="/certified-arborist-atlanta" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Certified Arborists in Atlanta</h3>
                <p className="text-sm text-charcoal-600">Find ISA certified tree experts</p>
              </div>
            </Link>

            <Link href="/tree-appraisal-guide" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Tree Appraisal Guide</h3>
                <p className="text-sm text-charcoal-600">Learn professional valuation methods</p>
              </div>
            </Link>

            <Link href="/ctla-tree-appraisal-method" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-forest-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">CTLA Method Explained</h3>
                <p className="text-sm text-charcoal-600">How professional appraisals are calculated</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
