import { cache } from 'react';
import { CruiseLine, AccidentType, Destination } from '@/data/site-data';

// Cache for 1 hour during build, unlimited on server
const CACHE_DURATION = 3600;

// Cached data loading functions
export const getCruiseLineBySlug = cache(async (slug: string): Promise<CruiseLine | null> => {
  try {
    const data = await import(`@/data/cruise-lines/${slug}.json`);
    return data.default || data;
  } catch {
    // Fallback to old data for backwards compatibility
    const { cruiseLines } = await import('@/data/site-data');
    return cruiseLines.find(c => c.slug === slug) || null;
  }
});

export const getAccidentBySlug = cache(async (slug: string): Promise<AccidentType | null> => {
  try {
    const data = await import(`@/data/accidents/${slug}.json`);
    return data.default || data;
  } catch {
    const { accidentTypes } = await import('@/data/site-data');
    return accidentTypes.find(a => a.slug === slug) || null;
  }
});

export const getDestinationBySlug = cache(async (slug: string): Promise<Destination | null> => {
  try {
    const data = await import(`@/data/destinations/${slug}.json`);
    return data.default || data;
  } catch {
    const { destinations } = await import('@/data/site-data');
    return destinations.find(d => d.slug === slug) || null;
  }
});

// Pre-computed lists for static generation
export const getAllCruiseLines = cache(async (): Promise<CruiseLine[]> => {
  const { cruiseLines } = await import('@/data/site-data');
  return cruiseLines;
});

export const getAllAccidents = cache(async (): Promise<AccidentType[]> => {
  const { accidentTypes } = await import('@/data/site-data');
  return accidentTypes;
});

export const getAllDestinations = cache(async (): Promise<Destination[]> => {
  const { destinations } = await import('@/data/site-data');
  return destinations;
});
