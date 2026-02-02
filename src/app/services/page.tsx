"use client";

import Link from "next/link";
import Nav from "@/components/Nav";

// ============ HERO (DARK) ============
function Hero() {
  return (
    <section className="relative bg-[#0a0a0a] pb-24 px-6" style={{ paddingTop: '8rem' }}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.08),transparent_70%)]" />
      </div>
      
      <div className="relative z-10 max-w-[1200px] mx-auto text-center">
        <h1 className="text-[clamp(40px,5vw,56px)] font-bold text-white leading-[1.1] mb-6">
          Our Services.
          <br />
          <span className="text-[#f97316]">Your Security.</span>
        </h1>
        <p className="text-[18px] text-gray-400 leading-relaxed" style={{ maxWidth: "42rem", marginLeft: "auto", marginRight: "auto" }}>
          From executive protection to tactical operations in contested environments, KDT delivers elite security capabilities tailored to your mission requirements.
        </p>
      </div>
    </section>
  );
}

// ============ SERVICES GRID (WHITE) ============
function ServicesGrid() {
  const services = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Executive Protection",
      description: "Discreet, professional protection for diplomats, executives, and high-profile individuals. Personal security details, advance operations, and secure transportation worldwide.",
      href: "/services/executive-protection",
      tag: "Protective Services",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Tactical Operations",
      description: "Elite capabilities for high-threat environments. Tier-one personnel for protective operations in active conflict zones and hostile environments.",
      href: "/services/tactical-operations",
      tag: "High-Threat",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Critical Infrastructure",
      description: "Protective forces for the nation's most sensitive installations. Nuclear facilities, national laboratories, and classified research sites.",
      href: "/services/critical-infrastructure",
      tag: "Facility Security",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: "Intelligence & Reconnaissance",
      description: "Full-spectrum intelligence support from collection through dissemination. All-source analysis, ISR, ground reconnaissance, and TSCM services.",
      href: "/services/intelligence-support",
      tag: "Intelligence Services",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      ),
      title: "Counter-Trafficking",
      description: "Intelligence-driven support for organizations combating transnational criminal enterprises. Human trafficking interdiction and narcotics disruption.",
      href: "/services/counter-trafficking",
      tag: "Interdiction Support",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Remote Operations",
      description: "Specialized protection for personnel in hazardous environments. Wildlife threat mitigation, polar operations, and pipeline security.",
      href: "/services/remote-operations",
      tag: "Specialized Operations",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: "Maritime Operations",
      description: "Security beyond the shoreline. Vessel protection, anti-piracy operations, port security, and Arctic maritime capabilities.",
      href: "/services/maritime-operations",
      tag: "Naval Security",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Link 
              key={i}
              href={service.href}
              className="group p-6 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#f97316]/30 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#f97316]/10 flex items-center justify-center text-[#f97316] group-hover:bg-[#f97316] group-hover:text-white transition-all">
                  {service.icon}
                </div>
                <span className="text-[11px] font-medium text-[#f97316] bg-[#f97316]/10 px-2 py-1 rounded">
                  {service.tag}
                </span>
              </div>
              <h3 className="text-[18px] font-semibold text-gray-900 mb-2 group-hover:text-[#f97316] transition-colors">{service.title}</h3>
              <p className="text-[15px] text-gray-600 leading-relaxed mb-4">{service.description}</p>
              <div className="flex items-center text-[14px] font-medium text-[#f97316]">
                <span>Learn more</span>
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ PROCESS (DARK) ============
function Process() {
  const steps = [
    { num: "01", title: "Initial Consultation", desc: "We assess your security needs and understand your specific requirements and threat environment." },
    { num: "02", title: "Threat Assessment", desc: "Our team develops a comprehensive analysis of risks and vulnerabilities specific to your situation." },
    { num: "03", title: "Custom Planning", desc: "We design a tailored security solution that addresses identified threats while meeting operational requirements." },
    { num: "04", title: "Execution", desc: "Professional delivery with continuous monitoring, adaptive response, and ongoing threat evaluation." },
  ];

  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(32px,4vw,44px)] font-bold text-white leading-tight mb-4">
            How We Work
          </h2>
          <p className="text-[18px] text-gray-400" style={{ maxWidth: "42rem", marginLeft: "auto", marginRight: "auto" }}>
            A proven process designed to deliver security excellence at every step.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="text-[48px] font-bold text-[#f97316]/20 mb-4">{step.num}</div>
              <h3 className="text-[18px] font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-[15px] text-gray-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ DIFFERENTIATORS (WHITE) ============
function Differentiators() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[clamp(32px,4vw,44px)] font-bold text-gray-900 leading-tight mb-6">
              Why KDT
            </h2>
            <p className="text-[18px] text-gray-600 leading-relaxed mb-6">
              We don't just provide security—we provide solutions. Every engagement begins with understanding your unique threat environment and operational requirements.
            </p>
            <ul className="space-y-4">
              {[
                "Personnel drawn from tier-one military and intelligence backgrounds",
                "Global deployment capability with established operational networks",
                "Cleared workforce for classified and sensitive programs",
                "Integrated technology and intelligence support",
                "Proven performance in the world's most challenging environments",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[16px] text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[#f97316] mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: "Global", label: "Reach" },
              { stat: "Elite", label: "Personnel" },
              { stat: "Cleared", label: "Workforce" },
              { stat: "Proven", label: "Results" },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-xl bg-gray-50 border border-gray-100 text-center">
                <div className="text-[32px] font-bold text-[#f97316] mb-1">{item.stat}</div>
                <div className="text-[14px] text-gray-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ CTA (DARK WITH GLOW) ============
function CTA() {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-[#f97316]/5 rounded-full blur-[150px]" />
      </div>
      
      <div className="max-w-[600px] mx-auto text-center relative z-10">
        <h2 className="text-[36px] md:text-[44px] font-bold text-white mb-4 leading-tight">
          Ready to<br />
          <span className="text-[#f97316]">Begin?</span>
        </h2>
        <p className="text-[16px] text-gray-400 mb-8">
          Contact us today to discuss your security requirements.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact/services" className="px-6 py-3 bg-white text-black text-[15px] font-medium rounded-lg hover:bg-gray-100 transition-all">
            Request Consultation
          </Link>
          <Link href="/about" className="px-6 py-3 bg-[#f97316] text-black text-[15px] font-medium rounded-lg hover:bg-[#f97316]/90 transition-all">
            Learn About Us
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

// ============ PAGE ============
export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Nav activePath="/services" />
      <Hero />
      <ServicesGrid />
      <Process />
      <Differentiators />
      <CTA />
      <Footer />
    </main>
  );
}
