import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cruise Ship Injury Lawyer | Free Case Review",
  description: "Injured on a cruise? Connect with maritime lawyers for slip-and-falls, food poisoning, shore excursions, and more. Free consultation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <nav className="container">
            <a href="/" className="logo">CruiseShipInjuryLawyer.com</a>
            <div className="nav-links">
              <a href="/cruise-lines">Cruise Lines</a>
              <a href="/injuries">Injuries</a>
              <a href="/destinations">Destinations</a>
            </div>
          </nav>
        </header>
        {children}
        <footer className="site-footer">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Cruise Ship Injury Lawyer. This site provides general information, not legal advice.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
