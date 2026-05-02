import type { MetadataRoute } from "next";
import { accidentTypes, cruiseLines, destinations } from "@/data/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.cruiseshipinjurylawyer.com";
  const now = new Date();

  const cruiseLineHubs = cruiseLines.map((c) => ({ url: `${base}/cruise-lines/${c.slug}`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 }));
  const cruiseAccidentPages = cruiseLines.flatMap((c) => accidentTypes.map((a) => ({ url: `${base}/cruise-lines/${c.slug}/${a.slug}`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.7 })));
  const destinationHubs = destinations.map((d) => ({ url: `${base}/destinations/${d}`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.7 }));
  const injuryHubs = accidentTypes.map((a) => ({ url: `${base}/injuries/${a.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.75 }));
  const destinationInjuryPages = destinations.flatMap((d) => accidentTypes.map((a) => ({ url: `${base}/destinations/${d}/${a.slug}`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.68 })));

  return [{ url: base, lastModified: now, changeFrequency: "daily", priority: 1 }, ...cruiseLineHubs, ...cruiseAccidentPages, ...destinationHubs, ...injuryHubs, ...destinationInjuryPages];
}
