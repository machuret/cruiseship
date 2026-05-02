interface Props { intro: string; }

export function LegalIntroBlock({ intro }: Props) {
  return (
    <section className="section">
      <div className="container">
        <p className="lead">{intro}</p>
      </div>
    </section>
  );
}
