interface Props {
  liableParties: string[];
  cruiseLineName: string;
  accidentName: string;
}

export function LiabilityBlock({ liableParties, cruiseLineName, accidentName }: Props) {
  return (
    <div>
      <p style={{ color: "var(--color-text-secondary)", marginBottom: "var(--space-4)", lineHeight: "var(--leading-relaxed)" }}>
        If you suffered {accidentName.toLowerCase()} on {cruiseLineName}, multiple parties may share responsibility. 
        Understanding who can be held accountable strengthens your claim and maximizes your compensation.
      </p>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {liableParties.map((party, i) => (
          <li key={i} style={{
            padding: "var(--space-3) 0",
            borderBottom: i < liableParties.length - 1 ? "1px solid var(--color-border-subtle)" : "none",
            color: "var(--color-text-secondary)",
            display: "flex",
            alignItems: "center",
            gap: "var(--space-3)"
          }}>
            <span style={{ color: "var(--color-gold-500)", fontWeight: "bold" }}>◆</span>
            {party}
          </li>
        ))}
      </ul>
    </div>
  );
}
