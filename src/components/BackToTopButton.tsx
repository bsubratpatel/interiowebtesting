"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";


export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const lastScrollY = React.useRef(0);

  useEffect(() => {
    let frameId: number;
    const handleScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        
        // Only show after scrolling down 450px
        if (currentScrollY > 450) {
          // Show when scrolling up, hide when scrolling down (cleaner viewport)
          if (currentScrollY < lastScrollY.current) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        } else {
          setVisible(false);
        }
        
        lastScrollY.current = currentScrollY;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return visible ? (
        <button
          onClick={scrollToTop}
          className="fixed left-1/2 bottom-[calc(24px+env(safe-area-inset-bottom))] z-40 flex items-center justify-center h-12 px-5 bg-brand-secondary text-white rounded-full border border-brand-secondary/30 shadow-lg hover:shadow-brand-accent/25 hover:bg-brand-accent hover:scale-[1.05] active:scale-95 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 gap-2 text-xs font-bold uppercase tracking-widest"
          aria-label="Back to Top"
        >
          <ArrowUp className="h-4.5 w-4.5" />
          <span className="hidden sm:inline">Top</span>
        </button>
  ) : null;
}
