import type { Metadata } from "next";
import Link from "next/link";
import { accidentTypes } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Cruise Ship Injury Types | Accident Claims Guide",
  description: "Learn about common cruise ship injuries: slip and falls, medical negligence, food poisoning, shore excursions. Your legal rights explained."
};

export default function InjuriesPage() {
  return (
    <>
      {/* Page Header */}
      <header className="page-header">
        <div className="page-header__inner container">
          <div className="page-header__content">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/" className="breadcrumb__link">Home</Link>
              <span className="breadcrumb__sep">/</span>
              <span className="breadcrumb__current">Injuries</span>
            </nav>

            <span className="tag">All Injury Types</span>

            <h1 className="page-header__title">Cruise Ship <em className="text-accent">Injury Types</em></h1>

            <p className="page-header__lead">
              Browse common cruise ship accidents and injuries. Learn about your legal rights, 
              typical settlement ranges, and how to pursue compensation for each type of claim.
            </p>
          </div>
        </div>
      </header>

      {/* Deadline Banner */}
      <div className="deadline-banner">
        <div className="deadline-banner__inner container">
          <span className="deadline-banner__badge">Deadline Alert</span>
          <p className="deadline-banner__text">
            <strong>Time limits apply to all injury claims.</strong> Most cruise lines require written notice within 6 months and lawsuits within 1 year. Don&apos;t delay — consult an attorney immediately.
          </p>
        </div>
      </div>

      {/* Injury Types Grid */}
      <section className="section px-5vw">
        <div className="container">
          <div className="group-header">
            <div>
              <div className="group-header__cat">
                Accident Types
                <span style={{ display: "block", width: "24px", height: "1px", background: "var(--color-gold-500)", opacity: 0.5 }}></span>
              </div>
              <h2 className="text-display-2">Browse by <em className="text-accent">Injury Type</em></h2>
              <p className="group-header__desc">
                Click on any injury type to learn about your legal rights, typical settlements, and how to pursue compensation.
              </p>
            </div>
            <div className="group-header__num">{accidentTypes.length}</div>
          </div>

          <div className="grid-3" style={{ gap: "1px", background: "var(--color-border-subtle)", border: "1px solid var(--color-border-subtle)" }}>
            {accidentTypes.map((accident) => (
              <Link key={accident.slug} href={`/injuries/${accident.slug}`} className="card" style={{ borderLeft: "3px solid transparent" }}>
                <span className="text-ui text-ui-sm text-accent" style={{ opacity: 0.7, marginBottom: "var(--space-2)", display: "block" }}>
                  Injury Type
                </span>
                <h3 className="card__title">{accident.name}</h3>
                <p className="card__body" style={{ fontSize: "var(--text-base)" }}>
                  {accident.overview?.slice(0, 120) || `Learn about ${accident.name} claims and your legal rights.`}...
                </p>
                <span className="card__link">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta" aria-labelledby="injuries-cta-heading">
        <span className="tag" style={{ justifyContent: "center", display: "inline-flex" }}>Injured?</span>
        <h2 id="injuries-cta-heading" className="cta__title">
          Not Sure What <em className="text-accent">Type of Claim?</em>
        </h2>
        <p className="cta__text">
          Our maritime attorneys can evaluate your situation and identify the best legal path forward. Free consultation, no obligation.
        </p>
        <div style={{ display: "flex", gap: "var(--space-4)", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/contact" className="btn btn--primary btn--large">Get Free Evaluation</a>
          <Link href="/cruise-lines" className="btn btn--secondary btn--large">Browse by Cruise Line</Link>
        </div>
      </section>
    </>
  );
}
