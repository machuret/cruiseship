export type CruiseLine = { slug: string; name: string; founded?: number; summary: string };

export type AccidentType = {
  slug: string;
  name: string;
  overview: string;
  riskFactors: string[];
  commonInjuries: string[];
  evidenceChecklist: string[];
};

export type FaqItem = { question: string; answer: string };

export type CruiseAccidentPageData = {
  cruiseLine: CruiseLine;
  accident: AccidentType;
  intro: string;
  liableParties: string[];
  timeline: string[];
  faqs: FaqItem[];
  relatedAccidents: AccidentType[];
  ctaLabel: string;
  disclaimer: string;
  sources: string[];
};
