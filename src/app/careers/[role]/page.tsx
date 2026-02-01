"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import ApplicationForm from "./ApplicationForm";

// Role definitions with detailed content from live site
const roles: Record<string, {
  title: string;
  category: string;
  badge: string;
  description: string;
  fullDescription: string[];
  requirements: string[];
  formSections: ("military" | "technical" | "sales" | "medical")[];
}> = {
  "knight": {
    title: "Knight (Private Military Contractor)",
    category: "Private Military Contracting",
    badge: "bg-red-500/10 text-red-400",
    description: "Elite private military contractor positions for operators who embody professionalism, capability and virtue.",
    fullDescription: [
      "Knights are the primary boots-on-the-ground operators of Knight Division Tactical's private military capability. They conduct direct combat operations, armed security, crisis response, and stability missions in environments ranging from active conflict zones to large-scale disaster areas where conventional systems have failed.",
      "Knights are selected and trained to operate as technologically enabled combat professionals. They integrate advanced communications, intelligence, tracking, and operational systems to maintain dominance, coordination, and decision superiority in complex environments.",
      "Whether engaging hostile forces, securing critical infrastructure, or stabilizing chaotic disaster zones, Knights are expected to function autonomously, apply force lawfully and decisively, and adapt faster than adversaries or circumstances."
    ],
    requirements: [
      "Military background required (Tier 1 or Tier 2 preferred)",
      "SOF experience preferred",
      "Active security clearance",
      "Willingness to deploy globally",
      "Firearm licenses by state",
      "Guard card certifications"
    ],
    formSections: ["military"],
  },
  "medical-element": {
    title: "Medical Element",
    category: "Private Military Contracting",
    badge: "bg-red-500/10 text-red-400",
    description: "Combat medics providing embedded medical support across KDT's private military and crisis response operations.",
    fullDescription: [
      "The Medical Element provides embedded medical support across KDT's private military and crisis response operations. Medical operators deploy alongside Knights in combat zones, disaster areas, and austere environments where casualties, trauma, and prolonged care are expected.",
      "This element integrates advanced medical equipment, data-driven triage systems, and field-expedient care protocols to sustain life when evacuation is delayed or unavailable.",
      "Medical personnel must be capable of operating under fire, during mass-casualty events, and in collapsed infrastructure environments while maintaining clinical precision under extreme pressure."
    ],
    requirements: [
      "Military medical background",
      "TCCC/TECC certification",
      "Austere environment experience",
      "Trauma care experience",
      "Active medical certifications"
    ],
    formSections: ["military", "medical"],
  },
  "communications-element": {
    title: "Communications Element",
    category: "Private Military Contracting",
    badge: "bg-red-500/10 text-red-400",
    description: "Tactical communications specialists enabling command, control, and coordination across all KDT operations.",
    fullDescription: [
      "The Communications Element enables command, control, and coordination across all KDT operations. This Element establishes resilient, secure communications networks in denied, degraded, and destroyed environments, including combat zones and disaster areas with no functioning infrastructure.",
      "Communications operators deploy and manage radios, satellite systems, data networks, and integrated command platforms that allow KDT forces to operate as a unified, technology-driven force.",
      "Their work enables real-time coordination, intelligence flow, and operational control, giving KDT a decisive advantage over both adversaries and the environment itself."
    ],
    requirements: [
      "Military communications background",
      "Technical certifications",
      "Experience with secure comms systems",
      "Ability to operate in austere environments"
    ],
    formSections: ["military"],
  },
  "intelligence-unit": {
    title: "Intelligence Unit",
    category: "Private Military Contracting",
    badge: "bg-red-500/10 text-red-400",
    description: "Intelligence analysts and collectors providing operational support and decision superiority.",
    fullDescription: [
      "The Intelligence Unit provides critical analytical and collection support across KDT operations. Analysts process information from multiple sources to create actionable intelligence products that inform operational decisions.",
      "Personnel must demonstrate the ability to produce analysis products used in operational settings, deliver time-sensitive briefs, and integrate data from diverse collection platforms.",
      "This unit works closely with Knights, Communications, and command elements to maintain the information advantage that defines KDT operations."
    ],
    requirements: [
      "Military intelligence background",
      "Analysis experience",
      "Security clearance",
      "Experience producing intelligence products"
    ],
    formSections: ["military"],
  },
  "pilot": {
    title: "KDT Pilot Fixed and Rotary Wing",
    category: "Private Military Contracting",
    badge: "bg-red-500/10 text-red-400",
    description: "Pilots providing aviation capability in support of KDT's private military and crisis response operations.",
    fullDescription: [
      "Fixed and Rotary Wing Pilots provide aviation capability in support of KDT's private military and crisis response operations. Pilots operate fixed-wing and rotary-wing aircraft in permissive, degraded, and hostile environments to enable mobility, reconnaissance, resupply, casualty evacuation, and mission support.",
      "This role requires the ability to fly in austere conditions, operate from unimproved or damaged airfields, and integrate aviation assets into ground operations using advanced navigation, communications, and mission-planning systems.",
      "KDT pilots are expected to function as part of a technologically integrated force, supporting combat operations, disaster relief, and time-sensitive missions where speed, precision, and reliability are critical."
    ],
    requirements: [
      "Military aviation background",
      "Active pilot certifications",
      "Combat experience preferred",
      "Ability to operate in austere conditions"
    ],
    formSections: ["military"],
  },
  "drone-operator": {
    title: "Drone Operator",
    category: "Private Military Contracting",
    badge: "bg-red-500/10 text-red-400",
    description: "UAS operators providing real-time aerial awareness and reconnaissance across KDT operations.",
    fullDescription: [
      "Drone Pilots operate unmanned aerial systems in support of KDT's private military, intelligence, and crisis response missions. They provide real-time aerial awareness, reconnaissance, targeting support, and operational overwatch in environments ranging from active conflict zones to disaster areas with limited visibility or access.",
      "This role requires technical proficiency, disciplined judgment, and the ability to integrate sensor data into live operations.",
      "Drone Pilots work closely with ground elements, command staff, and intelligence personnel to extend KDT's reach and decision-making advantage."
    ],
    requirements: [
      "Drone operation experience",
      "Military background preferred",
      "Technical proficiency with UAS systems",
      "Ability to integrate with ground operations"
    ],
    formSections: ["military"],
  },
  "account-executive": {
    title: "Account Executive",
    category: "SPEAR Branch",
    badge: "bg-purple-500/10 text-purple-400",
    description: "Sales professionals driving growth by securing high-value contracts and expanding KDT's client relationships.",
    fullDescription: [
      "The Business Development Unit is responsible for identifying, securing, and expanding high-value contracts that enable KDT's private military, crisis response, and technology-driven operations.",
      "Personnel in this unit are expected to understand KDT's operational capabilities at a deep level and translate them into actionable opportunities.",
      "This role requires discipline, credibility, and the ability to operate independently in high-stakes environments. The Account Executive is a remote contractor with full control over hours, location, and methodology.",
      "One contract could change your life. Pure commission, 10% per sale."
    ],
    requirements: [
      "Sales background with proven track record",
      "Contract acquisition experience",
      "Self-starter mentality",
      "Executive presence",
      "Commission-based compensation"
    ],
    formSections: ["sales"],
  },
  "propagandist": {
    title: "Propagandist",
    category: "SPEAR Branch",
    badge: "bg-purple-500/10 text-purple-400",
    description: "Strategic communications specialists shaping perception and narrative surrounding KDT operations.",
    fullDescription: [
      "The Propaganda Unit shapes perception, narrative, and influence surrounding KDT and its operations. This unit is responsible for strategic messaging, information positioning, and influence efforts that support recruitment, brand dominance, and operational legitimacy.",
      "Personnel in this unit operate with precision and intent, leveraging modern media, platforms, and information systems to control narrative space and project strength, credibility, and authority.",
      "We are specifically interested in Marketers, Clippers, those with incredible editing skills and individuals that are extremely perceptive with high emotional and verbal intelligence."
    ],
    requirements: [
      "Content creation experience",
      "Marketing or communications background",
      "High emotional and verbal intelligence",
      "Video editing skills preferred",
      "Understanding of modern media platforms"
    ],
    formSections: ["sales"],
  },
  "legal-unit": {
    title: "Legal Unit",
    category: "Corporate",
    badge: "bg-purple-500/10 text-purple-400",
    description: "Legal professionals ensuring KDT operates within regulatory frameworks worldwide.",
    fullDescription: [
      "The Legal Unit provides comprehensive legal support across all KDT operations, ensuring compliance with international law, contracts, and regulatory requirements.",
      "Personnel handle contract review, regulatory compliance, risk assessment, and legal strategy for a company operating in complex global environments."
    ],
    requirements: [
      "Legal background required",
      "Contract law experience",
      "Understanding of international regulations"
    ],
    formSections: [],
  },
  "construction-maintenance": {
    title: "Construction / Maintenance Unit",
    category: "Military Industrial Command",
    badge: "bg-amber-500/10 text-amber-400",
    description: "Construction professionals building and sustaining physical infrastructure for KDT missions.",
    fullDescription: [
      "The Construction Unit is responsible for building, repairing, and sustaining the physical infrastructure required for KDT's missions.",
      "Personnel in this unit must be skilled, adaptable, and capable of delivering high-quality work with speed, precision, and discipline.",
      "This is the team that ensures KDT can establish, expand, or reinforce operational capability anywhere in the world."
    ],
    requirements: [
      "Construction experience",
      "Skilled trades background",
      "Ability to work in remote environments"
    ],
    formSections: [],
  },
  "manufacturing-unit": {
    title: "Manufacturing Unit",
    category: "Military Industrial Command",
    badge: "bg-amber-500/10 text-amber-400",
    description: "Manufacturing specialists producing mission-critical components and systems.",
    fullDescription: [
      "The Manufacturing Unit produces the components, assemblies, and fabricated systems that support KDT's operational and industrial capabilities.",
      "Personnel in this unit must be disciplined, precise, fast, and capable of maintaining quality under pressure."
    ],
    requirements: [
      "Manufacturing experience",
      "Machining or fabrication skills",
      "Quality control mindset"
    ],
    formSections: [],
  },
  "engineering-unit": {
    title: "Engineering Unit",
    category: "Military Industrial Command",
    badge: "bg-amber-500/10 text-amber-400",
    description: "Engineers designing, analyzing, and optimizing systems for KDT operations.",
    fullDescription: [
      "The Engineering Unit is responsible for designing, analyzing, and optimizing the systems, structures, and technologies that support KDT's global missions.",
      "Engineers must demonstrate precision, clear reasoning, adaptability, and the ability to solve complex problems under pressure."
    ],
    requirements: [
      "Engineering degree or equivalent",
      "Problem-solving skills",
      "Technical proficiency"
    ],
    formSections: ["technical"],
  },
  "logistics": {
    title: "Logistics",
    category: "Operations",
    badge: "bg-amber-500/10 text-amber-400",
    description: "Logistics specialists ensuring KDT operations have the resources they need.",
    fullDescription: [
      "The Logistics team ensures that KDT operations have the personnel, equipment, and resources required for mission success.",
      "This team keeps KDT operational by ensuring nothing is missing when it matters most."
    ],
    requirements: [
      "Logistics or supply chain experience",
      "Organizational skills",
      "Attention to detail"
    ],
    formSections: [],
  },
  "ai-developer": {
    title: "AI Developer",
    category: "Technical",
    badge: "bg-blue-500/10 text-blue-400",
    description: "AI/ML engineers building proprietary crisis prediction and risk assessment systems.",
    fullDescription: [
      "AI Developers at KDT build the proprietary systems that give our operations a technological edge.",
      "You'll work on cutting-edge AI applications in a unique domain where your work directly impacts operational outcomes."
    ],
    requirements: [
      "AI/ML experience",
      "Python proficiency",
      "Production deployment experience"
    ],
    formSections: ["technical"],
  },
  "blockchain-developer": {
    title: "Blockchain Developer",
    category: "Technical",
    badge: "bg-blue-500/10 text-blue-400",
    description: "Blockchain engineers developing secure, decentralized systems.",
    fullDescription: [
      "Blockchain Developers at KDT build secure, decentralized systems that support our operational and financial infrastructure."
    ],
    requirements: [
      "Smart contract development",
      "Solidity or equivalent",
      "Security focus"
    ],
    formSections: ["technical"],
  },
  "programmer": {
    title: "Programmer",
    category: "Technical",
    badge: "bg-blue-500/10 text-blue-400",
    description: "Software engineers building internal systems and client solutions.",
    fullDescription: [
      "Programmers at KDT build the software that powers our operations—from internal tools to client-facing platforms."
    ],
    requirements: [
      "Programming experience",
      "Full-stack preferred",
      "Problem-solving skills"
    ],
    formSections: ["technical"],
  },
  "hacker": {
    title: "Hacker",
    category: "Technical",
    badge: "bg-blue-500/10 text-blue-400",
    description: "Offensive security specialists protecting KDT systems.",
    fullDescription: [
      "Hackers at KDT conduct offensive security operations, penetration testing, and vulnerability assessments."
    ],
    requirements: [
      "Penetration testing experience",
      "Bug bounties or CTF experience",
      "Security tools proficiency"
    ],
    formSections: ["technical"],
  },
};

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
              className={`px-4 py-2 text-[15px] transition-colors ${item.href === '/careers' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
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
export default function RolePage() {
  const params = useParams();
  const roleSlug = params.role as string;
  const role = roles[roleSlug];
  
  if (!role) {
    return (
      <main className="min-h-screen bg-[#0a0a0a]">
        <Nav />
        <div className="pb-24 px-6 text-center" style={{ paddingTop: '8rem' }}>
          <h1 className="text-[32px] font-bold text-white mb-4">Role Not Found</h1>
          <Link href="/careers" className="text-[#f97316] hover:underline">Back to Careers</Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Nav />
      
      {/* Hero */}
      <section className="relative bg-[#0a0a0a] pb-16 px-6" style={{ paddingTop: '8rem' }}>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.08),transparent_70%)]" />
        </div>
        
        <div className="relative z-10 max-w-[1200px] mx-auto">
          <Link href="/careers" className="inline-flex items-center gap-2 text-[14px] text-gray-500 hover:text-white transition-colors mb-8">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Careers
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <span className={`px-3 py-1 rounded-md text-[13px] font-medium ${role.badge}`}>
              {role.category}
            </span>
          </div>
          
          <h1 className="text-[clamp(32px,4vw,48px)] font-bold text-white mb-4">
            {role.title}
          </h1>
          
          <p className="text-[18px] text-gray-400 max-w-3xl">
            {role.description}
          </p>
        </div>
      </section>
      
      {/* Role Details */}
      <section className="py-16 px-6 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-[24px] font-bold text-white mb-6">About This Role</h2>
              <div className="space-y-4 text-[16px] text-gray-400 leading-relaxed">
                {role.fullDescription.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
            
            <div>
              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10 sticky top-24">
                <h3 className="text-[18px] font-semibold text-white mb-4">Requirements</h3>
                <ul className="space-y-3">
                  {role.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] mt-2 flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Application Form */}
      <section className="py-16 px-6 bg-[#050510] relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#f97316]/5 rounded-full blur-[150px]" />
        
        <div className="max-w-[800px] mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-[32px] font-bold text-white mb-3">Apply Now</h2>
            <p className="text-gray-400">Complete the form below to begin your journey with KDT.</p>
          </div>
          <ApplicationForm role={role.title} formSections={role.formSections} />
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
