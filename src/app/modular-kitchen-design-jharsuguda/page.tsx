import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, CheckCircle2, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Modular Kitchen Design in Jharsuguda | Interiocore",
  description:
    "Custom modular kitchen designs in Jharsuguda with waterproof marine ply, soft-close hardware, acrylic & laminate finishes. Get a free kitchen consultation today.",
  alternates: {
    canonical: "https://interiocore.com/modular-kitchen-design-jharsuguda",
  },
};

export default function ModularKitchenPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Modular Kitchen Design Jharsuguda",
    "serviceType": "Interior Design / Kitchen Remodeling",
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
      "Custom-designed modular kitchens with premium finishes, water-resistant marine plywood, tandem drawers, and German soft-close fittings tailored for Indian cooking habits.",
    "offers": {
      "@type": "Offer",
      "price": "150000",
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
          { name: "Modular Kitchen Design", url: "/modular-kitchen-design-jharsuguda" },
        ]}
      />

      {/* Main Hero / Content Section */}
      <main className="max-w-[1600px] mx-auto px-6 lg:px-12 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Main Visual */}
          <div className="lg:col-span-7 relative h-[45dvh] sm:h-[65dvh] w-full overflow-hidden bg-zinc-100 border border-zinc-200">
            <Image
              src="/images/kitchen renders/kitchen (3).webp"
              alt="Modular Kitchen Design in Jharsuguda by Interiocore"
              fill
              priority
              decoding="async"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>

          {/* Core Service Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold text-brand-accent uppercase tracking-[0.2em] block mb-2">
                The Heart of Your Home
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-foreground leading-[1.1]">
                Modular Kitchen Design in Jharsuguda
              </h1>
            </div>

            <div className="text-zinc-600 text-lg font-light leading-relaxed space-y-4">
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

            <div className="text-black/60 text-sm font-semibold pt-2">
              Starting ₹1.5 lakh onwards
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="https://wa.me/919776991699?text=Hi%2C%20I%27m%20interested%20in%20a%20Modular%20Kitchen%20design%20in%20Jharsuguda."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-accent text-white hover:bg-brand-accent-hover transition-colors rounded-none px-8 h-12 text-xs font-bold tracking-[0.15em] uppercase flex items-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                Discuss Kitchen Project
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

        {/* Detailed Features & Specifications */}
        <section className="mt-20 sm:mt-32 pt-16 border-t border-zinc-200">
          <div className="max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-foreground mb-4">
                Key Modular Kitchen Layout Options
              </h2>
              <p className="text-zinc-600 font-light text-base leading-relaxed">
                Whether you have an L-shaped, Parallel, U-shaped, or Island kitchen floor plan, our senior designers tailor every cabinet, cutlery tray, and appliance module to your exact room dimensions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-2">
                <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                <h3 className="font-bold text-foreground uppercase tracking-wider text-sm">BWR Marine Plywood</h3>
                <p className="text-xs text-zinc-500 font-light">100% water and moisture resistant ply suitable for Indian damp environments.</p>
              </div>

              <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-2">
                <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                <h3 className="font-bold text-foreground uppercase tracking-wider text-sm">Acrylic & PU Polish Shutters</h3>
                <p className="text-xs text-zinc-500 font-light">Scratch-resistant high-gloss and ultra-matte shutter options for effortless cleaning.</p>
              </div>

              <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-2">
                <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                <h3 className="font-bold text-foreground uppercase tracking-wider text-sm">Seamless Chimney & Appliance Outlets</h3>
                <p className="text-xs text-zinc-500 font-light">Integrated hood cutouts and built-in microwave unit enclosures.</p>
              </div>

              <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-2">
                <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                <h3 className="font-bold text-foreground uppercase tracking-wider text-sm">Quartz & Granite Countertops</h3>
                <p className="text-xs text-zinc-500 font-light">Stain-resistant countertop stone fitting with seamless sink jointing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links to Other Services */}
        <section className="mt-20 pt-16 border-t border-zinc-200">
          <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground mb-6">
            Explore Complementary Interior Services in Jharsuguda
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/wardrobe-design-jharsuguda"
              className="p-6 bg-zinc-50 border border-zinc-200 hover:border-brand-accent transition-all group flex items-center justify-between"
            >
              <div>
                <h3 className="font-bold uppercase tracking-wider text-sm text-foreground group-hover:text-brand-accent">
                  Luxury Wardrobe Design
                </h3>
                <p className="text-xs text-zinc-500 font-light mt-1">
                  Floor-to-ceiling closets and walk-in wardrobe solutions.
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
                  Architectural seating layouts, partition walls, and panelling.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-brand-accent group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* Book Free Consultation CTA Block */}
        <section className="mt-20 py-16 px-8 bg-zinc-900 text-white text-center flex flex-col items-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight">
            Ready to Plan Your Dream Modular Kitchen?
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl font-light">
            Contact Interiocore today for a 100% free site consultation and 3D kitchen layout quote in Jharsuguda.
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
