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
      <section id="home" className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden py-12 md:py-16">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/kitchen renders/kitchen (1).webp"
            alt="Interiocore Luxury Kitchen Design in Jharsuguda"
            fill
            className="object-cover scale-105"
            sizes="100vw"
            priority
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center pt-36 pb-12 md:pt-40 md:pb-16">
          <div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[1] uppercase drop-shadow-2xl mb-6 sm:mb-8">
              Best Interior Designer <br className="hidden sm:inline" /> in Jharsuguda, India
            </h1>
          </div>

          <div>
            <p className="text-sm sm:text-base md:text-lg font-light tracking-wide max-w-2xl mx-auto text-white/90 leading-relaxed mb-6 sm:mb-8">
              Premium modular kitchens, wardrobes, TV units, and complete home interiors thoughtfully designed to make your home beautiful, functional, and built to last.
            </p>
          </div>

          <div className="text-[11px] sm:text-xs font-bold tracking-wider text-white/80 text-center uppercase mb-8 sm:mb-10">
            45+ Happy Families • Premium Materials • End-to-End Service
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto justify-center">
            <a
              href="https://wa.me/919776991699?text=Hi%20Interiocore!%20I'd%20like%20to%20learn%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white hover:bg-[#20ba5a] border border-[#25D366] hover:border-[#20ba5a] transition-all hover:scale-[1.02] shadow-xl rounded-none h-14 px-10 text-xs font-bold tracking-[0.15em] uppercase flex items-center justify-center gap-3 w-full sm:w-auto active:scale-95 duration-200 cursor-pointer"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href="tel:+919776991699"
              className="bg-transparent text-[#E8621A] hover:bg-[#E8621A]/10 border border-[#E8621A]/80 transition-colors rounded-none h-14 px-8 text-xs font-bold tracking-[0.15em] uppercase flex items-center justify-center gap-3 w-full sm:w-auto text-center cursor-pointer"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* 2. Why Choose Us Section */}
      <LazySection height="450px" ids={["about-why"]}>
        <WhyChooseUsSection />
      </LazySection>

      {/* 3. Our Services Preview */}
      <ServicesPreview />

      {/* 4. Curated Spaces (Gallery Preview) */}
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
