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
          Naval Security
        </div>
        <h1 className="text-[clamp(40px,5vw,56px)] font-bold text-white leading-[1.1] mb-6">
          Maritime
          <br />
          <span className="text-[#f97316]">Operations</span>
        </h1>
        <p className="text-[18px] text-gray-400 leading-relaxed" style={{ maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
          Security beyond the shoreline. Protecting vessels, ports, and maritime infrastructure in the world's most contested waters.
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
              Blue Water Capable
            </h2>
            <p className="text-[17px] text-gray-600 leading-relaxed mb-6">
              The maritime domain presents unique security challenges—vast distances, limited support, and threat actors who exploit the lawlessness of international waters. From piracy in the Gulf of Aden to port security in strategic harbors, maritime threats require specialized solutions.
            </p>
            <p className="text-[17px] text-gray-600 leading-relaxed mb-6">
              KDT provides armed and unarmed maritime security services for commercial shipping, military sealift, private yachts, and critical port infrastructure. Our teams include former Navy, Coast Guard, and maritime law enforcement professionals with extensive at-sea experience.
            </p>
            <p className="text-[17px] text-gray-600 leading-relaxed">
              As Arctic shipping lanes open and global maritime competition intensifies, KDT is positioned to meet emerging security demands in the world's newest contested waters.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: "Armed", label: "Maritime" },
              { stat: "Anti-Piracy", label: "Certified" },
              { stat: "Global", label: "Waters" },
              { stat: "STCW", label: "Compliant" },
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
      title: "Vessel Protection Detachments",
      description: "Armed security teams for commercial vessels transiting high-risk maritime areas.",
    },
    {
      title: "Anti-Piracy Operations",
      description: "Deterrence and response capabilities for vessels in piracy-affected waters.",
    },
    {
      title: "Port Security",
      description: "Comprehensive security for port facilities, terminals, and maritime infrastructure.",
    },
    {
      title: "Yacht & Superyacht Security",
      description: "Discreet protective services for private vessels and their passengers.",
    },
    {
      title: "Military Sealift Support",
      description: "Security for civilian-crewed vessels supporting military logistics operations.",
    },
    {
      title: "Arctic Maritime Security",
      description: "Specialized capabilities for emerging northern shipping routes and polar operations.",
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
            Full-spectrum maritime security from port to open ocean.
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

// ============ REGIONS ============
function Regions() {
  return (
    <section className="py-24 px-6 bg-[#111]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[28px] font-bold text-white mb-4">
            Operational Regions
          </h2>
          <p className="text-[17px] text-gray-400 max-w-[36rem] mx-auto">
            Maritime security presence in the world's most critical waterways.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Gulf of Aden",
            "Strait of Hormuz",
            "Gulf of Guinea",
            "Malacca Strait",
            "Mediterranean",
            "Caribbean Basin",
            "Arctic Routes",
            "Indo-Pacific",
          ].map((region, i) => (
            <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10 text-center">
              <span className="text-[14px] text-gray-300">{region}</span>
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
          Secure<br />
          <span className="text-[#f97316]">Passage</span>
        </h2>
        <p className="text-[16px] text-gray-600 mb-8">
          Discuss your maritime security requirements with our team.
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

export default function MaritimeOperationsPage() {
  return (
    <main className="min-h-screen">
      <Nav activePath="/services" />
      <Hero />
      <Overview />
      <Capabilities />
      <Regions />
      <CTA />
      <Footer />
    </main>
  );
}
