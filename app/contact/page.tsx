import type { Metadata } from "next";
import { LeadFormBlock } from "@/components/blocks/LeadFormBlock";

export const metadata: Metadata = {
  title: "Contact Us | Cruise Ship Injury Lawyer",
  description: "Contact our maritime attorneys for a free consultation about your cruise ship injury claim. Available 24/7 for urgent inquiries.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="hero" style={{ background: "linear-gradient(135deg, #0c4a6e 0%, #0369a1 100%)", color: "white", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <h1 className="h1">Contact Cruise Ship Injury Lawyer</h1>
          <p style={{ fontSize: "18px", opacity: 0.9 }}>
            Free consultation. No fee unless we win your case.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "48px", maxWidth: "1000px", margin: "0 auto" }}>
            <div>
              <h2 className="h2">Get in Touch</h2>
              <p style={{ marginBottom: "24px", lineHeight: "1.8" }}>
                We're available 24 hours a day, 7 days a week to discuss your cruise ship injury claim. Time is critical in these cases, so don't delay in reaching out.
              </p>

              <div style={{ marginBottom: "32px" }}>
                <h3 style={{ color: "var(--color-primary)", marginBottom: "8px" }}>Phone</h3>
                <p style={{ fontSize: "20px", fontWeight: 600 }}>(888) 555-CRUISE</p>
                <p className="small" style={{ color: "var(--color-muted)" }}>Available 24/7 for urgent inquiries</p>
              </div>

              <div style={{ marginBottom: "32px" }}>
                <h3 style={{ color: "var(--color-primary)", marginBottom: "8px" }}>Email</h3>
                <p>info@cruiseshipinjurycases.com</p>
                <p className="small" style={{ color: "var(--color-muted)" }}>Responses within 24 hours</p>
              </div>

              <div style={{ marginBottom: "32px" }}>
                <h3 style={{ color: "var(--color-primary)", marginBottom: "8px" }}>Office Hours</h3>
                <p>Monday - Friday: 8:00 AM - 8:00 PM EST</p>
                <p>Saturday - Sunday: 9:00 AM - 5:00 PM EST</p>
                <p className="small" style={{ color: "var(--color-muted)" }}>Emergency consultations available outside business hours</p>
              </div>

              <div className="card" style={{ background: "#f0fdf4", borderLeft: "4px solid #22c55e" }}>
                <h3 style={{ marginBottom: "8px" }}>Important Time Limits</h3>
                <p className="small">
                  Most cruise lines require written notice within <strong>6 months</strong> and lawsuits filed within <strong>1 year</strong>. Don't wait—contact us today to protect your rights.
                </p>
              </div>
            </div>

            <div>
              <h2 className="h2">Request a Free Case Review</h2>
              <p style={{ marginBottom: "24px", lineHeight: "1.8" }}>
                Complete the form below and a maritime lawyer will contact you within 24 hours. All information is confidential and protected by attorney-client privilege.
              </p>
              <LeadFormBlock />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "#f8faff" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <h2 className="h2">What to Expect</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px", marginTop: "32px" }}>
            <div className="card">
              <div style={{ fontSize: "32px", marginBottom: "16px" }}>1</div>
              <h3 className="h3">Initial Consultation</h3>
              <p className="small">We'll discuss your accident, injuries, and legal options at no cost to you.</p>
            </div>
            <div className="card">
              <div style={{ fontSize: "32px", marginBottom: "16px" }}>2</div>
              <h3 className="h3">Case Evaluation</h3>
              <p className="small">Our attorneys will assess the strength of your claim and potential compensation.</p>
            </div>
            <div className="card">
              <div style={{ fontSize: "32px", marginBottom: "16px" }}>3</div>
              <h3 className="h3">Representation</h3>
              <p className="small">If we take your case, we handle everything while you focus on recovery.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
