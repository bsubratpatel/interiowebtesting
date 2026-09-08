import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-32 bg-zinc-50/60 border-b border-zinc-200/50">
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
              <span className="text-xs font-bold text-brand-accent uppercase tracking-[0.2em] mb-4 block">About Us</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-foreground leading-[1.15]">
                We Design Homes You Love to Live In.
              </h2>
            </div>
            
            <div>
              <div className="w-12 h-1 bg-brand-accent"></div>
            </div>

            <div className="space-y-5 text-zinc-600 font-light text-base sm:text-lg leading-relaxed">
              <p>
                InterioCore is an interior design studio based in Jharsuguda, helping homeowners create beautiful, comfortable, and practical spaces. From modular kitchens and wardrobes to TV units and complete home interiors, we design every space around how you live.
              </p>
              <p>
                We focus on smart layouts, quality materials, useful storage, and designs that look good for years. Our goal is simple: to make your home more beautiful, more organized, and more comfortable to live in.
              </p>
            </div>

            <Link
              href="/contact"
              className="hover:bg-brand-secondary hover:text-white transition-all rounded-none px-6 py-3.5 text-brand-secondary font-bold tracking-[0.1em] uppercase flex items-center gap-3 active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50 focus-visible:ring-offset-2 w-fit border border-brand-secondary/20 bg-transparent hover:border-transparent cursor-pointer"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
