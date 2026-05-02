import type { CruiseAccidentPageData } from "@/lib/types";

export function buildTitle(data: CruiseAccidentPageData): string {
  return `${data.cruiseLine.name} ${data.accident.name} Lawsuit Guide (2026)`;
}

export function buildDescription(data: CruiseAccidentPageData): string {
  return `Learn liability, evidence, deadlines, and compensation options after a ${data.accident.name.toLowerCase()} incident on ${data.cruiseLine.name}.`;
}

export function buildCanonical(path: string): string {
  return `https://www.cruiseshipinjurylawyer.com${path}`;
}
