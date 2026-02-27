import Link from "next/link";
import { TreeDeciduous, Calculator, ArrowRight, FileText, DollarSign, Award, BookOpen, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tree Value Resources - Guides, Calculators & Expert Information",
  description: "Complete resource hub for tree valuation, appraisals, and replacement costs. Free calculators, expert guides, and professional insights for tree owners.",
  keywords: "tree value resources, tree appraisal guides, tree calculators, tree replacement cost, arborist resources",
  openGraph: {
    title: "Tree Value Resources - Expert Guides & Free Calculators",
    description: "Everything you need to know about tree valuation, from free calculators to professional appraisal guides.",
    type: "website"
  }
};

export default function TreeValueResources() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-forest-50 to-cream">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 bg-forest-200 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-earth-200 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-forest-100 text-forest-800 rounded-full text-sm font-medium mb-8">
              <BookOpen className="w-4 h-4" />
              Complete Resource Library
            </div>

            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 leading-tight mb-6">
              Tree Value Resources
            </h1>

            <p className="text-lg md:text-xl text-charcoal-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Everything you need to understand, calculate, and document your tree's value. From free calculators to expert guides, get the knowledge you need to protect your valuable trees.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator">
                <Button size="lg" rightIcon={<Calculator className="w-5 h-5" />}>
                  Start Free Tree Calculator
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Resources Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              Expert Guides & Calculators
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Our comprehensive resource library covers everything from basic tree valuation to professional appraisal processes.
            </p>
          </div>

          {/* Featured Calculator */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-forest-700 to-earth-600 rounded-3xl p-8 md:p-12 text-white">
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Calculator className="w-10 h-10" />
                </div>
                
                <h3 className="font-heading text-2xl md:text-3xl font-semibold mb-4">
                  Free Tree Value Calculator
                </h3>
                
                <p className="text-lg text-white/80 mb-8 leading-relaxed">
                  Get a professional-grade valuation of your tree's replacement cost and annual ecosystem benefits. Uses industry-standard CTLA methodology accepted by insurance companies and courts.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Link href="/calculator" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-forest-800 font-semibold rounded-xl hover:bg-forest-50 transition-colors text-lg">
                      Calculate Your Tree's Value
                      <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="font-semibold text-white/80 mb-1">Replacement Value</div>
                    <div className="text-2xl font-mono font-bold">$2K - $50K+</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="font-semibold text-white/80 mb-1">Annual Benefits</div>
                    <div className="text-2xl font-mono font-bold">$50 - $500/yr</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="font-semibold text-white/80 mb-1">Time to Complete</div>
                    <div className="text-2xl font-mono font-bold">&lt; 2 min</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Resource Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Tree Value Guide */}
            <div className="bg-cream rounded-2xl p-8 border border-charcoal-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center mb-6">
                <DollarSign className="w-7 h-7 text-forest-700" />
              </div>
              
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3">
                How Much Is My Tree Worth?
              </h3>
              
              <p className="text-charcoal-600 leading-relaxed mb-6">
                Comprehensive guide covering factors that affect tree value, typical price ranges, and when you need professional vs. DIY valuations. Includes FAQ section with expert insights.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-sm text-charcoal-600">
                  <div className="w-2 h-2 bg-forest-600 rounded-full"></div>
                  <span>Tree value ranges by size and species</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-600">
                  <div className="w-2 h-2 bg-forest-600 rounded-full"></div>
                  <span>6 key factors that determine tree worth</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-600">
                  <div className="w-2 h-2 bg-forest-600 rounded-full"></div>
                  <span>DIY vs professional appraisal guidance</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-600">
                  <div className="w-2 h-2 bg-forest-600 rounded-full"></div>
                  <span>Frequently asked questions answered</span>
                </div>
              </div>

              <Link href="/how-much-is-my-tree-worth">
                <Button variant="secondary" className="w-full" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Read Complete Guide
                </Button>
              </Link>
            </div>

            {/* Appraisal Guide */}
            <div className="bg-cream rounded-2xl p-8 border border-charcoal-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-earth-100 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-earth-600" />
              </div>
              
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3">
                Tree Appraisal Guide
              </h3>
              
              <p className="text-charcoal-600 leading-relaxed mb-6">
                Everything about professional tree appraisals: what they cost ($150-$1,500), when you need one, how to find qualified ISA certified arborists, and understanding the CTLA method.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-sm text-charcoal-600">
                  <div className="w-2 h-2 bg-earth-600 rounded-full"></div>
                  <span>When you need a certified appraisal</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-600">
                  <div className="w-2 h-2 bg-earth-600 rounded-full"></div>
                  <span>Cost breakdown and pricing factors</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-600">
                  <div className="w-2 h-2 bg-earth-600 rounded-full"></div>
                  <span>Finding qualified arborist appraisers</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-600">
                  <div className="w-2 h-2 bg-earth-600 rounded-full"></div>
                  <span>CTLA methodology explained simply</span>
                </div>
              </div>

              <Link href="/tree-appraisal-guide">
                <Button variant="secondary" className="w-full" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Read Appraisal Guide
                </Button>
              </Link>
            </div>

            {/* Replacement Cost Guide */}
            <div className="bg-cream rounded-2xl p-8 border border-charcoal-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-forest-700" />
              </div>
              
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3">
                Tree Replacement Cost Guide
              </h3>
              
              <p className="text-charcoal-600 leading-relaxed mb-6">
                Deep dive into replacement cost calculations using the CTLA trunk formula. Why it matters for insurance claims, legal disputes, and includes cost tables by tree size.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-sm text-charcoal-600">
                  <div className="w-2 h-2 bg-forest-600 rounded-full"></div>
                  <span>CTLA trunk formula explained</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-600">
                  <div className="w-2 h-2 bg-forest-600 rounded-full"></div>
                  <span>Cost tables by tree size and species</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-600">
                  <div className="w-2 h-2 bg-forest-600 rounded-full"></div>
                  <span>Insurance documentation tips</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-600">
                  <div className="w-2 h-2 bg-forest-600 rounded-full"></div>
                  <span>Factors that increase/decrease cost</span>
                </div>
              </div>

              <Link href="/tree-replacement-cost">
                <Button variant="secondary" className="w-full" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Learn About Replacement Cost
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 md:py-28 bg-forest-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              Quick Reference Links
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Fast access to the most requested information and tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/calculator" className="group">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:shadow-md transition-all group-hover:border-forest-300">
                <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-forest-200 transition-colors">
                  <Calculator className="w-6 h-6 text-forest-700" />
                </div>
                <h4 className="font-heading font-semibold text-charcoal-900 mb-2">Free Calculator</h4>
                <p className="text-sm text-charcoal-600">Get instant tree valuations</p>
              </div>
            </Link>

            <Link href="/how-much-is-my-tree-worth#faq" className="group">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:shadow-md transition-all group-hover:border-earth-300">
                <div className="w-12 h-12 bg-earth-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-earth-200 transition-colors">
                  <FileText className="w-6 h-6 text-earth-600" />
                </div>
                <h4 className="font-heading font-semibold text-charcoal-900 mb-2">Tree Value FAQ</h4>
                <p className="text-sm text-charcoal-600">Common questions answered</p>
              </div>
            </Link>

            <Link href="/tree-appraisal-guide#cost-breakdown" className="group">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:shadow-md transition-all group-hover:border-forest-300">
                <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-forest-200 transition-colors">
                  <DollarSign className="w-6 h-6 text-forest-700" />
                </div>
                <h4 className="font-heading font-semibold text-charcoal-900 mb-2">Appraisal Costs</h4>
                <p className="text-sm text-charcoal-600">What professional appraisals cost</p>
              </div>
            </Link>

            <Link href="/tree-replacement-cost#cost-table" className="group">
              <div className="bg-white rounded-xl p-6 border border-charcoal-100 hover:shadow-md transition-all group-hover:border-earth-300">
                <div className="w-12 h-12 bg-earth-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-earth-200 transition-colors">
                  <TrendingUp className="w-6 h-6 text-earth-600" />
                </div>
                <h4 className="font-heading font-semibold text-charcoal-900 mb-2">Cost by Size</h4>
                <p className="text-sm text-charcoal-600">Replacement costs by tree diameter</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Species-Specific Calculators */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              Tree Value by Species
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Get species-specific valuation guides with typical value ranges, unique characteristics, and factors that affect worth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/oak-tree-value-calculator" className="group">
              <div className="bg-cream rounded-xl p-6 border border-charcoal-100 hover:shadow-md transition-all group-hover:border-forest-300">
                <h4 className="font-heading font-semibold text-charcoal-900 mb-2">Oak Tree Calculator</h4>
                <p className="text-sm text-charcoal-600 mb-2">White oak, red oak, and more</p>
                <p className="text-sm font-mono text-forest-700">$8K - $50K+</p>
              </div>
            </Link>

            <Link href="/maple-tree-value-calculator" className="group">
              <div className="bg-cream rounded-xl p-6 border border-charcoal-100 hover:shadow-md transition-all group-hover:border-forest-300">
                <h4 className="font-heading font-semibold text-charcoal-900 mb-2">Maple Tree Calculator</h4>
                <p className="text-sm text-charcoal-600 mb-2">Sugar maple, red maple, Japanese maple</p>
                <p className="text-sm font-mono text-forest-700">$10K - $45K+</p>
              </div>
            </Link>

            <Link href="/live-oak-tree-value-calculator" className="group">
              <div className="bg-cream rounded-xl p-6 border border-charcoal-100 hover:shadow-md transition-all group-hover:border-forest-300">
                <h4 className="font-heading font-semibold text-charcoal-900 mb-2">Live Oak Calculator</h4>
                <p className="text-sm text-charcoal-600 mb-2">Iconic Southern heritage trees</p>
                <p className="text-sm font-mono text-forest-700">$15K - $80K+</p>
              </div>
            </Link>

            <Link href="/pecan-tree-value-calculator" className="group">
              <div className="bg-cream rounded-xl p-6 border border-charcoal-100 hover:shadow-md transition-all group-hover:border-forest-300">
                <h4 className="font-heading font-semibold text-charcoal-900 mb-2">Pecan Tree Calculator</h4>
                <p className="text-sm text-charcoal-600 mb-2">Nut production + premium hardwood</p>
                <p className="text-sm font-mono text-forest-700">$8K - $60K+</p>
              </div>
            </Link>

            <Link href="/black-walnut-tree-value-calculator" className="group">
              <div className="bg-cream rounded-xl p-6 border border-charcoal-100 hover:shadow-md transition-all group-hover:border-forest-300">
                <h4 className="font-heading font-semibold text-charcoal-900 mb-2">Black Walnut Calculator</h4>
                <p className="text-sm text-charcoal-600 mb-2">America&apos;s most valuable hardwood</p>
                <p className="text-sm font-mono text-forest-700">$10K - $50K+</p>
              </div>
            </Link>

            <Link href="/cedar-tree-value-calculator" className="group">
              <div className="bg-cream rounded-xl p-6 border border-charcoal-100 hover:shadow-md transition-all group-hover:border-forest-300">
                <h4 className="font-heading font-semibold text-charcoal-900 mb-2">Cedar Tree Calculator</h4>
                <p className="text-sm text-charcoal-600 mb-2">Aromatic, rot-resistant wood</p>
                <p className="text-sm font-mono text-forest-700">$5K - $30K+</p>
              </div>
            </Link>

            <Link href="/cypress-tree-value-calculator" className="group">
              <div className="bg-cream rounded-xl p-6 border border-charcoal-100 hover:shadow-md transition-all group-hover:border-forest-300">
                <h4 className="font-heading font-semibold text-charcoal-900 mb-2">Cypress Tree Calculator</h4>
                <p className="text-sm text-charcoal-600 mb-2">Bald cypress, 1000+ year lifespans</p>
                <p className="text-sm font-mono text-forest-700">$8K - $50K+</p>
              </div>
            </Link>

            <Link href="/fruit-tree-value-calculator" className="group">
              <div className="bg-cream rounded-xl p-6 border border-charcoal-100 hover:shadow-md transition-all group-hover:border-forest-300">
                <h4 className="font-heading font-semibold text-charcoal-900 mb-2">Fruit Tree Calculator</h4>
                <p className="text-sm text-charcoal-600 mb-2">Apple, cherry, citrus, and more</p>
                <p className="text-sm font-mono text-forest-700">$2K - $25K+</p>
              </div>
            </Link>

            <Link href="/best-tree-value-calculator-apps" className="group">
              <div className="bg-cream rounded-xl p-6 border border-charcoal-100 hover:shadow-md transition-all group-hover:border-amber-300">
                <h4 className="font-heading font-semibold text-charcoal-900 mb-2">Calculator Comparison</h4>
                <p className="text-sm text-charcoal-600 mb-2">Best tree value apps &amp; tools 2026</p>
                <p className="text-sm font-mono text-amber-700">Free Guide</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why These Resources Matter */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              Why Tree Valuation Knowledge Matters
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Understanding your tree's value protects your investment and ensures you're prepared for various scenarios.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-forest-50 rounded-2xl p-8 border border-forest-200">
              <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-forest-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3">
                Insurance Protection
              </h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Storm damage, disease outbreaks, and accidents can destroy valuable trees. Knowing replacement costs ensures adequate insurance coverage and proper claim documentation.
              </p>
              <p className="text-sm text-forest-700 font-semibold">
                Typical claim values: $5,000 - $25,000+
              </p>
            </div>

            <div className="bg-earth-50 rounded-2xl p-8 border border-earth-200">
              <div className="w-14 h-14 bg-earth-100 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-earth-600" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3">
                Property Investment
              </h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Mature trees can add 10-15% to property values. Understanding which trees provide the best return helps guide maintenance investments and landscape planning decisions.
              </p>
              <p className="text-sm text-earth-600 font-semibold">
                ROI on tree care: 200-400%
              </p>
            </div>

            <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3">
                Legal Preparedness
              </h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Property disputes, construction damage, or municipal issues often require documented tree values. Having current valuations prevents lengthy legal delays.
              </p>
              <p className="text-sm text-amber-600 font-semibold">
                Legal disputes involving trees increasing 15% annually
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Credibility */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              Trusted by Professionals
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Our resources are based on industry-standard methodologies used by certified professionals
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-forest-700" />
              </div>
              <h4 className="font-semibold text-charcoal-900 mb-2">CTLA Standards</h4>
              <p className="text-sm text-charcoal-600">Council of Tree and Landscape Appraisers methodology</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreeDeciduous className="w-8 h-8 text-earth-600" />
              </div>
              <h4 className="font-semibold text-charcoal-900 mb-2">ISA Certified</h4>
              <p className="text-sm text-charcoal-600">International Society of Arboriculture standards</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-forest-700" />
              </div>
              <h4 className="font-semibold text-charcoal-900 mb-2">Insurance Accepted</h4>
              <p className="text-sm text-charcoal-600">Methods accepted by major insurance companies</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-earth-600" />
              </div>
              <h4 className="font-semibold text-charcoal-900 mb-2">Court Recognized</h4>
              <p className="text-sm text-charcoal-600">Legally defensible valuation methods</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-forest-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
            Start With Your Free Tree Valuation
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Put our expert resources to work for you. Get a professional-grade assessment of your tree's value in under 2 minutes using the same methods trusted by certified arborists.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/calculator">
              <Button size="lg" variant="secondary" rightIcon={<Calculator className="w-5 h-5" />}>
                Calculate Your Tree's Value - Free
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white/10 rounded-xl p-6">
              <h4 className="font-semibold text-white/80 mb-2">Instant Results</h4>
              <p className="text-forest-200 text-sm">Professional valuation in under 2 minutes with detailed report delivered to your inbox</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h4 className="font-semibold text-white/80 mb-2">Expert Methodology</h4>
              <p className="text-forest-200 text-sm">CTLA and i-Tree methods used by certified arborists and accepted by insurance companies</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h4 className="font-semibold text-white/80 mb-2">Always Free</h4>
              <p className="text-forest-200 text-sm">No hidden fees, no subscriptions. Get unlimited valuations and keep all your reports</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-charcoal-900 text-charcoal-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <TreeDeciduous className="w-6 h-6 text-forest-400" />
              <span className="font-heading text-xl font-semibold text-white">
                Arbor Value
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/resources" className="hover:text-white transition-colors">
                Resources
              </Link>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Arbor Value. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}