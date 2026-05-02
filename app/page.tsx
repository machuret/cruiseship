import Link from "next/link";
import { cruiseLines, accidentTypes, destinations } from "@/data/site-data";
import { getLastUpdated } from "@/lib/seo";
import { JurisdictionAlertBlock } from "@/components/blocks/JurisdictionAlertBlock";
import { LeadFormBlock } from "@/components/blocks/LeadFormBlock";

export default function HomePage() {
  const lastUpdated = getLastUpdated();

  return (
    <main>
      {/* Hero Section - Trust & Conversion Focus */}
      <section className="hero" style={{ background: "linear-gradient(135deg, #0c4a6e 0%, #0369a1 100%)", color: "white" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "900px" }}>
          <p style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "2px", opacity: 0.8, marginBottom: "16px" }}>
            Updated {lastUpdated} for 2026 Cruise Season
          </p>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.1, marginBottom: "24px" }}>
            Injured on a Cruise Ship?
            <br />
            <span style={{ color: "#7dd3fc" }}>Get the Settlement You Deserve</span>
          </h1>
          <p style={{ fontSize: "18px", maxWidth: "700px", margin: "0 auto 32px", opacity: 0.9, lineHeight: 1.6 }}>
            Maritime attorneys specializing in cruise line injury claims. 
            Average settlements <strong style={{ color: "#7dd3fc" }}>$50,000 - $500,000+</strong>. 
            No fee unless we win.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#case-review" className="cta-button" style={{ fontSize: "18px", padding: "16px 32px" }}>
              Free Case Review
            </a>
            <a href="#learn-more" className="cta-button" style={{ fontSize: "18px", padding: "16px 32px", background: "transparent", border: "2px solid white" }}>
              Learn Your Rights
            </a>
          </div>
          <div style={{ marginTop: "40px", display: "flex", justifyContent: "center", gap: "32px", flexWrap: "wrap", opacity: 0.8, fontSize: "14px" }}>
            <span>1,300+ Injury Guides</span>
            <span>15+ Major Cruise Lines</span>
            <span>30+ Accident Types</span>
            <span>24-Hour Response</span>
          </div>
        </div>
      </section>

      <JurisdictionAlertBlock deadlineMonths={6} />

      {/* Trust & Social Proof Section */}
      <section className="section" style={{ background: "#f8faff" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "32px", textAlign: "center" }}>
            <div>
              <div style={{ fontSize: "36px", fontWeight: "bold", color: "var(--color-primary)", fontFamily: "var(--font-heading)" }}>$50K-$500K+</div>
              <p style={{ margin: "8px 0 0", color: "#64748b" }}>Average Settlement Range</p>
            </div>
            <div>
              <div style={{ fontSize: "36px", fontWeight: "bold", color: "var(--color-primary)", fontFamily: "var(--font-heading)" }}>1,300+</div>
              <p style={{ margin: "8px 0 0", color: "#64748b" }}>Injury Guides</p>
            </div>
            <div>
              <div style={{ fontSize: "36px", fontWeight: "bold", color: "var(--color-primary)", fontFamily: "var(--font-heading)" }}>24hrs</div>
              <p style={{ margin: "8px 0 0", color: "#64748b" }}>Attorney Response Time</p>
            </div>
            <div>
              <div style={{ fontSize: "36px", fontWeight: "bold", color: "var(--color-primary)", fontFamily: "var(--font-heading)" }}>No Fee</div>
              <p style={{ margin: "8px 0 0", color: "#64748b" }}>Unless We Win</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section" id="learn-more">
        <div className="container">
          <h2 className="h2" style={{ textAlign: "center" }}>How Maritime Claims Work</h2>
          <p style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 40px", color: "#64748b" }}>
            Cruise injury cases follow unique rules under maritime law. Understanding your rights is the first step to recovering fair compensation.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px" }}>
            <div className="card" style={{ textAlign: "center", borderTop: "4px solid var(--color-primary)" }}>
              <div style={{ fontSize: "32px", marginBottom: "16px" }}>1</div>
              <h3 className="h3">Report & Document</h3>
              <p className="small">Report to ship security immediately. Photograph the scene, save medical records, and gather witness contacts.</p>
            </div>
            <div className="card" style={{ textAlign: "center", borderTop: "4px solid #f59e0b" }}>
              <div style={{ fontSize: "32px", marginBottom: "16px" }}>2</div>
              <h3 className="h3">File Notice (6 Months)</h3>
              <p className="small">Most cruise lines require written notice within 6 months. Missing this deadline can bar your claim permanently.</p>
            </div>
            <div className="card" style={{ textAlign: "center", borderTop: "4px solid #22c55e" }}>
              <div style={{ fontSize: "32px", marginBottom: "16px" }}>3</div>
              <h3 className="h3">Lawsuit Filed (1 Year)</h3>
              <p className="small">Lawsuits typically must be filed within 1 year, usually in Miami Federal Court regardless of where you live.</p>
            </div>
            <div className="card" style={{ textAlign: "center", borderTop: "4px solid #8b5cf6" }}>
              <div style={{ fontSize: "32px", marginBottom: "16px" }}>4</div>
              <h3 className="h3">Settlement or Trial</h3>
              <p className="small">Most cases settle within 6-12 months. Your attorney negotiates with the cruise line's insurers for maximum compensation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="h2">Cruise Lines We Cover</h2>
          <p>Find legal information specific to your cruise line and injury type.</p>
          <div className="card-grid">
            {cruiseLines.slice(0, 12).map((line) => (
              <div key={line.slug} className="card">
                <h3 className="h3">{line.name}</h3>
                <p>{line.description?.slice(0, 100) || `Legal claims for ${line.name} passengers.`}...</p>
                <Link href={`/cruise-lines/${line.slug}`}>View accidents →</Link>
              </div>
            ))}
          </div>
          <p style={{ marginTop: "var(--space-4)" }}>
            <Link href="/cruise-lines">View all {cruiseLines.length} cruise lines →</Link>
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2 className="h2">Common Accident Types</h2>
          <div className="card-grid">
            {accidentTypes.slice(0, 12).map((accident) => (
              <div key={accident.slug} className="card">
                <h3 className="h3">{accident.name}</h3>
                <p>{accident.overview?.slice(0, 100) || `Learn about ${accident.name} claims.`}...</p>
                <Link href={`/injuries/${accident.slug}`}>Learn more →</Link>
              </div>
            ))}
          </div>
          <p style={{ marginTop: "var(--space-4)" }}>
            <Link href="/injuries">View all {accidentTypes.length} accident types →</Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="h2">Destinations & Ports</h2>
          <p>Find information about accidents at specific cruise destinations.</p>
          <div className="card-grid">
            {destinations.slice(0, 8).map((dest) => (
              <div key={dest.slug} className="card">
                <h3 className="h3">{dest.name}</h3>
                <p>{dest.description?.slice(0, 100) || `Cruise accidents in ${dest.name}.`}...</p>
                <Link href={`/destinations/${dest.slug}`}>View details →</Link>
              </div>
            ))}
          </div>
          <p style={{ marginTop: "var(--space-4)" }}>
            <Link href="/destinations">View all destinations →</Link>
          </p>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="case-review" className="section alt" style={{ background: "#0c4a6e", color: "white" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="h2" style={{ color: "white" }}>Request Your Free Case Review</h2>
          <p style={{ maxWidth: "600px", margin: "0 auto 32px", opacity: 0.9 }}>
            Complete the form below and a maritime lawyer will contact you within 24 hours. 
            No obligation. No fee unless we win.
          </p>
          <LeadFormBlock />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <h2 className="h2" style={{ textAlign: "center" }}>Frequently Asked Questions</h2>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div className="card" style={{ marginBottom: "16px" }}>
              <h3 className="h3" style={{ fontSize: "18px", marginBottom: "8px" }}>Can I sue the cruise line for my injury?</h3>
              <p className="small">Yes, if the cruise line's negligence contributed to your injury, you may have a valid maritime claim. Cruise lines owe passengers a duty of reasonable care under maritime law.</p>
            </div>
            <div className="card" style={{ marginBottom: "16px" }}>
              <h3 className="h3" style={{ fontSize: "18px", marginBottom: "8px" }}>How long do I have to file a claim?</h3>
              <p className="small">Most cruise lines require written notice within 6 months and lawsuits filed within 1 year. These deadlines are much shorter than typical personal injury statutes of limitations.</p>
            </div>
            <div className="card" style={{ marginBottom: "16px" }}>
              <h3 className="h3" style={{ fontSize: "18px", marginBottom: "8px" }}>How much does it cost to hire a maritime attorney?</h3>
              <p className="small">Most maritime injury attorneys work on contingency, meaning you pay nothing upfront and only pay if they win your case. Initial consultations are typically free.</p>
            </div>
            <div className="card" style={{ marginBottom: "16px" }}>
              <h3 className="h3" style={{ fontSize: "18px", marginBottom: "8px" }}>What compensation can I recover?</h3>
              <p className="small">You may recover medical expenses, lost wages, pain and suffering, emotional distress, and in some cases punitive damages. The amount depends on injury severity and negligence degree.</p>
            </div>
          </div>
          <p style={{ textAlign: "center", marginTop: "32px" }}>
            <Link href="/faq" className="cta-button" style={{ background: "transparent", border: "2px solid var(--color-primary)", color: "var(--color-primary)" }}>
              View All 50 FAQs →
            </Link>
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section" style={{ background: "#f0fdf4", textAlign: "center" }}>
        <div className="container">
          <h2 className="h2">Don't Wait - Time Limits Apply</h2>
          <p style={{ maxWidth: "600px", margin: "0 auto 32px", color: "#64748b" }}>
            Cruise injury claims have strict deadlines. Most cruise lines require written notice within 6 months. 
            The sooner you act, the stronger your case.
          </p>
          <a href="#case-review" className="cta-button" style={{ fontSize: "20px", padding: "18px 40px" }}>
            Start Your Free Case Review
          </a>
          <p className="small" style={{ marginTop: "24px", color: "#64748b" }}>
            Updated {lastUpdated} | Maritime Legal Review Board
          </p>
        </div>
      </section>
    </main>
  );
}
