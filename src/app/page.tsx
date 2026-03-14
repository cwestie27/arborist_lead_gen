import Link from "next/link";
import { TreeDeciduous, Calculator, Mail, Shield, ArrowRight, AlertTriangle, Scan } from "lucide-react";
import { Button } from "@/components/ui";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-forest-50 to-cream">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 bg-forest-200 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-earth-200 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-forest-100 text-forest-800 rounded-full text-sm font-medium mb-8">
              <TreeDeciduous className="w-4 h-4" />
              Free Tree Valuation Calculator
            </div>

            {/* Headline */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal-900 leading-tight mb-6">
              Discover What Your Trees Are{" "}
              <span className="text-forest-700">Really Worth</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-charcoal-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Get a professional-grade valuation of your tree&apos;s replacement cost
              and annual ecosystem benefits. Takes less than 2 minutes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator">
                <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Calculate My Tree&apos;s Value
                </Button>
              </Link>
              <a href="#how-it-works">
                <Button variant="secondary" size="lg">
                  Learn How It Works
                </Button>
              </a>
            </div>

            {/* Trust indicators */}
            <p className="mt-8 text-sm text-charcoal-500">
              Based on CTLA appraisal methods used by certified arborists
            </p>
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              Your Tree is a Valuable Asset
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Most homeowners don&apos;t realize that a mature tree can be worth
              thousands of dollars. Our calculator reveals both the replacement
              value and the ongoing benefits.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-cream rounded-2xl p-8 border border-charcoal-100">
              <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center mb-6">
                <Calculator className="w-7 h-7 text-forest-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3">
                Replacement Value
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Discover what it would cost to replace your tree today using
                industry-standard CTLA appraisal methods.
              </p>
              <p className="mt-4 text-2xl font-mono font-bold text-forest-700">
                $5,000 - $50,000+
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-cream rounded-2xl p-8 border border-charcoal-100">
              <div className="w-14 h-14 bg-earth-100 rounded-xl flex items-center justify-center mb-6">
                <TreeDeciduous className="w-7 h-7 text-earth-600" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3">
                Annual Eco-Dividend
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Your tree provides free services every year: carbon capture,
                stormwater management, and energy savings.
              </p>
              <p className="mt-4 text-2xl font-mono font-bold text-earth-600">
                $50 - $200/year
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-cream rounded-2xl p-8 border border-charcoal-100">
              <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center mb-6">
                <Mail className="w-7 h-7 text-forest-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3">
                Detailed Report
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Receive a comprehensive Tree Wealth Report with your complete
                valuation breakdown via email.
              </p>
              <p className="mt-4 text-2xl font-mono font-bold text-forest-700">
                100% Free
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Prevention Section */}
      <section className="py-20 md:py-28 bg-amber-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              Don&apos;t Let Your Investment Become a Liability
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              A healthy tree adds thousands to your property value. A neglected
              tree can cost you even more in damage, removal, and liability claims.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Storm Ready */}
            <div className="bg-white rounded-2xl p-8 border border-amber-100">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <AlertTriangle className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3">
                Storm-Ready Trees
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Dead branches and weakened limbs are the first to fall during
                storms. Early detection prevents costly damage to your home and
                vehicles.
              </p>
              <p className="mt-4 text-2xl font-mono font-bold text-amber-600">
                $3B+ annual storm damage
              </p>
            </div>

            {/* Card 2 - Reduce Liability */}
            <div className="bg-white rounded-2xl p-8 border border-amber-100">
              <div className="w-14 h-14 bg-earth-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-earth-600" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3">
                Reduce Your Liability
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Homeowners can be held liable for damage from hazardous trees.
                Document health status and address issues proactively.
              </p>
              <p className="mt-4 text-2xl font-mono font-bold text-earth-600">
                $100K+ potential liability
              </p>
            </div>

            {/* Card 3 - AI Health Check */}
            <div className="bg-white rounded-2xl p-8 border border-amber-100">
              <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center mb-6">
                <Scan className="w-7 h-7 text-forest-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3">
                AI-Powered Health Check
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Upload a photo and our AI instantly analyzes your tree for 30+
                diseases and pest infestations. Catch problems early.
              </p>
              <p className="mt-4 text-2xl font-mono font-bold text-forest-700">
                60 seconds to assess
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/calculator">
              <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Check My Tree&apos;s Health Free
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Browse by Tree Species */}
      <section className="py-20 md:py-28 bg-white border-t border-charcoal-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              Calculate Value by Tree Species
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Different species have very different values. Select your tree type for a species-specific valuation.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { name: "Black Walnut", href: "/black-walnut-tree-value-calculator", emoji: "🌰", note: "Highest timber value" },
              { name: "Oak", href: "/oak-tree-value-calculator", emoji: "🌳", note: "Most common hardwood" },
              { name: "Live Oak", href: "/live-oak-tree-value-calculator", emoji: "🌿", note: "Southern staple" },
              { name: "Maple", href: "/maple-tree-value-calculator", emoji: "🍁", note: "High landscape value" },
              { name: "Pecan", href: "/pecan-tree-value-calculator", emoji: "🥜", note: "Nut + timber value" },
              { name: "Cedar", href: "/cedar-tree-value-calculator", emoji: "🌲", note: "Aromatic hardwood" },
              { name: "Cypress", href: "/cypress-tree-value-calculator", emoji: "🌾", note: "Rot-resistant wood" },
              { name: "Fruit Trees", href: "/fruit-tree-value-calculator", emoji: "🍎", note: "Apple, pear, cherry" },
            ].map((tree) => (
              <Link key={tree.href} href={tree.href}>
                <div className="group bg-cream hover:bg-forest-50 border border-charcoal-100 hover:border-forest-300 rounded-2xl p-5 text-center transition-all cursor-pointer">
                  <div className="text-3xl mb-3">{tree.emoji}</div>
                  <h3 className="font-heading font-semibold text-charcoal-900 mb-1 group-hover:text-forest-700 transition-colors">
                    {tree.name}
                  </h3>
                  <p className="text-xs text-charcoal-500">{tree.note}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-charcoal-500 text-sm">Don&apos;t see your species? <Link href="/calculator" className="text-forest-700 underline hover:text-forest-900">Use the general calculator →</Link></p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 md:py-28 bg-forest-50 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-charcoal-600">
              Three simple steps to discover your tree&apos;s value
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Describe Your Tree",
                description:
                  "Answer a few simple questions about your tree's size and type. No measuring tools needed.",
              },
              {
                step: "2",
                title: "Get Your Valuation",
                description:
                  "Our algorithm calculates your tree's replacement value and annual benefits instantly.",
              },
              {
                step: "3",
                title: "Receive Your Report",
                description:
                  "Get a detailed Tree Wealth Report delivered to your inbox with expert recommendations.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-forest-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-charcoal-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/calculator">
              <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Start Free Valuation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white border-t border-charcoal-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-forest-600" />
              <span className="text-charcoal-600">
                Based on CTLA standards
              </span>
            </div>
            <div className="hidden md:block w-px h-6 bg-charcoal-200" />
            <div className="flex items-center gap-3">
              <TreeDeciduous className="w-6 h-6 text-forest-600" />
              <span className="text-charcoal-600">
                i-Tree ecosystem formulas
              </span>
            </div>
            <div className="hidden md:block w-px h-6 bg-charcoal-200" />
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-forest-600" />
              <span className="text-charcoal-600">
                No spam, ever
              </span>
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
          <div className="mt-6 pt-6 border-t border-charcoal-700 flex flex-col md:flex-row items-center justify-center gap-4 text-xs text-charcoal-400">
            <span>Also from our team:</span>
            <a href="https://www.haveaidoit.com" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Have AI Do It - AI Guides</a>
            <span className="hidden md:inline">·</span>
            <a href="https://grantfound.com" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">GrantFound - Nonprofit Donor Intelligence</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
