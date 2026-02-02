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
          Meet the Team
        </h1>
        <p className="text-[18px] text-gray-400 leading-relaxed" style={{ maxWidth: "42rem", marginLeft: "auto", marginRight: "auto" }}>
          The loyal team behind Knight Division Tactical's excellence.
        </p>
      </div>
    </section>
  );
}

// ============ TEAM GRID (WHITE) ============
function TeamGrid() {
  const leadership = [
    { 
      name: "Michael Schulz", 
      role: "CEO", 
      title: "Chief Executive Officer, Head of SPEAR Branch", 
      href: "/team/michael-schulz", 
      initials: "MS",
      badge: "bg-[#f97316]/10 text-[#f97316]"
    },
    { 
      name: "Matthew McCalla", 
      role: "COO", 
      title: "Chief Operating Officer, Head of PSC Branch", 
      href: "/team/matthew-mccalla", 
      initials: "MM",
      badge: "bg-[#f97316]/10 text-[#f97316]"
    },
  ];
  
  const team = [
    { 
      name: "Nicholas Norman", 
      role: "AE", 
      title: "Sales, outreach, acquisition, account management", 
      href: "/team/nicholas-norman", 
      initials: "NN",
      image: "/images/team/nic-norman.jpg",
      badge: "bg-purple-500/10 text-purple-400"
    },
    { 
      name: "Bogdan Modzolewski", 
      role: "SCS", 
      title: "Compliance, legal matters, certifications, safety", 
      href: "/team/bogdan-modzolewski", 
      initials: "BM",
      badge: "bg-amber-500/10 text-amber-400"
    },
    { 
      name: "Santiago Telleria", 
      role: "MC", 
      title: "Personnel integration, support, logistics", 
      href: "/team/santiago-telleria", 
      initials: "ST",
      image: "/images/team/santiago-telleria.jpg",
      badge: "bg-blue-500/10 text-blue-400"
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Leadership */}
        <div className="mb-16">
          <h2 className="text-[13px] text-gray-500 uppercase tracking-wider mb-8">Leadership</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {leadership.map((member, i) => (
              <Link 
                key={i}
                href={member.href}
                className="flex items-center gap-6 p-6 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#f97316]/30 hover:shadow-lg transition-all group"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#f97316]/20 to-[#f97316]/5 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#f97316] font-bold text-2xl">{member.initials}</span>
                </div>
                <div className="flex-1">
                  <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-medium mb-1 ${member.badge}`}>
                    {member.role}
                  </span>
                  <h3 className="text-[20px] font-semibold text-gray-900 group-hover:text-[#f97316] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[14px] text-gray-500">{member.title}</p>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-[#f97316] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Team */}
        <div>
          <h2 className="text-[13px] text-gray-500 uppercase tracking-wider mb-8">Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <Link 
                key={i}
                href={member.href}
                className="p-6 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#f97316]/30 hover:shadow-lg transition-all group"
              >
                {member.image ? (
                  <div className="w-16 h-16 rounded-xl overflow-hidden mb-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#f97316]/20 to-[#f97316]/5 flex items-center justify-center mb-4">
                    <span className="text-[#f97316] font-bold text-xl">{member.initials}</span>
                  </div>
                )}
                <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-medium mb-2 ${member.badge}`}>
                  {member.role}
                </span>
                <h3 className="text-[18px] font-semibold text-gray-900 group-hover:text-[#f97316] transition-colors mb-1">
                  {member.name}
                </h3>
                <p className="text-[14px] text-gray-500">{member.title}</p>
              </Link>
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
          Interested in<br />
          <span className="text-[#f97316]">Joining KDT?</span>
        </h2>
        <p className="text-[16px] text-gray-400 mb-8">
          Work alongside elite operators and cutting-edge technology.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/careers" className="px-6 py-3 bg-white text-black text-[15px] font-medium rounded-lg hover:bg-gray-100 transition-all">
            View Careers
          </Link>
          <Link href="/contact" className="px-6 py-3 bg-[#f97316] text-black text-[15px] font-medium rounded-lg hover:bg-[#f97316]/90 transition-all">
            Contact Us
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
export default function TeamPage() {
  return (
    <div style={{ background: '#030305' }}>
      <main className="min-h-screen">
        <Nav />
        <Hero />
        <TeamGrid />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}
