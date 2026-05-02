# Cruise Ship Accident Lead Magnet Website Plan (Lawyer-Focused SEO)

## 1) Core Goal
Build a large-scale, SEO-first content website that captures potential maritime injury clients and routes them to participating lawyers.

## 2) Business Model
- **Primary conversion:** "Free Case Review" form submissions.
- **Secondary conversion:** Click-to-call, live chat, lawyer directory profile clicks.
- **Monetization options:** Exclusive city/state leads, rotating placements, premium profiles.

## 3) Site Positioning
- Audience: Cruise passengers and families researching injuries.
- Promise: Explain what happened, legal rights, and next steps.
- Tone: Helpful, factual, non-sensational, legally cautious.

## 4) Information Architecture (SEO Scale)

### Top-Level Hubs
- `/cruise-lines/`
- `/accidents/`
- `/ports/`
- `/laws/`
- `/resources/`
- `/lawyers/`

### Primary Programmatic Page Types
1. **Cruise Line pages**
   - Example: `/cruise-lines/carnival-cruise-line/`
2. **Accident Type pages**
   - Example: `/accidents/slip-and-fall/`
3. **Cruise Line + Accident pages** (core SEO template)
   - Example: `/cruise-lines/carnival-cruise-line/slip-and-fall/`
4. **Port + Accident pages**
   - Example: `/ports/miami/slip-and-fall/`
5. **State Law landing pages**
   - Example: `/laws/florida/cruise-ship-injury-claims/`
6. **Lawyer location pages**
   - Example: `/lawyers/florida/miami/`

This creates high topical coverage while maintaining logical internal linking.


## 5) Target Cruise Companies (Minimum 30)
Start with these 30 cruise brands for launch coverage:

1. Carnival Cruise Line
2. Royal Caribbean International
3. Norwegian Cruise Line
4. MSC Cruises
5. Princess Cruises
6. Holland America Line
7. Celebrity Cruises
8. Disney Cruise Line
9. Cunard Line
10. Costa Cruises
11. P&O Cruises (UK)
12. P&O Cruises Australia
13. AIDA Cruises
14. TUI Cruises (Mein Schiff)
15. Marella Cruises
16. Virgin Voyages
17. Oceania Cruises
18. Regent Seven Seas Cruises
19. Seabourn Cruise Line
20. Silversea Cruises
21. Azamara
22. Windstar Cruises
23. Viking Ocean Cruises
24. Paul Gauguin Cruises
25. Crystal Cruises
26. Fred. Olsen Cruise Lines
27. Celestyal Cruises
28. Star Clippers
29. Saga Cruises
30. Hurtigruten

**Implementation rule:** every cruise line above gets 20–30 accident pages using the shared taxonomy templates.

## 6) Standard Destinations & Ports to Cover
Create destination hubs and major-port subpages so users can find legal info by itinerary and embarkation point.

### Destination Hubs
- Caribbean
- Bahamas
- Alaska
- Mediterranean
- Northern Europe / Baltic
- Mexican Riviera
- Hawaii
- Panama Canal
- South Pacific
- Transatlantic / Repositioning Cruises

### Standard U.S. Embarkation Ports
- Miami, FL
- Port Everglades (Fort Lauderdale), FL
- Port Canaveral (Orlando), FL
- Tampa, FL
- Jacksonville, FL
- Galveston, TX
- New Orleans, LA
- Mobile, AL
- Los Angeles (San Pedro), CA
- Long Beach, CA
- San Diego, CA
- San Francisco, CA
- Seattle, WA
- Boston, MA
- New York (Manhattan/Brooklyn), NY
- Bayonne (Cape Liberty), NJ
- Baltimore, MD
- Norfolk, VA

### High-Value International Cruise Ports
- Nassau, Bahamas
- Cozumel, Mexico
- Cabo San Lucas, Mexico
- St. Thomas, USVI
- San Juan, Puerto Rico
- Barcelona, Spain
- Rome (Civitavecchia), Italy
- Southampton, UK
- Vancouver, Canada
- Sydney, Australia

## 7) Recommended Accident Taxonomy (20–30 per Cruise Line)
Use a controlled taxonomy so every cruise line page can scale consistently.

