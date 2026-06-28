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
        const nameWithoutExt = path.parse(file).name;
        // Clean title from filename, e.g. "kitchen (1)" -> "Kitchen 1"
        const title = nameWithoutExt
          .replace(/[-_()]/g, ' ')
          .replace(/\s+/g, ' ')
          .trim()
          .split(' ')
          .map(w => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' ');

        return {
          id: `${key}-${idx}`,
          src: `/images/${dir}/${file}`,
          title: title
        };
      });
    } else {
      result[key] = [];
    }
  });

  return NextResponse.json(result);
}
