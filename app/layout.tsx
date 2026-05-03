import type { Metadata } from "next";
import { Cormorant_Garamond, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

// Optimize font loading with next/font
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
  preload: true,
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-condensed",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Cruise Ship Injury Lawyer | Free Case Review",
  description: "Injured on a cruise? Connect with maritime lawyers for slip-and-falls, food poisoning, shore excursions, and more. Free consultation.",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  other: {
    "theme-color": "#080C18",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${barlow.variable} ${barlowCondensed.variable}`}>
      <body className={barlow.className}>
        {/* Skip Link for Accessibility */}
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Navigation */}
        <nav className="nav" role="navigation" aria-label="Main navigation">
          <a href="/" className="nav__logo">Cruise<span>Ship</span>Injury<span>Cases</span></a>
          <ul className="nav__links">
            <li><a href="/" className="nav__link">Home</a></li>
            <li><a href="/about" className="nav__link">About</a></li>
            <li><a href="/cruise-lines" className="nav__link">Cruise Lines</a></li>
            <li><a href="/injuries" className="nav__link">Injuries</a></li>
            <li><a href="/destinations" className="nav__link">Destinations</a></li>
            <li><a href="/contact" className="nav__link">Contact</a></li>
          </ul>
          <a href="/contact" className="btn btn--primary">Free Case Review</a>
        </nav>

        <main id="main-content">
          {children}
        </main>

        {/* Footer */}
        <footer className="footer" role="contentinfo">
          <div className="footer__main">
            <div className="footer__brand">
              <a href="/" className="footer__logo">Cruise<span>Ship</span>Injury<span>Cases</span></a>
              <p className="footer__desc">Expert maritime injury attorneys helping cruise ship passengers get the compensation they deserve. Free consultation, no fee unless we win.</p>
              <div className="footer__social">
                <a href="#" className="footer__social-link" aria-label="Facebook">f</a>
                <a href="#" className="footer__social-link" aria-label="Twitter">t</a>
                <a href="#" className="footer__social-link" aria-label="LinkedIn">in</a>
              </div>
            </div>
            <div className="footer__col">
              <h4 className="footer__col-title">Quick Links</h4>
              <ul className="footer__links">
                <li><a href="/" className="footer__link">Home</a></li>
                <li><a href="/about" className="footer__link">About Us</a></li>
                <li><a href="/contact" className="footer__link">Contact</a></li>
                <li><a href="/faq" className="footer__link">FAQ</a></li>
              </ul>
            </div>
            <div className="footer__col">
              <h4 className="footer__col-title">Practice Areas</h4>
              <ul className="footer__links">
                <li><a href="/cruise-lines" className="footer__link">Cruise Lines</a></li>
                <li><a href="/injuries" className="footer__link">Injury Types</a></li>
                <li><a href="/destinations" className="footer__link">Destinations</a></li>
                <li><a href="/contact" className="footer__link">Case Review</a></li>
              </ul>
            </div>
            <div className="footer__col">
              <h4 className="footer__col-title">Legal</h4>
              <ul className="footer__links">
                <li><a href="/privacy-policy" className="footer__link">Privacy Policy</a></li>
                <li><a href="/terms-of-service" className="footer__link">Terms of Service</a></li>
                <li><a href="/disclaimer" className="footer__link">Disclaimer</a></li>
              </ul>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="footer__copyright">© 2026 CruiseShipInjuryCases.com · All rights reserved</div>
            <div className="footer__legal">
              <a href="/privacy-policy" className="footer__legal-link">Privacy</a>
              <a href="/terms-of-service" className="footer__legal-link">Terms</a>
              <a href="/disclaimer" className="footer__legal-link">Disclaimer</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
