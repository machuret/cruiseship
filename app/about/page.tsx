import type { Metadata } from "next";
import { JurisdictionAlertBlock } from "@/components/blocks/JurisdictionAlertBlock";
import { LeadFormBlock } from "@/components/blocks/LeadFormBlock";

export const metadata: Metadata = {
  title: "About Us | Cruise Ship Injury Lawyer",
  description: "Learn about our experienced maritime attorneys who specialize in cruise ship injury claims. We've helped thousands of injured passengers recover compensation.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="hero" style={{ background: "linear-gradient(135deg, #0c4a6e 0%, #0369a1 100%)", color: "white", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <h1 className="h1">About Cruise Ship Injury Lawyer</h1>
          <p style={{ fontSize: "18px", opacity: 0.9 }}>
            Dedicated maritime attorneys fighting for injured cruise passengers since 2010
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "800px" }}>
          <h2 className="h2">Our Mission</h2>
          <p style={{ marginBottom: "24px", lineHeight: "1.8" }}>
            Cruise Ship Injury Lawyer was founded with a single mission: to protect the rights of cruise passengers who have been injured due to cruise line negligence. We understand that a cruise vacation should be a time of relaxation and enjoyment, not injury and distress. When cruise lines fail in their duty of care, we're here to help victims navigate the complex world of maritime law and secure the compensation they deserve.
          </p>

          <h2 className="h2">Why Maritime Law is Different</h2>
          <p style={{ marginBottom: "24px", lineHeight: "1.8" }}>
            Cruise ship injury cases are governed by maritime law, which operates differently from standard personal injury law. The applicable laws can vary depending on whether the injury occurred in international waters, territorial waters, or while in port. Additionally, cruise line ticket contracts typically include forum selection clauses that require lawsuits to be filed in specific courts, often in Miami, Florida, regardless of where the passenger lives or where the cruise departed.
          </p>
          <p style={{ marginBottom: "24px", lineHeight: "1.8" }}>
            Our attorneys have extensive experience with these unique challenges. We understand the Athens Convention, the Jones Act, the Death on the High Seas Act (DOHSA), and how these various laws interact to protect (or sometimes limit) passenger rights. This specialized knowledge is crucial for building successful cruise injury claims.
          </p>

          <h2 className="h2">Our Experience</h2>
          <p style={{ marginBottom: "24px", lineHeight: "1.8" }}>
            Over the past 14 years, our network of maritime attorneys has represented passengers injured on every major cruise line, including Carnival, Royal Caribbean, Norwegian, MSC, Princess, Holland America, Celebrity, Disney, and many others. We've handled cases involving slip and falls, food poisoning, shore excursion accidents, medical malpractice, assaults, drowning incidents, and virtually every type of cruise ship injury imaginable.
          </p>
          <p style={{ marginBottom: "24px", lineHeight: "1.8" }}>
            Our track record speaks for itself: we've helped thousands of injured passengers recover compensation ranging from $25,000 for minor injuries to over $5 million for catastrophic cases involving permanent disability or wrongful death. While past results don't guarantee future outcomes, our experience gives us the insight needed to maximize your recovery.
          </p>

          <h2 className="h2">How We Help</h2>
          <p style={{ marginBottom: "24px", lineHeight: "1.8" }}>
            From the moment you contact us, we begin working on your behalf. We help you understand your legal rights, gather and preserve crucial evidence, navigate the strict deadlines imposed by cruise line ticket contracts, and negotiate aggressively with the cruise line's insurance carriers. If a fair settlement cannot be reached, we're prepared to take your case to trial in the appropriate federal court.
          </p>
          <p style={{ marginBottom: "24px", lineHeight: "1.8" }}>
            Most importantly, we work on a contingency fee basis. This means you pay nothing upfront, and we only collect a fee if we win your case. This arrangement allows injured passengers to access quality legal representation regardless of their financial situation.
          </p>

          <h2 className="h2">Our Commitment</h2>
          <p style={{ marginBottom: "24px", lineHeight: "1.8" }}>
            We are committed to providing compassionate, personalized service to every client. We understand that beyond the legal complexities, you're dealing with physical pain, emotional trauma, and financial stress. Our team is here to shoulder the legal burden so you can focus on recovery.
          </p>
          <p style={{ lineHeight: "1.8" }}>
            Whether your injury was caused by a wet deck, contaminated food, inadequate security, or any other form of cruise line negligence, we're ready to help. Contact us today for a free, no-obligation consultation to discuss your case and learn about your legal options.
          </p>
        </div>
      </section>

      <JurisdictionAlertBlock deadlineMonths={6} />

      <section id="case-review" className="section alt" style={{ background: "#0c4a6e", color: "white" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="h2" style={{ color: "white" }}>Contact Us Today</h2>
          <p style={{ maxWidth: "600px", margin: "0 auto 32px", opacity: 0.9 }}>
            Ready to discuss your case? Complete the form below and a maritime lawyer will contact you within 24 hours.
          </p>
          <LeadFormBlock />
        </div>
      </section>
    </main>
  );
}
