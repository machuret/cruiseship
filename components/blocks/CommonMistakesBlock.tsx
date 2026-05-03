import { memo, useMemo } from "react";
import { CruiseLine, AccidentType } from "@/data/site-data";

interface CommonMistakesBlockProps {
  cruiseLine: CruiseLine;
  accident: AccidentType;
}

// Cache for mistakes to avoid regeneration
const mistakesCache = new Map<string, Mistake[]>();

interface Mistake {
  mistake: string;
  consequence: string;
  solution: string;
}

// Generate accident-specific mistakes based on the accident type
function generateMistakes(accident: AccidentType, cruiseLine: CruiseLine): Mistake[] {
  const accidentTypeLower = accident.slug.toLowerCase();

  // Base mistakes that apply to most accidents
  const baseMistakes: Mistake[] = [
    {
      mistake: "Failing to Report the Incident Immediately",
      consequence: `Not reporting your ${accident.name.toLowerCase()} to ship security immediately allows the cruise line to claim the incident never happened or that your injuries occurred elsewhere.`,
      solution: `Report the incident to ${cruiseLine.name} security immediately. Demand a written incident report and request a copy before leaving the ship.`
    },
    {
      mistake: "Not Seeking Medical Attention Onboard",
      consequence: `Waiting to see your own doctor gives ${cruiseLine.name} an opportunity to argue your injuries were not serious or were caused by something else after the cruise.`,
      solution: `Visit the ship's medical facility immediately, even if you think your injuries are minor. Document everything with the ship's medical staff.`
    },
    {
      mistake: "Giving a Recorded Statement to Cruise Line Representatives",
      consequence: `Anything you say to ${cruiseLine.name} representatives can be used against you. They are trained to minimize liability and may trick you into admitting fault or downplaying your injuries.`,
      solution: `Politely decline to give any recorded statements. Tell them you will have your attorney contact them. Consult with a maritime lawyer first.`
    },
    {
      mistake: "Missing the Six-Month Notice Deadline",
      consequence: `${cruiseLine.name} ticket contracts typically require written notice within 6 months. Missing this deadline can permanently bar your claim regardless of how strong your case is.`,
      solution: `Contact a maritime attorney immediately after your injury. Do not wait - the clock starts ticking from the date of the incident.`
    },
    {
      mistake: "Accepting a Quick Settlement Without Legal Advice",
      consequence: `${cruiseLine.name} often offers low settlements hoping you'll accept before understanding the full extent of your injuries and legal rights. Once signed, you cannot seek additional compensation.`,
      solution: `Never accept a settlement offer without consulting an experienced maritime attorney. An attorney can evaluate whether the offer fairly compensates all current and future losses.`
    }
  ];

  // Accident-specific mistakes
  if (accidentTypeLower.includes("slip") || accidentTypeLower.includes("fall") || accidentTypeLower.includes("pool")) {
    return [
      {
        mistake: "Not Photographing the Hazardous Condition",
        consequence: `Without photos of the wet floor, broken railing, or slippery surface that caused your ${accident.name.toLowerCase()}, you have no proof the dangerous condition existed.`,
        solution: `Take photos immediately of the accident scene, the hazard, surrounding area, and your injuries. Have witnesses take photos if you are unable.`
      },
      {
        mistake: "Failing to Identify Witnesses",
        consequence: `Other passengers or crew who saw your fall can provide crucial testimony. Without witness contact information, you lose valuable evidence supporting your claim.`,
        solution: `Get names, phone numbers, and emails of anyone who witnessed the incident. Ask cabin neighbors if they saw or heard anything relevant.`
      },
      ...baseMistakes.slice(2)
    ];
  }

  if (accidentTypeLower.includes("food") || accidentTypeLower.includes("poison") || accidentTypeLower.includes("norovirus")) {
    return [
      {
        mistake: "Not Documenting What You Ate",
        consequence: `Without records of your dining history, ${cruiseLine.name} can argue your illness came from somewhere other than their ship.`,
        solution: `Keep all receipts, menus, and dining records. Note what you ate, when, and where on the ship. Take photos of undercooked or spoiled food.`
      },
      {
        mistake: "Failing to Get Medical Documentation of Illness",
        consequence: `Ship doctors may downplay your symptoms. Without proper medical records documenting the severity and duration, ${cruiseLine.name} will minimize your suffering.`,
        solution: `Insist on thorough medical evaluation. Request copies of all medical records, stool samples, and treatment notes before disembarking.`
      },
      ...baseMistakes.slice(2)
    ];
  }

  if (accidentTypeLower.includes("excursion") || accidentTypeLower.includes("shore")) {
    return [
      {
        mistake: "Not Getting Excursion Operator Information",
        consequence: `Shore excursions often involve third-party operators. Without proper identification, ${cruiseLine.name} may deny responsibility by claiming the operator was independent.`,
        solution: `Get the full name of the excursion company, guide names, vehicle information, and any insurance details. Photograph the excursion vehicle/equipment.`
      },
      {
        mistake: "Signing Liability Waivers Without Understanding",
        consequence: `Many shore excursions require waivers. While these don't always absolve ${cruiseLine.name} of responsibility, signing without review can hurt your case.`,
        solution: `Read all waivers carefully. Take photos of what you signed. Understand that waivers may not protect the cruise line for their own negligence or inadequate vetting.`
      },
      ...baseMistakes.slice(2)
    ];
  }

  if (accidentTypeLower.includes("assault") || accidentTypeLower.includes("security")) {
    return [
      {
        mistake: "Not Reporting to Ship Security Immediately",
        consequence: `Delay in reporting assaults allows ${cruiseLine.name} to question credibility and claim the incident didn't happen on their watch.`,
        solution: `Report any assault to ship security immediately. Demand they contact local authorities at the next port if appropriate. Document security's response.`
      },
      {
        mistake: "Not Preserving Evidence of the Assault",
        consequence: `Physical evidence, clothing, and photos of injuries are crucial in assault cases. Without them, ${cruiseLine.name} may claim insufficient proof.`,
        solution: `Preserve all evidence - clothing worn, photos of injuries, torn items. Do not wash clothes until documented. Get medical examination for evidence collection.`
      },
      ...baseMistakes.slice(2)
    ];
  }

  if (accidentTypeLower.includes("medical") || accidentTypeLower.includes("doctor")) {
    return [
      {
        mistake: "Trusting Ship Medical Staff Completely",
        consequence: `Ship doctors often work for or are contracted by ${cruiseLine.name} and may prioritize the cruise line's interests over proper patient care and documentation.`,
        solution: `Seek independent medical evaluation at the next port if possible. Get second opinions. Document any concerns about quality of care.`
      },
      {
        mistake: "Not Requesting Complete Medical Records",
        consequence: `Ship medical facilities may be reluctant to provide full records. Without complete documentation, ${cruiseLine.name} can argue your injuries were not serious.`,
        solution: `Demand complete medical records before leaving the ship. Get copies of all prescriptions, diagnoses, treatments, and referrals.`
      },
      ...baseMistakes.slice(2)
    ];
  }

  // Default to base mistakes for other accident types
  return baseMistakes;
}

