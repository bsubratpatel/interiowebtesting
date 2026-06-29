"use client";

import React from "react";
import Image from "next/image";
import { Phone, MessageCircle, Star, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import Section Components
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import ProcessSection from "@/components/ProcessSection";
import MaterialsSection from "@/components/MaterialsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const handleCall = () => {
    window.location.href = "tel:+919776991699";
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/919776991699?text=Hi%20Interiocore!%20I'd%20like%20to%20learn%20more%20about%20your%20services.",
      "_blank"
    );
  };

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
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-secondary/70 via-brand-secondary/30 to-background/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white flex flex-col items-center pt-[calc(env(safe-area-inset-top,0px)+120px)] pb-12 md:pt-0 md:pb-0">
          <div>
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-brand-accent mb-4 sm:mb-8 block">
              Redefining Luxury Interiors
            </span>
          </div>

          <div>
            <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-[7rem] font-extrabold tracking-tighter leading-[0.9] uppercase drop-shadow-2xl mb-6 sm:mb-12">
              Standards of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">Perfection</span>
            </h1>
          </div>

          <div>
            <p className="text-xs sm:text-base md:text-lg font-light tracking-wide max-w-2xl mx-auto text-white/90 mb-8 sm:mb-16 leading-relaxed">
              Curating elegant, minimal, and premium home spaces designed to define contemporary living.
            </p>
          </div>

          <div className="flex flex-col items-center gap-[10px] w-full max-w-[360px] sm:max-w-[400px]">
            <Button
              onClick={handleWhatsApp}
              className="w-full bg-[#25D366] text-white hover:bg-[#20ba5a] transition-all shadow-md font-bold text-[14px] sm:text-[15px] rounded-[8px] h-auto py-[14px] px-6 flex items-center justify-center gap-2 active:scale-95 duration-200"
            >
              💬 WHATSAPP US
            </Button>
            <Button
              onClick={handleCall}
              className="w-full bg-transparent text-white hover:bg-white/10 transition-all font-normal text-[12px] sm:text-[13px] rounded-[8px] h-auto py-[10px] px-6 flex items-center justify-center gap-2 border border-white/25 active:scale-95 duration-200"
            >
              📞 Prefer a call? Tap here
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Philosophy Block (Image-led) */}
      <section className="bg-background py-24 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block mb-8">Our Philosophy</span>
            <blockquote className="text-3xl sm:text-5xl font-light text-foreground leading-[1.2] tracking-tight">
              "Luxury is not about excess, but the elimination of detail. We curate spaces with absolute precision."
            </blockquote>
          </div>
        </div>
      </section>

      {/* 3. About Section */}
      <AboutSection />

      {/* 4. Services Section */}
      <ServicesSection />

      {/* 5. Design Gallery Section */}
      <GallerySection />

      {/* 6. Process Section */}
      <ProcessSection />

      {/* 7. Materials Section */}
      <MaterialsSection />

      {/* 8. Testimonials Section */}
      <TestimonialsSection />

      {/* 9. Contact & Map Section */}
      <ContactSection />
    </div>
  );
}
