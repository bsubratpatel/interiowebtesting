"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, Phone, MessageCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const BACKUP_GALLERY: Record<string, { id: string; src: string; title: string }[]> = {
  "gallery-kitchens": [
    { id: "k1", src: "/images/kitchen renders/kitchen (1).webp", title: "Minimalist Handleless Kitchen" },
    { id: "k2", src: "/images/kitchen renders/kitchen (2).webp", title: "Monochrome Matte Kitchen" },
    { id: "k3", src: "/images/kitchen renders/kitchen (3).webp", title: "Italian Granite Island Kitchen" },
    { id: "k4", src: "/images/kitchen renders/kitchen (4).webp", title: "Warm Oak Modular Kitchen" },
    { id: "k5", src: "/images/kitchen renders/kitchen (5).webp", title: "Industrial Open Kitchen Layout" },
    { id: "k6", src: "/images/kitchen renders/kitchen (6).webp", title: "Premium Quartz Island Counter" },
    { id: "k7", src: "/images/kitchen renders/kitchen (7).webp", title: "Glossy Grey Parallel Kitchen" },
    { id: "k8", src: "/images/kitchen renders/kitchen (8).webp", title: "Contemporary High-rise Kitchen" },
    { id: "k9", src: "/images/kitchen renders/kitchen (9).webp", title: "Sleek Glass Cabinets Kitchen" },
    { id: "k10", src: "/images/kitchen renders/kitchen (10).webp", title: "Modern Carbon Kitchen Hub" },
    { id: "k11", src: "/images/kitchen renders/kitchen (11).webp", title: "Bespoke Bronze Accent Kitchen" },
  ],
  "gallery-tv": [
    { id: "t1", src: "/images/tv unit/tv unit (1).webp", title: "Fluted Slate TV Panel" },
    { id: "t2", src: "/images/tv unit/tv unit (2).webp", title: "Floating Veneer TV Console" },
    { id: "t3", src: "/images/tv unit/tv unit (3).webp", title: "Minimal Marble Backdrop Unit" },
    { id: "t4", src: "/images/tv unit/tv unit (4).webp", title: "Lacquered Glass Panel TV Unit" },
    { id: "t5", src: "/images/tv unit/tv unit (5).webp", title: "Charcoal Panel Floating TV Hub" },
  ],
  "gallery-wardrobes": [
    { id: "w1", src: "/images/wardrobe/wardrobe (1).webp", title: "Textured Leatherette Wardrobe" },
    { id: "w2", src: "/images/wardrobe/wardrobe (2).webp", title: "Lacquered Sliding Glass Closet" },
    { id: "w4", src: "/images/wardrobe/wardrobe (4).webp", title: "Matte Slate Finished Wardrobe" },
    { id: "w5", src: "/images/wardrobe/wardrobe (5).webp", title: "Premium Rose Gold Profile Wardrobe" },
    { id: "w7", src: "/images/wardrobe/wardrobe (7).webp", title: "Fluted Accent Sliding Wardrobe" },
    { id: "w8", src: "/images/wardrobe/wardrobe (8).webp", title: "Geometric Pattern Modular Wardrobe" },
    { id: "w9", src: "/images/wardrobe/wardrobe (9).webp", title: "Bespoke Walnut Walk-in Wardrobe" },
  ],
  "gallery-bedrooms": [
    { id: "b1", src: "/images/bedroom/bedroom (1).webp", title: "Minimal Walk-in Dressing Room" },
    { id: "b2", src: "/images/bedroom/bedroom (2).webp", title: "Luxury Glass Wardrobe Frame" },
    { id: "b3", src: "/images/bedroom/bedroom (3).webp", title: "Floor-to-ceiling Hinged Closet" },
    { id: "b4", src: "/images/bedroom/bedroom (4).webp", title: "Minimalist Sand Grain Finish Closet" },
    { id: "b5", src: "/images/bedroom/bedroom (5).webp", title: "Velvet Panel Master Suite" },
    { id: "b6", src: "/images/bedroom/bedroom (6).webp", title: "Profile Glass Closet Layout" },
    { id: "b7", src: "/images/bedroom/bedroom (7).webp", title: "High-end Bedside Panel System" },
    { id: "b8", src: "/images/bedroom/bedroom (8).webp", title: "Sleek Accent Dressing Mirror" },
  ],
  "gallery-living": [
    { id: "l1", src: "/images/living room/living_room (1).webp", title: "Luxury Calacatta Living Space" },
    { id: "l2", src: "/images/kitchen renders/kitchen (10).webp", title: "Modern Carbon Kitchen Hub" },
    { id: "l3", src: "/images/kitchen renders/kitchen (5).webp", title: "Industrial Open Living Layout" },
    { id: "l4", src: "/images/kitchen renders/kitchen (9).webp", title: "Sleek Glass Cabinets Divider" },
  ]
};

