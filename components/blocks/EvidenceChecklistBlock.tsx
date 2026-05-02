interface Props { items: string[]; }

export function EvidenceChecklistBlock({ items }: Props) {
  return (
    <section className="section alt">
      <div className="container">
        <h2 className="h2">Evidence to Preserve</h2>
        <p>Gathering the right evidence strengthens your claim. Document everything you can:</p>
        <ul>
          {items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
    </section>
  );
}
