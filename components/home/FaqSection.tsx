"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Can I sue the cruise line for my injury?",
    a: "Yes. If the cruise line's negligence contributed to your injury, you may have a valid maritime claim. Cruise lines owe passengers a duty of reasonable care under maritime law, and failing to maintain safe conditions or warn passengers of known hazards can constitute negligence."
  },
  {
    q: "How long do I have to file a claim?",
    a: "Most cruise lines require written notice within 6 months and lawsuits filed within 1 year of the incident. These deadlines are much shorter than typical personal injury statutes of limitations — and missing them can permanently bar your claim. Contact an attorney immediately."
  },
  {
    q: "How much does it cost to hire a maritime attorney?",
    a: "Most maritime injury attorneys work on contingency — meaning you pay nothing upfront and only pay if they win your case. Initial consultations are always free. There is no financial risk to getting legal advice about your situation."
  },
  {
    q: "What if my injury happened on a shore excursion?",
    a: "Shore excursion injuries involve complex liability questions — the cruise line, excursion operator, and other third parties may all bear responsibility. Maritime law governs the cruise line's liability, but specific contract language in your ticket can affect your rights. An attorney can evaluate your options."
  },
  {
    q: "Where will my lawsuit be filed?",
    a: "Most major cruise lines — including Carnival, Royal Caribbean, and Norwegian — require lawsuits to be filed in Miami Federal Court, regardless of where you live or where the cruise departed. Your attorney will handle all the logistics of filing in the correct jurisdiction."
  }
];

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="section" aria-labelledby="faq-heading">
      <div className="container" style={{ maxWidth: "768px" }}>
        <span className="tag">Common Questions</span>
        <h2 id="faq-heading" className="section__title">
          Frequently Asked <em className="text-accent">Questions</em>
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          {faqs.map((faq, index) => (
            <div key={index} className="card card--hoverable" style={{ padding: "var(--space-5)" }}>
              <h4 
                onClick={() => toggleFaq(index)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleFaq(index); } }}
                role="button"
                tabIndex={0}
                aria-expanded={openFaq === index}
                style={{ 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center",
                  margin: 0,
                  fontSize: "var(--text-lg)",
                  fontFamily: "var(--font-heading)",
                  color: "var(--color-navy)",
                  cursor: "pointer"
                }}
              >
                {faq.q}
                <span style={{ 
                  transform: openFaq === index ? "rotate(180deg)" : "rotate(0)",
                  transition: "transform 0.2s"
                }}>▼</span>
              </h4>
              {openFaq === index && (
                <p className="card__body" style={{ fontSize: "var(--text-base)" }}>{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
