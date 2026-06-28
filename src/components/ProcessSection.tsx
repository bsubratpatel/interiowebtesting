"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProcessSection() {
  const steps = [
    { num: "01", title: "Consultation", desc: "Design brief, layout discussion, and budget benchmarks." },
    { num: "02", title: "Measurement", desc: "Precision laser readings of site dimensions." },
    { num: "03", title: "3D Layout", desc: "Bespoke realistic 3D designs for virtual sign-off." },
    { num: "04", title: "Manufacturing", desc: "Computerized factory production for absolute precision." },
    { num: "05", title: "Installation", desc: "Certified assembly and final calibration on site." },
    { num: "06", title: "Handover", desc: "Multi-point checks and structural warranty issuance." },
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

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24 mb-32">
          {steps.map((step, idx) => (
            <div key={step.num}  className="flex flex-col space-y-6">
              <span className="text-7xl sm:text-8xl font-extrabold text-zinc-100 tracking-tighter leading-none block">
                {step.num}
              </span>
              <div className="-mt-12 space-y-4 relative z-10">
                <h3 className="text-2xl font-bold uppercase tracking-tight text-foreground">{step.title}</h3>
                <div className="w-8 h-1 bg-brand-accent"></div>
                <p className="text-zinc-500 font-light text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Block */}
        <div className="border-t border-zinc-200/50 pt-16 flex flex-col sm:flex-row items-center justify-between gap-8">
          <h3 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tighter text-foreground text-center sm:text-left">
            Ready to Begin?
          </h3>
          <Button
            onClick={() => window.location.href = "tel:+919776991699"}
            className="bg-brand-accent text-white hover:bg-brand-accent-hover transition-colors rounded-none px-12 h-14 text-xs font-bold tracking-[0.15em] uppercase flex items-center gap-3 w-full sm:w-auto"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

      </div>
    </section>
  );
}
