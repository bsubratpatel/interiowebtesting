import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { LazyMaterials } from "@/components/LazyClientComponents";
import { getMaterialsData } from "@/lib/dataFetcher";

export const metadata: Metadata = {
  title: "Premium Interior Materials & Finishes Palette | Interiocore",
  description:
    "Discover Interiocore's curated collection of waterproof marine plywood, acrylics, veneers, German hardware, and quartz finishes for Jharsuguda homes.",
  alternates: {
    canonical: "https://interiocore.com/materials-finishes",
  },
};

export default function MaterialsFinishesPage() {
  const materialsData = getMaterialsData();

  return (
    <div className="bg-background text-foreground min-h-screen pt-24 sm:pt-28">
      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { name: "Materials & Finishes", url: "/materials-finishes" },
        ]}
      />

      <main className="max-w-[1600px] mx-auto px-6 lg:px-12 py-12">
        <div className="mb-12">
          <span className="text-xs font-bold text-brand-accent uppercase tracking-[0.2em] mb-4 block">
            Craftsmanship & Materials
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tighter text-foreground leading-[1]">
            Materials & Finishes Palette
          </h1>
          <p className="text-zinc-500 font-light text-base max-w-2xl mt-4 leading-relaxed">
            We use boiling-water-resistant marine ply, acrylic shutter surfaces, PU lacquers, and soft-close German hardware engineered for lifelong durability.
          </p>
        </div>

        {/* Full Materials Section Component */}
        <LazyMaterials initialData={materialsData} />

        {/* CTA Block */}
        <section className="mt-20 py-16 px-8 bg-zinc-900 text-white text-center flex flex-col items-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight">
            Touch & Feel Material Swatches
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl font-light">
            {/* TODO: Human Review Needed */}
            Visit our studio in Jharsuguda to inspect physical wood samples, hardware fittings, and quartz countertop swatches in person.
          </p>
          <Link
            href="/contact"
            className="bg-brand-accent hover:bg-brand-accent-hover text-white transition-colors px-10 h-14 text-xs font-bold tracking-[0.15em] uppercase flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Book Free Studio Consultation
          </Link>
        </section>
      </main>
    </div>
  );
}
