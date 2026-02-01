"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Course data
const courses: Record<string, {
  title: string;
  price: number;
  duration: string;
  location: string;
  classSize: string;
  description: string;
  fullDescription: string[];
  curriculum: string[];
}> = {
  "small-arms": {
    title: "KDT Small Arms Training",
    price: 1400,
    duration: "2 days",
    location: "Fountain, CO",
    classSize: "20 students max",
    description: "The premiere introductory pistol and rifle course for those serious about laying a solid foundation.",
    fullDescription: [
      "KDT Small Arms Training is the premiere introductory pistol and rifle course for those serious about laying a solid foundation for future training and growth.",
      "The course focuses on the fundamentals of pistol and rifle marksmanship and progresses from a quantified electronic fire iteration through various live fire evolutions with active coaching and refinement throughout.",
      "Baseline and end-of-Training testing will identify and quantify areas for improvement and continued practice, and instructors will provide tailored recommendations to each student.",
      "Cathedrals are built on strong foundations. This is the Foundation."
    ],
    curriculum: [
      "Pistol and rifle fundamentals",
      "Quantified electronic fire iteration",
      "Live fire evolutions with coaching",
      "Baseline and end-of-training testing",
      "Tailored improvement recommendations",
      "Certificate upon completion"
    ],
  },
  "tactical-medicine": {
    title: "Tactical Combat Casualty Care",
    price: 1800,
    duration: "3 days",
    location: "Fountain, CO",
    classSize: "16 students max",
    description: "Combat medical training for operators who need to save lives under fire.",
    fullDescription: [
      "Tactical Combat Casualty Care (TCCC) is the gold standard for prehospital care on the battlefield. This course provides the knowledge and skills necessary to provide trauma care in tactical environments.",
      "Students will learn hemorrhage control, airway management, and treatment of penetrating trauma. The course emphasizes decision-making under stress and the integration of medical care with tactical operations.",
      "All instructors are combat medics with real-world experience. Training scenarios replicate actual combat conditions to prepare students for the chaos of real casualty care.",
      "Whether you're military, law enforcement, or a security professional, this certification is essential for anyone who operates in high-risk environments."
    ],
    curriculum: [
      "TCCC guidelines and protocols",
      "Hemorrhage control and tourniquet application",
      "Airway management techniques",
      "Treatment of penetrating trauma",
      "Casualty evacuation procedures",
      "Mass casualty triage",
      "TCCC certification upon completion"
    ],
  },
  "executive-protection": {
    title: "Executive Protection Fundamentals",
    price: 2500,
    duration: "5 days",
    location: "New York, NY",
    classSize: "12 students max",
    description: "Comprehensive protection training for those securing high-value principals.",
    fullDescription: [
      "Executive Protection Fundamentals provides comprehensive training for security professionals tasked with protecting high-value individuals. This course covers the full spectrum of close protection operations.",
      "Students will learn advance work, threat assessment, motorcade operations, and protective formations. The course emphasizes the integration of technology with traditional protection methods.",
      "Real-world scenarios include hotel arrivals, public appearances, and hostile evacuations. Instructors bring experience from military, government, and private sector protection details.",
      "Graduates will have the skills and confidence to plan and execute protection operations at the highest level."
    ],
    curriculum: [
      "Threat assessment and intelligence gathering",
      "Advance work and venue security",
      "Protective formations and movement",
      "Motorcade operations",
      "Hostile evacuation procedures",
      "Technology integration for EP",
      "Certificate upon completion"
    ],
  },
  "crisis-response": {
    title: "Crisis Response Operations",
    price: 3200,
    duration: "5 days",
    location: "Fountain, CO",
    classSize: "16 students max",
    description: "Advanced training for operating in crisis and disaster environments.",
    fullDescription: [
      "Crisis Response Operations prepares security professionals to operate effectively in crisis and disaster environments. From natural disasters to civil unrest, this course covers the full spectrum of crisis operations.",
      "Students will learn rapid deployment, resource management, and coordination with government agencies. The course emphasizes adaptability and decision-making when normal systems have failed.",
      "Field exercises simulate real crisis conditions including communication blackouts, supply shortages, and hostile actors. Students will plan and execute operations under realistic stress.",
      "This course is essential for anyone who may be called upon to operate when conventional support systems are unavailable."
    ],
    curriculum: [
      "Crisis assessment and response planning",
      "Rapid deployment procedures",
      "Resource management in austere environments",
      "Inter-agency coordination",
      "Communication in degraded environments",
      "Post-crisis recovery operations",
      "Certificate upon completion"
    ],
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
              className={`px-4 py-2 text-[15px] transition-colors ${item.href === '/training' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
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
export default function CoursePage() {
  const params = useParams();
  const courseSlug = params.course as string;
  const course = courses[courseSlug];
  
  if (!course) {
    return (
      <main className="min-h-screen bg-[#0a0a0a]">
        <Nav />
        <div className="pb-24 px-6 text-center" style={{ paddingTop: '8rem' }}>
          <h1 className="text-[32px] font-bold text-white mb-4">Course Not Found</h1>
          <Link href="/training" className="text-[#f97316] hover:underline">Back to Training</Link>
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
          <Link href="/training" className="inline-flex items-center gap-2 text-[14px] text-gray-500 hover:text-white transition-colors mb-8">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Training
          </Link>
          
          <span className="inline-block px-3 py-1 rounded-md bg-[#f97316]/10 text-[#f97316] text-[13px] font-medium mb-4">
            Now Enrolling
          </span>
          
          <h1 className="text-[clamp(32px,4vw,48px)] font-bold text-white mb-4">
            {course.title}
          </h1>
          
          <p className="text-[18px] text-gray-400 max-w-3xl">
            {course.description}
          </p>
        </div>
      </section>
      
      {/* Course Details */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-[24px] font-bold text-gray-900 mb-6">About This Course</h2>
              <div className="space-y-4 text-[16px] text-gray-600 leading-relaxed mb-8">
                {course.fullDescription.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              
              <h3 className="text-[20px] font-bold text-gray-900 mb-4">What You'll Learn</h3>
              <ul className="space-y-3">
                {course.curriculum.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 sticky top-24">
                <h3 className="text-[20px] font-bold text-gray-900 mb-6">Course Details</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-[15px] text-gray-500">Duration</span>
                    <span className="text-[15px] text-gray-900 font-medium">{course.duration}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-[15px] text-gray-500">Class Size</span>
                    <span className="text-[15px] text-gray-900 font-medium">{course.classSize}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-[15px] text-gray-500">Location</span>
                    <span className="text-[15px] text-gray-900 font-medium">{course.location}</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-[15px] text-gray-500">Price</span>
                    <span className="text-[18px] text-[#f97316] font-bold">${course.price.toLocaleString()}</span>
                  </div>
                </div>
                
                <Link 
                  href="/contact"
                  className="block w-full py-3.5 bg-[#f97316] text-black text-[15px] font-medium rounded-lg hover:bg-[#f97316]/90 transition-all text-center"
                >
                  Register Now
                </Link>
                
                <p className="text-[13px] text-gray-500 text-center mt-4">
                  Contact us to reserve your spot
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] bg-[#f97316]/5 rounded-full blur-[150px]" />
        </div>
        
        <div className="max-w-[600px] mx-auto text-center relative z-10">
          <h2 className="text-[36px] md:text-[44px] font-bold text-white mb-4 leading-tight">
            Join the<br />
            <span className="text-[#f97316]">Movement</span>
          </h2>
          <p className="text-[16px] text-gray-400 mb-8">
            Start your path to becoming a KDT Agent.
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
      
      <Footer />
    </main>
  );
}
