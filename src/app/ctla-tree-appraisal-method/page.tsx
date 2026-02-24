import Link from "next/link";
import { TreeDeciduous, Calculator, ArrowRight, BookOpen, CheckCircle, AlertTriangle, DollarSign, Ruler } from "lucide-react";
import { Button } from "@/components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CTLA Tree Appraisal Method Explained | Trunk Formula Method Guide 2025",
  description: "Complete guide to the CTLA Trunk Formula Method for tree appraisal. Learn how certified arborists calculate tree replacement value, the 4 key factors, and when you need one.",
  keywords: "CTLA tree appraisal, trunk formula method, tree appraisal method, how to appraise a tree, CTLA formula, tree replacement value calculation",
  openGraph: {
    title: "CTLA Trunk Formula Method: How Professional Tree Appraisal Works",
    description: "The industry-standard method for calculating what a tree is worth. Used by arborists, insurers, and courts across North America.",
    type: "article",
  },
};

export default function CTLAMethodPage() {
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
              <BookOpen className="w-4 h-4" />
              Technical Reference
            </div>

            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 leading-tight mb-6">
              The CTLA Trunk Formula Method: How Tree Appraisal Actually Works
            </h1>

            <p className="text-lg md:text-xl text-charcoal-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              The Council of Tree and Landscape Appraisers (CTLA) developed the industry standard for tree valuation. Here's exactly how the formula works, why it's trusted by courts and insurers, and how to use it.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator">
                <Button size="lg" rightIcon={<Calculator className="w-5 h-5" />}>
                  Try the CTLA Calculator Free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is CTLA */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-6">
              What Is the CTLA Method?
            </h2>
            <p className="text-lg text-charcoal-600 leading-relaxed mb-6">
              The <strong>CTLA Trunk Formula Method</strong> is the most widely accepted approach for appraising landscape trees in North America. Published in the <em>Guide for Plant Appraisal</em> (now in its 10th edition), it's used by ISA-certified arborists, insurance adjusters, attorneys, and courts to determine the monetary value of trees.
            </p>
            <p className="text-lg text-charcoal-600 leading-relaxed mb-6">
              The core idea is simple: <strong>what would it cost to replace this tree?</strong> Since you can't buy a 60-year-old oak at a nursery, the formula calculates value by comparing the tree's trunk area to the largest commercially available transplant size, then applying adjustments for species quality, condition, and location.
            </p>

            <div className="bg-forest-50 rounded-2xl p-8 border border-forest-200 mt-12">
              <h3 className="font-heading text-xl font-semibold text-charcoal-900 mb-4">The Formula</h3>
              <div className="bg-white rounded-xl p-6 mb-6">
                <p className="text-center font-mono text-lg md:text-xl text-charcoal-900">
                  <strong>Appraised Value</strong> = Basic Tree Cost &times; Species Rating &times; Condition Rating &times; Location Rating
                </p>
              </div>
              <p className="text-charcoal-600 leading-relaxed">
                Where <strong>Basic Tree Cost</strong> = (Trunk Area of Subject Tree / Trunk Area of Largest Available Transplant) &times; Cost of Largest Available Transplant
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Factors */}
      <section className="py-20 md:py-28 bg-forest-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              The 4 Factors That Determine Tree Value
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-charcoal-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center">
                  <Ruler className="w-7 h-7 text-forest-700" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-charcoal-900">1. Trunk Area (Size)</h3>
                  <p className="text-sm text-charcoal-500">The dominant factor</p>
                </div>
              </div>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Measured at 4.5 feet above ground (DBH - Diameter at Breast Height). The cross-sectional area is calculated from the circumference. Since area scales with the square of diameter, larger trees are exponentially more valuable.
              </p>
              <div className="bg-cream rounded-xl p-4">
                <p className="text-sm text-charcoal-600">
                  <strong>Example:</strong> A 30-inch trunk has 4x the cross-sectional area of a 15-inch trunk, making it roughly 4x more costly to replace.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-charcoal-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-earth-100 rounded-xl flex items-center justify-center">
                  <TreeDeciduous className="w-7 h-7 text-earth-600" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-charcoal-900">2. Species Rating</h3>
                  <p className="text-sm text-charcoal-500">20-100% multiplier</p>
                </div>
              </div>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Each species gets a rating based on desirability, longevity, maintenance requirements, pest resistance, and regional adaptation. Ratings are published by regional ISA chapters.
              </p>
              <div className="bg-cream rounded-xl p-4">
                <p className="text-sm text-charcoal-600">
                  <strong>High (80-100%):</strong> White Oak, Sugar Maple, Bald Cypress<br />
                  <strong>Medium (50-70%):</strong> Red Maple, Loblolly Pine, River Birch<br />
                  <strong>Low (20-40%):</strong> Silver Maple, Bradford Pear, Tree of Heaven
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-charcoal-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-forest-700" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-charcoal-900">3. Condition Rating</h3>
                  <p className="text-sm text-charcoal-500">0-100% multiplier</p>
                </div>
              </div>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                An assessment of the tree's health, structural integrity, and overall vitality. Evaluates root health, trunk soundness, scaffold branch structure, canopy density, and evidence of disease or pest damage.
              </p>
              <div className="bg-cream rounded-xl p-4">
                <p className="text-sm text-charcoal-600">
                  <strong>Excellent (90-100%):</strong> No visible defects, full canopy<br />
                  <strong>Good (70-89%):</strong> Minor issues, overall healthy<br />
                  <strong>Fair (50-69%):</strong> Some dead branches, moderate decline<br />
                  <strong>Poor (0-49%):</strong> Major structural defects, disease, hazardous
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-charcoal-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-earth-100 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-7 h-7 text-earth-600" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-charcoal-900">4. Location Rating</h3>
                  <p className="text-sm text-charcoal-500">60-100% multiplier</p>
                </div>
              </div>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Evaluates the tree's functional and aesthetic contribution based on where it's planted. Considers site characteristics, visibility, landscape contribution, and placement relative to structures.
              </p>
              <div className="bg-cream rounded-xl p-4">
                <p className="text-sm text-charcoal-600">
                  <strong>Premium (90-100%):</strong> Front yard focal point, framing the home<br />
                  <strong>Good (75-89%):</strong> Side yard providing shade, visible from street<br />
                  <strong>Average (60-74%):</strong> Backyard, partially obstructed, less visible<br />
                  <strong>Reduced (&lt;60%):</strong> Crowded, power line conflicts, poor placement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Worked Example */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-8">
              Worked Example: Appraising a White Oak
            </h2>

            <div className="bg-cream rounded-2xl p-8 border border-charcoal-100 mb-8">
              <p className="text-charcoal-600 leading-relaxed mb-4">
                <strong>Subject tree:</strong> White Oak, 28-inch DBH, good health, front yard of a well-maintained home.
              </p>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                <strong>Largest available transplant:</strong> 4-inch caliper White Oak, nursery cost $800 (including installation).
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="bg-forest-50 rounded-xl p-6 border border-forest-200">
                <p className="font-mono text-charcoal-900">
                  <strong>Step 1:</strong> Trunk area of subject = &pi; &times; (14)&sup2; = 615.75 sq in
                </p>
              </div>
              <div className="bg-forest-50 rounded-xl p-6 border border-forest-200">
                <p className="font-mono text-charcoal-900">
                  <strong>Step 2:</strong> Trunk area of transplant = &pi; &times; (2)&sup2; = 12.57 sq in
                </p>
              </div>
              <div className="bg-forest-50 rounded-xl p-6 border border-forest-200">
                <p className="font-mono text-charcoal-900">
                  <strong>Step 3:</strong> Basic tree cost = (615.75 / 12.57) &times; $800 = <strong>$39,188</strong>
                </p>
              </div>
              <div className="bg-forest-50 rounded-xl p-6 border border-forest-200">
                <p className="font-mono text-charcoal-900">
                  <strong>Step 4:</strong> Apply ratings: $39,188 &times; 90% (species) &times; 80% (condition) &times; 90% (location)
                </p>
              </div>
              <div className="bg-earth-100 rounded-xl p-6 border border-earth-300">
                <p className="font-mono text-xl text-charcoal-900 text-center">
                  <strong>Appraised Value = $25,393</strong>
                </p>
              </div>
            </div>

            <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-heading text-lg font-semibold text-charcoal-900 mb-2">
                    Important Note
                  </h4>
                  <p className="text-charcoal-600 leading-relaxed">
                    This is a simplified example. Actual CTLA appraisals require ISA certification, regional species ratings, current nursery pricing data, and professional judgment. Our calculator uses the same methodology to give you an excellent estimate, but official appraisals for legal or insurance purposes should be performed by a certified arborist.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When You Need One */}
      <section className="py-20 md:py-28 bg-forest-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-4">
              When Do You Need a CTLA Appraisal?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Insurance Claims",
                description: "After storm damage, fire, or vandalism. Required to claim the replacement value of lost trees beyond simple removal costs.",
              },
              {
                title: "Legal Disputes",
                description: "Neighbor disputes, construction damage, utility company tree removal. Courts routinely accept CTLA appraisals as evidence.",
              },
              {
                title: "Property Tax Disputes",
                description: "If trees were damaged and your property value decreased. A before/after appraisal can support a tax reduction appeal.",
              },
              {
                title: "Eminent Domain / Condemnation",
                description: "When government takes your property or easements. You're entitled to compensation for landscape value including trees.",
              },
              {
                title: "Real Estate Transactions",
                description: "For estate settlements, divorce proceedings, or when landscape value is a significant factor in a property deal.",
              },
              {
                title: "Pre-Construction Documentation",
                description: "Before construction near valuable trees. Establishes baseline value in case trees are damaged during the project.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-charcoal-100">
                <h3 className="font-heading text-lg font-semibold text-charcoal-900 mb-3">{item.title}</h3>
                <p className="text-sm text-charcoal-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal-900 mb-6">
            Try the CTLA Method on Your Trees
          </h2>
          <p className="text-lg text-charcoal-600 mb-10 max-w-2xl mx-auto">
            Our free calculator uses the CTLA Trunk Formula Method to estimate your tree's replacement value. Get a professional-grade estimate in under 2 minutes.
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
