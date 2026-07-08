import React from "react";
import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import { getGalleryData, getMaterialsData } from "@/lib/dataFetcher";

import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import LazyComponents from "@/components/LazyComponents";

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

      {/* 2. Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Below-the-fold dynamic client-side sections */}
      <LazyComponents galleryData={galleryData} materialsData={materialsData} />
    </div>
  );
}
