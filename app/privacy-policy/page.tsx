import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Cruise Ship Injury Lawyer",
  description: "Our privacy policy explains how we collect, use, and protect your personal information when you use our legal services.",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="hero" style={{ background: "linear-gradient(135deg, #0c4a6e 0%, #0369a1 100%)", color: "white", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <h1 className="h1">Privacy Policy</h1>
          <p style={{ fontSize: "18px", opacity: 0.9 }}>
            Your privacy is important to us
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "800px" }}>
          <p style={{ marginBottom: "24px" }}>
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <h2 className="h2">Introduction</h2>
          <p style={{ marginBottom: "24px", lineHeight: "1.8" }}>
            Cruise Ship Injury Lawyer (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our legal services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>

          <h2 className="h2">Information We Collect</h2>
          <p style={{ marginBottom: "16px", lineHeight: "1.8" }}>
            We may collect information about you in a variety of ways. The information we may collect via the website includes:
          </p>
          <h3 style={{ marginBottom: "8px" }}>Personal Data</h3>
          <p style={{ marginBottom: "16px", lineHeight: "1.8" }}>
            Personally identifiable information, such as your name, email address, telephone number, and information about your cruise ship accident that you voluntarily give to us when you register with the website or when you choose to participate in various activities related to the website, such as online chat and message boards. You are under no obligation to provide us with personal information of any kind, but your refusal to do so may prevent you from using certain features of the website.
          </p>
          <h3 style={{ marginBottom: "8px" }}>Derivative Data</h3>
          <p style={{ marginBottom: "16px", lineHeight: "1.8" }}>
            Information our servers automatically collect when you access the website, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the website.
          </p>
          <h3 style={{ marginBottom: "8px" }}>Financial Data</h3>
          <p style={{ marginBottom: "24px", lineHeight: "1.8" }}>
            Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you hire us for legal services. We store only very limited, if any, financial information that we collect.
          </p>

          <h2 className="h2">Use of Your Information</h2>
          <p style={{ marginBottom: "16px", lineHeight: "1.8" }}>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the website to:
          </p>
          <ul style={{ marginBottom: "24px", lineHeight: "1.8", paddingLeft: "24px" }}>
            <li>Create and manage your account.</li>
            <li>Email you regarding your case or inquiry.</li>
            <li>Enable user-to-user communications.</li>
            <li>Generate a personal profile about you to make future visits to the website more personalized.</li>
            <li>Increase the efficiency and operation of the website.</li>
            <li>Monitor and analyze usage and trends to improve your experience with the website.</li>
            <li>Notify you of updates to the website.</li>
            <li>Offer new products, services, and/or recommendations to you.</li>
            <li>Perform other business activities as needed.</li>
            <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
            <li>Process payments and refunds.</li>
            <li>Request feedback and contact you about your use of the website.</li>
            <li>Resolve disputes and troubleshoot problems.</li>
            <li>Respond to product and customer service requests.</li>
          </ul>

          <h2 className="h2">Disclosure of Your Information</h2>
          <p style={{ marginBottom: "16px", lineHeight: "1.8" }}>
            We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
          </p>
          <h3 style={{ marginBottom: "8px" }}>By Law or to Protect Rights</h3>
          <p style={{ marginBottom: "16px", lineHeight: "1.8" }}>
            If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
          </p>
          <h3 style={{ marginBottom: "8px" }}>Third-Party Service Providers</h3>
          <p style={{ marginBottom: "16px", lineHeight: "1.8" }}>
            We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
          </p>
          <h3 style={{ marginBottom: "8px" }}>Marketing Communications</h3>
          <p style={{ marginBottom: "24px", lineHeight: "1.8" }}>
            With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes, as permitted by law.
          </p>

          <h2 className="h2">Security of Your Information</h2>
          <p style={{ marginBottom: "24px", lineHeight: "1.8" }}>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>

          <h2 className="h2">Options Regarding Your Information</h2>
          <p style={{ marginBottom: "16px", lineHeight: "1.8" }}>
            You may at any time review or change the information in your account or terminate your account by:
          </p>
          <ul style={{ marginBottom: "24px", lineHeight: "1.8", paddingLeft: "24px" }}>
            <li>Contacting us using the contact information provided below</li>
            <li>Logging into your account settings and updating your account</li>
          </ul>
          <p style={{ marginBottom: "24px", lineHeight: "1.8" }}>
            Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, some information may be retained in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with legal requirements.
          </p>

          <h2 className="h2">Contact Us</h2>
          <p style={{ lineHeight: "1.8" }}>
            If you have questions or comments about this Privacy Policy, please contact us at:
          </p>
          <p style={{ marginTop: "16px" }}>
            <strong>Cruise Ship Injury Lawyer</strong><br />
            Email: privacy@cruiseshipinjurycases.com<br />
            Phone: (888) 555-CRUISE
          </p>
        </div>
      </section>
    </main>
  );
}
