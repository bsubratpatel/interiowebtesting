"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, Award, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimationWrapper from "@/components/AnimationWrapper";

export default function MaterialsSection() {
  const [activeCategory, setActiveCategory] = useState<"all" | "substrate" | "finish">("all");

  const handleWhatsApp = (materialTitle?: string) => {
    const text = materialTitle
      ? `Hi Interiocore! I'm interested in the "${materialTitle}" material finish.`
      : "Hi Interiocore! I'd like to learn more about your materials and finishes.";
    window.open(`https://wa.me/919776991699?text=${encodeURIComponent(text)}`, "_blank");
  };

  const materials = [
    {
      title: "Boiling Water Resistant (BWR) Plywood",
      type: "substrate",
      desc: "Marine-grade BWR action plywood composed of uniform wooden layers bonded with phenol formaldehyde synthetic resins. Perfect for wet base cabinets.",
      thickness: "Available in 12mm, 16mm, 19mm",
      highlight: "Waterproof, Anti-Termite, Fire-Retardant",
      img: "/images/Materials & Finishes/material (1).webp",
    },
    {
      title: "High-Density High-Moisture Resistant (HDHMR)",
      type: "substrate",
      desc: "Engineered density board compressed with micro-wood chips and special moisture-resistant resins. Extremely dense wood fiber structure preventing paint cracking.",
      thickness: "Available in 16mm, 18mm",
      highlight: "High Density, Warp Resistant, Extreme Screw Strength",
      img: "/images/Materials & Finishes/material (2).webp",
    },
    {
      title: "Medium-Density Fiberboard (MDF)",
      type: "substrate",
      desc: "Soft-texture fine wood fibers bonded under intense heat and pressure. Offers smooth surfaces perfect for micro-routing details and direct membrane press overlays.",
      thickness: "Available in 15mm, 18mm",
      highlight: "Seamless Routing, Flat Surface, Cost Efficient",
      img: "/images/Materials & Finishes/material (3).webp",
    },
    {
      title: "Anti-Fingerprint Premium Acrylic",
      type: "finish",
      desc: "High-gloss, scratch-resistant synthetic polymer sheet laminated on substrates. Reflects light beautifully, creating a mirrored, premium luxury gloss feel.",
      thickness: "Lamination thickness: 1mm - 1.5mm",
      highlight: "Ultra Gloss, Scratch Resistant, Anti-Fingerprint Coating",
      img: "/images/Materials & Finishes/material (4).webp",
    },
    {
      title: "Natural & Reconstituted Veneer",
      type: "finish",
      desc: "Thin slices of natural hardwood displaying unique organic grains and textures. Polished with PU matte or high-gloss coatings for elegant timber styling.",
      thickness: "Lamination thickness: 0.5mm - 4mm",
      highlight: "Unique Wood Grains, Real Timber Texture, PU Polish",
      img: "/images/Materials & Finishes/material (5).webp",
    },
    {
      title: "High-Pressure Laminate (HPL)",
      type: "finish",
      desc: "Multiple layers of kraft paper saturated with thermosetting resins. Extremely hard-wearing surface suited for cabinet interiors and heavy-duty drawers.",
      thickness: "Lamination thickness: 0.8mm - 1mm",
      highlight: "Extreme Impact Resistance, Cost Efficient, Anti-Bacterial",
      img: "/images/Materials & Finishes/material (6).webp",
    },
    {
      title: "German-Certified Modular Hardware",
      type: "finish",
      desc: "Flawless soft-close drawer runners, tandem boxes, pantry pull-outs, and heavy-duty hinges certified for 100,000 opening cycles.",
      thickness: "Load capacity: up to 50kg per drawer",
      highlight: "Soft-Close Damper, Rustproof SS Coatings, Lifetime Cycle tested",
      img: "/images/Materials & Finishes/material (7).webp",
    },
    {
      title: "Polyurethane (PU) Lacquer Polish",
      type: "finish",
      desc: "Seamless liquid paint polymer sprayed in dust-free chambers and cured under UV lamps. Leaves no visible joints or edge-band lines.",
      thickness: "Multiple coats (Primer + 3 Paint layers + Top Seal)",
      highlight: "Seamless Surface, Anti-Yellowing UV, 1000+ Shades",
      img: "/images/Materials & Finishes/material (8).webp",
    },
  ];

  const filteredMaterials = activeCategory === "all"
    ? materials
    : materials.filter(m => m.type === activeCategory);

  return (
    <section id="materials" className="py-24 bg-white border-b border-zinc-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-12">
        
        {/* Header Block */}
        <AnimationWrapper className="flex flex-col items-center space-y-4 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold text-brand-accent uppercase tracking-widest">Glossary</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-foreground">
            Materials & Finishes
          </h2>
          <p className="text-zinc-500 text-base font-light leading-relaxed">
            Inspect our certified substrate cores and coatings. Robotic edge-banding ensures zero water seepages.
          </p>
        </AnimationWrapper>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 pt-4">
          {(
            [
              { id: "all", label: "All Materials" },
              { id: "substrate", label: "Substrate Cores" },
              { id: "finish", label: "Coatings & Hardware" },
            ] as const
          ).map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActiveCategory(btn.id)}
              className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-full border transition-all duration-300 cursor-pointer ${
                activeCategory === btn.id
                  ? "bg-brand-accent text-white border-brand-accent shadow-sm"
                  : "border-zinc-200 bg-white text-zinc-500 hover:text-foreground hover:border-zinc-300"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          {filteredMaterials.map((mat, idx) => (
            <AnimationWrapper
              key={mat.title}
              delay={idx * 0.05}
              className="bg-background border border-zinc-200/80 rounded-3xl overflow-hidden hover:border-brand-accent/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={mat.img}
                  alt={mat.title}
                  fill
                  className="object-cover brightness-[0.95] hover:scale-103 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <span className="absolute top-4 left-4 bg-white/95 text-brand-accent text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-zinc-200/60 shadow-sm">
                  {mat.type}
                </span>
              </div>
              
              <div className="p-8 flex-grow space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground tracking-tight leading-snug">
                    {mat.title}
                  </h3>
                  <p className="text-zinc-500 text-sm font-light leading-relaxed">
                    {mat.desc}
                  </p>
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider block">
                    Specs: {mat.thickness}
                  </span>
                  <div className="flex gap-2 items-center text-xs font-bold text-brand-accent uppercase tracking-wider">
                    <Check className="h-4 w-4 shrink-0 text-brand-accent" /> {mat.highlight}
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0 border-t border-zinc-200/60 mt-4 flex items-center justify-between">
                <Button
                  onClick={() => handleWhatsApp(mat.title)}
                  size="sm"
                  className="bg-brand-accent text-white hover:bg-brand-accent-hover rounded-full px-6 h-9 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 active:scale-95 duration-200 cursor-pointer"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  Inquire
                </Button>
                <div className="flex items-center gap-1.5 text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
                  <Award className="h-4.5 w-4.5 text-brand-accent" /> ISO Certified
                </div>
              </div>
            </AnimationWrapper>
          ))}
        </div>

        {/* Labs Standards Section */}
        <div className="space-y-12 pt-12">
          <AnimationWrapper className="flex flex-col items-center space-y-4 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-brand-accent uppercase tracking-widest">Quality Checks</span>
            <h2 className="text-3xl font-bold uppercase tracking-tight text-foreground">Our Rigorous Lab Testing</h2>
            <p className="text-zinc-500 text-sm sm:text-base font-light">
              We certify every board substrate against moisture warping and structural degradation under standard stress tests.
            </p>
          </AnimationWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              { title: "2-Hour Boil Test", desc: "No core swelling, delamination, or edge deformation observed under continuous boiling." },
              { title: "Moisture Content Check", desc: "Raw plywood levels optimized strictly below 8-12% relative moisture to ensure zero mold." },
              { title: "Screw Holding Capacity", desc: "Tested with 250kg pullout forces ensuring high hinge durability over a lifetime." },
            ].map((std) => (
              <AnimationWrapper key={std.title} className="bg-background border border-zinc-200/80 p-6 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 space-y-2">
                <h4 className="text-sm font-bold text-foreground uppercase tracking-tight">{std.title}</h4>
                <p className="text-zinc-500 text-sm font-light leading-relaxed">{std.desc}</p>
              </AnimationWrapper>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
