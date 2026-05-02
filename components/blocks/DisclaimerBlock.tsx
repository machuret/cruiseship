export function DisclaimerBlock({ text }: { text: string }) {
  return (
    <section className="section">
      <div className="container">
        <p className="small"><strong>Legal Disclaimer:</strong> {text}</p>
      </div>
    </section>
  );
}
