"use client";

import React, { useState, useEffect, useRef } from "react";
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
          Join Knight Division Tactical
        </h1>
        <p className="text-[18px] text-gray-400 leading-relaxed" style={{ maxWidth: "48rem", marginLeft: "auto", marginRight: "auto" }}>
          As we expand our team, we are offering unique opportunities for individuals to join us as Account Executives or Private Security Contractors, both pivotal roles within our organization.
        </p>
      </div>
    </section>
  );
}

// ============ INTRO (DARK - MATCHES SITE) ============
function Intro() {
  return (
    <section className="py-16 px-6 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[17px] text-gray-400 leading-relaxed">
            Whether engaging in the art of sales or executing security operations with the utmost proficiency, every member at KDT adheres to our <span className="text-white font-medium">Code of Virtues</span>. This code serves as the backbone of our company, outlining a set of principles that each team member wholeheartedly commits to, ensuring a cohesive and principled approach to our work.
          </p>
        </div>
      </div>
    </section>
  );
}

// ============ BENEFIT CARD WITH GLOW ============
function BenefitCard({ icon, title, desc, index }: { icon: React.ReactNode; title: string; desc: string; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      className="group relative p-6 rounded-xl bg-white/[0.02] border border-white/5 overflow-hidden transition-all duration-300 hover:border-[#f97316]/20 hover:bg-white/[0.03] text-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Glow effect */}
      {isHovered && (
        <div
          className="absolute pointer-events-none transition-opacity duration-200"
          style={{
            left: mousePos.x - 100,
            top: mousePos.y - 100,
            width: 200,
            height: 200,
            background: `radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)`,
          }}
        />
      )}
      
      <div className="relative z-10">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-lg bg-[#f97316]/10 flex items-center justify-center text-[#f97316] group-hover:bg-[#f97316]/20 group-hover:scale-110 transition-all duration-300">
            {icon}
          </div>
        </div>
        <h3 className="text-[18px] font-semibold text-white mb-2 group-hover:text-[#f97316] transition-colors">{title}</h3>
        <p className="text-[15px] text-gray-400">{desc}</p>
      </div>
    </div>
  );
}

// ============ BENEFITS (DARK) ============
function Benefits() {
  const benefits = [
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Unmatched Pay", 
      desc: "The highest compensation in the industry. No one pays their team more than we do." 
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "100% Remote", 
      desc: "Work from anywhere in the world with flexible scheduling options." 
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Unlimited PTO", 
      desc: "Take the time you need to stay sharp and focused." 
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Flexible Hours", 
      desc: "Work on your own schedule with mission-based assignments." 
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Medical Insurance", 
      desc: "Comprehensive health coverage for you and your family." 
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Career Growth", 
      desc: "Clear paths for advancement and professional development." 
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f97316]/[0.03] rounded-full blur-[150px]" />
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(32px,4vw,44px)] font-bold text-white leading-tight mb-4">
            Why Work With Us?
          </h2>
          <p className="text-[18px] text-gray-400">
            Excellence is expected—and rewarded.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <BenefitCard key={i} {...benefit} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ SCRAMBLE TEXT FOR POSITIONS ============
function PositionScrambleText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const scrambleChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  useEffect(() => {
    if (!isHovered) {
      setDisplayText(text);
      return;
    }

    const durationMs = 400;
    const intervalMs = 20;
    const totalTicks = durationMs / intervalMs;
    const charsPerTick = text.length / totalTicks;
    
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) return text[index];
            return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
          })
          .join("")
      );
      
      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += charsPerTick;
    }, intervalMs);
    
    return () => clearInterval(interval);
  }, [isHovered, text]);

  return (
    <span 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
      className="font-mono"
    >
      {displayText}
    </span>
  );
}

