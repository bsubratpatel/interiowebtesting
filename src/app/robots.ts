import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/favicon.svg", "/favicon.ico", "/site.webmanifest"],
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


