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
          Intelligence Services
        </div>
        <h1 className="text-[clamp(40px,5vw,56px)] font-bold text-white leading-[1.1] mb-6">
          Reconnaissance
        </h1>
        <p className="text-[18px] text-gray-400 leading-relaxed max-w-[42rem] mx-auto">
          Information dominance through superior collection, analysis, and operational intelligence. Seeing the battlefield before the battle.
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
              Decision Advantage
            </h2>
            <p className="text-[17px] text-gray-600 leading-relaxed mb-6">
              In contested environments, information is the ultimate advantage. Knowing where threats exist, understanding adversary capabilities, and predicting their actions before they act—this is the foundation of operational success.
            </p>
            <p className="text-[17px] text-gray-600 leading-relaxed mb-6">
              KDT provides intelligence and reconnaissance support across the full spectrum of collection disciplines, bringing analytical rigor and operational context to raw information.
            </p>
            <p className="text-[17px] text-gray-600 leading-relaxed">
              Our intelligence professionals have backgrounds spanning the U.S. Intelligence Community, special operations, and federal law enforcement—with direct experience producing actionable intelligence for the highest levels of government.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: "All-Source", label: "Analysis" },
              { stat: "Real-Time", label: "Collection" },
              { stat: "Predictive", label: "Targeting" },
              { stat: "Actionable", label: "Intelligence" },
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
      title: "All-Source Intelligence",
      description: "Integrating multiple intelligence disciplines to produce comprehensive assessments and finished intelligence products.",
    },
    {
      title: "ISR Support",
      description: "Intelligence, Surveillance, and Reconnaissance planning and analysis for persistent monitoring operations.",
    },
    {
      title: "GEOINT Analysis",
      description: "Geospatial intelligence and imagery analysis providing location-based intelligence advantage.",
    },
    {
      title: "Ground Reconnaissance",
      description: "Direct observation and tactical reconnaissance in support of operational planning.",
    },
    {
      title: "TSCM Services",
      description: "Technical Surveillance Countermeasures to protect sensitive discussions and facilities.",
    },
    {
      title: "Threat Analysis",
      description: "Continuous threat assessment and early warning for proactive security posture.",
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
            Full-spectrum intelligence support from collection through dissemination.
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

// ============ DISCIPLINES ============
function Disciplines() {
  return (
    <section className="py-24 px-6 bg-[#111]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[28px] font-bold text-white mb-4">
            Collection Disciplines
          </h2>
          <p className="text-[17px] text-gray-400 max-w-[36rem] mx-auto">
            Multi-INT capability across the intelligence spectrum.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { abbr: "HUMINT", full: "Human Intelligence" },
            { abbr: "GEOINT", full: "Geospatial Intelligence" },
            { abbr: "SIGINT", full: "Signals Intelligence" },
            { abbr: "OSINT", full: "Open Source Intelligence" },
            { abbr: "MASINT", full: "Measurement & Signature" },
            { abbr: "TECHINT", full: "Technical Intelligence" },
          ].map((disc, i) => (
            <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10 text-center">
              <div className="text-[18px] font-bold text-[#f97316] mb-1">{disc.abbr}</div>
              <div className="text-[12px] text-gray-500">{disc.full}</div>
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
          Know Before<br />
          <span className="text-[#f97316]">They Act</span>
        </h2>
        <p className="text-[16px] text-gray-600 mb-8">
          Discuss your intelligence requirements with our analysts.
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

export default function ReconnaissancePage() {
  return (
    <main className="min-h-screen">
      <Nav activePath="/services" />
      <Hero />
      <Overview />
      <Capabilities />
      <Disciplines />
      <CTA />
      <Footer />
    </main>
  );
}
