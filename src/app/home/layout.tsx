import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Knight Division Tactical - The Premier Private Security Firm. Uncompromising excellence, strategic innovation, and global reach for unconquerable protection.",
  keywords: ["private security", "PMC", "executive protection", "security company", "Knight Division Tactical"],
  openGraph: {
    title: "Knight Division Tactical | The Premier Private Security Firm",
    description: "The highest echelon of private military services, enabled by one-of-one technology.",
  },
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