export const CommonMistakesBlock = memo(function CommonMistakesBlock({ cruiseLine, accident }: CommonMistakesBlockProps) {
  const cacheKey = `${accident.slug}-${cruiseLine.slug}`;
  
  const mistakes = useMemo(() => {
    if (mistakesCache.has(cacheKey)) {
      return mistakesCache.get(cacheKey)!;
    }
    const generated = generateMistakes(accident, cruiseLine);
    mistakesCache.set(cacheKey, generated);
    return generated;
  }, [accident, cruiseLine, cacheKey]);

  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">5 Mistakes That Can Hurt Your {cruiseLine.name} {accident.name} Claim</h2>
        <p style={{ marginBottom: "32px" }}>Avoid these common errors that {cruiseLine.name} and their insurers use to minimize or deny compensation for {accident.name.toLowerCase()} victims.</p>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {mistakes.map((item, i) => (
            <div key={i} className="card" style={{ borderLeft: "4px solid #dc2626", padding: "20px" }}>
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ flexShrink: 0, width: "36px", height: "36px", borderRadius: "50%", background: "#dc2626", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontFamily: "var(--font-heading)", fontSize: "18px" }}>
                  {i + 1}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 className="h3" style={{ margin: "0 0 12px", color: "#dc2626" }}>{item.mistake}</h3>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
                    <div>
                      <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "13px", fontWeight: 600, margin: "0 0 4px", color: "var(--color-muted)" }}>❌ The Risk</h4>
                      <p style={{ margin: 0, fontSize: "15px" }}>{item.consequence}</p>
                    </div>
                    <div>
                      <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "13px", fontWeight: 600, margin: "0 0 4px", color: "#16a34a" }}>✅ The Solution</h4>
                      <p style={{ margin: 0, fontSize: "15px" }}>{item.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card" style={{ marginTop: "32px", background: "linear-gradient(135deg, #f8faff 0%, #e8f2ff 100%)", textAlign: "center" }}>
          <h3 style={{ fontFamily: "var(--font-heading)", margin: "0 0 16px" }}>Don't Make These Mistakes</h3>
          <p style={{ margin: "0 0 20px" }}>An experienced maritime attorney can help you avoid these pitfalls and maximize your compensation for your {accident.name.toLowerCase()} on {cruiseLine.name}.</p>
          <a href="#case-review" className="cta-button">Get Free Legal Help for Your {accident.name}</a>
        </div>
      </div>
    </section>
  );
});
