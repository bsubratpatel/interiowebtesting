"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function ContactActionButtons() {
  const whatsappUrl = `https://wa.me/919776991699?text=${encodeURIComponent(
    "Hi InterioCore, I want a free interior design consultation."
  )}`;

  return (
    <div className="space-y-4 pt-1">
      <a
        href="tel:+919776991699"
        onClick={() => trackEvent("call_clicked", { source: "sidebar_call_now" })}
        className="w-full bg-brand-secondary hover:bg-zinc-800 text-white transition-all duration-200 h-14 sm:h-16 px-8 text-xs sm:text-sm font-bold tracking-[0.15em] uppercase flex items-center justify-center gap-3 shadow-md hover:shadow-lg active:scale-[0.99] cursor-pointer rounded-none outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2"
        aria-label="Call InterioCore Now at +91 9776991699"
      >
        <Phone className="w-4 h-4 text-brand-accent" aria-hidden="true" />
        CALL NOW
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackEvent("whatsapp_opened", {
            source: "sidebar_whatsapp_us",
          })
        }
        className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white transition-all duration-200 h-14 sm:h-16 px-8 text-xs sm:text-sm font-bold tracking-[0.15em] uppercase flex items-center justify-center gap-3 shadow-md hover:shadow-lg active:scale-[0.99] cursor-pointer rounded-none outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
        aria-label="Chat with InterioCore on WhatsApp at +91 9776991699"
      >
        <MessageCircle className="w-4 h-4" aria-hidden="true" />
        WHATSAPP US
      </a>
    </div>
  );
}
