"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, Shield, Clock, Settings, UserCheck } from "lucide-react";
import AnimationWrapper from "@/components/AnimationWrapper";

export default function AboutSection() {
  const handleCall = () => {
    window.location.href = "tel:+919776991699";
  };

  const team = [
    {
      name: "Rohan Malhotra",
      role: "Founder & Chief Architect",
      desc: "Visionary designer with 15+ years crafting luxury modular systems across Europe and India.",
    },
    {
      name: "Ananya Sen",
      role: "Lead Interior Architect",
      desc: "Specialist in ergonomics and space optimization with a passion for minimal luxury.",
    },
    {
      name: "Vikram Rathore",
      role: "Head of Project Delivery",
      desc: "Operations expert overseeing manufacturing precision and flawless site installation.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background border-b border-zinc-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-24">
        
        {/* Our Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimationWrapper className="space-y-6">
            <span className="text-xs font-bold text-brand-accent uppercase tracking-widest">01. Our Story</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-foreground leading-tight">
              The Origin of Flawless Design
            </h2>
            <p className="text-zinc-600 text-base font-light leading-relaxed">
              Interiocore was born out of a desire to eliminate the typical hassles of custom home interior setups. Inspired by German factory precision and Italian design minimalism, we built a modular pipeline that connects professional architectural design directly with robotic factory manufacturing.
            </p>
            <p className="text-zinc-600/80 text-base font-light leading-relaxed">
              Today, we operate a state-of-the-art facility using computerized numerical control (CNC) cutting tools to guarantee margins under 0.5mm. We believe that your home should be an oasis of calm—crafted with luxurious finishes, clean lines, and absolute space optimization.
            </p>
            <div className="pt-2">
              <Button
                onClick={handleCall}
                className="bg-brand-accent text-white hover:bg-brand-accent-hover transition-all rounded-full px-8 h-12 text-xs font-bold tracking-wider uppercase flex items-center gap-2.5 active:scale-95 duration-200 shadow-sm"
              >
                <Phone className="h-4 w-4" />
                Call Our Expert
              </Button>
            </div>
          </AnimationWrapper>

          <AnimationWrapper delay={0.15} className="relative h-[480px] rounded-3xl overflow-hidden border border-zinc-200 shadow-lg">
            <Image
              src="/images/living room/living_room (1).webp"
              alt="Luxury Living Render"
              fill
              className="object-cover brightness-[0.9] hover:scale-103 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </AnimationWrapper>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          <AnimationWrapper className="bg-white border border-zinc-200/60 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 space-y-4">
            <h3 className="text-2xl font-bold text-brand-accent uppercase tracking-tight">Our Mission</h3>
            <p className="text-zinc-600 text-base font-light leading-relaxed">
              To simplify and elevate interior design projects by offering modular solutions engineered to last a lifetime. We focus on transparency, delivery commitments, and geometric perfection.
            </p>
          </AnimationWrapper>

          <AnimationWrapper delay={0.1} className="bg-white border border-zinc-200/60 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 space-y-4">
            <h3 className="text-2xl font-bold text-brand-accent uppercase tracking-tight">Our Vision</h3>
            <p className="text-zinc-600 text-base font-light leading-relaxed">
              To be India&apos;s leading design-manufacture brand for modern luxury modular setups. We strive to set benchmarks in eco-safe materials, robotic assembly, and absolute customer delight.
            </p>
          </AnimationWrapper>
        </div>

        {/* Why Choose Us */}
        <div className="space-y-16 pt-6">
          <AnimationWrapper className="flex flex-col items-center space-y-4 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-brand-accent uppercase tracking-widest">Why Interiocore</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-foreground">Built to Excel</h2>
            <p className="text-zinc-500 text-base font-light">
              Our unique advantages ensure an effortless and premium interior design journey.
            </p>
          </AnimationWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Quality Certifications",
                desc: "100% boiling water resistant (BWR) action plywood and German hardware integration.",
              },
              {
                icon: Clock,
                title: "Flawless Delivery",
                desc: "We enforce strict penalty-backed clauses to guarantee installation completion in 45 days.",
              },
              {
                icon: Settings,
                title: "Robotic Precision",
                desc: "Engineered inside fully computerized automated factories ensuring micro-millimeter tolerance.",
              },
              {
                icon: UserCheck,
                title: "Expert Architects",
                desc: "Every design draft is reviewed by dedicated modular architects for optimal layouts.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <AnimationWrapper key={item.title} delay={idx * 0.08} className="bg-white border border-zinc-200/60 p-8 rounded-3xl text-center space-y-4 hover:border-brand-accent/40 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-[#F5F4F0] text-brand-accent mx-auto">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground tracking-tight">{item.title}</h3>
                  <p className="text-zinc-500 text-sm font-light leading-relaxed">{item.desc}</p>
                </AnimationWrapper>
              );
            })}
          </div>
        </div>

        {/* Team Grid */}
        <div className="space-y-16 pt-6">
          <AnimationWrapper className="flex flex-col items-center space-y-4 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-brand-accent uppercase tracking-widest">Our Team</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-foreground">Visionary Architects</h2>
            <p className="text-zinc-500 text-base font-light">
              Crafting premium luxury modular systems that balance form and utility.
            </p>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((t, idx) => (
              <AnimationWrapper key={t.name} delay={idx * 0.1} className="bg-white border border-zinc-200/60 rounded-3xl p-8 shadow-sm hover:shadow-md hover:border-brand-accent/30 transition-all duration-300">
                <div className="aspect-[4/3] bg-[#F5F4F0] rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center border border-zinc-200/40 hover:bg-brand-accent/5 transition-colors">
                  <div className="text-center space-y-1">
                    <span className="text-xs font-bold text-brand-accent tracking-widest block uppercase">INTERIOCORE</span>
                    <span className="text-zinc-400 text-[10px] block">STUDIO DRAFT</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground tracking-tight">{t.name}</h3>
                <span className="text-brand-accent text-xs font-semibold uppercase tracking-wider block mt-1.5 mb-4">{t.role}</span>
                <p className="text-zinc-500 text-base font-light leading-relaxed">{t.desc}</p>
              </AnimationWrapper>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
