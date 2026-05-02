import Link from "next/link";
import { accidentTypes } from "@/data/site-data";

export const metadata = {
  title: "Cruise Ship Accident Types | Cruise Ship Injury Lawyer",
  description: "Comprehensive guide to 30 types of cruise ship accidents. Learn about your legal rights for slip-and-falls, food poisoning, shore excursions, and more."
};

export default function InjuriesIndexPage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>Cruise Ship Accident Types</h1>
          <p>Learn about your legal rights for different types of cruise ship accidents and injuries. Our maritime attorneys handle all major injury categories.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="card-grid">
            {accidentTypes.map((accident) => (
              <div key={accident.slug} className="card">
                <h2 className="h3">{accident.name}</h2>
                <p>{accident.overview.slice(0, 100)}...</p>
                <Link href={`/injuries/${accident.slug}`}>Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
