import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { cruiseLines, accidentTypes, getCruiseLineBySlug } from "@/data/site-data";

export function generateStaticParams() {
  return cruiseLines.map((line) => ({ cruiseLine: line.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ cruiseLine: string }> }): Promise<Metadata> {
  const { cruiseLine } = await params;
  const line = getCruiseLineBySlug(cruiseLine);
  if (!line) return {};
  return {
    title: `${line.name} Accident Claims | Cruise Ship Injury Lawyer`,
    description: `Injured on ${line.name}? Learn about your legal rights for slip-and-falls, food poisoning, and other cruise accidents. Free consultation.`
  };
}

export default async function CruiseLinePage({ params }: { params: Promise<{ cruiseLine: string }> }) {
  const { cruiseLine } = await params;
  const line = getCruiseLineBySlug(cruiseLine);
  if (!line) return notFound();

  // Group accidents by category
  const falls = accidentTypes.filter(a => 
    a.slug.includes('slip') || a.slug.includes('fall') || a.slug.includes('pool') || 
    a.slug.includes('stair') || a.slug.includes('elevator') || a.slug.includes('tender') || a.slug.includes('gangway')
  );
  const health = accidentTypes.filter(a => 
    a.slug.includes('food') || a.slug.includes('poison') || a.slug.includes('legion') || 
    a.slug.includes('allergen') || a.slug.includes('mold') || a.slug.includes('medical')
  );
  const security = accidentTypes.filter(a => 
    a.slug.includes('assault') || a.slug.includes('security')
  );
  const aquatic = accidentTypes.filter(a => 
    a.slug.includes('drown') || a.slug.includes('water') || a.slug.includes('burn')
  );
  const cabin = accidentTypes.filter(a => 
    a.slug.includes('cabin') || a.slug.includes('balcony') || a.slug.includes('door') || a.slug.includes('electrical')
  );
  const emergency = accidentTypes.filter(a => 
    a.slug.includes('man-overboard') || a.slug.includes('fire') || a.slug.includes('evacuation') || 
    a.slug.includes('falling') || a.slug.includes('child')
  );
  const excursion = accidentTypes.filter(a => 
    a.slug.includes('excursion') || a.slug.includes('shore')
  );
  const facilities = accidentTypes.filter(a => 
    a.slug.includes('gym') || a.slug.includes('spa')
  );

  return (
    <>
      {/* Page Header */}
      <header className="page-header">
        <div className="page-header__inner container">
          <div className="page-header__content">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/" className="breadcrumb__link">Home</Link>
              <span className="breadcrumb__sep">/</span>
              <Link href="/cruise-lines" className="breadcrumb__link">Cruise Lines</Link>
              <span className="breadcrumb__sep">/</span>
              <span className="breadcrumb__current">{line.name}</span>
            </nav>

            <span className="tag">Cruise Line Claims</span>

            <h1 className="page-header__title">{line.name}<br /><em className="text-accent">Accident Claims</em></h1>

            <p className="page-header__lead">
              {line.description}. If you were injured on a {line.name} cruise, maritime law entitles you to pursue compensation for medical bills, lost wages, and pain and suffering. Time limits apply.
            </p>
          </div>

          <div className="page-header__meta">
            <div className="card" style={{ textAlign: "center", minWidth: "170px" }}>
              <span className="stat__value">{accidentTypes.length}</span>
              <span className="stat__label" style={{ marginTop: "var(--space-1)", display: "block" }}>Claim Types Covered</span>
            </div>
          </div>
        </div>
      </header>

      {/* Facts Strip */}
      <div className="facts-strip">
        <div className="facts-strip__inner container">
          <div className="fact">
            <span className="fact__value">30+</span>
            <span className="fact__label">Ships in Fleet</span>
          </div>
          <div className="fact">
            <span className="fact__value">6mo</span>
            <span className="fact__label">Notice Deadline</span>
          </div>
          <div className="fact">
            <span className="fact__value">1yr</span>
            <span className="fact__label">Lawsuit Deadline</span>
          </div>
          <div className="fact">
            <span className="fact__value">Miami</span>
            <span className="fact__label">Required Court Venue</span>
          </div>
          <div className="fact">
            <span className="fact__value">${accidentTypes.length * 15}K+</span>
            <span className="fact__label">Avg Settlement</span>
          </div>
        </div>
      </div>

      {/* Deadline Banner */}
      <div className="deadline-banner">
        <div className="deadline-banner__inner container">
          <span className="deadline-banner__badge">Deadline Alert</span>
          <p className="deadline-banner__text">
            <strong>{line.name}&apos;s ticket contract imposes strict deadlines.</strong> Written notice must be sent within 6 months. Lawsuits must be filed in Miami Federal Court within 1 year of your injury.
          </p>
          <a href="#case-review" className="btn btn--primary">Get Legal Advice</a>
        </div>
      </div>

      {/* Accident Types Grid */}
      <section className="section px-5vw">
        <div className="container">
          {/* Section Header */}
          <div className="group-header">
            <div>
              <div className="group-header__cat">
                All Accident Types
                <span style={{ display: "block", width: "24px", height: "1px", background: "var(--color-gold-500)", opacity: 0.5 }}></span>
              </div>
              <h2 className="text-display-2">{line.name} <em className="text-accent">Accident Types</em></h2>
              <p className="group-header__desc">
                Click on any accident type to learn about your legal rights and how to pursue compensation against {line.name}.
              </p>
            </div>
            <div className="group-header__num">{accidentTypes.length}</div>
          </div>

          {/* Falls Group */}
          {falls.length > 0 && (
            <div className="mb-16">
              <div className="group-header">
                <div>
                  <div className="group-header__cat">
                    Falls & Deck Injuries
                    <span style={{ display: "block", width: "22px", height: "1px", background: "var(--color-gold-500)", opacity: 0.45 }}></span>
                  </div>
                  <h3 className="text-display-3">Slips, Falls <em className="text-accent">& Structural Hazards</em></h3>
                  <p className="group-header__desc">
                    The most common category of {line.name} injury claims. Wet surfaces, poor lighting, and inadequate signage are recurring factors.
                  </p>
                </div>
                <div className="group-header__num">{falls.length}</div>
              </div>

              <div className="grid-2" style={{ gap: "1px", background: "var(--color-border-subtle)", border: "1px solid var(--color-border-subtle)" }}>
                {falls.map((accident) => (
                  <Link key={accident.slug} href={`/cruise-lines/${line.slug}/${accident.slug}`} className="card" style={{ borderLeft: "3px solid transparent" }}>
                    <span className="text-ui text-ui-sm text-accent" style={{ opacity: 0.7, marginBottom: "var(--space-2)", display: "block" }}>Common Claim</span>
                    <h4 className="card__title" style={{ fontSize: "var(--text-xl)" }}>{accident.name}</h4>
                    <p className="card__body" style={{ fontSize: "var(--text-base)" }}>
                      {accident.overview?.slice(0, 140) || `Learn about ${accident.name} claims on ${line.name}.`}...
                    </p>
                    <span className="card__link" style={{ fontSize: "var(--text-sm)" }}>Learn more →</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="section-divider"></div>

          {/* Other Accidents */}
          <div className="group-header">
            <div>
              <div className="group-header__cat">
                All Other Categories
                <span style={{ display: "block", width: "22px", height: "1px", background: "var(--color-gold-500)", opacity: 0.45 }}></span>
              </div>
              <h3 className="text-display-3">Health, Security <em className="text-accent">& Other Claims</em></h3>
            </div>
          </div>

          <div className="grid-3" style={{ gap: "1px", background: "var(--color-border-subtle)", border: "1px solid var(--color-border-subtle)" }}>
            {[...health, ...security, ...aquatic, ...cabin, ...emergency, ...excursion, ...facilities].map((accident) => (
              <Link key={accident.slug} href={`/cruise-lines/${line.slug}/${accident.slug}`} className="card" style={{ borderLeft: "3px solid transparent" }}>
                <span className="text-ui text-ui-sm text-accent" style={{ opacity: 0.7, marginBottom: "var(--space-2)", display: "block" }}>Claim Type</span>
                <h4 className="card__title">{accident.name}</h4>
                <p className="card__body">
                  {accident.overview?.slice(0, 110) || `Learn about ${accident.name}.`}...
                </p>
                <span className="card__link">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta" aria-labelledby="cta-heading">
        <span className="tag" style={{ justifyContent: "center", display: "inline-flex" }}>Injured on {line.name}?</span>
        <h2 id="cta-heading" className="cta__title">Don&apos;t Let the Clock <em className="text-accent">Run Out</em></h2>
        <p className="cta__text">
          {line.name}&apos;s 6-month notice deadline and 1-year lawsuit window are among the shortest in personal injury law. A free case review costs nothing — waiting could cost everything.
        </p>
        <div style={{ display: "flex", gap: "var(--space-4)", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/contact" className="btn btn--primary btn--large">Start Your Free Case Review</a>
          <Link href="/cruise-lines" className="btn btn--secondary btn--large">Other Cruise Lines</Link>
        </div>
      </section>
    </>
  );
}
