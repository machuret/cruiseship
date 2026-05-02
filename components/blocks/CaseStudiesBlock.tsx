interface CaseStudy {
  scenario: string;
  settlement: string;
  keyFactors: string[];
  timeline: string;
}

interface CaseStudiesBlockProps {
  caseStudies: CaseStudy[];
}

export function CaseStudiesBlock({ caseStudies }: CaseStudiesBlockProps) {
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">Recent Case Results</h2>
        <p style={{ marginBottom: "32px" }}>While every case is different, these anonymous summaries represent typical outcomes for similar maritime injury claims.</p>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {caseStudies.map((study, i) => (
            <div key={i} className="card" style={{ borderLeft: "4px solid var(--color-primary)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px", marginBottom: "16px" }}>
                <h3 className="h3" style={{ margin: 0 }}>{study.scenario}</h3>
                <span style={{ background: "var(--color-primary)", color: "white", padding: "8px 16px", borderRadius: "20px", fontWeight: 600, fontFamily: "var(--font-heading)", fontSize: "14px" }}>
                  {study.settlement}
                </span>
              </div>
              
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
                <div>
                  <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "14px", fontWeight: 600, margin: "0 0 8px", color: "var(--color-muted)" }}>Key Success Factors</h4>
                  <ul style={{ margin: 0, paddingLeft: "20px" }}>
                    {study.keyFactors.map((factor, j) => (
                      <li key={j} style={{ marginBottom: "4px" }}>{factor}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "14px", fontWeight: 600, margin: "0 0 8px", color: "var(--color-muted)" }}>Case Timeline</h4>
                  <p style={{ margin: 0 }}>{study.timeline}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <p className="small" style={{ marginTop: "24px" }}>
          * Case results are representative examples. Past results do not guarantee future outcomes. Settlement amounts depend on individual circumstances.
        </p>
      </div>
    </section>
  );
}
