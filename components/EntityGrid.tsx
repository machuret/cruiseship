import type { ReactNode } from "react";

type Props = { title: string; items: { name: string; slug: string }[]; prefix: string; footer?: ReactNode };

export function EntityGrid({ title, items, prefix, footer }: Props) {
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">{title}</h2>
        <div className="card-grid">
          {items.map((item) => (
            <article className="card" key={item.slug}>
              <h3 className="h3">{item.name}</h3>
              <p className="small">Template URL: {prefix}/{item.slug}/</p>
            </article>
          ))}
        </div>
        {footer}
      </div>
    </section>
  );
}
