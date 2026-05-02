import Link from "next/link";
import { destinations } from "@/data/site-data";

export const metadata = {
  title: "Destinations & Ports | Cruise Ship Injury Lawyer",
  description: "Cruise accident legal information by destination and port. Find lawyers familiar with local jurisdictions and excursion incidents."
};

export default function DestinationsIndexPage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>Destinations & Ports</h1>
          <p>Find legal information specific to cruise destinations and embarkation ports. Accidents in different locations involve unique jurisdictional considerations.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="card-grid">
            {destinations.map((dest) => (
              <div key={dest.slug} className="card">
                <h2 className="h3">{dest.name}</h2>
                <p>{dest.description}</p>
                {dest.ports && (
                  <p className="small">Ports: {dest.ports.slice(0, 3).join(", ")}...</p>
                )}
                <Link href={`/destinations/${dest.slug}`}>View details →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
