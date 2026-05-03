import Link from "next/link";

interface BreadcrumbBlockProps {
  cruiseLineName: string;
  cruiseLineSlug: string;
  accidentName: string;
}

export function BreadcrumbBlock({ cruiseLineName, cruiseLineSlug, accidentName }: BreadcrumbBlockProps) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb" style={{ 
      padding: "16px 0", 
      background: "#f8fafc",
      borderBottom: "1px solid #e2e8f0"
    }}>
      <div className="container">
        <ol style={{ 
          listStyle: "none", 
          margin: 0, 
          padding: 0, 
          display: "flex", 
          alignItems: "center",
          gap: "8px",
          fontSize: "14px",
          color: "#64748b"
        }}>
          <li>
            <Link href="/" style={{ color: "#0369a1", textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/cruise-lines" style={{ color: "#0369a1", textDecoration: "none" }}>
              Cruise Lines
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href={`/cruise-lines/${cruiseLineSlug}`} style={{ color: "#0369a1", textDecoration: "none" }}>
              {cruiseLineName}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" style={{ color: "#334155", fontWeight: 500 }}>
            {accidentName}
          </li>
        </ol>
      </div>
    </nav>
  );
}
