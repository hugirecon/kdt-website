"use client";

import { useState } from "react";
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
          Get In Touch
        </h1>
        <p className="text-[18px] text-gray-400 leading-relaxed" style={{ maxWidth: "42rem", marginLeft: "auto", marginRight: "auto" }}>
          Whether you're looking to hire KDT or want to join our team, we're here to help.
        </p>
      </div>
    </section>
  );
}

// ============ CONTACT FORM (WHITE) ============
function ContactForm() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", subject: "Hire KDT Services", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to send message");
      }
      setStatus("success");
      setForm({ firstName: "", lastName: "", email: "", subject: "Hire KDT Services", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <h2 className="text-[28px] font-bold text-gray-900 mb-8">Send us a message</h2>

            {status === "success" && (
              <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 text-[15px]">
                Message sent! We&apos;ll be in touch shortly.
              </div>
            )}
            {status === "error" && (
              <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-[15px]">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[14px] font-medium text-gray-700 mb-2">First Name</label>
                  <input 
                    type="text"
                    required
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] outline-none transition-all text-[15px]"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-[14px] font-medium text-gray-700 mb-2">Last Name</label>
                  <input 
                    type="text"
                    required
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] outline-none transition-all text-[15px]"
                    placeholder="Smith"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-[14px] font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] outline-none transition-all text-[15px]"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-[14px] font-medium text-gray-700 mb-2">Subject</label>
                <select
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] outline-none transition-all text-[15px] bg-white"
                >
                  <option>Hire KDT Services</option>
                  <option>Career Inquiry</option>
                  <option>Training Programs</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-[14px] font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] outline-none transition-all resize-none text-[15px]"
                  placeholder="Tell us about your needs..."
                />
              </div>
              
              <button 
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3.5 bg-[#f97316] text-black text-[15px] font-medium rounded-lg hover:bg-[#f97316]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <h2 className="text-[28px] font-bold text-gray-900 mb-8">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                <h3 className="text-[16px] font-semibold text-gray-900 mb-1">Email</h3>
                <a href="mailto:contact@knightdivisiontactical.com" className="text-[15px] text-[#f97316] hover:underline">
                  contact@knightdivisiontactical.com
                </a>
              </div>
              
              <div className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                <h3 className="text-[16px] font-semibold text-gray-900 mb-1">Headquarters</h3>
                <p className="text-[15px] text-gray-600">
                  New York, NY<br />
                  United States
                </p>
              </div>
              
              <div className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                <h3 className="text-[16px] font-semibold text-gray-900 mb-1">Operations</h3>
                <p className="text-[15px] text-gray-600">
                  We operate globally with rapid deployment capabilities. Contact us to discuss your location requirements.
                </p>
              </div>
              
              <div className="pt-6">
                <h3 className="text-[16px] font-semibold text-gray-900 mb-4">Quick Links</h3>
                <div className="flex flex-wrap gap-3">
                  <Link href="/careers" className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-[14px] hover:bg-gray-200 transition-all">
                    View Careers
                  </Link>
                  <Link href="/services" className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-[14px] hover:bg-gray-200 transition-all">
                    Our Services
                  </Link>
                  <Link href="/training" className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-[14px] hover:bg-gray-200 transition-all">
                    Training
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ FAQ (DARK) ============
function FAQ() {
  const faqs = [
    { q: "Do you only operate in the US?", a: "No. We work globally with rapid deployment capabilities worldwide." },
    { q: "Do you have any openings?", a: "For the right candidate, we always will. In KDT, excellence is our priority." },
    { q: "How do I apply to work for KDT?", a: "Contact us and we'll talk. You can also browse our open positions on the Careers page." },
    { q: "Do I need experience?", a: "Experience isn't concrete. We care more about current capability. Apply and we'll assess your fit." },
    { q: "What qualifications are needed for sales?", a: "A background in sales, contract acquisition, negotiations will help. A relentless drive to succeed is the priority." },
    { q: "Can I work part-time?", a: "Yes. Although the more availability you have, the better your opportunities will be." },
  ];

  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(32px,4vw,44px)] font-bold text-white leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[18px] text-gray-400">
            Common questions about working with or for KDT.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
              <h3 className="text-[15px] font-semibold text-white mb-2">{faq.q}</h3>
              <p className="text-[14px] text-gray-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
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
export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <ContactForm />
      <FAQ />
      <Footer />
    </main>
  );
}
