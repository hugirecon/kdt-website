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
        <Link href="/team" className="inline-flex items-center gap-2 text-[14px] text-gray-500 hover:text-white transition-colors mb-12">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Team
        </Link>
        
        {/* Profile Header */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left - Avatar & Quick Info */}
          <div className="lg:w-80 flex-shrink-0">
            {/* Avatar */}
            <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-[#f97316]/20 via-[#f97316]/10 to-transparent flex items-center justify-center mb-6 border border-[#f97316]/20">
              <span className="text-[#f97316] font-bold text-6xl">DM</span>
            </div>
            
            {/* Role Badge */}
            <span className="inline-block px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 text-[13px] font-medium mb-4">
              OLS
            </span>
            
            {/* Name */}
            <h1 className="text-[32px] font-bold text-white mb-2 leading-tight">
              Devin Medrano
            </h1>
            <p className="text-[16px] text-gray-400 mb-6">
              Onboarding Logistics Specialist
            </p>
            
            {/* Contact */}
            <a 
              href="mailto:ols@knightdivisiontactical.com"
              className="inline-flex items-center gap-2 text-[14px] text-[#f97316] hover:underline"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              ols@knightdivisiontactical.com
            </a>
            
            {/* Focus */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="text-[13px] text-gray-500 uppercase tracking-wider">Focus</span>
              <p className="text-[15px] text-white mt-1">Personnel integration, support, logistics</p>
            </div>
          </div>
          
          {/* Right - Bio */}
          <div className="flex-1 lg:pt-4">
            <h2 className="text-[13px] text-gray-500 uppercase tracking-wider mb-4">About</h2>
            <div className="space-y-6 text-[16px] text-gray-300 leading-relaxed">
              <p>
                Devin Medrano serves as the Onboarding Logistics Specialist at Knight Division Tactical, bringing a wealth of leadership and experience to the team. A native of rural East Texas, Devin enlisted in the Army during high school.
              </p>
              
              <div className="pt-4">
                <h3 className="text-[20px] font-semibold text-white mb-4">Military Service</h3>
                <p className="mb-4">
                  Devin deployed to Iraq and Afghanistan on three GWOT operations with the 3rd Infantry Division. Rising to Sergeant (E5), he served as an M240 gunner, dismount, and driver for personal security detachments and graduated from Air Assault School at Fort Drum, NY.
                </p>
              </div>
              
              <div className="pt-4">
                <h3 className="text-[20px] font-semibold text-white mb-4">Post-Service Career</h3>
                <p className="mb-4">
                  After his service, Devin earned a double major in Wildlife Ecology and Entomology from Oklahoma State University, where he excelled as a Southwest Regional Champion judoka and president of The Wildlife Society chapter. He also served as a wildland firefighter with the U.S. Fish and Wildlife Service.
                </p>
              </div>
              
              <p className="text-white font-medium">
                An outdoorsman, martial artist, and devout Christian, Devin ensures every new KDT Agent is seamlessly integrated into the team, embodying excellence and commitment in his role.
              </p>
              
              {/* Credentials Box */}
              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 mt-6">
                <h4 className="text-[13px] text-gray-500 uppercase tracking-wider mb-4">Military Credentials</h4>
                <ul className="space-y-2 text-[15px] text-white">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]" />
                    US Army Sergeant (E5)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]" />
                    3rd Infantry Division
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]" />
                    3x GWOT Deployments (Iraq & Afghanistan)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]" />
                    Air Assault School Graduate
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ OTHER TEAM ============
function OtherTeam() {
  const team = [
    { name: "Michael Schulz", role: "CEO", title: "Chief Executive Officer", href: "/team/michael-schulz", initials: "MS" },
    { name: "Matthew McCalla", role: "COO", title: "Chief Operating Officer", href: "/team/matthew-mccalla", initials: "MM" },
  ];

  return (
    <section className="py-20 px-6 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[13px] text-gray-500 uppercase tracking-wider mb-8">Leadership Team</h2>
        
        <div className="grid sm:grid-cols-2 gap-4">
          {team.map((member, i) => (
            <Link 
              key={i}
              href={member.href}
              className="flex items-center gap-6 p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#f97316]/30 hover:bg-white/[0.04] transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#f97316]/20 to-transparent flex items-center justify-center flex-shrink-0">
                <span className="text-[#f97316] font-bold text-lg">{member.initials}</span>
              </div>
              <div className="flex-1">
                <span className="inline-block px-2 py-0.5 rounded bg-[#f97316]/10 text-[#f97316] text-[11px] font-medium mb-1">
                  {member.role}
                </span>
                <h3 className="text-[18px] font-semibold text-white group-hover:text-[#f97316] transition-colors">
                  {member.name}
                </h3>
                <p className="text-[14px] text-gray-500">{member.title}</p>
              </div>
              <svg className="w-5 h-5 text-gray-500 group-hover:text-[#f97316] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ CTA ============
function CTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
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

export default function DevinMedranoPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Nav />
      <ProfileHero />
      <OtherTeam />
      <CTA />
      <Footer />
    </main>
  );
}
