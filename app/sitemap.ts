import { MetadataRoute } from "next";
import { cruiseLines, accidentTypes, destinations } from "@/data/site-data";

const BASE_URL = "https://cruiseshipinjurycases.com";

// Cache the sitemap to avoid regeneration
let cachedSitemap: MetadataRoute.Sitemap | null = null;

export default function sitemap(): MetadataRoute.Sitemap {
  // Return cached sitemap if available
  if (cachedSitemap) {
    return cachedSitemap;
  }
  
  // Use a single date for all entries to avoid expensive Date() calls
  const lastMod = new Date();
  
  const routes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: lastMod, changeFrequency: "daily", priority: 1 },
    { url: `${BASE_URL}/cruise-lines`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/injuries`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/destinations`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.8 },
  ];

  // Cruise line hub pages
  cruiseLines.forEach((line) => {
    routes.push({
      url: `${BASE_URL}/cruise-lines/${line.slug}`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.7
    });
  });

  // Cruise line + accident pages (30 x 30 = 900 pages)
  cruiseLines.forEach((line) => {
    accidentTypes.forEach((accident) => {
      routes.push({
        url: `${BASE_URL}/cruise-lines/${line.slug}/${accident.slug}`,
        lastModified: lastMod,
        changeFrequency: "weekly",
        priority: 0.6
      });
    });
  });

  // Destination hub pages
  destinations.forEach((dest) => {
    routes.push({
      url: `${BASE_URL}/destinations/${dest.slug}`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.7
    });
  });

  // Destination + accident pages
  destinations.forEach((dest) => {
    accidentTypes.forEach((accident) => {
      routes.push({
        url: `${BASE_URL}/destinations/${dest.slug}/${accident.slug}`,
        lastModified: lastMod,
        changeFrequency: "weekly",
        priority: 0.6
      });
    });
  });

  // Injury hub pages
  accidentTypes.forEach((accident) => {
    routes.push({
      url: `${BASE_URL}/injuries/${accident.slug}`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.7
    });
  });

  // Cache and return
  cachedSitemap = routes;
  return routes;
}
