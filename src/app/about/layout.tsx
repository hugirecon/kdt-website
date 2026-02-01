import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Knight Division Tactical - the highest echelon of private military services. Our commitment to excellence, global operations, and elite personnel.",
  openGraph: {
    title: "About Knight Division Tactical",
    description: "The highest echelon of private military services. Learn about our commitment to excellence and global operations.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
