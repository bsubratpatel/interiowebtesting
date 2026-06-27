"use client";

import React from "react";
import { MessageSquare, Ruler, Layers, Settings, Truck, Wrench, Shield, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimationWrapper from "@/components/AnimationWrapper";

export default function ProcessSection() {
  const handleCall = () => {
    window.location.href = "tel:+919776991699";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919776991699?text=Hi%20Interiocore!%20I'd%20like%20to%20learn%20more%20about%20your%20design%20process.", "_blank");
  };

  const steps = [
    {
      num: "01",
      icon: MessageSquare,
      title: "Design Consultation",
      desc: "Connect with our design studio. We discuss your layouts, color preferences, appliance specifications, and budget benchmarks to outline a custom design brief.",
    },
    {
      num: "02",
      icon: Ruler,
      title: "Laser Site Measurement",
      desc: "Our technical supervisors visit your site to perform precision laser readings of walls, height profiles, electrical sockets, gas points, and plumbing positions.",
    },
    {
      num: "03",
      icon: Layers,
      title: "Bespoke 3D Layout Planning",
      desc: "Review realistic 3D designs showing drawer locations, corner fittings, substrate layers, and finish combinations. You sign off on the exact virtual model.",
    },
    {
      num: "04",
      icon: Settings,
      title: "Computerized Manufacturing",
      desc: "Our automated factories translate your approved 3D design blueprint into direct machine cuts, ensuring micro-millimeter tolerance and clean edge-banding.",
    },
    {
      num: "05",
      icon: Truck,
      title: "Flat-Pack Logistical Delivery",
      desc: "Components are individually bubble-wrapped, flat-packed, and shipped in marked boxes directly from factory loading docks to your home location.",
    },
    {
      num: "06",
      icon: Wrench,
      title: "Precision Installation",
      desc: "Our certified installation team assembles cabinets, sets up soft-close drawers, fits hinges, installs splashbacks, and calibrates every alignment.",
    },
    {
      num: "07",
      icon: Shield,
      title: "Final QA & Handover",
      desc: "We perform multi-point alignment checks, clean surfaces, issue your structural warranty certificate, and present the keys to your modular space.",
    },
  ];

  return (
    <section id="process" className="py-24 bg-white border-b border-zinc-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-16">
        
        {/* Header Block */}
        <AnimationWrapper className="flex flex-col items-center space-y-4 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold text-brand-accent uppercase tracking-widest">Our Method</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-foreground">
            The 7-Step Blueprint
          </h2>
          <p className="text-zinc-500 text-base font-light leading-relaxed">
            From design measurements to custom factory assembly and final key handover, we guarantee transparency at every stage.
          </p>
        </AnimationWrapper>

        {/* Timeline Layout */}
        <div className="relative max-w-5xl mx-auto pt-8">
          {/* Timeline Center Line */}
          <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-12 bottom-12 w-px bg-zinc-200 hidden sm:block" />

          <div className="space-y-16">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isLeft = idx % 2 === 0;
              return (
                <div key={step.num} className="relative flex flex-col md:flex-row items-stretch gap-8 md:gap-0">
                  {/* Timeline Center Node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-brand-accent border-4 border-white text-white flex items-center justify-center text-xs font-bold shadow-md shadow-brand-accent/20 z-10 hidden sm:flex">
                    {step.num}
                  </div>

                  {/* Left Side Content */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isLeft ? "md:pr-16 md:text-right" : "md:order-last md:pl-16"}`}>
                    <AnimationWrapper delay={idx * 0.05} className="bg-background border border-zinc-200/80 rounded-3xl p-8 space-y-4 hover:shadow-md hover:border-brand-accent/25 transition-all duration-300">
                      <div className={`flex items-center gap-3 ${isLeft ? "md:justify-end" : ""}`}>
                        <span className="text-xs font-bold text-brand-accent md:hidden">Step {step.num}</span>
                        <div className="h-10 w-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-brand-accent shrink-0">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-xl font-bold tracking-tight text-foreground">{step.title}</h3>
                      </div>
                      <p className="text-zinc-500 text-sm sm:text-base font-light leading-relaxed">
                        {step.desc}
                      </p>
                    </AnimationWrapper>
                  </div>

                  {/* Right Placeholder */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Action callout section */}
        <AnimationWrapper className="bg-background border border-zinc-200/80 rounded-3xl p-10 max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-foreground">
            Ready to begin step one?
          </h3>
          <p className="text-zinc-500 text-base font-light max-w-xl mx-auto leading-relaxed">
            Book your free design consultation today and get customized layout options and budget estimations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              onClick={handleCall}
              className="bg-brand-accent text-white hover:bg-brand-accent-hover transition-all rounded-full px-8 h-12 text-xs font-bold tracking-wider uppercase flex items-center gap-2 active:scale-95 duration-200"
            >
              <Phone className="h-4 w-4" />
              Call Our Expert
            </Button>
            <Button
              onClick={handleWhatsApp}
              className="bg-white border border-zinc-950 text-zinc-950 hover:bg-zinc-50 transition-all rounded-full px-8 h-12 text-xs font-bold tracking-wider uppercase flex items-center gap-2 active:scale-95 duration-200"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </Button>
          </div>
        </AnimationWrapper>

      </div>
    </section>
  );
}
