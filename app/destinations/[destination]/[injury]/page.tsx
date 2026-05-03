import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";
import { DisclaimerBlock } from "@/components/blocks/DisclaimerBlock";
import { EvidenceChecklistBlock } from "@/components/blocks/EvidenceChecklistBlock";
import { FaqBlock } from "@/components/blocks/FaqBlock";
import { JurisdictionAlertBlock } from "@/components/blocks/JurisdictionAlertBlock";
import { LeadFormBlock } from "@/components/blocks/LeadFormBlock";
import { LegalIntroBlock } from "@/components/blocks/LegalIntroBlock";
import { LiabilityBlock } from "@/components/blocks/LiabilityBlock";
import { SourcesBlock } from "@/components/blocks/SourcesBlock";
import { accidentTypes, destinations, getAccidentBySlug, getDestinationBySlug } from "@/data/site-data";
import { validatePageData } from "@/lib/validation";
import { caseStudyVariants, commonMistakeVariants, selectFromPool } from "@/lib/content-variants";

const CaseStudiesBlock = dynamic(() => import("@/components/blocks/CaseStudiesBlock").then(m => m.CaseStudiesBlock));
const CommonMistakesBlock = dynamic(() => import("@/components/blocks/CommonMistakesBlock").then(m => m.CommonMistakesBlock));
const TimelineCalculatorBlock = dynamic(() => import("@/components/blocks/TimelineCalculatorBlock").then(m => m.TimelineCalculatorBlock));
const SettlementValueBlock = dynamic(() => import("@/components/blocks/SettlementValueBlock").then(m => m.SettlementValueBlock));

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

  // Content rotation for destination-specific case studies and mistakes
  const pageSeed = `${destination}-${injury}`;
  const rotatedCaseStudies = selectFromPool(caseStudyVariants, pageSeed, 3).map(study => ({
    ...study,
    scenario: study.scenario.replace(/onboard|ship|vessel/gi, `in ${dest.name}`)
  }));
  const rotatedMistakes = selectFromPool(commonMistakeVariants, pageSeed, 5);

  // Settlement factors for destinations (shore excursion specific)
  const settlementFactors = [
    "Shore Excursion Type: Ship-sponsored vs Independent",
    `Port Location: ${dest.name} jurisdiction`,
    "Medical Treatment: Local vs Shipboard care",
    "Liability Clarity: Multiple potential defendants",
    "Documentation: Local incident reports required"
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
      <header className="page-header">
        <div className="page-header__inner container">
          <div className="page-header__content">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="/" className="breadcrumb__link">Home</a>
              <span className="breadcrumb__sep">/</span>
              <a href="/destinations" className="breadcrumb__link">Destinations</a>
              <span className="breadcrumb__sep">/</span>
              <a href={`/destinations/${dest.slug}`} className="breadcrumb__link">{dest.name}</a>
              <span className="breadcrumb__sep">/</span>
              <span className="breadcrumb__current">{accident.name}</span>
            </nav>

            <span className="tag">Destination Claim</span>

            <h1 className="page-header__title">{accident.name} <em className="text-accent">in {dest.name}</em></h1>

            <p className="page-header__lead">{accident.overview}</p>

            <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap", marginTop: "var(--space-6)" }}>
              <a href="#case-review" className="btn btn--primary btn--large">Get Free Case Review</a>
            </div>
          </div>
        </div>
      </header>

      <JurisdictionAlertBlock deadlineMonths={6} />

      <SettlementValueBlock 
        injuryName={accident.name}
        cruiseLineName={dest.name}
        minAmount={45000}
        maxAmount={450000}
        factors={settlementFactors}
      />

      <LegalIntroBlock intro={intro} />

      <CaseStudiesBlock caseStudies={rotatedCaseStudies} />

      <section className="section px-5vw">
        <div className="container">
          <div className="group-header">
            <div>
              <div className="group-header__cat">
                Liability
                <span style={{ display: "block", width: "22px", height: "1px", background: "var(--color-gold-500)", opacity: 0.45 }}></span>
              </div>
              <h2 className="text-display-3">Who May Be Liable for Your {accident.name} in {dest.name}</h2>
            </div>
          </div>
          <LiabilityBlock 
            liableParties={liableParties}
            cruiseLineName={dest.name}
            accidentName={accident.name}
          />
        </div>
      </section>

      <section className="section px-5vw" style={{ background: "var(--color-bg-secondary)" }}>
        <div className="container">
          <div className="group-header">
            <div>
              <div className="group-header__cat">
                Evidence
                <span style={{ display: "block", width: "22px", height: "1px", background: "var(--color-gold-500)", opacity: 0.45 }}></span>
              </div>
              <h2 className="text-display-3">Evidence to Preserve for Your {dest.name} Claim</h2>
            </div>
          </div>
          <EvidenceChecklistBlock 
            items={accident.evidenceChecklist}
            cruiseLineName={dest.name}
            accidentName={accident.name}
          />
        </div>
      </section>

      <CommonMistakesBlock 
        cruiseLine={{ name: dest.name, slug: dest.slug }}
        accident={accident}
      />

      <TimelineCalculatorBlock 
        timeline={timeline}
        cruiseLineName={dest.name}
        accidentName={accident.name}
      />

      <FaqBlock items={faqs} />

      <section className="section px-5vw">
        <div className="container">
          <div className="group-header">
            <div>
              <div className="group-header__cat">
                Explore
                <span style={{ display: "block", width: "22px", height: "1px", background: "var(--color-gold-500)", opacity: 0.45 }}></span>
              </div>
              <h2 className="text-display-3">Other Accidents in <em className="text-accent">{dest.name}</em></h2>
            </div>
          </div>
          <div className="card-grid">
            {accidentTypes
              .filter(a => a.slug !== injury)
              .slice(0, 6)
              .map((relatedAccident) => (
                <Link 
                  key={relatedAccident.slug}
                  href={`/destinations/${dest.slug}/${relatedAccident.slug}`}
                  className="card"
                  style={{ textDecoration: "none", display: "block" }}
                >
                  <span style={{ fontSize: "var(--text-xs)", color: "var(--color-gold-500)", textTransform: "uppercase", letterSpacing: "var(--tracking-wider)", marginBottom: "var(--space-2)", display: "block" }}>
                    Accident Type
                  </span>
                  <h3 className="card__title" style={{ fontSize: "var(--text-lg)" }}>{relatedAccident.name}</h3>
                  <span className="card__link">Learn more →</span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <SourcesBlock items={sources} />

      <LeadFormBlock />

      <DisclaimerBlock text={pageData.disclaimer} />
      
      {issues.length > 0 && (
        <section className="section px-5vw">
          <div className="container">
            <p className="text-body-sm">QA warnings: {issues.join("; ")}</p>
          </div>
        </section>
      )}
    </main>
  );
}
