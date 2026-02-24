import Link from "next/link";
import { TreeDeciduous, Calculator, ArrowRight, Shield, AlertTriangle, FileText, Phone, Camera, CheckCircle, DollarSign } from "lucide-react";
import { Button } from "@/components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tree Damage Insurance Claims: What to Do When a Tree Falls | 2025 Guide",
  description: "Step-by-step guide for tree damage insurance claims. Learn what's covered, how to document damage, tree appraisal requirements, and how to maximize your claim.",
  keywords: "tree damage insurance claim, tree fell on house insurance, tree removal insurance, tree appraisal insurance, storm damage tree claim",
  openGraph: {
    title: "Tree Damage Insurance Claims: Complete Homeowner's Guide",
    description: "What to do when a tree damages your property. Documentation tips, coverage explained, and how to get a fair claim settlement.",
    type: "article",
  },
};

const steps = [
  {
    icon: Camera,
    title: "1. Document Everything Immediately",
    description: "Before anyone touches the tree or debris, photograph everything from multiple angles. Include wide shots showing the full scene and close-ups of damage to structures, vehicles, fences, and landscaping.",
    tips: [
      "Photograph the base/root area to show why the tree fell",
      "Document the tree species and approximate size",
      "Take photos of any pre-existing damage or decay",
      "Record video walking around the full scene",
      "Note the date, time, and weather conditions",
    ],
  },
  {
    icon: Phone,
    title: "2. Call Your Insurance Company",
    description: "File a claim as soon as possible. Most policies have reporting deadlines. Your insurer will assign an adjuster who will inspect the damage and determine coverage.",
    tips: [
      "Call within 24-48 hours of the incident",
      "Get a claim number and adjuster's contact info",
      "Ask specifically about tree removal coverage limits",
      "Confirm your deductible amount",
      "Ask if temporary repairs are covered (tarping a roof, etc.)",
    ],
  },
  {
    icon: FileText,
    title: "3. Get a Professional Tree Appraisal",
    description: "This is the step most homeowners skip - and it costs them thousands. A certified arborist can appraise the replacement value of your lost tree, which is often covered under your policy's landscaping or 'other structures' provision.",
    tips: [
      "Hire an ISA-certified arborist for the appraisal",
      "Request a CTLA Trunk Formula Method valuation",
      "Get the appraisal in writing with full methodology",
      "Include ecosystem benefits documentation",
      "Keep receipts for the appraisal fee (often reimbursable)",
    ],
  },
  {
    icon: DollarSign,
    title: "4. Submit Your Claim with Full Documentation",
    description: "Combine your photos, the tree appraisal, contractor estimates for structural repairs, and tree removal quotes into a comprehensive claim package. The more documentation, the better your outcome.",
    tips: [
      "Get at least 2-3 tree removal quotes",
      "Include the tree appraisal value in your claim",
      "Document replacement landscaping costs",
      "Keep all receipts for emergency repairs",
      "Follow up regularly with your adjuster",
    ],
  },
];

