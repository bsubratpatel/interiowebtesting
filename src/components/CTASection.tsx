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
          href="https://wa.me/919776991699?text=Hi%20Interiocore%20Design%20Studio%2C%20I%27m%20interested%20in%20designing%20my%20home%20interiors.%20I%27d%20like%20to%20book%20a%20free%20consultation%20and%20discuss%20my%20project.%20Please%20let%20me%20know%20the%20next%20steps.%20Thank%20you%21"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-brand-accent hover:bg-[#D55A1D] text-white transition-all hover:scale-[1.02] shadow-xl rounded-none h-16 px-10 text-sm font-bold tracking-[0.15em] uppercase active:scale-95 duration-200 cursor-pointer mx-auto"
        >
          Book Free Consultation
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
