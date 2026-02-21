import Link from "next/link";
import { TreeDeciduous, Calculator, ArrowRight, Shield, DollarSign, FileText, Clock, Users, MapPin, AlertTriangle, CheckCircle, Award } from "lucide-react";
import { Button } from "@/components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tree Appraisal Guide: Cost, Process & When You Need One (2025)",
  description: "Complete guide to tree appraisals: what they cost ($150-$1,500), when you need one, how to find ISA certified arborists, and understanding the CTLA appraisal method.",
  keywords: "tree appraisal, tree appraisal cost, tree appraisal near me, certified arborist, CTLA method, tree valuation",
  openGraph: {
    title: "Tree Appraisal Guide: What It Costs and When You Need One",
    description: "Expert guide to tree appraisals including costs, process, and finding qualified arborists. Get your free estimate first.",
    type: "article"
  }
};

export default function TreeAppraisalGuide() {
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
              <Award className="w-4 h-4" />
              Professional Tree Appraisal Guide
            </div>

            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 leading-tight mb-6">
              Tree Appraisal Guide: What It Costs and When You Need One
            </h1>

            <p className="text-lg md:text-xl text-charcoal-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Professional tree appraisals provide legally defensible valuations for insurance claims, property disputes, and legal matters. Learn when you need one, what it costs, and how to find qualified appraisers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator">
                <Button size="lg" rightIcon={<Calculator className="w-5 h-5" />}>
                  Get a Free Estimate First
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Is a Tree Appraisal */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              What Is a Professional Tree Appraisal?
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              A tree appraisal is a formal assessment that determines the monetary value of trees using standardized methods accepted by courts, insurance companies, and government agencies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-cream rounded-2xl p-8 border border-charcoal-100">
              <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-7 h-7 text-forest-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3">
                Certified Documentation
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Official written report with standardized methodology, supporting data, and professional certification. Legally acceptable for courts and insurance claims.
              </p>
            </div>

            <div className="bg-cream rounded-2xl p-8 border border-charcoal-100">
              <div className="w-14 h-14 bg-earth-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-earth-600" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3">
                CTLA Methodology
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Uses Council of Tree and Landscape Appraisers standards - the industry gold standard for tree valuation recognized nationwide.
              </p>
            </div>

            <div className="bg-cream rounded-2xl p-8 border border-charcoal-100">
              <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-forest-700" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-3">
                Qualified Appraiser
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Performed by ISA Certified Arborists with specialized appraisal training and experience in local market conditions.
              </p>
            </div>
          </div>

          <div className="bg-forest-50 rounded-2xl p-8 border border-forest-200">
            <div className="text-center mb-8">
              <h3 className="font-heading text-2xl font-semibold text-charcoal-900 mb-4">
                The CTLA Method Explained
              </h3>
              <p className="text-charcoal-600 max-w-2xl mx-auto">
                The Council of Tree and Landscape Appraisers method is the industry standard, calculating replacement cost based on these key factors:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl">
                <h4 className="font-semibold text-charcoal-900 mb-3">Basic Calculation</h4>
                <div className="text-sm text-charcoal-600 font-mono bg-charcoal-50 p-4 rounded-lg">
                  Tree Value = Base Price × Species × Condition × Location
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h4 className="font-semibold text-charcoal-900 mb-3">Adjustment Factors</h4>
                <ul className="text-sm text-charcoal-600 space-y-2">
                  <li>• Species rating (0.8 - 1.2)</li>
                  <li>• Condition rating (0.1 - 1.0)</li>
                  <li>• Location factor (0.8 - 1.5)</li>
                  <li>• Local cost multipliers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When You Need an Appraisal */}
      <section className="py-20 md:py-28 bg-amber-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              When Do You Need a Professional Tree Appraisal?
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              While free estimates work for planning, certain situations require the legal authority and accuracy that only certified appraisals provide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 border border-amber-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <DollarSign className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                      Insurance Claims
                    </h3>
                    <p className="text-charcoal-600 text-sm leading-relaxed">
                      Required for storm damage, disease, or vandalism claims over $2,500. Insurance companies typically accept CTLA appraisals without question.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-amber-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-earth-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-5 h-5 text-earth-600" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                      Legal Disputes
                    </h3>
                    <p className="text-charcoal-600 text-sm leading-relaxed">
                      Property line disputes, neighbor conflicts, construction damage, or eminent domain cases require certified appraisals for court proceedings.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-amber-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-forest-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <FileText className="w-5 h-5 text-forest-700" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                      Estate Planning
                    </h3>
                    <p className="text-charcoal-600 text-sm leading-relaxed">
                      IRS requires professional appraisals for estate tax purposes when tree values exceed $5,000, or for charitable donation deductions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 border border-amber-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                      Municipal Permits
                    </h3>
                    <p className="text-charcoal-600 text-sm leading-relaxed">
                      Tree removal permits, development applications, or heritage tree designations often require certified appraisals from qualified professionals.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-amber-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-earth-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-5 h-5 text-earth-600" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                      Property Sales
                    </h3>
                    <p className="text-charcoal-600 text-sm leading-relaxed">
                      High-value properties with significant landscaping may require appraisals to properly allocate purchase price for tax purposes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-amber-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-forest-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <AlertTriangle className="w-5 h-5 text-forest-700" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                      Construction Impact
                    </h3>
                    <p className="text-charcoal-600 text-sm leading-relaxed">
                      Before/after appraisals for utility work, road construction, or development projects that may impact valuable trees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              Tree Appraisal Costs: What to Expect
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Appraisal fees vary based on complexity, number of trees, report requirements, and local market rates. Here's what you can expect to pay.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-forest-50 rounded-2xl p-8 border border-forest-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TreeDeciduous className="w-8 h-8 text-forest-700" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-2">
                  Basic Appraisal
                </h3>
                <p className="text-3xl font-mono font-bold text-forest-700">
                  $150 - $450
                </p>
              </div>
              <ul className="space-y-3 text-sm text-charcoal-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-forest-600" />
                  Single tree assessment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-forest-600" />
                  Standard CTLA report
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-forest-600" />
                  Insurance claim format
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-forest-600" />
                  1-2 week turnaround
                </li>
              </ul>
            </div>

            <div className="bg-earth-50 rounded-2xl p-8 border border-earth-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-earth-600" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-2">
                  Detailed Appraisal
                </h3>
                <p className="text-3xl font-mono font-bold text-earth-600">
                  $500 - $950
                </p>
              </div>
              <ul className="space-y-3 text-sm text-charcoal-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-earth-600" />
                  Multiple trees (2-10)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-earth-600" />
                  Comprehensive analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-earth-600" />
                  Site photos and mapping
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-earth-600" />
                  Legal proceeding ready
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-2">
                  Complex Appraisal
                </h3>
                <p className="text-3xl font-mono font-bold text-amber-600">
                  $1,000+
                </p>
              </div>
              <ul className="space-y-3 text-sm text-charcoal-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  Large property/forest
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  Expert witness testimony
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  Historical research
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  Multi-purpose reporting
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-cream rounded-2xl p-8 border border-charcoal-200">
            <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-6">
              Factors That Affect Appraisal Cost
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-charcoal-900 mb-4">Higher Cost Factors</h4>
                <ul className="space-y-2 text-charcoal-600">
                  <li>• Multiple trees or large properties</li>
                  <li>• Rare or unusual species requiring research</li>
                  <li>• Complex damage assessment</li>
                  <li>• Rush timeline (under 1 week)</li>
                  <li>• Court testimony requirement</li>
                  <li>• Remote or difficult access locations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-charcoal-900 mb-4">Cost-Saving Tips</h4>
                <ul className="space-y-2 text-charcoal-600">
                  <li>• Group multiple trees together</li>
                  <li>• Allow standard 1-2 week timeline</li>
                  <li>• Provide clear access to trees</li>
                  <li>• Have property survey available</li>
                  <li>• Get quotes from multiple appraisers</li>
                  <li>• Consider basic format if acceptable</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Finding an Appraiser */}
      <section className="py-20 md:py-28 bg-forest-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              Finding a Qualified Tree Appraiser
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Not all arborists can perform appraisals. Look for these specific qualifications to ensure your appraisal will be accepted by insurance companies and courts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 border border-charcoal-100">
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-6">
                Required Qualifications
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-600 mt-1" />
                  <div>
                    <p className="font-semibold text-charcoal-900">ISA Certified Arborist</p>
                    <p className="text-sm text-charcoal-600">Current certification with the International Society of Arboriculture</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-600 mt-1" />
                  <div>
                    <p className="font-semibold text-charcoal-900">CTLA Training</p>
                    <p className="text-sm text-charcoal-600">Specific training in Council of Tree and Landscape Appraisers methodology</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-600 mt-1" />
                  <div>
                    <p className="font-semibold text-charcoal-900">Local Experience</p>
                    <p className="text-sm text-charcoal-600">Familiarity with regional species, growing conditions, and market rates</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-600 mt-1" />
                  <div>
                    <p className="font-semibold text-charcoal-900">Professional Insurance</p>
                    <p className="text-sm text-charcoal-600">Errors and omissions coverage for appraisal work</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-charcoal-100">
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-6">
                How to Find Appraisers
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-earth-600 mt-1" />
                  <div>
                    <p className="font-semibold text-charcoal-900">ISA Directory</p>
                    <p className="text-sm text-charcoal-600">Search the official ISA website for certified arborists in your area</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-earth-600 mt-1" />
                  <div>
                    <p className="font-semibold text-charcoal-900">Professional Referrals</p>
                    <p className="text-sm text-charcoal-600">Ask tree care companies, landscape architects, or municipal arborists</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-earth-600 mt-1" />
                  <div>
                    <p className="font-semibold text-charcoal-900">Insurance Networks</p>
                    <p className="text-sm text-charcoal-600">Your insurance company may have preferred appraiser lists</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-earth-600 mt-1" />
                  <div>
                    <p className="font-semibold text-charcoal-900">State Associations</p>
                    <p className="text-sm text-charcoal-600">Contact your state arborist association for qualified members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200">
            <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-4">
              Questions to Ask Potential Appraisers
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-2 text-charcoal-600">
                <li>• What is your ISA certification number?</li>
                <li>• How many appraisals do you complete annually?</li>
                <li>• Do you follow CTLA methodology exactly?</li>
                <li>• Can you provide references from recent clients?</li>
              </ul>
              <ul className="space-y-2 text-charcoal-600">
                <li>• What is included in your appraisal fee?</li>
                <li>• How long will the report take to complete?</li>
                <li>• Are you available for expert witness testimony?</li>
                <li>• Do you carry professional liability insurance?</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              The Appraisal Process Timeline
            </h2>
            <p className="text-lg text-charcoal-600">
              Understanding the steps helps you plan timing and prepare for the appraiser's visit
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-forest-700 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                1
              </div>
              <div className="bg-forest-50 rounded-xl p-6 flex-1">
                <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                  Initial Contact & Quote (1-3 days)
                </h3>
                <p className="text-charcoal-600 text-sm leading-relaxed">
                  Provide tree details, purpose of appraisal, timeline needs. Appraiser provides quote and schedules site visit.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-forest-700 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                2
              </div>
              <div className="bg-earth-50 rounded-xl p-6 flex-1">
                <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                  Site Inspection (1-3 hours)
                </h3>
                <p className="text-charcoal-600 text-sm leading-relaxed">
                  Appraiser measures trees, assesses health and condition, takes photos, documents site conditions and locations.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-forest-700 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                3
              </div>
              <div className="bg-forest-50 rounded-xl p-6 flex-1">
                <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                  Research & Analysis (3-7 days)
                </h3>
                <p className="text-charcoal-600 text-sm leading-relaxed">
                  Species research, local market data gathering, CTLA calculations, condition factor determination, report preparation.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-forest-700 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                4
              </div>
              <div className="bg-earth-50 rounded-xl p-6 flex-1">
                <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                  Final Report Delivery (1-2 days)
                </h3>
                <p className="text-charcoal-600 text-sm leading-relaxed">
                  Comprehensive written report with methodology, calculations, photos, and appraiser certification. Digital and/or printed copies provided.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-cream rounded-2xl p-8 border border-charcoal-200">
            <div className="text-center">
              <Clock className="w-12 h-12 text-forest-700 mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-2">
                Total Timeline: 7-14 Days
              </h3>
              <p className="text-charcoal-600">
                Rush orders (3-5 days) available for additional fee. Complex cases or multiple properties may take longer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-forest-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
            Start With a Free Estimate
          </h2>
          <p className="text-xl text-forest-100 mb-10 leading-relaxed">
            Before investing in a professional appraisal, get a ballpark estimate of your tree's value with our free calculator. It uses the same CTLA methods as certified appraisers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/calculator">
              <Button size="lg" variant="secondary" rightIcon={<Calculator className="w-5 h-5" />}>
                Calculate Tree Value - Free
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-forest-300 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-forest-100 mb-1">CTLA Methodology</h4>
                <p className="text-forest-200 text-sm">Same calculation methods used by certified arborists</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-forest-300 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-forest-100 mb-1">Instant Results</h4>
                <p className="text-forest-200 text-sm">Get your estimate in under 2 minutes</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-forest-300 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-forest-100 mb-1">Know When You Need More</h4>
                <p className="text-forest-200 text-sm">We'll tell you when a professional appraisal is recommended</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-forest-600">
            <p className="text-forest-300 text-sm">
              Related Resources: 
              <Link href="/how-much-is-my-tree-worth" className="text-forest-100 hover:underline ml-2">Tree Value Guide</Link>
              <span className="mx-2">•</span>
              <Link href="/tree-replacement-cost" className="text-forest-100 hover:underline">Replacement Cost Calculator</Link>
            </p>
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
                TreeValue Pro
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
              &copy; {new Date().getFullYear()} TreeValue Pro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}