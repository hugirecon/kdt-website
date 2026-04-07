import { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Careers",
  description: "Knight Division Tactical is hiring elite military veterans for private military contracting, intelligence, engineering, and account executive positions.",
  keywords: ["PMC jobs", "private military contractor", "security careers", "KDT careers", "military jobs", "defense contracting jobs"],
  openGraph: {
    title: "Careers at Knight Division Tactical",
    description: "Knight Division Tactical is hiring elite military veterans for private military contracting, intelligence, engineering, and account executive positions.",
    url: "https://knightdivisiontactical.com/careers",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Careers at Knight Division Tactical" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Knight Division Tactical",
    description: "Knight Division Tactical is hiring elite military veterans for private military contracting, intelligence, engineering, and account executive positions.",
    images: ["/og-image.png"],
  },
};

const jobPostings = [
  {
    "@type": "JobPosting",
    "title": "Knight — Private Military Contractor",
    "description": "Knights are the primary boots-on-the-ground operators conducting direct combat operations, armed security, crisis response, and stability missions.",
    "hiringOrganization": { "@type": "Organization", "name": "Knight Division Tactical", "sameAs": "https://knightdivisiontactical.com" },
    "jobLocation": { "@type": "Place", "address": { "@type": "PostalAddress", "addressCountry": "US" } },
    "employmentType": "CONTRACTOR",
    "url": "https://job-boards.greenhouse.io/knightdivisiontactical/jobs/5010680008"
  },
  {
    "@type": "JobPosting",
    "title": "Medical Element — Combat Medic",
    "description": "Embedded medical support across KDT's private military and crisis response operations in combat zones and austere environments.",
    "hiringOrganization": { "@type": "Organization", "name": "Knight Division Tactical", "sameAs": "https://knightdivisiontactical.com" },
    "jobLocation": { "@type": "Place", "address": { "@type": "PostalAddress", "addressCountry": "US" } },
    "employmentType": "CONTRACTOR",
    "url": "https://job-boards.greenhouse.io/knightdivisiontactical/jobs/5041254008"
  },
  {
    "@type": "JobPosting",
    "title": "Intelligence Unit Analyst",
    "description": "Gather, analyze, and disseminate actionable intelligence using SIGINT, HUMINT, and OSINT to support tactical operations.",
    "hiringOrganization": { "@type": "Organization", "name": "Knight Division Tactical", "sameAs": "https://knightdivisiontactical.com" },
    "jobLocation": { "@type": "Place", "address": { "@type": "PostalAddress", "addressCountry": "US" } },
    "employmentType": "CONTRACTOR",
    "url": "https://job-boards.greenhouse.io/knightdivisiontactical/jobs/5042188008"
  },
  {
    "@type": "JobPosting",
    "title": "Account Executive — Business Development",
    "description": "Identify, secure, and expand high-value contracts for KDT's private military, crisis response, and technology-driven operations.",
    "hiringOrganization": { "@type": "Organization", "name": "Knight Division Tactical", "sameAs": "https://knightdivisiontactical.com" },
    "jobLocation": { "@type": "Place", "address": { "@type": "PostalAddress", "addressCountry": "US" } },
    "jobLocationType": "TELECOMMUTE",
    "employmentType": "CONTRACTOR",
    "url": "https://job-boards.greenhouse.io/knightdivisiontactical/jobs/5025305008"
  },
  {
    "@type": "JobPosting",
    "title": "Engineering Unit — Systems Engineer",
    "description": "Design, analyze, and optimize systems, structures, and technologies supporting KDT's global missions.",
    "hiringOrganization": { "@type": "Organization", "name": "Knight Division Tactical", "sameAs": "https://knightdivisiontactical.com" },
    "jobLocation": { "@type": "Place", "address": { "@type": "PostalAddress", "addressCountry": "US" } },
    "employmentType": "CONTRACTOR",
    "url": "https://job-boards.greenhouse.io/knightdivisiontactical/jobs/5009912008"
  }
];

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {jobPostings.map((job, i) => (
        <JsonLd key={i} data={{ "@context": "https://schema.org", ...job, "datePosted": "2025-01-01" }} />
      ))}
      {children}
    </>
  );
}
