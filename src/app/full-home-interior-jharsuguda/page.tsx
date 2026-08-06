import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, CheckCircle2, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Full Home Turnkey Interior Design in Jharsuguda | Interiocore",
  description:
    "End-to-end turnkey full home interior design services in Jharsuguda. Modular kitchens, wardrobes, living room walls, false ceilings & 3D planning. Get a free project estimate.",
  alternates: {
    canonical: "https://interiocore.com/full-home-interior-jharsuguda",
  },
};

export default function FullHomeInteriorPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Full Home Interior Design Jharsuguda",
    "serviceType": "Interior Design / Turnkey Home Remodeling",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Interiocore",
      "telephone": "+919776991699",
      "url": "https://interiocore.com",
    },
    "areaServed": [
      { "@type": "City", "name": "Jharsuguda" },
      { "@type": "City", "name": "Brajarajnagar" },
      { "@type": "City", "name": "Sambalpur" },
    ],
    "description":
      "Coordinated turnkey full home design themes from modular kitchens and bedroom wardrobes to living room panelling, false ceilings, and 30-45 day factory fabrication.",
    "offers": {
      "@type": "Offer",
      "price": "800000",
      "priceCurrency": "INR",
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
    },
  };

  return (
    <div className="bg-background text-foreground min-h-screen pt-24 sm:pt-28">
      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { name: "Services", url: "/#services" },
          { name: "Full Home Interior Design", url: "/full-home-interior-jharsuguda" },
        ]}
      />

      {/* Main Content */}
      <main className="max-w-[1600px] mx-auto px-6 lg:px-12 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Visual */}
          <div className="lg:col-span-7 relative h-[45dvh] sm:h-[65dvh] w-full overflow-hidden bg-zinc-100 border border-zinc-200">
            <Image
              src="/images/kitchen renders/kitchen (10).webp"
              alt="Full Home Interior Design in Jharsuguda by Interiocore"
              fill
              priority
              decoding="async"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>

          {/* Core Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold text-brand-accent uppercase tracking-[0.2em] block mb-2">
                Turnkey Luxury Execution
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-foreground leading-[1.1]">
                Full Home Interior Design in Jharsuguda
              </h1>
            </div>

            <div className="text-zinc-600 text-lg font-light leading-relaxed space-y-4">
              <p>
                Coordinated design themes from ceiling designs to flooring selections, managed under strict factory standards for a unified home layout.
              </p>

              {/* TODO: Human Review Needed */}
              <p className="bg-amber-50/50 p-4 border-l-2 border-amber-400 text-sm text-zinc-700">
                {/* TODO: Human Review Needed */}
                We manage complete 2BHK, 3BHK, 4BHK, and bungalow interior projects across Jharsuguda from initial architectural 3D plans to final key handover. Our single-window project management handles modular kitchens, master bedroom suites, foyer partitions, false ceilings, lighting design, and loose furniture coordination without vendor headaches.
              </p>
            </div>

            <div className="text-black/60 text-sm font-semibold pt-2">
              Starting ₹8 lakh onwards
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="https://wa.me/919776991699?text=Hi%2C%20I%27m%20interested%20in%20Full%20Home%20Interior%20design%20in%20Jharsuguda."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-accent text-white hover:bg-brand-accent-hover transition-colors rounded-none px-8 h-12 text-xs font-bold tracking-[0.15em] uppercase flex items-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                Discuss Full Home Project
              </a>
              <Link
                href="/contact"
                className="bg-zinc-900 text-white hover:bg-zinc-800 transition-colors rounded-none px-8 h-12 text-xs font-bold tracking-[0.15em] uppercase flex items-center justify-center gap-2"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <section className="mt-20 sm:mt-32 pt-16 border-t border-zinc-200">
          <div className="max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-foreground mb-4">
                What Our Turnkey Package Includes
              </h2>
              <p className="text-zinc-600 font-light text-base leading-relaxed">
                Our complete home interior service delivers cohesive aesthetics throughout your residence with transparent pricing and zero hidden costs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-2">
                <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                <h3 className="font-bold text-foreground uppercase tracking-wider text-sm">Modular Kitchen & Dining</h3>
                <p className="text-xs text-zinc-500 font-light">Custom BWR marine ply kitchen, crockery cabinets, and dining wall panelling.</p>
              </div>

              <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-2">
                <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                <h3 className="font-bold text-foreground uppercase tracking-wider text-sm">Bedrooms & Wardrobe Suites</h3>
                <p className="text-xs text-zinc-500 font-light">Floor-to-ceiling closets, bed back wall panelling, nightstands, and vanity units.</p>
              </div>

              <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-2">
                <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                <h3 className="font-bold text-foreground uppercase tracking-wider text-sm">Living Room & Foyer Consoles</h3>
                <p className="text-xs text-zinc-500 font-light">Accent wall louvers, TV consoles, foyer shoe units, and CNC partition dividers.</p>
              </div>

              <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-2">
                <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                <h3 className="font-bold text-foreground uppercase tracking-wider text-sm">False Ceiling & Electrical Lighting</h3>
                <p className="text-xs text-zinc-500 font-light">Seamless Gypsum false ceilings, COB spotlights, magnetic tracks, and LED cove wiring.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-20 pt-16 border-t border-zinc-200">
          <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground mb-6">
            Explore Dedicated Service Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/modular-kitchen-design-jharsuguda"
              className="p-6 bg-zinc-50 border border-zinc-200 hover:border-brand-accent transition-all group flex items-center justify-between"
            >
              <div>
                <h3 className="font-bold uppercase tracking-wider text-sm text-foreground group-hover:text-brand-accent">
                  Modular Kitchen Design
                </h3>
                <p className="text-xs text-zinc-500 font-light mt-1">
                  Waterproof marine ply kitchens and German soft-close fittings.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-brand-accent group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/living-room-interior-design-jharsuguda"
              className="p-6 bg-zinc-50 border border-zinc-200 hover:border-brand-accent transition-all group flex items-center justify-between"
            >
              <div>
                <h3 className="font-bold uppercase tracking-wider text-sm text-foreground group-hover:text-brand-accent">
                  Living Room Interior Design
                </h3>
                <p className="text-xs text-zinc-500 font-light mt-1">
                  Architectural wall panelling, seating layouts, and TV consoles.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-brand-accent group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 py-16 px-8 bg-zinc-900 text-white text-center flex flex-col items-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight">
            Schedule a Full Home Interior Project Consultation
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl font-light">
            Contact Interiocore in Jharsuguda today to discuss your floor plan, 3D renderings, and turnkey timelines.
          </p>
          <Link
            href="/contact"
            className="bg-brand-accent hover:bg-brand-accent-hover text-white transition-colors px-10 h-14 text-xs font-bold tracking-[0.15em] uppercase flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Book a Free Consultation
          </Link>
        </section>
      </main>
    </div>
  );
}
