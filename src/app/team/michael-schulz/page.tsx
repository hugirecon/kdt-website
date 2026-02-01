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

// ============ PROFILE HERO ============
function ProfileHero() {
  return (
    <section className="pt-24 pb-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Back link */}
        <Link href="/about" className="inline-flex items-center gap-2 text-[14px] text-gray-500 hover:text-white transition-colors mb-12">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to About
        </Link>
        
        {/* Profile Header */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left - Avatar & Quick Info */}
          <div className="lg:w-80 flex-shrink-0">
            {/* Avatar */}
            <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-[#f97316]/20 via-[#f97316]/10 to-transparent flex items-center justify-center mb-6 border border-[#f97316]/20">
              <span className="text-[#f97316] font-bold text-6xl">MS</span>
            </div>
            
            {/* Role Badge */}
            <span className="inline-block px-3 py-1 rounded-md bg-[#f97316]/10 text-[#f97316] text-[13px] font-medium mb-4">
              CEO
            </span>
            
            {/* Name */}
            <h1 className="text-[32px] font-bold text-white mb-2 leading-tight">
              Michael Schulz
            </h1>
            <p className="text-[16px] text-gray-400 mb-8">
              Chief Executive Officer<br />
              Head of SPEAR Branch
            </p>
            
            {/* Quick Stats */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <div>
                <span className="text-[13px] text-gray-500 uppercase tracking-wider">Focus</span>
                <p className="text-[15px] text-white mt-1">External Operations, Innovation, Enterprise</p>
              </div>
              <div>
                <span className="text-[13px] text-gray-500 uppercase tracking-wider">Priorities</span>
                <ul className="text-[15px] text-white mt-1 space-y-1">
                  <li>• Rapid efficiency</li>
                  <li>• Effectiveness</li>
                  <li>• "To make the system work."</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Right - Bio */}
          <div className="flex-1 lg:pt-4">
            <h2 className="text-[13px] text-gray-500 uppercase tracking-wider mb-4">About</h2>
            <div className="space-y-6 text-[16px] text-gray-300 leading-relaxed">
              <p>
                Michael Schulz serves as the Chief Executive Officer of KDT and leads the SPEAR Branch. While Matthew McCalla leads the forces within and manages their operations, Michael's focus is directed externally. Driven by a relentless pursuit of excellence, he dedicates himself to making KDT a leader in innovation and enterprise, ensuring its growth benefits all KDT Personnel.
              </p>
              
              <div className="pt-4">
                <h3 className="text-[20px] font-semibold text-white mb-4">Background</h3>
                <p className="mb-4">
                  Born into an all-American ranching family with German roots, hard work flows through his veins. Schulz's relentless work ethic has been shown in every aspect of his career. His style of work has made him well known in the industry as the one who lands contracts.
                </p>
                <p className="mb-4">
                  During and after his education, he co-founded and contributed to various business ventures and community projects, excelling in roles such as community outreach, project coordination, and on-the-ground sales.
                </p>
                <p className="mb-4">
                  Leveraging his experience as a trader, Michael founded and led a private investment group and simultaneously established himself in B2B sales. His primary interests are his church, his family and Private Security Contracting.
                </p>
                <p className="text-white font-medium">
                  He seeks rapid efficiency and "to make the system work".
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ OTHER LEADERSHIP ============
function OtherLeadership() {
  return (
    <section className="py-20 px-6 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[13px] text-gray-500 uppercase tracking-wider mb-8">Leadership Team</h2>
        
        <Link 
          href="/team/matthew-mccalla"
          className="flex items-center gap-6 p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#f97316]/30 hover:bg-white/[0.04] transition-all group"
        >
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#f97316]/20 to-transparent flex items-center justify-center flex-shrink-0">
            <span className="text-[#f97316] font-bold text-xl">MM</span>
          </div>
          <div className="flex-1">
            <span className="inline-block px-2 py-0.5 rounded bg-[#f97316]/10 text-[#f97316] text-[11px] font-medium mb-1">
              COO
            </span>
            <h3 className="text-[18px] font-semibold text-white group-hover:text-[#f97316] transition-colors">
              Matthew McCalla
            </h3>
            <p className="text-[14px] text-gray-500">Chief Operating Officer, Head of PSC Branch</p>
          </div>
          <svg className="w-5 h-5 text-gray-500 group-hover:text-[#f97316] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

// ============ CTA ============
function CTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
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
    <footer className="py-8 px-6 border-t border-white/5">
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

export default function MichaelSchulzPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Nav />
      <ProfileHero />
      <OtherLeadership />
      <CTA />
      <Footer />
    </main>
  );
}
