"use client";

import { useState, useEffect } from "react";
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
          From executive protection to large-scale event security, KDT delivers professional services tailored to your specific requirements.
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
      description: "Discreet, professional protection for high-profile individuals and corporate executives. Our agents are trained in threat assessment, advance work, and secure transportation.",
      features: ["Personal Security Details", "Threat Assessment", "Secure Transportation", "Advance Work"],
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Event Security",
      description: "Comprehensive security solutions for events of all sizes. From intimate corporate gatherings to large-scale public events, we ensure safety without disruption.",
      features: ["Venue Assessment", "Access Control", "Crowd Management", "Emergency Response"],
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Global Operations",
      description: "KDT operates with global reach and rapid deployment capabilities, ensuring elite security solutions wherever they are needed across borders.",
      features: ["International Deployment", "Strategic Alliances", "Cross-Border Operations", "24/7 Availability"],
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Risk Assessment",
      description: "Thorough security audits and vulnerability assessments for facilities and operations. We identify threats before they become problems.",
      features: ["Security Audits", "Vulnerability Analysis", "Threat Identification", "Mitigation Planning"],
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Training Programs",
      description: "Professional development programs for security personnel and law enforcement professionals. Our instructors bring real-world experience to every course.",
      features: ["Tactical Training", "Executive Protection Courses", "Team Development", "Certification Programs"],
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "AI-Powered Intelligence",
      description: "Real-time data and analysis backed by cutting-edge quantum computing technology. KDT AI provides an indefatigable security force.",
      features: ["Real-Time Monitoring", "Predictive Analysis", "Data Integration", "Automated Alerts"],
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div 
              key={i}
              className="p-6 rounded-xl bg-gray-50 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#f97316]/10 flex items-center justify-center text-[#f97316]">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-[18px] font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-[15px] text-gray-600 leading-relaxed mb-4">{service.description}</p>
              <ul className="space-y-2 inline-block text-left">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-[14px] text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ PROCESS (DARK) ============
function Process() {
  const steps = [
    { num: "01", title: "Initial Consultation", desc: "We assess your security needs and understand your specific requirements." },
    { num: "02", title: "Custom Planning", desc: "Our team develops a tailored security plan based on threat assessment." },
    { num: "03", title: "Team Assignment", desc: "We assign the right personnel with relevant expertise to your project." },
    { num: "04", title: "Execution", desc: "Professional delivery with real-time monitoring and adaptive response." },
  ];

  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(32px,4vw,44px)] font-bold text-white leading-tight mb-4">
            How We Work
          </h2>
          <p className="text-[18px] text-gray-400" style={{ maxWidth: "42rem", marginLeft: "auto", marginRight: "auto" }}>
            A streamlined process designed to deliver excellence at every step.
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

// ============ TECHNOLOGY (WHITE) ============
function Technology() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[clamp(32px,4vw,44px)] font-bold text-gray-900 leading-tight mb-6">
              Mission Terminal
            </h2>
            <p className="text-[18px] text-gray-600 leading-relaxed mb-6">
              KDT Agents gain access to the Mission Terminal; a virtual dashboard for real-time operations management.
            </p>
            <ul className="space-y-3">
              {[
                "Real-time operational data",
                "Secure communications",
                "Threat monitoring",
                "Team coordination",
                "Incident reporting",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[16px] text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[#f97316]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="p-8 rounded-2xl bg-gray-50 border border-gray-200">
            <div className="text-center py-16">
              <div className="w-20 h-20 rounded-2xl bg-[#f97316]/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-[24px] font-semibold text-gray-900 mb-2">Mission Terminal</div>
              <div className="text-[15px] text-gray-500">Enterprise Security Platform</div>
            </div>
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
          Join the<br />
          <span className="text-[#f97316]">Movement</span>
        </h2>
        <p className="text-[16px] text-gray-400 mb-8">
          Contact us today to discuss your security needs.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="px-6 py-3 bg-white text-black text-[15px] font-medium rounded-lg hover:bg-gray-100 transition-all">
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
      <Technology />
      <CTA />
      <Footer />
    </main>
  );
}
