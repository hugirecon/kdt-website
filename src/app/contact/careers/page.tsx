import PageShell from "@/components/PageShell";
import Link from "next/link";

export const metadata = {
  title: "Career Questions | Contact | Knight Division Tactical",
  description: "Questions about careers at Knight Division Tactical.",
};

export default function ContactCareersPage() {
  return (
    <PageShell>
      <div className="py-12 max-w-2xl mx-auto">
        <Link href="/contact" className="text-gray-500 hover:text-[#f97316] text-sm mb-4 inline-block">
          ← Back to Contact
        </Link>
        
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-[#f97316]">Career</span> Questions
        </h1>
        <p className="text-gray-400 mb-8">
          Have questions about positions, requirements, or the application process? We're here to help.
        </p>

        {/* Form placeholder */}
        <div className="glass-card p-6">
          <p className="text-gray-400 mb-4">Contact form — coming soon.</p>
          <p className="text-gray-500 text-sm">
            Fields: Name, Email, Question category, Message
          </p>
        </div>

        <p className="text-gray-500 text-sm mt-6">
          Ready to apply? <Link href="/careers" className="text-[#f97316] hover:underline">View open positions →</Link>
        </p>
      </div>
    </PageShell>
  );
}
