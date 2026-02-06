"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import GlowCard from "@/components/GlowCard";
import FloatingMockup from "@/components/FloatingMockup";
import LogoTicker from "@/components/LogoTicker";
import StatCard from "@/components/StatCard";
import { BentoGrid, BentoItem } from "@/components/BentoGrid";
import Nav from "@/components/Nav";

const ParticleBackground = dynamic(() => import("@/components/ParticleBackground"), { ssr: false });
const Shadertoy = dynamic(() => import("@/components/Shadertoy"), { ssr: false });
const Globe = dynamic(() => import("@/components/Globe"), { ssr: false });
const MetallicDotGrid = dynamic(() => import("@/components/MetallicDotGrid"), { ssr: false });

// ============ HERO ============
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#f97316]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
      
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pb-20" style={{ paddingTop: '8rem' }}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse" />
              <span className="text-[13px] text-gray-400">Now accepting contracts worldwide</span>
            </motion.div>
            
            <h1 className="text-[clamp(40px,5vw,64px)] font-bold text-white leading-[1.1] tracking-tight mb-6">
              The Premier
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] to-emerald-400">
                Private Security
              </span>
              <br />
              Firm
            </h1>
            
            <p className="text-[18px] text-gray-400 leading-relaxed mb-8 max-w-[480px]">
              Knight Division Tactical combines uncompromising excellence, strategic innovation, and global reach to deliver unconquerable protection.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/hire" 
                className="group inline-flex items-center gap-2 px-6 py-3 bg-[#f97316] text-black font-medium rounded-lg hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all"
              >
                Hire KDT
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 px-6 py-3 text-white font-medium rounded-lg border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
          
          {/* Right - Floating mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <FloatingMockup>
              <div className="relative">
                {/* Mock dashboard */}
                <div className="rounded-2xl bg-[#0a0a15]/80 backdrop-blur-xl border border-white/10 p-6 shadow-2xl">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                    <span className="ml-2 text-[12px] text-gray-500">Mission Terminal</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="text-[11px] text-gray-500 mb-1">ACTIVE OPERATIONS</div>
                      <div className="text-[28px] font-bold text-[#f97316]">24</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="text-[11px] text-gray-500 mb-1">AGENTS DEPLOYED</div>
                      <div className="text-[28px] font-bold text-white">187</div>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="text-[11px] text-gray-500 mb-2">GLOBAL COVERAGE</div>
                    <div className="h-24 relative">
                      <div className="absolute inset-0 opacity-30">
                        {/* World map placeholder */}
                        <div className="w-full h-full bg-gradient-to-r from-[#f97316]/20 via-transparent to-[#f97316]/20 rounded-lg" />
                      </div>
                      <div className="absolute top-1/2 left-1/4 w-2 h-2 rounded-full bg-[#f97316] animate-ping" />
                      <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-[#f97316] animate-ping" style={{ animationDelay: "0.5s" }} />
                      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-[#f97316] animate-ping" style={{ animationDelay: "1s" }} />
                    </div>
                  </div>
                </div>
              </div>
            </FloatingMockup>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============ LOGO TICKER ============
function Clients() {
  return (
    <section className="relative py-12 border-y border-white/5">
      <div className="text-center mb-6">
        <span className="text-[13px] text-gray-500 uppercase tracking-wider">Trusted by organizations worldwide</span>
      </div>
      <LogoTicker 
        items={[
          "Fortune 500 Companies",
          "Government Agencies", 
          "Executive Protection",
          "Global Enterprises",
          "Financial Institutions",
          "Tech Companies",
          "Media Organizations",
          "High-Net-Worth Individuals",
        ]} 
      />
    </section>
  );
}

// ============ STATS ============
function Stats() {
  return (
    <section className="relative py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard value="400+" label="KDT Agents" description="Elite operators worldwide" />
          <StatCard value="99%" label="Mission Success" description="Track record of excellence" />
          <StatCard value="24/7" label="Response Ready" description="Global deployment capability" />
          <StatCard value="#1" label="Industry Pay" description="Highest compensation" />
        </div>
      </div>
    </section>
  );
}

// ============ BENTO FEATURES ============
function Features() {
  return (
    <section className="relative py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-white mb-4">
            What Sets Us Apart
          </h2>
          <p className="text-[18px] text-gray-400" style={{ maxWidth: "42rem", marginLeft: "auto", marginRight: "auto" }}>
            Technology-enabled security with the highest caliber of personnel.
          </p>
        </motion.div>
        
        <BentoGrid>
          {/* Large card */}
          <BentoItem colSpan={2} rowSpan={2}>
            <GlowCard className="h-full p-8">
              <div className="h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-[#f97316]/10 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-[24px] font-bold text-white mb-3">AI-Powered Intelligence</h3>
                <p className="text-gray-400 mb-6 flex-1">
                  Our proprietary Mission Terminal platform provides real-time threat assessment, predictive analytics, and operational coordination powered by cutting-edge AI.
                </p>
                <div className="p-4 rounded-xl bg-black/30 border border-white/5">
                  <div className="flex items-center gap-2 text-[13px] text-[#f97316] font-mono">
                    <span className="animate-pulse">●</span> System operational • 24 active missions
                  </div>
                </div>
              </div>
            </GlowCard>
          </BentoItem>
          
          {/* Small cards */}
          <BentoItem>
            <GlowCard className="h-full p-6">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-[18px] font-semibold text-white mb-2">Global Reach</h3>
              <p className="text-[14px] text-gray-400">Rapid deployment anywhere in the world within hours.</p>
            </GlowCard>
          </BentoItem>
          
          <BentoItem>
            <GlowCard className="h-full p-6">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-[18px] font-semibold text-white mb-2">Elite Personnel</h3>
              <p className="text-[14px] text-gray-400">Tier 1 & Tier 2 military veterans only.</p>
            </GlowCard>
          </BentoItem>
          
          <BentoItem>
            <GlowCard className="h-full p-6" glowColor="rgba(234, 179, 8, 0.15)">
              <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-[18px] font-semibold text-white mb-2">Top Compensation</h3>
              <p className="text-[14px] text-gray-400">Highest pay in the industry, guaranteed.</p>
            </GlowCard>
          </BentoItem>
          
          <BentoItem colSpan={2}>
            <GlowCard className="h-full p-6" glowColor="rgba(239, 68, 68, 0.15)">
              <div className="flex items-start gap-6">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[18px] font-semibold text-white mb-2">Crisis Response</h3>
                  <p className="text-[14px] text-gray-400">24/7 rapid response capability for crisis situations. From natural disasters to hostile environments, we deploy when others can't.</p>
                </div>
              </div>
            </GlowCard>
          </BentoItem>
        </BentoGrid>
      </div>
    </section>
  );
}

// ============ GLOBAL OPERATIONS (GLOBE) ============
function GlobalOperations() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-[#0a0a15] to-[#050510]" />
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <Globe className="w-full max-w-[500px] mx-auto" />
          </motion.div>
          
          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse" />
              <span className="text-[13px] text-gray-400">Worldwide Deployment</span>
            </div>
            
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-white leading-tight mb-6">
              Global Reach,
              <br />
              <span className="text-[#f97316]">Local Precision</span>
            </h2>
            
            <p className="text-[17px] text-gray-400 leading-relaxed mb-8">
              KDT maintains operational capability across six continents. Our rapid deployment 
              infrastructure ensures we can have boots on the ground within hours, anywhere in the world.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-[32px] font-bold text-[#f97316]">24/7</div>
                <div className="text-[14px] text-gray-500">Response Ready</div>
              </div>
              <div>
                <div className="text-[32px] font-bold text-white">6</div>
                <div className="text-[14px] text-gray-500">Continents Covered</div>
              </div>
              <div>
                <div className="text-[32px] font-bold text-white">&lt;48h</div>
                <div className="text-[14px] text-gray-500">Deployment Time</div>
              </div>
              <div>
                <div className="text-[32px] font-bold text-white">100+</div>
                <div className="text-[14px] text-gray-500">Countries Accessible</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============ SERVICES ============
function Services() {
  const services = [
    { title: "Executive Protection", desc: "Discreet, professional protection for high-profile individuals." },
    { title: "Event Security", desc: "Comprehensive security for events of all sizes." },
    { title: "Global Operations", desc: "Rapid deployment capabilities worldwide." },
    { title: "Risk Assessment", desc: "Thorough security audits and vulnerability analysis." },
    { title: "Training Programs", desc: "World-class tactical and security training." },
    { title: "Crisis Response", desc: "24/7 rapid response for emergency situations." },
  ];

  return (
    <section className="relative py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-[18px] text-gray-400" style={{ maxWidth: "42rem", marginLeft: "auto", marginRight: "auto" }}>
            Comprehensive security solutions tailored to your needs.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlowCard className="p-6 h-full">
                <h3 className="text-[17px] font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-[14px] text-gray-400">{service.desc}</p>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ CTA ============
function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Shadertoy background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <Shadertoy shader="plasma" />
      </div>
      
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-[#f97316]/10 rounded-full blur-[150px]" />
      </div>
      
      <div className="relative z-10 max-w-[600px] mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[clamp(36px,5vw,56px)] font-bold text-white mb-6 leading-tight">
            Ready to<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] to-emerald-400">
              Get Started?
            </span>
          </h2>
          <p className="text-[18px] text-gray-400 mb-8">
            Join the elite. Experience security without compromise.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/hire" 
              className="px-8 py-4 bg-[#f97316] text-black text-[16px] font-medium rounded-lg hover:shadow-[0_0_40px_rgba(249,115,22,0.4)] transition-all"
            >
              Request Consultation
            </Link>
            <Link 
              href="/careers" 
              className="px-8 py-4 text-white text-[16px] font-medium rounded-lg border border-white/10 hover:bg-white/5 transition-all"
            >
              View Careers
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============ FOOTER ============
function Footer() {
  return (
    <footer className="relative z-10 py-12 px-6 border-t border-white/10 bg-[#050510]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="KDT" className="w-8 h-8 object-contain" />
              <span className="text-white font-semibold text-lg">KDT</span>
            </Link>
            <p className="text-[14px] text-gray-500">
              The highest echelon of private security.
            </p>
          </div>
          
          <div>
            <h4 className="text-[13px] text-gray-400 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-[14px] text-gray-500 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/team" className="text-[14px] text-gray-500 hover:text-white transition-colors">Team</Link></li>
              <li><Link href="/careers" className="text-[14px] text-gray-500 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="text-[14px] text-gray-500 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[13px] text-gray-400 uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-[14px] text-gray-500 hover:text-white transition-colors">All Services</Link></li>
              <li><Link href="/hire" className="text-[14px] text-gray-500 hover:text-white transition-colors">Hire KDT</Link></li>
              <li><Link href="/training" className="text-[14px] text-gray-500 hover:text-white transition-colors">Training</Link></li>
              <li><Link href="/contact" className="text-[14px] text-gray-500 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[13px] text-gray-400 uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2 text-[14px] text-gray-500">
              <li>contact@knightdivisiontactical.com</li>
              <li>New York, NY</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[14px] text-gray-500">
            © {new Date().getFullYear()} Knight Division Tactical. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-[14px] text-gray-500 hover:text-white transition-colors">Terms</Link>
            <Link href="/privacy" className="text-[14px] text-gray-500 hover:text-white transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============ PAGE ============
export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050510] text-white relative">
      {/* Metallic Dot Grid Background */}
      <div className="fixed inset-0 z-0">
        <MetallicDotGrid 
          dotSize={6}
          gap={28}
          baseColor="#1a1a1a"
          activeColor="#f97316"
          proximity={100}
        />
      </div>
      <Nav />
      <Hero />
      <Clients />
      <Stats />
      <Features />
      <GlobalOperations />
      <Services />
      <CTA />
      <Footer />
    </main>
  );
}
