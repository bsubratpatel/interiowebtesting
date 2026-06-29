import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-zinc-200 text-zinc-500 pt-24 pb-16 px-6 sm:px-10 lg:px-12">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
         {/* Brand Information */}
        <div className="space-y-6">
          <a href="#home">
            <Image
              src="/images/logo/logo.svg"
              unoptimized
              alt="Interiocore Logo"
              width={340}
              height={100}
              className="h-[80px] w-[272px] sm:h-[96px] sm:w-[326.4px] object-contain aspect-[340/100] max-w-full bg-transparent"
            />
          </a>
          <p className="text-zinc-500 text-sm leading-relaxed font-light">
            Establishing unmatched standards of luxury modular designs. We build modern, elegant, and space-optimized kitchens, wardrobes, and living elements for contemporary spaces.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="tel:+919776991699"
              className="bg-brand-accent hover:bg-brand-accent-hover text-white text-xs font-bold tracking-wider uppercase px-5 h-11 rounded-full flex items-center justify-center gap-1.5 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-accent/50"
            >
              <Phone className="h-3.5 w-3.5" />
              Call Now
            </a>
            <a
              href="https://wa.me/919776991699?text=Hi%20Interiocore!%20I'd%20like%20to%20learn%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-zinc-950 text-zinc-950 hover:bg-zinc-50 text-xs font-bold tracking-wider uppercase px-5 h-11 rounded-full flex items-center justify-center gap-1.5 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-zinc-950/50"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Quick Links / Sitemap */}
        <div>
          <h3 className="text-foreground text-xs font-bold uppercase tracking-widest mb-6">Our Services</h3>
          <ul className="space-y-3 text-sm font-light">
            <li>
              <a href="#services-kitchen" className="hover:text-brand-accent transition-colors">
                Modular Kitchen Designs
              </a>
            </li>
            <li>
              <a href="#services-wardrobe" className="hover:text-brand-accent transition-colors">
                Luxury Wardrobe Designs
              </a>
            </li>
            <li>
              <a href="#services-tv" className="hover:text-brand-accent transition-colors">
                Premium TV Units
              </a>
            </li>
            <li>
              <a href="#services-bedroom" className="hover:text-brand-accent transition-colors">
                Bedroom Interiors
              </a>
            </li>
            <li>
              <a href="#services-living" className="hover:text-brand-accent transition-colors">
                Living Room Interiors
              </a>
            </li>
            <li>
              <a href="#services-full-home" className="hover:text-brand-accent transition-colors">
                Full Home Interiors
              </a>
            </li>
          </ul>
        </div>

        {/* More Links */}
        <div>
          <h3 className="text-foreground text-xs font-bold uppercase tracking-widest mb-6">Explore</h3>
          <ul className="space-y-3 text-sm font-light">
            <li>
              <a href="#about-story" className="hover:text-brand-accent transition-colors">
                About Our Story
              </a>
            </li>
            <li>
              <a href="#about-mission" className="hover:text-brand-accent transition-colors">
                Mission & Vision
              </a>
            </li>
            <li>
              <a href="#about-why" className="hover:text-brand-accent transition-colors">
                Why Choose Us
              </a>
            </li>
            <li>
              <a href="#process" className="hover:text-brand-accent transition-colors">
                Our Design Process
              </a>
            </li>
            <li>
              <a href="#materials" className="hover:text-brand-accent transition-colors">
                Materials & Finishes
              </a>
            </li>
            <li>
              <a href="#gallery-kitchens" className="hover:text-brand-accent transition-colors">
                Visual Gallery
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-brand-accent transition-colors">
                Testimonials
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-foreground text-xs font-bold uppercase tracking-widest mb-6">Get in Touch</h3>
          <ul className="space-y-4 text-sm font-light">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                Jharsuguda, Odisha, India
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4.5 w-4.5 text-brand-accent shrink-0" />
              <a href="tel:+919776991699" className="hover:text-foreground transition-colors">
                +91 97769 91699
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4.5 w-4.5 text-brand-accent shrink-0" />
              <a href="mailto:info@interiocore.com" className="hover:text-foreground transition-colors">
                info@interiocore.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto pt-8 border-t border-zinc-200/80 text-center md:text-left text-xs text-zinc-400">
        <p>© {new Date().getFullYear()} Interiocore. All rights reserved. Made for luxury spaces.</p>
      </div>

    </footer>
  );
}
