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
      <main className="max-w-[1600px] mx-auto px-6 lg:px-12 py-12 sm:py-20">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Hero Visual */}
          <div className="lg:col-span-7 relative h-[45dvh] sm:h-[65dvh] w-full overflow-hidden bg-zinc-100 border border-zinc-200">
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

          {/* Opening Content */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold text-brand-accent uppercase tracking-[0.2em] block mb-2">
                The Heart of Your Home
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-foreground leading-[1.1]">
                Modular Kitchen in Jharsuguda, Odisha
              </h1>
            </div>

            <div className="text-zinc-600 text-lg font-light leading-relaxed space-y-4">
              <p>
                InterioCore provides comprehensive modular kitchen design and planning services in Jharsuguda tailored to your home layout, daily cooking habits, and storage requirements. Whether you are building a new home or renovating an existing kitchen, we focus on practical spatial organization, durable materials, and refined finishes.
              </p>
              <p>
                Our team guides you through every stage, including straight, L-shaped, U-shaped, parallel, and island layouts. We prioritize efficient work triangles, easy-access cabinetry, high-grade moisture-resistant plywood, and soft-close hardware designed for heavy daily use.
              </p>
              <p>
                From initial 3D design to final on-site installation, InterioCore delivers custom modular kitchen solutions across Jharsuguda that combine beauty, functional storage, and long-lasting durability.
              </p>
              <p className="font-medium text-foreground">
                Planning a modular kitchen in Jharsuguda? Let us design a space tailored to your lifestyle.
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
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* H2: Modular Kitchen Designs in Jharsuguda */}
        <section className="mt-20 sm:mt-28 pt-16 border-t border-zinc-200">
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-foreground mb-6">
            Modular Kitchen Designs in Jharsuguda
          </h2>
          <p className="text-zinc-600 font-light text-base leading-relaxed mb-8 max-w-4xl">
            Selecting the right layout is crucial for efficient workflow and smart space utilization. We plan custom kitchen layouts based on your room dimensions, plumbing outlets, and cooking preferences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-3">
              <h3 className="text-lg font-bold text-foreground uppercase tracking-wide">
                L-Shaped Modular Kitchen
              </h3>
              <p className="text-sm text-zinc-600 font-light leading-relaxed">
                Ideal for small to medium-sized homes and open-plan spaces. The L-shaped layout utilizes two adjacent walls, establishing a natural work triangle between sink, stove, and refrigerator while keeping the center area open.
              </p>
            </div>

            <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-3">
              <h3 className="text-lg font-bold text-foreground uppercase tracking-wide">
                U-Shaped Modular Kitchen
              </h3>
              <p className="text-sm text-zinc-600 font-light leading-relaxed">
                Best suited for larger kitchen spaces and dedicated rooms. The U-shaped layout surrounds the cook on three sides with countertops and wall cabinets, offering maximum storage capacity and ample counter space.
              </p>
            </div>

            <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-3">
              <h3 className="text-lg font-bold text-foreground uppercase tracking-wide">
                Parallel Modular Kitchen
              </h3>
              <p className="text-sm text-zinc-600 font-light leading-relaxed">
                Perfect for long, narrow spaces or galley layouts. Parallel kitchens feature two parallel countertops that separate prep, cooking, and washing zones for high ergonomic efficiency.
              </p>
            </div>

            <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-3">
              <h3 className="text-lg font-bold text-foreground uppercase tracking-wide">
                Straight Modular Kitchen
              </h3>
              <p className="text-sm text-zinc-600 font-light leading-relaxed">
                A compact single-wall design well-suited for studio apartments or small rooms. All cabinets, sink, and cooking appliances line up along a single wall to maximize floor space.
              </p>
            </div>

            <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-3 md:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-bold text-foreground uppercase tracking-wide">
                Island Modular Kitchen
              </h3>
              <p className="text-sm text-zinc-600 font-light leading-relaxed">
                Designed for spacious, open-concept homes. Combines an L-shaped or straight kitchen layout with an independent central island counter that serves as an extra prep zone, breakfast counter, or gathering spot.
              </p>
            </div>
          </div>
        </section>

        {/* Second Visual Showcase */}
        <section className="mt-16 relative h-[35dvh] sm:h-[50dvh] w-full overflow-hidden bg-zinc-100 border border-zinc-200">
          <Image
            src="/images/modern-modular-kitchen-jharsuguda.jpg"
            alt="Modern modular kitchen with custom storage and soft-close hardware in Jharsuguda"
            fill
            decoding="async"
            className="object-cover"
            sizes="100vw"
          />
        </section>

        {/* H2: Modular Kitchen Cost in Jharsuguda */}
        <section className="mt-16 pt-16 border-t border-zinc-200">
          <div className="max-w-4xl space-y-6">
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-foreground">
              Modular Kitchen Cost in Jharsuguda
            </h2>
            <p className="text-zinc-600 font-light text-base leading-relaxed">
              The overall cost of a modular kitchen in Jharsuguda depends on several practical factors and material preferences. Packages start from ₹1.5 lakh onwards, with final estimates determined by the following elements:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 bg-zinc-50 border border-zinc-200 space-y-1">
                <div className="flex items-center gap-2 font-semibold text-foreground text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                  Kitchen Size & Layout
                </div>
                <p className="text-xs text-zinc-500 font-light pl-6">
                  Total running feet of upper and lower cabinetry required.
                </p>
              </div>

              <div className="p-5 bg-zinc-50 border border-zinc-200 space-y-1">
                <div className="flex items-center gap-2 font-semibold text-foreground text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                  Core Materials
                </div>
                <p className="text-xs text-zinc-500 font-light pl-6">
                  Choice of Boiling Water Resistant (BWR) marine plywood versus commercial grade boards. Learn more on our <Link href="/materials-finishes" className="underline hover:text-brand-accent">materials and finishes</Link> page.
                </p>
              </div>

              <div className="p-5 bg-zinc-50 border border-zinc-200 space-y-1">
                <div className="flex items-center gap-2 font-semibold text-foreground text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                  Shutter Finishes
                </div>
                <p className="text-xs text-zinc-500 font-light pl-6">
                  High-gloss acrylic, PU polish, matte laminate, or glass-front shutters.
                </p>
              </div>

              <div className="p-5 bg-zinc-50 border border-zinc-200 space-y-1">
                <div className="flex items-center gap-2 font-semibold text-foreground text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                  Hardware & Fittings
                </div>
                <p className="text-xs text-zinc-500 font-light pl-6">
                  Soft-close hinges, tandem drawer channels, and branded motion hardware.
                </p>
              </div>

              <div className="p-5 bg-zinc-50 border border-zinc-200 space-y-1">
                <div className="flex items-center gap-2 font-semibold text-foreground text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                  Countertop Stone
                </div>
                <p className="text-xs text-zinc-500 font-light pl-6">
                  Stain-resistant quartz, natural granite, or composite stone tops.
                </p>
              </div>

              <div className="p-5 bg-zinc-50 border border-zinc-200 space-y-1">
                <div className="flex items-center gap-2 font-semibold text-foreground text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                  Storage Accessories & Appliances
                </div>
                <p className="text-xs text-zinc-500 font-light pl-6">
                  Pull-out pantry units, corner carousels, cutlery trays, built-in chimneys, and hobs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* H2: Why Choose InterioCore for Modular Kitchens in Jharsuguda? */}
        <section className="mt-16 pt-16 border-t border-zinc-200">
          <div className="max-w-4xl space-y-6">
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-foreground">
              Why Choose InterioCore for Modular Kitchens in Jharsuguda?
            </h2>
            <p className="text-zinc-600 font-light text-base leading-relaxed">
              InterioCore provides clear planning, professional design consultation, and precision execution for homeowners in Jharsuguda. We focus on genuine service delivery:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-2">
                <h3 className="font-bold text-foreground uppercase tracking-wider text-sm">Space Planning</h3>
                <p className="text-xs text-zinc-500 font-light">Custom layout planning engineered for room dimensions and smooth cooking workflows.</p>
              </div>

              <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-2">
                <h3 className="font-bold text-foreground uppercase tracking-wider text-sm">Design Consultation</h3>
                <p className="text-xs text-zinc-500 font-light">Detailed design guidance to match your functional needs, style choices, and budget.</p>
              </div>

              <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-2">
                <h3 className="font-bold text-foreground uppercase tracking-wider text-sm">3D Visualization</h3>
                <p className="text-xs text-zinc-500 font-light">Realistic 3D designs to view layout, color tones, and finishes before manufacturing starts.</p>
              </div>

              <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-2">
                <h3 className="font-bold text-foreground uppercase tracking-wider text-sm">Material Selection</h3>
                <p className="text-xs text-zinc-500 font-light">Moisture-resistant marine plywood, robust edge banding, and durable hardware options.</p>
              </div>

              <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-2">
                <h3 className="font-bold text-foreground uppercase tracking-wider text-sm">Storage Planning</h3>
                <p className="text-xs text-zinc-500 font-light">Smart organizers, cutlery drawers, bottle pull-outs, and tall pantry storage units.</p>
              </div>

              <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-2">
                <h3 className="font-bold text-foreground uppercase tracking-wider text-sm">Installation</h3>
                <p className="text-xs text-zinc-500 font-light">Precise on-site assembly and alignment by experienced installation technicians.</p>
              </div>
            </div>
          </div>
        </section>

        {/* H2: Our Modular Kitchen Design Process */}
        <section className="mt-16 pt-16 border-t border-zinc-200">
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-foreground mb-6">
            Our Modular Kitchen Design Process
          </h2>
          <p className="text-zinc-600 font-light text-base leading-relaxed mb-8 max-w-4xl">
            We follow a streamlined, step-by-step design and execution process to ensure your kitchen is completed on time and to exact specifications:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: "01", title: "Consultation", desc: "Understanding your lifestyle, requirements, and budget expectations." },
              { step: "02", title: "Measurements", desc: "Precise site measurements of walls, windows, doors, and plumbing lines." },
              { step: "03", title: "Layout Planning", desc: "Designing functional work zones and cabinet configurations." },
              { step: "04", title: "Material Selection", desc: "Choosing plywood, shutter finishes, hardware, stone, and accessories." },
              { step: "05", title: "3D Design", desc: "Creating 3D renders to visualize color tones, lighting, and finishes." },
              { step: "06", title: "Finalization", desc: "Confirming drawings, production details, and execution schedules." },
              { step: "07", title: "Installation", desc: "Professional fitting, cabinet mounting, countertop placement, and handover." },
            ].map((item) => (
              <div key={item.step} className="p-5 bg-zinc-50 border border-zinc-200 space-y-2">
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

        {/* H2: Explore Interior Design Services in Jharsuguda (Strengthened Internal Links) */}
        <section className="mt-16 pt-16 border-t border-zinc-200">
          <h2 className="text-xl sm:text-3xl font-bold uppercase tracking-tight text-foreground mb-6">
            Explore Interior Design Services in Jharsuguda
          </h2>
          <p className="text-zinc-600 font-light text-base leading-relaxed mb-8 max-w-4xl">
            In addition to modular kitchen design, InterioCore offers complete interior design solutions for every room in your home:
          </p>

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
                  Explore custom wardrobe design solutions in Jharsuguda including sliding, hinged, and walk-in closets.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-brand-accent uppercase tracking-wider">
                <span>View Wardrobe Designs</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/living-room-interior-design-jharsuguda"
              className="p-6 bg-zinc-50 border border-zinc-200 hover:border-brand-accent transition-all group flex flex-col justify-between space-y-4"
            >
              <div>
                <h3 className="font-bold uppercase tracking-wider text-sm text-foreground group-hover:text-brand-accent">
                  Living Room Interior Design
                </h3>
                <p className="text-xs text-zinc-500 font-light mt-2 leading-relaxed">
                  Discover living room interior design ideas in Jharsuguda featuring TV units, wall panelling, and seating layouts.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-brand-accent uppercase tracking-wider">
                <span>View Living Room Interiors</span>
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
                  View luxury bedroom interior design options in Jharsuguda with headboard walls, dressers, and false ceilings.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-brand-accent uppercase tracking-wider">
                <span>View Bedroom Interiors</span>
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
                  Learn about complete full home interior services in Jharsuguda for apartments, villas, and independent houses.
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
                  Browse our premium interior materials and finishes including marine ply, laminates, acrylics, and stone options.
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
                  Get in touch with our design team or book a free consultation at our Jharsuguda studio.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-brand-accent uppercase tracking-wider">
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </section>

        {/* Book Free Consultation CTA Block */}
        <section className="mt-20 py-16 px-8 bg-zinc-900 text-white text-center flex flex-col items-center space-y-6">
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
