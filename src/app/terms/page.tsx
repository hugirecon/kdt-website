"use client";

import Link from "next/link";
import Nav from "@/components/Nav";

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
            <Link href="/terms" className="text-white transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============ PAGE ============
export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Nav />
      
      {/* Hero */}
      <section className="pb-12 px-6" style={{ paddingTop: '8rem' }}>
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-[clamp(32px,4vw,44px)] font-bold text-white mb-4">
            Terms of Service
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
              <h2 className="text-[20px] font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the Knight Division Tactical (&ldquo;KDT&rdquo;) website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </div>
            
            <div>
              <h2 className="text-[20px] font-semibold text-white mb-4">2. Services</h2>
              <p>
                KDT provides private military contracting, security consulting, crisis response, and training services. All services are provided in accordance with applicable laws and regulations. Specific terms for individual contracts or engagements may supersede these general terms.
              </p>
            </div>
            
            <div>
              <h2 className="text-[20px] font-semibold text-white mb-4">3. Eligibility</h2>
              <p>
                Our services are available to individuals and organizations that meet our qualification requirements. Applicants for employment or contractor positions must meet all specified requirements, including but not limited to background checks, certifications, and security clearances as applicable.
              </p>
            </div>
            
            <div>
              <h2 className="text-[20px] font-semibold text-white mb-4">4. Intellectual Property</h2>
              <p>
                All content, trademarks, logos, and intellectual property displayed on this website are the property of Knight Division Tactical or its licensors. Unauthorized use, reproduction, or distribution is prohibited.
              </p>
            </div>
            
            <div>
              <h2 className="text-[20px] font-semibold text-white mb-4">5. Confidentiality</h2>
              <p>
                Users agree to maintain the confidentiality of any proprietary information shared during the application process, contract negotiations, or service delivery. Breach of confidentiality may result in legal action.
              </p>
            </div>
            
            <div>
              <h2 className="text-[20px] font-semibold text-white mb-4">6. Limitation of Liability</h2>
              <p>
                KDT shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services. Our liability is limited to the maximum extent permitted by law.
              </p>
            </div>
            
            <div>
              <h2 className="text-[20px] font-semibold text-white mb-4">7. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions.
              </p>
            </div>
            
            <div>
              <h2 className="text-[20px] font-semibold text-white mb-4">8. Changes to Terms</h2>
              <p>
                KDT reserves the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.
              </p>
            </div>
            
            <div>
              <h2 className="text-[20px] font-semibold text-white mb-4">9. Contact</h2>
              <p>
                For questions regarding these Terms of Service, please contact us at{" "}
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
