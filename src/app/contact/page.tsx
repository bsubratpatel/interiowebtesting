import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import ContactActionButtons from "@/components/ContactActionButtons";

export const metadata: Metadata = {
  title: "Contact InterioCore | Interior Design Studio in Jharsuguda",
  description:
    "Contact InterioCore for interior design services in Jharsuguda, Odisha. Get a free consultation for modular kitchens, wardrobes, TV units and complete home interiors.",
  alternates: {
    canonical: "https://interiocore.com/contact",
  },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "InterioCore",
    "description":
      "Contact InterioCore for interior design services in Jharsuguda, Odisha. Get a free consultation for modular kitchens, wardrobes, TV units and complete home interiors.",
    "telephone": "+919776991699",
    "url": "https://interiocore.com/contact",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jharsuguda",
      "addressRegion": "Odisha",
      "addressCountry": "IN",
    },
    "areaServed": [
      "Jharsuguda",
      "Sambalpur",
      "Rourkela",
      "Sundargarh",
      "Bargarh",
    ],
  };

  return (
    <div className="bg-background text-foreground min-h-screen pt-24 sm:pt-28">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { name: "Contact Us", url: "/contact" },
        ]}
      />

      <main>
        {/* 1. HERO SECTION */}
        <section className="py-12 sm:py-16 bg-white border-b border-zinc-200/60">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
            <span className="text-xs font-bold text-brand-accent uppercase tracking-[0.2em] mb-3 block">
              CONTACT INTERIOCORE
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-foreground leading-[1.08]">
              Contact InterioCore
            </h1>
            <p className="text-base sm:text-lg font-semibold text-brand-accent mt-2">
              Interior Design Studio in Jharsuguda, Odisha
            </p>
            <p className="text-zinc-600 font-light text-base sm:text-lg max-w-2xl mt-3 leading-relaxed">
              Tell us what you want to design. Share a few details and our team will get in touch with you.
            </p>
          </div>
        </section>

        {/* 2. MAIN CONTACT SECTION */}
        <section className="py-12 sm:py-20 bg-zinc-50/50">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              
              {/* LEFT: Contact Form (Primary Visual Focus) */}
              <div className="lg:col-span-7">
                <ContactForm />
              </div>

              {/* RIGHT: Contact Information & Direct Contact Options */}
              <div className="lg:col-span-5">
                <div className="bg-white border border-zinc-200/80 p-6 sm:p-10 shadow-sm space-y-8">
                  {/* Section Heading & Supporting Text */}
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-foreground leading-tight">
                      LET&apos;S TALK ABOUT YOUR HOME
                    </h2>
                    <p className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed mt-2">
                      Have a question or want to discuss your interior design requirement? You can also contact us directly.
                    </p>
                  </div>

                  {/* Phone Section */}
                  <div className="pt-2">
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-zinc-500 block mb-1">
                      PHONE
                    </span>
                    <a
                      href="tel:+919776991699"
                      className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground hover:text-brand-accent transition-colors block"
                      aria-label="Call +91 9776991699"
                    >
                      +91 9776991699
                    </a>
                  </div>

                  {/* Action Buttons: CALL NOW & WHATSAPP US */}
                  <ContactActionButtons />

                  {/* Studio Location Section */}
                  <div className="pt-6 border-t border-zinc-200/80">
                    <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-zinc-500 block mb-2">
                      STUDIO LOCATION
                    </h3>
                    <p className="text-sm font-semibold text-foreground">
                      InterioCore
                    </p>
                    <p className="text-xs text-zinc-500 font-light mt-0.5">
                      Interior Design Studio
                    </p>
                    <p className="text-xs text-zinc-600 font-normal mt-0.5">
                      Jharsuguda, Odisha, India
                    </p>
                    <a
                      href="https://maps.google.com/?q=Jharsuguda,Odisha,India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-accent uppercase tracking-wider mt-2.5 hover:underline"
                    >
                      <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                      Get Directions
                      <ArrowRight className="w-3 h-3" aria-hidden="true" />
                    </a>
                  </div>

                  {/* Services with Internal Links */}
                  <div className="pt-6 border-t border-zinc-200/80">
                    <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-zinc-500 block mb-3">
                      SERVICES
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-semibold uppercase tracking-wider">
                      <li>
                        <Link
                          href="/modular-kitchen-design-jharsuguda"
                          className="text-zinc-700 hover:text-brand-accent transition-colors flex items-center gap-2 group"
                        >
                          <span className="w-1.5 h-1.5 bg-brand-accent shrink-0"></span>
                          <span>Modular Kitchen</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/wardrobe-design-jharsuguda"
                          className="text-zinc-700 hover:text-brand-accent transition-colors flex items-center gap-2 group"
                        >
                          <span className="w-1.5 h-1.5 bg-brand-accent shrink-0"></span>
                          <span>Wardrobe</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/tv-unit-design-jharsuguda"
                          className="text-zinc-700 hover:text-brand-accent transition-colors flex items-center gap-2 group"
                        >
                          <span className="w-1.5 h-1.5 bg-brand-accent shrink-0"></span>
                          <span>TV Unit</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/full-home-interior-jharsuguda"
                          className="text-zinc-700 hover:text-brand-accent transition-colors flex items-center gap-2 group"
                        >
                          <span className="w-1.5 h-1.5 bg-brand-accent shrink-0"></span>
                          <span>Complete Home Interior</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Service Area Section */}
                  <div className="pt-6 border-t border-zinc-200/80">
                    <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-zinc-500 block mb-2">
                      ON-SITE SERVICE
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-foreground tracking-wide">
                      Jharsuguda · Sambalpur · Rourkela · Sundargarh · Bargarh
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
