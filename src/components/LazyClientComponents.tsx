"use client";

import React from "react";
import GallerySection from "@/components/GallerySection";
import dynamic from "next/dynamic";
import LazySection from "@/components/LazySection";

import MaterialsSection from "@/components/MaterialsSection";

export function LazyGallery({ initialData }: { initialData: any }) {
  return (
    <div className="content-visibility-auto min-h-[700px]">
      <GallerySection initialData={initialData} />
    </div>
  );
}

export function LazyMaterials({ initialData }: { initialData: any }) {
  return (
    <div className="content-visibility-auto min-h-[700px]">
      <MaterialsSection initialData={initialData} />
    </div>
  );
}
