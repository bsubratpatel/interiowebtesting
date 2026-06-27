"use client";

import React from "react";
import Image from "next/image";
import { Phone, MessageCircle, Star, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimationWrapper from "@/components/AnimationWrapper";

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
      {/* 1. Hero Section (Premium Editorial Split Layout) */}
      <section
        id="home"
        className="min-h-[90vh] lg:min-h-screen w-full flex items-center pt-28 lg:pt-16 pb-16 scroll-mt-20"
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <AnimationWrapper className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full border border-brand-accent/20 bg-brand-accent/5 text-[10px] sm:text-xs font-bold text-brand-accent uppercase tracking-widest">
              Redefining Luxury Interiors
            </AnimationWrapper>

            <AnimationWrapper delay={0.05} className="space-y-4">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-foreground uppercase">
                Standards of <br />
                <span className="text-brand-accent">Perfection</span>
              </h1>
              <p className="text-zinc-500 text-sm sm:text-lg md:text-xl font-light leading-relaxed max-w-xl">
                Interiocore architects elegant, minimal, and premium modular kitchens and home spaces designed to define contemporary Indian living.
              </p>
            </AnimationWrapper>

            {/* CTAs */}
            <AnimationWrapper delay={0.1} className="flex flex-col sm:flex-row items-center gap-4 max-w-md">
              <Button
                onClick={handleCall}
                className="w-full sm:w-1/2 bg-brand-accent text-white hover:bg-brand-accent-hover transition-all rounded-full h-14 text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-3 shadow-sm active:scale-95 duration-200 cursor-pointer"
              >
                <Phone className="h-4.5 w-4.5 animate-[wiggle_1.5s_infinite]" />
                Call Now
              </Button>
              <Button
                onClick={handleWhatsApp}
                className="w-full sm:w-1/2 bg-brand-secondary text-white hover:bg-brand-secondary/90 transition-all rounded-full h-14 text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-3 active:scale-95 duration-200 cursor-pointer"
              >
                <MessageCircle className="h-4.5 w-4.5 text-emerald-500" />
                WhatsApp Chat
              </Button>
            </AnimationWrapper>

            {/* Trust Indicators */}
            <AnimationWrapper delay={0.15} className="flex flex-wrap gap-3 pt-4">
              <div className="flex items-center gap-2 bg-white border border-zinc-200/80 px-4 py-2 rounded-full text-zinc-500 text-xs font-semibold tracking-wide shadow-sm">
                <Star className="h-4 w-4 fill-brand-accent text-brand-accent" />
                <span>4.9/5 Google Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-zinc-200/80 px-4 py-2 rounded-full text-zinc-500 text-xs font-semibold tracking-wide shadow-sm">
                <Shield className="h-4 w-4 text-brand-accent" />
                <span>10-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-zinc-200/80 px-4 py-2 rounded-full text-zinc-500 text-xs font-semibold tracking-wide shadow-sm">
                <Clock className="h-4 w-4 text-brand-accent" />
                <span>45-Day Installation</span>
              </div>
            </AnimationWrapper>
          </div>

          {/* Right Image Block */}
          <div className="lg:col-span-6 w-full h-[400px] sm:h-[500px] lg:h-[650px] relative">
            <AnimationWrapper delay={0.2} className="w-full h-full rounded-4xl overflow-hidden border border-zinc-200/60 shadow-xl relative">
              <Image
                src="/images/kitchen renders/kitchen (1).webp"
                alt="Interiocore Luxury Kitchen Design"
                fill
                className="object-cover brightness-[0.95] hover:scale-102 transition-transform duration-[20s] ease-out animate-[zoom-slow_20s_infinite]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </AnimationWrapper>
          </div>

        </div>
      </section>

      {/* 2. Philosophy Block */}
      <section className="bg-white py-24 border-y border-zinc-200/80">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 text-center space-y-6">
          <AnimationWrapper>
            <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block mb-4">Our Philosophy</span>
            <blockquote className="text-2xl sm:text-4xl font-light text-zinc-500 leading-snug sm:leading-relaxed italic">
              &ldquo;We believe luxury is not about excess, but the elimination of detail. Our spaces are curated with absolute geometric precision, global-grade materials, and a focus on premium utility.&rdquo;
            </blockquote>
            <div className="w-12 h-0.5 bg-brand-accent/50 mx-auto mt-8" />
          </AnimationWrapper>
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
