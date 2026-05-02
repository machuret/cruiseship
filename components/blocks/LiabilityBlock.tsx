export function LiabilityBlock({ liableParties }: { liableParties: string[] }) {
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">Who May Be Liable</h2>
        <ul>
          {liableParties.map((party) => (
            <li key={party}>{party}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
