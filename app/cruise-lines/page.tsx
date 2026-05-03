import type { Metadata } from "next";
import Link from "next/link";
import { cruiseLines } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Cruise Lines | Accident Claims by Cruise Ship Company",
  description: "Injured on a cruise? Browse accident claims by cruise line: Carnival, Royal Caribbean, Norwegian, and more. Learn about your legal rights and deadlines."
};

export default function CruiseLinesPage() {
  return (
    <>
      {/* Page Header */}
      <header className="page-header">
        <div className="page-header__inner container">
          <div className="page-header__content">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/" className="breadcrumb__link">Home</Link>
              <span className="breadcrumb__sep">/</span>
              <span className="breadcrumb__current">Cruise Lines</span>
            </nav>

            <span className="tag">All Cruise Lines</span>

            <h1 className="page-header__title">Cruise Line <em className="text-accent">Accident Claims</em></h1>

            <p className="page-header__lead">
              Select your cruise line to learn about specific claim procedures, deadlines, and your legal rights. 
              Each company has different policies and legal teams.
            </p>
          </div>
        </div>
      </header>

      {/* Deadline Banner */}
      <div className="deadline-banner">
        <div className="deadline-banner__inner container">
          <span className="deadline-banner__badge">Deadline Alert</span>
          <p className="deadline-banner__text">
            <strong>All major cruise lines have strict deadlines.</strong> Written notice within 6 months and lawsuits filed within 1 year. Missing these deadlines can permanently bar your claim.
          </p>
        </div>
      </div>

      {/* Cruise Lines Grid */}
      <section className="section px-5vw">
        <div className="container">
          <div className="group-header">
            <div>
              <div className="group-header__cat">
                Major Cruise Lines
                <span style={{ display: "block", width: "24px", height: "1px", background: "var(--color-gold-500)", opacity: 0.5 }}></span>
              </div>
              <h2 className="text-display-2">Browse by <em className="text-accent">Cruise Line</em></h2>
              <p className="group-header__desc">
                Click on any cruise line to view specific accident types, claim procedures, and legal information.
              </p>
            </div>
            <div className="group-header__num">{cruiseLines.length}</div>
          </div>

          <div className="grid-3" style={{ gap: "var(--space-4)" }}>
            {cruiseLines.map((line) => (
              <Link key={line.slug} href={`/cruise-lines/${line.slug}`} className="card">
                <span className="text-ui text-ui-sm text-accent" style={{ opacity: 0.7, marginBottom: "var(--space-2)", display: "block" }}>
                  Cruise Line
                </span>
                <h3 className="card__title">{line.name}</h3>
                <p className="card__body" style={{ fontSize: "var(--text-base)" }}>
                  {line.description || `Learn about ${line.name} accident claims and legal procedures.`}
                </p>
                <span className="card__link">View claims →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta" aria-labelledby="cruise-lines-cta-heading">
        <span className="tag" style={{ justifyContent: "center", display: "inline-flex" }}>Need Help?</span>
        <h2 id="cruise-lines-cta-heading" className="cta__title">
          Not Sure Which <em className="text-accent">Cruise Line?</em>
        </h2>
        <p className="cta__text">
          Our maritime attorneys can help identify the correct cruise line and navigate their specific claim procedures. Free consultation.
        </p>
        <div style={{ display: "flex", gap: "var(--space-4)", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/contact" className="btn btn--primary btn--large">Get Free Help</a>
          <Link href="/injuries" className="btn btn--secondary btn--large">Browse by Injury Type</Link>
        </div>
      </section>
    </>
  );
}
