import PageShell from "@/components/PageShell";
import Link from "next/link";

export const metadata = {
  title: "Hire KDT | Contact | Knight Division Tactical",
  description: "Inquire about Knight Division Tactical security services.",
};

export default function ContactServicesPage() {
  return (
    <PageShell>
      <div className="py-12 max-w-2xl mx-auto">
        <Link href="/contact" className="text-gray-500 hover:text-[#f97316] text-sm mb-4 inline-block">
          ← Back to Contact
        </Link>
        
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-[#f97316]">Hire</span> KDT
        </h1>
        <p className="text-gray-400 mb-8">
          Interested in our security services, contracts, or client partnerships? Tell us about your needs.
        </p>

        {/* Form placeholder */}
        <div className="glass-card p-6">
          <p className="text-gray-400 mb-4">Service inquiry form — coming soon.</p>
          <p className="text-gray-500 text-sm">
            Fields: Company, Name, Email, Phone, Service type, Scope/Timeline, Budget range, Message
          </p>
        </div>
      </div>
    </PageShell>
  );
}
