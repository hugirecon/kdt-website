"use client";

import React, { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import { motion } from "framer-motion";

// ============ SECTION HEADER ============
function SectionHeader({ title, id }: { title: string; id?: string }) {
  return (
    <div id={id} className="flex items-center gap-4 mb-8 scroll-mt-32">
      <h2 className="text-[clamp(28px,4vw,40px)] font-bold text-white whitespace-nowrap">
        {title}
      </h2>
      <div className="flex-1 h-[1px] bg-gradient-to-r from-[#f97316]/50 to-transparent" />
    </div>
  );
}

// ============ BRANCH CARD (TOP OVERVIEW) ============
function BranchCard({ 
  title, 
  description, 
  applyLink, 
  applyText,
  accentColor = "#f97316",
  delay = 0 
}: { 
  title: string; 
  description: React.ReactNode; 
  applyLink: string;
  applyText: string;
  accentColor?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
    >
      {/* Top accent */}
      <div 
        className="absolute top-0 left-6 right-6 h-[2px] rounded-full opacity-60"
        style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }}
      />
      
      <h3 className="text-[20px] font-semibold text-white mb-3">{title}</h3>
      <div className="text-[15px] text-gray-400 leading-relaxed mb-5">
        {description}
      </div>
      <Link
        href={applyLink}
        className="inline-flex items-center gap-2 text-[14px] font-medium transition-colors"
        style={{ color: accentColor }}
        target={applyLink.startsWith('http') ? '_blank' : undefined}
      >
        {applyText}
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </motion.div>
  );
}

