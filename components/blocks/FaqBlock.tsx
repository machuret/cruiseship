"use client";

import { useState } from "react";
import { FAQItem } from "@/data/site-data";

interface Props { items: FAQItem[]; }

export function FaqBlock({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section px-5vw">
      <div className="container" style={{ maxWidth: "800px" }}>
        <div style={{ textAlign: "center", marginBottom: "var(--space-10)" }}>
          <span className="tag" style={{ justifyContent: "center" }}>FAQ</span>
          <h2 className="h2" style={{ marginTop: "var(--space-4)" }}>Frequently Asked Questions</h2>
          <p style={{ color: "var(--color-text-tertiary)", maxWidth: "600px", margin: "var(--space-4) auto 0" }}>
            Get answers to common questions about your cruise ship injury claim
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          {items.map((faq, i) => (
            <div 
              key={i} 
              className="card"
              style={{ 
                padding: 0,
                overflow: "hidden",
                borderLeft: openIndex === i ? "3px solid var(--color-gold-500)" : "3px solid transparent"
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: "100%",
                  padding: "var(--space-5)",
                  background: "none",
                  border: "none",
                  textAlign: "left",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "var(--space-4)"
                }}
              >
                <span style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "var(--text-lg)",
                  fontWeight: 600,
                  color: "var(--color-text-primary)",
                  lineHeight: 1.4
                }}>
                  {faq.question}
                </span>
                <span style={{
                  transform: openIndex === i ? "rotate(180deg)" : "rotate(0)",
                  transition: "transform 0.2s ease",
                  color: "var(--color-gold-500)",
                  fontSize: "var(--text-sm)",
                  flexShrink: 0
                }}>
                  ▼
                </span>
              </button>
              
              {openIndex === i && (
                <div style={{ 
                  padding: "0 var(--space-5) var(--space-5)",
                  borderTop: "1px solid var(--color-border-subtle)"
                }}>
                  <p style={{ 
                    color: "var(--color-text-secondary)", 
                    lineHeight: "var(--leading-relaxed)",
                    margin: "var(--space-4) 0 0"
                  }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
