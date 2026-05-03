/* eslint-disable max-lines */
// Domain Types
export interface CruiseLine {
  slug: string;
  name: string;
  description?: string;
}

export interface AccidentType {
  slug: string;
  name: string;
  overview: string;
  evidenceChecklist: string[];
  riskFactors: string[];
}

export interface Destination {
  slug: string;
  name: string;
  description?: string;
  ports?: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SourceItem {
  title: string;
  url?: string;
}

export interface PagePayload {
  cruiseLine: CruiseLine;
  accident: AccidentType;
  intro: string;
  ctaLabel: string;
  faqs: FAQItem[];
  sources: SourceItem[];
  timeline: string[];
  liableParties: string[];
  disclaimer: string;
  relatedAccidents: AccidentType[];
}

// 30 Cruise Lines
export const cruiseLines: CruiseLine[] = [
  { slug: "carnival-cruise-line", name: "Carnival Cruise Line", description: "World's largest cruise line with fun-focused itineraries" },
  { slug: "royal-caribbean", name: "Royal Caribbean International", description: "Adventure-focused cruises with innovative ships" },
  { slug: "norwegian-cruise-line", name: "Norwegian Cruise Line", description: "Freestyle cruising with flexible dining options" },
  { slug: "msc-cruises", name: "MSC Cruises", description: "European-style cruising with Mediterranean heritage" },
  { slug: "princess-cruises", name: "Princess Cruises", description: "Premium cruising with destination-focused itineraries" },
  { slug: "holland-america", name: "Holland America Line", description: "Classic cruising with refined experiences" },
  { slug: "celebrity-cruises", name: "Celebrity Cruises", description: "Modern luxury with elevated onboard experiences" },
  { slug: "disney-cruise-line", name: "Disney Cruise Line", description: "Family-focused cruises with Disney magic" },
  { slug: "cunard", name: "Cunard Line", description: "Iconic ocean liner heritage and transatlantic crossings" },
  { slug: "costa-cruises", name: "Costa Cruises", description: "Italian-style cruising across Europe and beyond" },
  { slug: "po-uk", name: "P&O Cruises (UK)", description: "Britain's favorite cruise line with global itineraries" },
  { slug: "po-australia", name: "P&O Cruises Australia", description: "Australian-focused cruising in the Pacific region" },
  { slug: "aida", name: "AIDA Cruises", description: "German cruise line with casual resort-style voyages" },
  { slug: "tui", name: "TUI Cruises (Mein Schiff)", description: "German premium cruises with all-inclusive concepts" },
  { slug: "marella", name: "Marella Cruises", description: "British value-focused cruises for families and adults" },
  { slug: "virgin-voyages", name: "Virgin Voyages", description: "Adult-only cruises with a modern, festival vibe" },
  { slug: "oceania", name: "Oceania Cruises", description: "Upper-premium small-ship cruising with culinary focus" },
  { slug: "regent-seven-seas", name: "Regent Seven Seas Cruises", description: "Ultra-luxury all-inclusive cruising experiences" },
  { slug: "seabourn", name: "Seabourn Cruise Line", description: "Intimate ultra-luxury yacht-like cruising" },
  { slug: "silversea", name: "Silversea Cruises", description: "Luxury expedition and ocean cruising" },
  { slug: "azamara", name: "Azamara", description: "Destination-immersive boutique cruising" },
  { slug: "windstar", name: "Windstar Cruises", description: "Small ship sailing and yacht-style cruising" },
  { slug: "viking-ocean", name: "Viking Ocean Cruises", description: "Cultural enrichment with destination-focused voyages" },
  { slug: "paul-gauguin", name: "Paul Gauguin Cruises", description: "Luxury Tahiti and South Pacific specialist" },
  { slug: "crystal", name: "Crystal Cruises", description: "Award-winning luxury ocean and expedition cruising" },
  { slug: "fred-olsen", name: "Fred. Olsen Cruise Lines", description: "Traditional British cruising with smaller ships" },
  { slug: "celestyal", name: "Celestyal Cruises", description: "Greek island and Mediterranean specialist" },
  { slug: "star-clippers", name: "Star Clippers", description: "Tall ship sailing cruises with authentic experience" },
  { slug: "saga", name: "Saga Cruises", description: "UK-based cruises for mature travelers" },
  { slug: "hurtigruten", name: "Hurtigruten", description: "Norwegian coastal and expedition cruising" }
];

// 30 Accident Types
export const accidentTypes: AccidentType[] = [
  {
    slug: "slip-and-fall",
    name: "Slip and Fall on Wet Decks",
    overview: "Slip and fall accidents on cruise ships often occur on wet decks, pool areas, and dining venues due to poor maintenance or inadequate warning signage.",
    evidenceChecklist: [
      "Photos of the accident scene showing the hazard",
      "Witness contact information",
      "Incident report filed with ship security",
      "Medical records from ship doctor",
      "Surveillance footage request"
    ],
    riskFactors: ["Wet or slippery deck surfaces", "Inadequate warning signage", "Poor lighting conditions", "Worn or damaged flooring materials"]
  },
  {
    slug: "pool-deck-fall",
    name: "Pool Deck Fall Injuries",
    overview: "Pool deck falls frequently result from slippery surfaces, inadequate non-slip materials, or poor drainage around pool areas on cruise ships.",
    evidenceChecklist: [
      "Photos of pool deck conditions",
      "Weather records if rain was a factor",
      "Witness statements",
      "Medical treatment documentation",
      "Pool maintenance logs"
    ],
    riskFactors: ["Slippery pool deck surfaces", "Inadequate non-slip materials", "Poor drainage systems", "Lack of supervision"]
  },
  {
    slug: "stairway-fall",
    name: "Stairway and Railing Falls",
    overview: "Stairway accidents on cruise ships often involve broken railings, poor lighting, uneven steps, or slippery surfaces from cleaning.",
    evidenceChecklist: [
      "Photos of stairway and railing condition",
      "Lighting assessment documentation",
      "Maintenance records if accessible",
      "Witness contact details",
      "Security incident report"
    ],
    riskFactors: ["Broken or loose railings", "Poor lighting on stairs", "Uneven or damaged steps", "Wet or slippery surfaces"]
  },
  {
    slug: "elevator-escalator",
    name: "Elevator/Escalator Accidents",
    overview: "Malfunctioning elevators and escalators can cause serious injuries including falls, entrapment, and crushing incidents.",
    evidenceChecklist: [
      "Equipment maintenance logs",
      "Photos of malfunctioning components",
      "Other passenger incident reports",
      "Ship's engineering records",
      "Surveillance footage"
    ],
    riskFactors: ["Equipment malfunction", "Inadequate maintenance", "Entrapment hazards", "Sudden stops or movements"]
  },
  {
    slug: "tender-boat",
    name: "Tender Boat Transfer Injuries",
    overview: "Transferring between cruise ships and tender boats presents significant fall and injury risks due to vessel movement and unstable platforms.",
    evidenceChecklist: [
      "Photos of transfer conditions",
      "Weather and sea state records",
      "Crew member names involved",
      "Tender boat operator information",
      "Medical documentation"
    ],
    riskFactors: ["Unstable transfer platforms", "Rough sea conditions", "Inadequate crew assistance", "Vessel movement"]
  },
  {
    slug: "shore-excursion-crash",
    name: "Shore Excursion Transportation Crashes",
    overview: "Bus, van, and boat accidents during shore excursions can result in serious injuries with complex liability involving cruise lines and local operators.",
    evidenceChecklist: [
      "Police reports from local authorities",
      "Excursion operator information",
      "Driver credentials if available",
      "Vehicle condition photos",
      "Other passenger contact information"
    ],
    riskFactors: ["Negligent drivers", "Poor vehicle maintenance", "Dangerous road conditions", "Lack of safety equipment"]
  },
  {
    slug: "excursion-activity",
    name: "Excursion Activity Injuries",
    overview: "Activities like zip-lining, scuba diving, ATV riding, and snorkeling during excursions carry inherent risks that operators must manage safely.",
    evidenceChecklist: [
      "Activity waiver documents",
      "Equipment inspection records",
      "Guide/instructor credentials",
      "Weather conditions at time of activity",
      "Photos of activity location"
    ],
    riskFactors: ["Inadequate safety briefings", "Defective equipment", "Inexperienced guides", "Poor weather conditions"]
  },
  {
    slug: "food-poisoning",
    name: "Food Poisoning / Norovirus Outbreaks",
    overview: "Cruise ship food poisoning and norovirus outbreaks can affect hundreds of passengers, representing significant health and safety failures.",
    evidenceChecklist: [
      "Medical treatment records",
      "Dining records showing meals consumed",
      "Other affected passenger reports",
      "CDC/VSP inspection reports",
      "Quarantine documentation"
    ],
    riskFactors: ["Improper food handling", "Contaminated water supply", "Inadequate sanitation", "Sick crew members"]
  },
  {
    slug: "legionnaires",
    name: "Legionnaires' Disease Exposure",
    overview: "Legionella bacteria in cruise ship water systems can cause severe pneumonia-like illness, particularly affecting older passengers.",
    evidenceChecklist: [
      "Medical diagnosis documentation",
      "Ship water system test results if available",
      "Cabin location and ventilation details",
      "Other passenger illness reports",
      "Public health investigation records"
    ],
    riskFactors: ["Contaminated water systems", "Poor ventilation maintenance", "Age-related vulnerability", "Inadequate testing protocols"]
  },
  {
    slug: "food-allergen",
    name: "Unsafe Food Allergen Exposure",
    overview: "Cruise lines must properly label and handle food allergens; failures can cause severe allergic reactions including anaphylaxis.",
    evidenceChecklist: [
      "Menu and ingredient documentation",
      "Staff communication about allergies",
      "Medical treatment records",
      "Ship's food handling protocols",
      "Previous allergy incident reports"
    ],
    riskFactors: ["Inadequate allergen labeling", "Cross-contamination", "Staff training gaps", "Failure to verify ingredients"]
  },
  {
    slug: "burn-injuries",
    name: "Burn Injuries (Galley, Hot Liquids, Steam)",
    overview: "Burn injuries on cruise ships often occur in dining areas from hot food spills, steam exposure, or galley-related incidents.",
    evidenceChecklist: [
      "Photos of burn area and cause",
      "Temperature records if equipment-related",
      "Witness statements",
      "Medical treatment documentation",
      "Staff training records"
    ],
    riskFactors: ["Excessively hot food temperatures", "Unprotected steam vents", "Improper food service procedures", "Defective equipment"]
  },
  {
    slug: "electrical-shock",
    name: "Electrical Shock Incidents",
    overview: "Electrical shock incidents on cruise ships can result from faulty cabin outlets, pool lighting, or damaged electrical equipment.",
    evidenceChecklist: [
      "Photos of electrical hazard",
      "Equipment involved identification",
      "Maintenance records for equipment",
      "Witness statements",
      "Engineering inspection reports"
    ],
    riskFactors: ["Faulty wiring", "Inadequate grounding", "Defective electrical equipment", "Water exposure to electrical systems"]
  },
  {
    slug: "drowning",
    name: "Drowning / Near-Drowning",
    overview: "Pool and ocean drowning incidents on cruise ships raise questions about lifeguard presence, safety barriers, and emergency response.",
    evidenceChecklist: [
      "Pool/ocean area photos showing safety measures",
      "Lifeguard staffing records",
      "Emergency response timeline",
      "Surveillance footage",
      "Passenger behavior witness accounts"
    ],
    riskFactors: ["Inadequate lifeguard coverage", "Lack of safety barriers", "Poor visibility conditions", "Delayed emergency response"]
  },
  {
    slug: "water-slide",
    name: "Water Slide Injuries",
    overview: "Water slide injuries can include head trauma, spinal injuries, and drowning, often due to improper design, operation, or supervision.",
    evidenceChecklist: [
      "Slide design and inspection records",
      "Photos of slide and surrounding area",
      "Weight/height restrictions signage",
      "Operator training records",
      "Similar incident reports"
    ],
    riskFactors: ["Improper slide design", "Inadequate supervision", "Failure to enforce size restrictions", "Poor maintenance"]
  },
  {
    slug: "gym-injury",
    name: "Gym and Fitness Equipment Injuries",
    overview: "Fitness center injuries on cruise ships may involve defective equipment, improper maintenance, or lack of safety instructions.",
    evidenceChecklist: [
      "Equipment identification and photos",
      "Maintenance records",
      "Warning signage photos",
      "Staff presence documentation",
      "Similar equipment incident reports"
    ],
    riskFactors: ["Defective exercise equipment", "Inadequate maintenance", "Lack of safety instructions", "Unsupervised use"]
  },
  {
    slug: "spa-injury",
    name: "Spa Treatment Injuries",
    overview: "Spa injuries can result from improper massage techniques, hot stone burns, facial treatment reactions, or equipment malfunction.",
    evidenceChecklist: [
      "Treatment documentation and products used",
      "Therapist credentials",
      "Pre-treatment screening records",
      "Photos of any visible injuries",
      "Follow-up treatment records"
    ],
    riskFactors: ["Improper massage techniques", "Excessive heat application", "Allergic reactions to products", "Untrained staff"]
  },
  {
    slug: "assault-passenger",
    name: "Assault by Passenger",
    overview: "Passenger-on-passenger assaults raise questions about ship security, alcohol service policies, and adequate monitoring.",
    evidenceChecklist: [
      "Security incident reports",
      "Witness contact information",
      "Surveillance footage",
      "Assailant identification",
      "Security response timeline"
    ],
    riskFactors: ["Excessive alcohol service", "Inadequate security presence", "Poor lighting in public areas", "Insufficient monitoring"]
  },
  {
    slug: "assault-crew",
    name: "Assault by Crew Member",
    overview: "Crew assault incidents are particularly serious given the employer-employee relationship and cruise line's duty to supervise.",
    evidenceChecklist: [
      "Crew member name and position",
      "Human resources records if accessible",
      "Security incident report",
      "Witness statements",
      "Crew member employment history"
    ],
    riskFactors: ["Inadequate background checks", "Poor crew supervision", "Lack of security protocols", "Failure to respond to complaints"]
  },
  {
    slug: "inadequate-security",
    name: "Inadequate Security Incidents",
    overview: "Cruise lines have a duty to provide reasonable security; failures can lead to theft, assault, or other criminal incidents.",
    evidenceChecklist: [
      "Security staffing records",
      "Surveillance coverage maps",
      "Previous incident reports in same area",
      "Industry security standards",
      "Security response documentation"
    ],
    riskFactors: ["Insufficient security personnel", "Poor surveillance coverage", "Inadequate lighting", "Slow response times"]
  },
  {
    slug: "man-overboard",
    name: "Overboard and Man-Overboard Events",
    overview: "Falling overboard from a cruise ship often results in death or serious injury, raising questions about railing heights and surveillance.",
    evidenceChecklist: [
      "Railing height measurements",
      "Surveillance system capabilities",
      "Overboard detection technology",
      "Search and rescue response time",
      "Similar overboard incidents"
    ],
    riskFactors: ["Inadequate railing heights", "Poor surveillance coverage", "Lack of overboard detection", "Delayed search response"]
  },
  {
    slug: "balcony-accident",
    name: "Cabin Balcony Accidents",
    overview: "Balcony accidents can involve falls from heights, railing collapses, or objects falling from upper decks onto balconies below.",
    evidenceChecklist: [
      "Railing height and condition photos",
      "Engineering specifications",
      "Weather conditions at time",
      "Witness statements",
      "Similar cabin incident reports"
    ],
    riskFactors: ["Inadequate railing heights", "Structural defects", "Slippery surfaces", "Falling objects from above"]
  },
  {
    slug: "cabin-fixture",
    name: "Bunk Bed / Cabin Fixture Injuries",
    overview: "Cabin fixture injuries include falls from bunk beds, shower slip-and-falls, and injuries from improperly maintained furniture.",
    evidenceChecklist: [
      "Photos of cabin and fixture involved",
      "Maintenance request history",
      "Cabin deck plans",
      "Similar cabin configuration incidents",
      "Medical documentation"
    ],
    riskFactors: ["Defective bunk bed ladders", "Inadequate guardrails", "Slippery shower surfaces", "Poor cabin maintenance"]
  },
  {
    slug: "medical-negligence",
    name: "Medical Negligence Onboard",
    overview: "Ship doctors and medical staff must provide competent care; negligence in diagnosis or treatment can worsen passenger conditions.",
    evidenceChecklist: [
      "Medical records from ship infirmary",
      "Doctor credentials and qualifications",
      "Treatment protocols followed",
      "Follow-up care documentation",
      "Independent medical expert review"
    ],
    riskFactors: ["Inadequate medical facilities", "Unqualified medical staff", "Delayed diagnosis", "Improper treatment protocols"]
  },
  {
    slug: "delayed-evacuation",
    name: "Delayed Evacuation / Emergency Response Failures",
    overview: "Delayed or failed emergency responses during fires, medical emergencies, or other crises can result in preventable injuries or deaths.",
    evidenceChecklist: [
      "Emergency response timeline",
      "Crew training records",
      "Drill and inspection records",
      "Communication logs during emergency",
      "Industry emergency response standards"
    ],
    riskFactors: ["Inadequate crew training", "Poor communication systems", "Equipment failures", "Lack of emergency drills"]
  },
  {
    slug: "fire-smoke",
    name: "Fire and Smoke Inhalation Injuries",
    overview: "Ship fires and smoke inhalation injuries can cause serious respiratory damage and raise questions about fire safety systems.",
    evidenceChecklist: [
      "Fire origin and cause investigation",
      "Smoke detector and alarm records",
      "Fire suppression system records",
      "Evacuation procedures followed",
      "Medical treatment for smoke inhalation"
    ],
    riskFactors: ["Electrical malfunctions", "Improper storage of flammables", "Faulty fire suppression", "Inadequate detection systems"]
  },
  {
    slug: "falling-objects",
    name: "Falling Objects / Luggage Injuries",
    overview: "Injuries from falling luggage, equipment, or unsecured items can occur in cabins, storage areas, or during rough seas.",
    evidenceChecklist: [
      "Photos of object and storage area",
      "Securement procedures documentation",
      "Weather conditions if relevant",
      "Witness statements",
      "Similar falling object incidents"
    ],
    riskFactors: ["Improperly secured luggage", "Overhead bin failures", "Stacked items in storage", "Rough weather conditions"]
  },
  {
    slug: "door-crush",
    name: "Door Crush Injuries",
    overview: "Automatic door malfunctions, heavy watertight doors, and elevator door failures can cause crushing injuries on cruise ships.",
    evidenceChecklist: [
      "Door type and maintenance records",
      "Sensor functionality documentation",
      "Photos of door and surrounding area",
      "Similar door incident reports",
      "Safety inspection records"
    ],
    riskFactors: ["Faulty door sensors", "Inadequate maintenance", "Heavy watertight doors", "Malfunctioning automatic systems"]
  },
  {
    slug: "gangway-accident",
    name: "Gangway Embarkation/Disembarkation Accidents",
    overview: "Gangway accidents during boarding and disembarking can cause serious falls and injuries due to improper setup or supervision.",
    evidenceChecklist: [
      "Gangway angle and security photos",
      "Weather conditions at time",
      "Crew supervision documentation",
      "Alternative boarding procedures available",
      "Medical treatment records"
    ],
    riskFactors: ["Steep gangway angles", "Inadequate handrails", "Slippery surfaces", "Insufficient crew assistance"]
  },
  {
    slug: "mold-exposure",
    name: "Mold / Toxic Exposure in Cabins",
    overview: "Mold and toxic exposure in cruise ship cabins can cause respiratory issues and other health problems from poor ventilation.",
    evidenceChecklist: [
      "Photos of visible mold or moisture",
      "Air quality test results if available",
      "Cabin maintenance history",
      "Medical symptoms documentation",
      "Previous passenger complaints for cabin"
    ],
    riskFactors: ["Poor ventilation systems", "Water leaks and moisture", "Inadequate cleaning", "Cabin location"]
  },
  {
    slug: "child-injury",
    name: "Child Injury in Kids' Activity Zones",
    overview: "Children's activity area injuries raise questions about age-appropriate supervision, equipment safety, and staff qualifications.",
    evidenceChecklist: [
      "Activity area photos showing safety measures",
      "Staff-to-child ratios documentation",
      "Staff background checks and training",
      "Age-appropriate activity policies",
      "Incident supervision documentation"
    ],
    riskFactors: ["Inadequate supervision ratios", "Unsafe equipment", "Untrained staff", "Lack of age-appropriate activities"]
  }
];

// Destinations
export const destinations: Destination[] = [
  {
    slug: "caribbean",
    name: "Caribbean",
    description: "Popular cruise destination with tropical ports including Jamaica, Bahamas, and the Virgin Islands",
    ports: ["Nassau", "Jamaica", "Cozumel", "St. Thomas", "Grand Cayman"]
  },
  {
    slug: "bahamas",
    name: "Bahamas",
    description: "Close-to-home cruising destination with crystal-clear waters and private islands",
    ports: ["Nassau", "Freeport", "Half Moon Cay", "Castaway Cay"]
  },
  {
    slug: "alaska",
    name: "Alaska",
    description: "Scenic wilderness cruising with glacier viewing and wildlife encounters",
    ports: ["Juneau", "Ketchikan", "Skagway", "Glacier Bay"]
  },
  {
    slug: "mediterranean",
    name: "Mediterranean",
    description: "Historic European destinations with rich cultural heritage",
    ports: ["Barcelona", "Rome", "Athens", "Santorini", "Naples"]
  },
  {
    slug: "northern-europe",
    name: "Northern Europe / Baltic",
    description: "Cruises to Scandinavia, Russia, and the Baltic states",
    ports: ["Stockholm", "Copenhagen", "St. Petersburg", "Tallinn", "Helsinki"]
  },
  {
    slug: "mexican-riviera",
    name: "Mexican Riviera",
    description: "Pacific coast cruising to vibrant Mexican resort cities",
    ports: ["Cabo San Lucas", "Puerto Vallarta", "Mazatlan", "Acapulco"]
  },
  {
    slug: "hawaii",
    name: "Hawaii",
    description: "Island-hopping through the Hawaiian archipelago",
    ports: ["Honolulu", "Maui", "Kauai", "Hilo", "Kona"]
  },
  {
    slug: "panama-canal",
    name: "Panama Canal",
    description: "Engineering marvel connecting Atlantic and Pacific oceans",
    ports: ["Panama City", "Colon", "Cartagena", "Puntarenas"]
  },
  {
    slug: "south-pacific",
    name: "South Pacific",
    description: "Remote island destinations including Tahiti and Fiji",
    ports: ["Tahiti", "Moorea", "Bora Bora", "Fiji", "Samoa"]
  },
  {
    slug: "transatlantic",
    name: "Transatlantic / Repositioning",
    description: "Ocean crossings between Europe and the Americas",
    ports: ["Southampton", "New York", "Miami", "Barcelona"]
  },
  {
    slug: "miami",
    name: "Miami, FL",
    description: "Major US cruise port serving Caribbean itineraries",
    ports: ["Port of Miami"]
  },
  {
    slug: "fort-lauderdale",
    name: "Fort Lauderdale (Port Everglades), FL",
    description: "Major South Florida cruise hub",
    ports: ["Port Everglades"]
  },
  {
    slug: "port-canaveral",
    name: "Port Canaveral (Orlando), FL",
    description: "Central Florida cruise port near Orlando attractions",
    ports: ["Port Canaveral"]
  },
  {
    slug: "tampa",
    name: "Tampa, FL",
    description: "Gulf Coast cruise port with historic Ybor City",
    ports: ["Port of Tampa"]
  },
  {
    slug: "jacksonville",
    name: "Jacksonville, FL",
    description: "North Florida cruise port on the St. Johns River",
    ports: ["JAXPORT"]
  },
  {
    slug: "galveston",
    name: "Galveston, TX",
    description: "Primary Texas cruise port serving Western Caribbean",
    ports: ["Port of Galveston"]
  },
  {
    slug: "new-orleans",
    name: "New Orleans, LA",
    description: "Cruise down the Mississippi to Caribbean destinations",
    ports: ["Port of New Orleans"]
  },
  {
    slug: "mobile",
    name: "Mobile, AL",
    description: "Alabama cruise port on the Gulf Coast",
    ports: ["Port of Mobile"]
  },
  {
    slug: "los-angeles",
    name: "Los Angeles (San Pedro), CA",
    description: "Southern California cruise port for Pacific and Mexico itineraries",
    ports: ["Port of Los Angeles"]
  },
  {
    slug: "long-beach",
    name: "Long Beach, CA",
    description: "Carnival's West Coast homeport near Los Angeles",
    ports: ["Port of Long Beach"]
  },
  {
    slug: "san-diego",
    name: "San Diego, CA",
    description: "Southern California cruise port with year-round sailing",
    ports: ["Port of San Diego"]
  },
  {
    slug: "san-francisco",
    name: "San Francisco, CA",
    description: "Iconic Bay Area cruise port with Golden Gate views",
    ports: ["Port of San Francisco"]
  },
  {
    slug: "seattle",
    name: "Seattle, WA",
    description: "Pacific Northwest hub for Alaska cruises",
    ports: ["Port of Seattle"]
  },
  {
    slug: "boston",
    name: "Boston, MA",
    description: "New England cruise port with historic charm",
    ports: ["Port of Boston"]
  },
  {
    slug: "new-york",
    name: "New York (Manhattan/Brooklyn), NY",
    description: "Major Northeast cruise port with Manhattan skyline views",
    ports: ["Manhattan Cruise Terminal", "Brooklyn Cruise Terminal"]
  },
  {
    slug: "bayonne",
    name: "Bayonne (Cape Liberty), NJ",
    description: "Royal Caribbean's Northeast homeport near NYC",
    ports: ["Cape Liberty Cruise Port"]
  },
  {
    slug: "baltimore",
    name: "Baltimore, MD",
    description: "Mid-Atlantic cruise port with easy access to D.C.",
    ports: ["Port of Baltimore"]
  },
  {
    slug: "norfolk",
    name: "Norfolk, VA",
    description: "Virginia cruise port serving mid-Atlantic region",
    ports: ["Half Moone Cruise Terminal"]
  }
];

// Helper functions
export function getCruiseLineBySlug(slug: string): CruiseLine | undefined {
  return cruiseLines.find(c => c.slug === slug);
}

export function getAccidentBySlug(slug: string): AccidentType | undefined {
  return accidentTypes.find(a => a.slug === slug);
}

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find(d => d.slug === slug);
}

