import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Training",
  description: "KDT Training Programs: Small Arms Training, Tactical Combat Casualty Care, Executive Protection, and Crisis Response. Learn from Tier 1 instructors.",
  keywords: ["tactical training", "firearms training", "executive protection course", "TCCC", "security training"],
  openGraph: {
    title: "Training Programs | Knight Division Tactical",
    description: "World-class tactical training from Tier 1 instructors. Your path to becoming a KDT Agent.",
  },
};

export default function TrainingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
