interface Props { text: string; }

export function DisclaimerBlock({ text }: Props) {
  return (
    <section className="section">
      <div className="container">
        <div className="disclaimer">
          <p><strong>Important Legal Disclaimer:</strong> {text}</p>
        </div>
      </div>
    </section>
  );
}
