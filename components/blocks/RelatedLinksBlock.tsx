import Link from "next/link";
import { AccidentType, CruiseLine } from "@/data/site-data";

interface Props { 
  cruiseLine: CruiseLine;
  items: AccidentType[];
}

export function RelatedLinksBlock({ cruiseLine, items }: Props) {
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">Related {cruiseLine.name} Accidents</h2>
        <div className="card-grid">
          {items.slice(0, 12).map((accident) => (
            <div key={accident.slug} className="card">
              <h3 className="h3">{accident.name}</h3>
              <p>{accident.overview.slice(0, 80)}...</p>
              <Link href={`/cruise-lines/${cruiseLine.slug}/${accident.slug}`}>
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
