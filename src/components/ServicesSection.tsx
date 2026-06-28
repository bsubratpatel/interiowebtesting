"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const servicesData = [
    {
      id: "services-kitchen",
      title: "Modular Kitchens",
      subtitle: "The Heart of the Home",
      desc: "Premium stainless steel and BWR plywood kitchens combining high-end German aesthetics with supreme moisture resistance and hygiene.",
      image: "/images/kitchen renders/kitchen (3).webp",
    },
    {
      id: "services-tv",
      title: "TV Unit Designs",
      subtitle: "Seamless Entertainment Consoles",
      desc: "Bespoke floating TV panels blending premium marble textures, fluted wooden details, and intelligent hidden wiring management.",
      image: "/images/tv unit/tv unit (1).webp",
    },
    {
      id: "services-wardrobe",
      title: "Wardrobe Designs",
      subtitle: "Tailored Walk-In Closets",
      desc: "Flawless dressing solutions featuring soft-close configurations, integrated sensor lighting, and leatherette-finished drawer linings.",
      image: "/images/wardrobe/wardrobe (1).webp",
    },
    {
      id: "services-bedroom",
      title: "Bedroom Interiors",
      subtitle: "Sanctuaries of Rest",
      desc: "Minimalist headboard walls, custom nightstands, and cohesive dressing layouts engineered for absolute comfort and privacy.",
      image: "/images/wardrobe/wardrobe (3).webp",
    },
    {
      id: "services-living",
      title: "Living Room Interiors",
      subtitle: "Architectural Statement Spaces",
      desc: "Fluid layouts balancing acoustic paneling, customized lounges, and architectural lighting configurations designed to host and impress.",
      image: "/images/living room/living_room (1).webp",
    },
    {
      id: "services-full-home",
      title: "Full Home Interiors",
      subtitle: "Turnkey Luxury Execution",
      desc: "Coordinated design themes from ceiling designs to flooring selections, managed under strict factory standards for a unified home layout.",
      image: "/images/kitchen renders/kitchen (10).webp",
    },
  ];

  return (
    <div className="bg-white">
      {/* Main Header */}
      <section className="pt-24 max-w-[1600px] mx-auto px-6 lg:px-12">
        <span className="text-xs font-bold text-brand-accent uppercase tracking-[0.2em] mb-4 block">02. Expertise</span>
        <h2 className="text-5xl sm:text-7xl font-extrabold uppercase tracking-tighter text-foreground leading-[1]">
          Our Disciplines
        </h2>
      </section>

      {/* Individual Service Subsections */}
      {servicesData.map((service, idx) => (
        <section 
          id={service.id} 
          key={service.id} 
          className="py-24 sm:py-32 border-b border-zinc-150 last:border-b-0 max-w-[1600px] mx-auto px-6 lg:px-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Image Block */}
            <div
              className={`lg:col-span-7 relative h-[45dvh] sm:h-[60dvh] w-full overflow-hidden bg-zinc-50 ${
                idx % 2 === 1 ? "lg:order-last" : ""
              }`}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover hover:scale-[1.02] transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>

            {/* Description Block */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.25em] block mb-2">
                  {service.subtitle}
                </span>
                <h3 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-foreground leading-[1.1]">
                  {service.title}
                </h3>
              </div>

              <div>
                <p className="text-zinc-600 text-lg font-light leading-relaxed">
                  {service.desc}
                </p>
              </div>
              
              <div className="pt-4 flex gap-4">
                <Button
                  variant="default"
                  onClick={() => window.location.href = "tel:+919776991699"}
                  className="bg-brand-accent text-white hover:bg-brand-accent-hover transition-colors rounded-none px-8 h-12 text-xs font-bold tracking-[0.15em] uppercase flex items-center gap-2 cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  Discuss Project
                </Button>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
