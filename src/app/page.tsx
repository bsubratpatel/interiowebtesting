import React from "react";
import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import { getGalleryData, getMaterialsData } from "@/lib/dataFetcher";

import LazySection from "@/components/LazySection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import { LazyGallery, LazyMaterials } from "@/components/LazyClientComponents";

export default function Home() {
  // Pre-load data on the server side to eliminate client-side fetch calls on mount
  const galleryData = getGalleryData();
  const materialsData = getMaterialsData();

  return (
    <div className="bg-background text-foreground overflow-hidden">
      {/* 1. Hero Section (Full-bleed Visual Heavy) */}
      <section id="home" className="relative w-full min-h-[100dvh] md:h-[100dvh] flex items-center justify-center overflow-hidden py-12 md:py-0">
        {/* Background Image with Parallax feel */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/kitchen renders/kitchen (1).webp"
            alt="Interiocore Luxury Kitchen Design"
            fill
            className="object-cover scale-105"
            sizes="100vw"
            priority
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center pt-28 pb-10 md:pt-0 md:pb-0">
          <div>
            <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-[7rem] font-extrabold tracking-tighter leading-[0.95] uppercase drop-shadow-2xl mb-6 sm:mb-8">
              Standards of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">Perfection</span>
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

      {/* 2. Why Choose Us Section (Below fold) */}
      <LazySection height="450px" ids={["about-why"]}>
        <WhyChooseUsSection />
      </LazySection>
 
      {/* 3. Our Services */}
      <LazySection height="600px" ids={["services-kitchen", "services-tv", "services-wardrobe", "services-bedroom", "services-living", "services-full-home"]}>
        <ServicesSection />
      </LazySection>
 
      {/* 4. Curated Spaces (Gallery) */}
      <LazyGallery initialData={galleryData} />
 
      {/* 5. New CTA Section */}
      <LazySection height="300px">
        <CTASection />
      </LazySection>
 
      {/* 6. Our Process */}
      <LazySection height="600px" ids={["process"]}>
        <ProcessSection />
      </LazySection>
 
      {/* 7. Material Palette */}
      <LazyMaterials initialData={materialsData} />
 
      {/* 8. Client Experiences */}
      <LazySection height="400px" ids={["testimonials"]}>
        <TestimonialsSection />
      </LazySection>
 
      {/* 9. About Interiocore */}
      <LazySection height="700px" ids={["about"]}>
        <AboutSection />
      </LazySection>
 
      {/* 10. Start Your Project (Contact Form) */}
      <LazySection height="600px" ids={["contact"]}>
        <ContactSection />
      </LazySection>
    </div>
  );
}
