import Link from "next/link";
import { EntityGrid } from "@/components/EntityGrid";
import { Hero } from "@/components/Hero";
import { accidentTypes, cruiseLines, destinations } from "@/data/site-data";

export default function HomePage() {
  const cruiseAccidentPages = cruiseLines.length * accidentTypes.length;
  const destinationInjuryPages = destinations.length * accidentTypes.length;

  return (
    <main>
      <Hero />
      <section className="section">
        <div className="container">
          <p>
            Generated coverage now includes <strong>{cruiseAccidentPages}</strong> cruise-line × injury pages and <strong>{destinationInjuryPages}</strong> destination × injury pages.
          </p>
          <p>
            Example pages: <Link href={`/cruise-lines/${cruiseLines[0].slug}/${accidentTypes[0].slug}`}>cruise + injury</Link> · {" "}
            <Link href={`/destinations/${destinations[0]}/${accidentTypes[0].slug}`}>destination + injury</Link>
          </p>
        </div>
      </section>
      <EntityGrid title="Cruise Line Hubs" items={cruiseLines} prefix="/cruise-lines" />
      <EntityGrid title="Injury Hubs" items={accidentTypes} prefix="/injuries" />
    </main>
  );
}
