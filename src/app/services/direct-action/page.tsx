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
          High-Threat Operations
        </div>
        <h1 className="text-[clamp(40px,5vw,56px)] font-bold text-white leading-[1.1] mb-6">
          Direct
          <br />
          <span className="text-[#f97316]">Action</span>
        </h1>
        <p className="text-[18px] text-gray-400 leading-relaxed" style={{ maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
          When the mission demands more. Elite capabilities for high-threat environments where the margin for error is zero.
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
              Kinetic Capability
            </h2>
            <p className="text-[17px] text-gray-600 leading-relaxed mb-6">
              Some environments are beyond the reach of conventional security. Hostile territories. Active conflict zones. Operations where diplomatic solutions have been exhausted and the only remaining option is direct action.
            </p>
            <p className="text-[17px] text-gray-600 leading-relaxed mb-6">
              KDT maintains a cadre of operators with backgrounds in tier-one special operations units, prepared for deployment to the world's most dangerous operating environments.
            </p>
            <p className="text-[17px] text-gray-600 leading-relaxed">
              We do not discuss the specifics of our tactical capabilities publicly. Clients requiring this level of service understand why.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: "Tier-1", label: "Personnel" },
              { stat: "Global", label: "Deployment" },
              { stat: "Full", label: "Spectrum" },
              { stat: "Mission", label: "Success" },
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
      title: "High-Threat Protection",
      description: "Protective operations in active conflict zones and hostile environments requiring armed response capability.",
    },
    {
      title: "Diplomatic Security Augmentation",
      description: "Supporting official diplomatic security operations with specialized tactical expertise.",
    },
    {
      title: "Contingency Response",
      description: "Rapid deployment for crisis situations requiring immediate intervention.",
    },
    {
      title: "Site Security — Hostile",
      description: "Defending fixed sites and infrastructure in contested or hostile environments.",
    },
    {
      title: "Movement Security",
      description: "Secure transportation and convoy operations through high-risk corridors.",
    },
    {
      title: "Training Cadre",
      description: "Developing tactical capabilities for partner forces and allied organizations.",
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
            Full-spectrum tactical support for the most demanding operational environments.
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

// ============ QUALIFICATION ============
function Qualification() {
  return (
    <section className="py-24 px-6 bg-[#111]">
      <div className="max-w-[800px] mx-auto text-center">
        <h2 className="text-[28px] font-bold text-white mb-6">
          Access Requirements
        </h2>
        <p className="text-[17px] text-gray-400 leading-relaxed mb-8">
          Direct action services are available exclusively to government agencies, authorized diplomatic missions, and pre-qualified commercial clients operating under appropriate legal frameworks. Initial engagement requires verification of authorization and operational legitimacy.
        </p>
        <div className="inline-flex items-center gap-2 text-[14px] text-[#f97316]">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Inquiry subject to verification
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
          When It<br />
          <span className="text-[#f97316]">Matters</span>
        </h2>
        <p className="text-[16px] text-gray-600 mb-8">
          Authorized inquiries only.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact/services" className="px-6 py-3 bg-[#0a0a0a] text-white text-[15px] font-medium rounded-lg hover:bg-black transition-all">
            Submit Inquiry
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

export default function DirectActionPage() {
  return (
    <main className="min-h-screen">
      <Nav activePath="/services" />
      <Hero />
      <Overview />
      <Capabilities />
      <Qualification />
      <CTA />
      <Footer />
    </main>
  );
}
