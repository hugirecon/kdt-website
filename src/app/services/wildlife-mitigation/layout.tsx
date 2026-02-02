import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wildlife Mitigation | Knight Division Tactical",
  description: "Specialized security for personnel operating in remote and hazardous environments. Predator deterrence, polar operations, and pipeline security.",
  openGraph: {
    title: "Wildlife Mitigation | Knight Division Tactical",
    description: "Where infrastructure meets wilderness. Specialized protection for extreme environments.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
