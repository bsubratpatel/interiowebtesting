import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const baseDir = path.join(process.cwd(), 'public', 'images', 'Materials_and_Finishes');
  const categories = [
    { dir: 'laminates', key: 'materials-laminates' },
    { dir: 'acrylic', key: 'materials-acrylic' },
    { dir: 'veneers', key: 'materials-veneers' },
    { dir: 'hardware', key: 'materials-hardware' },
    { dir: 'glass', key: 'materials-glass' },
    { dir: 'lighting', key: 'materials-lighting' },
    { dir: 'countertops', key: 'materials-countertops' },
    { dir: 'accessories', key: 'materials-accessories' },
  ];
  const result: Record<string, { id: string; src: string; title: string }[]> = {};

  categories.forEach(({ dir, key }) => {
    const dirPath = path.join(baseDir, dir);
    if (fs.existsSync(dirPath)) {
      const files = fs.readdirSync(dirPath);
      // Sort naturally
      const sortedFiles = files.sort((a, b) => {
        return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
      });

      const matchedFiles = sortedFiles.filter(f => f.toLowerCase().endsWith('.webp') || f.toLowerCase().endsWith('.jpg') || f.toLowerCase().endsWith('.png'));
      
      result[key] = matchedFiles.map((file, idx) => {
        const nameWithoutExt = path.parse(file).name;
        const title = nameWithoutExt
          .replace(/[-_()]/g, ' ')
          .replace(/\s+/g, ' ')
          .trim()
          .split(' ')
          .map(w => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' ');

        return {
          id: `${key}-${idx}`,
          src: `/images/Materials_and_Finishes/${dir}/${file}`,
          title: title
        };
      });
    } else {
      result[key] = [];
    }
  });

  return NextResponse.json(result);
}