1. Slip and fall on wet decks
2. Pool deck fall injuries
3. Stairway and railing falls
4. Elevator/escalator accidents
5. Tender boat transfer injuries
6. Shore excursion transportation crashes
7. Excursion activity injuries (zipline, scuba, ATV)
8. Food poisoning / norovirus outbreaks
9. Legionnaires' disease exposure
10. Unsafe food allergen exposure
11. Burn injuries (galley, hot liquids, steam)
12. Electrical shock incidents
13. Drowning / near-drowning
14. Water slide injuries
15. Gym and fitness equipment injuries
16. Spa treatment injuries
17. Assault by passenger
18. Assault by crew member
19. Inadequate security incidents
20. Overboard and man-overboard events
21. Cabin balcony accidents
22. Bunk bed / cabin fixture injuries
23. Medical negligence onboard
24. Delayed evacuation / emergency response failures
25. Fire and smoke inhalation injuries
26. Falling objects / luggage injuries
27. Door crush injuries
28. Gangway embarkation/disembarkation accidents
29. Mold / toxic exposure in cabins
30. Child injury in kids' activity zones

## 8) Design System Foundations (Before Coding)

### Typography Standards
Establish one typography system sitewide so all generated pages remain readable, fast, and consistent.

- **Font stack (performance-first):**
  - Headings/UI: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`
  - Body text: `Source Serif 4, Georgia, Cambria, "Times New Roman", serif`
  - Mono (optional for legal excerpts/data): `ui-monospace, SFMono-Regular, Menlo, monospace`
- **Type scale (desktop / mobile minimums):**
  - H1: 48 / 36
  - H2: 36 / 30
  - H3: 30 / 24
  - H4: 24 / 20
  - Body Large: 20 / 18
  - Body Default: 18 / 16
  - Small/Meta: 14 / 14
- **Line-height rules:**
  - Headings: 1.15–1.25
  - Body: 1.6–1.75
  - Lists/FAQs: 1.55+
- **Measure (line length):** 60–75 characters for paragraph text to reduce fatigue on long-form legal pages.
- **Font weights:** 400, 500, 600, 700 only (limit variants for speed).
- **Accessibility constraints:**
  - Minimum WCAG AA contrast
  - Never use font smaller than 16px for core body
  - Preserve semantic heading order (single H1, descending hierarchy)

### Content Formatting Standards
- Paragraph length target: 2–4 sentences for scannability.
- Insert subheadings every 150–250 words on long pages.
- Use bullets for symptoms, evidence lists, liability factors, and timeline steps.
- Add a summary box near top for "What to do now" actions.

### Core Design Tokens (v1)
Create tokens first, then build components from tokens only:
- `--font-*` (families, sizes, line-heights, weights)
- `--color-*` (brand, neutral, semantic success/warning/error)
- `--space-*` (4, 8, 12, 16, 24, 32, 48, 64)
- `--radius-*` (cards, inputs, buttons)
- `--shadow-*` (card/elevated CTA)
- `--container-*` (content widths and breakpoints)

### Modularity Requirements
Design every page as reusable blocks so content operations can scale to thousands of URLs.

1. **Component-driven architecture**
   - Reusable modules: Hero, CTA band, Liability block, Evidence checklist, FAQ, Related links, Attorney card.
   - No page-specific hardcoding for layout primitives.
2. **Data-driven rendering**
   - Each page composed from structured JSON/CMS fields (cruise line, accident type, port, jurisdiction, CTA variant).
   - Keep copy fragments in template libraries with variable placeholders.
3. **Template inheritance**
   - Base template -> page-type template -> page instance overrides.
   - Example: `BaseLegalPage` -> `CruiseLineAccidentTemplate` -> `RoyalCaribbeanSlipAndFallPage`.
4. **Module contract rules**
   - Every module has defined inputs, optional fields, validation rules, and fallback content.
   - Prevent publish if critical fields (title, disclaimer, CTA route) are missing.
5. **Internal linking modules**
   - Related links generated by a recommendation service (not manually curated per page).
   - Preserve consistent anchor-text patterns for SEO control.
6. **QA automation hooks**
   - Pre-publish checks: heading order, word-count thresholds, missing schema blocks, broken links, duplicate metas.

### Minimum UI Kit to Build First
- Buttons (primary, secondary, text)
- Form fields (input, select, textarea, validation states)
- Cards (info, lawyer, destination, accident type)
- Accordions (FAQ)
- Breadcrumbs
- Alert/disclaimer boxes
- Sticky CTA bar
- Section wrappers with consistent spacing

## 9) Page Template Blueprint (for Cruise Line + Accident pages)
Each page should follow a repeatable legal-content framework.

1. **SEO Title + Meta** with intent terms ("lawsuit," "claim," "lawyer").
2. **Hero Section**: What happened + free case review CTA.
3. **What This Accident Is** (plain-language definition).
4. **How It Happens on Cruise Ships** (mechanisms + examples).
5. **Who May Be Liable** (cruise line, contractors, excursion operators).
6. **Common Injuries** (bulleted).
7. **Evidence to Preserve** (photos, reports, witness names, medical docs).
8. **Time Limits and Ticket Contract Issues** (high-level legal disclaimers).
9. **Compensation Overview** (medical bills, lost wages, pain/suffering).
10. **Case Timeline** (what to expect).
11. **FAQ** (schema-ready).
12. **Location-specific legal CTA** (state/city lawyer routing).
13. **Related pages** (internal links).

## 10) Internal Linking System
- Accident hubs link to every cruise line + accident variant.
- Cruise line pages link to all 20–30 accident types.
- Port pages link to relevant excursion and embarkation injury types.
- Every template includes "Related Accident Types" and "Related Cruise Lines".
- Use breadcrumb markup + HTML sitemap for crawl efficiency.

## 11) SEO & Schema Strategy
- Schema: `LegalService`, `FAQPage`, `Article`, `BreadcrumbList`.
- Programmatic but quality-controlled unique intros and FAQs.
- Strong E-E-A-T signals:
  - Editorial policy page
  - Medical/legal reviewer profiles
  - Source citations (CDC, CLIA, Coast Guard, court resources)
- Technical:
  - Fast Core Web Vitals
  - Canonical tags
  - XML sitemaps by page type
  - Indexation controls for thin pages

## 12) Content Production Workflow ("Monster" Mode)
1. Build a **data model** for cruise lines, accidents, ports, statutes, CTAs.
2. Create reusable content blocks with variable insertion.
3. Generate drafts programmatically.
4. Run legal-editor QA checklist.
5. Publish in batches (e.g., 200 pages/week).
6. Track ranking and conversion; refresh low performers monthly.

## 13) Conversion Architecture for Lawyers
- Sticky "Free Consultation" CTA on all pages.
- Multi-step form with qualifiers:
  - Date of accident
  - Cruise line
  - Accident type
  - Injury severity
  - State of residence
- Dynamic routing to lawyer by geography + case type.
- Call tracking numbers per landing page cluster.

## 14) Measurement Plan
- SEO KPIs: indexed pages, ranking keywords, organic sessions.
- Conversion KPIs: form completion rate, call rate, qualified lead rate.
- Revenue KPIs: cost per qualified lead, lawyer retention by market.

## 15) Suggested Build Phases

### Phase 1 (MVP, 4–6 weeks)
- Launch core hubs
- 30 cruise lines × 20 accidents = 600 core pages
- Lawyer lead form + tracking

### Phase 2 (Scale)
- Add ports + state law content
- Expand to 30 accidents and more cruise lines
- Add comparison pages ("Royal Caribbean vs Carnival claims")

### Phase 3 (Authority)
- Add incident news analysis pages
- Add downloadable guides/checklists
- Build backlinks via maritime safety resources

## 16) Compliance Guardrails
- Prominent legal disclaimer (informational, not legal advice).
- Avoid unverifiable incident claims.
- Cite reliable sources for stats or outbreak data.
- Avoid naming individual defendants unless publicly documented.

## 17) Example URL Cluster
- `/cruise-lines/norwegian-cruise-line/`
- `/cruise-lines/norwegian-cruise-line/food-poisoning/`
- `/cruise-lines/norwegian-cruise-line/slip-and-fall/`
- `/ports/galveston/gangway-accidents/`
- `/laws/florida/cruise-ticket-contracts/`
- `/lawyers/texas/houston/cruise-ship-injury-lawyer/`

## 18) Next Step (Execution)
If you want, the next deliverable can be:
1. a full **database/content model schema** (tables + fields),
2. **SEO title/meta formulas** for every template,
3. and **5 fully written page templates** ready for publishing.
