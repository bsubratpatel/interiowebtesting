import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://interiocore.com";
  
  const routes = [
    "",
    "/modular-kitchen-design-jharsuguda",
    "/wardrobe-design-jharsuguda",
    "/tv-unit-design-jharsuguda",
    "/bedroom-interior-design-jharsuguda",
    "/living-room-interior-design-jharsuguda",
    "/full-home-interior-jharsuguda",
    "/design-gallery",
    "/materials-finishes",
    "/about-us",
    "/faq",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.includes("jharsuguda") ? 0.9 : 0.7,
  }));
}
