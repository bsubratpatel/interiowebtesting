"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    { num: "01", title: "Consultation", desc: "Design brief, layout discussion, and budget benchmarks.", timeline: "~1–2 days" },
    { num: "02", title: "Measurement", desc: "Precision laser readings of site dimensions.", timeline: "~1 day" },
    { num: "03", title: "3D Layout", desc: "Bespoke realistic 3D designs for virtual sign-off.", timeline: "~5–7 days" },
    { num: "04", title: "Manufacturing", desc: "Computerized factory production for absolute precision.", timeline: "~20–25 days" },
    { num: "05", title: "Installation", desc: "Certified assembly and final calibration on site.", timeline: "~3–5 days" },
    { num: "06", title: "Handover", desc: "Multi-point checks and structural warranty issuance.", timeline: "~1 day" },
  ];

  return (
    <section id="process" className="py-24 sm:py-32 bg-white border-b border-zinc-200/50">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* Header Block */}
        <div className="mb-24">
          <span className="text-xs font-bold text-brand-accent uppercase tracking-[0.2em] mb-4 block">04. Method</span>
          <h2 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tighter text-foreground leading-[1]">
            Execution <br /> Blueprint
          </h2>
        </div>

        {/* Process Grid / Stack */}
        <div className="relative mb-12">
          {/* Mobile Vertical Connector Line */}
          <div className="absolute left-[14px] top-[14px] bottom-[14px] w-[1px] border-l border-[#E8621A]/25 md:hidden" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 md:gap-y-24">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-6 md:flex-col md:space-y-6 md:gap-0 relative">
                {/* Step Number Badge */}
                <div className="flex-shrink-0 z-10 flex items-center justify-center w-7 h-7 rounded-full bg-[#E8621A]/12 border border-[#E8621A]/35 text-[#E8621A] text-xs font-bold font-sans">
                  {step.num}
                </div>

                {/* Step Content */}
                <div className="space-y-3 relative z-10 flex-1 md:-mt-2">
                  <h3 className="text-2xl font-bold uppercase tracking-tight text-foreground">{step.title}</h3>
                  <div className="w-8 h-1 bg-brand-accent"></div>
                  <p className="text-zinc-500 font-light text-base leading-relaxed">
                    {step.desc}
                  </p>
                  
                  {/* Step Timeline */}
                  <div className="text-[11px] sm:text-[12px] text-[#E8621A]/80 font-light">
                    {step.timeline}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Callout */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center justify-center bg-[#E8621A]/10 border border-[#E8621A]/30 py-1.5 px-4 rounded-[20px] text-foreground text-[13px] sm:text-[14px] font-medium text-center">
            Total project completion: 35–45 days
          </div>
        </div>

        {/* Action Block */}
        <div className="border-t border-zinc-200/50 pt-12 flex flex-col items-center justify-center">
          {/* Trust Line */}
          <div className="text-[12px] sm:text-[13px] font-light text-black/45 text-center mb-3">
            Trusted by 45+ homeowners across Odisha
          </div>

          {/* CTA Button */}
          <a
            href="https://wa.me/919776991699?text=Hi%2C%20I%27d%20like%20to%20start%20my%20interior%20project%20with%20Interiocore."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E8621A] hover:bg-[#d65212] text-white transition-colors rounded-none h-14 px-12 text-xs font-bold tracking-[0.15em] uppercase flex items-center justify-center gap-3 w-full max-w-[340px] sm:max-w-xs text-center cursor-pointer shadow-sm"
          >
            START YOUR PROJECT
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Subtext below button */}
          <div className="text-[12px] sm:text-[13px] font-light text-black/45 text-center mt-2">
            Free consultation. No commitment.
          </div>
        </div>

      </div>
    </section>
  );
}
