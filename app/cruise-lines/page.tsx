import Link from "next/link";
import { cruiseLines } from "@/data/site-data";

export const metadata = {
  title: "Cruise Lines | Cruise Ship Injury Lawyer",
  description: "Find legal information for cruise accidents on 30 major cruise lines. Free case review for injured passengers."
};

export default function CruiseLinesIndexPage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>Cruise Lines</h1>
          <p>Find legal information specific to your cruise line. We cover all major carriers and their accident liability policies.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="card-grid">
            {cruiseLines.map((line) => (
              <div key={line.slug} className="card">
                <h2 className="h3">{line.name}</h2>
                <p>{line.description}</p>
                <Link href={`/cruise-lines/${line.slug}`}>View accidents →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
