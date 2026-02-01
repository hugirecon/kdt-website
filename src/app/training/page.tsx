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
          Training Programs
        </h1>
        <p className="text-[18px] text-gray-400 leading-relaxed" style={{ maxWidth: "42rem", marginLeft: "auto", marginRight: "auto" }}>
          Professional development programs delivered by instructors from the highest echelons of military and security backgrounds.
        </p>
      </div>
    </section>
  );
}

// ============ FEATURED COURSE (WHITE) ============
function FeaturedCourse() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-md bg-[#f97316]/10 text-[#f97316] text-[13px] font-medium mb-6">
              Now Enrolling
            </span>
            <h2 className="text-[clamp(32px,4vw,44px)] font-bold text-gray-900 leading-tight mb-4">
              KDT Small Arms Training
            </h2>
            <p className="text-[18px] text-gray-600 leading-relaxed mb-6">
              Our flagship 2-day course designed to evaluate potential KDT Agents and provide world-class small arms training.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#f97316]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <span className="text-[15px] font-medium text-gray-900">2-Day Intensive</span>
                  <p className="text-[14px] text-gray-500">Focused, hands-on training with immediate feedback</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#f97316]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <span className="text-[15px] font-medium text-gray-900">Path to KDT</span>
                  <p className="text-[14px] text-gray-500">Top performers may be invited to Agent Selection</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#f97316]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <span className="text-[15px] font-medium text-gray-900">Elite Instructors</span>
                  <p className="text-[14px] text-gray-500">All instructors above Tier 1, best in the world</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div>
                <span className="text-[32px] font-bold text-gray-900">$1,400</span>
              </div>
              <Link 
                href="/training/small-arms"
                className="px-6 py-3 bg-[#f97316] text-black text-[15px] font-medium rounded-lg hover:bg-[#f97316]/90 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
          
          <div className="p-8 rounded-2xl bg-gray-50 border border-gray-200">
            <h3 className="text-[18px] font-semibold text-gray-900 mb-6">Course Details</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-gray-100">
                <span className="text-[15px] text-gray-500">Duration</span>
                <span className="text-[15px] text-gray-900 font-medium">2 Days</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-100">
                <span className="text-[15px] text-gray-500">Class Size</span>
                <span className="text-[15px] text-gray-900 font-medium">20 Students Max</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-100">
                <span className="text-[15px] text-gray-500">Location</span>
                <span className="text-[15px] text-gray-900 font-medium">Fountain, CO</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-100">
                <span className="text-[15px] text-gray-500">Certificate</span>
                <span className="text-[15px] text-gray-900 font-medium">Upon Completion</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-[15px] text-gray-500">Price</span>
                <span className="text-[15px] text-[#f97316] font-bold">$1,400</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ MORE COURSES (DARK) ============
function MoreCourses() {
  const courses = [
    {
      slug: "tactical-medicine",
      title: "Tactical Combat Casualty Care",
      price: 1800,
      duration: "3 days",
      desc: "Combat medical training for operators who need to save lives under fire.",
      badge: "Coming Soon",
    },
    {
      slug: "executive-protection",
      title: "Executive Protection Fundamentals",
      price: 2500,
      duration: "5 days",
      desc: "Comprehensive protection training for those securing high-value principals.",
      badge: "Coming Soon",
    },
    {
      slug: "crisis-response",
      title: "Crisis Response Operations",
      price: 3200,
      duration: "5 days",
      desc: "Advanced training for operating in crisis and disaster environments.",
      badge: "Coming Soon",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(32px,4vw,44px)] font-bold text-white leading-tight mb-4">
            Additional Courses
          </h2>
          <p className="text-[18px] text-gray-400">
            Expand your capabilities with specialized training programs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <div key={i} className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all">
              <span className="inline-block px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 text-[11px] font-medium mb-4">
                {course.badge}
              </span>
              <h3 className="text-[18px] font-semibold text-white mb-2">{course.title}</h3>
              <p className="text-[14px] text-gray-400 mb-4">{course.desc}</p>
              <div className="flex items-center justify-between text-[14px]">
                <span className="text-gray-500">{course.duration}</span>
                <span className="text-[#f97316] font-medium">${course.price.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-[14px] text-gray-500 mt-8">
          Contact us to register your interest for upcoming courses.
        </p>
      </div>
    </section>
  );
}

// ============ WHY TRAIN (WHITE) ============
function WhyTrain() {
  const reasons = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "Path to Employment",
      desc: "KDT Training is the path for everyone who isn't Tier 1 or Tier 2 to become a KDT Agent.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "World-Class Instruction",
      desc: "Learn from instructors who have operated at the highest levels of military and security.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Practical Skills",
      desc: "Hands-on training with immediate application. Every skill is battle-tested.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Network & Opportunity",
      desc: "Connect with KDT leadership and other high-caliber professionals.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(32px,4vw,44px)] font-bold text-gray-900 leading-tight mb-4">
            Why Train With KDT?
          </h2>
          <p className="text-[18px] text-gray-600" style={{ maxWidth: "42rem", marginLeft: "auto", marginRight: "auto" }}>
            Train with us, work with us. KDT Training is more than a course—it's your path to becoming a KDT Agent.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, i) => (
            <div key={i} className="p-6 rounded-xl bg-gray-50 border border-gray-100 hover:border-gray-200 transition-colors text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#f97316]/10 flex items-center justify-center text-[#f97316]">
                  {reason.icon}
                </div>
              </div>
              <h3 className="text-[18px] font-semibold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-[15px] text-gray-600 leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ INSTRUCTORS (DARK) ============
function Instructors() {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[clamp(32px,4vw,44px)] font-bold text-white leading-tight mb-6">
              Learn From the Best
            </h2>
            <div className="space-y-4 text-[16px] text-gray-400 leading-relaxed">
              <p>
                Our instructors are hand-selected from the most elite military and security backgrounds. Each brings decades of real-world operational experience.
              </p>
              <p>
                From former Special Operations personnel to veteran executive protection professionals, our team has worked at the highest levels of global security. All instructors are above Tier 1—the best in the world.
              </p>
              <p>
                Every course combines classroom instruction with practical, scenario-based exercises that prepare you for real-world challenges.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🎖️", label: "Military Experience" },
              { icon: "🌍", label: "Global Operations" },
              { icon: "🎯", label: "Real-World Scenarios" },
              { icon: "📜", label: "Certified Programs" },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                <div className="text-[32px] mb-2">{item.icon}</div>
                <div className="text-[15px] font-medium text-white">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ TESTIMONIALS (WHITE) ============
function Testimonials() {
  const testimonials = [
    {
      quote: "KDT Training transformed my approach to tactical operations. The instructors are the real deal — their experience is unmatched.",
      author: "Alex K.",
      role: "Former Military, Now KDT Agent"
    },
    {
      quote: "Best training investment I've ever made. Went from civilian to confident in 2 days. Now working with KDT on active contracts.",
      author: "Marcus T.",
      role: "KDT Agent"
    },
    {
      quote: "The attention to detail and personalized feedback sets KDT apart. They don't just teach — they develop operators.",
      author: "Ryan M.",
      role: "Executive Protection Professional"
    },
    {
      quote: "I've trained with many organizations worldwide. KDT is on another level. Their methods are innovative and the results speak for themselves.",
      author: "David S.",
      role: "Security Consultant"
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(32px,4vw,44px)] font-bold text-gray-900 leading-tight mb-4">
            What Our Graduates Say
          </h2>
          <p className="text-[18px] text-gray-600">
            Real results from real operators.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item, i) => (
            <div 
              key={i} 
              className="relative p-8 rounded-2xl bg-gray-50 border border-gray-100"
            >
              {/* Quote mark */}
              <div className="absolute top-4 left-4 text-[#f97316]/10 text-8xl font-serif leading-none">"</div>
              
              <div className="relative z-10">
                <p className="text-[16px] text-gray-600 leading-relaxed mb-6 italic">
                  "{item.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f97316]/10 flex items-center justify-center text-[#f97316] font-bold">
                    {item.author[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{item.author}</div>
                    <div className="text-sm text-[#f97316]">{item.role}</div>
                  </div>
                </div>
              </div>
            </div>
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
          Ready to start your path to becoming a KDT Agent?
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="px-6 py-3 bg-white text-black text-[15px] font-medium rounded-lg hover:bg-gray-100 transition-all">
            Request Info
          </Link>
          <Link href="/careers" className="px-6 py-3 bg-[#f97316] text-black text-[15px] font-medium rounded-lg hover:bg-[#f97316]/90 transition-all">
            View Careers
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
export default function TrainingPage() {
  return (
    <main className="min-h-screen">
      <Nav activePath="/training" />
      <Hero />
      <FeaturedCourse />
      <MoreCourses />
      <WhyTrain />
      <Instructors />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