const galleryCategories = [
  {
    id: "gallery-kitchens",
    title: "Luxury Kitchens",
    subtitle: "Precision Culinary Hubs",
    desc: "German engineered handleless designs, quartz islands, and high-performance layouts built for clean minimalism.",
  },
  {
    id: "gallery-tv",
    title: "TV Units",
    subtitle: "Aesthetic Entertainment Walls",
    desc: "Seamless floating panels featuring wood veneers, charcoal slates, and integrated cable routing.",
  },
  {
    id: "gallery-wardrobes",
    title: "Premium Wardrobes",
    subtitle: "Bespoke Storage Architectures",
    desc: "Lacquered sliding glass configurations and matte finishes designed for high-efficiency dressing layout.",
  },
  {
    id: "gallery-bedrooms",
    title: "Luxury Bedrooms",
    subtitle: "Intimate Resting Suites",
    desc: "Integrated dressers, walk-in closets, and minimal acoustic partitions providing absolute luxury.",
  },
  {
    id: "gallery-living",
    title: "Sleek Living Rooms",
    subtitle: "Social Statement Areas",
    desc: "Open plan layouts, custom divider units, and contemporary panel details creating visual flow.",
  },
];

export default function GallerySection() {
  const [galleryData, setGalleryData] = useState<Record<string, { id: string; src: string; title: string }[]>>(BACKUP_GALLERY);
  const [visibleCounts, setVisibleCounts] = useState<Record<string, number>>({
    "gallery-kitchens": 6,
    "gallery-tv": 6,
    "gallery-wardrobes": 6,
    "gallery-bedrooms": 6,
    "gallery-living": 6,
  });
  const [lightboxImg, setLightboxImg] = useState<{ src: string; title: string } | null>(null);

  useEffect(() => {
    async function loadImages() {
      try {
        const res = await fetch("/api/gallery");
        if (res.ok) {
          const data = await res.json();
          // Merge API data to replace our backup mapping if valid
          setGalleryData(prev => ({ ...prev, ...data }));
        }
      } catch (err) {
        console.error("Failed to load gallery images dynamically, using backup:", err);
      }
    }
    loadImages();
  }, []);

  const handleCall = () => {
    window.location.href = "tel:+919776991699";
  };

  const handleWhatsApp = (itemTitle?: string) => {
    const text = itemTitle
      ? `Hi Interiocore! I'm interested in the "${itemTitle}" design from your gallery.`
      : "Hi Interiocore! I'd like to learn more about your designs.";
    window.open(`https://wa.me/919776991699?text=${encodeURIComponent(text)}`, "_blank");
  };

  const toggleViewCount = (categoryId: string, totalCount: number) => {
    const isShowingAll = (visibleCounts[categoryId] || 6) >= totalCount;
    setVisibleCounts(prev => ({
      ...prev,
      [categoryId]: isShowingAll ? 6 : totalCount,
    }));
  };

  return (
    <div className="bg-zinc-50/60">
      {/* Global Section Header */}
      <section className="pt-24 max-w-[1600px] mx-auto px-6 lg:px-12">
        <span className="text-xs font-bold text-brand-accent uppercase tracking-[0.2em] mb-4 block">03. Showcase</span>
        <h2 className="text-5xl sm:text-7xl font-extrabold uppercase tracking-tighter text-foreground leading-[1]">
          Curated Spaces
        </h2>
      </section>

      {/* Stack of Gallery Sections */}
      {galleryCategories.map((category, idx) => {
        const items = galleryData[category.id] || [];
        const totalCount = items.length;
        const visibleCount = visibleCounts[category.id] || 6;
        const visibleItems = items.slice(0, visibleCount);
        const hasMore = totalCount > 6;
        const isShowingAll = visibleCount >= totalCount;

        return (
          <section 
            id={category.id} 
            key={category.id} 
            className="py-16 sm:py-24 lg:py-32 border-b border-zinc-200/50 max-w-[1600px] mx-auto px-6 lg:px-12"
          >
            {/* Header block for each category */}
            <div className="mb-12">
              <span className="text-xs font-bold text-brand-accent uppercase tracking-[0.2em] mb-3 block">
                03.{idx + 1} Gallery Category
              </span>
              <h3 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tighter text-foreground leading-[1] mb-4">
                {category.title}
              </h3>
              <p className="text-zinc-500 font-light text-base max-w-2xl leading-relaxed">
                {category.desc}
              </p>
            </div>

            {/* Grid of Images (Responsive layout: 2 cols on mobile/tablet, 3-4 on desktop) */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {visibleItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative aspect-[3/4] overflow-hidden bg-zinc-100 cursor-pointer shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-[0.6s] ease-[cubic-bezier(0.25,1,0.5,1)]"
                  onClick={() => setLightboxImg({ src: item.src, title: item.title })}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    loading="lazy"
                    className="object-cover group-hover:scale-[1.04] transition-transform duration-[1.2s] ease-[cubic-bezier(0.25,1,0.5,1)]"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-4 sm:p-6">
                    <h4 className="text-sm sm:text-lg font-bold text-white tracking-tight leading-tight">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            {/* View More / Show Less Pagination Button */}
            {hasMore && (
              <div className="mt-12 flex justify-center">
                <Button
                  onClick={() => toggleViewCount(category.id, totalCount)}
                  variant="outline"
                  className="rounded-none border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white transition-colors duration-300 px-8 h-12 text-xs font-bold uppercase tracking-[0.15em] flex items-center gap-2 cursor-pointer"
                >
                  {isShowingAll ? (
                    <>
                      Show Less
                      <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      View More
                      <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>
            )}
          </section>
        );
      })}

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
    </div>
  );
}
