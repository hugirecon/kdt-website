import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reconnaissance | Knight Division Tactical",
  description: "Full-spectrum intelligence support from collection through dissemination. All-source analysis, ISR support, GEOINT, ground reconnaissance, and TSCM services.",
  openGraph: {
    title: "Reconnaissance | Knight Division Tactical",
    description: "Information dominance through superior collection and analysis.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
