import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cruise Ship Accident Lawyer Leads",
  description: "SEO-first modular website for cruise ship accident legal leads."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
