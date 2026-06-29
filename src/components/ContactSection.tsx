import React from "react";
import { ArrowRight, Phone, MessageCircle, MapPin, Compass } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* Header Block */}
        <div className="mb-24 md:mb-32">
          <span className="text-xs font-bold text-brand-accent uppercase tracking-[0.2em] mb-4 block">07. Connect</span>
          <h2 className="text-5xl sm:text-7xl font-extrabold uppercase tracking-tighter text-foreground leading-[1]">
            Start Your <br/> Project
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Details */}
          <div className="space-y-16">
            <div>
              <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-[0.2em] mb-6 block">Studio Location</h3>
              <p className="text-2xl font-bold uppercase tracking-tight text-foreground leading-snug">
                Jharsuguda, Odisha, India
              </p>
              <div className="mt-4 flex gap-4">
                <a
                  href="https://maps.google.com/?q=Jharsuguda,Odisha,India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-0 text-brand-secondary font-bold tracking-[0.1em] uppercase flex items-center gap-2 hover:no-underline hover:text-brand-accent transition-all active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50 text-sm h-auto bg-transparent py-0 border-none cursor-pointer"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-[0.2em] mb-6 block">Direct Inquiry</h3>
              <div className="space-y-4 flex flex-col">
                <a
                  href="tel:+919776991699"
                  className="w-full sm:w-auto rounded-none border border-zinc-300 bg-white text-zinc-900 hover:bg-brand-secondary hover:text-white transition-all active:scale-[0.98] px-10 h-14 text-xs font-bold tracking-[0.15em] uppercase flex items-center justify-between sm:justify-start gap-8 outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50 focus-visible:ring-offset-2"
                >
                  <span className="flex items-center gap-3"><Phone className="w-4 h-4" /> Call For Free Design</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/919776991699?text=Hi%2C%20I%27d%20like%20a%20free%20design%20consultation%20for%20my%20home."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto rounded-none border border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all active:scale-[0.98] px-10 h-14 text-xs font-bold tracking-[0.15em] uppercase flex items-center justify-between sm:justify-start gap-8 outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                >
                  <span className="flex items-center gap-3"><MessageCircle className="w-4 h-4" /> WhatsApp Chat</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Large Interactive Visual / Follow */}
          <a
            href="https://www.instagram.com/interiocore/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-[50dvh] sm:h-[70dvh] w-full bg-zinc-100 flex flex-col items-center justify-center p-8 group cursor-pointer text-current hover:no-underline"
          >
            <Compass className="w-16 h-16 text-zinc-300 group-hover:text-brand-accent transition-colors duration-500 mb-8" />
            <h3 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-foreground text-center group-hover:scale-105 transition-transform duration-500">
              Follow Our<br/> Journey
            </h3>
            <span className="mt-8 text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] group-hover:text-brand-accent transition-colors duration-500">
              @interiocore
            </span>
            <div className="absolute inset-0 border border-zinc-200/50 scale-[0.95] group-hover:scale-[0.97] transition-transform duration-500"></div>
          </a>
        </div>

      </div>
    </section>
  );
}
