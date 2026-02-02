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
          All Services
        </h1>
        <p className="text-[18px] text-gray-400 leading-relaxed" style={{ maxWidth: "42rem", marginLeft: "auto", marginRight: "auto" }}>
          Elite security and operational capabilities for government and authorized clients worldwide.
        </p>
      </div>
    </section>
  );
}

// ============ SERVICES GRID - BIG CARDS 2x ============
function ServicesGrid() {
  const services = [
    {
      title: "Wildlife Mitigation",
      description: "Specialized protection for personnel operating in remote and hazardous environments where nature itself is the threat. Predator deterrence, polar operations, and pipeline security for infrastructure projects in the world's most unforgiving terrain.",
      href: "/services/wildlife-mitigation",
      tag: "Specialized Operations",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Direct Action",
      description: "Elite capabilities for high-threat environments where the margin for error is zero. Tier-one personnel for protective operations in active conflict zones, hostile territories, and contested environments worldwide.",
      href: "/services/direct-action",
      tag: "High-Threat Operations",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Counter-Trafficking",
      description: "Intelligence-driven support for organizations combating transnational criminal enterprises. Human trafficking interdiction, narcotics disruption, and cross-border coordination for agencies targeting the networks that profit from exploitation.",
      href: "/services/counter-trafficking",
      tag: "Interdiction Support",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      ),
    },
    {
      title: "Reconnaissance",
      description: "Full-spectrum intelligence support from collection through dissemination. All-source analysis, ISR support, ground reconnaissance, and technical surveillance countermeasures. Information dominance through superior collection and analysis.",
      href: "/services/reconnaissance",
      tag: "Intelligence Services",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: "Maritime",
      description: "Security beyond the shoreline. Vessel protection detachments, anti-piracy operations, port security, and Arctic maritime capabilities. Protecting vessels and maritime infrastructure in the world's most contested waters.",
      href: "/services/maritime-operations",
      tag: "Naval Security",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <Link 
              key={i}
              href={service.href}
              className="group p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:border-[#f97316]/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 rounded-xl bg-[#f97316]/10 flex items-center justify-center text-[#f97316] group-hover:bg-[#f97316] group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <span className="text-[12px] font-medium text-[#f97316] bg-[#f97316]/10 px-3 py-1.5 rounded-full">
                  {service.tag}
                </span>
              </div>
              
              <h3 className="text-[24px] font-bold text-gray-900 mb-4 group-hover:text-[#f97316] transition-colors">
                {service.title}
              </h3>
              
              <p className="text-[16px] text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              
              <div className="flex items-center text-[15px] font-semibold text-[#f97316]">
                <span>Learn more</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
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
      <CTA />
      <Footer />
    </main>
  );
}
