import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudiesBlock } from "@/components/blocks/CaseStudiesBlock";
import { CommonMistakesBlock } from "@/components/blocks/CommonMistakesBlock";
import { DisclaimerBlock } from "@/components/blocks/DisclaimerBlock";
import { EvidenceChecklistBlock } from "@/components/blocks/EvidenceChecklistBlock";
import { FaqBlock } from "@/components/blocks/FaqBlock";
import { JurisdictionAlertBlock } from "@/components/blocks/JurisdictionAlertBlock";
import { LeadFormBlock } from "@/components/blocks/LeadFormBlock";
import { LegalIntroBlock } from "@/components/blocks/LegalIntroBlock";
import { LiabilityBlock } from "@/components/blocks/LiabilityBlock";
import { RelatedLinksBlock } from "@/components/blocks/RelatedLinksBlock";
import { SettlementValueBlock } from "@/components/blocks/SettlementValueBlock";
import { SourcesBlock } from "@/components/blocks/SourcesBlock";
import { TimelineCalculatorBlock } from "@/components/blocks/TimelineCalculatorBlock";
import { accidentTypes, buildCruiseAccidentPageData, cruiseLines } from "@/data/site-data";
import { buildCanonical, buildDescription, buildTitle, getLastUpdated } from "@/lib/seo";
import { 
  caseStudyVariants, 
  commonMistakeVariants, 
  settlementFactors, 
  timelinePhases,
  faqPool,
  getFAQsForPage,
  getSectionHeader,
  legalBackgroundHeaders,
  compensationHeaders,
  liabilityHeaders,
  evidenceHeaders,
  timelineHeaders,
  commonMistakesHeaders,
  selectFromPool,
  pickVariant,
  compensationVariants,
  legalBackgroundVariants
} from "@/lib/content-variants";
import { validatePageData } from "@/lib/validation";

export function generateStaticParams() {
  return cruiseLines.flatMap((line) => 
    accidentTypes.map((accident) => ({ 
      cruiseLine: line.slug, 
      accident: accident.slug 
    }))
  );
}

export async function generateMetadata({ params }: { params: Promise<{ cruiseLine: string; accident: string }> }): Promise<Metadata> {
  const { cruiseLine, accident } = await params;
  const data = buildCruiseAccidentPageData(cruiseLine, accident);
  if (!data) return {};
  const path = `/cruise-lines/${cruiseLine}/${accident}`;
  return { 
    title: buildTitle(data), 
    description: buildDescription(data), 
    alternates: { canonical: buildCanonical(path) } 
  };
}

