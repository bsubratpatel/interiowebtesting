"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const BACKUP_MATERIALS: Record<string, { id: string; src: string; title: string }[]> = {
  "materials-laminates": [
    { id: "m-lam-1", src: "/images/Materials_and_Finishes/laminates/material (1).webp", title: "Walnut Finish" },
  ],
  "materials-acrylic": [
    { id: "m-acr-1", src: "/images/Materials_and_Finishes/acrylic/material (2).webp", title: "High Gloss White" },
  ],
  "materials-veneers": [
    { id: "m-ven-1", src: "/images/Materials_and_Finishes/veneers/material (3).webp", title: "Natural Oak" },
  ],
  "materials-hardware": [
    { id: "m-hdw-1", src: "/images/Materials_and_Finishes/hardware/material (4).webp", title: "Tandem Motion Box" },
  ],
  "materials-glass": [
    { id: "m-gls-1", src: "/images/Materials_and_Finishes/glass/material (5).webp", title: "Gold Tinted Panel" },
  ],
  "materials-lighting": [
    { id: "m-lit-1", src: "/images/Materials_and_Finishes/lighting/material (6).webp", title: "Smart Profile LED" },
  ],
  "materials-countertops": [
    { id: "m-cnt-1", src: "/images/Materials_and_Finishes/countertops/material (7).webp", title: "Calacatta Quartz" },
  ],
  "materials-accessories": [
    { id: "m-acc-1", src: "/images/Materials_and_Finishes/accessories/material (8).webp", title: "Pull-out Pantry Organizer" },
  ],
};

