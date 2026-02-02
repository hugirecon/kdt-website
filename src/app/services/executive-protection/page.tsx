"use client";

import Link from "next/link";
import Nav from "@/components/Nav";

// ============ HERO ============
function Hero() {
  return (
    <section className="relative bg-[#0a0a0a] pb-24 px-6" style={{ paddingTop: '8rem' }}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.08),transparent_70%)]" />
      </div>
      
      <div className="relative z-10 max-w-[1200px] mx-auto text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-[13px] font-medium text-[#f97316] bg-[#f97316]/10 rounded-full border border-[#f97316]/20">
          Protective Services
        </div>
        <h1 className="text-[clamp(40px,5vw,56px)] font-bold text-white leading-[1.1] mb-6">
          Executive
          <br />
          <span className="text-[#f97316]">Protection</span>
        </h1>
        <p className="text-[18px] text-gray-400 leading-relaxed max-w-[42rem] mx-auto">
          Discreet, professional protection for those who cannot afford anything less than the best. Invisible until needed.
        </p>
      </div>
    </section>
  );
}

// ============ OVERVIEW ============
function Overview() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-gray-900 leading-tight mb-6">
              The Principal Comes First
            </h2>
            <p className="text-[17px] text-gray-600 leading-relaxed mb-6">
              Whether you're a diplomat in a high-threat posting, a corporate executive with a complex travel schedule, or a high-profile individual facing credible threats—your security requires more than a bodyguard. It requires a comprehensive protective program.
            </p>
            <p className="text-[17px] text-gray-600 leading-relaxed mb-6">
              KDT protective details are drawn from backgrounds in diplomatic security, special operations, and elite law enforcement. Every agent understands that effective protection is about prevention, not reaction—and that discretion is as important as capability.
            </p>
            <p className="text-[17px] text-gray-600 leading-relaxed">
              We operate seamlessly within your life, maintaining your privacy and freedom of movement while ensuring your safety is never compromised.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: "Elite", label: "Personnel" },
              { stat: "Global", label: "Coverage" },
              { stat: "Discreet", label: "Operations" },
              { stat: "24/7", label: "Protection" },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-gray-50 border border-gray-100 text-center">
                <div className="text-[28px] font-bold text-[#f97316] mb-1">{item.stat}</div>
                <div className="text-[14px] text-gray-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ CAPABILITIES ============
function Capabilities() {
  const capabilities = [
    {
      title: "Personal Security Details",
      description: "Close protection agents providing 24/7 coverage, from single-agent assignments to full protective teams.",
    },
    {
      title: "Advance Operations",
      description: "Pre-deployment reconnaissance and coordination to identify and mitigate risks before arrival.",
    },
    {
      title: "Secure Transportation",
      description: "Armored vehicles, secure routes, and trained drivers for safe movement in any environment.",
    },
    {
      title: "Residential Security",
      description: "Comprehensive protection for homes and estates, integrating physical security with technology.",
    },
    {
      title: "Travel Security",
      description: "Global protective coverage for international travel, including high-risk destinations.",
    },
    {
      title: "Threat Assessment",
      description: "Continuous evaluation of threats specific to the principal, informing protective posture.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(32px,4vw,44px)] font-bold text-white leading-tight mb-4">
            Capabilities
          </h2>
          <p className="text-[18px] text-gray-400 max-w-[42rem] mx-auto">
            Complete protective programs tailored to your specific threat environment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-[18px] font-semibold text-white mb-3">{cap.title}</h3>
              <p className="text-[15px] text-gray-400 leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ CLIENTS ============
function Clients() {
  return (
    <section className="py-24 px-6 bg-[#111]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[28px] font-bold text-white mb-4">
            Who We Protect
          </h2>
          <p className="text-[17px] text-gray-400 max-w-[36rem] mx-auto">
            Tailored protective programs for diverse high-risk clients.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Corporate Executives",
            "Diplomats & Officials",
            "High-Net-Worth Individuals",
            "Public Figures",
            "Legal Professionals",
            "Journalists & Media",
            "Families",
            "Special Events",
          ].map((client, i) => (
            <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10 text-center">
              <span className="text-[14px] text-gray-300">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ CTA ============
function CTA() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[600px] mx-auto text-center">
        <h2 className="text-[36px] md:text-[44px] font-bold text-gray-900 mb-4 leading-tight">
          Your Security,<br />
          <span className="text-[#f97316]">Our Mission</span>
        </h2>
        <p className="text-[16px] text-gray-600 mb-8">
          All inquiries are treated with complete confidentiality.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact/services" className="px-6 py-3 bg-[#0a0a0a] text-white text-[15px] font-medium rounded-lg hover:bg-black transition-all">
            Request Consultation
          </Link>
          <Link href="/services" className="px-6 py-3 bg-gray-100 text-gray-900 text-[15px] font-medium rounded-lg hover:bg-gray-200 transition-all">
            All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

// ============ FOOTER ============
function Footer() {
  return (
    <footer className="py-8 px-6 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[14px] text-gray-500">
            Copyright © {new Date().getFullYear()} Knight Division Tactical. All rights reserved.
          </span>
          <div className="flex flex-wrap items-center gap-6 text-[14px]">
            <Link href="/terms" className="text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function ExecutiveProtectionPage() {
  return (
    <main className="min-h-screen">
      <Nav activePath="/services" />
      <Hero />
      <Overview />
      <Capabilities />
      <Clients />
      <CTA />
      <Footer />
    </main>
  );
}
