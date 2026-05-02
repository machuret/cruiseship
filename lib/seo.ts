import { PagePayload, AccidentType } from "@/data/site-data";

// Settlement ranges by injury type (for SEO value proposition)
const settlementRanges: Record<string, { min: string; max: string }> = {
  "slip-and-fall": { min: "$50K", max: "$500K" },
  "pool-deck-fall": { min: "$75K", max: "$650K" },
  "stairway-fall": { min: "$60K", max: "$550K" },
  "elevator-escalator": { min: "$100K", max: "$800K" },
  "tender-boat": { min: "$125K", max: "$750K" },
  "shore-excursion-crash": { min: "$150K", max: "$1M" },
  "excursion-activity": { min: "$100K", max: "$600K" },
  "food-poisoning": { min: "$25K", max: "$200K" },
  "legionnaires": { min: "$200K", max: "$1.5M" },
  "food-allergen": { min: "$75K", max: "$500K" },
  "burn-injuries": { min: "$100K", max: "$1.2M" },
  "electrical-shock": { min: "$150K", max: "$900K" },
  "drowning": { min: "$500K", max: "$3M" },
  "water-slide": { min: "$75K", max: "$600K" },
  "gym-injury": { min: "$50K", max: "$400K" },
  "spa-injury": { min: "$40K", max: "$350K" },
  "assault-passenger": { min: "$100K", max: "$700K" },
  "assault-crew": { min: "$200K", max: "$1M" },
  "inadequate-security": { min: "$125K", max: "$800K" },
  "man-overboard": { min: "$1M", max: "$5M" },
  "balcony-accident": { min: "$300K", max: "$2M" },
  "cabin-fixture": { min: "$50K", max: "$400K" },
  "medical-negligence": { min: "$250K", max: "$2M" },
  "delayed-evacuation": { min: "$200K", max: "$1.5M" },
  "fire-smoke": { min: "$150K", max: "$1.2M" },
  "falling-objects": { min: "$75K", max: "$550K" },
  "door-crush": { min: "$100K", max: "$700K" },
  "gangway-accident": { min: "$125K", max: "$650K" },
  "mold-exposure": { min: "$75K", max: "$500K" },
  "child-injury": { min: "$100K", max: "$800K" }
};

export function getSettlementRange(accidentSlug: string): { min: string; max: string } {
  return settlementRanges[accidentSlug] || { min: "$50K", max: "$500K" };
}

export function buildTitle(data: PagePayload): string {
  const range = getSettlementRange(data.accident.slug);
  // Include settlement range in title for higher CTR
  return `${data.cruiseLine.name} ${data.accident.name} Settlements | ${range.min}-${range.max}+ Range`;
}

export function buildDescription(data: PagePayload): string {
  const range = getSettlementRange(data.accident.slug);
  // Urgency-focused description with settlement hook
  return `Free consultation. ${data.cruiseLine.name} ${data.accident.name.toLowerCase()} settlements typically ${range.min}-${range.max}. 6-month deadline to file notice. Don't wait - protect your claim now.`;
}

export function buildInjuryTitle(injury: AccidentType): string {
  const range = getSettlementRange(injury.slug);
  return `${injury.name} Cruise Settlements | ${range.min}-${range.max}+ Average`;
}

export function buildInjuryDescription(injury: AccidentType): string {
  const range = getSettlementRange(injury.slug);
  return `Free legal consultation. ${injury.name} settlements average ${range.min}-${range.max}. Time-limited to file your cruise injury claim. Speak to a maritime lawyer today.`;
}

export function buildCanonical(path: string): string {
  return `https://www.cruiseshipinjurylawyer.com${path}`;
}

// Generate fresh "Last Updated" date
export function getLastUpdated(): string {
  const now = new Date();
  return now.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

// Calculate deadline warning (6 months from injury date)
export function calculateDeadlineNotice(): string {
  const deadline = new Date();
  deadline.setMonth(deadline.getMonth() + 6);
  return deadline.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}
