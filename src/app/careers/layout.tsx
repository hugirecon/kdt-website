import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Knight Division Tactical. Career opportunities for Private Military Contractors, Technical specialists, Corporate roles, and Operations support.",
  keywords: ["PMC jobs", "private military contractor", "security careers", "KDT careers", "military jobs"],
  openGraph: {
    title: "Careers at Knight Division Tactical",
    description: "Join the elite. Career opportunities in private military contracting, technology, and operations.",
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