// ============ ROLE CARD ============
function RoleCard({
  title,
  description,
  applyLink,
  applyText,
  accentColor = "#f97316",
}: {
  title: string;
  description: React.ReactNode;
  applyLink: string;
  applyText: string;
  accentColor?: string;
}) {
  return (
    <div className="group p-6 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] hover:bg-white/[0.03] transition-all duration-300">
      <div className="flex items-start gap-3 mb-3">
        <div 
          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
          style={{ backgroundColor: accentColor }}
        />
        <h4 className="text-[18px] font-semibold text-white">{title}</h4>
      </div>
      <div className="text-[14px] text-gray-400 leading-relaxed mb-4 pl-5">
        {description}
      </div>
      <div className="pl-5">
        <Link
          href={applyLink}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-medium transition-all border"
          style={{ 
            borderColor: `${accentColor}40`,
            color: accentColor,
          }}
          target={applyLink.startsWith('http') ? '_blank' : undefined}
        >
          {applyText}
          <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

// ============ UNIT CARD (FOR CIC) ============
function UnitCard({
  title,
  focus,
  functions,
  example,
  applyLink,
  applyText,
  accentColor = "#3b82f6",
}: {
  title: string;
  focus: string;
  functions: { name: string; desc: string }[];
  example: string;
  applyLink: string;
  applyText: string;
  accentColor?: string;
}) {
  return (
    <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.05]">
      <h4 className="text-[20px] font-semibold text-white mb-4">{title}</h4>
      
      <div className="mb-4">
        <span className="text-[13px] font-semibold text-white">Focus: </span>
        <span className="text-[14px] text-gray-400">{focus}</span>
      </div>
      
      <div className="mb-4">
        <span className="text-[13px] font-semibold text-white mb-2 block">Functions:</span>
        <ul className="space-y-2 pl-4">
          {functions.map((fn, i) => (
            <li key={i} className="text-[14px] text-gray-400">
              <span className="text-white font-medium">{fn.name}:</span> {fn.desc}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mb-5 p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
        <span className="text-[13px] font-semibold text-white">Example: </span>
        <span className="text-[14px] text-gray-400">{example}</span>
      </div>
      
      <Link
        href={applyLink}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-medium transition-all"
        style={{ 
          backgroundColor: `${accentColor}15`,
          color: accentColor,
        }}
        target="_blank"
      >
        {applyText}
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  );
}

// ============ HERO ============
function Hero() {
  return (
    <section className="relative bg-[#050508] pb-20 px-6" style={{ paddingTop: '8rem' }}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.06),transparent_60%)]" />
      </div>
      
      <div className="relative z-10 max-w-[1200px] mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[clamp(36px,5vw,56px)] font-bold text-white leading-[1.1] mb-6"
        >
          Join Knight Division Tactical
        </motion.h1>
        
        {/* Branch overview cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-12 text-left">
          <BranchCard
            title="Private Military Contracting (PMC)"
            description="PMC is the boots-on-the-ground Branch of Knight Division Tactical. Our disciplined and elite force executes private military missions CONUS & OCONUS, conducting everything from crisis relief to complex expeditionary operations. Each mission reflects our uncompromising commitment to excellence, to our clients and to our standard of virtue."
            applyLink="https://job-boards.greenhouse.io/knightdivisiontactical/jobs/5010680008"
            applyText="Apply for Private Military Contracting"
            accentColor="#ef4444"
            delay={0.1}
          />
          
          <BranchCard
            title="Central Intelligence Command (CIC)"
            description={
              <>The <strong className="text-white">Central Intelligence Command (CIC)</strong> is the core of KDT, dedicated to ensuring the strategic integration of <strong className="text-white">Intelligence</strong>, <strong className="text-white">Legal</strong>, and <strong className="text-white">Logistics</strong> support to our elite security, military & defense operations.</>
            }
            applyLink="#cic"
            applyText="Apply for Central Intelligence Command"
            accentColor="#3b82f6"
            delay={0.2}
          />
          
          <BranchCard
            title="Strategic Pursuit & Exploration of Acquisition and Relations (SPEAR)"
            description="SPEAR is electric. High energy, high intellect and high performance; SPEAR makes the deal, controls the marketing, shakes the hand and signs the contract. Our Account Executives have the highest commission rates and the highest bonuses in the industry. In the same breath, they work the hardest and are held to a level of excellence that other salespeople could only dream of. Our Propagandists are the marketing specialists behind KDT. They're rewarded for their genius by getting a cut from the fruit of their labor - directly tied to their actual performance."
            applyLink="#spear"
            applyText="Apply for SPEAR"
            accentColor="#a855f7"
            delay={0.3}
          />
          
          <BranchCard
            title="Military Industrial Command"
            description={
              <>The <strong className="text-white">Military Industrial Command (MIC)</strong> is the branch of Knight Division Tactical responsible for designing, building, and sustaining the physical, mechanical, and technical infrastructure that empowers our missions worldwide. It combines three operational units: <strong className="text-white">Construction</strong>, <strong className="text-white">Manufacturing</strong>, and <strong className="text-white">Engineering</strong>.</>
            }
            applyLink="#mic"
            applyText="Apply for Military Industrial Command"
            accentColor="#f59e0b"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}

// ============ PMC SECTION ============
function PMCSection() {
  const roles = [
    {
      title: "Knight",
      description: "Knights are the primary boots-on-the-ground operators of Knight Division Tactical's private military capability. They conduct direct combat operations, armed security, crisis response, and stability missions in environments ranging from active conflict zones to large-scale disaster areas where conventional systems have failed. Knights are selected and trained to operate as technologically enabled combat professionals. They integrate advanced communications, intelligence, tracking, and operational systems to maintain dominance, coordination, and decision superiority in complex environments. Whether engaging hostile forces, securing critical infrastructure, or stabilizing chaotic disaster zones, Knights are expected to function autonomously, apply force lawfully and decisively, and adapt faster than adversaries or circumstances.",
      applyLink: "https://job-boards.greenhouse.io/knightdivisiontactical/jobs/5010680008",
      applyText: "Apply to be a Knight",
    },
    {
      title: "Medical Element",
      description: "The Medical Element provides embedded medical support across KDT's private military and crisis response operations. Medical operators deploy alongside Knights in combat zones, disaster areas, and austere environments where casualties, trauma, and prolonged care are expected. This element integrates advanced medical equipment, data-driven triage systems, and field-expedient care protocols to sustain life when evacuation is delayed or unavailable. Medical personnel must be capable of operating under fire, during mass-casualty events, and in collapsed infrastructure environments while maintaining clinical precision under extreme pressure.",
      applyLink: "https://job-boards.greenhouse.io/knightdivisiontactical/jobs/5041254008",
      applyText: "Apply to be a Medic",
    },
    {
      title: "Communications Element",
      description: "The Communications Element enables command, control, and coordination across all KDT operations. This Element establishes resilient, secure communications networks in denied, degraded, and destroyed environments, including combat zones and disaster areas with no functioning infrastructure. Communications operators deploy and manage radios, satellite systems, data networks, and integrated command platforms that allow KDT forces to operate as a unified, technology-driven force. Their work enables real-time coordination, intelligence flow, and operational control, giving KDT a decisive advantage over both adversaries and the environment itself.",
      applyLink: "https://job-boards.greenhouse.io/knightdivisiontactical/jobs/5042819008",
      applyText: "Apply to Communications Unit",
    },
    {
      title: "Fixed & Rotary Wing Pilot",
      description: "Fixed and Rotary Wing Pilots provide aviation capability in support of KDT's private military and crisis response operations. Pilots operate fixed-wing and rotary-wing aircraft in permissive, degraded, and hostile environments to enable mobility, reconnaissance, resupply, casualty evacuation, and mission support. This role requires the ability to fly in austere conditions, operate from unimproved or damaged airfields, and integrate aviation assets into ground operations using advanced navigation, communications, and mission-planning systems. KDT pilots are expected to function as part of a technologically integrated force, supporting combat operations, disaster relief, and time-sensitive missions where speed, precision, and reliability are critical.",
      applyLink: "https://job-boards.greenhouse.io/knightdivisiontactical/jobs/4997508008",
      applyText: "Apply to be a Pilot",
    },
    {
      title: "Drone Pilot",
      description: "Drone Pilots operate unmanned aerial systems in support of KDT's private military, intelligence, and crisis response missions. They provide real-time aerial awareness, reconnaissance, targeting support, and operational overwatch in environments ranging from active conflict zones to disaster areas with limited visibility or access. This role requires technical proficiency, disciplined judgment, and the ability to integrate sensor data into live operations. Drone Pilots work closely with ground elements, command staff, and intelligence personnel to extend KDT's reach and decision-making advantage. Their capabilities enhance force protection, mission planning, and operational dominance through persistent aerial presence and data-driven insight.",
      applyLink: "https://job-boards.greenhouse.io/knightdivisiontactical/jobs/5048773008",
      applyText: "Apply to be a Drone Pilot",
    },
  ];

  return (
    <section id="pmc" className="py-20 px-6 bg-[#050508]">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader title="Private Military Contracting" />
        
        {/* Intro */}
        <div className="mb-12 p-6 rounded-xl bg-white/[0.02] border border-white/[0.05]">
          <h3 className="text-[20px] font-semibold text-white mb-4">Join Our Private Military Contracting (PMC) Branch</h3>
          <div className="space-y-4 text-[15px] text-gray-400 leading-relaxed">
            <p>We're open to hiring Private Military/Security Contractors who embody a rare combination of extensive industry experience and an unwavering commitment to continuous improvement. Our ideal candidates are seasoned professionals with a proven track record in the private military sector, demonstrating proficiency in various skillsets. While we highly value prior experience, we also recognize the dynamic nature of our field; thus, we seek individuals eager to undergo further training to stay at the forefront of military advancements.</p>
            <p>As innovators in the industry, Knight Division Tactical is proud to offer more than just another contract. We offer an opportunity to join a team dedicated to excellence. Recognizing the exceptional skills and commitment our elite KDT Agents bring to the table, we are proud to provide the highest compensation in the industry.</p>
            <p>KDT Agents have a level of freedom with when and how they work that truly sets us apart from anyone hoping to do the same. Once an Agent has been approved to work with us, our Mission Portal becomes visible to them, allowing personal selection of Missions after qualifying for a Unit.</p>
            <p className="text-white font-medium">Apply above to see if you're KDT material. All applications are welcomed.</p>
          </div>
        </div>
        
        {/* Roles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, i) => (
            <RoleCard
              key={i}
              title={role.title}
              description={role.description}
              applyLink={role.applyLink}
              applyText={role.applyText}
              accentColor="#ef4444"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ CIC SECTION ============
function CICSection() {
  return (
    <section id="cic" className="py-20 px-6 bg-[#07070a]">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader title="Central Intelligence Command" />
        
        {/* Overview */}
        <div className="mb-12 p-6 rounded-xl bg-white/[0.02] border border-white/[0.05]">
          <h3 className="text-[20px] font-semibold text-white mb-4">Overview</h3>
          <div className="space-y-4 text-[15px] text-gray-400 leading-relaxed">
            <p>One can expect the same level of professional acuity and tactical precision in KDT's Central Intelligence Command (CIC) that our on-the-ground personnel are known for. The Central Intelligence Command integrates three critical units to form a cohesive branch that supports the overarching mission of Knight Division Tactical. These units work independently with a focused collaborative effort.</p>
            <p>Through the seamless collaboration of intelligence gathering, legal oversight, and logistical support, the CIC ensures that all operations are conducted efficiently, legally, and with the highest level of operational readiness.</p>
            <p>The Central Intelligence Command is the core operational hub of Knight Division Tactical, dedicated to ensuring the strategic integration of intel, legal, and logs support to our elite security operations.</p>
            <p className="text-white">Below is a brief explanation of the roles and responsibilities of each unit within the CIC.</p>
          </div>
        </div>
        
        {/* Units */}
        <div className="grid md:grid-cols-3 gap-6">
          <UnitCard
            title="Intelligence"
            focus="To gather, analyze, and disseminate actionable intelligence to support tactical operations and strategic decision-making."
            functions={[
              { name: "Data Collection & Research", desc: "Employs advanced techniques to gather intelligence from various sources, including signals intelligence (SIGINT), human intelligence (HUMINT), and open-source intelligence (OSINT)." },
              { name: "Analysis and Reporting", desc: "Conducts detailed analysis of collected data to identify threats, trends, and opportunities, providing comprehensive reports to command units." },
              { name: "Surveillance and Reconnaissance", desc: "Executes surveillance operations and reconnaissance missions to support field operations and ensure situational awareness. Drones, UAVs and other technologies can be used to support the mission." },
            ]}
            example="Finding a Point of Contact (POC) with strategic information on their location, background, etc. for Account Executives to utilize during their outreach & acquisition."
            applyLink="https://job-boards.greenhouse.io/knightdivisiontactical/jobs/5042188008"
            applyText="Apply for Intelligence Unit"
            accentColor="#3b82f6"
          />
          
          <UnitCard
            title="Legal"
            focus="To provide expert legal counsel and ensure compliance with all relevant laws and regulations, safeguarding the integrity and legality of all operations."
            functions={[
              { name: "Advisory Services", desc: "Offers legal advice on operational matters, contract negotiations, and risk management, ensuring all actions are within legal parameters." },
              { name: "Regulatory Compliance", desc: "Ensures adherence to local, national, and international laws and regulations, particularly in the areas of defense, security, and contracting." },
              { name: "Litigation Support", desc: "Represents and defends the organization in legal proceedings, managing all aspects of litigation and dispute resolution." },
              { name: "Contract Management", desc: "Drafts, reviews, and oversees contracts and agreements to protect the organization's interests and ensure clear, enforceable terms." },
            ]}
            example="Expands our reach by obtaining licensure in various parts of the world."
            applyLink="https://job-boards.greenhouse.io/knightdivisiontactical/jobs/5051555008"
            applyText="Apply for Legal Unit"
            accentColor="#3b82f6"
          />
          
          <UnitCard
            title="Logistics"
            focus="To coordinate and manage the efficient movement, supply, and maintenance of resources to support operational readiness and effectiveness."
            functions={[
              { name: "Mission Assignment & Coordination", desc: "Manages the logistics of personnel and material movement, including transportation planning and execution." },
              { name: "Supply Chain Management", desc: "Oversees the procurement, storage, and distribution of equipment, supplies, and materials, ensuring they reach their destinations efficiently and aren't lost in the process." },
              { name: "Inventory Control", desc: "Maintains accurate records of inventory levels, conducts regular audits, and ensures the availability of critical resources." },
              { name: "Maintenance and Support", desc: "Ensures the maintenance and operational readiness of all equipment and facilities, providing logistical support for field operations." },
            ]}
            example="Planning a route and destination to stage personnel if need be."
            applyLink="https://job-boards.greenhouse.io/knightdivisiontactical/jobs/5042209008"
            applyText="Apply for Logistics Unit"
            accentColor="#3b82f6"
          />
        </div>
      </div>
    </section>
  );
}

// ============ SPEAR SECTION ============
function SPEARSection() {
  return (
    <section id="spear" className="py-20 px-6 bg-[#050508]">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader title="Strategic Pursuit & Exploration of Acquisition & Relations" />
        
        {/* Account Executive Intro */}
        <div className="mb-12 p-6 rounded-xl bg-white/[0.02] border border-white/[0.05]">
          <h3 className="text-[20px] font-semibold text-white mb-4">Join Our Account Executive Team</h3>
          <div className="space-y-4 text-[15px] text-gray-400 leading-relaxed">
            <p>We are seeking exceptional Account Executives to join our dynamic team. As a young, innovative Private Security Contracting company, we prioritize excellence, virtuosity, integrity, and a commitment to providing unparalleled security solutions to our clients. The ideal candidate for this role embodies the qualities of the best of the best in the industry. We want personnel who think outside the box, unconfined by the typical and ordinary. KDT is unstoppable and so you must be as well.</p>
            <p>The Account Executive is a remote contractor. This means that the hours worked, location, methodology and more is up to the Account Executive.</p>
          </div>
        </div>
        
        {/* Qualities & Offer Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Qualities We Value */}
          <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <h3 className="text-[20px] font-semibold text-white mb-4">Qualities We Value</h3>
            <div className="space-y-6 text-[15px] text-gray-400">
              <div>
                <p className="text-white font-semibold mb-2">1. Professionalism</p>
                <p className="mb-2"><strong className="text-white">Executive Presence:</strong> The ideal Account Executive at Knight Division Tactical exudes professionalism and possesses the presence of a KDT Executive. They are adept at representing our company with the highest level of professionalism in every interaction. This matters because you are a representation of who we chose to represent our company and represent all of the contractors that we have working on the ground, who are of the highest tier of tactical adeptness.</p>
                <p><strong className="text-white">Client-Focused Approach:</strong> We value individuals who prioritize client stability, building lasting relationships based on trust, professionalism, reliability, and an exceptional service.</p>
              </div>
              <div>
                <p className="text-white font-semibold mb-2">2. Morality and Integrity</p>
                <p><strong className="text-white">Moral Decision-Making:</strong> Upholding a strong moral compass is non-negotiable. Our Account Executives operate with the utmost integrity, making virtuous decisions that align with our company values.</p>
              </div>
              <div>
                <p className="text-white font-semibold mb-2">3. Impeccable Appearance</p>
                <p className="mb-2"><strong className="text-white">Representing the Brand:</strong> As the face of Knight Division Tactical, our Account Executives maintain a polished and professional appearance at all times. This reflects our commitment to excellence and attention to detail.</p>
                <p><strong className="text-white">Impressions:</strong> Understanding the significance of first and last impressions, our ideal candidate takes pride in presenting themselves in a manner that aligns with the high standards of being a Knight Division Tactical Account Executive.</p>
              </div>
            </div>
          </div>
          
          {/* What We Offer */}
          <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <h3 className="text-[20px] font-semibold text-white mb-4">What We Offer</h3>
            <div className="space-y-4 text-[15px] text-gray-400">
              <p><strong className="text-white">Competitive Compensation:</strong> We believe in rewarding excellence. Our tiered compensation rates are more than competitive, reflecting the value we place on the contributions of our Account Executives. One contract could change your life.</p>
              <p><strong className="text-white">Professional Growth:</strong> Join a team that encourages continuous learning and professional development. At Knight Division Tactical, we invest in the growth and success of our team members.</p>
              <p className="pt-4 border-t border-white/10 text-white">If you are an ambitious and highly motivated individual with a proven track record in sales, contract acquisition, and if you embody the values of professionalism, morality, and an impeccable appearance, we invite you to apply for the Account Executive position at Knight Division Tactical. Together, let's redefine excellence in private security contracting.</p>
            </div>
          </div>
        </div>
        
        {/* Units */}
        <div className="grid md:grid-cols-2 gap-6">
          <RoleCard
            title="Business Development Unit"
            description={
              <>
                <p className="mb-3">The Business Development Unit is responsible for identifying, securing, and expanding high-value contracts that enable KDT's private military, crisis response, and technology-driven operations. This unit operates at the intersection of strategy, relationships, and execution, engaging government entities, private organizations, and strategic partners worldwide.</p>
                <p className="mb-3">Personnel in this unit are expected to understand KDT's operational capabilities at a deep level and translate them into actionable opportunities. This role requires discipline, credibility, and the ability to operate independently in high-stakes environments where trust, timing, and positioning determine success. The Business Development Unit drives growth by placing KDT where it matters most.</p>
                <p>AE's might work in civilian & private sectors, with government agencies or all of the above.</p>
              </>
            }
            applyLink="https://job-boards.greenhouse.io/knightdivisiontactical/jobs/5025305008"
            applyText="Apply to be an Account Executive"
            accentColor="#a855f7"
          />
          
          <RoleCard
            title="Propaganda Unit"
            description={
              <>
                <p className="mb-3">The Propaganda Unit shapes perception, narrative, and influence surrounding KDT and its operations. This unit is responsible for strategic messaging, information positioning, and influence efforts that support recruitment, brand dominance, and operational legitimacy. Propagandists are paid uniquely, in a way that is directly tied to their effective output.</p>
                <p className="mb-3">Personnel in this unit operate with precision and intent, leveraging modern media, platforms, and information systems to control narrative space and project strength, credibility, and authority. This is deliberate influence designed to support operational goals, attract the right personnel, and reinforce KDT's standing in competitive and contested environments. Primarily assisting our SPEAR Branch, Propagandists are expected to work directly with Account Executives with different focuses as well as working directly with the CEO.</p>
                <p>We are specifically interested in Marketers, Clippers, those with incredible editing skills and individuals that are extremely perceptive with high emotional and verbal intelligence.</p>
              </>
            }
            applyLink="https://job-boards.greenhouse.io/knightdivisiontactical/jobs/5054746008"
            applyText="Apply to be a Propagandist"
            accentColor="#a855f7"
          />
        </div>
      </div>
    </section>
  );
}

// ============ MIC SECTION ============
function MICSection() {
  return (
    <section id="mic" className="py-20 px-6 bg-[#07070a]">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader title="Military Industrial Command" />
        
        <div className="grid md:grid-cols-3 gap-6">
          <RoleCard
            title="Construction Unit"
            description="The Construction Unit is responsible for building, repairing, and sustaining the physical infrastructure required for KDT's missions. This includes general construction, facility maintenance, upgrades, field repairs, and rapid-response work across military, industrial, and remote environments. Personnel in this unit must be skilled, adaptable, and capable of delivering high-quality work with speed, precision, and discipline. This is the team that ensures KDT can establish, expand, or reinforce operational capability anywhere in the world."
            applyLink="https://job-boards.greenhouse.io/knightdivisiontactical/jobs/5009721008"
            applyText="Apply for Construction Unit"
            accentColor="#f59e0b"
          />
          
          <RoleCard
            title="Manufacturing Unit"
            description="The Manufacturing Unit produces the components, assemblies, and fabricated systems that support KDT's operational and industrial capabilities. This includes machining, fabrication, assembly, inspection, and production work across a wide range of materials, scales, and technical requirements. Personnel in this unit must be disciplined, precise, fast, and capable of maintaining quality under pressure. This team enables KDT to internally manufacture mission-critical parts, equipment, and structures—allowing rapid deployment, repair, and innovation anywhere in the world."
            applyLink="https://job-boards.greenhouse.io/knightdivisiontactical/jobs/5009643008"
            applyText="Apply for Manufacturing Unit"
            accentColor="#f59e0b"
          />
          
          <RoleCard
            title="Engineering Unit"
            description="The Engineering Unit is responsible for designing, analyzing, and optimizing the systems, structures, and technologies that support KDT's global missions. This includes mechanical, electrical, structural, manufacturing, and systems engineering across both field and technical environments. Engineers in this unit must demonstrate precision, clear reasoning, adaptability, and the ability to solve complex problems under pressure. This team ensures KDT can create, refine, and deploy advanced solutions that rapidly transform mission requirements into reliable, field-ready capabilities anywhere in the world."
            applyLink="https://job-boards.greenhouse.io/knightdivisiontactical/jobs/5009912008"
            applyText="Apply for Engineering Unit"
            accentColor="#f59e0b"
          />
        </div>
      </div>
    </section>
  );
}

// ============ WHO'S BEHIND KDT ============
function WhosBehindKDT() {
  return (
    <section className="py-20 px-6 bg-[#050508]">
      <div className="max-w-[800px] mx-auto text-center">
        <h2 className="text-[28px] font-bold text-white mb-4">Who's Behind KDT?</h2>
        <p className="text-[16px] text-gray-400 leading-relaxed mb-8">
          Our team consists of the highest trained and experienced Private Military Contractors. Our clients receive one-of-one treatment - precision and excellence in mind. We carefully screen and select all KDT Agents to ensure that they meet our high standards of professionalism and virtuosity.
        </p>
        <Link
          href="/meet-the-team"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.05] border border-white/[0.1] text-white rounded-lg hover:bg-white/[0.1] transition-all"
        >
          Meet The Team
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

// ============ CONNECT WITH US ============
function ConnectWithUs() {
  const socials = [
    { name: "Facebook", url: "https://www.facebook.com/138690455996141", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
    { name: "Instagram", url: "https://www.instagram.com/knightdivisiontactical/", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
    { name: "LinkedIn", url: "https://www.linkedin.com/posts/knight-division-tactical_knight-division-tactical-linkedin-activity-7133930085358739456--5gH/", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
    { name: "X", url: "https://www.x.com/KDT_Security", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
    { name: "Yelp", url: "https://www.yelp.com/biz/knight-division-tactical-sheridan", icon: "M21.111 18.226c-.141.969-2.119 3.483-2.812 3.57-.479.061-.751-.142-1.234-.496l-2.819-2.067c-.508-.37-.508-.793-.339-1.236.17-.442 1.389-3.153 1.389-3.153.163-.399.463-.55.899-.44.437.109 2.413.705 2.941.868.528.163.939.351 1.078.83.079.265.032.653-.103 1.124zm-5.349-2.47c-.242.283-.533.258-.863.09l-3.361-1.678c-.508-.26-.574-.597-.472-1.142 0 0 1.073-2.993 1.277-3.54.204-.546.43-.745.912-.73.483.014 3.225.23 3.839.274.614.043 1.044.13 1.201.531.114.283.075.62-.029.906-.169.463-1.87 4.283-2.168 4.957-.189.426-.214.567-.336.332zm-4.42-4.085c.017.39-.182.781-.39.867l-3.324 1.386c-.424.177-.814.192-1.092-.285L2.791 8.09c-.312-.533-.161-.999.148-1.299.31-.301 2.789-2.321 3.283-2.725.494-.403.84-.619 1.38-.352.543.267 3.555 5.938 3.739 6.387.186.45.034.972.001 1.57zm-4.203 6.1c-.147.473-.525.563-.87.652l-3.463.889c-.537.137-.848.051-1.147-.387-.3-.438-1.072-3.715-1.116-4.574-.045-.86.162-1.242.632-1.357.472-.116 5.727-1.753 6.273-1.914.545-.161.845-.023 1.019.309.173.332.855 5.587.671 6.382zm7.616-14.457c-.16.462-.946 3.437-1.048 4.167-.102.729-.188 1.136-.773 1.166l-3.508.18c-.531.027-.907-.172-1.024-.674-.119-.503-.645-5.237-.693-5.896-.05-.659.09-1.048.483-1.303.393-.254 3.198-1.584 3.924-1.884.725-.299 1.153-.315 1.569.125.416.44 1.202 3.685 1.07 4.119z" },
    { name: "YouTube", url: "https://www.youtube.com/channel/UC12fOGZ9Mb9zTgAR5EgwrGA", icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
  ];

  return (
    <section className="py-20 px-6 bg-[#07070a] border-t border-white/[0.05]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-[28px] font-bold text-white whitespace-nowrap">Connect With Us</h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-[#f97316]/50 to-transparent" />
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              className="group p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-[#f97316]/30 hover:bg-white/[0.04] transition-all"
              aria-label={social.name}
            >
              <svg 
                className="w-6 h-6 text-gray-500 group-hover:text-[#f97316] transition-colors" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d={social.icon} />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ FOOTER ============
function Footer() {
  return (
    <footer className="py-8 px-6 bg-[#050508] border-t border-white/[0.05]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-[14px] text-gray-500">
              Copyright © {new Date().getFullYear()} Knight Division Tactical LLC. - All Rights Reserved.
            </p>
            <p className="text-[14px] text-gray-600 italic">"Professional. Capable. Virtuous."</p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/careers" className="text-[14px] text-gray-500 hover:text-white transition-colors">Careers</Link>
            <Link href="/shop" className="text-[14px] text-gray-500 hover:text-white transition-colors">Shop</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============ PAGE ============
export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#050508]">
      <Nav activePath="/careers" />
      <Hero />
      <PMCSection />
      <CICSection />
      <SPEARSection />
      <MICSection />
      <WhosBehindKDT />
      <ConnectWithUs />
      <Footer />
    </main>
  );
}
