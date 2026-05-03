import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Cruise Ship Injury Lawyer",
  description: "Read our terms of service to understand the rules and regulations for using our legal services and website.",
};

export default function TermsOfServicePage() {
  return (
    <main>
      <section className="hero" style={{ background: "linear-gradient(135deg, #0c4a6e 0%, #0369a1 100%)", color: "white", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <h1 className="h1">Terms of Service</h1>
          <p style={{ fontSize: "18px", opacity: 0.9 }}>
            Please read these terms carefully before using our services
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "800px" }}>
          <p style={{ marginBottom: "24px" }}>
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <h2 className="h2">Agreement to Terms</h2>
          <p style={{ marginBottom: "24px", lineHeight: "1.8" }}>
            By accessing or using our website and services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services. These terms constitute a legally binding agreement between you and Cruise Ship Injury Lawyer regarding your use of our website and legal services.
          </p>

          <h2 className="h2">Intellectual Property Rights</h2>
          <p style={{ marginBottom: "24px", lineHeight: "1.8" }}>
            Unless otherwise indicated, the website is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the website (collectively, the &quot;Content&quot;) and the trademarks, service marks, and logos contained therein (the &quot;Marks&quot;) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
          </p>

          <h2 className="h2">User Representations</h2>
          <p style={{ marginBottom: "16px", lineHeight: "1.8" }}>
            By using the website, you represent and warrant that:
          </p>
          <ul style={{ marginBottom: "24px", lineHeight: "1.8", paddingLeft: "24px" }}>
            <li>All registration information you submit will be true, accurate, current, and complete.</li>
            <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
            <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
            <li>You are not a minor in the jurisdiction in which you reside.</li>
            <li>You will not access the website through automated or non-human means.</li>
            <li>You will not use the website for any illegal or unauthorized purpose.</li>
            <li>Your use of the website will not violate any applicable law or regulation.</li>
          </ul>

          <h2 className="h2">Prohibited Activities</h2>
          <p style={{ marginBottom: "16px", lineHeight: "1.8" }}>
            You may not access or use the website for any purpose other than that for which we make the website available. The website may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us. Prohibited activities include, but are not limited to:
          </p>
          <ul style={{ marginBottom: "24px", lineHeight: "1.8", paddingLeft: "24px" }}>
            <li>Systematically retrieving data or other content from the website to create a collection, compilation, database, or directory without written permission from us.</li>
            <li>Making any unauthorized use of the website, including collecting usernames and/or email addresses of users by electronic or other means.</li>
            <li>Engaging in unauthorized framing of or linking to the website.</li>
            <li>Tricking, defrauding, or misleading us and other users, especially in any attempt to learn sensitive account information.</li>
            <li>Attempting to impersonate another user or person or using the username of another user.</li>
            <li>Interfering with, disrupting, or creating an undue burden on the website or the networks or services connected to the website.</li>
            <li>Using any information obtained from the website in order to harass, abuse, or harm another person.</li>
          </ul>

          <h2 className="h2">Disclaimer</h2>
          <p style={{ marginBottom: "24px", lineHeight: "1.8" }}>
            THE WEBSITE AND SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE WEBSITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE WEBSITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>

          <h2 className="h2">Limitation of Liability</h2>
          <p style={{ marginBottom: "24px", lineHeight: "1.8" }}>
            IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE WEBSITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </p>

          <h2 className="h2">Governing Law</h2>
          <p style={{ marginBottom: "24px", lineHeight: "1.8" }}>
            These Terms of Service and your use of the website are governed by and construed in accordance with the laws of the State of Florida applicable to agreements made and to be entirely performed within the State of Florida, without regard to its conflict of law principles.
          </p>

          <h2 className="h2">Changes to These Terms</h2>
          <p style={{ marginBottom: "24px", lineHeight: "1.8" }}>
            We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Service at any time and for any reason. We will alert you about any changes by updating the &quot;Last Updated&quot; date of these Terms of Service, and you waive any right to receive specific notice of each such change.
          </p>

          <h2 className="h2">Contact Us</h2>
          <p style={{ lineHeight: "1.8" }}>
            In order to resolve a complaint regarding the website or to receive further information regarding use of the website, please contact us at:
          </p>
          <p style={{ marginTop: "16px" }}>
            <strong>Cruise Ship Injury Lawyer</strong><br />
            Email: legal@cruiseshipinjurycases.com<br />
            Phone: (888) 555-CRUISE
          </p>
        </div>
      </section>
    </main>
  );
}
