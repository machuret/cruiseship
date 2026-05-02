export function LegalIntroBlock({ intro }: { intro: string }) {
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">Case Overview</h2>
        <p>{intro}</p>
      </div>
    </section>
  );
}
