import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights and analysis from Knight Division Tactical. Industry updates, security trends, and company news.",
  openGraph: {
    title: "Blog | Knight Division Tactical",
    description: "Intel updates, insights, and analysis from KDT.",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
