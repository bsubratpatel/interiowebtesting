import React from "react";
import Image from "next/image";
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
              <span className="text-xs font-bold text-brand-accent uppercase tracking-[0.2em] mb-4 block">About Interiocore</span>
              <h2 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tighter text-foreground leading-[1.1]">
                Where Comfort<br />Meets Luxury
              </h2>
            </div>
            
            <div>
              <div className="w-12 h-1 bg-brand-accent"></div>
            </div>

            <div className="space-y-6 text-zinc-600 font-light text-lg">
              <p>
                Your home should be your happiest place. At Interiocore Design Studio, we create premium wooden interiors that bring comfort, beauty, and functionality together.
              </p>
              <p>
                Founded with a simple vision to design premium spaces, we combine elegant aesthetics, quality materials, and skilled craftsmanship to build interiors that are stylish, practical, and built to last.
              </p>
              <p>
                Our mission is to help families create warm, welcoming environments that perfectly match their lifestyle, ensuring every room feels timeless and inviting.
              </p>
            </div>

            <a
              href="#contact"
              className="hover:bg-brand-secondary hover:text-white transition-all rounded-none px-6 py-3.5 text-brand-secondary font-bold tracking-[0.1em] uppercase flex items-center gap-3 active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50 focus-visible:ring-offset-2 w-fit border border-brand-secondary/20 bg-transparent hover:border-transparent cursor-pointer"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
