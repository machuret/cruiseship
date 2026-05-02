import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { accidentTypes } from "@/data/site-data";
import { compensationVariants, legalBackgroundVariants, pickVariant } from "@/lib/content-variants";

export const revalidate = 3600;
export function generateStaticParams() { return accidentTypes.map((a) => ({ injury: a.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ injury: string }> }): Promise<Metadata> {
  const { injury } = await params;
  const injuryType = accidentTypes.find((a) => a.slug === injury);
  if (!injuryType) return {};
  return { title: `${injuryType.name} Cruise Injury Legal Guide`, description: `Legal background, compensation, and lawyer steps for ${injuryType.name.toLowerCase()} incidents.` };
}

export default async function InjuryHub({ params }: { params: Promise<{ injury: string }> }) {
  const { injury } = await params;
  const injuryType = accidentTypes.find((a) => a.slug === injury);
  if (!injuryType) return notFound();

  return (
    <main>
      <section className="hero"><div className="container"><nav className="small"><Link href="/injuries">Injuries</Link> / {injuryType.name}</nav><h1 className="h1">{injuryType.name} Legal Guide</h1><p>{injuryType.overview}</p></div></section>
      <section className="section"><div className="container"><h2 className="h2">Legal Background</h2><p>{pickVariant(injury, legalBackgroundVariants)}</p></div></section>
      <section className="section"><div className="container"><h2 className="h2">Potential Compensation</h2><p>{pickVariant(injury, compensationVariants)}</p><ul><li>Medical costs and ongoing treatment</li><li>Lost wages and reduced earning capacity</li><li>Pain and suffering where allowed</li></ul></div></section>
      <section className="section"><div className="container"><h2 className="h2">How to Contact a Lawyer</h2><ol><li>Collect medical and incident records.</li><li>Save ticket contract and cruise documents.</li><li>Request a free lawyer review quickly due to shortened deadlines.</li></ol></div></section>
      <section className="section"><div className="container"><h2 className="h2">Similar Case Patterns</h2><ul>{injuryType.riskFactors.map((r)=><li key={r}>{r}</li>)}</ul></div></section>
    </main>
  );
}
