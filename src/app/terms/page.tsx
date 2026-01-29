import type { Metadata } from "next";
import Link from "next/link";
import { TreeDeciduous, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "TreeValue Pro terms of service - rules and guidelines for using our tree valuation service.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-white border-b border-charcoal-100">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-charcoal-600 hover:text-charcoal-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex items-center gap-3 mb-8">
          <TreeDeciduous className="w-8 h-8 text-forest-600" />
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-charcoal-900">
            Terms of Service
          </h1>
        </div>

        <p className="text-charcoal-500 mb-8">Last updated: January 29, 2025</p>

        <div className="prose prose-charcoal max-w-none space-y-8">
          <section>
            <h2 className="font-heading text-xl font-semibold text-charcoal-900 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-charcoal-600 leading-relaxed">
              By accessing or using TreeValue Pro (&quot;the Service&quot;), you agree to be bound by these
              Terms of Service. If you do not agree to these terms, please do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-charcoal-900 mb-4">
              2. Description of Service
            </h2>
            <p className="text-charcoal-600 leading-relaxed">
              TreeValue Pro provides an online tree valuation calculator that estimates the replacement
              value and ecosystem benefits of trees based on information you provide. The Service uses
              industry-standard methodologies including the CTLA Trunk Formula Method and i-Tree
              ecosystem valuations.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-charcoal-900 mb-4">
              3. Valuation Disclaimer
            </h2>
            <p className="text-charcoal-600 leading-relaxed mb-4">
              <strong>IMPORTANT:</strong> The valuations provided by TreeValue Pro are estimates for
              informational purposes only. They are NOT:
            </p>
            <ul className="list-disc pl-6 text-charcoal-600 space-y-2">
              <li>Certified appraisals or official valuations</li>
              <li>Suitable for insurance claims without professional verification</li>
              <li>Legal assessments for property disputes or litigation</li>
              <li>Guarantees of actual tree value or replacement cost</li>
            </ul>
            <p className="text-charcoal-600 leading-relaxed mt-4">
              For official appraisals, we recommend consulting a certified arborist or tree appraiser.
              Actual tree values may vary significantly based on local market conditions, tree health
              factors not captured by our calculator, and other variables.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-charcoal-900 mb-4">
              4. User Responsibilities
            </h2>
            <p className="text-charcoal-600 leading-relaxed mb-4">
              When using the Service, you agree to:
            </p>
            <ul className="list-disc pl-6 text-charcoal-600 space-y-2">
              <li>Provide accurate information about your trees</li>
              <li>Use the Service only for lawful purposes</li>
              <li>Not attempt to manipulate or abuse the valuation system</li>
              <li>Not use automated systems to access the Service without permission</li>
              <li>Not interfere with the proper functioning of the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-charcoal-900 mb-4">
              5. Intellectual Property
            </h2>
            <p className="text-charcoal-600 leading-relaxed">
              The Service, including its design, features, and content, is owned by TreeValue Pro
              and protected by copyright, trademark, and other intellectual property laws. You may
              not copy, modify, distribute, or create derivative works from the Service without
              our express written permission.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-charcoal-900 mb-4">
              6. User Content
            </h2>
            <p className="text-charcoal-600 leading-relaxed">
              By submitting photos or other content to the Service, you grant us a non-exclusive,
              royalty-free license to use, store, and process that content for the purpose of
              providing the Service. You retain ownership of your content and can request its
              deletion at any time.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-charcoal-900 mb-4">
              7. Third-Party Services
            </h2>
            <p className="text-charcoal-600 leading-relaxed">
              The Service may include links to third-party websites or services, including partner
              arborists and tree care providers. We are not responsible for the content, policies,
              or practices of these third parties. Your interactions with them are governed by
              their own terms and privacy policies.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-charcoal-900 mb-4">
              8. Limitation of Liability
            </h2>
            <p className="text-charcoal-600 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, TREEVALUE PRO AND ITS AFFILIATES SHALL NOT
              BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
              INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR USE, ARISING FROM YOUR USE
              OF THE SERVICE OR RELIANCE ON ANY VALUATIONS PROVIDED.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-charcoal-900 mb-4">
              9. Disclaimer of Warranties
            </h2>
            <p className="text-charcoal-600 leading-relaxed">
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND,
              EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED,
              ERROR-FREE, OR THAT VALUATIONS WILL BE ACCURATE OR COMPLETE.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-charcoal-900 mb-4">
              10. Indemnification
            </h2>
            <p className="text-charcoal-600 leading-relaxed">
              You agree to indemnify and hold harmless TreeValue Pro, its officers, directors,
              employees, and agents from any claims, damages, losses, or expenses arising from
              your use of the Service or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-charcoal-900 mb-4">
              11. Modifications to Terms
            </h2>
            <p className="text-charcoal-600 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify users of
              material changes by posting the updated Terms on this page. Your continued use of
              the Service after such changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-charcoal-900 mb-4">
              12. Termination
            </h2>
            <p className="text-charcoal-600 leading-relaxed">
              We may terminate or suspend your access to the Service at any time, without prior
              notice, for conduct that we believe violates these Terms or is harmful to other
              users, us, or third parties.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-charcoal-900 mb-4">
              13. Governing Law
            </h2>
            <p className="text-charcoal-600 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the
              United States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-charcoal-900 mb-4">
              14. Contact Us
            </h2>
            <p className="text-charcoal-600 leading-relaxed">
              If you have questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-charcoal-600 mt-2">
              <strong>Email:</strong> legal@treevalue.pro
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-charcoal-900 text-charcoal-300">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} TreeValue Pro. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
