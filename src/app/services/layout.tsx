import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "KDT security services: Executive Protection, Event Security, Global Operations, Risk Assessment, Training Programs, and AI-Powered Intelligence.",
  openGraph: {
    title: "Security Services | Knight Division Tactical",
    description: "Elite security services including executive protection, event security, global operations, and AI-powered intelligence.",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
