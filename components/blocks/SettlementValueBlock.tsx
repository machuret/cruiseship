interface SettlementValueBlockProps {
  injuryName: string;
  cruiseLineName?: string;
  minAmount: number;
  maxAmount: number;
  factors: string[];
}

export function SettlementValueBlock({ injuryName, cruiseLineName, minAmount, maxAmount, factors }: SettlementValueBlockProps) {
  const formatCurrency = (amount: number) => {
    if (amount >= 1000000) return `$${(amount / 1000000).toFixed(1)}M`;
    if (amount >= 1000) return `$${(amount / 1000).toFixed(0)}K`;
    return `$${amount}`;
  };

  const displayName = cruiseLineName ? `${cruiseLineName} ${injuryName}` : injuryName;

  return (
    <section className="section px-5vw" style={{ background: "var(--color-bg-secondary)" }}>
      <div className="container">
        <div className="group-header">
          <div>
            <div className="group-header__cat">
              Compensation
              <span style={{ display: "block", width: "22px", height: "1px", background: "var(--color-gold-500)", opacity: 0.45 }}></span>
            </div>
            <h2 className="text-display-3">Typical {displayName} Settlement Values</h2>
          </div>
        </div>

        <div className="card" style={{ borderLeft: "3px solid var(--color-gold-500)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-6)", flexWrap: "wrap" }}>
            <div style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "var(--color-gold-500)", fontFamily: "var(--font-serif)" }}>
              {formatCurrency(minAmount)} - {formatCurrency(maxAmount)}
            </div>
            <div style={{ flex: 1, minWidth: "250px" }}>
              <p style={{ margin: 0, fontWeight: 600, color: "var(--color-text-primary)" }}>Average Settlement Range</p>
              <p style={{ margin: "var(--space-2) 0 0", color: "var(--color-text-secondary)", fontSize: "var(--text-sm)" }}>
                Based on similar maritime injury cases. Actual values vary by severity, medical costs, and liability strength.
              </p>
            </div>
          </div>
        </div>
        
        <h3 className="h3" style={{ marginTop: "var(--space-8)" }}>Factors Affecting Your Settlement</h3>
        <div className="card-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
          {factors.map((factor, i) => (
            <div key={i} className="card" style={{ padding: "var(--space-4)" }}>
              <span style={{ 
                display: "inline-flex", 
                width: "24px", 
                height: "24px", 
                borderRadius: "50%", 
                background: "var(--color-gold-500)", 
                color: "var(--color-navy-900)", 
                alignItems: "center",
                justifyContent: "center",
                fontSize: "var(--text-sm)", 
                fontWeight: 600, 
                marginBottom: "var(--space-2)" 
              }}>{i + 1}</span>
              <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--color-text-secondary)" }}>{factor}</p>
            </div>
          ))}
        </div>
        
        <p style={{ marginTop: "var(--space-6)", padding: "var(--space-4)", background: "rgba(201, 146, 58, 0.1)", borderRadius: "var(--radius-md)", borderLeft: "3px solid var(--color-gold-500)", color: "var(--color-text-secondary)", fontSize: "var(--text-sm)" }}>
          <strong style={{ color: "var(--color-text-primary)" }}>Important:</strong> Every case is unique. These ranges are estimates based on past maritime injury settlements. Consult an attorney for a personalized case evaluation.
        </p>
      </div>
    </section>
  );
}
