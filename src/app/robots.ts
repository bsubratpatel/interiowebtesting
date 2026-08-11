import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/favicon.ico", "/favicon-*.png", "/android-chrome-*.png", "/site.webmanifest", "/interiocore_icon.webp"],
        disallow: ["/api/"],
      },
      {
        userAgent: "Google-Favicon",
        allow: "/",
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
    ],
    sitemap: "https://interiocore.com/sitemap.xml",
  };
}


