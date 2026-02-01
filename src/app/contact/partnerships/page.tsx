import PageShell from "@/components/PageShell";
import Link from "next/link";

export const metadata = {
  title: "Strategic Partnerships | Contact | Knight Division Tactical",
  description: "Partner with Knight Division Tactical.",
};

export default function ContactPartnershipsPage() {
  return (
    <PageShell>
      <div className="py-12 max-w-2xl mx-auto">
        <Link href="/contact" className="text-gray-500 hover:text-[#f97316] text-sm mb-4 inline-block">
          ← Back to Contact
        </Link>
        
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-[#f97316]">Strategic</span> Partnerships
        </h1>
        <p className="text-gray-400 mb-8">
          Business development, vendor relationships, or collaboration opportunities.
        </p>

        {/* Form placeholder */}
        <div className="glass-card p-6">
          <p className="text-gray-400 mb-4">Partnership inquiry form — coming soon.</p>
          <p className="text-gray-500 text-sm">
            Fields: Company, Name, Title, Email, Partnership type, Proposal summary, Message
          </p>
        </div>
      </div>
    </PageShell>
  );
}
