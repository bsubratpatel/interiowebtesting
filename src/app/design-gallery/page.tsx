import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { LazyGallery } from "@/components/LazyClientComponents";
import { getGalleryData } from "@/lib/dataFetcher";

export const metadata: Metadata = {
  title: "Interior Design Gallery & Project Portfolio | Interiocore Jharsuguda",
  description:
    "Explore Interiocore's portfolio of completed modular kitchens, wardrobes, TV units, bedroom designs, and living room interiors in Jharsuguda, Odisha.",
  alternates: {
    canonical: "https://interiocore.com/design-gallery",
  },
};

export default function DesignGalleryPage() {
  const galleryData = getGalleryData();

  return (
    <div className="bg-background text-foreground min-h-screen pt-24 sm:pt-28">
      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { name: "Design Gallery", url: "/design-gallery" },
        ]}
      />

      <main className="max-w-[1600px] mx-auto px-6 lg:px-12 py-12">
        <div className="mb-12">
          <span className="text-xs font-bold text-brand-accent uppercase tracking-[0.2em] mb-4 block">
            Project Portfolio
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tighter text-foreground leading-[1]">
            Our Curated Design Gallery
          </h1>
          <p className="text-zinc-500 font-light text-base max-w-2xl mt-4 leading-relaxed">
            Browse through real project renders and executed living spaces created for families in Jharsuguda and across Odisha.
          </p>
        </div>

        {/* Full Gallery Component */}
        <LazyGallery initialData={galleryData} />

        {/* CTA Block */}
        <section className="mt-20 py-16 px-8 bg-zinc-900 text-white text-center flex flex-col items-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight">
            Inspired by Our Portfolio?
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl font-light">
            {/* TODO: Human Review Needed */}
            Schedule a site consultation in Jharsuguda to turn your favorite gallery concepts into custom 3D designs for your home.
          </p>
          <Link
            href="/contact"
            className="bg-brand-accent hover:bg-brand-accent-hover text-white transition-colors px-10 h-14 text-xs font-bold tracking-[0.15em] uppercase flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Book Free Consultation
          </Link>
        </section>
      </main>
    </div>
  );
}
