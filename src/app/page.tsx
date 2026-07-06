import React from "react";
import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import dynamic from "next/dynamic";
import { getGalleryData, getMaterialsData } from "@/lib/dataFetcher";

// Dynamically import heavy below-the-fold components to reduce initial JS payload
const AboutSection = dynamic(() => import("@/components/AboutSection"), { ssr: true });
const ServicesSection = dynamic(() => import("@/components/ServicesSection"), { ssr: true });
const GallerySection = dynamic(() => import("@/components/GallerySection"), { ssr: true });
const ProcessSection = dynamic(() => import("@/components/ProcessSection"), { ssr: true });
const MaterialsSection = dynamic(() => import("@/components/MaterialsSection"), { ssr: true });
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"), { ssr: true });
const ContactSection = dynamic(() => import("@/components/ContactSection"), { ssr: true });

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
            <p className="text-xs sm:text-base md:text-lg font-light tracking-wide max-w-2xl mx-auto text-white/90 leading-relaxed">
              Curating elegant, minimal, and premium home spaces designed to define contemporary living.
            </p>
          </div>

          <div className="text-[12px] sm:text-[13px] font-light tracking-wide text-white/80 text-center mt-2 mb-4">
            45+ luxury projects delivered across Odisha
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
            <a
              href="https://wa.me/919776991699?text=Hi%20Interiocore!%20I'd%20like%20to%20learn%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white hover:bg-[#20ba5a] border border-[#25D366] hover:border-[#20ba5a] transition-all hover:scale-[1.02] shadow-md rounded-none h-14 px-8 text-xs font-bold tracking-[0.15em] uppercase flex items-center justify-center gap-3 w-full sm:w-auto active:scale-95 duration-200 cursor-pointer"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href="tel:+919776991699"
              className="bg-transparent text-[#E8621A] hover:bg-[#E8621A]/10 border-2 border-[#E8621A] transition-colors rounded-none h-14 px-8 text-xs font-bold tracking-[0.15em] uppercase flex items-center justify-center gap-3 w-full sm:w-auto text-center cursor-pointer"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* 2. Philosophy Block (Image-led) */}
      <section className="bg-background py-24 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block mb-8">Our Philosophy</span>
            <div className="space-y-8">
              <h3 className="text-3xl sm:text-5xl font-light text-foreground leading-[1.2] tracking-tight">
                Your home should be your happiest place.
              </h3>
              <p className="text-lg sm:text-xl font-light text-zinc-600 leading-[1.8] max-w-[65ch] mx-auto">
                At Interiocore Design Studio, we create premium wooden interiors that bring comfort, beauty, and functionality together. Every space is thoughtfully designed with quality materials and careful craftsmanship, so your home feels warm, elegant, and welcoming every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About Section */}
      <AboutSection />

      {/* 4. Services Section */}
      <ServicesSection />

      {/* 5. Design Gallery Section */}
      <GallerySection initialData={galleryData} />

      {/* 6. Process Section */}
      <ProcessSection />

      {/* 7. Materials Section */}
      <MaterialsSection initialData={materialsData} />

      {/* 8. Testimonials Section */}
      <TestimonialsSection />

      {/* 9. Contact & Map Section */}
      <ContactSection />
    </div>
  );
}
