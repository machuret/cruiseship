import { memo, useMemo } from "react";

interface TimelineCalculatorBlockProps {
  timeline: string[];
  cruiseLineName: string;
  accidentName: string;
}

interface Phase {
  name: string;
  duration: string;
  description: string;
}

// Cache for computed timelines
const timelineCache = new Map<string, Phase[]>();

// Convert timeline steps to phases based on accident type
function getAccidentSpecificTimeline(accidentName: string): Phase[] {
  const basePhases: Phase[] = [
    {
      name: "Immediate Action Phase",
      duration: "0-30 days",
      description: "Seek medical treatment, report the incident, gather evidence, and document everything. This is the most critical phase for preserving your claim."
    },
    {
      name: "Notice Period",
      duration: "1-6 months",
      description: "File written notice of claim as required by your cruise ticket contract. Missing this deadline can permanently bar your claim."
    },
    {
      name: "Investigation & Discovery",
      duration: "3-12 months",
      description: "Your attorney gathers evidence, interviews witnesses, obtains ship records, and builds your case. Medical treatment should continue during this phase."
    },
    {
      name: "Settlement Negotiations",
      duration: "6-18 months",
      description: "Your attorney negotiates with the cruise line's insurance carriers. Most cases settle during this phase without going to trial."
    },
    {
      name: "Resolution",
      duration: "12-24 months",
      description: "Case settles or proceeds to trial. If settled, you receive compensation. If going to trial, additional preparation and court time is required."
    }
  ];

  // Add accident-specific modifications
  const accidentLower = accidentName.toLowerCase();

  if (accidentLower.includes("medical") || accidentLower.includes("malpractice")) {
    return [
      {
        name: "Immediate Action Phase",
        duration: "0-30 days",
        description: "Seek independent medical evaluation, request all ship medical records, and document your symptoms and treatment concerns."
      },
      {
        name: "Notice Period",
        duration: "1-6 months",
        description: "File written notice of claim. Medical malpractice cases require detailed documentation of the ship doctor's errors."
      },
      {
        name: "Expert Review & Investigation",
        duration: "6-18 months",
        description: "Medical experts review your case to establish the standard of care and how the ship's medical staff failed to meet it."
      },
      {
        name: "Settlement Negotiations",
        duration: "12-24 months",
        description: "Complex medical malpractice cases often require extensive negotiation. Your attorney fights for compensation for medical errors."
      },
      {
        name: "Resolution",
        duration: "18-36 months",
        description: "Medical malpractice cases typically take longer due to complexity. Settlement or trial resolves your claim."
      }
    ];
  }

  if (accidentLower.includes("assault") || accidentLower.includes("security")) {
    return [
      {
        name: "Immediate Action Phase",
        duration: "0-30 days",
        description: "Report to ship security and local authorities, preserve all evidence including clothing, and seek immediate medical and psychological care."
      },
      {
        name: "Notice Period",
        duration: "1-6 months",
        description: "File written notice of claim. Document the cruise line's security failures and response to the incident."
      },
      {
        name: "Investigation & Discovery",
        duration: "6-18 months",
        description: "Investigate security protocols, staffing levels, surveillance coverage, and the cruise line's knowledge of risks."
      },
      {
        name: "Settlement Negotiations",
        duration: "12-24 months",
        description: "Negotiate compensation for physical injuries, emotional trauma, and the cruise line's security failures."
      },
      {
        name: "Resolution",
        duration: "18-30 months",
        description: "Assault cases often involve significant emotional damages. Settlement or trial provides resolution and compensation."
      }
    ];
  }

  if (accidentLower.includes("excursion") || accidentLower.includes("shore")) {
    return [
      {
        name: "Immediate Action Phase",
        duration: "0-30 days",
        description: "Get operator information, document the excursion company's role, and gather evidence of the cruise line's vetting failures."
      },
      {
        name: "Notice Period",
        duration: "1-6 months",
        description: "File written notice identifying both the cruise line and excursion operator. Document the cruise line's relationship with the operator."
      },
      {
        name: "Investigation & Discovery",
        duration: "6-12 months",
        description: "Investigate the excursion operator's safety record, the cruise line's vetting process, and liability under maritime law."
      },
      {
        name: "Settlement Negotiations",
        duration: "9-18 months",
        description: "Negotiate with both the cruise line and excursion operator's insurers. Multiple parties may share liability."
      },
      {
        name: "Resolution",
        duration: "12-24 months",
        description: "Shore excursion cases resolve as settlements are reached with responsible parties or through court proceedings."
      }
    ];
  }

  if (accidentLower.includes("food") || accidentLower.includes("poison")) {
    return [
      {
        name: "Immediate Action Phase",
        duration: "0-30 days",
        description: "Document all dining locations, preserve receipts and menus, and get comprehensive medical treatment and lab work."
      },
      {
        name: "Notice Period",
        duration: "1-6 months",
        description: "File written notice of claim. Document other affected passengers and report to CDC Vessel Sanitation Program if applicable."
      },
      {
        name: "Investigation & Discovery",
        duration: "3-12 months",
        description: "Investigate food handling procedures, kitchen inspections, and the extent of the outbreak or contamination."
      },
      {
        name: "Settlement Negotiations",
        duration: "6-18 months",
        description: "Negotiate compensation for illness, medical expenses, lost cruise enjoyment, and any long-term health effects."
      },
      {
        name: "Resolution",
        duration: "12-24 months",
        description: "Food poisoning cases typically settle once medical treatment concludes and damages are fully documented."
      }
    ];
  }

  return basePhases;
}