export function getRelatedAccidents(currentSlug: string, count: number = 12): AccidentType[] {
  return accidentTypes
    .filter(a => a.slug !== currentSlug)
    .slice(0, count);
}

// Page builder function
export function buildCruiseAccidentPageData(cruiseLineSlug: string, accidentSlug: string): PagePayload | null {
  const cruiseLine = getCruiseLineBySlug(cruiseLineSlug);
  const accident = getAccidentBySlug(accidentSlug);

  if (!cruiseLine || !accident) return null;

  const relatedAccidents = getRelatedAccidents(accidentSlug, 12);

  // Generate comprehensive 300+ word intro based on cruise line and accident type
  const generateComprehensiveIntro = (cruiseLine: CruiseLine, accident: AccidentType): string => {
    const riskFactorsText = accident.riskFactors.slice(0, 3).join("; ");

    return `If you or a loved one suffered ${accident.name.toLowerCase()} while sailing aboard a ${cruiseLine.name} vessel, you may be entitled to significant compensation under maritime law. Cruise lines like ${cruiseLine.name} have a legal duty of care to maintain reasonably safe conditions for all passengers aboard their ships. When they fail in this duty through negligence, poor maintenance, inadequate staffing, or insufficient safety protocols, they can be held financially responsible for the injuries and damages that result.

${accident.overview} These incidents commonly involve ${riskFactorsText}. Such accidents can result in serious injuries including fractures, traumatic brain injuries, spinal cord damage, and in severe cases, permanent disability or death. Victims often face substantial medical expenses, lost wages from inability to work, ongoing rehabilitation costs, and significant pain and suffering.

Under maritime law, also known as admiralty law, cruise lines owe passengers a duty of reasonable care under the circumstances. This legal standard requires cruise operators to maintain their vessels in a reasonably safe condition, provide adequate warnings of known hazards, and take reasonable steps to protect passengers from foreseeable harm. When ${cruiseLine.name} breaches this duty and a passenger is injured as a result, the cruise line may be held liable for damages.

Cruise ship injury cases are subject to unique procedural requirements that differ significantly from typical personal injury claims. Most cruise line ticket contracts contain specific provisions that affect your legal rights, including shortened time limits for providing written notice of your injury and filing lawsuits. Many ${cruiseLine.name} ticket contracts require injured passengers to notify the cruise line in writing within six months of the incident and file any lawsuit within one year. Additionally, forum selection clauses typically require lawsuits to be filed in federal court in Miami, Florida, regardless of where the passenger lives or where the cruise departed from.

Our experienced maritime attorneys have successfully represented passengers injured on ${cruiseLine.name} and all other major cruise lines. We understand the complex legal landscape of cruise ship injury litigation and have the knowledge and resources to effectively pursue maximum compensation for your injuries. We work on a contingency fee basis, meaning you pay nothing upfront and we only collect a fee if we successfully recover compensation on your behalf. Contact us today for a free, no-obligation consultation to discuss your ${accident.name.toLowerCase()} claim and learn about your legal options.`;
  };

  // Generate accident-specific FAQs
  const generateFAQs = (cruiseLine: CruiseLine, accident: AccidentType): FAQItem[] => {
    const baseFAQs: FAQItem[] = [
      {
        question: `Can I sue ${cruiseLine.name} for ${accident.name.toLowerCase()}?`,
        answer: `Yes, if ${cruiseLine.name} failed to maintain reasonably safe conditions, properly train staff, warn passengers of known hazards, or address dangerous conditions in a timely manner, you may have a valid maritime injury claim. Cruise lines owe passengers a duty of reasonable care under maritime law. This duty includes maintaining the ship and its equipment, providing adequate security, and taking reasonable steps to protect passengers from foreseeable harm. Our attorneys can evaluate the specific circumstances of your case to determine if the cruise line's negligence contributed to your injuries.`
      },
      {
        question: `How long do I have to file a claim against ${cruiseLine.name} for ${accident.name.toLowerCase()}?`,
        answer: `Time is critical in cruise ship injury cases. Most cruise line ticket contracts, including those for ${cruiseLine.name}, require written notice of your injury within six (6) months of the incident date. Additionally, lawsuits must typically be filed within one (1) year of the date of injury. These deadlines are significantly shorter than typical personal injury statutes of limitations. Some contracts may specify even shorter time periods. Failure to comply with these deadlines can result in permanent loss of your right to seek compensation. We strongly recommend contacting an attorney immediately after any cruise ship injury.`
      },
      {
        question: `What compensation can I receive for my ${accident.name.toLowerCase()} on ${cruiseLine.name}?`,
        answer: `Compensation in cruise ship injury cases may include economic and non-economic damages. Economic damages cover quantifiable losses such as medical expenses (both past and future), lost wages, diminished earning capacity, rehabilitation costs, and out-of-pocket expenses related to your injury. Non-economic damages include compensation for pain and suffering, emotional distress, loss of enjoyment of life, and inconvenience. In cases involving gross negligence, recklessness, or intentional misconduct by the cruise line, punitive damages may also be awarded to punish the wrongdoer and deter similar conduct in the future.`
      },
      {
        question: `Where will my lawsuit against ${cruiseLine.name} be filed?`,
        answer: `Most cruise line ticket contracts contain forum selection clauses that specify where lawsuits must be filed. For ${cruiseLine.name} and most major cruise lines, these clauses typically require lawsuits to be filed in the U.S. District Court for the Southern District of Florida in Miami, regardless of where the incident occurred, where you live, or where the cruise originated. This is due to the federal nature of maritime law and the cruise industry's concentration in South Florida. An experienced maritime attorney licensed to practice in this jurisdiction is essential for properly handling your claim.`
      },
      {
        question: `What evidence is needed to prove ${cruiseLine.name} was responsible for my ${accident.name.toLowerCase()}?`,
        answer: `To prove liability in a cruise ship injury case, you generally need evidence demonstrating that the cruise line was negligent and that this negligence caused your injuries. Key evidence may include: incident reports filed with ship security; photographs of the accident scene and hazardous conditions; witness statements from other passengers or crew; medical records documenting your injuries and treatment; surveillance footage from the ship; maintenance and inspection records for the area where the injury occurred; and expert testimony regarding safety standards and cruise line operations. Our attorneys work quickly to preserve this crucial evidence before it can be lost or destroyed.`
      },
      {
        question: `What if I signed a liability waiver before my ${cruiseLine.name} cruise or shore excursion?`,
        answer: `While cruise lines and excursion operators often require passengers to sign liability waivers, these documents are not absolute protection against all claims. Courts frequently find such waivers unenforceable in cases involving gross negligence, reckless conduct, intentional misconduct, or violations of maritime safety regulations. Additionally, waivers may not protect the cruise line for its own negligence or for failing to properly vet and supervise third-party excursion operators. Never assume a waiver bars your right to compensation. Our attorneys can review any waiver you signed and advise you on its potential impact on your claim.`
      },
      {
        question: `Should I accept a settlement offer from ${cruiseLine.name} without consulting an attorney?`,
        answer: `We strongly advise against accepting any settlement offer from ${cruiseLine.name} or their insurance representatives without first consulting an experienced maritime attorney. Cruise lines and their insurers often make quick, low settlement offers hoping injured passengers will accept before understanding the full extent of their injuries and legal rights. Once you accept a settlement and sign a release, you typically cannot seek additional compensation later, even if your injuries worsen or you discover additional damages. An attorney can evaluate whether an offer fairly compensates you for all your current and future losses and negotiate for a better settlement if appropriate.`
      },
      {
        question: `How long does a ${accident.name.toLowerCase()} lawsuit against ${cruiseLine.name} typically take?`,
        answer: `The timeline for resolving a cruise ship injury case varies depending on the complexity of the case, the severity of injuries, the cruise line's willingness to negotiate, and court scheduling. Straightforward cases with clear liability and moderate injuries may settle within 6-12 months. More complex cases involving catastrophic injuries, disputed liability, or the need for extensive expert testimony may take 1-3 years to resolve. Cases that proceed to trial generally take longer than those that settle. Throughout the process, we work diligently to move your case forward as efficiently as possible while ensuring we pursue maximum compensation for your injuries.`
      }
    ];
    return baseFAQs;
  };

  // Generate timeline specific to accident type
  const generateTimeline = (accident: AccidentType): string[] => {
    const baseTimeline = [
      "Seek immediate medical attention onboard and document all injuries thoroughly",
      "Report the incident to ship security immediately and obtain a copy of the incident report",
      "Collect contact information from any witnesses who saw the accident occur",
      "Photograph the accident scene, hazardous conditions, and any visible injuries",
      "Preserve all evidence including clothing worn at the time and personal belongings",
      "Document all medical treatment received onboard and request copies of medical records",
      "Contact an experienced maritime injury attorney before speaking with cruise line representatives",
      "File required written notice of claim within the six-month deadline specified in your ticket contract",
      "Continue all recommended medical treatment and maintain detailed records of expenses",
      "Lawsuit filed in appropriate federal court venue if fair settlement cannot be reached"
    ];
    return baseTimeline;
  };

  return {
    cruiseLine,
    accident,
    intro: generateComprehensiveIntro(cruiseLine, accident),
    ctaLabel: `Get Free Case Review for Your ${accident.name} on ${cruiseLine.name}`,
    faqs: generateFAQs(cruiseLine, accident),
    sources: [
      { title: "Maritime Law - Cruise Line Passenger Rights", url: "https://www.maritimelaw.org" },
      { title: "CDC Vessel Sanitation Program", url: "https://www.cdc.gov/nceh/vsp" },
      { title: "CLIA - Cruise Industry Safety Standards", url: "https://www.cruising.org" },
      { title: "U.S. Coast Guard Cruise Ship Safety" }
    ],
    timeline: generateTimeline(accident),
    liableParties: [
      `${cruiseLine.name} (primary carrier)`,
      "Third-party contractors and concessionaires",
      "Equipment manufacturers (for defective products)",
      "Shore excursion operators",
      "Medical personnel (for malpractice claims)",
      "Security companies contracted by cruise line",
      "Port facility operators"
    ],
    disclaimer: "This information is provided for educational purposes only and does not constitute legal advice. Every case is unique. Consult a qualified maritime injury attorney for advice specific to your situation.",
    relatedAccidents
  };
}
