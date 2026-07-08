import React from "react";
import { Factory, Gem, PencilRuler, Hammer, Handshake, ShieldCheck } from "lucide-react";

export default function WhyChooseUsSection() {
  return (
    <section id="about-why" className="py-16 sm:py-32 bg-zinc-50/60 border-b border-zinc-200/50">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="mb-16 text-center sm:text-left">
          <span className="text-xs font-bold text-brand-accent uppercase tracking-[0.2em] mb-4 block">Standards</span>
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
  );
}
