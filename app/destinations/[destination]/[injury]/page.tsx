import { notFound } from "next/navigation";
import Link from "next/link";
import { accidentTypes, cruiseLines, destinations } from "@/data/site-data";
import { compensationVariants, legalBackgroundVariants, pickVariant } from "@/lib/content-variants";
import { relatedCruiseLines } from "@/lib/link-graph";

export const revalidate = 3600;

export function generateStaticParams() {
  return destinations.flatMap((destination) => accidentTypes.map((accident) => ({ destination, injury: accident.slug })));
}

export default async function DestinationInjuryPage({ params }: { params: Promise<{ destination: string; injury: string }> }) {
  const { destination, injury } = await params;
  const accident = accidentTypes.find((a) => a.slug === injury);
  if (!destinations.includes(destination) || !accident) return notFound();
  const seed = `${destination}:${injury}`;

  return (
    <main>
      <section className="hero"><div className="container"><h1 className="h1">{destination.replace(/-/g, " ")} {accident.name} Claims</h1><p>Location-specific legal background, compensation considerations, and lawyer contact steps.</p></div></section>
      <section className="section"><div className="container"><h2 className="h2">Legal Background</h2><p>{pickVariant(seed, legalBackgroundVariants)}</p></div></section>
      <section className="section"><div className="container"><h2 className="h2">Potential Compensation</h2><p>{pickVariant(seed, compensationVariants)}</p><ul><li>Medical treatment and rehabilitation costs</li><li>Lost wages and travel disruption losses</li><li>Pain and suffering where legally recoverable</li></ul></div></section>
      <section className="section"><div className="container"><h2 className="h2">How to Contact a Lawyer</h2><ol><li>Preserve records and timeline.</li><li>Collect witness info and onboard reports.</li><li>Request legal review before contractual deadlines expire.</li></ol></div></section>
      <section className="section"><div className="container"><h2 className="h2">Similar Cases by Cruise Line</h2><div className="card-grid">{relatedCruiseLines(cruiseLines, undefined, 12).map((c)=><article className="card" key={c.slug}><h3 className="h3">{c.name}</h3><Link href={`/cruise-lines/${c.slug}/${accident.slug}`}>View related case guide</Link></article>)}</div></div></section>
    </main>
  );
}
