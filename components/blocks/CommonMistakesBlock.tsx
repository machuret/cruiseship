interface Mistake {
  mistake: string;
  consequence: string;
  solution: string;
}

interface CommonMistakesBlockProps {
  mistakes: Mistake[];
}

export function CommonMistakesBlock({ mistakes }: CommonMistakesBlockProps) {
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">5 Mistakes That Can Hurt Your Claim</h2>
        <p style={{ marginBottom: "32px" }}>Avoid these common errors that cruise lines use to minimize or deny your compensation.</p>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {mistakes.map((item, i) => (
            <div key={i} className="card" style={{ borderLeft: "4px solid #dc2626", padding: "20px" }}>
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ flexShrink: 0, width: "36px", height: "36px", borderRadius: "50%", background: "#dc2626", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontFamily: "var(--font-heading)", fontSize: "18px" }}>
                  {i + 1}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 className="h3" style={{ margin: "0 0 12px", color: "#dc2626" }}>{item.mistake}</h3>
                  
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
                    <div>
                      <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "13px", fontWeight: 600, margin: "0 0 4px", color: "var(--color-muted)" }}>❌ The Risk</h4>
                      <p style={{ margin: 0, fontSize: "15px" }}>{item.consequence}</p>
                    </div>
                    <div>
                      <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "13px", fontWeight: 600, margin: "0 0 4px", color: "#16a34a" }}>✅ The Solution</h4>
                      <p style={{ margin: 0, fontSize: "15px" }}>{item.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="card" style={{ marginTop: "32px", background: "linear-gradient(135deg, #f8faff 0%, #e8f2ff 100%)", textAlign: "center" }}>
          <h3 style={{ fontFamily: "var(--font-heading)", margin: "0 0 16px" }}>Don't Make These Mistakes</h3>
          <p style={{ margin: "0 0 20px" }}>An experienced maritime attorney can help you avoid these pitfalls and maximize your settlement.</p>
          <a href="#case-review" className="cta-button">Get Free Legal Help</a>
        </div>
      </div>
    </section>
  );
}
