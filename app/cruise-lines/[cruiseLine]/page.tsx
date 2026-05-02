import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { accidentTypes, cruiseLines } from "@/data/site-data";

export const revalidate = 3600;
export function generateStaticParams() { return cruiseLines.map((c) => ({ cruiseLine: c.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ cruiseLine: string }> }): Promise<Metadata> {
  const { cruiseLine } = await params;
  const line = cruiseLines.find((c) => c.slug === cruiseLine);
  if (!line) return {};
  return { title: `${line.name} Injury Claims Hub`, description: `Explore ${line.name} injury claim guides by accident type.` };
}

export default async function CruiseLineHub({ params }: { params: Promise<{ cruiseLine: string }> }) {
  const { cruiseLine } = await params;
  const line = cruiseLines.find((c) => c.slug === cruiseLine);
  if (!line) return notFound();

  return <main className="section"><div className="container"><nav className="small"><Link href="/cruise-lines">Cruise Lines</Link> / {line.name}</nav><h1 className="h1">{line.name} Injury Claim Hub</h1><p>{line.summary}</p><div className="card-grid">{accidentTypes.map((a)=><article className="card" key={a.slug}><h3 className="h3">{a.name}</h3><Link href={`/cruise-lines/${line.slug}/${a.slug}`}>View legal page</Link></article>)}</div></div></main>;
}
