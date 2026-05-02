import Link from "next/link";

export const metadata = {
  title: "Page Not Found | Cruise Ship Injury Lawyer",
  description: "The page you are looking for could not be found. Explore our cruise ship injury guides or contact us for help.",
};

export default function NotFound() {
  return (
    <main>
      <section className="hero" style={{ textAlign: "center", padding: "80px 24px" }}>
        <div className="container" style={{ maxWidth: "600px" }}>
          <div style={{ fontSize: "72px", marginBottom: "24px" }} aria-hidden="true">404</div>
          <h1 className="h1">Page Not Found</h1>
          <p style={{ color: "var(--color-muted)", marginBottom: "32px" }}>
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/" className="cta-button">
              Back to Homepage
            </Link>
            <Link href="/cruise-lines" className="cta-button" style={{ background: "transparent", color: "var(--color-primary)", border: "2px solid var(--color-primary)" }}>
              Browse Cruise Lines
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <h2 className="h2">Looking for something specific?</h2>
          <p style={{ color: "var(--color-muted)", marginBottom: "32px" }}>
            Explore our most popular resources for cruise ship injury claims.
          </p>
          <div className="card-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
            <Link href="/injuries" className="card" style={{ textDecoration: "none" }}>
              <h3 className="h3">Accident Types</h3>
              <p className="small">Learn about different types of cruise ship accidents and your legal rights.</p>
            </Link>
            <Link href="/destinations" className="card" style={{ textDecoration: "none" }}>
              <h3 className="h3">Destinations</h3>
              <p className="small">Find information about accidents at specific cruise destinations and ports.</p>
            </Link>
            <Link href="/#case-review" className="card" style={{ textDecoration: "none" }}>
              <h3 className="h3">Free Case Review</h3>
              <p className="small">Request a free consultation with a maritime injury lawyer.</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
