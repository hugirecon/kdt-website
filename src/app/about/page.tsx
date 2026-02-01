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
          We've mastered this craft.
          <br />
          <span className="text-[#f97316]">Security is guaranteed.</span>
        </h1>
        <p className="text-[18px] text-gray-400 leading-relaxed" style={{ maxWidth: "42rem", marginLeft: "auto", marginRight: "auto" }}>
          Knight Division Tactical sets the standard for excellence in private security, combining unwavering professionalism with cutting-edge technology.
        </p>
      </div>
    </section>
  );
}

// ============ STATS (DARK) ============
function Stats() {
  const stats = [
    { value: "400+", label: "KDT Agents" },
    { value: "Global", label: "Operations" },
    { value: "#1", label: "Industry Pay" },
    { value: "24/7", label: "Response Ready" },
  ];

  return (
    <section className="py-16 px-6 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-[clamp(32px,4vw,48px)] font-bold text-[#f97316] mb-1">{stat.value}</div>
            <div className="text-[14px] text-gray-500 uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ============ PHOTO GALLERY ============
function PhotoGallery() {
  return (
    <section className="py-8 px-6 bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="aspect-square rounded-xl overflow-hidden relative group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={`/images/tactical-${num}.jpg`} 
                alt={`KDT Operations ${num}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute inset-0 bg-[#f97316]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ STORY (DARK - CONSISTENT) ============
function Story() {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-[clamp(32px,4vw,44px)] font-bold text-white leading-tight mb-6">
              Our Commitment to Excellence
            </h2>
            <div className="space-y-4 text-[16px] text-gray-400 leading-relaxed">
              <p>
                At Knight Division Tactical (KDT), founded and led by Matthew McCalla and Michael Schulz, our commitment to excellence in the Private Security Contracting industry sets us apart as the epitome of precision and reliability.
              </p>
              <p>
                Steeped in the aesthetics of a clandestine agent from the highest echelons of the military, KDT represents a fusion of sophistication and tactical prowess. Our dedication to excellence is not merely a slogan but an unwavering standard that permeates every aspect of our operations.
              </p>
              <p>
                What sets us further apart is our commitment to fair compensation. We pride ourselves on offering our contractors an exceptionally competitive rate that stands <span className="text-white font-medium">unmatched in the industry</span>.
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-[clamp(32px,4vw,44px)] font-bold text-white leading-tight mb-6">
              What It Means to Be KDT
            </h2>
            <div className="space-y-4 text-[16px] text-gray-400 leading-relaxed">
              <p>
                At KDT, timeliness and professionalism are non-negotiable; luxury, precision, and client satisfaction are the standards. Our unbeatable technology outpaces all others. As is typical in our operations, KDT leads the way.
              </p>
              <p>
                How do we do this? Fearless innovation with resolute excellence. Creating a flawless machine is a virtue in and of itself. At KDT, we don't stop there.
              </p>
              <p>
                Our Personnel are the highest paid in the industry, with incentives to push the boundaries of efficiency and productivity. Shared excellence in a team is heavier than the weight of gold.
              </p>
              <p className="text-white font-medium">
                At KDT, excellence is not an option; it's an expectation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ FEATURES (DARK) ============
function Features() {
  const features = [
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Innovation", 
      desc: "Super-apps, AI security, blockchain technology, strategic partnerships that combine aesthetic with world-changing technology." 
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Global Access", 
      desc: "Global reach and rapid deployment capabilities, ensuring elite security solutions wherever they are needed." 
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Precision", 
      desc: "Every operation approached with unmatched discipline, skill, and attention to detail." 
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "High-Technology", 
      desc: "AI-Centric quantum computing technology that outpaces the opposition." 
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Top Pay", 
      desc: "Our Personnel are the highest paid in the industry. No one pays their team more than we do." 
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Elite Team", 
      desc: "400+ KDT Agents from the highest echelons of military and security backgrounds." 
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(32px,4vw,44px)] font-bold text-white leading-tight mb-4">
            Our Commitment to Excellence
          </h2>
          <p className="text-[18px] text-gray-400" style={{ maxWidth: "42rem", marginLeft: "auto", marginRight: "auto" }}>
            At KDT, excellence is not an option; it's an expectation. We believe in setting the bar high and continuously raising it.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, i) => (
            <div key={i} className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#f97316]/10 flex items-center justify-center text-[#f97316]">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-[18px] font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-[15px] text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ GLOBAL (WHITE) ============
function Global() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[clamp(32px,4vw,44px)] font-bold text-gray-900 leading-tight mb-6">
              We Operate Globally.
            </h2>
            <p className="text-[18px] text-gray-600 mb-8 leading-relaxed">
              Global access, strategic alliances, leader in technology. KDT's reach extends wherever our clients need us.
            </p>
            
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                <h3 className="text-[16px] font-semibold text-gray-900 mb-1">KDT AI</h3>
                <p className="text-[15px] text-gray-600">
                  Real-time data and an indefatigable security force. Our technology allows us to be anywhere, achieve anything, at any time.
                </p>
              </div>
              
              <div className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                <h3 className="text-[16px] font-semibold text-gray-900 mb-1">Headquarters</h3>
                <p className="text-[15px] text-gray-600">
                  New York, NY<br />
                  contact@knightdivisiontactical.com
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200 flex items-center justify-center">
            <div className="text-center">
              <div className="text-[64px] font-bold text-gray-200">GLOBAL</div>
              <div className="text-[16px] text-gray-500">Operations Worldwide</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ LEADERSHIP (DARK) ============
function Leadership() {
  const leaders = [
    {
      name: "Michael Schulz",
      role: "CEO",
      title: "Chief Executive Officer, Head of SPEAR Branch",
      href: "/team/michael-schulz",
    },
    {
      name: "Matthew McCalla",
      role: "COO",
      title: "Chief Operating Officer, Head of PSC Branch",
      href: "/team/matthew-mccalla",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(32px,4vw,44px)] font-bold text-white leading-tight mb-4">
            Leadership Team
          </h2>
          <p className="text-[18px] text-gray-400">
            The people behind KDT's excellence.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-6 max-w-[800px] mx-auto">
          {leaders.map((leader, i) => (
            <Link 
              key={i}
              href={leader.href}
              className="group p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#f97316]/30 hover:bg-white/[0.04] transition-all"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#f97316]/20 to-transparent flex items-center justify-center">
                  <span className="text-[#f97316] font-bold text-lg">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <span className="inline-block px-2 py-0.5 rounded bg-[#f97316]/10 text-[#f97316] text-[11px] font-medium mb-1">
                    {leader.role}
                  </span>
                  <h3 className="text-[18px] font-semibold text-white group-hover:text-[#f97316] transition-colors">
                    {leader.name}
                  </h3>
                </div>
              </div>
              <p className="text-[14px] text-gray-500">{leader.title}</p>
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
export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Nav activePath="/about" />
      <Hero />
      <Stats />
      <PhotoGallery />
      <Story />
      <Features />
      <Global />
      <Leadership />
      <CTA />
      <Footer />
    </main>
  );
}
