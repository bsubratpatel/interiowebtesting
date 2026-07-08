import React from "react";

export default function TestimonialsSection() {
  const reviews = [
    {
      name: "Rakesh Agrawal",
      location: "Jharsuguda",
      project: "Modular Kitchen",
      text: "The kitchen turned out exactly how we wanted. The quality, finishing, and overall experience were excellent. We are very happy with our new home.",
    },
    {
      name: "Priyanka Mishra",
      location: "Brajarajnagar",
      project: "Wardrobe & TV Unit",
      text: "From design to installation, everything was smooth. Our wardrobe and TV unit look beautiful, and the team was easy to work with.",
    },
    {
      name: "Ankit Verma",
      location: "Bengaluru",
      project: "Interior Design Service",
      text: "We chose Interiocore for interior design only. The designs were clear, practical, and easy for our contractor to execute. Highly recommended.",
    },
  ];

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-brand-secondary text-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* Header Block */}
        <div className="mb-24">
          <span className="text-xs font-bold text-[#E8621A] uppercase tracking-[0.2em] mb-4 block">Stories</span>
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
