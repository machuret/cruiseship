import { FAQItem } from "@/data/site-data";

interface Props { items: FAQItem[]; }

export function FaqBlock({ items }: Props) {
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">Frequently Asked Questions</h2>
        {items.map((faq, i) => (
          <div key={i} className="faq-item">
            <div className="faq-question">{faq.question}</div>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
