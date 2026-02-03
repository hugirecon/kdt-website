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
          Interdiction Support
        </div>
        <h1 className="text-[clamp(40px,5vw,56px)] font-bold text-white leading-[1.1] mb-6">
          Counter-Trafficking
          <br />
          <span className="text-[#f97316]">Operations</span>
        </h1>
        <p className="text-[18px] text-gray-400 leading-relaxed" style={{ maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
          Disrupting the networks that profit from exploitation. Intelligence-driven support for organizations combating transnational criminal enterprises.
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
              Targeting the Supply Chain
            </h2>
            <p className="text-[17px] text-gray-600 leading-relaxed mb-6">
              Trafficking networks—whether moving people, narcotics, or weapons—operate across borders with sophisticated logistics and deep resources. Combating them requires more than enforcement; it requires intelligence, coordination, and relentless pressure on their operations.
            </p>
            <p className="text-[17px] text-gray-600 leading-relaxed mb-6">
              KDT provides specialized support for counter-trafficking operations, bringing tactical expertise and analytical capability to organizations working to dismantle these criminal enterprises.
            </p>
            <p className="text-[17px] text-gray-600 leading-relaxed">
              Our personnel have backgrounds in law enforcement, military intelligence, and special operations—with direct experience targeting and disrupting trafficking organizations at every level of their hierarchy.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: "Multi", label: "Domain" },
              { stat: "Intel", label: "Driven" },
              { stat: "Global", label: "Reach" },
              { stat: "Zero", label: "Compromise" },
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
      title: "Human Trafficking Interdiction",
      description: "Support for operations targeting the networks that exploit vulnerable populations across international borders.",
    },
    {
      title: "Narcotics Disruption",
      description: "Counter-narcotics expertise from detection to dismantlement of distribution networks.",
    },
    {
      title: "Intelligence Analysis",
      description: "Pattern analysis, network mapping, and targeting support for ongoing counter-trafficking operations.",
    },
    {
      title: "Cross-Border Coordination",
      description: "Facilitating cooperation between agencies and organizations operating across jurisdictional boundaries.",
    },
    {
      title: "Training & Capacity Building",
      description: "Developing counter-trafficking capabilities for partner organizations and allied forces.",
    },
    {
      title: "Technical Surveillance Support",
      description: "Advanced surveillance and counter-surveillance capabilities for sensitive operations.",
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
            Comprehensive support across the counter-trafficking mission spectrum.
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

// ============ CTA ============
function CTA() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[600px] mx-auto text-center">
        <h2 className="text-[36px] md:text-[44px] font-bold text-gray-900 mb-4 leading-tight">
          Disrupt the<br />
          <span className="text-[#f97316]">Network</span>
        </h2>
        <p className="text-[16px] text-gray-600 mb-8">
          Contact us to discuss counter-trafficking support requirements.
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

export default function CounterTraffickingPage() {
  return (
    <main className="min-h-screen">
      <Nav activePath="/services" />
      <Hero />
      <Overview />
      <Capabilities />
      <CTA />
      <Footer />
    </main>
  );
}
