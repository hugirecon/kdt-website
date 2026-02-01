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
            <Link href="/privacy" className="text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============ PAGE ============
export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Nav />
      
      {/* Hero */}
      <section className="pb-12 px-6" style={{ paddingTop: '8rem' }}>
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-[clamp(32px,4vw,44px)] font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-[15px] text-gray-500">
            Last updated: January 30, 2026
          </p>
        </div>
      </section>
      
      {/* Content */}
      <section className="pb-24 px-6">
        <div className="max-w-[800px] mx-auto prose prose-invert prose-gray">
          <div className="space-y-8 text-[15px] text-gray-400 leading-relaxed">
            
            <div>
              <h2 className="text-[20px] font-semibold text-white mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                Knight Division Tactical (&ldquo;KDT&rdquo;) collects information you provide directly, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact information (name, email, phone number)</li>
                <li>Professional background and qualifications</li>
                <li>Application materials and resumes</li>
                <li>Communications with our team</li>
                <li>Information necessary for contract fulfillment</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-[20px] font-semibold text-white mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">
                We use collected information to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process employment and contractor applications</li>
                <li>Provide and improve our services</li>
                <li>Communicate with you about our services</li>
                <li>Comply with legal obligations</li>
                <li>Conduct background checks where required and authorized</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-[20px] font-semibold text-white mb-4">3. Information Sharing</h2>
              <p>
                KDT does not sell personal information. We may share information with trusted partners necessary for service delivery, government agencies as required by law, and professional verification services for background checks. All sharing is conducted in accordance with applicable data protection laws.
              </p>
            </div>
            
            <div>
              <h2 className="text-[20px] font-semibold text-white mb-4">4. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your information. This includes encryption, secure servers, access controls, and regular security assessments. However, no method of transmission over the internet is 100% secure.
              </p>
            </div>
            
            <div>
              <h2 className="text-[20px] font-semibold text-white mb-4">5. Data Retention</h2>
              <p>
                We retain personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce agreements. Application materials may be retained for consideration for future opportunities unless you request deletion.
              </p>
            </div>
            
            <div>
              <h2 className="text-[20px] font-semibold text-white mb-4">6. Your Rights</h2>
              <p className="mb-4">
                Depending on your jurisdiction, you may have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to certain processing activities</li>
                <li>Data portability</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-[20px] font-semibold text-white mb-4">7. Cookies and Tracking</h2>
              <p>
                Our website uses cookies and similar technologies to improve user experience and analyze site traffic. You can control cookie preferences through your browser settings.
              </p>
            </div>
            
            <div>
              <h2 className="text-[20px] font-semibold text-white mb-4">8. International Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers.
              </p>
            </div>
            
            <div>
              <h2 className="text-[20px] font-semibold text-white mb-4">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically. We will notify you of significant changes by posting the new policy on this page with an updated revision date.
              </p>
            </div>
            
            <div>
              <h2 className="text-[20px] font-semibold text-white mb-4">10. Contact Us</h2>
              <p>
                For questions about this Privacy Policy or to exercise your rights, please contact us at{" "}
                <a href="mailto:contact@knightdivisiontactical.com" className="text-[#f97316] hover:underline">
                  contact@knightdivisiontactical.com
                </a>
              </p>
            </div>
            
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
