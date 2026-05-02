import type { FaqItem } from "@/lib/types";

export function FaqBlock({ items }: { items: FaqItem[] }) {
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">Frequently Asked Questions</h2>
        {items.map((item) => (
          <details className="card" key={item.question}>
            <summary><strong>{item.question}</strong></summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
