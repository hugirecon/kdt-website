import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Remote & Hazardous Environment Operations | Knight Division Tactical",
  description: "Specialized security for personnel operating in remote and hazardous environments. Wildlife threat mitigation, polar operations, and infrastructure protection.",
  openGraph: {
    title: "Remote & Hazardous Environment Operations | Knight Division Tactical",
    description: "Where infrastructure meets wilderness. Specialized protection for extreme environments.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
