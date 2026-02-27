import Link from "next/link";
import { TreeDeciduous, Calculator, ArrowRight, DollarSign, Shield, Clock, MapPin, Leaf } from "lucide-react";
import { Button } from "@/components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cedar Tree Value Calculator | Free Estimate | ArborValue",
  description: "Calculate the value of your cedar tree for free. Get replacement cost, rot-resistant lumber value, and durable landscape benefits using professional CTLA appraisal methods.",
  keywords: "cedar tree value calculator, cedar tree worth, how much is a cedar tree worth, cedar tree appraisal, eastern red cedar value",
  openGraph: {
    title: "Cedar Tree Value Calculator | Free Estimate",
    description: "How much is your cedar tree worth? Free professional-grade valuation...",
    type: "article",
  },
};

export default function CedarCalculatorPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-cream">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-200 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-forest-200 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-8">
              <Leaf className="w-4 h-4" />
              Juniperus genus
            </div>

            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 leading-tight mb-6">
              Cedar Tree Value Calculator
            </h1>

            <p className="text-lg md:text-xl text-charcoal-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Cedar trees provide exceptional value through their naturally rot-resistant wood, evergreen beauty, and unique aromatic properties. Calculate your tree's worth across multiple value streams with professional appraisal methods.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator">
                <Button size="lg" rightIcon={<Calculator className="w-5 h-5" />}>
                  Calculate Cedar Value
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
              Cedar Tree Value Overview
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Cedar trees offer unique value through naturally durable wood and year-round landscape beauty.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-10 h-10 text-emerald-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-2">
                Overall Value Range
              </h3>
              <p className="text-3xl font-mono font-bold text-emerald-700 mb-2">
                $5K - $20K
              </p>
              <p className="text-sm text-charcoal-600">
                Mature landscape specimens
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-emerald-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-2">
                Rot-Resistant Value
              </h3>
              <p className="text-3xl font-mono font-bold text-emerald-700 mb-2">
                Premium
              </p>
              <p className="text-sm text-charcoal-600">
                Natural durability
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-10 h-10 text-forest-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-2">
                Evergreen Beauty
              </h3>
              <p className="text-3xl font-mono font-bold text-forest-700 mb-2">
                Year-round
              </p>
              <p className="text-sm text-charcoal-600">
                Landscape value
              </p>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-8">
            <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-6">
              Cedar Species Value Rankings
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-charcoal-900 mb-2 text-green-700">Eastern Species</h4>
                <div className="space-y-2">
                  <p className="text-sm"><strong>Eastern Red Cedar:</strong> $5K-$18K+</p>
                  <p className="text-sm"><strong>Atlantic White Cedar:</strong> $4K-$15K+</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-charcoal-900 mb-2 text-blue-700">Western Species</h4>
                <div className="space-y-2">
                  <p className="text-sm"><strong>Western Red Cedar:</strong> $8K-$25K+</p>
                  <p className="text-sm"><strong>Yellow Cedar:</strong> $10K-$30K+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Species-Specific Info */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-emerald-50 to-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              Why Cedar Trees Provide Extraordinary Value Through Natural Durability
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-emerald-700" />
                  Natural Rot Resistance
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Cedar wood contains natural oils and acids that make it exceptionally resistant to decay, insects, and moisture. This rot-resistant property eliminates the need for chemical treatments, making cedar lumber more valuable ($4-12 per board foot) while lasting decades longer than treated alternatives.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-forest-700" />
                  Aromatic & Medicinal Properties
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Eastern red cedar aroma repels moths and other insects naturally, making it prized for closets, chests, and dresser construction. The aromatic oils provide antimicrobial properties that extend wood life, increasing its premium value in both lumber and landscape applications.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-emerald-700" />
                  Wildlife Evergreen Oasis
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Cedar trees provide critical winter shelter and food for 50+ bird species. The evergreen foliage offers year-round cover, while berry-like cones provide winter nutrition. This wildlife habitat value significantly enhances their overall landscape worth throughout all seasons.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-forest-700" />
                  Year-Round Visual Interest
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  As evergreens, cedar trees provide consistent visual appeal and wind protection throughout all seasons. Their distinctive blue-green or reddish foliage, plus unique exfoliating bark on some species, creates landscape value that never goes dormant, unlike deciduous alternatives.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-charcoal-100">
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-4">
                Eastern Red Cedar Characteristics
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Scientific Name:</span>
                  <span className="font-medium text-charcoal-900">Juniperus virginiana</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Maturity Time:</span>
                  <span className="font-medium text-charcoal-900">15-20 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Max Height:</span>
                  <span className="font-medium text-charcoal-900">30-60 feet</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Max Trunk:</span>
                  <span className="font-medium text-charcoal-900">1.5-3 feet</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Hardness Rating:</span>
                  <span className="font-medium text-charcoal-900">350 (soft but durable)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Rot Resistance:</span>
                  <span className="font-medium text-charcoal-900">Excellent (natural)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Lifespan:</span>
                  <span className="font-medium text-charcoal-900">150-300 years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-emerald-900 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
            Get Your Cedar Tree's Premium Valuation Now
          </h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
            Find your cedar's exact value including rot-resistant hardwood worth and evergreen landscape benefits. Our calculator accounts for durability and natural longevity advantages.
          </p>
          <Link href="/calculator">
            <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />} className="bg-emerald-500 hover:bg-emerald-600 text-emerald-900">
              Calculate Cedar Value Now
            </Button>
          </Link>
          <p className="text-sm text-emerald-200 mt-4">
            Takes 2 minutes - No email required
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              Cedar Tree Value Questions
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                How much is a cedar tree worth?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Cedar trees range from $5,000 to $20,000 for landscape specimens. Eastern red cedar ranges $5,000-$18,000+, while larger western species like red cedar can reach $8,000-$25,000+ for mature specimens.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                What is the cedar wood value per board foot?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Clear red cedar lumber averages $4-12 per board foot, with premium aromatic cedar reaching $6-15. A mature eastern red cedar yields 200-500 board feet, making total timber value $800-$6,000+ for excellent specimens.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                How do I identify an eastern red cedar tree?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Eastern red cedar has aromatic, blue-green scale-like foliage and small, blue berry-like cones. Bark is reddish-brown and fibrous. Note they are actually junipers despite the "cedar" name, prized for natural rot resistance.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                Are cedar trees more valuable than pine?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Generally yes, cedar commands 2-3x higher prices than pine due to natural durability and aromatic properties. While cedar forests are valued at $2-5 per board foot for timber, individual landscape specimens are far more valuable.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                How do I get a cedar tree appraised?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Contact certified arborists experienced in specialty wood valuations. Provide measurements plus note any rot-resistant characteristics and aromatic quality. Cedars often show 50-100% premiums for landscape positioning vs timber values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl font-semibold text-charcoal-900 mb-4">
              Related Resources
            </h2>
            <p className="text-charcoal-600">
              More information about cedar trees, rot-resistant woods, and landscape valuation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/calculator" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-emerald-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Tree Value Calculator</h3>
                <p className="text-sm text-charcoal-600">Get your cedar's exact value</p>
              </div>
            </Link>

            <Link href="/tree-appraisal-guide" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-emerald-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Tree Appraisal Guide</h3>
                <p className="text-sm text-charcoal-600">Learn professional valuation methods</p>
              </div>
            </Link>

            <Link href="/most-valuable-trees" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-emerald-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Most Valuable Trees</h3>
                <p className="text-sm text-charcoal-600">See cedar's unique position</p>
              </div>
            </Link>

            <Link href="/pine-tree-value-calculator" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-emerald-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Pine Tree Calculator</h3>
                <p className="text-sm text-charcoal-600">Compare with common conifers</p>
              </div>
            </Link>

            <Link href="/cypress-tree-value-calculator" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-emerald-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Cypress Tree Calculator</h3>
                <p className="text-sm text-charcoal-600">Another rot-resistant species</p>
              </div>
            </Link>

            <Link href="/tree-damage-insurance-claim" className="block">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:border-emerald-200 transition-colors">
                <h3 className="font-semibold text-charcoal-900 mb-2">Insurance Protection</h3>
                <p className="text-sm text-charcoal-600">Protect your durable tree investment</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}