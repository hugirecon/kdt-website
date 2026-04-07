import { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Services",
  description: "KDT offers wildlife mitigation, direct action, counter-trafficking, reconnaissance, and maritime security operations for government and authorized clients.",
  openGraph: {
    title: "Security Services | Knight Division Tactical",
    description: "KDT offers wildlife mitigation, direct action, counter-trafficking, reconnaissance, and maritime security operations for government and authorized clients.",
    url: "https://knightdivisiontactical.com/services",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Knight Division Tactical Security Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Services | Knight Division Tactical",
    description: "KDT offers wildlife mitigation, direct action, counter-trafficking, reconnaissance, and maritime security operations for government and authorized clients.",
    images: ["/og-image.png"],
  },
};

const services = [
  {
    "@type": "Service",
    "name": "Wildlife Mitigation",
    "description": "Specialized protection for personnel operating in remote and hazardous environments. Predator deterrence, polar operations, and pipeline security.",
    "provider": { "@type": "Organization", "name": "Knight Division Tactical" },
    "url": "https://knightdivisiontactical.com/services/wildlife-mitigation"
  },
  {
    "@type": "Service",
    "name": "Direct Action",
    "description": "Elite capabilities for high-threat environments. Tier-one personnel for protective operations in active conflict zones and hostile territories.",
    "provider": { "@type": "Organization", "name": "Knight Division Tactical" },
    "url": "https://knightdivisiontactical.com/services/direct-action"
  },
  {
    "@type": "Service",
    "name": "Counter-Trafficking Operations",
    "description": "Intelligence-driven support for organizations combating transnational criminal enterprises. Human trafficking interdiction and narcotics disruption.",
    "provider": { "@type": "Organization", "name": "Knight Division Tactical" },
    "url": "https://knightdivisiontactical.com/services/counter-trafficking"
  },
  {
    "@type": "Service",
    "name": "Reconnaissance",
    "description": "Full-spectrum intelligence support including all-source analysis, ISR support, ground reconnaissance, and technical surveillance countermeasures.",
    "provider": { "@type": "Organization", "name": "Knight Division Tactical" },
    "url": "https://knightdivisiontactical.com/services/reconnaissance"
  },
  {
    "@type": "Service",
    "name": "Maritime Operations",
    "description": "Vessel protection detachments, anti-piracy operations, port security, and Arctic maritime capabilities.",
    "provider": { "@type": "Organization", "name": "Knight Division Tactical" },
    "url": "https://knightdivisiontactical.com/services/maritime-operations"
  }
];

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Knight Division Tactical Services",
        "itemListElement": services.map((service, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "item": service
        }))
      }} />
      {children}
    </>
  );
}
