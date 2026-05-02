interface Props { liableParties: string[]; }

export function LiabilityBlock({ liableParties }: Props) {
  return (
    <section className="section alt">
      <div className="container">
        <h2 className="h2">Who May Be Liable</h2>
        <p>Depending on the circumstances, responsibility for your injuries may rest with:</p>
        <ul>
          {liableParties.map((party, i) => <li key={i}>{party}</li>)}
        </ul>
      </div>
    </section>
  );
}
