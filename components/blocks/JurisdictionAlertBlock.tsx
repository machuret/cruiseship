interface JurisdictionAlertBlockProps {
  deadlineMonths: number;
}

function WarningIcon() {
  return (
    <svg 
      width="64" 
      height="64" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="#dc2626" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}

export function JurisdictionAlertBlock({ deadlineMonths }: JurisdictionAlertBlockProps) {
  const currentDate = new Date();
  const deadlineDate = new Date(currentDate.setMonth(currentDate.getMonth() + deadlineMonths));
  const deadlineString = deadlineDate.toLocaleDateString('en-US', { 
    month: 'long', 
    year: 'numeric' 
  });

  return (
    <section className="section" style={{ background: "#fef2f2", padding: "48px 0" }} role="alert" aria-live="polite">
      <div className="container">
        <div className="card" style={{ border: "3px solid #dc2626", background: "white", boxShadow: "0 4px 20px rgba(220, 38, 38, 0.15)" }}>
          <div style={{ display: "flex", gap: "24px", alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ flexShrink: 0 }}>
              <WarningIcon />
            </div>
            <div style={{ flex: 1, minWidth: "280px" }}>
              <h2 className="h2" style={{ margin: "0 0 16px", color: "#dc2626" }}>Critical Deadline: Act Before {deadlineString}</h2>
              
              <div style={{ background: "#fef2f2", padding: "20px", borderRadius: "8px", marginBottom: "20px" }}>
                <h3 style={{ fontFamily: "var(--font-heading)", margin: "0 0 12px", fontSize: "18px" }}>Your Ticket Contract Limits Your Time</h3>
                <ul style={{ margin: 0, paddingLeft: "24px" }}>
                  <li style={{ marginBottom: "8px" }}><strong>Notice Requirement:</strong> You must notify the cruise line within <strong>6 months</strong> of your injury</li>
                  <li style={{ marginBottom: "8px" }}><strong>Lawsuit Deadline:</strong> You must file your lawsuit within <strong>1 year</strong> of the incident</li>
                  <li><strong>Court Location:</strong> Most cruise lines require lawsuits in <strong>Miami, Florida Federal Court</strong>, regardless of where you live or where the cruise departed</li>
                </ul>
              </div>
              
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginBottom: "20px" }}>
                <div className="card" style={{ padding: "16px", margin: 0, textAlign: "center", background: "#fef2f2" }}>
                  <div style={{ fontSize: "36px", fontWeight: 700, color: "#dc2626", fontFamily: "var(--font-heading)" }}>6 months</div>
                  <div className="small" style={{ margin: "8px 0 0" }}>To notify cruise line</div>
                </div>
                <div className="card" style={{ padding: "16px", margin: 0, textAlign: "center", background: "#fef2f2" }}>
                  <div style={{ fontSize: "36px", fontWeight: 700, color: "#dc2626", fontFamily: "var(--font-heading)" }}>1 year</div>
                  <div className="small" style={{ margin: "8px 0 0" }}>To file lawsuit</div>
                </div>
                <div className="card" style={{ padding: "16px", margin: 0, textAlign: "center", background: "#fef2f2" }}>
                  <div style={{ fontSize: "36px", fontWeight: 700, color: "#dc2626", fontFamily: "var(--font-heading)" }}>Miami</div>
                  <div className="small" style={{ margin: "8px 0 0" }}>Required court venue</div>
                </div>
              </div>
              
              <p style={{ margin: "0 0 20px" }}>
                <strong>Why this matters:</strong> Missing these deadlines can permanently bar your claim. The clock started ticking on your injury date. Don't wait until it's too late.
              </p>
              
              <a href="#case-review" className="cta-button" style={{ background: "#dc2626", display: "inline-block" }}>Protect Your Rights Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