export default function TreeDamageInsurancePage() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-8">
              <Shield className="w-4 h-4" />
              Insurance Claims Guide
            </div>

            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 leading-tight mb-6">
              Tree Damage Insurance Claims: A Homeowner's Complete Guide
            </h1>

            <p className="text-lg md:text-xl text-charcoal-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              A tree fell on your property. Now what? This guide walks you through the insurance claim process step by step - including the documentation most homeowners forget that can add thousands to their settlement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator">
                <Button size="lg" rightIcon={<Calculator className="w-5 h-5" />}>
                  Get Your Tree's Value for Your Claim
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What's Covered */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              What Does Homeowner's Insurance Actually Cover?
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Coverage varies by policy, but here's what most standard homeowner's policies include for tree-related damage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-forest-50 rounded-2xl p-8 border border-forest-200">
              <h3 className="font-heading text-xl font-semibold text-forest-800 mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6" />
                Typically Covered
              </h3>
              <ul className="space-y-4">
                {[
                  { item: "Structural damage to your home", detail: "Roof, walls, windows hit by falling tree" },
                  { item: "Tree removal from structures", detail: "$500-$1,000 per tree (policy-dependent)" },
                  { item: "Damage to other structures", detail: "Fences, sheds, garages, decks" },
                  { item: "Vehicle damage", detail: "Covered under auto comprehensive, not homeowner's" },
                  { item: "Temporary living expenses", detail: "If your home is uninhabitable during repairs" },
                  { item: "Landscaping replacement", detail: "Usually up to 5% of dwelling coverage" },
                ].map((item) => (
                  <li key={item.item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-forest-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-charcoal-900">{item.item}</p>
                      <p className="text-sm text-charcoal-600">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200">
              <h3 className="font-heading text-xl font-semibold text-amber-800 mb-6 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6" />
                Usually NOT Covered
              </h3>
              <ul className="space-y-4">
                {[
                  { item: "Tree removal with no structural damage", detail: "Tree fell in yard but hit nothing" },
                  { item: "Preventable damage", detail: "If you knew the tree was dead/hazardous and didn't act" },
                  { item: "Gradual damage", detail: "Root damage to foundation, slow lean issues" },
                  { item: "Trees on vacant land", detail: "Unimproved or undeveloped property" },
                  { item: "Neighbor's tree on your property", detail: "Their insurance may cover, or you may need to sue" },
                  { item: "Flood-related tree falls", detail: "Requires separate flood insurance" },
                ].map((item) => (
                  <li key={item.item} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-charcoal-900">{item.item}</p>
                      <p className="text-sm text-charcoal-600">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Step by Step */}
      <section className="py-20 md:py-28 bg-forest-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              How to File a Tree Damage Claim (Step by Step)
            </h2>
          </div>

          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.title} className="bg-white rounded-2xl p-8 border border-charcoal-100">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-7 h-7 text-forest-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-charcoal-600 leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <div className="bg-cream rounded-xl p-4">
                      <p className="text-sm font-semibold text-forest-700 mb-2">Pro Tips:</p>
                      <ul className="space-y-2">
                        {step.tips.map((tip) => (
                          <li key={tip} className="flex items-start gap-2 text-sm text-charcoal-600">
                            <ArrowRight className="w-3 h-3 text-forest-600 mt-1 flex-shrink-0" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Hidden Money */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-amber-50 rounded-2xl p-8 md:p-12 border border-amber-200">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-charcoal-900 mb-6">
                The Money Most Homeowners Leave on the Table
              </h2>
              <p className="text-lg text-charcoal-600 leading-relaxed mb-6">
                Most homeowners only claim the cost of tree removal ($500-$3,000) and structural repairs. They completely forget about the <strong>replacement value of the tree itself</strong>.
              </p>
              <p className="text-lg text-charcoal-600 leading-relaxed mb-6">
                A mature oak tree can be appraised at $15,000-$50,000+ using the CTLA Trunk Formula Method. Many homeowner's policies cover landscaping losses up to 5% of your dwelling coverage. On a $300,000 policy, that's $15,000 for tree replacement.
              </p>
              <p className="text-lg text-charcoal-600 leading-relaxed mb-8">
                <strong>You need documentation to claim it.</strong> That's where a professional tree appraisal - or at minimum, a detailed valuation report - makes all the difference.
              </p>
              <Link href="/calculator">
                <Button size="lg" rightIcon={<Calculator className="w-5 h-5" />}>
                  Get Your Tree's Replacement Value
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-forest-50 to-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-6">
            Know Your Tree's Value Before You Need It
          </h2>
          <p className="text-lg text-charcoal-600 mb-10 max-w-2xl mx-auto">
            Don't wait for a storm. Calculate the replacement value of your trees now so you have documentation ready if you ever need to file a claim.
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
