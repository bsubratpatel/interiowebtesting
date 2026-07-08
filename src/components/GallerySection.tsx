"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronDown, ChevronUp } from "lucide-react";

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
    tabLabel: "Kitchens",
    subtitle: "Precision Culinary Hubs",
    desc: (
      <>
        <span className="block font-medium text-foreground mb-1">Elegant. Functional. Timeless.</span>
        Custom-designed kitchens with premium finishes, seamless storage, and precision craftsmanship for modern living.
      </>
    ),
  },
  {
    id: "gallery-tv",
    title: "TV Units",
    tabLabel: "TV Units",
    subtitle: "Aesthetic Entertainment Walls",
    desc: "Bespoke entertainment units crafted with premium materials, ambient lighting, and smart storage to complement contemporary interiors.",
  },
  {
    id: "gallery-wardrobes",
    title: "Premium Wardrobes",
    tabLabel: "Wardrobes",
    subtitle: "Bespoke Storage Architectures",
    desc: "Crafted with premium materials, soft-close hardware, and thoughtfully designed interiors for a refined everyday experience.",
  },
  {
    id: "gallery-bedrooms",
    title: "Luxury Bedrooms",
    tabLabel: "Bedrooms",
    subtitle: "Intimate Resting Suites",
    desc: "Integrated dressers, walk-in closets, and minimal acoustic partitions providing absolute luxury.",
  },
  {
    id: "gallery-living",
    title: "Sleek Living Rooms",
    tabLabel: "Living Rooms",
    subtitle: "Social Statement Areas",
    desc: "Bespoke living room interiors featuring refined materials, custom furnishings, and sophisticated details that create a warm, inviting atmosphere.",
  },
];

