import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executive Protection | Knight Division Tactical",
  description: "Discreet, professional protection for high-profile individuals, diplomats, and corporate executives. Personal security details, advance operations, and secure transportation.",
  openGraph: {
    title: "Executive Protection | Knight Division Tactical",
    description: "Invisible until needed. Elite protection for those who cannot afford anything less than the best.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
