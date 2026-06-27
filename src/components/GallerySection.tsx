"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Maximize2, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import AnimationWrapper from "@/components/AnimationWrapper";

const galleryItems = [
  // Kitchens
  { id: "k1", src: "/images/kitchen renders/kitchen (1).webp", category: "kitchen", title: "Minimalist Handleless Kitchen" },
  { id: "k2", src: "/images/kitchen renders/kitchen (2).webp", category: "kitchen", title: "Monochrome Matte Kitchen" },
  { id: "k3", src: "/images/kitchen renders/kitchen (3).webp", category: "kitchen", title: "Italian Granite Island Kitchen" },
  { id: "k4", src: "/images/kitchen renders/kitchen (4).webp", category: "kitchen", title: "Warm Oak Modular Kitchen" },
  { id: "k5", src: "/images/kitchen renders/kitchen (5).webp", category: "kitchen", title: "Industrial Open Kitchen Layout" },
  { id: "k6", src: "/images/kitchen renders/kitchen (6).webp", category: "kitchen", title: "Premium Quartz Island Counter" },
  { id: "k7", src: "/images/kitchen renders/kitchen (7).webp", category: "kitchen", title: "Glossy Grey Parallel Kitchen" },
  { id: "k8", src: "/images/kitchen renders/kitchen (8).webp", category: "kitchen", title: "Contemporary High-rise Kitchen" },
  { id: "k9", src: "/images/kitchen renders/kitchen (9).webp", category: "kitchen", title: "Sleek Glass Cabinets Kitchen" },
  { id: "k10", src: "/images/kitchen renders/kitchen (10).webp", category: "kitchen", title: "Modern Carbon Kitchen Hub" },
  { id: "k11", src: "/images/kitchen renders/kitchen (11).webp", category: "kitchen", title: "Bespoke Bronze Accent Kitchen" },

  // Wardrobes
  { id: "w1", src: "/images/wardrobe/wardrobe (1).webp", category: "wardrobe", title: "Textured Leatherette Wardrobe" },
  { id: "w2", src: "/images/wardrobe/wardrobe (2).webp", category: "wardrobe", title: "Lacquered Sliding Glass Closet" },
  { id: "w3", src: "/images/wardrobe/wardrobe (3).webp", category: "wardrobe", title: "Minimal Walk-in Dressing Room" },
  { id: "w4", src: "/images/wardrobe/wardrobe (4).webp", category: "wardrobe", title: "Matte Slate Finished Wardrobe" },
  { id: "w5", src: "/images/wardrobe/wardrobe (5).webp", category: "wardrobe", title: "Premium Rose Gold Profile Wardrobe" },
  { id: "w6", src: "/images/wardrobe/wardrobe (6).webp", category: "wardrobe", title: "Luxury Glass Wardrobe Frame" },
  { id: "w7", src: "/images/wardrobe/wardrobe (7).webp", category: "wardrobe", title: "Fluted Accent Sliding Wardrobe" },
  { id: "w8", src: "/images/wardrobe/wardrobe (8).webp", category: "wardrobe", title: "Geometric Pattern Modular Wardrobe" },
  { id: "w9", src: "/images/wardrobe/wardrobe (9).webp", category: "wardrobe", title: "Bespoke Walnut Walk-in Wardrobe" },
  { id: "w10", src: "/images/wardrobe/wardrobe (10).webp", category: "wardrobe", title: "Floor-to-ceiling Hinged Closet" },
  { id: "w11", src: "/images/wardrobe/wardrobe (11).webp", category: "wardrobe", title: "Minimalist Sand Grain Finish Closet" },

  // TV Units
  { id: "t1", src: "/images/tv unit/tv unit (1).webp", category: "tv-unit", title: "Fluted Slate TV Panel" },
  { id: "t2", src: "/images/tv unit/tv unit (2).webp", category: "tv-unit", title: "Floating Veneer TV Console" },
  { id: "t3", src: "/images/tv unit/tv unit (3).webp", category: "tv-unit", title: "Minimal Marble Backdrop Unit" },
  { id: "t4", src: "/images/tv unit/tv unit (4).webp", category: "tv-unit", title: "Lacquered Glass Panel TV Unit" },
  { id: "t5", src: "/images/tv unit/tv unit (5).webp", category: "tv-unit", title: "Charcoal Panel Floating TV Hub" },

  // Vanities
  { id: "v1", src: "/images/vanity/vanity (1).webp", category: "vanity", title: "High-density SS Base Vanity" },
  { id: "v2", src: "/images/vanity/vanity (2).webp", category: "vanity", title: "Luxury Calacatta Quartz Vanity" },
  { id: "v3", src: "/images/vanity/vanity (3).webp", category: "vanity", title: "Minimal Oak Wood Base Vanity" },
  { id: "v4", src: "/images/vanity/vanity (4).webp", category: "vanity", title: "Matte Charcoal Vanity Counter" },
  { id: "v5", src: "/images/vanity/vanity (5).webp", category: "vanity", title: "LED Backlit Counter Top Vanity" },
];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("all");
  const [lightboxImg, setLightboxImg] = useState<{ src: string; title: string } | null>(null);

  const handleCall = () => {
    window.location.href = "tel:+919776991699";
  };

  const handleWhatsApp = (itemTitle?: string) => {
    const text = itemTitle
      ? `Hi Interiocore! I'm interested in the "${itemTitle}" design from your gallery.`
      : "Hi Interiocore! I'd like to learn more about your designs.";
    window.open(`https://wa.me/919776991699?text=${encodeURIComponent(text)}`, "_blank");
  };

  // Listen to tab triggers dispatched from Navbar
  useEffect(() => {
    const handleTabChange = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      setActiveTab(customEvent.detail);
    };
    window.addEventListener("changeGalleryTab", handleTabChange);
    return () => window.removeEventListener("changeGalleryTab", handleTabChange);
  }, []);

  const filteredItems = activeTab === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeTab);

  const tabs = [
    { id: "all", name: "All Designs" },
    { id: "kitchen", name: "Modular Kitchen" },
    { id: "wardrobe", name: "Wardrobes" },
    { id: "tv-unit", name: "TV Units" },
    { id: "vanity", name: "Vanities" },
  ];

  return (
    <section id="gallery" className="py-24 bg-background border-b border-zinc-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12">
        
        {/* Header Block */}
        <AnimationWrapper className="flex flex-col items-center space-y-4 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold text-brand-accent uppercase tracking-widest">Inspirations</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-foreground">
            Design Gallery
          </h2>
          <p className="text-zinc-500 text-base font-light leading-relaxed">
            Explore our curated showcase of high-end modular designs. Laser-fit renders manufactured in our computerized facilities.
          </p>
        </AnimationWrapper>

        {/* Filters Tabs */}
        <div className="flex flex-wrap justify-center gap-2 pt-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 text-xs font-semibold tracking-wider uppercase rounded-full border transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-brand-accent text-white border-brand-accent shadow-sm"
                  : "border-zinc-200 bg-white text-zinc-500 hover:text-foreground hover:border-zinc-300"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-8">
          {filteredItems.map((item, idx) => (
            <AnimationWrapper
              key={item.id}
              delay={(idx % 6) * 0.05}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden border border-zinc-200 bg-white shadow-sm hover:shadow-md hover:border-brand-accent/35 transition-all duration-300"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover brightness-[0.95] group-hover:brightness-[0.7] group-hover:scale-[1.03] transition-all duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-6">
                <span className="text-[9px] font-bold text-brand-accent uppercase tracking-widest mb-1">
                  {item.category}
                </span>
                <h4 className="text-base font-bold text-white mb-4">
                  {item.title}
                </h4>
                
                <div className="flex gap-2">
                  <Button
                    onClick={() => setLightboxImg({ src: item.src, title: item.title })}
                    size="sm"
                    className="bg-white/10 hover:bg-white/20 border border-white/15 text-white rounded-full h-9 px-3 text-xs duration-200 cursor-pointer"
                  >
                    <Maximize2 className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={() => handleWhatsApp(item.title)}
                    size="sm"
                    className="bg-brand-accent text-white hover:bg-brand-accent-hover rounded-full h-9 px-4 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 active:scale-95 duration-200 cursor-pointer"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </AnimationWrapper>
          ))}
        </div>

      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center p-4"
          >
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-white border border-zinc-200 text-zinc-500 hover:text-foreground transition-colors shadow-sm cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="relative max-w-4xl w-full aspect-[4/3] rounded-3xl overflow-hidden border border-zinc-200 shadow-2xl bg-white">
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
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
