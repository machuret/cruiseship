import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Disclaimer | Cruise Ship Injury Lawyer",
  description: "Important legal disclaimers regarding the information provided on our website and the attorney-client relationship.",
};

export default function DisclaimerPage() {
  return (
    <main>
      <section className="hero" style={{ background: "linear-gradient(135deg, #0c4a6e 0%, #0369a1 100%)", color: "white", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <h1 className="h1">Legal Disclaimer</h1>
          <p style={{ fontSize: "18px", opacity: 0.9 }}>
            Important information about our website and services
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "800px" }}>
          <h2 className="h2">Not Legal Advice</h2>
          <p style={{ marginBottom: "24px", lineHeight: "1.8" }}>
            The information contained on this website is for general information purposes only and does not constitute legal advice. The content on this website is not intended to create, and receipt or viewing of this information does not constitute, an attorney-client relationship. You should not act upon any information on this website without seeking advice from a qualified maritime attorney licensed in your jurisdiction.
          </p>

          <h2 className="h2">No Attorney-Client Relationship</h2>
          <p style={{ marginBottom: "24px", lineHeight: "1.8" }}>
            The use of this website or any communication with us through this website does not create an attorney-client relationship. An attorney-client relationship is only formed when you sign a written retainer agreement with our firm and we accept your case. Merely submitting information through our website contact forms or requesting a free consultation does not establish an attorney-client relationship.
          </p>

          <h2 className="h2">No Guarantee of Results</h2>
          <p style={{ marginBottom: "24px", lineHeight: "1.8" }}>
            Any testimonials, case results, or settlement amounts mentioned on this website are specific to the facts and legal circumstances of particular cases and should not be used to form an expectation that the same results will be obtained for other cases. Past results do not guarantee future outcomes. Every case is different, and the outcome of each case depends upon many factors, including the specific facts of the case, applicable law, the judge, the jury, and the parties involved.
          </p>

          <h2 className="h2">Statute of Limitations</h2>
          <p style={{ marginBottom: "24px", lineHeight: "1.8" }}>
            <strong>TIME IS OF THE ESSENCE.</strong> Cruise ship injury cases are subject to strict time limitations. Most cruise line ticket contracts require written notice of your injury within six (6) months and the filing of a lawsuit within one (1) year of the date of injury. These deadlines are significantly shorter than typical personal injury statutes of limitations. If you fail to comply with these deadlines, you may be permanently barred from recovering compensation for your injuries. We strongly encourage you to contact an attorney immediately after any cruise ship injury.
          </p>

          <h2 className="h2">Third-Party Content</h2>
          <p style={{ marginBottom: "24px", lineHeight: "1.8" }}>
            This website may contain links to third-party websites or resources. These links are provided for your convenience only and do not constitute an endorsement of the content, products, or services available on such third-party sites. We have no control over the contents of those sites or resources and accept no responsibility for them or for any loss or damage that may arise from your use of them.
          </p>

          <h2 className="h2">Website Accuracy</h2>
          <p style={{ marginBottom: "24px", lineHeight: "1.8" }}>
            While we strive to keep the information on this website accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is strictly at your own risk.
          </p>

          <h2 className="h2">Attorney Advertising</h2>
          <p style={{ marginBottom: "24px", lineHeight: "1.8" }}>
            This website contains attorney advertising. The hiring of a lawyer is an important decision that should not be based solely upon advertisements. Before you decide, ask us to send you free written information about our qualifications and experience. This website is designed for general information only. The information presented at this site should not be construed to be formal legal advice nor the formation of a lawyer/client relationship.
          </p>

          <h2 className="h2">Jurisdictional Limitations</h2>
          <p style={{ marginBottom: "24px", lineHeight: "1.8" }}>
            The determination of the need for legal services and the choice of a lawyer are extremely important decisions and should not be based solely upon advertisements or self-proclaimed expertise. Our attorneys are licensed to practice law in specific jurisdictions and may not be licensed in your state. The ability to represent clients in certain jurisdictions may require admission pro hac vice or other arrangements. This website is not intended to solicit clients for matters outside the jurisdictions where our attorneys are licensed to practice.
          </p>

          <h2 className="h2">Contingency Fees</h2>
          <p style={{ marginBottom: "24px", lineHeight: "1.8" }}>
            Statements regarding contingency fee arrangements are general in nature. The specific terms of any fee agreement will be detailed in a written retainer agreement signed by both the client and the attorney. Clients may be responsible for costs and expenses in addition to attorney fees, regardless of the outcome of the case. The specific terms of representation will be discussed and agreed upon before any attorney-client relationship is established.
          </p>

          <h2 className="h2">Contact Us</h2>
          <p style={{ lineHeight: "1.8" }}>
            If you have any questions about this disclaimer or our legal services, please contact us at:
          </p>
          <p style={{ marginTop: "16px" }}>
            <strong>Cruise Ship Injury Lawyer</strong><br />
            Email: info@cruiseshipinjurycases.com<br />
            Phone: (888) 555-CRUISE
          </p>
        </div>
      </section>
    </main>
  );
}
