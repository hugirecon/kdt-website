import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Knight Division Tactical",
  description: "Elite security services: Wildlife Mitigation, Direct Action, Counter-Trafficking, Reconnaissance, and Maritime Operations.",
  openGraph: {
    title: "Security Services | Knight Division Tactical",
    description: "Elite security and operational capabilities for government and authorized clients worldwide.",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
