import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, CheckCircle2, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Living Room Interior Design Services in Jharsuguda | Interiocore",
  description:
    "Luxury living room interior design in Jharsuguda. Bespoke wall panelling, ceiling designs, partition screens, and custom TV consoles. Schedule a free design session.",
  alternates: {
    canonical: "https://interiocore.com/living-room-interior-design-jharsuguda",
  },
};

export default function LivingRoomInteriorPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Living Room Interior Design Jharsuguda",
    "serviceType": "Interior Design / Living Room Concepts",
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
      "Bespoke living room interiors featuring refined materials, custom furnishings, accent wall panelling, floating TV consoles, and ambient ceiling lighting.",
    "offers": {
      "@type": "Offer",
      "price": "200000",
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
          { name: "Living Room Interior Design", url: "/living-room-interior-design-jharsuguda" },
        ]}
      />

      {/* Main Content */}
      <main className="max-w-[1600px] mx-auto px-6 lg:px-12 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Visual */}
          <div className="lg:col-span-7 relative h-[45dvh] sm:h-[65dvh] w-full overflow-hidden bg-zinc-100 border border-zinc-200">
            <Image
              src="/images/living room/living_room (1).webp"
              alt="Living Room Interior Design in Jharsuguda by Interiocore"
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
                Architectural Statement Spaces
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-foreground leading-[1.1]">
                Living Room Interior Design in Jharsuguda
              </h1>
            </div>

            <div className="text-zinc-600 text-lg font-light leading-relaxed space-y-4">
              <p>
                Bespoke living room interiors featuring refined materials, custom furnishings, and sophisticated details that create a warm, inviting atmosphere.
              </p>

              {/* TODO: Human Review Needed */}
              <p className="bg-amber-50/50 p-4 border-l-2 border-amber-400 text-sm text-zinc-700">
                {/* TODO: Human Review Needed */}
                We design sophisticated living rooms that make a striking first impression for guests in Jharsuguda. From marble-finish accent panelling and CNC wood partition dividers to perimeter LED ceiling details and custom TV entertainment walls, every element is curated for grand living.
              </p>
            </div>

            <div className="text-black/60 text-sm font-semibold pt-2">
              Starting ₹2 lakh onwards
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="https://wa.me/919776991699?text=Hi%2C%20I%27m%20interested%20in%20Living%20Room%20Interior%20design%20in%20Jharsuguda."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-accent text-white hover:bg-brand-accent-hover transition-colors rounded-none px-8 h-12 text-xs font-bold tracking-[0.15em] uppercase flex items-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                Discuss Living Room Project
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
                Living & Dining Design Elements
              </h2>
              <p className="text-zinc-600 font-light text-base leading-relaxed">
                Our living room concepts integrate open-plan hall spaces, foyer entryways, dining panelling, and entertainment walls into one unified architectural theme.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-2">
                <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                <h3 className="font-bold text-foreground uppercase tracking-wider text-sm">Feature Accent Wall Panelling</h3>
                <p className="text-xs text-zinc-500 font-light">Stone veneer, fluted wooden louvers, and metallic strip wall trim behind seating areas.</p>
              </div>

              <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-2">
                <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                <h3 className="font-bold text-foreground uppercase tracking-wider text-sm">CNC Wood Partition Screens</h3>
                <p className="text-xs text-zinc-500 font-light">Decorative jali dividers separating living and dining zones while keeping spatial light flow.</p>
              </div>

              <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-2">
                <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                <h3 className="font-bold text-foreground uppercase tracking-wider text-sm">Integrated Media Console Walls</h3>
                <p className="text-xs text-zinc-500 font-light">Floating TV cabinets with warm ambient LED glow and hidden cable management.</p>
              </div>

              <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-2">
                <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                <h3 className="font-bold text-foreground uppercase tracking-wider text-sm">False Ceiling & Layered Lighting</h3>
                <p className="text-xs text-zinc-500 font-light">Multi-tiered ceiling coves with magnetic track lights, spotlights, and warm ambient glow.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-20 pt-16 border-t border-zinc-200">
          <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground mb-6">
            Explore Related Interior Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/tv-unit-design-jharsuguda"
              className="p-6 bg-zinc-50 border border-zinc-200 hover:border-brand-accent transition-all group flex items-center justify-between"
            >
              <div>
                <h3 className="font-bold uppercase tracking-wider text-sm text-foreground group-hover:text-brand-accent">
                  Custom TV Unit Design
                </h3>
                <p className="text-xs text-zinc-500 font-light mt-1">
                  Floating TV consoles, fluted panel walls, and LED backdrops.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-brand-accent group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/full-home-interior-jharsuguda"
              className="p-6 bg-zinc-50 border border-zinc-200 hover:border-brand-accent transition-all group flex items-center justify-between"
            >
              <div>
                <h3 className="font-bold uppercase tracking-wider text-sm text-foreground group-hover:text-brand-accent">
                  Full Home Interior Design
                </h3>
                <p className="text-xs text-zinc-500 font-light mt-1">
                  Complete turnkey home design & execution in Jharsuguda.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-brand-accent group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 py-16 px-8 bg-zinc-900 text-white text-center flex flex-col items-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight">
            Transform Your Living Space with Interiocore
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl font-light">
            Schedule a free site visit in Jharsuguda to discuss living room themes, textures, and 3D visual renders.
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
