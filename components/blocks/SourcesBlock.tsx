export function SourcesBlock({ items }: { items: string[] }) {
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">Reference Sources</h2>
        <ul>{items.map((s) => <li key={s}>{s}</li>)}</ul>
      </div>
    </section>
  );
}
