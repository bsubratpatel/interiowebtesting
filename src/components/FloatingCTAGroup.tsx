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
    let frameId: number;
    const handleScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        
        // Auto-hide when scrolling down past 80px, show when scrolling up
        const isScrollingDown = currentScrollY > lastScrollY.current && currentScrollY > 80;
        const nextVisible = !isScrollingDown;
        const nextShowOnMobile = currentScrollY > 260;

        setVisible((prev) => (prev !== nextVisible ? nextVisible : prev));
        setShowOnMobile((prev) => (prev !== nextShowOnMobile ? nextShowOnMobile : prev));
        
        lastScrollY.current = currentScrollY;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
    };
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

  return (
    <div
      className={`fixed left-6 bottom-[calc(32px+env(safe-area-inset-bottom))] z-40 flex flex-col gap-4 transition-[opacity,transform] duration-300 ${
        visible
          ? showOnMobile
            ? "opacity-100 translate-x-0 pointer-events-auto"
            : "opacity-0 -translate-x-12 pointer-events-none md:opacity-100 md:translate-x-0 md:pointer-events-auto"
          : "opacity-0 -translate-x-12 pointer-events-none"
      }`}
    >
      {/* Call Button */}
      <button
        onClick={handleCall}
        className="group flex flex-col items-center justify-center h-16 w-16 bg-white/90 backdrop-blur-md border border-zinc-200/80 text-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:ring-offset-2 hover:scale-105 active:scale-95"
        aria-label="Call Hotline"
      >
        <Phone className="h-5 w-5 text-brand-accent shrink-0 group-hover:rotate-12 transition-transform duration-300" />
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="group flex flex-col items-center justify-center h-16 w-16 bg-white/90 backdrop-blur-md border border-zinc-200/80 text-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-600/50 focus:ring-offset-2 hover:scale-105 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-5 w-5 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform duration-300" />
      </button>

      {/* Instagram Button */}
      <button
        onClick={handleInstagram}
        className="group flex flex-col items-center justify-center h-16 w-16 bg-white/90 backdrop-blur-md border border-zinc-200/80 text-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-600/50 focus:ring-offset-2 hover:scale-105 active:scale-95"
        aria-label="Open Instagram Profile"
      >
        <InstagramIcon className="h-5 w-5 text-pink-600 shrink-0 group-hover:rotate-6 transition-transform duration-300" />
      </button>
    </div>
  );
}
