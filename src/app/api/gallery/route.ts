import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  const categories = [
    { dir: 'kitchen renders', key: 'gallery-kitchens' },
    { dir: 'tv unit', key: 'gallery-tv' },
    { dir: 'wardrobe', key: 'gallery-wardrobes' },
    { dir: 'bedroom', key: 'gallery-bedrooms' },
    { dir: 'living room', key: 'gallery-living' },
  ];
  const result: Record<string, { id: string; src: string; title: string }[]> = {};

  categories.forEach(({ dir, key }) => {
    const dirPath = path.join(imagesDir, dir);
    if (fs.existsSync(dirPath)) {
      const files = fs.readdirSync(dirPath);
      // Sort files naturally so they display in a sensible order (e.g. 1, 2, 3 instead of 1, 10, 11)
      const sortedFiles = files.sort((a, b) => {
        return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
      });

      const webpFiles = sortedFiles.filter(f => f.toLowerCase().endsWith('.webp') || f.toLowerCase().endsWith('.jpg') || f.toLowerCase().endsWith('.png'));
      
      result[key] = webpFiles.map((file, idx) => {
        let categoryPrefix = "Interior design";
        if (key === "gallery-kitchens") {
          const variations = [
            "Modular kitchen design",
            "Luxury modular kitchen layout",
            "Modern L-shaped kitchen interior",
            "Custom kitchen cabinet design",
            "Bespoke kitchen finish",
            "Contemporary modular kitchen",
          ];
          categoryPrefix = variations[idx % variations.length];
        } else if (key === "gallery-tv") {
          const variations = [
            "Custom TV unit design",
            "Modern TV console layout",
            "Luxury wall-mounted TV unit",
            "Bespoke entertainment console",
          ];
          categoryPrefix = variations[idx % variations.length];
        } else if (key === "gallery-wardrobes") {
          const variations = [
            "Bespoke wardrobe design",
            "Luxury sliding wardrobe layout",
            "Custom walk-in closet interior",
            "Modern bedroom wardrobe",
          ];
          categoryPrefix = variations[idx % variations.length];
        } else if (key === "gallery-bedrooms") {
          const variations = [
            "Luxury bedroom interior design",
            "Modern bedroom decor layout",
            "Master bedroom design",
          ];
          categoryPrefix = variations[idx % variations.length];
        } else if (key === "gallery-living") {
          const variations = [
            "Modern living room interior design",
            "Luxury living space styling",
            "Custom living room layout",
          ];
          categoryPrefix = variations[idx % variations.length];
        }

        const title = `${categoryPrefix} in Jharsuguda by Interiocore`;

        return {
          id: `${key}-${idx}`,
          src: `/images/${dir}/${file}`,
          title: title,
        };
      });
    } else {
      result[key] = [];
    }
  });

  return NextResponse.json(result);
}
