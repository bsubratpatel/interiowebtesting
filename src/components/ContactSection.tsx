"use client";

import React from "react";
import { Phone, MessageCircle, Map, MapPin, ArrowRight, Clock, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimationWrapper from "@/components/AnimationWrapper";

export default function ContactSection() {
  const handleCall = () => {
    window.location.href = "tel:+919776991699";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919776991699?text=Hi%20Interiocore!%20I'd%20like%20to%20learn%20more%20about%20your%20services.", "_blank");
  };

  const handleInstagram = () => {
    window.open("https://www.instagram.com/interiocore/", "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-white border-b border-zinc-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-16">
        
        {/* Header Block */}
        <AnimationWrapper className="flex flex-col items-center space-y-4 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold text-brand-accent uppercase tracking-widest">Connect</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-foreground">
            Discuss Your Space
          </h2>
          <p className="text-zinc-500 text-base font-light leading-relaxed max-w-xl">
            Connect with our luxury design architects instantly. We are available to discuss modular layouts, premium material selections, or provide immediate budget estimations.
          </p>
        </AnimationWrapper>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Call Card */}
          <AnimationWrapper className="bg-background border border-zinc-200/80 p-8 rounded-3xl text-center space-y-6 flex flex-col justify-between hover:shadow-md transition-all duration-300">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-brand-accent/10 text-brand-accent flex items-center justify-center mx-auto">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight text-foreground">Call Hotline</h3>
              <p className="text-zinc-500 text-sm font-light leading-relaxed">
                Connect directly for immediate design estimates, material consultations, and space blueprints.
              </p>
            </div>
            <Button
              onClick={handleCall}
              className="w-full bg-brand-accent text-white hover:bg-brand-accent-hover transition-all rounded-full h-12 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
            >
              <Phone className="h-4 w-4" />
              +91 97769 91699
            </Button>
          </AnimationWrapper>

          {/* WhatsApp Card */}
          <AnimationWrapper delay={0.05} className="bg-background border border-zinc-200/80 p-8 rounded-3xl text-center space-y-6 flex flex-col justify-between hover:shadow-md transition-all duration-300">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight text-foreground">WhatsApp Chat</h3>
              <p className="text-zinc-500 text-sm font-light leading-relaxed">
                Share details about your space layouts, modular preferences, or blueprints for a quick feedback session.
              </p>
            </div>
            <Button
              onClick={handleWhatsApp}
              className="w-full bg-emerald-600 text-white hover:bg-emerald-700 transition-all rounded-full h-12 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </Button>
          </AnimationWrapper>

          {/* Instagram Card */}
          <AnimationWrapper delay={0.1} className="bg-background border border-zinc-200/80 p-8 rounded-3xl text-center space-y-6 flex flex-col justify-between hover:shadow-md transition-all duration-300">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center mx-auto">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight text-foreground">Instagram Showcase</h3>
              <p className="text-zinc-500 text-sm font-light leading-relaxed">
                Browse our visual feed, recent modular installations, client testimonials, and studio updates.
              </p>
            </div>
            <Button
              onClick={handleInstagram}
              className="w-full bg-zinc-950 text-white hover:bg-zinc-800 transition-all rounded-full h-12 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
            >
              <Compass className="h-4 w-4" />
              Visit Instagram
            </Button>
          </AnimationWrapper>
        </div>

        {/* Showroom Details & Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-8">
          {/* Details */}
          <AnimationWrapper className="bg-background border border-zinc-200/80 rounded-3xl p-8 space-y-8 lg:col-span-1 shadow-sm flex flex-col justify-center">
            <div className="flex items-center gap-2.5 text-foreground font-bold text-lg uppercase tracking-wider pb-4 border-b border-zinc-200">
              <Map className="h-5 w-5 text-brand-accent" />
              Studio Lounge
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">New Delhi Studio</h4>
                  <p className="text-zinc-500 text-sm font-light leading-relaxed">
                    Phase II, MG Road,<br />
                    New Delhi, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">Studio Timings</h4>
                  <p className="text-zinc-500 text-sm font-light leading-relaxed">
                    Open Daily: 10:00 AM – 8:00 PM<br />
                    <span className="text-[10px] text-brand-accent font-semibold tracking-wider uppercase">Walk-ins Welcome</span>
                  </p>
                </div>
              </div>
            </div>
          </AnimationWrapper>

          {/* Interactive Map Visual */}
          <AnimationWrapper delay={0.1} className="lg:col-span-2 relative w-full h-[320px] rounded-3xl overflow-hidden bg-zinc-50 flex flex-col justify-end p-6 border border-zinc-200 shadow-sm">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-25" />
            <div className="absolute inset-0 bg-radial from-transparent to-background/90 z-0" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center space-y-2.5 z-10">
              <div className="h-12 w-12 rounded-full bg-brand-accent/20 border-2 border-brand-accent flex items-center justify-center text-brand-accent animate-bounce">
                <MapPin className="h-6 w-6 fill-brand-accent/30" />
              </div>
              <span className="text-foreground text-[10px] font-bold uppercase tracking-widest bg-white border border-zinc-200 px-4 py-1.5 rounded-full shadow-md backdrop-blur-sm">
                Interiocore Studio
              </span>
            </div>

            <div className="relative z-10 w-full flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white/95 border border-zinc-200/80 px-6 py-4 rounded-2xl backdrop-blur-sm gap-2 sm:gap-0 shadow-sm">
              <span className="text-sm font-medium text-foreground">Phase II, MG Road, New Delhi, India</span>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-accent hover:text-brand-accent-hover transition-colors uppercase tracking-wider cursor-pointer"
              >
                Directions <ArrowRight className="h-3.5 w-3.5 animate-[fadeIn_1s_infinite]" />
              </a>
            </div>
          </AnimationWrapper>
        </div>

      </div>
    </section>
  );
}