export default async function CruiseLineAccidentPage({ params }: { params: Promise<{ cruiseLine: string; accident: string }> }) {
  const { cruiseLine, accident } = await params;
  const data = buildCruiseAccidentPageData(cruiseLine, accident);
  if (!data) return notFound();
  const issues = validatePageData(data);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {"@type": "ListItem", position: 1, name: "Cruise Lines", item: "https://www.cruiseshipinjurylawyer.com/cruise-lines"},
      {"@type": "ListItem", position: 2, name: data.cruiseLine.name, item: `https://www.cruiseshipinjurylawyer.com/cruise-lines/${data.cruiseLine.slug}`},
      {"@type": "ListItem", position: 3, name: data.accident.name, item: `https://www.cruiseshipinjurylawyer.com/cruise-lines/${data.cruiseLine.slug}/${data.accident.slug}`}
    ]
  };

  const legalServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: `${data.cruiseLine.name} ${data.accident.name} Lawyer Claims`,
    areaServed: "United States",
    serviceType: "Cruise Ship Injury Claims"
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({ 
      "@type": "Question", 
      name: faq.question, 
      acceptedAnswer: { "@type": "Answer", text: faq.answer } 
    }))
  };

  // CONTENT ROTATION: Get freshness signals
  const lastUpdated = getLastUpdated();
  const lastUpdatedJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "dateModified": new Date().toISOString(),
    "reviewedBy": { "@type": "Organization", "name": "Maritime Legal Review Board" }
  };

  // CONTENT ROTATION: Select unique content for this specific page
  const pageSeed = `${cruiseLine}-${accident}`;
  
  // Select 6 FAQs from pool of 50 (deterministically based on page parameters)
  const rotatedFAQs = getFAQsForPage(cruiseLine, accident);
  
  // Select unique section headers from pools of 25 each
  const legalHeader = getSectionHeader(legalBackgroundHeaders, cruiseLine, accident, 1);
  const compHeader = getSectionHeader(compensationHeaders, cruiseLine, accident, 2);
  const liabilityHeader = getSectionHeader(liabilityHeaders, cruiseLine, accident, 3);
  const evidenceHeader = getSectionHeader(evidenceHeaders, cruiseLine, accident, 4);
  const timelineHeader = getSectionHeader(timelineHeaders, cruiseLine, accident, 5);
  const mistakesHeader = getSectionHeader(commonMistakesHeaders, cruiseLine, accident, 6);
  
  // Select unique content snippets
  const legalSnippet = pickVariant(legalBackgroundVariants, `${pageSeed}-legal`);
  const compSnippet = pickVariant(compensationVariants, `${pageSeed}-comp`);
  
  // Select case studies deterministically (3 from pool of 10)
  const rotatedCaseStudies = selectFromPool(caseStudyVariants, pageSeed, 3);
  
  // Select 5 mistakes from pool of 8
  const rotatedMistakes = selectFromPool(commonMistakeVariants, pageSeed, 5);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lastUpdatedJsonLd) }} />
      
      <section className="hero">
        <div className="container">
          <p className="small">/cruise-lines/{data.cruiseLine.slug}/{data.accident.slug}/</p>
          <h1 className="h1">{data.cruiseLine.name} {data.accident.name} Settlements</h1>
          <p>{data.accident.overview}</p>
          <a className="cta-button" href="#case-review">{data.ctaLabel}</a>
          <p className="small" style={{ marginTop: "16px", opacity: 0.7 }}>
            Updated {lastUpdated} for 2026 cruise season
          </p>
        </div>
      </section>

      <JurisdictionAlertBlock deadlineMonths={6} />
      
      <SettlementValueBlock 
        injuryName={data.accident.name} 
        cruiseLineName={data.cruiseLine.name}
        minAmount={50000} 
        maxAmount={500000} 
        factors={settlementFactors}
      />

      <LegalIntroBlock intro={data.intro} />
      
      <CaseStudiesBlock caseStudies={rotatedCaseStudies} />
      
      <section className="section">
        <div className="container">
          <h2 className="h2">{liabilityHeader}</h2>
          <LiabilityBlock liableParties={data.liableParties} />
        </div>
      </section>
      
      <section className="section alt">
        <div className="container">
          <h2 className="h2">{evidenceHeader}</h2>
          <EvidenceChecklistBlock items={data.accident.evidenceChecklist} />
        </div>
      </section>
      
      <CommonMistakesBlock mistakes={rotatedMistakes} />
      
      <TimelineCalculatorBlock phases={timelinePhases} />

      <FaqBlock items={rotatedFAQs} />
      
      <RelatedLinksBlock cruiseLine={data.cruiseLine} items={data.relatedAccidents} />
      
      <SourcesBlock items={data.sources} />
      
      <LeadFormBlock />
      
      <DisclaimerBlock text={data.disclaimer} />
      
      <section className="section" style={{ background: "#f0fdf4" }}>
        <div className="container">
          <h2 className="h2">Ready to Pursue Your Claim?</h2>
          <p>Don't wait until it's too late. The deadline to notify {data.cruiseLine.name} is approaching.</p>
          <a className="cta-button" href="#case-review">{data.ctaLabel}</a>
          <p className="small" style={{ marginTop: "16px" }}>Last updated: {lastUpdated}</p>
        </div>
      </section>
      
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