export const TimelineCalculatorBlock = memo(function TimelineCalculatorBlock({ timeline, cruiseLineName, accidentName }: TimelineCalculatorBlockProps) {
  const phases = useMemo(() => {
    const cacheKey = accidentName.toLowerCase();
    if (timelineCache.has(cacheKey)) {
      return timelineCache.get(cacheKey)!;
    }
    const computed = getAccidentSpecificTimeline(accidentName);
    timelineCache.set(cacheKey, computed);
    return computed;
  }, [accidentName]);

  return (
    <section className="section alt">
      <div className="container">
        <h2 className="h2">How Long Will My {cruiseLineName} {accidentName} Case Take?</h2>
        <p style={{ marginBottom: "32px" }}>Maritime injury cases involving {accidentName.toLowerCase()} on {cruiseLineName} typically resolve in phases. Here is what to expect for your claim timeline.</p>

        <div style={{ position: "relative", paddingLeft: "40px" }}>
          {/* Timeline line */}
          <div style={{ position: "absolute", left: "15px", top: "0", bottom: "0", width: "4px", background: "var(--color-primary)", borderRadius: "2px" }} />

          {phases.map((phase, i) => (
            <div key={i} style={{ position: "relative", marginBottom: "32px", paddingLeft: "24px" }}>
              {/* Timeline dot */}
              <div style={{
                position: "absolute",
                left: "-33px",
                top: "4px",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                background: i === phases.length - 1 ? "var(--color-gold-500)" : "var(--color-bg-secondary)",
                border: "4px solid var(--color-gold-500)"
              }} />

              <div className="card" style={{ margin: 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", marginBottom: "8px" }}>
                  <h3 className="h3" style={{ margin: 0 }}>{phase.name}</h3>
                  <span style={{ background: "rgba(201, 146, 58, 0.15)", color: "var(--color-gold-400)", padding: "4px 12px", borderRadius: "12px", fontWeight: 600, fontSize: "14px", fontFamily: "var(--font-condensed)" }}>
                    {phase.duration}
                  </span>
                </div>
                <p style={{ margin: 0, color: "var(--color-text-tertiary)" }}>{phase.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="card" style={{ marginTop: "32px", background: "var(--color-bg-tertiary)", border: "1px solid var(--color-border-light)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ fontSize: "32px" }}>⏱️</span>
            <div>
              <h4 style={{ margin: "0 0 4px", fontFamily: "var(--font-serif)", color: "var(--color-text-primary)" }}>Total Estimated Timeline for {cruiseLineName} Claims</h4>
              <p style={{ margin: 0, color: "var(--color-text-secondary)" }}>Most {accidentName.toLowerCase()} cases resolve within <strong style={{ color: "var(--color-gold-400)" }}>12-24 months</strong>. Complex cases or those going to trial may take 24-36 months. Settling typically takes less time than going to trial.</p>
            </div>
          </div>
        </div>

        <div className="card" style={{ marginTop: "24px", background: "rgba(176, 64, 64, 0.1)", border: "1px solid rgba(176, 64, 64, 0.3)" }}>
          <h4 style={{ margin: "0 0 8px", fontFamily: "var(--font-serif)", color: "var(--color-danger-400)" }}>⏰ Critical Deadlines for {cruiseLineName}</h4>
          <ul style={{ margin: 0, paddingLeft: "20px", color: "var(--color-text-secondary)" }}>
            {timeline.slice(0, 5).map((step, i) => (
              <li key={i} style={{ marginBottom: "4px" }}>{step}</li>
            ))}
          </ul>
        </div>

        <p className="small" style={{ marginTop: "24px" }}>
          <strong>Note:</strong> These timelines are estimates. Factors like case complexity, {cruiseLineName}&apos;s cooperation, and court schedules can affect duration. Contact an attorney immediately to ensure you meet all deadlines.
        </p>
      </div>
    </section>
  );
});
