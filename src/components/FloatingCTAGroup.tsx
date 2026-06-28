"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function FloatingCTAGroup() {
  const [visible, setVisible] = useState(true);
  const [showOnMobile, setShowOnMobile] = useState(false);
  const lastScrollY = React.useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Auto-hide when scrolling down past 80px, show when scrolling up
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentScrollY;

      // Show on mobile only after scrolling past the hero (260px)
      if (currentScrollY > 260) {
        setShowOnMobile(true);
      } else {
        setShowOnMobile(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCall = () => {
    window.location.href = "tel:+919776991699";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919776991699?text=Hi%20Interiocore,%20I'm%20interested%20in%20your%20interior%20design%20services.", "_blank");
  };

  const handleInstagram = () => {
    window.open("https://www.instagram.com/interiocore/", "_blank");
  };

  return visible ? (
        <div
          className={`fixed left-6 bottom-[calc(32px+env(safe-area-inset-bottom))] z-40 flex flex-col gap-4 transition-all duration-300 ${
            showOnMobile
              ? "opacity-100 translate-x-0 pointer-events-auto"
              : "opacity-0 -translate-x-12 pointer-events-none md:opacity-100 md:translate-x-0 md:pointer-events-auto"
          }`}
        >
          {/* Call Button */}
          <button
            onClick={handleCall}
            className="group flex items-center justify-center h-12 w-12 hover:w-36 bg-white/90 backdrop-blur-md border border-zinc-200/80 text-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:ring-offset-2 hover:scale-105 active:scale-95 overflow-hidden"
            aria-label="Call Hotline"
          >
            <div className="flex items-center px-3.5 gap-3 w-full">
              <Phone className="h-5 w-5 shrink-0 text-brand-accent group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-bold uppercase text-[10px] tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Call Now
              </span>
            </div>
          </button>

          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsApp}
            className="group flex items-center justify-center h-12 w-12 hover:w-36 bg-white/90 backdrop-blur-md border border-zinc-200/80 text-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-600/50 focus:ring-offset-2 hover:scale-105 active:scale-95 overflow-hidden"
            aria-label="Chat on WhatsApp"
          >
            <div className="flex items-center px-3.5 gap-3 w-full">
              <MessageCircle className="h-5 w-5 shrink-0 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-bold uppercase text-[10px] tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                WhatsApp
              </span>
            </div>
          </button>

          {/* Instagram Button */}
          <button
            onClick={handleInstagram}
            className="group flex items-center justify-center h-12 w-12 hover:w-36 bg-white/90 backdrop-blur-md border border-zinc-200/80 text-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-600/50 focus:ring-offset-2 hover:scale-105 active:scale-95 overflow-hidden"
            aria-label="Open Instagram Profile"
          >
            <div className="flex items-center px-3.5 gap-3 w-full">
              <InstagramIcon className="h-5 w-5 shrink-0 text-pink-600 group-hover:rotate-6 transition-transform duration-300" />
              <span className="font-bold uppercase text-[10px] tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Instagram
              </span>
            </div>
          </button>
        </div>
  ) : null;
}
