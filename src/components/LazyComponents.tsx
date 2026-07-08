"use client";

import React from "react";
import dynamic from "next/dynamic";
import LazySection from "@/components/LazySection";

// Dynamically import below-the-fold components with ssr: false (allowed in Client Components)
const AboutSection = dynamic(() => import("@/components/AboutSection"), { ssr: false });
const ServicesSection = dynamic(() => import("@/components/ServicesSection"), { ssr: false });
const GallerySection = dynamic(() => import("@/components/GallerySection"), { ssr: false });
const CTASection = dynamic(() => import("@/components/CTASection"), { ssr: false });
const ProcessSection = dynamic(() => import("@/components/ProcessSection"), { ssr: false });
const MaterialsSection = dynamic(() => import("@/components/MaterialsSection"), { ssr: false });
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"), { ssr: false });
const ContactSection = dynamic(() => import("@/components/ContactSection"), { ssr: false });

interface LazyComponentsProps {
  galleryData: any;
  materialsData: any;
}

export default function LazyComponents({ galleryData, materialsData }: LazyComponentsProps) {
  return (
    <>
      {/* 3. Our Services */}
      <LazySection height="600px">
        <ServicesSection />
      </LazySection>

      {/* 4. Curated Spaces (Gallery) */}
      <LazySection height="700px">
        <GallerySection initialData={galleryData} />
      </LazySection>

      {/* 5. New CTA Section */}
      <LazySection height="300px">
        <CTASection />
      </LazySection>

      {/* 6. Our Process */}
      <LazySection height="600px">
        <ProcessSection />
      </LazySection>

      {/* 7. Material Palette */}
      <LazySection height="700px">
        <MaterialsSection initialData={materialsData} />
      </LazySection>

      {/* 8. Client Experiences */}
      <LazySection height="400px">
        <TestimonialsSection />
      </LazySection>

      {/* 9. About Interiocore */}
      <LazySection height="700px">
        <AboutSection />
      </LazySection>

      {/* 10. Start Your Project (Contact Form) */}
      <LazySection height="600px">
        <ContactSection />
      </LazySection>
    </>
  );
}
