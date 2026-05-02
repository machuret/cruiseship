import type { CruiseAccidentPageData } from "@/lib/types";

export function validatePageData(data: CruiseAccidentPageData): string[] {
  const issues: string[] = [];
  if (!data.intro || data.intro.length < 80) issues.push("Intro is too short");
  if (data.faqs.length < 3) issues.push("Need at least 3 FAQs");
  if (data.relatedAccidents.length < 3) issues.push("Need at least 3 related links");
  if (data.accident.evidenceChecklist.length < 4) issues.push("Evidence checklist is incomplete");
  return issues;
}
