import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire KDT",
  description: "Hire Knight Division Tactical for executive protection, event security, crisis response, and global security operations. Request a consultation.",
  keywords: ["hire security", "executive protection services", "private security company", "security consultation"],
  openGraph: {
    title: "Hire Knight Division Tactical",
    description: "Request elite security services. Executive protection, event security, and global operations.",
  },
};

export default function HireLayout({ children }: { children: React.ReactNode }) {
  return children;
}
