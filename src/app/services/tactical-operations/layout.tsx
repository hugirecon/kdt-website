import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tactical Operations | Knight Division Tactical",
  description: "Elite capabilities for high-threat environments. Tier-one personnel for the world's most demanding operational environments.",
  openGraph: {
    title: "Tactical Operations | Knight Division Tactical",
    description: "When the mission demands more.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
