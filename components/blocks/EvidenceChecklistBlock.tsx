interface Props {
  items: string[];
  cruiseLineName: string;
  accidentName: string;
}

export function EvidenceChecklistBlock({ items, cruiseLineName, accidentName }: Props) {
  return (
    <div>
      <p style={{ color: "var(--color-text-secondary)", marginBottom: "var(--space-4)", lineHeight: "var(--leading-relaxed)" }}>
        Strong evidence is the foundation of a successful {accidentName.toLowerCase()} claim against {cruiseLineName}. 
        Preserve everything you can from the incident — documentation collected now can significantly increase your settlement value.
      </p>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {items.map((item, i) => (
          <li key={i} style={{
            padding: "var(--space-3) 0",
            borderBottom: i < items.length - 1 ? "1px solid var(--color-border-subtle)" : "none",
            color: "var(--color-text-secondary)",
            display: "flex",
            alignItems: "center",
            gap: "var(--space-3)"
          }}>
            <span style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              border: "2px solid var(--color-gold-500)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              color: "var(--color-gold-500)",
              fontSize: "12px",
              fontWeight: "bold"
            }}>✓</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
