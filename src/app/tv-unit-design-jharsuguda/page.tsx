import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, CheckCircle2, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Custom TV Unit & Wall Console Design in Jharsuguda | Interiocore",
  description:
    "Bespoke entertainment wall consoles, TV panel designs, marble & fluted panel backdrops in Jharsuguda. Contact Interiocore for custom living room consoles.",
  alternates: {
    canonical: "https://interiocore.com/tv-unit-design-jharsuguda",
  },
};

export default function TVUnitDesignPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "TV Unit Design Jharsuguda",
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
      "Bespoke entertainment wall consoles featuring acoustic fluted panels, concealed wire conduits, integrated LED backlighting, and sleek floating drawer units.",
    "offers": {
      "@type": "Offer",
      "price": "45000",
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
          { name: "TV Unit Design", url: "/tv-unit-design-jharsuguda" },
        ]}
      />

      {/* Main Content */}
      <main className="max-w-[1600px] mx-auto px-6 lg:px-12 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Visual */}
          <div className="lg:col-span-7 relative h-[45dvh] sm:h-[65dvh] w-full overflow-hidden bg-zinc-100 border border-zinc-200">
            <Image
              src="/images/tv unit/tv unit (1).webp"
              alt="Custom TV Unit Design in Jharsuguda by Interiocore"
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
                Seamless Entertainment Consoles
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-foreground leading-[1.1]">
                TV Unit Design in Jharsuguda
              </h1>
            </div>

            <div className="text-zinc-600 text-lg font-light leading-relaxed space-y-4">
              <p>
                Bespoke entertainment units crafted with premium materials, ambient lighting, and smart storage to complement contemporary interiors.
              </p>

              {/* TODO: Human Review Needed */}
              <p className="bg-amber-50/50 p-4 border-l-2 border-amber-400 text-sm text-zinc-700">
                {/* TODO: Human Review Needed */}
                Our TV wall units transform standard media rooms into architectural centerpieces in Jharsuguda homes. We blend charcoal acoustic louvers, Italian marble-laminate feature backdrops, hidden wire chase channels, and push-to-open soundbar drawers to deliver clutter-free elegance.
              </p>
            </div>

            <div className="text-black/60 text-sm font-semibold pt-2">
              Starting ₹45,000 onwards
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="https://wa.me/919776991699?text=Hi%2C%20I%27m%20interested%20in%20a%20TV%20Unit%20design%20in%20Jharsuguda."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-accent text-white hover:bg-brand-accent-hover transition-colors rounded-none px-8 h-12 text-xs font-bold tracking-[0.15em] uppercase flex items-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                Discuss TV Unit Project
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
                Architectural Wall Panelling & Console Options
              </h2>
              <p className="text-zinc-600 font-light text-base leading-relaxed">
                Whether for living rooms or master bedrooms, our entertainment consoles integrate ambient lighting strips and floating cabinets for modern aesthetics.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-2">
                <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                <h3 className="font-bold text-foreground uppercase tracking-wider text-sm">Fluted & Louvered Panels</h3>
                <p className="text-xs text-zinc-500 font-light">Charcoal & wooden acoustic louvers for tactile texture depth behind television displays.</p>
              </div>

              <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-2">
                <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                <h3 className="font-bold text-foreground uppercase tracking-wider text-sm">Concealed Cable Routing</h3>
                <p className="text-xs text-zinc-500 font-light">Hidden internal PVC channels ensuring zero exposed power or HDMI cables.</p>
              </div>

              <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-2">
                <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                <h3 className="font-bold text-foreground uppercase tracking-wider text-sm">Warm COB LED Strip Backlighting</h3>
                <p className="text-xs text-zinc-500 font-light">Diffused cove lighting installed along console edges for glare-free night viewing.</p>
              </div>

              <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-2">
                <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                <h3 className="font-bold text-foreground uppercase tracking-wider text-sm">Floating Credenza Storage</h3>
                <p className="text-xs text-zinc-500 font-light">Wall-hung floating drawers that allow seamless floor cleaning underneath.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-20 pt-16 border-t border-zinc-200">
          <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground mb-6">
            Explore Related Living Room Interior Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/living-room-interior-design-jharsuguda"
              className="p-6 bg-zinc-50 border border-zinc-200 hover:border-brand-accent transition-all group flex items-center justify-between"
            >
              <div>
                <h3 className="font-bold uppercase tracking-wider text-sm text-foreground group-hover:text-brand-accent">
                  Living Room Interior Design
                </h3>
                <p className="text-xs text-zinc-500 font-light mt-1">
                  Full hall redesign, custom wall accents, and ceiling layouts.
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
                  Custom modular kitchens with German hardware & waterproof marine ply.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-brand-accent group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 py-16 px-8 bg-zinc-900 text-white text-center flex flex-col items-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight">
            Upgrade Your Living Room TV Wall Console
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl font-light">
            Contact Interiocore in Jharsuguda to schedule a site measurement and 3D TV console consultation.
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
