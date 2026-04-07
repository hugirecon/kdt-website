import { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Home",
  description: "Knight Division Tactical provides Tier 1 private military, executive protection, crisis response, and defense contracting services worldwide.",
  keywords: ["private security", "PMC", "executive protection", "security company", "Knight Division Tactical", "private military contractor", "defense contracting"],
  openGraph: {
    title: "Knight Division Tactical | The Premier Private Security Firm",
    description: "Knight Division Tactical provides Tier 1 private military, executive protection, crisis response, and defense contracting services worldwide.",
    url: "https://knightdivisiontactical.com/home",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Knight Division Tactical — The Premier Private Security Firm" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Knight Division Tactical | The Premier Private Security Firm",
    description: "Knight Division Tactical provides Tier 1 private military, executive protection, crisis response, and defense contracting services worldwide.",
    images: ["/og-image.png"],
  },
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Knight Division Tactical",
        "url": "https://knightdivisiontactical.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://knightdivisiontactical.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }} />
      {children}
    </>
  );
}
