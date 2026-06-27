"use client";

import React from "react";
import { Star, Quote, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimationWrapper from "@/components/AnimationWrapper";

export default function TestimonialsSection() {
  const handleCall = () => {
    window.location.href = "tel:+919776991699";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919776991699?text=Hi%20Interiocore!%20I'd%20like%20to%20learn%20more%20about%20your%20services.", "_blank");
  };

  const reviews = [
    {
      name: "Sanjay Kapoor",
      location: "DLF Phase 5, Gurugram",
      project: "Modular Kitchen & Wardrobes",
      text: "The precision edge-banding and laser-cut cabinets are flawless. We chose the SS 304 base cabinet configuration for our wet island, and it is incredibly easy to clean. Delivery was exactly within the promised 45-day window. Strongly recommended.",
      rating: 5,
    },
    {
      name: "Meera Oberoi",
      location: "New Friends Colony, South Delhi",
      project: "Walk-in Dressing Room",
      text: "Our walk-in wardrobe is stunning. The rose gold profile glass doors, velvet drawer lining, and built-in sensor lighting create a high-end luxury feel. Their designer spent hours with us custom-tailoring drawer dividers.",
      rating: 5,
    },
    {
      name: "Dr. Aditya Sharma",
      location: "Sector 15, Noida",
      project: "Floating TV Consoles & Paneling",
      text: "We wanted a completely clean, minimalist entertainment wall with zero visible wires. Interiocore's modular console layout resolved our routing details cleanly. The PU finish is premium and completely seamless.",
      rating: 5,
    },
    {
      name: "Priyanka Reddy",
      location: "Jubilee Hills, Hyderabad",
      project: "Modular Kitchen Designs",
      text: "Exceptional design details and absolute peace of mind. The team handled laser measurements, modular factory cutting, and final assembly flawlessly. The Blum soft-close fittings function beautifully.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-background border-b border-zinc-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-16">
        
        {/* Header Block */}
        <AnimationWrapper className="flex flex-col items-center space-y-4 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold text-brand-accent uppercase tracking-widest">Delight</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-foreground">
            Client Testimonials
          </h2>
          <p className="text-zinc-500 text-base font-light leading-relaxed">
            Read stories of transformation from our premium residential clients. Precision execution, luxury delivery.
          </p>
        </AnimationWrapper>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev, idx) => (
            <AnimationWrapper
              key={rev.name}
              delay={idx * 0.05}
              className="bg-white border border-zinc-200/80 rounded-3xl p-8 hover:shadow-md hover:border-brand-accent/25 transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden"
            >
              <Quote className="absolute top-6 right-8 h-10 w-10 text-brand-accent/10 shrink-0" />
              
              <div className="space-y-4 relative z-10">
                <div className="flex gap-1 text-brand-accent">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-brand-accent text-brand-accent" />
                  ))}
                </div>
                
                <p className="text-zinc-600 text-base font-light leading-relaxed italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>
              
              <div className="flex flex-col pt-4 border-t border-zinc-150 relative z-10 space-y-2">
                <span className="text-xl font-bold text-foreground tracking-tight">{rev.name}</span>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-brand-accent/10 text-brand-accent text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {rev.project}
                  </span>
                  <span className="bg-[#F5F4F0] text-zinc-500 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {rev.location}
                  </span>
                </div>
              </div>
            </AnimationWrapper>
          ))}
        </div>

        {/* Action Callout */}
        <AnimationWrapper className="bg-white border border-zinc-200/80 rounded-3xl p-10 max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-foreground">
            Create your own success story
          </h3>
          <p className="text-zinc-500 text-base font-light max-w-xl mx-auto leading-relaxed">
            Experience our certified factory accuracy and premium design. Schedule your design session with our studio team.
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
              Consult via WhatsApp
            </Button>
          </div>
        </AnimationWrapper>

      </div>
    </section>
  );
}
