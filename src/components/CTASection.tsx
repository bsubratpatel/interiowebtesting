import React from "react";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-brand-secondary text-white py-24 sm:py-32 border-b border-brand-secondary/80">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tighter leading-[1.1] mb-6 drop-shadow-sm">
          Ready to Design <br className="hidden sm:block" /> Your Dream Home?
        </h2>
        <p className="text-lg sm:text-xl font-light text-white/90 max-w-2xl mx-auto leading-[1.8] mb-10">
          Book a free consultation with our design experts and let's create a home that reflects your lifestyle.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-3 bg-brand-accent hover:bg-[#D55A1D] text-white transition-all hover:scale-[1.02] shadow-xl rounded-none h-16 px-10 text-sm font-bold tracking-[0.15em] uppercase active:scale-95 duration-200 cursor-pointer mx-auto"
        >
          Book Free Consultation
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
