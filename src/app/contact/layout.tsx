import { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Knight Division Tactical for security services, training inquiries, or career opportunities at contact@knightdivisiontactical.com.",
  openGraph: {
    title: "Contact Knight Division Tactical",
    description: "Contact Knight Division Tactical for security services, training inquiries, or career opportunities at contact@knightdivisiontactical.com.",
    url: "https://knightdivisiontactical.com/contact",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Contact Knight Division Tactical" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Knight Division Tactical",
    description: "Contact Knight Division Tactical for security services, training inquiries, or career opportunities at contact@knightdivisiontactical.com.",
    images: ["/og-image.png"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Knight Division Tactical",
        "description": "Contact Knight Division Tactical for security services, training inquiries, or career opportunities.",
        "url": "https://knightdivisiontactical.com/contact",
        "mainEntity": {
          "@type": "Organization",
          "name": "Knight Division Tactical",
          "email": "contact@knightdivisiontactical.com",
          "url": "https://knightdivisiontactical.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Sheridan",
            "addressRegion": "WY",
            "addressCountry": "US"
          }
        }
      }} />
      {children}
    </>
  );
}
