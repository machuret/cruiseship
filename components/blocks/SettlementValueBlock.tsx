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
    <section className="section alt">
      <div className="container">
        <h2 className="h2">Typical {displayName} Settlement Values</h2>
        <div className="card" style={{ background: "linear-gradient(135deg, #f8faff 0%, #e8f2ff 100%)", border: "2px solid var(--color-primary)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
            <div style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "var(--color-primary)", fontFamily: "var(--font-heading)" }}>
              {formatCurrency(minAmount)} - {formatCurrency(maxAmount)}
            </div>
            <div style={{ flex: 1, minWidth: "250px" }}>
              <p style={{ margin: 0, fontWeight: 600 }}>Average Settlement Range</p>
              <p className="small" style={{ margin: "8px 0 0" }}>Based on similar maritime injury cases. Actual values vary by severity, medical costs, and liability strength.</p>
            </div>
          </div>
        </div>
        
        <h3 className="h3" style={{ marginTop: "32px" }}>Factors Affecting Your Settlement</h3>
        <div className="card-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
          {factors.map((factor, i) => (
            <div key={i} className="card" style={{ padding: "16px" }}>
              <span style={{ display: "inline-block", width: "24px", height: "24px", borderRadius: "50%", background: "var(--color-primary)", color: "white", textAlign: "center", lineHeight: "24px", fontSize: "14px", fontWeight: 600, marginBottom: "8px" }}>{i + 1}</span>
              <p style={{ margin: 0, fontSize: "15px" }}>{factor}</p>
            </div>
          ))}
        </div>
        
        <p className="small" style={{ marginTop: "24px", padding: "16px", background: "#fef3c7", borderRadius: "8px", borderLeft: "4px solid #f59e0b" }}>
          <strong>Important:</strong> Every case is unique. These ranges are estimates based on past maritime injury settlements. Consult an attorney for a personalized case evaluation.
        </p>
      </div>
    </section>
  );
}
