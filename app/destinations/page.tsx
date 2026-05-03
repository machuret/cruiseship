import type { Metadata } from "next";
import Link from "next/link";
import { destinations } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Cruise Destinations | Maritime Law by Location",
  description: "Learn about cruise ship accident claims by destination. Caribbean, Bahamas, Alaska, and more. Jurisdiction and legal rights explained."
};

export default function DestinationsPage() {
  return (
    <>
      {/* Page Header */}
      <header className="page-header">
        <div className="page-header__inner container">
          <div className="page-header__content">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/" className="breadcrumb__link">Home</Link>
              <span className="breadcrumb__sep">/</span>
              <span className="breadcrumb__current">Destinations</span>
            </nav>

            <span className="tag">All Destinations</span>

            <h1 className="page-header__title">Cruise <em className="text-accent">Destinations</em></h1>

            <p className="page-header__lead">
              Maritime jurisdiction varies by where your accident occurred. Select your destination 
              to understand the legal framework and your rights under applicable law.
            </p>
          </div>
        </div>
      </header>

      {/* Jurisdiction Banner */}
      <div className="deadline-banner">
        <div className="deadline-banner__inner container">
          <span className="deadline-banner__badge">Legal Info</span>
          <p className="deadline-banner__text">
            <strong>Jurisdiction matters.</strong> Where your accident happened affects which laws apply. Most claims are still governed by your cruise ticket contract and maritime law.
          </p>
        </div>
      </div>

      {/* Destinations Grid */}
      <section className="section px-5vw">
        <div className="container">
          <div className="group-header">
            <div>
              <div className="group-header__cat">
                Cruise Destinations
                <span style={{ display: "block", width: "24px", height: "1px", background: "var(--color-gold-500)", opacity: 0.5 }}></span>
              </div>
              <h2 className="text-display-2">Browse by <em className="text-accent">Destination</em></h2>
              <p className="group-header__desc">
                Click on any destination to learn about jurisdiction, legal considerations, and accident claims specific to that region.
              </p>
            </div>
            <div className="group-header__num">{destinations.length}</div>
          </div>

          <div className="grid-4" style={{ gap: "var(--space-4)" }}>
            {destinations.map((dest) => (
              <Link key={dest.slug} href={`/destinations/${dest.slug}`} className="card" style={{ textAlign: "center" }}>
                <span className="text-ui text-ui-sm text-accent" style={{ opacity: 0.7, marginBottom: "var(--space-2)", display: "block" }}>
                  Destination
                </span>
                <h3 className="card__title" style={{ fontSize: "var(--text-lg)" }}>{dest.name}</h3>
                <span className="card__link">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta" aria-labelledby="destinations-cta-heading">
        <span className="tag" style={{ justifyContent: "center", display: "inline-flex" }}>Need Help?</span>
        <h2 id="destinations-cta-heading" className="cta__title">
          Not Sure About <em className="text-accent">Jurisdiction?</em>
        </h2>
        <p className="cta__text">
          Maritime law is complex. Our attorneys can determine which laws apply to your case and navigate the legal system for you. Free consultation.
        </p>
        <div style={{ display: "flex", gap: "var(--space-4)", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/contact" className="btn btn--primary btn--large">Get Free Consultation</a>
          <Link href="/injuries" className="btn btn--secondary btn--large">Browse by Injury Type</Link>
        </div>
      </section>
    </>
  );
}
