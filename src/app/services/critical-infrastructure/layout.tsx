import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Critical Infrastructure Protection | Knight Division Tactical",
  description: "Elite protective forces for the nation's most sensitive installations. Nuclear facilities, national laboratories, and classified research sites.",
  openGraph: {
    title: "Critical Infrastructure Protection | Knight Division Tactical",
    description: "Securing the facilities that cannot fail.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