// ============ POSITION CARD WITH GLOW ============
function PositionCard({ title, slug, accentColor }: { title: string; slug: string; accentColor: string }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Link
      ref={cardRef}
      href={`/careers/${slug}`}
      className="group relative block p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] overflow-hidden transition-all duration-300 hover:border-transparent hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
    >
      {/* Animated border gradient */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(135deg, ${accentColor}40, transparent, ${accentColor}40)`,
          padding: '1px',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
        }}
      />
      
      {/* Glow following mouse */}
      {isHovered && (
        <div
          className="absolute pointer-events-none transition-opacity duration-200"
          style={{
            left: mousePos.x - 100,
            top: mousePos.y - 100,
            width: 200,
            height: 200,
            background: `radial-gradient(circle, ${accentColor}30 0%, transparent 70%)`,
          }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Status indicator */}
          <div className="relative">
            <div 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: accentColor }}
            />
            <div 
              className="absolute inset-0 w-2 h-2 rounded-full animate-ping opacity-75"
              style={{ backgroundColor: accentColor }}
            />
          </div>
          
          <h3 className="text-[15px] text-white group-hover:text-white transition-colors">
            <PositionScrambleText text={title} />
          </h3>
        </div>
        
        {/* Arrow with animation */}
        <div className="flex items-center gap-2">
          <span className="text-[12px] text-gray-500 group-hover:text-gray-400 transition-colors uppercase tracking-wider opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
            Apply
          </span>
          <svg 
            className="w-5 h-5 text-gray-600 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

// ============ OPEN POSITIONS (DARK HIGH-TECH) ============
function Positions() {
  const categories = [
    {
      name: "Private Military Contracting",
      shortName: "PMC",
      description: "PMC is the boots-on-the-ground Branch of Knight Division Tactical. Our disciplined and elite force executes private military missions CONUS & OCONUS, conducting everything from crisis relief to complex expeditionary operations. Each mission reflects our uncompromising commitment to excellence, to our clients and to our standard of virtue.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      accentColor: "#ef4444",
      positions: [
        { title: "Knight", slug: "knight" },
        { title: "Medical Element", slug: "medical-element" },
        { title: "Communications Element", slug: "communications-element" },
        { title: "Fixed & Rotary Wing Pilot", slug: "pilot" },
        { title: "Drone Pilot", slug: "drone-operator" },
      ]
    },
    {
      name: "Central Intelligence Command",
      shortName: "CIC",
      description: "The Central Intelligence Command (CIC) is the core of KDT, dedicated to ensuring the strategic integration of Intelligence, Legal, and Logistics support to our elite security, military & defense operations.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      accentColor: "#3b82f6",
      positions: [
        { title: "Intelligence", slug: "intelligence-unit" },
        { title: "Legal", slug: "legal-unit" },
        { title: "Logistics", slug: "logistics" },
      ]
    },
    {
      name: "SPEAR",
      shortName: "SPEAR",
      description: "SPEAR is electric. High energy, high intellect and high performance; SPEAR makes the deal, controls the marketing, shakes the hand and signs the contract. Our Account Executives have the highest commission rates and the highest bonuses in the industry.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      accentColor: "#a855f7",
      positions: [
        { title: "Business Development Unit", slug: "account-executive" },
        { title: "Propaganda Unit", slug: "propagandist" },
      ]
    },
    {
      name: "Military Industrial Command",
      shortName: "MIC",
      description: "The Military Industrial Command (MIC) is the branch of Knight Division Tactical responsible for designing, building, and sustaining the physical, mechanical, and technical infrastructure that empowers our missions worldwide.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      accentColor: "#f59e0b",
      positions: [
        { title: "Construction Unit", slug: "construction-maintenance" },
        { title: "Manufacturing Unit", slug: "manufacturing-unit" },
        { title: "Engineering Unit", slug: "engineering-unit" },
      ]
    },
  ];

  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
      }} />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#f97316]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[120px]" />
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse" />
            <span className="text-[13px] text-gray-400">Now Hiring</span>
          </div>
          <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-white leading-tight mb-4">
            Open Positions
          </h2>
          <p className="text-[18px] text-gray-400">
            Join the movement. Find your role at KDT.
          </p>
        </div>
        
        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                activeCategory === i 
                  ? 'bg-white/10 border-white/20 text-white' 
                  : 'bg-transparent border-white/5 text-gray-500 hover:text-gray-300 hover:border-white/10'
              }`}
            >
              <span style={{ color: activeCategory === i ? category.accentColor : 'inherit' }}>
                {category.icon}
              </span>
              <span className="text-[14px] font-medium hidden sm:inline">{category.name}</span>
              <span className="text-[14px] font-medium sm:hidden">{category.shortName}</span>
              <span className={`text-[12px] px-1.5 py-0.5 rounded ${
                activeCategory === i ? 'bg-white/10' : 'bg-white/5'
              }`}>
                {category.positions.length}
              </span>
            </button>
          ))}
        </div>
        
        {/* Branch description */}
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <p className="text-[15px] text-gray-400 leading-relaxed">
            {categories[activeCategory].description}
          </p>
        </div>
        
        {/* Positions grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {categories[activeCategory].positions.map((position, j) => (
            <PositionCard 
              key={j}
              title={position.title}
              slug={position.slug}
              accentColor={categories[activeCategory].accentColor}
            />
          ))}
        </div>
        
        {/* View all link */}
        <div className="mt-12 text-center">
          <p className="text-[14px] text-gray-500">
            {categories.reduce((acc, cat) => acc + cat.positions.length, 0)} total positions across {categories.length} departments
          </p>
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
          Don't see your role? We're always looking for exceptional talent.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="px-6 py-3 bg-white text-black text-[15px] font-medium rounded-lg hover:bg-gray-100 transition-all">
            Contact Us
          </Link>
          <Link href="/training" className="px-6 py-3 bg-[#f97316] text-black text-[15px] font-medium rounded-lg hover:bg-[#f97316]/90 transition-all">
            View Training
          </Link>
        </div>
      </div>
    </section>
  );
}

// ============ DYNAMIC COPYRIGHT ============
function DynamicCopyright({ startYear = 2024, companyName = "Knight Division Tactical" }: { startYear?: number; companyName?: string }) {
  const currentYear = new Date().getFullYear();
  const yearDisplay = startYear === currentYear ? `${currentYear}` : `${startYear}–${currentYear}`;
  
  return (
    <span className="text-[14px] text-gray-500">
      © {yearDisplay} {companyName}. All rights reserved.
    </span>
  );
}

// ============ FOOTER ============
function Footer() {
  return (
    <footer className="py-8 px-6 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <DynamicCopyright startYear={2024} companyName="Knight Division Tactical" />
          <div className="flex flex-wrap items-center justify-center gap-6 text-[14px]">
            <Link href="/terms" className="text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============ PAGE ============
export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <Nav activePath="/careers" />
      <Hero />
      <Intro />
      <Benefits />
      <Positions />
      <CTA />
      <Footer />
    </main>
  );
}
