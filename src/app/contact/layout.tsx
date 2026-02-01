import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Knight Division Tactical. Request security services, inquire about careers, or ask questions. Based in New York with global operations.",
  openGraph: {
    title: "Contact Knight Division Tactical",
    description: "Get in touch with KDT for security services, career inquiries, or general questions.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
