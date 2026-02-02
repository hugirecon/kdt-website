"use client";

import Link from "next/link";
import Nav from "@/components/Nav";

// ============ HERO ============
function Hero() {
  return (
    <section className="relative bg-[#0a0a0a] pb-24 px-6" style={{ paddingTop: '8rem' }}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.08),transparent_70%)]" />
      </div>
      
      <div className="relative z-10 max-w-[1200px] mx-auto text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-[13px] font-medium text-[#f97316] bg-[#f97316]/10 rounded-full border border-[#f97316]/20">
          Specialized Operations
        </div>
        <h1 className="text-[clamp(40px,5vw,56px)] font-bold text-white leading-[1.1] mb-6">
          Remote &
          <br />
          <span className="text-[#f97316]">Hazardous Environment Operations</span>
        </h1>
        <p className="text-[18px] text-gray-400 leading-relaxed max-w-[42rem] mx-auto">
          Where infrastructure meets wilderness. Specialized protection for personnel operating in environments where nature itself is the threat.
        </p>
      </div>
    </section>
  );
}

// ============ OVERVIEW ============
function Overview() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-gray-900 leading-tight mb-6">
              Beyond the Perimeter
            </h2>
            <p className="text-[17px] text-gray-600 leading-relaxed mb-6">
              Some of the world's most critical infrastructure exists in the planet's most unforgiving environments. Pipeline corridors through predator territory. Research stations in polar regions. Extraction operations where the nearest support is hours away.
            </p>
            <p className="text-[17px] text-gray-600 leading-relaxed mb-6">
              KDT provides specialized security for personnel operating in remote and hazardous environments where traditional security measures fall short and the threat matrix includes apex predators, extreme weather, and isolation.
            </p>
            <p className="text-[17px] text-gray-600 leading-relaxed">
              Our teams are trained for extended deployment in austere conditions, equipped to neutralize wildlife threats while maintaining the safety protocols required for high-risk industrial operations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: "Arctic", label: "Capable" },
              { stat: "24/7", label: "Overwatch" },
              { stat: "Rapid", label: "Response" },
              { stat: "Zero", label: "Tolerance" },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-gray-50 border border-gray-100 text-center">
                <div className="text-[28px] font-bold text-[#f97316] mb-1">{item.stat}</div>
                <div className="text-[14px] text-gray-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ CAPABILITIES ============
function Capabilities() {
  const capabilities = [
    {
      title: "Wildlife Threat Mitigation",
      description: "Lethal and non-lethal deterrence capabilities for predator management in active work zones.",
    },
    {
      title: "Polar Operations",
      description: "Specialized training and equipment for extreme cold weather deployment and extended arctic operations.",
    },
    {
      title: "Pipeline & Corridor Security",
      description: "Mobile security for linear infrastructure projects spanning hundreds of miles through remote terrain.",
    },
    {
      title: "Extraction Site Protection",
      description: "Comprehensive security for mining, drilling, and resource extraction operations in isolated locations.",
    },
    {
      title: "Emergency Medical Integration",
      description: "Trauma-capable personnel prepared for medical emergencies when evacuation isn't immediately possible.",
    },
    {
      title: "Environmental Awareness",
      description: "Deep understanding of terrain, weather patterns, and wildlife behavior in operational planning.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(32px,4vw,44px)] font-bold text-white leading-tight mb-4">
            Capabilities
          </h2>
          <p className="text-[18px] text-gray-400 max-w-[42rem] mx-auto">
            Purpose-built solutions for environments that demand more than conventional security.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-[18px] font-semibold text-white mb-3">{cap.title}</h3>
              <p className="text-[15px] text-gray-400 leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ CTA ============
function CTA() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[600px] mx-auto text-center">
        <h2 className="text-[36px] md:text-[44px] font-bold text-gray-900 mb-4 leading-tight">
          Operations Beyond<br />
          <span className="text-[#f97316]">The Edge</span>
        </h2>
        <p className="text-[16px] text-gray-600 mb-8">
          Discuss your remote operations security requirements with our specialized team.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact/services" className="px-6 py-3 bg-[#0a0a0a] text-white text-[15px] font-medium rounded-lg hover:bg-black transition-all">
            Request Consultation
          </Link>
          <Link href="/services" className="px-6 py-3 bg-gray-100 text-gray-900 text-[15px] font-medium rounded-lg hover:bg-gray-200 transition-all">
            All Services
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

export default function RemoteOperationsPage() {
  return (
    <main className="min-h-screen">
      <Nav activePath="/services" />
      <Hero />
      <Overview />
      <Capabilities />
      <CTA />
      <Footer />
    </main>
  );
}
