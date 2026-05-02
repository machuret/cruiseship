# Cruise Ship Lawyer Lead Site

A modular Next.js system for high-scale cruise accident lawyer pages.

## Current capabilities

- **Dynamic routes**: `/cruise-lines/[cruiseLine]/[accident]` - 900+ pages (30 cruise lines × 30 accidents)
- **Destination pages**: `/destinations/[destination]/[injury]` - location-specific accident content
- **Injury hubs**: `/injuries/[injury]` - comprehensive accident type information
- **Variant-driven intros + CTA labels** for better content uniqueness
- **Reusable legal blocks**: Liability, Evidence, FAQ, Sources, Disclaimer
- **Built-in lead form** with API persistence
- **Metadata + canonical + FAQ JSON-LD** for SEO
- **Sitemap generation** covering all programmatic pages
- **Basic page QA validator** for content quality

## Data Coverage

- 30 Cruise Lines (Carnival, Royal Caribbean, Norwegian, MSC, Princess, etc.)
- 30 Accident Types (Slip-and-fall, Food poisoning, Shore excursion crashes, etc.)
- 28 Destinations/Ports (Caribbean, Alaska, Mediterranean, Miami, Galveston, etc.)

## Project Structure

```
app/
├── api/leads/          # Lead capture API
├── cruise-lines/       # Cruise line routes
│   ├── [cruiseLine]/
│   │   └── [accident]/
├── destinations/       # Destination routes
│   ├── [destination]/
│   │   └── [injury]/
├── injuries/           # Injury type routes
│   └── [injury]/
├── page.tsx           # Home page
├── layout.tsx         # Root layout
└── sitemap.ts         # Sitemap generation

components/
└── blocks/             # Reusable page blocks
    ├── DisclaimerBlock.tsx
    ├── EvidenceChecklistBlock.tsx
    ├── FaqBlock.tsx
    ├── LeadFormBlock.tsx
    ├── LegalIntroBlock.tsx
    ├── LiabilityBlock.tsx
    ├── RelatedLinksBlock.tsx
    └── SourcesBlock.tsx

data/
└── site-data.ts        # All cruise lines, accidents, destinations

lib/
├── content-variants.ts # Content variation pools
├── link-graph.ts       # Internal linking utilities
├── persistence.ts      # Lead storage
├── seo.ts             # SEO helpers
└── validation.ts      # Page QA checks
```

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

## Static Export

The project is configured for static export (`output: 'export'`). The build will generate HTML files in the `dist/` directory suitable for deployment to any static host.

## Page Count

- Home: 1
- Cruise line hubs: 30
- Cruise line × accident: 900
- Destination hubs: 28
- Destination × accident: ~840
- Injury hubs: 30
- **Total: ~1,900+ pages**
