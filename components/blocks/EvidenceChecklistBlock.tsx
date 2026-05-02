export function EvidenceChecklistBlock({ items }: { items: string[] }) {
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">Evidence Checklist</h2>
        <div className="card-grid">
          {items.map((item) => (
            <article className="card" key={item}><p>{item}</p></article>
          ))}
        </div>
      </div>
    </section>
  );
}
