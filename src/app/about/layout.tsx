import { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About",
  description: "Founded by Michael Schulz and Matthew McCalla, Knight Division Tactical is a private military and security company headquartered in Sheridan, Wyoming.",
  openGraph: {
    title: "About Knight Division Tactical",
    description: "Founded by Michael Schulz and Matthew McCalla, Knight Division Tactical is a private military and security company headquartered in Sheridan, Wyoming.",
    url: "https://knightdivisiontactical.com/about",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "About Knight Division Tactical" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Knight Division Tactical",
    description: "Founded by Michael Schulz and Matthew McCalla, Knight Division Tactical is a private military and security company headquartered in Sheridan, Wyoming.",
    images: ["/og-image.png"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Knight Division Tactical",
        "description": "Founded by Michael Schulz and Matthew McCalla, Knight Division Tactical is a private military and security company headquartered in Sheridan, Wyoming.",
        "url": "https://knightdivisiontactical.com/about",
        "mainEntity": {
          "@type": "Organization",
          "name": "Knight Division Tactical",
          "url": "https://knightdivisiontactical.com"
        }
      }} />
      {children}
    </>
  );
}
