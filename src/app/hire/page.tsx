"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// ============ NAV ============
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0a0a0a]/95 backdrop-blur-xl ${scrolled ? 'border-b border-white/5' : ''}`}>
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="KDT" className="w-8 h-8 object-contain" />
          <span className="text-white font-semibold text-lg tracking-tight">KDT</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-1">
          {[
            { label: "About", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Careers", href: "/careers" },
            { label: "Training", href: "/training" },
          ].map((item) => (
            <Link 
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-[15px] text-gray-400 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-3">
          <Link href="/contact" className="text-[15px] text-gray-400 hover:text-white transition-colors hidden sm:block">
            Contact
          </Link>
          <Link href="/careers" className="px-4 py-2 bg-[#f97316] text-black text-[15px] font-medium rounded-lg hover:bg-[#f97316]/90 transition-all">
            Join KDT
          </Link>
        </div>
      </div>
    </header>
  );
}

// ============ HERO (DARK) ============
function Hero() {
  return (
    <section className="relative bg-[#0a0a0a] pb-24 px-6" style={{ paddingTop: '8rem' }}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.08),transparent_70%)]" />
      </div>
      
      <div className="relative z-10 max-w-[1200px] mx-auto text-center">
        <h1 className="text-[clamp(40px,5vw,56px)] font-bold text-white leading-[1.1] mb-6">
          Hire <span className="text-[#f97316]">Knight Division</span>
        </h1>
        <p className="text-[18px] text-gray-400 leading-relaxed" style={{ maxWidth: "42rem", marginLeft: "auto", marginRight: "auto" }}>
          Elite security and private military services for clients worldwide. Unconquerable protection backed by technology.
        </p>
      </div>
    </section>
  );
}

// ============ SERVICES OFFERED (WHITE) ============
function ServicesOffered() {
  const services = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Executive Protection",
      description: "Discreet, professional protection for high-profile individuals, executives, and dignitaries. Our agents maintain low visibility while ensuring maximum security.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Event Security",
      description: "Comprehensive security for events of all sizes. Venue assessment, access control, crowd management, and emergency response protocols.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Global Operations",
      description: "Rapid deployment capabilities worldwide. Our global network ensures elite security solutions wherever they are needed.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Risk Assessment",
      description: "Thorough security audits and vulnerability assessments. We identify threats before they become problems.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Crisis Response",
      description: "24/7 availability for crisis situations. Our teams are trained for rapid response in high-stakes environments.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Technology-Enabled Security",
      description: "AI-powered threat monitoring, real-time data analysis, and the Mission Terminal platform for complete operational awareness.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(32px,4vw,44px)] font-bold text-gray-900 leading-tight mb-4">
            Our Services
          </h2>
          <p className="text-[18px] text-gray-600" style={{ maxWidth: "42rem", marginLeft: "auto", marginRight: "auto" }}>
            Professional security solutions tailored to your specific requirements.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="p-6 rounded-xl bg-gray-50 border border-gray-100">
              <div className="w-12 h-12 rounded-lg bg-[#f97316]/10 flex items-center justify-center mb-4 text-[#f97316]">
                {service.icon}
              </div>
              <h3 className="text-[18px] font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-[15px] text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ WHY KDT (DARK) ============
function WhyKDT() {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[clamp(32px,4vw,44px)] font-bold text-white leading-tight mb-6">
              Why Choose KDT?
            </h2>
            <div className="space-y-4 text-[16px] text-gray-400 leading-relaxed">
              <p>
                Knight Division Tactical represents a fusion of sophistication and tactical prowess. Our unique characteristics of speed and indefatigability are a boon to our professional reliability.
              </p>
              <p>
                We're not just another security company. KDT combines the highest echelon of military personnel with one-of-one technology, making us truly indefatigable.
              </p>
              <p>
                Our technology allows us to be anywhere and achieve relatively anything at practically anytime. Real-time data and an indefatigable security force.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "400+", label: "KDT Agents" },
              { value: "Global", label: "Operations" },
              { value: "24/7", label: "Response" },
              { value: "#1", label: "Industry Pay" },
            ].map((stat, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                <div className="text-[32px] font-bold text-[#f97316] mb-1">{stat.value}</div>
                <div className="text-[14px] text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ REQUEST FORM (WHITE) ============
function RequestForm() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-[28px] font-bold text-gray-900 mb-4">Request a Consultation</h2>
            <p className="text-[16px] text-gray-600 mb-8 leading-relaxed">
              Tell us about your security needs. Our team will review your requirements and provide a customized solution.
            </p>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                <h4 className="text-[15px] font-medium text-gray-900 mb-1">Government & Corporate</h4>
                <p className="text-[14px] text-gray-500">Large-scale contracts and ongoing security partnerships.</p>
              </div>
              <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                <h4 className="text-[15px] font-medium text-gray-900 mb-1">Private Clients</h4>
                <p className="text-[14px] text-gray-500">Executive protection and personal security services.</p>
              </div>
              <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                <h4 className="text-[15px] font-medium text-gray-900 mb-1">Event Security</h4>
                <p className="text-[14px] text-gray-500">Single events or ongoing venue security.</p>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-5">
              <div>
                <label className="block text-[14px] font-medium text-gray-700 mb-2">Business/Enterprise/Agency Name *</label>
                <input 
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] outline-none transition-all text-[15px]"
                  placeholder="Organization name"
                />
              </div>
              
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[14px] font-medium text-gray-700 mb-2">Industry *</label>
                  <select required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] outline-none transition-all text-[15px] bg-white">
                    <option value="">Select industry...</option>
                    <option>Government / Public Sector</option>
                    <option>Defense / Military</option>
                    <option>Corporate / Enterprise</option>
                    <option>Entertainment / Media</option>
                    <option>Technology</option>
                    <option>Healthcare</option>
                    <option>Finance / Banking</option>
                    <option>Real Estate</option>
                    <option>Events / Hospitality</option>
                    <option>Private / Individual</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[14px] font-medium text-gray-700 mb-2">Job Title *</label>
                  <input 
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] outline-none transition-all text-[15px]"
                    placeholder="Your title"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-[14px] font-medium text-gray-700 mb-2">Contact Email *</label>
                <input 
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] outline-none transition-all text-[15px]"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="grid sm:grid-cols-3 gap-5">
                <div className="sm:col-span-2">
                  <label className="block text-[14px] font-medium text-gray-700 mb-2">Contact Phone *</label>
                  <input 
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] outline-none transition-all text-[15px]"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-[14px] font-medium text-gray-700 mb-2">Extension</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] outline-none transition-all text-[15px]"
                    placeholder="Optional"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-[14px] font-medium text-gray-700 mb-2">Country, State/Region, Address *</label>
                <input 
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] outline-none transition-all text-[15px]"
                  placeholder="Full address"
                />
              </div>
              
              <div>
                <label className="block text-[14px] font-medium text-gray-700 mb-2">Threat Level *</label>
                <select required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] outline-none transition-all text-[15px] bg-white">
                  <option value="">Select threat level...</option>
                  <option>Low - General security presence</option>
                  <option>Medium - Elevated security concerns</option>
                  <option>High - Active threat environment</option>
                  <option>Critical - Immediate protection required</option>
                </select>
              </div>
              
              <div>
                <label className="block text-[14px] font-medium text-gray-700 mb-2">Additional Details</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] outline-none transition-all resize-none text-[15px]"
                  placeholder="Tell us about your security requirements..."
                />
              </div>
              
              <button 
                type="submit"
                className="w-full py-3.5 bg-[#f97316] text-black text-[15px] font-medium rounded-lg hover:bg-[#f97316]/90 transition-all"
              >
                Request Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ CREDENTIALS (DARK) ============
function Credentials() {
  return (
    <section className="py-16 px-6 bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500 text-[14px]">
          <div className="flex items-center gap-2">
            <span className="font-mono">UEI: VBG5DD3FTRA3</span>
          </div>
          <div className="w-px h-4 bg-gray-700" />
          <div className="flex items-center gap-2">
            <span className="font-mono">CAGE: 9RJA1</span>
          </div>
          <div className="w-px h-4 bg-gray-700" />
          <div className="flex items-center gap-2">
            <span>New York, NY</span>
          </div>
          <div className="w-px h-4 bg-gray-700" />
          <div className="flex items-center gap-2">
            <span>contact@knightdivisiontactical.com</span>
          </div>
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
export default function HirePage() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <ServicesOffered />
      <WhyKDT />
      <RequestForm />
      <Credentials />
      <Footer />
    </main>
  );
}
