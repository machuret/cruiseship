import Link from "next/link";
import { cruiseLines, accidentTypes, destinations } from "@/data/site-data";
import { FaqSection } from "@/components/home/FaqSection";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ background: "var(--color-bg-secondary)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-12)", alignItems: "center" }}>
          <div className="animate-fade-up">
            <div className="hero__tag">Updated May 2026 — 2026 Cruise Season</div>
            <h1 className="hero__title">
              Injured on a<br />
              <em className="text-accent">Cruise Ship?</em><br />
              Get What You&apos;re Owed.
            </h1>
            <p className="hero__subtitle">
              Maritime attorneys specializing in cruise line injury claims. 
              Average settlements <strong>$50,000 – $500,000+</strong>. 
              No fee unless we win your case.
            </p>
            <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap" }}>
              <a href="#case-review" className="btn btn--primary btn--large">Free Case Review</a>
              <a href="#learn-more" className="btn btn--secondary btn--large">Learn Your Rights</a>
            </div>
          </div>

          <div className="card animate-fade-up animate-fade-up--2" style={{ maxWidth: "480px", marginLeft: "auto" }}>
            <h3 className="card__title" style={{ fontSize: "var(--text-xl)" }}>Start Your Free Case Review</h3>
            <p className="card__body mb-6">Maritime attorney responds within 24 hours. No obligation.</p>
            
            <div className="grid-2 mb-6">
              <div className="stat">
                <span className="stat__value" style={{ fontSize: "var(--text-2xl)" }}>$500K+</span>
                <span className="stat__label">Max settlements</span>
              </div>
              <div className="stat">
                <span className="stat__value" style={{ fontSize: "var(--text-2xl)" }}>1,300+</span>
                <span className="stat__label">Injury guides</span>
              </div>
              <div className="stat">
                <span className="stat__value" style={{ fontSize: "var(--text-2xl)" }}>24hr</span>
                <span className="stat__label">Response time</span>
              </div>
              <div className="stat">
                <span className="stat__value" style={{ fontSize: "var(--text-2xl)" }}>No Fee</span>
                <span className="stat__label">Unless we win</span>
              </div>
            </div>

            <div className="form-field">
              <label className="form-field__label">Date of Accident</label>
              <input type="date" className="form-field__input" />
            </div>
            <div className="form-field">
              <label className="form-field__label">Cruise Line</label>
              <select className="form-field__select">
                <option>Select cruise line</option>
                {cruiseLines.slice(0, 8).map(line => (
                  <option key={line.slug}>{line.name}</option>
                ))}
                <option>Other</option>
              </select>
            </div>
            <div className="form-field">
              <label className="form-field__label">Accident Type</label>
              <select className="form-field__select">
                <option>Select type</option>
                <option>Slip & Fall</option>
                <option>Medical Negligence</option>
                <option>Shore Excursion</option>
                <option>Food Poisoning</option>
                <option>Assault/Security</option>
                <option>Other</option>
              </select>
            </div>
            <button className="btn btn--primary" style={{ width: "100%" }}>Submit for Free Review →</button>
            <p className="card__body" style={{ textAlign: "center", marginTop: "var(--space-3)" }}>
              Confidential · No obligation
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats Row */}
      <div style={{ 
        background: "var(--color-bg-secondary)", 
        borderTop: "1px solid var(--color-border-subtle)",
        borderBottom: "1px solid var(--color-border-subtle)"
      }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          <div className="stat" style={{ padding: "var(--space-6)", borderRight: "1px solid var(--color-border-subtle)" }}>
            <span className="stat__value">$50K–$500K+</span>
            <span className="stat__label">Average settlements</span>
          </div>
          <div className="stat" style={{ padding: "var(--space-6)", borderRight: "1px solid var(--color-border-subtle)" }}>
            <span className="stat__value">6 Months</span>
            <span className="stat__label">Notice deadline</span>
          </div>
          <div className="stat" style={{ padding: "var(--space-6)", borderRight: "1px solid var(--color-border-subtle)" }}>
            <span className="stat__value">1 Year</span>
            <span className="stat__label">Lawsuit deadline</span>
          </div>
          <div className="stat" style={{ padding: "var(--space-6)" }}>
            <span className="stat__value">Miami</span>
            <span className="stat__label">Required court venue</span>
          </div>
        </div>
      </div>

      {/* Cruise Lines Section */}
      <section className="section" id="learn-more">
        <div className="container">
          <span className="tag">Cruise Lines</span>
          <h2 className="text-display-2 mb-4">Injured on a Specific <em className="text-accent">Cruise Line?</em></h2>
          <p className="text-body-lg mb-12" style={{ maxWidth: "640px" }}>
            Each cruise line has different safety protocols and legal teams. 
            Select yours to learn about specific claim procedures and deadlines.
          </p>

          <div className="grid-3" style={{ gap: "var(--space-4)" }}>
            {cruiseLines.slice(0, 6).map((line) => (
              <Link key={line.slug} href={`/cruise-lines/${line.slug}`} className="card">
                <h3 className="card__title">{line.name}</h3>
                <p className="card__body">{line.description?.slice(0, 80)}...</p>
                <span className="card__link">View claims →</span>
              </Link>
            ))}
          </div>

          <div className="mt-8" style={{ textAlign: "center" }}>
            <Link href="/cruise-lines" className="btn btn--secondary">View All Cruise Lines</Link>
          </div>
        </div>
      </section>

      {/* Accident Types Section */}
      <section className="section" style={{ background: "var(--color-bg-secondary)" }}>
        <div className="container">
          <span className="tag">Injury Types</span>
          <h2 className="text-display-2 mb-4">Common Cruise Ship <em className="text-accent">Accident Types</em></h2>
          <p className="text-body-lg mb-12" style={{ maxWidth: "640px" }}>
            Click on any accident type to learn about your legal rights, typical settlement ranges, and how to pursue compensation.
          </p>

          <div className="grid-3" style={{ gap: "1px", background: "var(--color-border-subtle)", border: "1px solid var(--color-border-subtle)" }}>
            {accidentTypes.slice(0, 9).map((accident) => (
              <Link key={accident.slug} href={`/injuries/${accident.slug}`} className="card" style={{ borderLeft: "3px solid transparent" }}>
                <span className="text-ui text-ui-sm text-accent" style={{ opacity: 0.7, marginBottom: "var(--space-2)", display: "block" }}>
                  Injury Type
                </span>
                <h4 className="card__title">{accident.name}</h4>
                <p className="card__body">{accident.overview?.slice(0, 100) || `Learn about ${accident.name}.`}...</p>
                <span className="card__link">Learn more →</span>
              </Link>
            ))}
          </div>

          <div className="mt-8" style={{ textAlign: "center" }}>
            <Link href="/injuries" className="btn btn--secondary">View All Injury Types</Link>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="section">
        <div className="container">
          <span className="tag">Destinations</span>
          <h2 className="text-display-2 mb-4">Where Did Your <em className="text-accent">Accident Happen?</em></h2>
          <p className="text-body-lg mb-12" style={{ maxWidth: "640px" }}>
            Maritime jurisdiction varies by location. Select where your incident occurred to understand the legal framework.
          </p>

          <div className="grid-4" style={{ gap: "var(--space-4)" }}>
            {destinations.slice(0, 8).map((dest) => (
              <Link key={dest.slug} href={`/destinations/${dest.slug}`} className="card" style={{ textAlign: "center" }}>
                <h4 className="card__title" style={{ fontSize: "var(--text-lg)" }}>{dest.name}</h4>
                <span className="card__link">Learn more →</span>
              </Link>
            ))}
          </div>

          <div className="mt-8" style={{ textAlign: "center" }}>
            <Link href="/destinations" className="btn btn--secondary">View All Destinations</Link>
          </div>
        </div>
      </section>

      {/* FAQ Section - Client Component */}
      <FaqSection />

      {/* CTA Section */}
      <section className="cta" aria-labelledby="home-cta-heading">
        <span className="tag" style={{ justifyContent: "center", display: "inline-flex" }}>Ready to Start?</span>
        <h2 id="home-cta-heading" className="cta__title">
          Don&apos;t Miss Your <em className="text-accent">Deadline</em>
        </h2>
        <p className="cta__text">
          Cruise lines have strict time limits for filing claims. A free consultation costs nothing — waiting could cost everything.
        </p>
        <div style={{ display: "flex", gap: "var(--space-4)", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/contact" className="btn btn--primary btn--large">Get Free Case Review</a>
          <a href="tel:+1-800-555-0123" className="btn btn--secondary btn--large">Call (800) 555-0123</a>
        </div>
      </section>
    </>
  );
}
