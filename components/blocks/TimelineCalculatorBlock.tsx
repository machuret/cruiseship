interface Phase {
  name: string;
  duration: string;
  description: string;
}

interface TimelineCalculatorBlockProps {
  phases: Phase[];
}

export function TimelineCalculatorBlock({ phases }: TimelineCalculatorBlockProps) {
  const totalMonths = phases.reduce((acc, phase) => {
    const months = parseInt(phase.duration);
    return acc + (isNaN(months) ? 0 : months);
  }, 0);

  return (
    <section className="section alt">
      <div className="container">
        <h2 className="h2">How Long Will My Case Take?</h2>
        <p style={{ marginBottom: "32px" }}>Maritime injury cases typically resolve in phases. Here is what to expect for your claim timeline.</p>
        
        <div style={{ position: "relative", paddingLeft: "40px" }}>
          {/* Timeline line */}
          <div style={{ position: "absolute", left: "15px", top: "0", bottom: "0", width: "4px", background: "var(--color-primary)", borderRadius: "2px" }} />
          
          {phases.map((phase, i) => (
            <div key={i} style={{ position: "relative", marginBottom: "32px", paddingLeft: "24px" }}>
              {/* Timeline dot */}
              <div style={{ 
                position: "absolute", 
                left: "-33px", 
                top: "4px", 
                width: "20px", 
                height: "20px", 
                borderRadius: "50%", 
                background: i === phases.length - 1 ? "var(--color-primary)" : "white",
                border: "4px solid var(--color-primary)"
              }} />
              
              <div className="card" style={{ margin: 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", marginBottom: "8px" }}>
                  <h3 className="h3" style={{ margin: 0 }}>{phase.name}</h3>
                  <span style={{ background: "#e8f2ff", color: "var(--color-primary)", padding: "4px 12px", borderRadius: "12px", fontWeight: 600, fontSize: "14px", fontFamily: "var(--font-heading)" }}>
                    {phase.duration}
                  </span>
                </div>
                <p style={{ margin: 0, color: "var(--color-muted)" }}>{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="card" style={{ marginTop: "32px", background: "#f0fdf4", border: "2px solid #22c55e" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ fontSize: "32px" }}>⏱️</span>
            <div>
              <h4 style={{ margin: "0 0 4px", fontFamily: "var(--font-heading)" }}>Total Estimated Timeline</h4>
              <p style={{ margin: 0 }}>Most cases resolve within <strong>{totalMonths}-{totalMonths + 6} months</strong>. Complex cases or those going to trial may take 18-24 months.</p>
            </div>
          </div>
        </div>
        
        <p className="small" style={{ marginTop: "24px" }}>
          <strong>Note:</strong> These timelines are estimates. Factors like case complexity, cruise line cooperation, and court schedules can affect duration. Settling typically takes less time than going to trial.
        </p>
      </div>
    </section>
  );
}