export default function MaterialsSection({ initialData }: { initialData?: Record<string, { id: string; src: string; title: string }[]> }) {
  const [materialsData, setMaterialsData] = useState<Record<string, { id: string; src: string; title: string }[]>>(initialData || BACKUP_MATERIALS);
  const [lightboxImg, setLightboxImg] = useState<{ src: string; title: string } | null>(null);
  const [showAll, setShowAll] = useState(false);

  const handleCall = () => {
    window.location.href = "tel:+919776991699";
  };

  const handleWhatsApp = (itemTitle?: string) => {
    const text = itemTitle
      ? `Hi Interiocore! I'm interested in the material: "${itemTitle}" from your palette.`
      : "Hi Interiocore! I'd like to learn more about your material options.";
    window.open(`https://wa.me/919776991699?text=${encodeURIComponent(text)}`, "_blank");
  };

  // Flatten all categories into a single array of materials
  const allItems = Object.entries(materialsData).flatMap(([catKey, items]) => {
    return items.map(item => {
      let categoryName = "";
      let desc = "";

      if (catKey.includes("laminates")) {
        categoryName = "LAMINATE";
        desc = "Scratch-resistant matte finish suitable for kitchens and wardrobes.";
      } else if (catKey.includes("acrylic")) {
        categoryName = "ACRYLIC";
        desc = "Premium reflective high-gloss finish for modern kitchens.";
      } else if (catKey.includes("veneers")) {
        categoryName = "VENEER";
        desc = "Warm natural wood texture with elegant organic grain.";
      } else if (catKey.includes("hardware")) {
        categoryName = "HARDWARE";
        desc = "German engineered soft-close drawer slides and heavy-duty hinges.";
      } else if (catKey.includes("lighting")) {
        categoryName = "LIGHTING";
        desc = "Warm ambient LED profile light systems for clean workspace accents.";
      } else if (catKey.includes("glass")) {
        categoryName = "GLASS";
        desc = "Profile glass shutters with frosted or tinted textures for display cases.";
      } else if (catKey.includes("countertops")) {
        categoryName = "COUNTERTOP";
        desc = "Seamless quartz countertop surface, heat-resistant and stain-free.";
      } else if (catKey.includes("accessories")) {
        categoryName = "ACCESSORY";
        desc = "High-capacity dynamic storage organizers and pull-out cabinet baskets.";
      }

      // Format title e.g. "LAMINATE - Walnut Finish"
      const cleanTitle = item.title
        .replace(/Material \d+/i, "")
        .replace(/material \d+/i, "")
        .trim();

      const formattedTitle = cleanTitle 
        ? `${categoryName} - ${cleanTitle}` 
        : `${categoryName} - Premium Finish`;

      return {
        ...item,
        formattedTitle,
        desc
      };
    });
  });
  const hasMore = allItems.length > 6;
  const visibleItems = showAll ? allItems : allItems.slice(0, 6);

  return (
    <section id="materials" className="py-16 sm:py-24 lg:py-32 bg-zinc-50/60 border-b border-zinc-200/50">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20">
          <span className="text-xs font-bold text-brand-accent uppercase tracking-[0.2em] mb-4 block">05. Element Library</span>
          <h2 className="text-5xl sm:text-7xl font-extrabold uppercase tracking-tighter text-foreground leading-[1]">
            Material Palette
          </h2>
        </div>

        {/* Pinterest/Masonry Style Responsive Grid */}
        {visibleItems.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setLightboxImg({ src: item.src, title: item.formattedTitle })}
                  className="group cursor-pointer bg-white border border-zinc-200/60 rounded-[12px] p-5 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-[0.6s] ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-between"
                >
                  <div>
                    {/* Portrait Orientation Image Frame */}
                    <div className="relative aspect-[3/4] w-full overflow-hidden mb-5 bg-zinc-50 rounded-[8px] border border-zinc-100">
                      <Image
                        src={item.src}
                        alt={item.formattedTitle}
                        fill
                        loading="lazy"
                        decoding="async"
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-[1.2s] ease-[cubic-bezier(0.25,1,0.5,1)]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    
                    {/* Details Block */}
                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-foreground tracking-tight uppercase leading-snug">
                        {item.formattedTitle}
                      </h3>
                      <p className="text-zinc-600 text-xs sm:text-sm font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-brand-accent uppercase tracking-wider block mt-4 group-hover:text-brand-secondary transition-colors">
                    Enquire Now →
                  </span>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {hasMore && (
              <div className="mt-12 flex justify-center">
                <Button
                  onClick={() => setShowAll(!showAll)}
                  aria-label={showAll ? "Show fewer materials from palette" : "View more materials from palette"}
                  className="bg-brand-secondary text-white hover:bg-brand-secondary/90 transition-all active:scale-[0.98] rounded-none h-12 px-8 text-xs font-bold tracking-[0.15em] uppercase flex items-center justify-center gap-2 cursor-pointer shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50 focus-visible:ring-offset-2 duration-200"
                >
                  {showAll ? "Show Less" : "View More"}
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="py-20 text-center text-zinc-400 text-sm font-light uppercase tracking-wider">
            No material images found in directory.
          </div>
        )}
      </div>

      {/* Lightbox Overlay */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center p-4"
        >
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white border border-zinc-200 text-zinc-500 hover:text-foreground transition-colors shadow-sm cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="relative max-w-4xl w-full aspect-[4/3] rounded-none overflow-hidden border border-zinc-200 shadow-2xl bg-white">
            <Image
              src={lightboxImg.src}
              alt={lightboxImg.title}
              fill
              className="object-contain p-2"
              sizes="100vw"
            />
          </div>
          
          <div className="mt-6 flex flex-col items-center text-center space-y-4">
            <h3 className="text-2xl font-bold text-foreground">{lightboxImg.title}</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                onClick={handleCall}
                className="bg-brand-accent text-white hover:bg-brand-accent-hover transition-all rounded-full px-6 h-11 text-xs font-bold tracking-wider uppercase flex items-center gap-2 active:scale-95 duration-200"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
              <Button
                onClick={() => handleWhatsApp(lightboxImg.title)}
                className="bg-emerald-600 text-white hover:bg-emerald-700 transition-all rounded-full px-6 h-11 text-xs font-bold tracking-wider uppercase flex items-center gap-2 active:scale-95 duration-200"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Button>
              <Button
                onClick={() => setLightboxImg(null)}
                variant="outline"
                className="border-zinc-200 bg-white text-zinc-500 hover:text-foreground rounded-full px-6 h-11 text-xs font-bold tracking-wider uppercase cursor-pointer"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
