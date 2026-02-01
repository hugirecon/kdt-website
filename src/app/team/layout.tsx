import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the leadership team behind Knight Division Tactical. CEO Michael Schulz, COO Matthew McCalla, and the dedicated professionals driving KDT's excellence.",
  openGraph: {
    title: "Leadership Team | Knight Division Tactical",
    description: "Meet the team behind KDT's excellence in private security.",
  },
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return children;
}
