import React from "react";
import Image from "next/image";
import { Phone } from "lucide-react";

export default function ServicesSection() {
  const servicesData = [
    {
      id: "services-kitchen",
      title: "Modular Kitchen Design in Jharsuguda",
      subtitle: "The Heart of Your Home",
      desc: (
        <div className="space-y-3">
          <p>
            Beautiful, practical and made for everyday living. We design modular kitchens in Jharsuguda with smart storage, practical layouts and finishes that suit your home and lifestyle.
          </p>
          <p>
            From L-shaped and U-shaped kitchens to straight and parallel layouts, we plan every kitchen around your space, cooking habits and storage needs. We also focus on durable materials, easy-to-use storage, quality hardware and clean, modern finishes.
          </p>
          <p>
            Whether you have a small kitchen or a spacious home, InterioCore creates modular kitchen designs that make cooking, organising and everyday living easier.
          </p>
          <p className="font-medium text-foreground">
            Planning a modular kitchen in Jharsuguda? Let's design it around you.
          </p>
        </div>
      ),
      image: "/images/kitchen renders/kitchen (3).webp",
      price: "Starting ₹1.5 lakh onwards",
      whatsappUrl: "https://wa.me/919776991699?text=Hi%2C%20I%27m%20interested%20in%20a%20Modular%20Kitchen%20design.%20Can%20we%20discuss%3F",
    },
    {
      id: "services-tv",
      title: "TV Unit Design",
      subtitle: "Seamless Entertainment Consoles",
      desc: "Bespoke entertainment units crafted with premium materials, ambient lighting, and smart storage to complement contemporary interiors.",
      image: "/images/tv unit/tv unit (1).webp",
      price: "Starting ₹45,000 onwards",
      whatsappUrl: "https://wa.me/919776991699?text=Hi%2C%20I%27m%20interested%20in%20a%20TV%20Unit%20design.%20Can%20we%20discuss%3F",
    },
    {
      id: "services-wardrobe",
      title: "Wardrobe Design",
      subtitle: "Tailored Walk-In Closets",
      desc: "Crafted with premium materials, soft-close hardware, and thoughtfully designed interiors for a refined everyday experience.",
      image: "/images/wardrobe/wardrobe (1).webp",
      price: "Starting ₹1.2 lakh onwards",
      whatsappUrl: "https://wa.me/919776991699?text=Hi%2C%20I%27m%20interested%20in%20a%20Wardrobe%20design.%20Can%20we%20discuss%3F",
    },
    {
      id: "services-bedroom",
      title: "Bedroom Interior Design",
      subtitle: "Sanctuaries of Rest",
      desc: "Minimalist headboard walls, custom nightstands, and cohesive dressing layouts engineered for absolute comfort and privacy.",
      image: "/images/wardrobe/wardrobe (3).webp",
      price: "Starting ₹1.8 lakh onwards",
      whatsappUrl: "https://wa.me/919776991699?text=Hi%2C%20I%27m%20interested%20in%20Bedroom%20Interior%20design.%20Can%20we%20discuss%3F",
    },
    {
      id: "services-living",
      title: "Living Room Interior Design",
      subtitle: "Architectural Statement Spaces",
      desc: "Bespoke living room interiors featuring refined materials, custom furnishings, and sophisticated details that create a warm, inviting atmosphere.",
      image: "/images/living room/living_room (1).webp",
      price: "Starting ₹2 lakh onwards",
      whatsappUrl: "https://wa.me/919776991699?text=Hi%2C%20I%27m%20interested%20in%20Living%20Room%20Interior%20design.%20Can%20we%20discuss%3F",
    },
    {
      id: "services-full-home",
      title: "Full Home Interior Design",
      subtitle: "Turnkey Luxury Execution",
      desc: "Coordinated design themes from ceiling designs to flooring selections, managed under strict factory standards for a unified home layout.",
      image: "/images/kitchen renders/kitchen (10).webp",
      price: "Starting ₹8 lakh onwards",
      whatsappUrl: "https://wa.me/919776991699?text=Hi%2C%20I%27m%20interested%20in%20Full%20Home%20Interior%20design.%20Can%20we%20discuss%3F",
    },
  ];

  return (
    <div className="bg-background">
      {/* Main Header */}
      <section className="pt-24 max-w-[1600px] mx-auto px-6 lg:px-12">
        <span className="text-xs font-bold text-brand-accent uppercase tracking-[0.2em] mb-4 block">Expertise</span>
        <h2 className="text-5xl sm:text-7xl font-extrabold uppercase tracking-tighter text-foreground leading-[1]">
          Our Services in Jharsuguda
        </h2>
      </section>

      {/* Individual Service Subsections */}
      {servicesData.map((service, idx) => (
        <section 
          id={service.id} 
          key={service.id} 
          className="py-16 sm:py-24 lg:py-32 border-b border-zinc-150 last:border-b-0 max-w-[1600px] mx-auto px-6 lg:px-12"
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
                loading="lazy"
                decoding="async"
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

              <div className="text-black/45 text-[12px] sm:text-[13px] font-light">
                {service.price}
              </div>
              
              <div className="pt-2 flex gap-4">
                <a
                  href={service.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Discuss ${service.title.toLowerCase()} project on WhatsApp`}
                  className="bg-brand-accent text-white hover:bg-brand-accent-hover transition-colors rounded-none px-8 h-12 text-xs font-bold tracking-[0.15em] uppercase flex items-center gap-2 cursor-pointer w-fit"
                >
                  <Phone className="w-4 h-4" />
                  Discuss Project
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Section-level CTA Block */}
      <section className="mt-10 sm:mt-12 py-16 sm:py-24 max-w-[1600px] mx-auto px-6 lg:px-12 border-t border-zinc-150 bg-zinc-50/50">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center space-y-6">
          <h3 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-foreground leading-tight">
            Not sure which service fits your space?
          </h3>
          <p className="text-zinc-500 text-sm sm:text-base font-light">
            Get a free consultation and we'll guide you.
          </p>
          <a
            href="https://wa.me/919776991699?text=Hi%2C%20I%27d%20like%20a%20free%20consultation%20for%20my%20home%20interior."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E8621A] hover:bg-[#d65212] text-white transition-colors rounded-none px-8 h-12 text-xs font-bold tracking-[0.15em] uppercase flex items-center justify-center gap-2 cursor-pointer w-full max-w-[320px] sm:max-w-xs mt-2"
          >
            GET FREE CONSULTATION
          </a>
        </div>
      </section>
    </div>
  );
}
