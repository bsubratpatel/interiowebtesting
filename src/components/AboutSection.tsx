import React from "react";
import Image from "next/image";
import { ArrowRight, Factory, Gem, PencilRuler, Hammer, Handshake, ShieldCheck } from "lucide-react";

export default function AboutSection() {
  return (
    <div className="bg-background">
      {/* 1. Our Story Subsection */}
      <section id="about-story" className="py-16 sm:py-32 bg-zinc-50/60 border-b border-zinc-200/50">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Visual Column */}
            <div className="relative h-[400px] sm:h-[600px] w-full lg:h-[700px]">
              <div className="absolute top-0 left-0 w-3/4 h-3/4 rounded-none overflow-hidden shadow-xl z-10 bg-zinc-100">
                <Image
                  src="/images/kitchen renders/kitchen (3).webp"
                  alt="Luxury Minimal Kitchen Design"
                  fill
                  loading="lazy"
                  decoding="async"
                  className="object-cover"
                  sizes="(max-width: 1024px) 75vw, 40vw"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-2/3 h-2/3 rounded-none overflow-hidden shadow-xl z-20 bg-zinc-100">
                <Image
                  src="/images/kitchen renders/kitchen (4).webp"
                  alt="Minimal Detail Kitchen Finish"
                  fill
                  loading="lazy"
                  decoding="async"
                  className="object-cover"
                  sizes="(max-width: 1024px) 66vw, 35vw"
                />
              </div>
            </div>

            {/* Text Column */}
            <div className="space-y-8">
              <div>
                <span className="text-xs font-bold text-brand-accent uppercase tracking-[0.2em] mb-4 block">01. Studio Story</span>
                <h2 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tighter text-foreground leading-[1.1]">
                  Precision &<br /> Proportion
                </h2>
              </div>
              
              <div>
                <div className="w-12 h-1 bg-brand-accent"></div>
              </div>

              <div className="space-y-6 text-zinc-600 font-light text-lg">
                <p>
                  Founded in May 2026, Interiocore Design Studio was created with a simple vision to design beautiful, premium wooden interiors for modern&nbsp;homes. We combine elegant design, quality materials, and skilled craftsmanship to create spaces that are stylish, practical, and built to&nbsp;last.
                </p>
              </div>

                <a
                  href="#about-mission"
                  className="hover:bg-brand-secondary hover:text-white transition-all rounded-none px-4 py-2.5 text-brand-secondary font-bold tracking-[0.1em] uppercase flex items-center gap-2 active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50 focus-visible:ring-offset-2 w-fit border border-brand-secondary/20 bg-transparent hover:border-transparent cursor-pointer"
                >
                  View Our Mission
                  <ArrowRight className="w-4 h-4" />
                </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mission & Vision Subsection */}
      <section id="about-mission" className="py-16 sm:py-32 bg-background border-b border-zinc-200/50">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 text-center space-y-10">
          <span className="text-xs font-bold text-brand-accent uppercase tracking-[0.2em] block">02. Purpose</span>
          <h2 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tighter text-foreground leading-[1.1]">
            Our Mission & Vision
          </h2>
          <div className="w-16 h-1 bg-brand-accent mx-auto"></div>
          <p className="text-2xl sm:text-3xl font-light text-zinc-700 leading-relaxed max-w-4xl mx-auto">
            Our mission is to design beautiful wooden interiors that make every home more comfortable, functional, and enjoyable to live in. We focus on quality materials, thoughtful design, and careful workmanship to create spaces that families love for years.
          </p>
          <p className="text-base sm:text-lg text-zinc-500 font-light max-w-2xl mx-auto leading-relaxed">
            We want every home to feel warm, elegant, and welcoming. Our vision is to help families create interiors that match their lifestyle, reflect their personality, and bring happiness every time they step inside.
          </p>
        </div>
      </section>

      {/* 3. Why Choose Us Subsection */}
      <section id="about-why" className="py-16 sm:py-32 bg-zinc-50/60 border-b border-zinc-200/50">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="mb-16 text-center sm:text-left">
            <span className="text-xs font-bold text-brand-accent uppercase tracking-[0.2em] mb-4 block">03. Standards</span>
            <h2 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tighter text-foreground leading-[1.1]">
              Why Choose Interiocore
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="space-y-4 border border-zinc-200/60 p-8 bg-white shadow-sm">
              <Factory className="w-8 h-8 text-brand-accent" />
              <h3 className="text-xl font-bold uppercase tracking-tight text-foreground">Precision Manufacturing</h3>
              <p className="text-zinc-500 text-sm font-light leading-relaxed">
                40,000 sq. ft. advanced manufacturing facility with precision craftsmanship.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="space-y-4 border border-zinc-200/60 p-8 bg-white shadow-sm">
              <Gem className="w-8 h-8 text-brand-accent" />
              <h3 className="text-xl font-bold uppercase tracking-tight text-foreground">Premium Materials</h3>
              <p className="text-zinc-500 text-sm font-light leading-relaxed">
                We use HDHMR, BWP plywood, premium laminates, acrylic, veneer, and PU finishes for lasting quality.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="space-y-4 border border-zinc-200/60 p-8 bg-white shadow-sm">
              <PencilRuler className="w-8 h-8 text-brand-accent" />
              <h3 className="text-xl font-bold uppercase tracking-tight text-foreground">Bespoke Designs</h3>
              <p className="text-zinc-500 text-sm font-light leading-relaxed">
                Every interior is designed to match your lifestyle, needs, and the way you live.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="space-y-4 border border-zinc-200/60 p-8 bg-white shadow-sm">
              <Hammer className="w-8 h-8 text-brand-accent" />
              <h3 className="text-xl font-bold uppercase tracking-tight text-foreground">Expert Craftsmanship</h3>
              <p className="text-zinc-500 text-sm font-light leading-relaxed">
                Our skilled team pays attention to every detail to deliver a perfect finish.
              </p>
            </div>
            {/* Feature 5 */}
            <div className="space-y-4 border border-zinc-200/60 p-8 bg-white shadow-sm">
              <Handshake className="w-8 h-8 text-brand-accent" />
              <h3 className="text-xl font-bold uppercase tracking-tight text-foreground">End-to-End Service</h3>
              <p className="text-zinc-500 text-sm font-light leading-relaxed">
                From design and manufacturing to delivery and installation, everything is managed by us.
              </p>
            </div>
            {/* Feature 6 */}
            <div className="space-y-4 border border-zinc-200/60 p-8 bg-white shadow-sm">
              <ShieldCheck className="w-8 h-8 text-brand-accent" />
              <h3 className="text-xl font-bold uppercase tracking-tight text-foreground">Quality Assurance</h3>
              <p className="text-zinc-500 text-sm font-light leading-relaxed">
                Every product is carefully checked before delivery to ensure the highest quality.
              </p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
