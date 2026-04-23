import { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the leadership team behind Knight Division Tactical. CEO Michael Schulz, COO Matthew McCalla, and the dedicated professionals driving KDT's excellence.",
  openGraph: {
    title: "Leadership Team | Knight Division Tactical",
    description: "Meet the leadership team behind Knight Division Tactical. CEO Michael Schulz, COO Matthew McCalla, and the dedicated professionals driving KDT's excellence.",
    url: "https://knightdivisiontactical.com/team",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Knight Division Tactical Team" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leadership Team | Knight Division Tactical",
    description: "Meet the leadership team behind Knight Division Tactical.",
    images: ["/og-image.png"],
  },
};

const teamMembers = [
  {
    "@type": "Person",
    "name": "Michael Schulz",
    "jobTitle": "Chief Executive Officer, Head of SPEAR Branch",
    "worksFor": { "@type": "Organization", "name": "Knight Division Tactical" },
    "url": "https://knightdivisiontactical.com/team/michael-schulz",
    "image": "https://knightdivisiontactical.com/images/team/michael-schulz.jpg"
  },
  {
    "@type": "Person",
    "name": "Matthew McCalla",
    "jobTitle": "Chief Operating Officer, Head of PSC Branch",
    "worksFor": { "@type": "Organization", "name": "Knight Division Tactical" },
    "url": "https://knightdivisiontactical.com/team/matthew-mccalla",
    "image": "https://knightdivisiontactical.com/images/team/matthew-mccalla.jpg"
  },
  {
    "@type": "Person",
    "name": "Nicholas Norman",
    "jobTitle": "Account Executive",
    "worksFor": { "@type": "Organization", "name": "Knight Division Tactical" },
    "url": "https://knightdivisiontactical.com/team/nicholas-norman",
    "image": "https://knightdivisiontactical.com/images/team/nic-norman.png"
  },
  {
    "@type": "Person",
    "name": "Santiago Telleria",
    "jobTitle": "Mission Coordinator",
    "worksFor": { "@type": "Organization", "name": "Knight Division Tactical" },
    "url": "https://knightdivisiontactical.com/team/santiago-telleria",
    "image": "https://knightdivisiontactical.com/images/team/santiago-telleria.jpg"
  }
];

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {teamMembers.map((member, i) => (
        <JsonLd key={i} data={{ "@context": "https://schema.org", ...member }} />
      ))}
      {children}
    </>
  );
}
