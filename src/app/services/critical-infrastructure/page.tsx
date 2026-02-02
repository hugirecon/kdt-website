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
          Facility Security
        </div>
        <h1 className="text-[clamp(40px,5vw,56px)] font-bold text-white leading-[1.1] mb-6">
          Critical Infrastructure
          <br />
          <span className="text-[#f97316]">Protection</span>
        </h1>
        <p className="text-[18px] text-gray-400 leading-relaxed max-w-[42rem] mx-auto">
          Securing the facilities that cannot fail. Elite protective forces for the nation's most sensitive installations.
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
              Clearance-Level Security
            </h2>
            <p className="text-[17px] text-gray-600 leading-relaxed mb-6">
              Nuclear facilities. National laboratories. Intelligence community installations. Classified research sites. These are environments where security isn't just about preventing theft—it's about protecting national security interests.
            </p>
            <p className="text-[17px] text-gray-600 leading-relaxed mb-6">
              KDT provides protective force services for high-security facilities requiring personnel with the appropriate clearances, training, and discipline to operate in the most sensitive environments.
            </p>
            <p className="text-[17px] text-gray-600 leading-relaxed">
              Our officers are trained to federal standards and beyond, maintaining the certifications and continuous evaluation required for access to classified facilities and special programs.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: "TS/SCI", label: "Cleared" },
              { stat: "Armed", label: "Response" },
              { stat: "Federal", label: "Standards" },
              { stat: "24/7/365", label: "Coverage" },
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
      title: "Nuclear Facility Security",
      description: "Protective forces meeting DOE requirements for nuclear weapons facilities and research installations.",
    },
    {
      title: "SCIF Management",
      description: "Security for Sensitive Compartmented Information Facilities and special access programs.",
    },
    {
      title: "Research Facility Protection",
      description: "Securing classified R&D operations and national laboratory environments.",
    },
    {
      title: "Access Control Systems",
      description: "Integration with advanced access control, biometrics, and multi-factor authentication systems.",
    },
    {
      title: "Emergency Response Teams",
      description: "Tactical response capability for security incidents at critical facilities.",
    },
    {
      title: "Continuous Evaluation",
      description: "Personnel maintained under continuous evaluation programs meeting IC standards.",
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
            Meeting the most stringent security requirements in the nation.
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

// ============ CERTIFICATIONS ============
function Certifications() {
  return (
    <section className="py-24 px-6 bg-[#111]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[28px] font-bold text-white mb-4">
            Standards & Compliance
          </h2>
          <p className="text-[17px] text-gray-400 max-w-[36rem] mx-auto">
            Our protective forces meet or exceed requirements for the most demanding federal security programs.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "DOE Protective Force",
            "NNSA Security",
            "ICD 705 Compliance",
            "NISPOM",
            "SPO Certification",
            "Q Clearance Eligible",
          ].map((cert, i) => (
            <div key={i} className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-[14px] text-gray-300">
              {cert}
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
          Defend What<br />
          <span className="text-[#f97316]">Matters</span>
        </h2>
        <p className="text-[16px] text-gray-600 mb-8">
          Discuss your critical infrastructure security requirements.
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

export default function CriticalInfrastructurePage() {
  return (
    <main className="min-h-screen">
      <Nav activePath="/services" />
      <Hero />
      <Overview />
      <Capabilities />
      <Certifications />
      <CTA />
      <Footer />
    </main>
  );
}
