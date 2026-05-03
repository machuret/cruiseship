import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";
import { destinations, accidentTypes, getDestinationBySlug } from "@/data/site-data";
import { JurisdictionAlertBlock } from "@/components/blocks/JurisdictionAlertBlock";
import { LeadFormBlock } from "@/components/blocks/LeadFormBlock";

const RelatedLinksBlock = dynamic(() => import("@/components/blocks/RelatedLinksBlock").then(m => m.RelatedLinksBlock));

export function generateStaticParams() {
  return destinations.map((dest) => ({ destination: dest.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ destination: string }> }): Promise<Metadata> {
  const { destination } = await params;
  const dest = getDestinationBySlug(destination);
  if (!dest) return {};
  return {
    title: `${dest.name} Cruise Accidents | Maritime Injury Claims`,
    description: `Injured in ${dest.name} during a cruise? Learn about your legal rights for shore excursions and port-related accidents.`,
    alternates: {
      canonical: `https://cruiseshipinjurycases.com/destinations/${dest.slug}`
    }
  };
}

export default async function DestinationPage({ params }: { params: Promise<{ destination: string }> }) {
  const { destination } = await params;
  const dest = getDestinationBySlug(destination);
  if (!dest) return notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {"@type": "ListItem", position: 1, name: "Destinations", item: "https://cruiseshipinjurycases.com/destinations"},
      {"@type": "ListItem", position: 2, name: dest.name, item: `https://cruiseshipinjurycases.com/destinations/${dest.slug}`}
    ]
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      
      {/* Page Header */}
      <header className="page-header">
        <div className="page-header__inner container">
          <div className="page-header__content">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/" className="breadcrumb__link">Home</Link>
              <span className="breadcrumb__sep">/</span>
              <Link href="/destinations" className="breadcrumb__link">Destinations</Link>
              <span className="breadcrumb__sep">/</span>
              <span className="breadcrumb__current">{dest.name}</span>
            </nav>

            <span className="tag">Destination</span>

            <h1 className="page-header__title">{dest.name} <em className="text-accent">Cruise Accidents</em></h1>

            <p className="page-header__lead">
              {dest.description}. Accidents in {dest.name} can involve complex jurisdictional issues. 
              Our maritime lawyers understand the unique legal considerations for cruise incidents in this region.
            </p>

            <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap", marginTop: "var(--space-6)" }}>
              <a href="#case-review" className="btn btn--primary btn--large">Get Free Case Review</a>
            </div>
          </div>
        </div>
      </header>

      {/* Jurisdiction Alert */}
      <JurisdictionAlertBlock deadlineMonths={6} />

      {/* Settlement Value Section */}
      <section className="section px-5vw" style={{ background: "var(--color-bg-secondary)" }}>
        <div className="container">
          <div className="group-header">
            <div>
              <div className="group-header__cat">
                Compensation
                <span style={{ display: "block", width: "22px", height: "1px", background: "var(--color-gold-500)", opacity: 0.45 }}></span>
              </div>
              <h2 className="text-display-3">Potential Settlement Value in <em className="text-accent">{dest.name}</em></h2>
              <p className="group-header__desc">
                Maritime injury settlements in {dest.name} vary based on the nature of the accident, 
                injury severity, and the cruise line involved. Cases involving port accidents or shore excursions 
                often involve additional liable parties.
              </p>
            </div>
          </div>
          
          <div className="card" style={{ borderLeft: "3px solid var(--color-gold-500)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "var(--space-6)" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-4xl)", fontWeight: "bold", color: "var(--color-gold-500)" }}>$50K</div>
                <div style={{ fontSize: "var(--text-sm)", color: "var(--color-text-tertiary)", textTransform: "uppercase", letterSpacing: "var(--tracking-wider)" }}>Minimum</div>
              </div>
              <div style={{ textAlign: "center", borderLeft: "1px solid var(--color-border-subtle)", borderRight: "1px solid var(--color-border-subtle)", padding: "0 var(--space-6)" }}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-4xl)", fontWeight: "bold", color: "var(--color-gold-500)" }}>$250K</div>
                <div style={{ fontSize: "var(--text-sm)", color: "var(--color-text-tertiary)", textTransform: "uppercase", letterSpacing: "var(--tracking-wider)" }}>Average</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-4xl)", fontWeight: "bold", color: "var(--color-gold-500)" }}>$500K+</div>
                <div style={{ fontSize: "var(--text-sm)", color: "var(--color-text-tertiary)", textTransform: "uppercase", letterSpacing: "var(--tracking-wider)" }}>Maximum</div>
              </div>
            </div>
            <p style={{ marginTop: "var(--space-6)", color: "var(--color-text-secondary)", fontSize: "var(--text-sm)", borderTop: "1px solid var(--color-border-subtle)", paddingTop: "var(--space-4)" }}>
              <strong style={{ color: "var(--color-text-primary)" }}>Factors affecting {dest.name} claims:</strong>{" "}
              Port-specific regulations, excursion operator liability, local medical costs, 
              jurisdictional complexity, and cruise line ticket contract terms.
            </p>
          </div>
        </div>
      </section>

      {/* Major Ports Section */}
      {dest.ports && (
        <section className="section px-5vw">
          <div className="container">
            <div className="group-header">
              <div>
                <div className="group-header__cat">
                  Ports
                  <span style={{ display: "block", width: "22px", height: "1px", background: "var(--color-gold-500)", opacity: 0.45 }}></span>
                </div>
                <h2 className="text-display-3">Major Cruise Ports in <em className="text-accent">{dest.name}</em></h2>
                <p className="group-header__desc">
                  Accidents can occur at any port of call. Each location has unique safety regulations and liability considerations.
                </p>
              </div>
              <div className="group-header__num">{dest.ports.length}</div>
            </div>

            <div className="card-grid">
              {dest.ports.map((port) => (
                <div key={port} className="card" style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "var(--text-3xl)", display: "block", marginBottom: "var(--space-3)" }}>⚓</span>
                  <h3 className="h3" style={{ fontSize: "var(--text-lg)" }}>{port}</h3>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-tertiary)", marginTop: "var(--space-2)" }}>
                    Port-related incidents may involve the cruise line, port authority, or excursion operators.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Common Accidents Section */}
      <section className="section px-5vw" style={{ background: "var(--color-bg-secondary)" }}>
        <div className="container">
          <div className="group-header">
            <div>
              <div className="group-header__cat">
                Accidents
                <span style={{ display: "block", width: "22px", height: "1px", background: "var(--color-gold-500)", opacity: 0.45 }}></span>
              </div>
              <h2 className="text-display-3">Common Accidents in <em className="text-accent">{dest.name}</em></h2>
              <p className="group-header__desc">
                Select an accident type to learn about legal rights and compensation options specific to {dest.name}.
              </p>
            </div>
          </div>

          <div className="card-grid">
            {accidentTypes.map((accident) => (
              <Link 
                key={accident.slug} 
                href={`/destinations/${dest.slug}/${accident.slug}`}
                className="card"
                style={{ textDecoration: "none", display: "block" }}
              >
                <span className="text-ui text-ui-sm" style={{ opacity: 0.7, marginBottom: "var(--space-2)", display: "block", color: "var(--color-gold-500)", textTransform: "uppercase", letterSpacing: "var(--tracking-wider)", fontSize: "var(--text-xs)" }}>
                  Accident Type
                </span>
                <h3 className="card__title" style={{ fontSize: "var(--text-lg)", marginBottom: "var(--space-3)" }}>{accident.name}</h3>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-tertiary)", lineHeight: "var(--leading-relaxed)", marginBottom: "var(--space-4)" }}>
                  {accident.overview.slice(0, 100)}...
                </p>
                <span className="card__link">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <LeadFormBlock />

      {/* Related Destinations */}
      <section className="section px-5vw">
        <div className="container">
          <div className="group-header">
            <div>
              <div className="group-header__cat">
                Explore
                <span style={{ display: "block", width: "22px", height: "1px", background: "var(--color-gold-500)", opacity: 0.45 }}></span>
              </div>
              <h2 className="text-display-3">Other <em className="text-accent">Destinations</em></h2>
            </div>
          </div>
          <div className="grid-4" style={{ gap: "var(--space-4)" }}>
            {destinations
              .filter(d => d.slug !== dest.slug)
              .slice(0, 8)
              .map((relatedDest) => (
                <Link 
                  key={relatedDest.slug} 
                  href={`/destinations/${relatedDest.slug}`}
                  className="card"
                  style={{ textDecoration: "none", display: "block", textAlign: "center" }}
                >
                  <span style={{ fontSize: "var(--text-sm)", color: "var(--color-gold-500)", textTransform: "uppercase", letterSpacing: "var(--tracking-wider)", marginBottom: "var(--space-2)", display: "block" }}>
                    Destination
                  </span>
                  <h3 className="card__title" style={{ fontSize: "var(--text-lg)" }}>{relatedDest.name}</h3>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta" aria-labelledby="dest-cta-heading">
        <span className="tag" style={{ justifyContent: "center", display: "inline-flex" }}>Need Help?</span>
        <h2 id="dest-cta-heading" className="cta__title">
          Injured in {dest.name}? <em className="text-accent">We Can Help</em>
        </h2>
        <p className="cta__text">
          Maritime law is complex, especially for port-related incidents. Our attorneys understand the unique 
          jurisdictional challenges of {dest.name} and can navigate the legal system for you. Free consultation.
        </p>
        <div style={{ display: "flex", gap: "var(--space-4)", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#case-review" className="btn btn--primary btn--large">Get Free Case Review</a>
          <Link href="/injuries" className="btn btn--secondary btn--large">Browse by Injury Type</Link>
        </div>
      </section>
    </main>
  );
}
