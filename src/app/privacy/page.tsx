import type { Metadata } from "next";
import Link from "next/link";
import { TreeDeciduous, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Arbor Value privacy policy - how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
        </div>

        <p className="text-charcoal-500 mb-8">Last updated: January 29, 2025</p>

        <div className="prose prose-charcoal max-w-none space-y-8">
          <section>
            <h2 className="font-heading text-xl font-semibold text-charcoal-900 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-charcoal-600 leading-relaxed mb-4">
              When you use Arbor Value, we collect the following information:
            </p>
            <ul className="list-disc pl-6 text-charcoal-600 space-y-2">
              <li><strong>Email address:</strong> When you request a tree valuation report</li>
              <li><strong>Tree information:</strong> Species, dimensions, location, and health data you provide</li>
              <li><strong>Photos:</strong> Tree photos you upload for species identification</li>
              <li><strong>Usage data:</strong> How you interact with our calculator and website</li>
              <li><strong>Device information:</strong> Browser type, IP address, and device identifiers</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-charcoal-900 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-charcoal-600 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-charcoal-600 space-y-2">
              <li>Calculate and deliver your tree valuation report</li>
              <li>Send your Tree Wealth Report via email</li>
              <li>Improve our valuation algorithms and services</li>
              <li>Prevent fraud and abuse of our services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-charcoal-900 mb-4">
              3. Information Sharing
            </h2>
            <p className="text-charcoal-600 leading-relaxed mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-charcoal-600 space-y-2">
              <li><strong>Service providers:</strong> Email delivery (Resend), hosting (Vercel), database (Supabase)</li>
              <li><strong>Partner arborists:</strong> Only if you explicitly request a consultation or quote</li>
              <li><strong>Legal requirements:</strong> When required by law or to protect our rights</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-charcoal-900 mb-4">
              4. Cookies and Tracking
            </h2>
            <p className="text-charcoal-600 leading-relaxed mb-4">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc pl-6 text-charcoal-600 space-y-2">
              <li><strong>Essential cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics cookies:</strong> Help us understand how visitors use our site</li>
              <li><strong>Preference cookies:</strong> Remember your settings and choices</li>
            </ul>
            <p className="text-charcoal-600 leading-relaxed mt-4">
              You can control cookies through your browser settings. Disabling certain cookies may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-charcoal-900 mb-4">
              5. Data Retention
            </h2>
            <p className="text-charcoal-600 leading-relaxed">
              We retain your tree valuation reports for 90 days, after which they are automatically deleted.
              Your email address is retained for marketing communications until you unsubscribe.
              You can request deletion of your data at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-charcoal-900 mb-4">
              6. Your Rights
            </h2>
            <p className="text-charcoal-600 leading-relaxed mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc pl-6 text-charcoal-600 space-y-2">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data</li>
              <li><strong>Portability:</strong> Request your data in a portable format</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
            </ul>
            <p className="text-charcoal-600 leading-relaxed mt-4">
              To exercise these rights, contact us at privacy@treevalue.pro.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-charcoal-900 mb-4">
              7. Data Security
            </h2>
            <p className="text-charcoal-600 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal data,
              including encryption in transit and at rest, access controls, and regular security assessments.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-charcoal-900 mb-4">
              8. Children&apos;s Privacy
            </h2>
            <p className="text-charcoal-600 leading-relaxed">
              Arbor Value is not intended for children under 13. We do not knowingly collect
              personal information from children under 13. If you believe we have collected such
              information, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-charcoal-900 mb-4">
              9. Changes to This Policy
            </h2>
            <p className="text-charcoal-600 leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of any material
              changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-charcoal-900 mb-4">
              10. Contact Us
            </h2>
            <p className="text-charcoal-600 leading-relaxed">
              If you have questions about this privacy policy or our data practices, please contact us at:
            </p>
            <p className="text-charcoal-600 mt-2">
              <strong>Email:</strong> privacy@treevalue.pro
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-charcoal-900 text-charcoal-300">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Arbor Value. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
