import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function ServicesPreview() {
  const services = [
    {
      title: "Modular Kitchen Design",
      subtitle: "The Heart of the Home",
      desc: "Custom-designed modular kitchens with factory precision, waterproof marine ply, and soft-close German hardware.",
      image: "/images/kitchen renders/kitchen (3).webp",
      price: "Starting ₹1.5 lakh onwards",
      url: "/modular-kitchen-design-jharsuguda",
    },
    {
      title: "TV Unit Design",
      subtitle: "Seamless Entertainment Consoles",
      desc: "Bespoke entertainment wall consoles with hidden cable channels, acoustic backing panels, and integrated ambient LED glow.",
      image: "/images/tv unit/tv unit (1).webp",
      price: "Starting ₹45,000 onwards",
      url: "/tv-unit-design-jharsuguda",
    },
    {
      title: "Wardrobe Design",
      subtitle: "Tailored Walk-In Closets",
      desc: "Ergonomic floor-to-ceiling wardrobes featuring glass tint shutters, soft-close drawers, and anti-warp structure.",
      image: "/images/wardrobe/wardrobe (1).webp",
      price: "Starting ₹1.2 lakh onwards",
      url: "/wardrobe-design-jharsuguda",
    },
    {
      title: "Bedroom Interior Design",
      subtitle: "Sanctuaries of Rest",
      desc: "Custom upholstered headboard walls, integrated floating side tables, and cohesive dressing suites engineered for peaceful comfort.",
      image: "/images/wardrobe/wardrobe (3).webp",
      price: "Starting ₹1.8 lakh onwards",
      url: "/bedroom-interior-design-jharsuguda",
    },
    {
      title: "Living Room Interior Design",
      subtitle: "Architectural Statement Spaces",
      desc: "Refined formal living spaces with custom accent walls, luxury ceiling designs, and harmonious color balances.",
      image: "/images/living room/living_room (1).webp",
      price: "Starting ₹2 lakh onwards",
      url: "/living-room-interior-design-jharsuguda",
    },
    {
      title: "Full Home Interior Design",
      subtitle: "Turnkey Luxury Execution",
      desc: "End-to-end interior planning and execution from 3D conceptualization to factory fabrication and 30-45 day site handover.",
      image: "/images/kitchen renders/kitchen (10).webp",
      price: "Starting ₹8 lakh onwards",
      url: "/full-home-interior-jharsuguda",
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-background border-b border-zinc-200/50">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-bold text-brand-accent uppercase tracking-[0.2em] mb-4 block">
              Expertise & Services
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tighter text-foreground leading-[1]">
              Interior Design Services in Jharsuguda
            </h2>
          </div>
          <p className="text-zinc-500 font-light text-base max-w-md">
            Explore our specialized interior design offerings designed for modern residential spaces across Jharsuguda, Odisha.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-zinc-50/70 border border-zinc-200/80 hover:border-brand-accent/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Image */}
                <div className="relative h-64 w-full overflow-hidden bg-zinc-100">
                  <Image
                    src={service.image}
                    alt={`${service.title} Jharsuguda`}
                    fill
                    loading="lazy"
                    decoding="async"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1">
                    {service.subtitle}
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <h3 className="text-xl font-bold uppercase tracking-tight text-foreground group-hover:text-brand-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-600 text-sm font-light leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="text-xs font-semibold text-zinc-400">
                    {service.price}
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="px-6 sm:px-8 pb-6 pt-2">
                <Link
                  href={service.url}
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase text-brand-secondary group-hover:text-brand-accent transition-colors"
                >
                  Learn More & Explore
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Section Footer CTA */}
        <div className="mt-16 pt-12 border-t border-zinc-200/60 flex flex-col sm:flex-row items-center justify-between gap-6 bg-zinc-50 p-8 sm:p-10">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground mb-1">
              Need a Custom Interior Consultation?
            </h3>
            <p className="text-zinc-500 text-sm font-light">
              Speak with our senior design team in Jharsuguda to plan your layout and budget.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-brand-accent text-white hover:bg-brand-accent-hover transition-colors px-8 h-12 text-xs font-bold tracking-[0.15em] uppercase flex items-center justify-center gap-2 shrink-0 w-full sm:w-auto"
          >
            <Phone className="w-4 h-4" />
            Book Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
