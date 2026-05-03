import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { accidentTypes } from "@/data/site-data";
import { CaseStudiesBlock } from "@/components/blocks/CaseStudiesBlock";
import { CommonMistakesBlock } from "@/components/blocks/CommonMistakesBlock";
import { JurisdictionAlertBlock } from "@/components/blocks/JurisdictionAlertBlock";
import { LeadFormBlock } from "@/components/blocks/LeadFormBlock";
import { SettlementValueBlock } from "@/components/blocks/SettlementValueBlock";
import { TimelineCalculatorBlock } from "@/components/blocks/TimelineCalculatorBlock";
import { buildInjuryDescription, buildInjuryTitle, getLastUpdated } from "@/lib/seo";
import { caseStudyVariants, commonMistakeVariants, compensationVariants, legalBackgroundVariants, pickVariant, settlementFactors, timelinePhases } from "@/lib/content-variants";

export const revalidate = 3600;
export function generateStaticParams() { return accidentTypes.map((a) => ({ injury: a.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ injury: string }> }): Promise<Metadata> {
  const { injury } = await params;
  const injuryType = accidentTypes.find((a) => a.slug === injury);
  if (!injuryType) return {};
  return { 
    title: buildInjuryTitle(injuryType), 
    description: buildInjuryDescription(injuryType) 
  };
}

export default async function InjuryHub({ params }: { params: Promise<{ injury: string }> }) {
  const { injury } = await params;
  const injuryType = accidentTypes.find((a) => a.slug === injury);
  if (!injuryType) return notFound();

  const lastUpdated = getLastUpdated();

  // Pick deterministic variants based on injury slug
  const legalBg = pickVariant(legalBackgroundVariants, injury);
  const compText = pickVariant(compensationVariants, injury);
  
  // Select case studies deterministically based on injury hash
  let hash = 0;
  for (let i = 0; i < injury.length; i++) {
    hash = ((hash << 5) - hash) + injury.charCodeAt(i);
    hash = hash & hash;
  }
  const startIdx = Math.abs(hash) % Math.max(1, caseStudyVariants.length - 3);
  const selectedStudies = caseStudyVariants.slice(startIdx, startIdx + 3);

  return (
    <main>
      <header className="page-header">
        <div className="page-header__inner container">
          <div className="page-header__content">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/" className="breadcrumb__link">Home</Link>
              <span className="breadcrumb__sep">/</span>
              <Link href="/injuries" className="breadcrumb__link">Injuries</Link>
              <span className="breadcrumb__sep">/</span>
              <span className="breadcrumb__current">{injuryType.name}</span>
            </nav>

            <span className="tag">Injury Guide</span>

            <h1 className="page-header__title">{injuryType.name} <em className="text-accent">Settlements & Legal Guide</em></h1>

            <p className="page-header__lead">{injuryType.overview}</p>

            <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap", marginTop: "var(--space-6)" }}>
              <a href="#case-review" className="btn btn--primary btn--large">Get Free Case Review</a>
            </div>

            <p className="text-body-sm mt-6" style={{ opacity: 0.7 }}>
              Updated {lastUpdated} for 2026 cruise season
            </p>
          </div>
        </div>
      </header>

      <JurisdictionAlertBlock deadlineMonths={6} />

      <SettlementValueBlock 
        injuryName={injuryType.name}
        minAmount={50000}
        maxAmount={500000}
        factors={settlementFactors}
      />

      <section className="section px-5vw">
        <div className="container">
          <div className="group-header">
            <div>
              <div className="group-header__cat">
                Legal Info
                <span style={{ display: "block", width: "22px", height: "1px", background: "var(--color-gold-500)", opacity: 0.45 }}></span>
              </div>
              <h2 className="text-display-3">Legal Background</h2>
            </div>
          </div>
          <p className="text-body-lg mb-6">{legalBg}</p>
          <div className="card" style={{ borderLeft: "3px solid var(--color-gold-500)" }}>
            <h3 className="card__title" style={{ fontSize: "var(--text-lg)" }}>Key Legal Principles</h3>
            <ul className="text-body-base" style={{ paddingLeft: "var(--space-6)", marginTop: "var(--space-4)" }}>
              <li className="mb-2"><strong>Duty of Care:</strong> Cruise lines must maintain reasonably safe conditions</li>
              <li className="mb-2"><strong>Notice Requirement:</strong> Written notice must be given within 6 months</li>
              <li className="mb-2"><strong>Statute of Limitations:</strong> Lawsuit must be filed within 1 year</li>
              <li className="mb-2"><strong>Forum Selection:</strong> Most cases filed in Miami Federal Court</li>
              <li><strong>Comparative Negligence:</strong> Your recovery may be reduced if partially at fault</li>
            </ul>
          </div>
        </div>
      </section>

      <CaseStudiesBlock caseStudies={selectedStudies} />

      <section className="section px-5vw" style={{ background: "var(--color-bg-secondary)" }}>
        <div className="container">
          <div className="group-header">
            <div>
              <div className="group-header__cat">
                Compensation
                <span style={{ display: "block", width: "22px", height: "1px", background: "var(--color-gold-500)", opacity: 0.45 }}></span>
              </div>
              <h2 className="text-display-3">Potential Compensation</h2>
            </div>
          </div>
          <p className="text-body-lg mb-6">{compText}</p>
          <h3 className="text-heading-4 mb-6">Compensation Categories</h3>
          <div className="grid-2" style={{ gap: "var(--space-4)" }}>
            <div className="card">
              <h4 className="card__title" style={{ fontSize: "var(--text-lg)" }}>Medical Expenses</h4>
              <p className="card__body">Emergency care, surgery, rehabilitation, prescriptions, therapy</p>
            </div>
            <div className="card">
              <h4 className="card__title" style={{ fontSize: "var(--text-lg)" }}>Lost Income</h4>
              <p className="card__body">Wages lost during recovery and reduced future earning capacity</p>
            </div>
            <div className="card">
              <h4 className="card__title" style={{ fontSize: "var(--text-lg)" }}>Pain & Suffering</h4>
              <p className="card__body">Physical pain, emotional distress, anxiety, PTSD, loss of enjoyment</p>
            </div>
            <div className="card">
              <h4 className="card__title" style={{ fontSize: "var(--text-lg)" }}>Punitive Damages</h4>
              <p className="card__body">Additional awards in cases of gross negligence or willful misconduct</p>
            </div>
          </div>
        </div>
      </section>

      <TimelineCalculatorBlock timeline={["Seek immediate medical attention", "Report incident to ship security", "Document the scene with photos", "Gather witness contact information", "Contact maritime attorney", "File notice within 6 months", "Pursue settlement or lawsuit"]} cruiseLineName="Major Cruise Lines" accidentName={injuryType.name} />

      <section className="section px-5vw">
        <div className="container">
          <div className="group-header">
            <div>
              <div className="group-header__cat">
                Next Steps
                <span style={{ display: "block", width: "22px", height: "1px", background: "var(--color-gold-500)", opacity: 0.45 }}></span>
              </div>
              <h2 className="text-display-3">How to Contact a Lawyer</h2>
            </div>
          </div>
          <div className="card" style={{ borderLeft: "3px solid var(--color-gold-500)" }}>
            <ol className="text-body-lg" style={{ paddingLeft: "var(--space-6)", margin: 0 }}>
              <li className="mb-4"><strong>Collect all medical records</strong> from ship infirmary and post-cruise treatment</li>
              <li className="mb-4"><strong>Save your ticket contract</strong> and all cruise documentation</li>
              <li className="mb-4"><strong>Document everything</strong> - photos, witness contacts, incident reports</li>
              <li className="mb-4"><strong>Don't sign anything</strong> from the cruise line without attorney review</li>
              <li><strong>Request a free lawyer review immediately</strong> - time limits are shorter than you think</li>
            </ol>
          </div>
          <div className="mt-8" style={{ textAlign: "center" }}>
            <a href="#case-review" className="btn btn--primary btn--large">Start Your Free Case Review</a>
            <p className="text-body-sm mt-4">No fee unless we win. Confidential consultation.</p>
          </div>
        </div>
      </section>

      <section className="section px-5vw" style={{ background: "var(--color-bg-secondary)" }}>
        <div className="container">
          <div className="group-header">
            <div>
              <div className="group-header__cat">
                Risk Factors
                <span style={{ display: "block", width: "22px", height: "1px", background: "var(--color-gold-500)", opacity: 0.45 }}></span>
              </div>
              <h2 className="text-display-3">Common Risk Factors for {injuryType.name}</h2>
            </div>
          </div>
          <p className="text-body-lg mb-6">Understanding what caused your injury can strengthen your case. These factors are commonly associated with {injuryType.name.toLowerCase()} on cruise ships:</p>
          <div className="grid-2" style={{ gap: "var(--space-4)" }}>
            {injuryType.riskFactors.map((r) => (
              <div key={r} className="card" style={{ borderLeft: "3px solid var(--color-gold-500)" }}>
                <p style={{ margin: 0, fontWeight: 500 }}>{r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadFormBlock />

      <section className="cta" aria-labelledby="injury-cta-heading">
        <span className="tag" style={{ justifyContent: "center", display: "inline-flex" }}>Ready to Start?</span>
        <h2 id="injury-cta-heading" className="cta__title">Ready to Pursue Your <em className="text-accent">Claim?</em></h2>
        <p className="cta__text">Don't miss the deadline. Cruise injury claims have strict time limits.</p>
        <div style={{ display: "flex", gap: "var(--space-4)", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#case-review" className="btn btn--primary btn--large">Get Free Case Review</a>
        </div>
        <p className="text-body-sm mt-6">Last updated: {lastUpdated} | Maritime Legal Review Board</p>
      </section>
    </main>
  );
}
