import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Interiocore Jharsuguda",
  description:
    "Find answers to common questions about modular kitchen prices, design timelines, consultation fees, and turnkey interior execution in Jharsuguda.",
  alternates: {
    canonical: "https://interiocore.com/faq",
  },
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://interiocore.com/faq#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is the best interior designer in Jharsuguda?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Interiocore is widely recognized as a top-rated interior design studio in Jharsuguda, Odisha. We specialize in luxury modular kitchens, bespoke wardrobes, living room designs, and full home turnkey interiors with over 45+ completed projects.",
        },
      },
      {
        "@type": "Question",
        "name": "How much does a modular kitchen cost in Jharsuguda?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Modular kitchen prices in Jharsuguda at Interiocore start from ₹1.5 Lakh onwards depending on layout, material selection (laminates, acrylic, veneer), hardware options, and space dimensions. We offer free design consultations and transparent pricing.",
        },
      },
      {
        "@type": "Question",
        "name": "Do you provide interior design services outside Jharsuguda?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, in addition to Jharsuguda town, Interiocore serves surrounding regions across Odisha including Brajarajnagar, Sambalpur, and neighboring cities.",
        },
      },
      {
        "@type": "Question",
        "name": "How long does a full home interior project take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A typical full home interior project takes between 30 to 45 days from 3D design approval to factory fabrication and final site installation.",
        },
      },
      {
        "@type": "Question",
        "name": "Do you offer a free consultation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Interiocore offers 100% free initial design consultations via phone, WhatsApp (+91 97769 91699), or in-person at our studio in Jharsuguda.",
        },
      },
    ],
  };

  return (
    <div className="bg-background text-foreground min-h-screen pt-24 sm:pt-28">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { name: "FAQ", url: "/faq" },
        ]}
      />

      <main className="max-w-[1600px] mx-auto px-6 lg:px-12 py-12">
        <div className="mb-8">
          <span className="text-xs font-bold text-brand-accent uppercase tracking-[0.2em] mb-4 block">
            Got Questions?
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tighter text-foreground leading-[1]">
            Frequently Asked Questions
          </h1>
          <p className="text-zinc-500 font-light text-base max-w-2xl mt-4 leading-relaxed">
            Everything you need to know about our design process, pricing, material warranties, and site installation in Jharsuguda.
          </p>
        </div>

        {/* FAQ Section Component */}
        <FAQSection />

        {/* CTA Block */}
        <section className="mt-20 py-16 px-8 bg-zinc-900 text-white text-center flex flex-col items-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight">
            Have a Question Not Listed Here?
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl font-light">
            {/* TODO: Human Review Needed */}
            Reach out directly to our team via phone, WhatsApp, or email and we will be happy to assist you.
          </p>
          <Link
            href="/contact"
            className="bg-brand-accent hover:bg-brand-accent-hover text-white transition-colors px-10 h-14 text-xs font-bold tracking-[0.15em] uppercase flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Contact Our Team
          </Link>
        </section>
      </main>
    </div>
  );
}
