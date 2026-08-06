import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText, Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Interiocore - Premium Interior Design Studio",
  description:
    "Review the Terms & Conditions governing the use of Interiocore website, interior design consultation services, quotation estimates, and intellectual property rights.",
  alternates: {
    canonical: "https://interiocore.com/terms-and-conditions",
  },
  openGraph: {
    title: "Terms & Conditions | Interiocore",
    description:
      "Review the Terms & Conditions governing the use of Interiocore website and services.",
    url: "https://interiocore.com/terms-and-conditions",
    siteName: "Interiocore",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsAndConditionsPage() {
  const lastUpdated = "August 3, 2026";

  return (
    <div className="flex-1 bg-background text-foreground py-20 sm:py-28 px-6 sm:px-10 lg:px-12">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Back Link */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-accent hover:text-brand-accent-hover transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="border-b border-zinc-200 pb-8 space-y-4">
          <div className="flex items-center gap-3 text-brand-accent">
            <FileText className="w-6 h-6" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">Legal Terms</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-foreground">
            Terms & Conditions
          </h1>
          <p className="text-xs text-zinc-400 font-light">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-zinc-600 text-sm sm:text-base font-light leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground">
              1. Acceptance of Terms
            </h2>
            <p>
              By browsing or accessing the Interiocore website (<Link href="/" className="text-brand-accent underline">https://interiocore.com</Link>) or engaging our interior design studio for services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website or services.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground">
              2. Scope of Services
            </h2>
            <p>
              Interiocore provides bespoke interior design solutions, modular kitchen design and manufacturing, luxury wardrobe installations, TV units, bedroom aesthetics, living room layouts, and full home interior consultations in Jharsuguda, Odisha, and surrounding regions.
            </p>
            <p>
              Information presented on this website is for informational and promotional purposes. Final project scopes, deliverables, timelines, and payment terms are governed by individual client contracts signed prior to execution.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground">
              3. Intellectual Property Rights
            </h2>
            <p>
              All materials, design renders, photographs, graphics, text, logos, branding, and code on this website are the exclusive intellectual property of Interiocore.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You may not copy, reproduce, republish, distribute, or modify any portfolio images or branding assets without prior written permission from Interiocore.</li>
              <li>Unauthorized commercial use of our design concepts or photography is strictly prohibited.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground">
              4. Consultations, Estimates & Quotations
            </h2>
            <p>
              Free design consultations and price estimates provided through WhatsApp, call, or email are tentative and subject to site measurement, material customization, and final technical verification. Quotations are valid for the timeframe specified in official project estimates.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground">
              5. Website Use & External Links
            </h2>
            <p>
              Our website may contain links to external channels (e.g., WhatsApp, Instagram, Google Maps). Interiocore is not responsible for the content, privacy policies, or practices of third-party platforms. You interact with external links at your own risk.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground">
              6. Limitation of Liability
            </h2>
            <p>
              Interiocore makes reasonable efforts to ensure accuracy on this website but does not warrant that website functions will be uninterrupted or error-free. Under no circumstances shall Interiocore be liable for indirect, incidental, or consequential damages arising from the use of this website.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground">
              7. Governing Law & Jurisdiction
            </h2>
            <p>
              These Terms and Conditions are governed by and construed in accordance with the laws of India. Any legal disputes or claims arising hereunder shall be subject to the exclusive jurisdiction of the courts in Jharsuguda, Odisha.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground">
              8. Contact Us
            </h2>
            <p>
              If you have any questions or clarifications regarding these Terms and Conditions, please contact us:
            </p>

            <div className="bg-zinc-50 border border-zinc-200 p-6 rounded-none space-y-3 font-normal text-sm">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-brand-accent" />
                <span>Interiocore Studio, Jharsuguda, Odisha, 768201, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-accent" />
                <a href="tel:+919776991699" className="hover:text-brand-accent transition-colors">+91 97769 91699</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-accent" />
                <a href="mailto:info@interiocore.com" className="hover:text-brand-accent transition-colors">info@interiocore.com</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
