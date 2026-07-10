"use client";

import React from "react";
import dynamic from "next/dynamic";
import LazySection from "@/components/LazySection";

// Dynamically import only the interactive client components with ssr: false
const GallerySection = dynamic(() => import("@/components/GallerySection"), { ssr: false });
const MaterialsSection = dynamic(() => import("@/components/MaterialsSection"), { ssr: false });

export function LazyGallery({ initialData }: { initialData: any }) {
  return (
    <LazySection height="700px" ids={["gallery-kitchens", "gallery-tv", "gallery-wardrobes", "gallery-bedrooms", "gallery-living"]}>
      <GallerySection initialData={initialData} />
    </LazySection>
  );
}

export function LazyMaterials({ initialData }: { initialData: any }) {
  return (
    <LazySection height="700px" ids={["materials"]}>
      <MaterialsSection initialData={initialData} />
    </LazySection>
  );
}
