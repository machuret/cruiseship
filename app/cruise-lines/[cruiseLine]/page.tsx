import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { cruiseLines, accidentTypes, getCruiseLineBySlug } from "@/data/site-data";

export function generateStaticParams() {
  return cruiseLines.map((line) => ({ cruiseLine: line.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ cruiseLine: string }> }): Promise<Metadata> {
  const { cruiseLine } = await params;
  const line = getCruiseLineBySlug(cruiseLine);
  if (!line) return {};
  return {
    title: `${line.name} Accident Claims | Cruise Ship Injury Lawyer`,
    description: `Injured on ${line.name}? Learn about your legal rights for slip-and-falls, food poisoning, and other cruise accidents. Free consultation.`
  };
}

export default async function CruiseLinePage({ params }: { params: Promise<{ cruiseLine: string }> }) {
  const { cruiseLine } = await params;
  const line = getCruiseLineBySlug(cruiseLine);
  if (!line) return notFound();

  return (
    <main>
      <section className="hero">
        <div className="container">
          <p className="small">/cruise-lines/{line.slug}/</p>
          <h1>{line.name} Accident Claims</h1>
          <p>{line.description}. If you were injured on a {line.name} cruise, you may be entitled to compensation for medical bills, lost wages, and pain and suffering.</p>
          <a className="cta-button" href="#case-review">Get Free Case Review</a>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="h2">Common {line.name} Accidents</h2>
          <p>Click on any accident type to learn about your legal rights and how to pursue compensation.</p>
          <div className="card-grid">
            {accidentTypes.map((accident) => (
              <div key={accident.slug} className="card">
                <h3 className="h3">{accident.name}</h3>
                <p>{accident.overview.slice(0, 100)}...</p>
                <Link href={`/cruise-lines/${line.slug}/${accident.slug}`}>
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="case-review" className="section alt">
        <div className="container">
          <h2 className="h2">Request Free Case Review</h2>
          <p>Injured on {line.name}? Speak with a maritime lawyer today.</p>
          <a className="cta-button" href="/#case-review">Start Your Claim</a>
        </div>
      </section>
    </main>
  );
}
