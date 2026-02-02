import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Counter-Trafficking Operations | Knight Division Tactical",
  description: "Intelligence-driven support for organizations combating transnational criminal enterprises. Human trafficking interdiction, narcotics disruption, and cross-border coordination.",
  openGraph: {
    title: "Counter-Trafficking Operations | Knight Division Tactical",
    description: "Disrupting the networks that profit from exploitation.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
