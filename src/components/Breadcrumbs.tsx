import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const baseUrl = "https://interiocore.com";

  const schemaItems = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": baseUrl,
    },
    ...items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 2,
      "name": item.name,
      "item": item.url.startsWith("http") ? item.url : `${baseUrl}${item.url}`,
    })),
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": schemaItems,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Breadcrumb" className="py-4 bg-zinc-50 border-b border-zinc-200/60">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex items-center gap-2 text-xs font-light text-zinc-500 overflow-x-auto">
          <Link href="/" className="hover:text-brand-accent flex items-center gap-1 transition-colors shrink-0">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>

          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <React.Fragment key={item.url}>
                <ChevronRight className="w-3 h-3 text-zinc-400 shrink-0" />
                {isLast ? (
                  <span className="font-semibold text-foreground shrink-0" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.url} className="hover:text-brand-accent transition-colors shrink-0">
                    {item.name}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </nav>
    </>
  );
}
