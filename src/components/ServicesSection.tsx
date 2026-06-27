"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimationWrapper from "@/components/AnimationWrapper";

export default function ServicesSection() {
  const handleCall = () => {
    window.location.href = "tel:+919776991699";
  };

  const handleWhatsApp = (serviceTitle?: string) => {
    const text = serviceTitle
      ? `Hi Interiocore! I'd like to learn more about your "${serviceTitle}" services.`
      : "Hi Interiocore! I'd like to learn more about your services.";
    window.open(`https://wa.me/919776991699?text=${encodeURIComponent(text)}`, "_blank");
  };

  const servicesData = [
    {
      id: "kitchen",
      title: "Modular Kitchen Designs",
      subtitle: "The Heart of the Home",
      desc: "We build premium stainless steel and BWR action plywood modular kitchens that combine supreme hygiene, modular space organization, and high-end design aesthetics.",
      image: "/images/kitchen renders/kitchen (3).webp",
      features: [
        "Robotic factory assembly for zero moisture trapping",
        "Soft-close tandem drawers and pull-outs (Hettich, Blum, Hafele)",
        "Layout options: L-Shaped, U-Shaped, Island, Parallel, Straight",
        "High-density stone and premium quartz countertops",
      ],
      specs: "Materials: SS 304, HDHMR, Acrylic, PU | Warranty: 10 Years",
    },
    {
      id: "wardrobe",
      title: "Luxury Wardrobe Designs",
      subtitle: "Tailored Closet Architecture",
      desc: "Experience flawless bedroom styling with custom wardrobes. From walk-in dressing rooms to sliding glass configurations, we design to store with luxury.",
      image: "/images/wardrobe/wardrobe (1).webp",
      features: [
        "Integrated sensor LED lights and glass dividers",
        "Configurations: Floor-to-ceiling sliding, open walk-in, hinged doors",
        "Luxury leatherette linings, velvet jewellery trays, and watch winders",
        "Soft-close dampening sliding tracks for silent operation",
      ],
      specs: "Materials: Plywood, Veneer, Lacquered Glass, Profile doors | Warranty: 10 Years",
    },
    {
      id: "tv-unit",
      title: "Premium TV Unit Designs",
      subtitle: "Seamless Entertainment Consoles",
      desc: "Transform your living area with bespoke TV backdrops. We blend marble textures, fluted wooden panels, and hidden cable management for a clean architectural aesthetic.",
      image: "/images/tv unit/tv unit (1).webp",
      features: [
        "Hidden core routing for flawless wire management",
        "Accent lighting with integrated dimmable LED warm channels",
        "Bespoke modular storage cabinets for decoders and gaming setups",
        "Materials: Charcoal panels, fluted wood, marble slabs, metal profiles",
      ],
      specs: "Materials: Veneer, MDF, Metal trims, Tinted Glass | Warranty: 5 Years",
    },
    {
      id: "vanity",
      title: "Bespoke Vanity Designs",
      subtitle: "Elegant Washroom Counters",
      desc: "Our high-density vanity counters are built to endure high moisture environments without losing their minimalist allure. Featuring marble countertops and seamless hardware.",
      image: "/images/vanity/vanity (1).webp",
      features: [
        "100% waterproof materials preventing swelling or mold",
        "Integrated under-counter drawers and mirrored cabinets",
        "Support for designer table-top basins and luxury fixtures",
        "Mirror setups: LED backlit touch-sensor anti-fog mirrors",
      ],
      specs: "Materials: SS 304, HDHMR, Quartz counter, Acrylic | Warranty: 5 Years",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white border-b border-zinc-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-24">
        
        {/* Header Block */}
        <AnimationWrapper className="flex flex-col items-center space-y-4 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold text-brand-accent uppercase tracking-widest">Our Expertise</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-foreground">
            Luxury Design Services
          </h2>
          <p className="text-zinc-500 text-base font-light leading-relaxed">
            We provide precision modular architecture tailored to contemporary lifestyles. Explore our specialized services.
          </p>
        </AnimationWrapper>

        {/* Services List */}
        <div className="space-y-32">
          {servicesData.map((service, idx) => (
            <div
              key={service.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              {/* Image Block */}
              <AnimationWrapper
                className={`relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden border border-zinc-200 shadow-lg ${
                  idx % 2 === 1 ? "lg:order-last" : ""
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover brightness-[0.95] hover:scale-103 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </AnimationWrapper>

              {/* Description Block */}
              <AnimationWrapper className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-brand-accent uppercase tracking-widest block">
                    {service.subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-foreground">
                    {service.title}
                  </h3>
                </div>
                <p className="text-zinc-600 text-base font-light leading-relaxed">
                  {service.desc}
                </p>
                
                <ul className="space-y-3 pt-2">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex gap-2.5 items-start text-sm font-light text-zinc-500">
                      <ChevronRight className="h-4 w-4 text-brand-accent shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="p-5 rounded-3xl border border-zinc-200/60 bg-background text-zinc-500 text-sm shadow-sm">
                  <span className="font-bold text-brand-accent mr-2 uppercase tracking-widest text-[9px] block mb-1">Specifications</span>
                  <span className="font-light text-zinc-500">{service.specs}</span>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button
                    onClick={handleCall}
                    className="bg-brand-accent text-white hover:bg-brand-accent-hover transition-all rounded-full px-8 h-12 text-xs font-bold tracking-wider uppercase flex items-center gap-2 active:scale-95 duration-200"
                  >
                    <Phone className="h-4 w-4" />
                    Call Now
                  </Button>
                  <Button
                    onClick={() => handleWhatsApp(service.title)}
                    className="bg-white border border-zinc-950 text-zinc-950 hover:bg-zinc-50 transition-all rounded-full px-8 h-12 text-xs font-bold tracking-wider uppercase flex items-center gap-2 active:scale-95 duration-200"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Ask via WhatsApp
                  </Button>
                </div>
              </AnimationWrapper>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
