import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, CheckCircle2, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Luxury Wardrobe & Closet Design in Jharsuguda | Interiocore",
  description:
    "Custom floor-to-ceiling wardrobes, sliding door closets, glass shutters, and walk-in wardrobe designs in Jharsuguda. Contact Interiocore for free quotes.",
  alternates: {
    canonical: "https://interiocore.com/wardrobe-design-jharsuguda",
  },
};

export default function WardrobeDesignPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Wardrobe Design Jharsuguda",
    "serviceType": "Interior Design / Custom Furniture",
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
      "Tailored floor-to-ceiling wardrobes featuring soft-close sliding channels, tinted glass profiles, sensor LED lighting, and anti-warp wooden frames.",
    "offers": {
      "@type": "Offer",
      "price": "120000",
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
          { name: "Wardrobe Design", url: "/wardrobe-design-jharsuguda" },
        ]}
      />

      {/* Main Content */}
      <main className="max-w-[1600px] mx-auto px-6 lg:px-12 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Visual */}
          <div className="lg:col-span-7 relative h-[45dvh] sm:h-[65dvh] w-full overflow-hidden bg-zinc-100 border border-zinc-200">
            <Image
              src="/images/wardrobe/wardrobe (1).webp"
              alt="Luxury Wardrobe Design in Jharsuguda by Interiocore"
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
                Tailored Walk-In Closets
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-foreground leading-[1.1]">
                Luxury Wardrobe Design in Jharsuguda
              </h1>
            </div>

            <div className="text-zinc-600 text-lg font-light leading-relaxed space-y-4">
              <p>
                Crafted with premium materials, soft-close hardware, and thoughtfully designed interiors for a refined everyday experience.
              </p>

              {/* TODO: Human Review Needed */}
              <p className="bg-amber-50/50 p-4 border-l-2 border-amber-400 text-sm text-zinc-700">
                {/* TODO: Human Review Needed */}
                We design hinged, sliding, and walk-in closets customized to your clothing storage needs in Jharsuguda. Featuring built-in tie racks, integrated drawer safes, sensor-activated LED clothing strips, and tinted glass aluminum shutters, every closet maximizes vertical space while remaining warp-free over decades.
              </p>
            </div>

            <div className="text-black/60 text-sm font-semibold pt-2">
              Starting ₹1.2 lakh onwards
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="https://wa.me/919776991699?text=Hi%2C%20I%27m%20interested%20in%20a%20Wardrobe%20design%20in%20Jharsuguda."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-accent text-white hover:bg-brand-accent-hover transition-colors rounded-none px-8 h-12 text-xs font-bold tracking-[0.15em] uppercase flex items-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                Discuss Wardrobe Project
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
                Custom Wardrobe Configurations
              </h2>
              <p className="text-zinc-600 font-light text-base leading-relaxed">
                Choose from contemporary sliding doors, handleless push-to-open shutters, or tinted glass walk-in wardrobe suites customized to your bedroom layout.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-2">
                <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                <h3 className="font-bold text-foreground uppercase tracking-wider text-sm">Floor-to-Ceiling Storage</h3>
                <p className="text-xs text-zinc-500 font-light">Eliminate dust gaps above closets with seamless loft storage modules.</p>
              </div>

              <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-2">
                <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                <h3 className="font-bold text-foreground uppercase tracking-wider text-sm">Tinted Glass Profile Shutters</h3>
                <p className="text-xs text-zinc-500 font-light">Sleek matte-black aluminum framed glass profile shutters with warm internal illumination.</p>
              </div>

              <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-2">
                <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                <h3 className="font-bold text-foreground uppercase tracking-wider text-sm">Soft-Close Sliding Track Systems</h3>
                <p className="text-xs text-zinc-500 font-light">Heavy-duty bottom sliding tracks for silent, effortless door gliding.</p>
              </div>

              <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-2">
                <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                <h3 className="font-bold text-foreground uppercase tracking-wider text-sm">Smart Accessories & Accessories</h3>
                <p className="text-xs text-zinc-500 font-light">Integrated trouser pull-outs, velvet jewelry trays, and lockable storage vaults.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-20 pt-16 border-t border-zinc-200">
          <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground mb-6">
            Explore Related Bedroom Interior Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/bedroom-interior-design-jharsuguda"
              className="p-6 bg-zinc-50 border border-zinc-200 hover:border-brand-accent transition-all group flex items-center justify-between"
            >
              <div>
                <h3 className="font-bold uppercase tracking-wider text-sm text-foreground group-hover:text-brand-accent">
                  Bedroom Interior Design
                </h3>
                <p className="text-xs text-zinc-500 font-light mt-1">
                  Upholstered bed backdrops, side tables, and vanity counters.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-brand-accent group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/modular-kitchen-design-jharsuguda"
              className="p-6 bg-zinc-50 border border-zinc-200 hover:border-brand-accent transition-all group flex items-center justify-between"
            >
              <div>
                <h3 className="font-bold uppercase tracking-wider text-sm text-foreground group-hover:text-brand-accent">
                  Modular Kitchen Design
                </h3>
                <p className="text-xs text-zinc-500 font-light mt-1">
                  Waterproof marine ply kitchens and custom storage systems.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-brand-accent group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 py-16 px-8 bg-zinc-900 text-white text-center flex flex-col items-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight">
            Design Your Custom Wardrobe with Interiocore
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl font-light">
            Book a consultation in Jharsuguda to view finish samples, wood textures, and 3D shutter renderings.
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
