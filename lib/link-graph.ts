import { accidentTypes, cruiseLines, destinations, AccidentType, CruiseLine, Destination } from "@/data/site-data";

export interface RelatedEntity {
  slug: string;
  name: string;
  url: string;
}

export function getRelatedCruiseLines(currentSlug: string, count: number = 5): CruiseLine[] {
  return cruiseLines
    .filter(c => c.slug !== currentSlug)
    .slice(0, count);
}

export function getRelatedAccidents(currentSlug: string, count: number = 5): AccidentType[] {
  return accidentTypes
    .filter(a => a.slug !== currentSlug)
    .slice(0, count);
}

export function getRelatedDestinations(currentSlug: string, count: number = 5): Destination[] {
  return destinations
    .filter(d => d.slug !== currentSlug)
    .slice(0, count);
}

export function getRandomAccidents(count: number = 4): AccidentType[] {
  const shuffled = [...accidentTypes].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export function buildCruiseLineUrl(slug: string): string {
  return `/cruise-lines/${slug}`;
}

export function buildAccidentUrl(slug: string): string {
  return `/injuries/${slug}`;
}

export function buildDestinationUrl(slug: string): string {
  return `/destinations/${slug}`;
}

export function buildCruiseAccidentUrl(cruiseLineSlug: string, accidentSlug: string): string {
  return `/cruise-lines/${cruiseLineSlug}/${accidentSlug}`;
}

export function buildDestinationAccidentUrl(destinationSlug: string, accidentSlug: string): string {
  return `/destinations/${destinationSlug}/${accidentSlug}`;
}
