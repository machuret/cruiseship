import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { destinations, accidentTypes, getDestinationBySlug } from "@/data/site-data";

export function generateStaticParams() {
  return destinations.map((dest) => ({ destination: dest.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ destination: string }> }): Promise<Metadata> {
  const { destination } = await params;
  const dest = getDestinationBySlug(destination);
  if (!dest) return {};
  return {
    title: `${dest.name} Cruise Accidents | Cruise Ship Injury Lawyer`,
    description: `Injured in ${dest.name} during a cruise? Learn about your legal rights for shore excursions and port-related accidents.`
  };
}

export default async function DestinationPage({ params }: { params: Promise<{ destination: string }> }) {
  const { destination } = await params;
  const dest = getDestinationBySlug(destination);
  if (!dest) return notFound();

  return (
    <main>
      <section className="hero">
        <div className="container">
          <p className="small">/destinations/{dest.slug}/</p>
          <h1>{dest.name} Cruise Accidents</h1>
          <p>{dest.description}. Accidents in {dest.name} can involve complex jurisdictional issues. Our maritime lawyers understand the unique legal considerations for cruise incidents in this region.</p>
          <a className="cta-button" href="#case-review">Get Free Case Review</a>
        </div>
      </section>

      {dest.ports && (
        <section className="section">
          <div className="container">
            <h2 className="h2">Major Ports</h2>
            <ul>
              {dest.ports.map((port) => <li key={port}>{port}</li>)}
            </ul>
          </div>
        </section>
      )}

      <section className="section alt">
        <div className="container">
          <h2 className="h2">Common Accidents in {dest.name}</h2>
          <div className="card-grid">
            {accidentTypes.slice(0, 12).map((accident) => (
              <div key={accident.slug} className="card">
                <h3 className="h3">{accident.name}</h3>
                <p>{accident.overview.slice(0, 80)}...</p>
                <Link href={`/destinations/${dest.slug}/${accident.slug}`}>
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="case-review" className="section">
        <div className="container">
          <h2 className="h2">Request Free Case Review</h2>
          <p>Injured in {dest.name}? Speak with a maritime lawyer today.</p>
          <a className="cta-button" href="/#case-review">Start Your Claim</a>
        </div>
      </section>
    </main>
  );
}
