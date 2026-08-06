import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Interiocore - Premium Interior Design Studio",
  description:
    "Read the Privacy Policy for Interiocore. Learn how we collect, use, and protect your personal information during interior design consultations and website usage.",
  alternates: {
    canonical: "https://interiocore.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Interiocore",
    description:
      "Read the Privacy Policy for Interiocore. Learn how we collect, use, and protect your personal information.",
    url: "https://interiocore.com/privacy-policy",
    siteName: "Interiocore",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
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
            <ShieldCheck className="w-6 h-6" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">Legal & Transparency</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-foreground">
            Privacy Policy
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
              1. Introduction
            </h2>
            <p>
              Interiocore (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy governs your use of our website (<Link href="/" className="text-brand-accent underline">https://interiocore.com</Link>) and our interior design consultation services.
            </p>
            <p>
              By accessing our website, inquiring about modular kitchens, wardrobes, living room designs, or scheduling a consultation, you consent to the practices described in this policy.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground">
              2. Information We Collect
            </h2>
            <p>We may collect personal and non-personal information in the following ways:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="font-semibold text-foreground">Directly Provided Information:</strong> When you contact us via WhatsApp, telephone, email, or inquiry buttons, you may provide your name, phone number, email address, physical location, property details, and project requirements.
              </li>
              <li>
                <strong className="font-semibold text-foreground">Automated Analytics & Usage Data:</strong> We use Google Analytics to collect aggregated, non-personally identifiable information such as browser type, device details, IP address, page views, and session duration to improve user experience.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground">
              3. How We Use Your Information
            </h2>
            <p>The information collected is strictly used to deliver high-quality interior design solutions:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To schedule and provide free interior design consultations.</li>
              <li>To prepare customized cost estimates, 3D renders, and material proposals.</li>
              <li>To communicate project status, timeline updates, and customer support.</li>
              <li>To analyze website traffic and optimize site performance.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground">
              4. Data Sharing & Third Parties
            </h2>
            <p>
              <strong className="font-semibold text-foreground">We do not sell, rent, or trade your personal information.</strong> We only share information with third parties in the following limited circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>With trusted logistical or execution partners working directly on your project under confidentiality.</li>
              <li>When required by law, regulation, court order, or governmental request.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground">
              5. Cookies & Tracking Technologies
            </h2>
            <p>
              Our website uses essential cookies and performance cookies (via Google Analytics) to maintain session integrity and analyze site usage patterns. You can disable cookies in your browser settings if you prefer not to share anonymous usage statistics.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground">
              6. Data Security & Storage
            </h2>
            <p>
              We implement industry-standard administrative, physical, and technical safeguards to protect your personal data from unauthorized access, alteration, or disclosure. However, no internet transmission is 100% secure, and you share information at your own discretion.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground">
              7. Your Rights & Contact Information
            </h2>
            <p>
              You have the right to request access to, correction of, or deletion of your personal contact records stored with us. For privacy inquiries or data requests, please reach out to our studio:
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
