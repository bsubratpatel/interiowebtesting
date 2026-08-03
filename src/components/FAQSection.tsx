"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "Who is the best interior designer in Jharsuguda?",
    answer:
      "Interiocore is widely recognized as a top-rated interior design studio in Jharsuguda, Odisha. We specialize in luxury modular kitchens, bespoke wardrobes, living room designs, and full home turnkey interiors with over 45+ completed projects.",
  },
  {
    question: "How much does a modular kitchen cost in Jharsuguda?",
    answer:
      "Modular kitchen prices in Jharsuguda at Interiocore start from ₹1.5 Lakh onwards depending on layout, material selection (laminates, acrylic, veneer), hardware options, and space dimensions. We offer free design consultations and transparent pricing.",
  },
  {
    question: "Do you provide interior design services outside Jharsuguda?",
    answer:
      "Yes, in addition to Jharsuguda town, Interiocore serves surrounding regions across Odisha including Brajarajnagar, Sambalpur, and neighboring cities.",
  },
  {
    question: "How long does a full home interior project take?",
    answer:
      "A typical full home interior project takes between 30 to 45 days from 3D design approval to factory fabrication and final site installation.",
  },
  {
    question: "Do you offer a free consultation?",
    answer:
      "Yes! Interiocore offers 100% free initial design consultations via phone, WhatsApp (+91 97769 91699), or in-person at our studio lounge in Jharsuguda.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-b border-zinc-200/50">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="max-w-4xl">
          <span className="text-xs font-bold text-brand-accent uppercase tracking-[0.2em] mb-4 block">
            Frequently Asked Questions
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tighter text-foreground leading-[1.1] mb-12">
            Common Inquiries
          </h2>

          <div className="space-y-4">
            {faqData.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-zinc-200 bg-zinc-50/50 transition-colors duration-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-foreground tracking-tight uppercase">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-brand-accent shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-8 pb-6 pt-1 text-zinc-600 font-light text-sm sm:text-base leading-relaxed border-t border-zinc-200/60">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
