import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { accidentTypes, destinations } from "@/data/site-data";

export const revalidate = 3600;
export function generateStaticParams() { return destinations.map((destination) => ({ destination })); }

export async function generateMetadata({ params }: { params: Promise<{ destination: string }> }): Promise<Metadata> {
  const { destination } = await params;
  if (!destinations.includes(destination)) return {};
  const label = destination.replace(/-/g, " ");
  return { title: `${label} Cruise Injury Hub`, description: `Destination-specific injury claim guides for ${label} cruises.` };
}

export default async function DestinationHub({ params }: { params: Promise<{ destination: string }> }) {
  const { destination } = await params;
  if (!destinations.includes(destination)) return notFound();

  return <main className="section"><div className="container"><nav className="small"><Link href="/destinations">Destinations</Link> / {destination.replace(/-/g, " ")}</nav><h1 className="h1">{destination.replace(/-/g, " ")} Cruise Injury Hub</h1><p>Research frequent incident patterns, legal options, and attorney contact steps for this destination.</p><div className="card-grid">{accidentTypes.map((a)=><article className="card" key={a.slug}><h3 className="h3">{a.name}</h3><p className="small">Destination-specific legal guidance template</p><Link href={`/destinations/${destination}/${a.slug}`}>Open destination + injury page</Link></article>)}</div></div></main>;
}
