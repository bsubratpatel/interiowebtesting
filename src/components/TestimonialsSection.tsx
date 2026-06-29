"use client";

import React from "react";

export default function TestimonialsSection() {
  const reviews = [
    {
      name: "Sanjay Kapoor",
      location: "Gurugram",
      project: "Modular Kitchen",
      text: "The precision edge-banding and laser-cut cabinets are flawless. We chose the SS 304 base cabinet configuration for our wet island, and it is incredibly easy to clean.",
    },
    {
      name: "Meera Oberoi",
      location: "South Delhi",
      project: "Walk-in Wardrobe",
      text: "Our walk-in wardrobe is stunning. The rose gold profile glass doors, velvet drawer lining, and built-in sensor lighting create a high-end luxury feel.",
    },
    {
      name: "Dr. Aditya Sharma",
      location: "Noida",
      project: "Floating Consoles",
      text: "We wanted a completely clean, minimalist entertainment wall with zero visible wires. Interiocore's modular console layout resolved our routing details cleanly.",
    },
  ];

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-brand-secondary text-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* Header Block */}
        <div className="mb-24">
          <span className="text-xs font-bold text-[#E8621A] uppercase tracking-[0.2em] mb-4 block">06. Stories</span>
          <h2 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tighter text-white leading-[1]">
            Client Experiences
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          {reviews.map((rev, idx) => (
            <div
              key={rev.name}
              
              className="flex flex-col border-t border-white/20 pt-8"
            >
              <p className="text-white/80 text-xl font-light leading-relaxed mb-8 flex-grow italic">
                &ldquo;{rev.text}&rdquo;
              </p>
              
              <div className="space-y-1">
                <span className="text-lg font-bold text-white tracking-tight uppercase block">{rev.name}</span>
                <span className="text-xs text-[#E8621A] font-bold uppercase tracking-[0.1em] block">
                  {rev.project} — {rev.location}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
