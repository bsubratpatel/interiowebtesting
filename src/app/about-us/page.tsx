import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import AboutSection from "@/components/AboutSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export const metadata: Metadata = {
  title: "About Interiocore | Top Interior Design Studio in Jharsuguda",
  description:
    "Learn about Interiocore — Jharsuguda's leading interior design studio specializing in modular kitchens, wardrobes, living rooms, and turnkey home interiors.",
  alternates: {
    canonical: "https://interiocore.com/about-us",
  },
};

export default function AboutUsPage() {
  return (
    <div className="bg-background text-foreground min-h-screen pt-24 sm:pt-28">
      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { name: "About Us", url: "/about-us" },
        ]}
      />

      <main>
        {/* Main About Section Component */}
        <AboutSection />

        {/* Why Choose Us Section */}
        <div id="why-choose-us">
          <WhyChooseUsSection />
        </div>

        {/* Design Process Section */}
        <ProcessSection />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* CTA Block */}
        <section className="py-20 px-8 bg-zinc-900 text-white text-center flex flex-col items-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight">
            Start Your Home Journey with Interiocore
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl font-light">
            {/* TODO: Human Review Needed */}
            Speak with our founding design team in Jharsuguda for personalized advice, 3D renderings, and transparent project estimates.
          </p>
          <Link
            href="/contact"
            className="bg-brand-accent hover:bg-brand-accent-hover text-white transition-colors px-10 h-14 text-xs font-bold tracking-[0.15em] uppercase flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Book Free Consultation
          </Link>
        </section>
      </main>
    </div>
  );
}
