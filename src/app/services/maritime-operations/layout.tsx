import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maritime Operations | Knight Division Tactical",
  description: "Maritime security for vessels, ports, and maritime infrastructure. Anti-piracy operations, vessel protection detachments, and Arctic maritime security.",
  openGraph: {
    title: "Maritime Operations | Knight Division Tactical",
    description: "Security beyond the shoreline. Protecting vessels and maritime infrastructure worldwide.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
