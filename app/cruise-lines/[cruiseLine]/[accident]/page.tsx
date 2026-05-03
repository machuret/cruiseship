import type { Metadata } from "next";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";

// Above-fold components - loaded immediately
import { BreadcrumbBlock } from "@/components/blocks/BreadcrumbBlock";
import { JurisdictionAlertBlock } from "@/components/blocks/JurisdictionAlertBlock";
import { LegalIntroBlock } from "@/components/blocks/LegalIntroBlock";
import { SettlementValueBlock } from "@/components/blocks/SettlementValueBlock";

// Below-fold components - lazy loaded
const CaseStudiesBlock = dynamic(() => import("@/components/blocks/CaseStudiesBlock").then(m => m.CaseStudiesBlock));
const CommonMistakesBlock = dynamic(() => import("@/components/blocks/CommonMistakesBlock").then(m => m.CommonMistakesBlock));
const DisclaimerBlock = dynamic(() => import("@/components/blocks/DisclaimerBlock").then(m => m.DisclaimerBlock));
const EvidenceChecklistBlock = dynamic(() => import("@/components/blocks/EvidenceChecklistBlock").then(m => m.EvidenceChecklistBlock));
const FaqBlock = dynamic(() => import("@/components/blocks/FaqBlock").then(m => m.FaqBlock));
const LeadFormBlock = dynamic(() => import("@/components/blocks/LeadFormBlock").then(m => m.LeadFormBlock));
const LiabilityBlock = dynamic(() => import("@/components/blocks/LiabilityBlock").then(m => m.LiabilityBlock));
const RelatedLinksBlock = dynamic(() => import("@/components/blocks/RelatedLinksBlock").then(m => m.RelatedLinksBlock));
const SourcesBlock = dynamic(() => import("@/components/blocks/SourcesBlock").then(m => m.SourcesBlock));
const TimelineCalculatorBlock = dynamic(() => import("@/components/blocks/TimelineCalculatorBlock").then(m => m.TimelineCalculatorBlock));
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

// ISR: Revalidate every 24 hours for performance/scalability
export const revalidate = 86400;

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

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
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
      {"@type": "ListItem", position: 1, name: "Cruise Lines", item: buildCanonical("/cruise-lines")},
      {"@type": "ListItem", position: 2, name: data.cruiseLine.name, item: buildCanonical(`/cruise-lines/${data.cruiseLine.slug}`)},
      {"@type": "ListItem", position: 3, name: data.accident.name, item: buildCanonical(`/cruise-lines/${data.cruiseLine.slug}/${data.accident.slug}`)}
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: escapeHtml(JSON.stringify(breadcrumbJsonLd)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: escapeHtml(JSON.stringify(legalServiceJsonLd)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: escapeHtml(JSON.stringify(faqJsonLd)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: escapeHtml(JSON.stringify(lastUpdatedJsonLd)) }} />
      
      <header className="page-header">
        <div className="page-header__inner container">
          <div className="page-header__content">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="/" className="breadcrumb__link">Home</a>
              <span className="breadcrumb__sep">/</span>
              <a href="/cruise-lines" className="breadcrumb__link">Cruise Lines</a>
              <span className="breadcrumb__sep">/</span>
              <a href={`/cruise-lines/${data.cruiseLine.slug}`} className="breadcrumb__link">{data.cruiseLine.name}</a>
              <span className="breadcrumb__sep">/</span>
              <span className="breadcrumb__current">{data.accident.name}</span>
            </nav>

            <span className="tag">Accident Claim</span>

            <h1 className="page-header__title">{data.cruiseLine.name} {data.accident.name} <em className="text-accent">Legal Help</em></h1>

            <p className="page-header__lead">{data.accident.overview}</p>

            <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap", marginTop: "var(--space-6)" }}>
              <a href="#case-review" className="btn btn--primary btn--large">{data.ctaLabel}</a>
            </div>

            <p className="text-body-sm mt-6" style={{ opacity: 0.7 }}>
              Updated {lastUpdated} for 2026 cruise season
            </p>
          </div>
        </div>
      </header>

      <BreadcrumbBlock 
        cruiseLineName={data.cruiseLine.name}
        cruiseLineSlug={data.cruiseLine.slug}
        accidentName={data.accident.name}
      />

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
      
      <section className="section px-5vw">
        <div className="container">
          <div className="group-header">
            <div>
              <div className="group-header__cat">
                Liability
                <span style={{ display: "block", width: "22px", height: "1px", background: "var(--color-gold-500)", opacity: 0.45 }}></span>
              </div>
              <h2 className="text-display-3">{liabilityHeader}</h2>
            </div>
          </div>
          <LiabilityBlock 
            liableParties={data.liableParties}
            cruiseLineName={data.cruiseLine.name}
            accidentName={data.accident.name}
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
              <h2 className="text-display-3">{evidenceHeader}</h2>
            </div>
          </div>
          <EvidenceChecklistBlock 
            items={data.accident.evidenceChecklist}
            cruiseLineName={data.cruiseLine.name}
            accidentName={data.accident.name}
          />
        </div>
      </section>
      
      <CommonMistakesBlock cruiseLine={data.cruiseLine} accident={data.accident} />

      <TimelineCalculatorBlock timeline={data.timeline} cruiseLineName={data.cruiseLine.name} accidentName={data.accident.name} />

      <FaqBlock items={data.faqs} />
      
      <RelatedLinksBlock cruiseLine={data.cruiseLine} items={data.relatedAccidents} />
      
      <SourcesBlock items={data.sources} />
      
      <LeadFormBlock />
      
      <DisclaimerBlock text={data.disclaimer} />
      
      <section className="cta" aria-labelledby="accident-cta-heading">
        <span className="tag" style={{ justifyContent: "center", display: "inline-flex" }}>Ready to Start?</span>
        <h2 id="accident-cta-heading" className="cta__title">
          Ready to Pursue Your Claim <em className="text-accent">against {data.cruiseLine.name}?</em>
        </h2>
        <p className="cta__text">
          Don't wait until it's too late. If you suffered {data.accident.name.toLowerCase()} on {data.cruiseLine.name}, you may be entitled to significant compensation. The deadline to notify {data.cruiseLine.name} of your injury is approaching.
        </p>
        <div style={{ display: "flex", gap: "var(--space-4)", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#case-review" className="btn btn--primary btn--large">Get Free Case Review for Your {data.accident.name}</a>
        </div>
        <p className="text-body-sm mt-6">Last updated: {lastUpdated} | Maritime Legal Review Board</p>
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
