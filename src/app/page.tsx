import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { getGalleryData, getMaterialsData } from "@/lib/dataFetcher";

import LazySection from "@/components/LazySection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ServicesPreview from "@/components/ServicesPreview";
import CTASection from "@/components/CTASection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { LazyGallery, LazyMaterials } from "@/components/LazyClientComponents";

export default function Home() {
  // Pre-load data on the server side
  const galleryData = getGalleryData();
  const materialsData = getMaterialsData();

  return (
    <div className="bg-background text-foreground overflow-hidden">
      {/* 1. Hero Section */}
      <section id="home" className="relative w-full bg-background pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 border-b border-zinc-200/60">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Column: Headline, Copy & CTAs */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8">
              {/* Location line */}
              <div>
                <span className="text-xs sm:text-sm font-bold text-brand-accent uppercase tracking-[0.18em] block">
                  JHARSUGUDA | SAMBALPUR | ROURKELA | SUNDARGARH | BARGARH
                </span>
              </div>

              {/* Main Headline */}
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-foreground leading-[1.08]">
                  Modular Kitchen in Jharsuguda Designed for Your Home
                </h1>
              </div>

              {/* Body Text */}
              <div>
                <p className="text-base sm:text-lg text-zinc-600 font-light leading-relaxed max-w-xl">
                  Looking for a modular kitchen in Jharsuguda? We design beautiful and practical kitchens with smart storage, useful layouts, and premium finishes that make everyday cooking easier.
                </p>
              </div>

              {/* Outcome Line */}
              <div className="border-l-2 border-brand-accent pl-4 py-1.5 bg-brand-accent/5 max-w-xl">
                <p className="text-sm sm:text-base font-semibold text-foreground tracking-wide">
                  More space. Better storage. Easier cooking.
                </p>
              </div>

              {/* Primary & Secondary CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="bg-brand-accent hover:bg-brand-accent-hover text-white transition-all hover:scale-[1.02] shadow-md rounded-none h-14 sm:h-16 px-8 sm:px-10 text-xs sm:text-sm font-bold tracking-[0.15em] uppercase flex items-center justify-center gap-3 active:scale-95 duration-200 cursor-pointer"
                >
                  GET A FREE DESIGN CONSULTATION
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/919776991699?text=Hi%20Interiocore!%20I'd%20like%20to%20get%20a%20free%20kitchen%20design%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border border-zinc-300 hover:border-brand-accent text-foreground hover:text-brand-accent transition-colors rounded-none h-14 sm:h-16 px-6 text-xs sm:text-sm font-bold tracking-[0.15em] uppercase flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Right Column: Premium Kitchen Visual */}
            <div className="lg:col-span-5 relative w-full">
              <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[560px] overflow-hidden border border-zinc-200/80 shadow-lg bg-zinc-100 group">
                <Image
                  src="/images/kitchen renders/kitchen (1).webp"
                  alt="Premium Modular Kitchen Design by Interiocore"
                  fill
                  priority
                  fetchPriority="high"
                  decoding="async"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Curated Spaces (Gallery Preview) */}
      <section className="relative">
        <LazyGallery initialData={galleryData} />
        <div className="py-8 bg-zinc-50 border-b border-zinc-200 text-center">
          <Link
            href="/design-gallery"
            className="inline-flex items-center gap-2 bg-brand-secondary text-white hover:bg-brand-accent transition-colors px-8 py-3.5 text-xs font-bold uppercase tracking-wider"
          >
            Explore Full Design Gallery Portfolio
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 3. Why Choose Us Section */}
      <LazySection height="450px" ids={["about-why"]}>
        <WhyChooseUsSection />
      </LazySection>

      {/* 4. Our Services Preview */}
      <ServicesPreview />

      {/* 5. CTA Section */}
      <LazySection height="300px">
        <CTASection />
      </LazySection>

      {/* 6. Our Process */}
      <LazySection height="600px" ids={["process"]}>
        <ProcessSection />
      </LazySection>

      {/* 7. Material Palette Preview */}
      <section className="relative">
        <LazyMaterials initialData={materialsData} />
        <div className="py-8 bg-zinc-50 border-b border-zinc-200 text-center">
          <Link
            href="/materials-finishes"
            className="inline-flex items-center gap-2 bg-brand-secondary text-white hover:bg-brand-accent transition-colors px-8 py-3.5 text-xs font-bold uppercase tracking-wider"
          >
            Discover All Materials & Finishes
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 8. Testimonials */}
      <LazySection height="400px" ids={["testimonials"]}>
        <TestimonialsSection />
      </LazySection>

      {/* 9. FAQs Preview Banner */}
      <section className="py-16 bg-zinc-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight">
            Have Questions About Prices & Timelines?
          </h2>
          <p className="text-zinc-400 text-sm font-light leading-relaxed">
            Read our answers regarding modular kitchen costs, warranty terms, and 30-45 day project timelines in Jharsuguda.
          </p>
          <div className="pt-2">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 bg-brand-accent text-white hover:bg-brand-accent-hover transition-colors px-8 h-12 text-xs font-bold uppercase tracking-widest"
            >
              View Frequently Asked Questions
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Start Your Project CTA */}
      <section className="py-20 bg-zinc-50 border-t border-zinc-200 text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <span className="text-xs font-bold text-brand-accent uppercase tracking-[0.2em] block">
            Jharsuguda Interior Design Studio
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-foreground">
            Ready to Build Your Dream Interior?
          </h2>
          <p className="text-zinc-600 text-base font-light leading-relaxed">
            Get a 100% free consultation, site measurement, and transparent 3D estimate today.
          </p>
          <div className="pt-4 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-brand-accent text-white hover:bg-brand-accent-hover transition-colors px-10 h-14 text-xs font-bold tracking-[0.15em] uppercase flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Book Free Consultation
            </Link>
            <Link
              href="/about-us"
              className="bg-white text-zinc-900 border border-zinc-900 hover:bg-zinc-100 transition-colors px-8 h-14 text-xs font-bold tracking-[0.15em] uppercase flex items-center justify-center gap-2"
            >
              About Interiocore
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
