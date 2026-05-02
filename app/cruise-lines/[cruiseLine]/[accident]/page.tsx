import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DisclaimerBlock } from "@/components/blocks/DisclaimerBlock";
import { EvidenceChecklistBlock } from "@/components/blocks/EvidenceChecklistBlock";
import { FaqBlock } from "@/components/blocks/FaqBlock";
import { LeadFormBlock } from "@/components/blocks/LeadFormBlock";
import { LegalIntroBlock } from "@/components/blocks/LegalIntroBlock";
import { LiabilityBlock } from "@/components/blocks/LiabilityBlock";
import { RelatedLinksBlock } from "@/components/blocks/RelatedLinksBlock";
import { SourcesBlock } from "@/components/blocks/SourcesBlock";
import { accidentTypes, buildCruiseAccidentPageData, cruiseLines } from "@/data/site-data";
import { buildCanonical, buildDescription, buildTitle } from "@/lib/seo";
import { validatePageData } from "@/lib/validation";

export function generateStaticParams() {
  return cruiseLines.flatMap((line) => accidentTypes.map((accident) => ({ cruiseLine: line.slug, accident: accident.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ cruiseLine: string; accident: string }> }): Promise<Metadata> {
  const { cruiseLine, accident } = await params;
  const data = buildCruiseAccidentPageData(cruiseLine, accident);
  if (!data) return {};
  const path = `/cruise-lines/${cruiseLine}/${accident}`;
  return { title: buildTitle(data), description: buildDescription(data), alternates: { canonical: buildCanonical(path) } };
}

export default async function CruiseLineAccidentPage({ params }: { params: Promise<{ cruiseLine: string; accident: string }> }) {
  const { cruiseLine, accident } = await params;
  const data = buildCruiseAccidentPageData(cruiseLine, accident);
  if (!data) return notFound();
  const issues = validatePageData(data);

  const breadcrumbJsonLd = {"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Cruise Lines",item:"https://www.cruiseshipinjurylawyer.com/cruise-lines"},{"@type":"ListItem",position:2,name:data.cruiseLine.name,item:`https://www.cruiseshipinjurylawyer.com/cruise-lines/${data.cruiseLine.slug}`},{"@type":"ListItem",position:3,name:data.accident.name,item:`https://www.cruiseshipinjurylawyer.com/cruise-lines/${data.cruiseLine.slug}/${data.accident.slug}`}]};

  const legalServiceJsonLd = {"@context":"https://schema.org","@type":"LegalService",name:`${data.cruiseLine.name} ${data.accident.name} Lawyer Claims`,areaServed:"United States",serviceType:"Cruise Ship Injury Claims"};

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } }))
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <section className="hero">
        <div className="container">
          <p className="small">/cruise-lines/{data.cruiseLine.slug}/{data.accident.slug}/</p>
          <h1 className="h1">{data.cruiseLine.name} {data.accident.name} Lawyer Claims</h1>
          <p>{data.accident.overview}</p>
          <a className="cta-button" href="#case-review">{data.ctaLabel}</a>
        </div>
      </section>
      <LegalIntroBlock intro={data.intro} />
      <LiabilityBlock liableParties={data.liableParties} />
      <EvidenceChecklistBlock items={data.accident.evidenceChecklist} />
      <section className="section"><div className="container"><h2 className="h2">Claim Timeline</h2><ol>{data.timeline.map((s) => <li key={s}>{s}</li>)}</ol></div></section>
      <FaqBlock items={data.faqs} />
      <RelatedLinksBlock cruiseLine={data.cruiseLine} items={data.relatedAccidents} />
      <SourcesBlock items={data.sources} />
      <LeadFormBlock />
      <DisclaimerBlock text={data.disclaimer} />
      {issues.length > 0 && <section className="section"><div className="container"><p className="small">QA warnings: {issues.join("; ")}</p></div></section>}
    </main>
  );
}
