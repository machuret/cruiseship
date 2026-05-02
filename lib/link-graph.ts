import type { AccidentType, CruiseLine } from "@/lib/types";

export function relatedAccidentsForCruise(accidents: AccidentType[], current: string, limit = 12) {
  return accidents.filter((a) => a.slug !== current).slice(0, limit);
}

export function relatedCruiseLines(lines: CruiseLine[], current?: string, limit = 12) {
  return lines.filter((l) => l.slug !== current).slice(0, limit);
}
