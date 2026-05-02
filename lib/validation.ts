import { PagePayload } from "@/data/site-data";

export function validatePageData(data: PagePayload): string[] {
  const issues: string[] = [];

  if (data.intro.length < 50) {
    issues.push("Intro too short (< 50 chars)");
  }

  if (data.faqs.length < 3) {
    issues.push(`FAQ count low (${data.faqs.length} < 3)`);
  }

  if (data.relatedAccidents.length < 4) {
    issues.push(`Related links low (${data.relatedAccidents.length} < 4)`);
  }

  if (data.accident.evidenceChecklist.length < 3) {
    issues.push(`Evidence checklist low (${data.accident.evidenceChecklist.length} < 3)`);
  }

  return issues;
}
