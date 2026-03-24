import Link from "next/link";
import { TreeDeciduous, Calculator, Leaf, Shield, Award, CheckCircle, MapPin, Users, DollarSign, ArrowRight, FileText, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certified Arborist Atlanta, GA | Find ISA Certified Tree Experts",
  description: "Find ISA certified arborists in Atlanta, GA. Learn what certification means, why it matters for tree appraisals ($200–$400 written reports), and get a free tree valuation.",
  keywords: "certified arborist Atlanta, ISA certified arborist Atlanta GA, tree appraisal written report Atlanta, tree expert Atlanta, arborist near me Atlanta",
  openGraph: {
    title: "Certified Arborist Atlanta, GA | Find ISA Certified Tree Experts",
    description: "Find ISA certified arborists in Atlanta and get a free tree valuation before you hire.",
    type: "article",
  },
};

const faqs = [
  {
    q: "How do I verify an arborist is ISA certified in Atlanta?",
    a: "Visit treesaregood.org/verify and search by name or certification number. ISA certification numbers follow the format 'GA-XXXX' for Georgia-based arborists. Always verify before hiring — anyone can claim to be 'certified.'",
  },
  {
    q: "How much does a written tree appraisal cost in Atlanta?",
    a: "A formal written tree appraisal from an ISA certified arborist in the Atlanta metro typically costs $200–$400 per report. More complex appraisals involving multiple trees, legal disputes, or expert witness testimony can run $500–$1,500+. Our free online calculator gives you an estimate using the same CTLA formula before you pay for a professional report.",
  },
  {
    q: "Do I need a certified arborist to get a tree removal permit in Atlanta?",
    a: "While the City of Atlanta doesn't always require a certified arborist to file a tree removal permit, having one document the tree's condition (hazard, disease, structural failure) significantly strengthens your permit application and reduces the risk of denial or required mitigation fees.",
  },
  {
    q: "Can a certified arborist testify in court about tree value?",
    a: "Yes — an ISA Certified Arborist with TRAQ (Tree Risk Assessment Qualification) credentials can provide expert witness testimony and legally defensible appraisals in property disputes, HOA conflicts, and insurance litigation. A standard online calculator estimate is not sufficient for legal proceedings.",
  },
  {
    q: "What's the difference between an arborist and a tree trimmer?",
    a: "A tree trimmer is a general term for anyone who prunes trees — no credentials required. An ISA Certified Arborist has passed a rigorous exam, has at least 3 years of hands-on experience, carries ongoing education requirements, and follows ANSI A300 pruning standards. For valuable trees, the difference matters enormously — improper pruning can permanently reduce a tree's structure and appraised value.",
  },
  {
    q: "What Atlanta neighborhoods have the highest-value trees?",
    a: "Druid Hills, Buckhead, Virginia-Highland, Morningside, and Inman Park have the densest concentrations of mature specimen trees. Willow oaks and white oaks in these areas regularly appraise at $15,000–$40,000+ due to their size, species rating, and prime location factors. A certified arborist familiar with Atlanta's tree canopy is essential for accurate valuations in these neighborhoods.",
  },
];

export default function CertifiedArboristAtlantaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-forest-50 to-cream">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 bg-forest-200 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-earth-200 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-forest-100 text-forest-800 rounded-full text-sm font-medium mb-8">
              <Award className="w-4 h-4" />
              ISA Certified Arborists
            </div>

            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 leading-tight mb-6">
              Certified Arborists in Atlanta, GA
            </h1>

            <p className="text-lg md:text-xl text-charcoal-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Atlanta's 47% tree canopy — the densest of any major U.S. city — means tree care is serious business here.
              Before you hire anyone to touch your trees, know what they're worth and what credentials your arborist should have.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator">
                <Button size="lg" rightIcon={<Calculator className="w-5 h-5" />}>
                  Get Free Tree Valuation First
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is ISA Certification */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-forest-100 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-forest-600" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-charcoal-900">
                What Is ISA Certification?
              </h2>
            </div>

            <p className="text-charcoal-600 mb-6 leading-relaxed">
              The International Society of Arboriculture (ISA) is the gold standard in tree care credentialing. An ISA Certified
              Arborist has passed a comprehensive exam covering tree biology, pruning, risk assessment, and tree preservation —
              and must complete continuing education to maintain their certification.
            </p>

            <p className="text-charcoal-600 mb-8 leading-relaxed">
              In Atlanta, where the city's tree ordinance requires permits to remove trees over 6 inches in diameter at breast
              height (DBH), working with a certified arborist is often not just recommended — it's necessary to navigate the
              permitting process correctly.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: CheckCircle, text: "Passed ISA written certification exam" },
                { icon: CheckCircle, text: "Minimum 3 years of hands-on experience" },
                { icon: CheckCircle, text: "Ongoing continuing education required" },
                { icon: CheckCircle, text: "Carries liability insurance" },
                { icon: CheckCircle, text: "Follows ANSI A300 pruning standards" },
                { icon: CheckCircle, text: "Can provide legally defensible appraisals" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-forest-50 rounded-lg">
                  <item.icon className="w-5 h-5 text-forest-600 mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal-700 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters in Atlanta */}
      <section className="py-16 md:py-24 bg-earth-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-earth-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-earth-600" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-charcoal-900">
                Why Certification Matters More in Atlanta
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-earth-200">
                <h3 className="font-semibold text-charcoal-900 mb-2">Atlanta Tree Ordinance</h3>
                <p className="text-charcoal-600 text-sm leading-relaxed">
                  Atlanta has one of the strictest urban tree ordinances in the Southeast. Removing a protected tree without
                  proper permits can result in fines and mandatory replacement requirements. A certified arborist can assess
                  your tree, help navigate the City of Atlanta's permitting process, and provide documentation for exemptions.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-earth-200">
                <h3 className="font-semibold text-charcoal-900 mb-2">Storm Damage and Insurance Claims</h3>
                <p className="text-charcoal-600 text-sm leading-relaxed">
                  Atlanta's severe thunderstorm season, combined with occasional ice storms and tornado touchdowns, makes storm
                  damage a common issue. When a tree falls on your property, insurance companies require documentation. Only a
                  certified arborist can provide a legally defensible appraisal for insurance or legal purposes.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-earth-200">
                <h3 className="font-semibold text-charcoal-900 mb-2">Protecting High-Value Trees</h3>
                <p className="text-charcoal-600 text-sm leading-relaxed">
                  In neighborhoods like Buckhead, Druid Hills, and Virginia-Highland, mature willow oaks and Southern magnolias
                  can be worth $10,000 to $40,000 each. Hiring an uncertified tree service to prune or treat these trees can
                  permanently damage their structure and reduce their value. Certification is your assurance of proper technique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost of Written Reports */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-amber-600" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-charcoal-900">
                What Does a Written Tree Appraisal Cost?
              </h2>
            </div>

            <p className="text-charcoal-600 mb-6 leading-relaxed">
              A formal written tree appraisal from an ISA certified arborist in the Atlanta metro typically runs
              <strong className="text-charcoal-900"> $200–$400 per report</strong>. That fee covers an on-site inspection,
              measurements, species identification, condition assessment, and a signed written report using the CTLA Trunk
              Formula Method — the industry standard for tree valuation.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {[
                { label: "Basic written appraisal", value: "$200 – $300", note: "Single tree, no dispute" },
                { label: "Insurance / legal appraisal", value: "$300 – $400", note: "Formal documentation" },
                { label: "Expert witness report", value: "$500 – $1,500+", note: "Litigation or HOA dispute" },
              ].map((item, i) => (
                <div key={i} className="bg-forest-50 rounded-xl p-5 border border-forest-100">
                  <div className="text-xs text-charcoal-500 mb-1">{item.label}</div>
                  <div className="font-semibold text-forest-700 text-lg">{item.value}</div>
                  <div className="text-xs text-charcoal-500 mt-1">{item.note}</div>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-4">
              <FileText className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-charcoal-700 text-sm leading-relaxed">
                <strong>Pro tip:</strong> Use our free calculator to get a CTLA estimate before paying for a professional
                report. If your tree appraises at $5,000+, a $250 formal report is well worth the cost for insurance,
                legal protection, or estate documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Know Your Tree's Value First */}
      <section className="py-16 md:py-24 bg-forest-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-forest-100 rounded-lg flex items-center justify-center">
                <TreeDeciduous className="w-5 h-5 text-forest-600" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-charcoal-900">
                Know Your Tree's Value Before You Call Anyone
              </h2>
            </div>

            <p className="text-charcoal-600 mb-6 leading-relaxed">
              Before hiring an arborist — certified or not — it helps to know what your trees are actually worth. A mature
              willow oak in Druid Hills isn't just a tree. It's a landscape asset worth thousands of dollars that affects your
              property value, your insurance coverage, and your liability exposure.
            </p>

            <p className="text-charcoal-600 mb-8 leading-relaxed">
              Our free calculator uses the same CTLA Trunk Formula Method that ISA certified arborists use in professional
              appraisals. Get your estimate in under 2 minutes — no signup required.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              {[
                { label: "Willow Oak (large)", value: "$8,000 – $30,000+" },
                { label: "Southern Magnolia", value: "$5,000 – $20,000" },
                { label: "Loblolly Pine", value: "$2,000 – $12,000" },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 text-center border border-forest-100">
                  <div className="text-xs text-charcoal-500 mb-1">{item.label}</div>
                  <div className="font-semibold text-forest-700">{item.value}</div>
                </div>
              ))}
            </div>

            <Link href="/calculator">
              <Button size="lg" className="w-full sm:w-auto" rightIcon={<Calculator className="w-5 h-5" />}>
                Calculate Your Tree's Value Free
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What to Ask Before Hiring */}
      <section className="py-16 md:py-24 bg-charcoal-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="w-10 h-10 text-forest-400 mx-auto mb-4" />
            <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4">
              What to Ask Before Hiring an Arborist
            </h2>
            <p className="text-charcoal-300 mb-10">
              Not every tree service that calls itself an "arborist" is certified. Here's how to verify.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {[
                { q: "Are you ISA certified?", a: "Ask for their certification number and verify at treesaregood.org/verify" },
                { q: "Do you carry liability insurance?", a: "Minimum $1M general liability — get the certificate, not just a verbal yes" },
                { q: "Do you follow ANSI A300 standards?", a: "This is the industry standard for pruning — any legitimate arborist will know this" },
                { q: "Can you provide a written estimate?", a: "Get everything in writing before any work begins" },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-5">
                  <div className="font-semibold text-white text-sm mb-1">{item.q}</div>
                  <div className="text-charcoal-300 text-sm">{item.a}</div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link href="/calculator">
                <Button size="lg" variant="secondary" rightIcon={<Calculator className="w-5 h-5" />}>
                  Get Your Free Tree Valuation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 bg-forest-100 rounded-lg flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-forest-600" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-charcoal-900">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-charcoal-200 rounded-xl p-6">
                  <h3 className="font-semibold text-charcoal-900 mb-3">{faq.q}</h3>
                  <p className="text-charcoal-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-16 md:py-24 bg-earth-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-earth-100 rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-earth-600" />
              </div>
              <h2 className="font-heading text-2xl font-semibold text-charcoal-900">
                More Atlanta Tree Resources
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/tree-appraisal-atlanta",
                  title: "Tree Appraisal in Atlanta",
                  desc: "How professional tree appraisals work in Atlanta and when you need one.",
                },
                {
                  href: "/tree-value-calculator-atlanta",
                  title: "Atlanta Tree Value Calculator",
                  desc: "Free online tool to estimate your Atlanta tree's appraised value.",
                },
                {
                  href: "/tree-damage-claim-atlanta",
                  title: "Tree Damage Claims in Atlanta",
                  desc: "How to file a tree damage insurance claim after Atlanta storms.",
                },
                {
                  href: "/atlanta-tree-removal-cost",
                  title: "Atlanta Tree Removal Cost",
                  desc: "What you'll pay to remove a tree in the Atlanta metro area.",
                },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group bg-white rounded-xl p-5 border border-earth-200 hover:border-forest-400 hover:shadow-sm transition-all">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-semibold text-charcoal-900 text-sm mb-1 group-hover:text-forest-700 transition-colors">
                        {link.title}
                      </div>
                      <div className="text-charcoal-500 text-xs leading-relaxed">{link.desc}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-charcoal-400 group-hover:text-forest-600 flex-shrink-0 mt-0.5 transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
