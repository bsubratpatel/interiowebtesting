import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, CheckCircle2, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Modular Kitchen in Jharsuguda, Odisha | InterioCore",
  description:
    "Looking for a modular kitchen in Jharsuguda? InterioCore designs custom L-shaped, U-shaped, parallel and straight kitchens with smart storage, quality materials and modern finishes.",
  alternates: {
    canonical: "https://interiocore.com/modular-kitchen-design-jharsuguda",
  },
};

export default function ModularKitchenPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://interiocore.com/#organization",
        "name": "InterioCore",
        "url": "https://interiocore.com",
        "logo": "https://interiocore.com/images/logo/logo.svg",
        "sameAs": ["https://www.instagram.com/interiocore/"]
      },
      {
        "@type": ["LocalBusiness", "InteriorDesigner"],
        "@id": "https://interiocore.com/#localbusiness",
        "name": "InterioCore",
        "url": "https://interiocore.com",
        "telephone": "+919776991699",
        "priceRange": "₹₹₹",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Jharsuguda",
          "addressRegion": "Odisha",
          "postalCode": "768201",
          "addressCountry": "IN"
        },
        "areaServed": [
          { "@type": "City", "name": "Jharsuguda" },
          { "@type": "City", "name": "Brajarajnagar" },
          { "@type": "City", "name": "Sambalpur" }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://interiocore.com/modular-kitchen-design-jharsuguda/#service",
        "name": "Modular Kitchen Design in Jharsuguda",
        "serviceType": "Modular Kitchen Design & Planning",
        "provider": {
          "@id": "https://interiocore.com/#localbusiness"
        },
        "areaServed": [
          { "@type": "City", "name": "Jharsuguda" },
          { "@type": "City", "name": "Brajarajnagar" },
          { "@type": "City", "name": "Sambalpur" }
        ],
        "description": "Custom L-shaped, U-shaped, parallel, straight and island modular kitchen designs in Jharsuguda with smart storage, moisture-resistant marine ply, durable hardware, and expert installation.",
        "offers": {
          "@type": "Offer",
          "price": "150000",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock"
        }
      }
    ]
  };

  return (
    <div className="bg-background text-foreground min-h-screen pt-24 sm:pt-28">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { name: "Services", url: "/#services" },
          { name: "Modular Kitchen Design", url: "/modular-kitchen-design-jharsuguda" },
        ]}
      />

      {/* Main Content */}
      <main className="max-w-[1600px] mx-auto px-6 lg:px-12 py-12 sm:py-16">
        {/* 1. Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7 relative h-[45dvh] sm:h-[60dvh] w-full overflow-hidden bg-zinc-100 border border-zinc-200">
            <Image
              src="/images/modular-kitchen-design-jharsuguda.jpg"
              alt="Modular kitchen design layout in Jharsuguda featuring modern cabinetry and stone countertops"
              fill
              priority
              decoding="async"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold text-brand-accent uppercase tracking-[0.2em] block mb-2">
                The Heart of Your Home
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-foreground leading-[1.1]">
                Modular Kitchen in Jharsuguda, Odisha
              </h1>
            </div>

            <div className="text-zinc-600 text-base sm:text-lg font-light leading-relaxed space-y-4">
              <p>
                InterioCore provides end-to-end modular kitchen design and installation in Jharsuguda. We plan functional, beautiful kitchens engineered around your space, cooking habits, and storage needs.
              </p>
              <p className="font-medium text-foreground">
                Planning a modular kitchen in Jharsuguda? Let us design a space tailored to your home.
              </p>
            </div>

            <div className="text-black/60 text-sm font-semibold pt-1">
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
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* 2. Modular Kitchen Designs in Jharsuguda */}
        <section className="mt-16 sm:mt-24 pt-12 border-t border-zinc-200">
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-foreground mb-4">
            Modular Kitchen Designs in Jharsuguda
          </h2>
          <p className="text-zinc-600 font-light text-base leading-relaxed mb-8 max-w-3xl">
            We design custom kitchen layouts tailored to your room dimensions and daily cooking routines:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-2">
              <h3 className="text-base font-bold text-foreground uppercase tracking-wide">
                L-Shaped Modular Kitchen
              </h3>
              <p className="text-xs text-zinc-600 font-light leading-relaxed">
                Best for small to medium rooms. Uses two adjoining walls to form an efficient work triangle while leaving open floor space.
              </p>
            </div>

            <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-2">
              <h3 className="text-base font-bold text-foreground uppercase tracking-wide">
                U-Shaped Modular Kitchen
              </h3>
              <p className="text-xs text-zinc-600 font-light leading-relaxed">
                Suited for larger kitchen spaces. Offers maximum storage and counter area across three surrounding walls.
              </p>
            </div>

            <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-2">
              <h3 className="text-base font-bold text-foreground uppercase tracking-wide">
                Parallel Modular Kitchen
              </h3>
              <p className="text-xs text-zinc-600 font-light leading-relaxed">
                Ideal for narrow or galley spaces. Features two parallel counters separating prep and cooking zones.
              </p>
            </div>

            <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-2">
              <h3 className="text-base font-bold text-foreground uppercase tracking-wide">
                Straight Modular Kitchen
              </h3>
              <p className="text-xs text-zinc-600 font-light leading-relaxed">
                A compact single-wall layout perfect for studio apartments or small homes with limited wall space.
              </p>
            </div>

            <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-2 md:col-span-2 lg:col-span-1">
              <h3 className="text-base font-bold text-foreground uppercase tracking-wide">
                Island Modular Kitchen
              </h3>
              <p className="text-xs text-zinc-600 font-light leading-relaxed">
                Designed for spacious open homes. Combines wall cabinetry with a freestanding central counter for prep or dining.
              </p>
            </div>
          </div>
        </section>

        {/* Visual Showcase */}
        <section className="mt-12 relative h-[30dvh] sm:h-[45dvh] w-full overflow-hidden bg-zinc-100 border border-zinc-200">
          <Image
            src="/images/modern-modular-kitchen-jharsuguda.jpg"
            alt="Modern modular kitchen with custom storage and soft-close hardware in Jharsuguda"
            fill
            decoding="async"
            className="object-cover"
            sizes="100vw"
          />
        </section>

        {/* 3. Modular Kitchen Cost in Jharsuguda */}
        <section className="mt-16 pt-12 border-t border-zinc-200">
          <div className="max-w-4xl space-y-6">
            <div>
              <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-foreground mb-3">
                Modular Kitchen Cost in Jharsuguda
              </h2>
              <p className="text-zinc-600 font-light text-base leading-relaxed">
                Packages start from ₹1.5 lakh onwards. Final pricing depends on key design specifications:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-zinc-50 border border-zinc-200 space-y-1">
                <div className="flex items-center gap-2 font-semibold text-foreground text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                  Kitchen Size & Layout
                </div>
                <p className="text-xs text-zinc-500 font-light pl-6">
                  Total running feet of base and overhead cabinetry.
                </p>
              </div>

              <div className="p-5 bg-zinc-50 border border-zinc-200 space-y-1">
                <div className="flex items-center gap-2 font-semibold text-foreground text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                  Core Materials
                </div>
                <p className="text-xs text-zinc-500 font-light pl-6">
                  Waterproof BWR marine plywood versus standard board options. Explore our <Link href="/materials-finishes" className="underline hover:text-brand-accent">materials guide</Link>.
                </p>
              </div>

              <div className="p-5 bg-zinc-50 border border-zinc-200 space-y-1">
                <div className="flex items-center gap-2 font-semibold text-foreground text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                  Shutter Finishes
                </div>
                <p className="text-xs text-zinc-500 font-light pl-6">
                  Acrylic, PU polish, matte laminate, or glass shutters.
                </p>
              </div>

              <div className="p-5 bg-zinc-50 border border-zinc-200 space-y-1">
                <div className="flex items-center gap-2 font-semibold text-foreground text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                  Hardware & Accessories
                </div>
                <p className="text-xs text-zinc-500 font-light pl-6">
                  Soft-close hinges, tandem drawers, pantry pull-outs, and countertop stone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Why Choose InterioCore for Modular Kitchens in Jharsuguda? */}
        <section className="mt-16 pt-12 border-t border-zinc-200">
          <div className="max-w-4xl space-y-6">
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-foreground">
              Why Choose InterioCore for Modular Kitchens in Jharsuguda?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-2">
                <h3 className="font-bold text-foreground uppercase tracking-wider text-sm">Tailored Space Planning</h3>
                <p className="text-xs text-zinc-500 font-light leading-relaxed">
                  Every cabinet layout is calculated to match your room dimensions and kitchen ergonomics.
                </p>
              </div>

              <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-2">
                <h3 className="font-bold text-foreground uppercase tracking-wider text-sm">Durable Water-Resistant Build</h3>
                <p className="text-xs text-zinc-500 font-light leading-relaxed">
                  We use Boiling Water Resistant (BWR) marine ply and moisture-proof edge banding for longevity.
                </p>
              </div>

              <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-2">
                <h3 className="font-bold text-foreground uppercase tracking-wider text-sm">Transparent Pricing</h3>
                <p className="text-xs text-zinc-500 font-light leading-relaxed">
                  Detailed cost estimates with itemized material and hardware specs before execution begins.
                </p>
              </div>

              <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-2">
                <h3 className="font-bold text-foreground uppercase tracking-wider text-sm">End-to-End Project Care</h3>
                <p className="text-xs text-zinc-500 font-light leading-relaxed">
                  From site measurements to clean installation, our local team manages the entire process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Our Modular Kitchen Design Process */}
        <section className="mt-16 pt-12 border-t border-zinc-200">
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-foreground mb-6">
            Our Modular Kitchen Design Process
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: "01", title: "Consultation", desc: "Understanding your lifestyle and budget." },
              { step: "02", title: "Measurements", desc: "Site survey of room dimensions and plumbing." },
              { step: "03", title: "Layout Planning", desc: "Zoning work areas and cabinet positions." },
              { step: "04", title: "Material Selection", desc: "Choosing plywood, shutters, and hardware." },
              { step: "05", title: "3D Design", desc: "Creating renders to preview colors and finish." },
              { step: "06", title: "Finalization", desc: "Confirming drawings and timelines." },
              { step: "07", title: "Installation", desc: "On-site assembly and handover." },
            ].map((item) => (
              <div key={item.step} className="p-4 bg-zinc-50 border border-zinc-200 space-y-1.5">
                <span className="text-xs font-bold text-brand-accent tracking-widest uppercase">
                  Step {item.step}
                </span>
                <h3 className="font-bold text-foreground uppercase tracking-wider text-sm">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-500 font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-zinc-100 border border-zinc-200 text-xs sm:text-sm text-foreground font-medium text-center overflow-x-auto">
            Consultation &rarr; Measurements &rarr; Layout Planning &rarr; Material Selection &rarr; 3D Design &rarr; Finalization &rarr; Installation
          </div>
        </section>

        {/* 6. Explore Interior Design Services in Jharsuguda */}
        <section className="mt-16 pt-12 border-t border-zinc-200">
          <h2 className="text-xl sm:text-3xl font-bold uppercase tracking-tight text-foreground mb-6">
            Explore Interior Design Services in Jharsuguda
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/wardrobe-design-jharsuguda"
              className="p-6 bg-zinc-50 border border-zinc-200 hover:border-brand-accent transition-all group flex flex-col justify-between space-y-4"
            >
              <div>
                <h3 className="font-bold uppercase tracking-wider text-sm text-foreground group-hover:text-brand-accent">
                  Wardrobe Design
                </h3>
                <p className="text-xs text-zinc-500 font-light mt-2 leading-relaxed">
                  Sliding, hinged, and walk-in closet solutions in Jharsuguda.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-brand-accent uppercase tracking-wider">
                <span>View Wardrobes</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/living-room-interior-design-jharsuguda"
              className="p-6 bg-zinc-50 border border-zinc-200 hover:border-brand-accent transition-all group flex flex-col justify-between space-y-4"
            >
              <div>
                <h3 className="font-bold uppercase tracking-wider text-sm text-foreground group-hover:text-brand-accent">
                  Living Room Interior
                </h3>
                <p className="text-xs text-zinc-500 font-light mt-2 leading-relaxed">
                  TV units, wall panelling, and seating layouts in Jharsuguda.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-brand-accent uppercase tracking-wider">
                <span>View Living Rooms</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/bedroom-interior-design-jharsuguda"
              className="p-6 bg-zinc-50 border border-zinc-200 hover:border-brand-accent transition-all group flex flex-col justify-between space-y-4"
            >
              <div>
                <h3 className="font-bold uppercase tracking-wider text-sm text-foreground group-hover:text-brand-accent">
                  Bedroom Interior
                </h3>
                <p className="text-xs text-zinc-500 font-light mt-2 leading-relaxed">
                  Headboard walls, dressers, and false ceilings in Jharsuguda.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-brand-accent uppercase tracking-wider">
                <span>View Bedrooms</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/full-home-interior-jharsuguda"
              className="p-6 bg-zinc-50 border border-zinc-200 hover:border-brand-accent transition-all group flex flex-col justify-between space-y-4"
            >
              <div>
                <h3 className="font-bold uppercase tracking-wider text-sm text-foreground group-hover:text-brand-accent">
                  Full Home Interior
                </h3>
                <p className="text-xs text-zinc-500 font-light mt-2 leading-relaxed">
                  Complete turn-key interior design for apartments and villas.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-brand-accent uppercase tracking-wider">
                <span>View Full Home Interiors</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/materials-finishes"
              className="p-6 bg-zinc-50 border border-zinc-200 hover:border-brand-accent transition-all group flex flex-col justify-between space-y-4"
            >
              <div>
                <h3 className="font-bold uppercase tracking-wider text-sm text-foreground group-hover:text-brand-accent">
                  Materials & Finishes
                </h3>
                <p className="text-xs text-zinc-500 font-light mt-2 leading-relaxed">
                  Marine ply, laminates, acrylics, and stone surface finishes.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-brand-accent uppercase tracking-wider">
                <span>Browse Materials</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/contact"
              className="p-6 bg-zinc-50 border border-zinc-200 hover:border-brand-accent transition-all group flex flex-col justify-between space-y-4"
            >
              <div>
                <h3 className="font-bold uppercase tracking-wider text-sm text-foreground group-hover:text-brand-accent">
                  Contact Our Studio
                </h3>
                <p className="text-xs text-zinc-500 font-light mt-2 leading-relaxed">
                  Book a consultation or call our Jharsuguda design team.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-brand-accent uppercase tracking-wider">
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </section>

        {/* 7. Final CTA */}
        <section className="mt-16 py-16 px-8 bg-zinc-900 text-white text-center flex flex-col items-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight">
            Ready to Plan Your Dream Modular Kitchen?
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl font-light">
            Contact InterioCore today for a site consultation and modular kitchen design plan in Jharsuguda.
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
