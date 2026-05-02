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
      <section className="hero">
        <div className="container">
          <nav className="small"><Link href="/injuries">Injuries</Link> / {injuryType.name}</nav>
          <h1 className="h1">{injuryType.name} Settlements & Legal Guide</h1>
          <p>{injuryType.overview}</p>
          <a className="cta-button" href="#case-review">Get Free Case Review</a>
          <p className="small" style={{ marginTop: "16px", opacity: 0.7 }}>Updated {lastUpdated} for 2026 cruise season</p>
        </div>
      </section>

      <JurisdictionAlertBlock deadlineMonths={6} />

      <SettlementValueBlock 
        injuryName={injuryType.name}
        minAmount={50000}
        maxAmount={500000}
        factors={settlementFactors}
      />

      <section className="section">
        <div className="container">
          <h2 className="h2">Legal Background</h2>
          <p>{legalBg}</p>
          <div className="card" style={{ marginTop: "24px", background: "#f8faff" }}>
            <h3 className="h3" style={{ fontSize: "18px" }}>Key Legal Principles</h3>
            <ul>
              <li><strong>Duty of Care:</strong> Cruise lines must maintain reasonably safe conditions</li>
              <li><strong>Notice Requirement:</strong> Written notice must be given within 6 months</li>
              <li><strong>Statute of Limitations:</strong> Lawsuit must be filed within 1 year</li>
              <li><strong>Forum Selection:</strong> Most cases filed in Miami Federal Court</li>
              <li><strong>Comparative Negligence:</strong> Your recovery may be reduced if partially at fault</li>
            </ul>
          </div>
        </div>
      </section>

      <CaseStudiesBlock caseStudies={selectedStudies} />

      <section className="section alt">
        <div className="container">
          <h2 className="h2">Potential Compensation</h2>
          <p>{compText}</p>
          <h3 className="h3" style={{ marginTop: "24px" }}>Compensation Categories</h3>
          <div className="card-grid">
            <div className="card">
              <h4 style={{ fontFamily: "var(--font-heading)", margin: "0 0 8px" }}>Medical Expenses</h4>
              <p className="small" style={{ margin: 0 }}>Emergency care, surgery, rehabilitation, prescriptions, therapy</p>
            </div>
            <div className="card">
              <h4 style={{ fontFamily: "var(--font-heading)", margin: "0 0 8px" }}>Lost Income</h4>
              <p className="small" style={{ margin: 0 }}>Wages lost during recovery and reduced future earning capacity</p>
            </div>
            <div className="card">
              <h4 style={{ fontFamily: "var(--font-heading)", margin: "0 0 8px" }}>Pain & Suffering</h4>
              <p className="small" style={{ margin: 0 }}>Physical pain, emotional distress, anxiety, PTSD, loss of enjoyment</p>
            </div>
            <div className="card">
              <h4 style={{ fontFamily: "var(--font-heading)", margin: "0 0 8px" }}>Punitive Damages</h4>
              <p className="small" style={{ margin: 0 }}>Additional awards in cases of gross negligence or willful misconduct</p>
            </div>
          </div>
        </div>
      </section>

      <CommonMistakesBlock mistakes={commonMistakeVariants} />

      <TimelineCalculatorBlock phases={timelinePhases} />

      <section className="section">
        <div className="container">
          <h2 className="h2">How to Contact a Lawyer</h2>
          <div className="card" style={{ background: "#f0fdf4", border: "2px solid #22c55e" }}>
            <ol style={{ paddingLeft: "24px", margin: 0 }}>
              <li style={{ marginBottom: "16px" }}><strong>Collect all medical records</strong> from ship infirmary and post-cruise treatment</li>
              <li style={{ marginBottom: "16px" }}><strong>Save your ticket contract</strong> and all cruise documentation</li>
              <li style={{ marginBottom: "16px" }}><strong>Document everything</strong> - photos, witness contacts, incident reports</li>
              <li style={{ marginBottom: "16px" }}><strong>Don't sign anything</strong> from the cruise line without attorney review</li>
              <li><strong>Request a free lawyer review immediately</strong> - time limits are shorter than you think</li>
            </ol>
          </div>
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <a className="cta-button" href="#case-review" style={{ fontSize: "18px", padding: "16px 32px" }}>Start Your Free Case Review</a>
            <p className="small" style={{ marginTop: "16px" }}>No fee unless we win. Confidential consultation.</p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2 className="h2">Common Risk Factors for {injuryType.name}</h2>
          <p>Understanding what caused your injury can strengthen your case. These factors are commonly associated with {injuryType.name.toLowerCase()} on cruise ships:</p>
          <div className="card-grid" style={{ marginTop: "24px" }}>
            {injuryType.riskFactors.map((r) => (
              <div key={r} className="card" style={{ borderLeft: "4px solid var(--color-primary)" }}>
                <p style={{ margin: 0, fontWeight: 500 }}>{r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadFormBlock />

      <section className="section" style={{ background: "#f8faff", textAlign: "center" }}>
        <div className="container">
          <h2 className="h2">Ready to Pursue Your Claim?</h2>
          <p>Don't miss the deadline. Cruise injury claims have strict time limits.</p>
          <a className="cta-button" href="#case-review">Get Free Case Review</a>
          <p className="small" style={{ marginTop: "16px" }}>Last updated: {lastUpdated} | Maritime Legal Review Board</p>
        </div>
      </section>
    </main>
  );
}
