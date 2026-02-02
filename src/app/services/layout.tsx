import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Knight Division Tactical",
  description: "Elite security services: Executive Protection, Tactical Operations, Critical Infrastructure, Intelligence Support, Counter-Trafficking, Remote Operations, and Maritime Security.",
  openGraph: {
    title: "Security Services | Knight Division Tactical",
    description: "From executive protection to tactical operations in contested environments. Elite security capabilities tailored to your mission requirements.",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
