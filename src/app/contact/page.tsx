import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact Interiocore | Book Free Design Consultation in Jharsuguda",
  description:
    "Get in touch with Interiocore — Jharsuguda's top interior design studio. Call +91 97769 91699 or fill out our form for a free 3D design consultation.",
  alternates: {
    canonical: "https://interiocore.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground min-h-screen pt-24 sm:pt-28">
      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { name: "Contact Us", url: "/contact" },
        ]}
      />

      <main className="max-w-[1600px] mx-auto px-6 lg:px-12 py-12">
        <div className="mb-8">
          <span className="text-xs font-bold text-brand-accent uppercase tracking-[0.2em] mb-4 block">
            Start Your Project
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tighter text-foreground leading-[1]">
            Contact Interiocore Studio
          </h1>
          <p className="text-zinc-500 font-light text-base max-w-2xl mt-4 leading-relaxed">
            Ready to design your home? Reach out to schedule a free 3D consultation, visit our studio, or request a quote in Jharsuguda.
          </p>
        </div>

        {/* Full Contact Form & Info Component */}
        <ContactSection />
      </main>
    </div>
  );
}