export default function GallerySection({ initialData }: { initialData?: Record<string, { id: string; src: string; title: string }[]> }) {
  const [galleryData, setGalleryData] = useState<Record<string, { id: string; src: string; title: string }[]>>(initialData || BACKUP_GALLERY);
  const [visibleCounts, setVisibleCounts] = useState<Record<string, number>>({
    "gallery-kitchens": 6,
    "gallery-tv": 6,
    "gallery-wardrobes": 6,
    "gallery-bedrooms": 6,
    "gallery-living": 6,
  });

  const [activeTab, setActiveTab] = useState("gallery-kitchens");
  const [loadingCategories, setLoadingCategories] = useState<Record<string, boolean>>({});
  const [lightboxState, setLightboxState] = useState<{ categoryId: string; index: number } | null>(null);

  // Sync hash to active tab on mount and updates
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && galleryCategories.some(cat => cat.id === hash)) {
        setActiveTab(hash);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // check on mount
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const toggleViewCount = (categoryId: string, totalCount: number) => {
    const isShowingAll = (visibleCounts[categoryId] || 6) >= totalCount;
    if (isShowingAll) {
      setVisibleCounts(prev => ({
        ...prev,
        [categoryId]: 6,
      }));
    } else {
      setLoadingCategories(prev => ({ ...prev, [categoryId]: true }));
      setTimeout(() => {
        setVisibleCounts(prev => ({
          ...prev,
          [categoryId]: totalCount,
        }));
        setLoadingCategories(prev => ({ ...prev, [categoryId]: false }));
      }, 800);
    }
  };

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    window.history.pushState(null, "", `#${tabId}`);
  };

  const getCategoryName = (id: string) => {
    switch (id) {
      case "gallery-kitchens": return "kitchens";
      case "gallery-tv": return "tv-units";
      case "gallery-wardrobes": return "wardrobes";
      case "gallery-bedrooms": return "bedrooms";
      case "gallery-living": return "living-rooms";
      default: return id;
    }
  };

  const handleNext = () => {
    setLightboxState((prev) => {
      if (!prev) return null;
      const { categoryId, index } = prev;
      const items = galleryData[categoryId] || [];
      if (items.length === 0) return prev;
      return {
        categoryId,
        index: (index + 1) % items.length,
      };
    });
  };

  const handlePrev = () => {
    setLightboxState((prev) => {
      if (!prev) return null;
      const { categoryId, index } = prev;
      const items = galleryData[categoryId] || [];
      if (items.length === 0) return prev;
      return {
        categoryId,
        index: (index - 1 + items.length) % items.length,
      };
    });
  };

  // Keyboard navigation inside lightbox
  useEffect(() => {
    if (!lightboxState) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxState(null);
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxState]);

  // Touch Swipe navigation
  const touchStartX = React.useRef<number | null>(null);
  const touchEndX = React.useRef<number | null>(null);
  const touchStartY = React.useRef<number | null>(null);
  const touchEndY = React.useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchStartY.current = e.targetTouches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
    touchEndY.current = e.targetTouches[0].clientY;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null && touchStartY.current !== null && touchEndY.current !== null) {
      const diffX = touchStartX.current - touchEndX.current;
      const diffY = touchStartY.current - touchEndY.current;

      if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 50) {
          handleNext();
        } else if (diffX < -50) {
          handlePrev();
        }
      } else {
        if (diffY < -50) {
          setLightboxState(null);
        }
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
    touchStartY.current = null;
    touchEndY.current = null;
  };

  return (
    <div className="bg-zinc-50/60">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes fadeInReal {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 200ms ease forwards;
        }
        .animate-pulse-custom {
          animation: pulse 1.2s ease-in-out infinite;
        }
        .animate-fade-in-150 {
          animation: fadeInReal 150ms ease forwards;
        }
      `}</style>

      {/* Global Section Header */}
      <section className="pt-24 max-w-[1600px] mx-auto px-6 lg:px-12">
        <span className="text-xs font-bold text-brand-accent uppercase tracking-[0.2em] mb-4 block">Showcase</span>
        <h2 className="text-5xl sm:text-7xl font-extrabold uppercase tracking-tighter text-foreground leading-[1] mb-8">
          Curated Spaces
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-4 md:gap-8 border-b border-zinc-200">
          {galleryCategories.map((category) => {
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => handleTabClick(category.id)}
                className={`py-3 text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-150 ease border-b-2 cursor-pointer ${
                  isActive
                    ? "text-[#C4511A] border-[#C4511A]"
                    : "text-zinc-400 border-transparent hover:text-[#C4511A]"
                }`}
              >
                {category.tabLabel}
              </button>
            );
          })}
        </div>
      </section>

      {/* Stack of Gallery Sections */}
      {galleryCategories
        .filter((cat) => cat.id === activeTab)
        .map((category) => {
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
                  Gallery Category
                </span>
                <h3 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tighter text-foreground leading-[1] mb-4">
                  {category.title}
                </h3>
                <p className="text-zinc-500 font-light text-base max-w-2xl leading-relaxed">
                  {category.desc}
                </p>
              </div>

              {/* Grid of Images */}
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {visibleItems.map((item, index) => {
                  const isNew = index >= 6;
                  return (
                    <div
                      key={item.id}
                      data-gallery={getCategoryName(category.id)}
                      className={`group relative aspect-[3/4] overflow-hidden bg-zinc-100 cursor-pointer shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-[0.6s] ease-[cubic-bezier(0.25,1,0.5,1)] ${
                        isNew ? "animate-fade-in-150" : ""
                      }`}
                      onClick={() => setLightboxState({ categoryId: category.id, index })}
                    >
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        loading="lazy"
                        decoding="async"
                        className="object-cover group-hover:scale-[1.04] transition-transform duration-[1.2s] ease-[cubic-bezier(0.25,1,0.5,1)]"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-4 sm:p-6">
                        <h4 className="text-sm sm:text-lg font-bold text-white tracking-tight leading-tight">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  );
                })}

                {/* Skeleton Placeholders */}
                {loadingCategories[category.id] && (
                  <>
                    <div className="bg-[#E8E8E8] animate-pulse-custom aspect-[3/4] w-full rounded-none" />
                    <div className="bg-[#E8E8E8] animate-pulse-custom aspect-[3/4] w-full rounded-none" />
                    <div className="bg-[#E8E8E8] animate-pulse-custom aspect-[3/4] w-full rounded-none" />
                  </>
                )}
              </div>

              {/* View More / Show Less Pagination Button */}
              {hasMore && (
                <div className="mt-12 flex justify-center">
                  <button
                    onClick={() => toggleViewCount(category.id, totalCount)}
                    disabled={loadingCategories[category.id]}
                    aria-label={isShowingAll ? `Show fewer ${category.tabLabel.toLowerCase()} designs` : `View more ${category.tabLabel.toLowerCase()} designs`}
                    className={`rounded-none border border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white transition-colors duration-300 px-8 h-12 text-xs font-bold uppercase tracking-[0.15em] flex items-center gap-2 cursor-pointer ${
                      loadingCategories[category.id] ? "pointer-events-none opacity-50" : ""
                    }`}
                  >
                    {loadingCategories[category.id] ? (
                      "LOADING..."
                    ) : isShowingAll ? (
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
                  </button>
                </div>
              )}
            </section>
          );
        })}

      {/* Lightbox Overlay */}
      {lightboxState && (() => {
        const { categoryId, index } = lightboxState;
        const items = galleryData[categoryId] || [];
        const activeImage = items[index];
        if (!activeImage) return null;

        return (
          <div
            className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4 select-none animate-fade-in"
            onClick={() => setLightboxState(null)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxState(null)}
              className="absolute top-6 right-6 p-2 text-white hover:text-white/80 transition-colors bg-transparent border-none cursor-pointer z-50"
              aria-label="Close Lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Left Arrow (Desktop) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors cursor-pointer border-none z-50"
              aria-label="Previous Image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Arrow (Desktop) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors cursor-pointer border-none z-50"
              aria-label="Next Image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Center Image Container */}
            <div className="relative max-w-full max-h-[90vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="max-w-[100vw] max-h-[90vh] object-contain select-none pointer-events-none"
              />
            </div>

            {/* Bottom Metadata Panel */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-50 text-center w-full max-w-md px-4 pointer-events-none">
              <span className="text-white text-[14px] font-normal opacity-100 font-sans">
                {activeImage.title}
              </span>
              <span className="text-white text-[13px] font-normal opacity-60 font-sans">
                {index + 1} / {items.length}
              </span>
            </div>
          </div>
        );
      })()}
    </div>
  );
}
