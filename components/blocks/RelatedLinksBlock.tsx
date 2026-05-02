import Link from "next/link";
import type { AccidentType, CruiseLine } from "@/lib/types";

export function RelatedLinksBlock({ cruiseLine, items }: { cruiseLine: CruiseLine; items: AccidentType[] }) {
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">Related Accident Types</h2>
        <div className="card-grid">
          {items.map((accident) => (
            <article className="card" key={accident.slug}>
              <h3 className="h3">{accident.name}</h3>
              <Link href={`/cruise-lines/${cruiseLine.slug}/${accident.slug}`}>View {cruiseLine.name} {accident.name} guide</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
