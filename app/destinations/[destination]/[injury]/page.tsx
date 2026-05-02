import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DisclaimerBlock } from "@/components/blocks/DisclaimerBlock";
import { EvidenceChecklistBlock } from "@/components/blocks/EvidenceChecklistBlock";
import { FaqBlock } from "@/components/blocks/FaqBlock";
import { LeadFormBlock } from "@/components/blocks/LeadFormBlock";
import { LegalIntroBlock } from "@/components/blocks/LegalIntroBlock";
import { LiabilityBlock } from "@/components/blocks/LiabilityBlock";
import { SourcesBlock } from "@/components/blocks/SourcesBlock";
import { accidentTypes, destinations, getAccidentBySlug, getDestinationBySlug } from "@/data/site-data";
import { validatePageData } from "@/lib/validation";

export function generateStaticParams() {
  return destinations.flatMap((dest) => 
    accidentTypes.map((accident) => ({ 
      destination: dest.slug, 
      injury: accident.slug 
    }))
  );
}

export async function generateMetadata({ params }: { params: Promise<{ destination: string; injury: string }> }): Promise<Metadata> {
  const { destination, injury } = await params;
  const dest = getDestinationBySlug(destination);
  const accident = getAccidentBySlug(injury);
  if (!dest || !accident) return {};
  return {
    title: `${accident.name} in ${dest.name} | Cruise Ship Injury Lawyer`,
    description: `Injured from ${accident.name.toLowerCase()} in ${dest.name}? Learn about your legal rights and compensation options.`
  };
}

export default async function DestinationInjuryPage({ params }: { params: Promise<{ destination: string; injury: string }> }) {
  const { destination, injury } = await params;
  const dest = getDestinationBySlug(destination);
  const accident = getAccidentBySlug(injury);
  
  if (!dest || !accident) return notFound();

  const intro = `If you suffered ${accident.name.toLowerCase()} while in ${dest.name} during a cruise, you may have a legal claim. Cruise lines and excursion operators have a duty to ensure passenger safety in port destinations.`;
  
  const liableParties = [
    "Cruise line (for ship-sponsored excursions)",
    "Third-party excursion operators",
    "Local tour companies",
    "Port facility operators",
    "Transportation providers"
  ];

  const timeline = [
    "Seek immediate medical attention in port or on ship",
    "Report the incident to ship security immediately",
    "Document the scene with photos if possible",
    "Collect contact information from witnesses",
    "Request copies of any local incident reports",
    "Contact a maritime injury attorney before returning home"
  ];

  const faqs = [
    {
      question: `Can I sue if I was injured in ${dest.name}?`,
      answer: `Yes, if your injury resulted from negligence by the cruise line, excursion operator, or other parties in ${dest.name}, you may have a valid maritime injury claim. Jurisdictional rules can be complex, so consult an attorney familiar with cruise accidents.`
    },
    {
      question: "Who is responsible for shore excursion accidents?",
      answer: "Responsibility depends on whether the excursion was ship-sponsored or independent. Cruise lines have greater liability for excursions they promote and sell, but independent operators may also be held accountable for negligence."
    },
    {
      question: "Do local laws apply to cruise accidents in port?",
      answer: "While local laws may apply to some aspects of your case, cruise line ticket contracts typically specify which jurisdiction governs disputes. Many require lawsuits to be filed in Miami, Florida federal court."
    }
  ];

  const sources = [
    { title: "Maritime Law - Cruise Ship Passenger Rights" },
    { title: `${dest.name} Port Authority Regulations` },
    { title: "Shore Excursion Safety Guidelines" }
  ];

  const pageData = {
    cruiseLine: { slug: "", name: "" },
    accident,
    intro,
    ctaLabel: "Get Free Case Review",
    faqs,
    sources,
    timeline,
    liableParties,
    disclaimer: "This information is provided for educational purposes only and does not constitute legal advice. Consult a qualified maritime injury attorney for advice specific to your situation.",
    relatedAccidents: accidentTypes.filter(a => a.slug !== injury).slice(0, 12)
  };

  const issues = validatePageData(pageData);

  return (
    <main>
      <section className="hero">
        <div className="container">
          <p className="small">/destinations/{dest.slug}/{accident.slug}/</p>
          <h1 className="h1">{accident.name} in {dest.name}</h1>
          <p>{accident.overview}</p>
          <a className="cta-button" href="#case-review">Get Free Case Review</a>
        </div>
      </section>

      <LegalIntroBlock intro={intro} />
      <LiabilityBlock liableParties={liableParties} />
      <EvidenceChecklistBlock items={accident.evidenceChecklist} />
      
      <section className="section">
        <div className="container">
          <h2 className="h2">Claim Timeline for {dest.name} Incidents</h2>
          <ol>
            {timeline.map((s) => <li key={s}>{s}</li>)}
          </ol>
        </div>
      </section>

      <FaqBlock items={faqs} />
      <SourcesBlock items={sources} />
      <LeadFormBlock />
      <DisclaimerBlock text={pageData.disclaimer} />
      
      {issues.length > 0 && (
        <section className="section">
          <div className="container">
            <p className="small">QA warnings: {issues.join("; ")}</p>
          </div>
        </section>
      )}
    </main>
  );
}
