"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Blog posts content
const posts: Record<string, {
  title: string;
  date: string;
  category: string;
  badge: string;
  image: string;
  content: string[];
}> = {
  "kdt-need-for-psc": {
    title: "The Need for Private Security Contractors",
    date: "2026-01-25",
    category: "Industry Insights",
    badge: "bg-blue-500/10 text-blue-400",
    image: "/images/psc-blog.jpg",
    content: [
      "In an increasingly complex and volatile global landscape, the demand for specialized security services has never been higher. Traditional security models are proving inadequate against sophisticated threats that transcend national boundaries and conventional categories.",
      "Private Security Contractors (PSCs) fill a critical gap between military operations and civilian security. They provide the expertise, flexibility, and rapid response capabilities that modern organizations require to operate in challenging environments.",
      "**Why Organizations Choose PSCs**",
      "The decision to engage private security contractors often comes down to three factors: capability, speed, and accountability. Unlike government forces constrained by bureaucracy and political considerations, PSCs can mobilize quickly, adapt to changing circumstances, and focus entirely on client objectives.",
      "Organizations operating in unstable regions—whether extractive industries, humanitarian organizations, or diplomatic missions—face threats that require specialized responses. PSCs provide personnel with relevant experience, often drawn from elite military and law enforcement backgrounds.",
      "**The KDT Difference**",
      "Knight Division Tactical represents the next evolution in private security. We combine the highest caliber of personnel—Tier 1 and Tier 2 military operators—with proprietary technology that enables unprecedented operational capability.",
      "Our AI-driven threat assessment, blockchain-secured communications, and integrated command systems give clients a decisive advantage. We don't just respond to threats; we anticipate and neutralize them before they materialize.",
      "**Looking Forward**",
      "As threats continue to evolve, so must security solutions. The organizations that thrive will be those that partner with security providers capable of matching sophistication with sophistication. That's the standard KDT sets—and exceeds—every day.",
    ],
  },
  "technology-enabled-security": {
    title: "Technology-Enabled Security: The KDT Advantage",
    date: "2026-01-20",
    category: "Technology",
    badge: "bg-purple-500/10 text-purple-400",
    image: "/images/operations.jpg",
    content: [
      "The future of security is technological. At Knight Division Tactical, we're not waiting for that future—we're building it. Our integration of AI, blockchain, and advanced communications represents a fundamental shift in how security operations are conducted.",
      "**AI-Powered Threat Assessment**",
      "Our proprietary AI systems continuously analyze data from multiple sources to identify potential threats before they materialize. Pattern recognition, anomaly detection, and predictive modeling give our teams the intelligence advantage that defines modern operations.",
      "These systems don't replace human judgment—they enhance it. By processing vast amounts of information and presenting actionable insights, our AI enables operators to make better decisions faster.",
      "**Blockchain-Secured Operations**",
      "Security depends on trust, and trust depends on integrity. Our blockchain infrastructure ensures that communications, contracts, and operational data remain tamper-proof and verifiable. Every transaction, every order, every report is cryptographically secured.",
      "This isn't just about protecting against external threats. It's about building systems where accountability is built into the architecture itself.",
      "**Quantum-Resistant Communications**",
      "Today's encryption will be tomorrow's vulnerability. We're already implementing quantum-resistant protocols to ensure that our communications remain secure against emerging computational threats. When quantum computers become capable of breaking current encryption standards, KDT operations will remain protected.",
      "**The Human Element**",
      "Technology amplifies capability, but capability starts with people. Our operators are selected from the top echelon of military and security professionals. They bring experience, judgment, and adaptability that no system can replicate.",
      "The combination of elite personnel and cutting-edge technology creates something greater than the sum of its parts. That's the KDT advantage.",
    ],
  },
  "path-to-knighthood": {
    title: "The Path to Modern Knighthood",
    date: "2026-01-15",
    category: "Careers",
    badge: "bg-green-500/10 text-green-400",
    image: "/images/tactical-1.jpg",
    content: [
      "Becoming a KDT Agent isn't just a career move—it's a commitment to excellence at the highest level. We call our operators Knights because they embody the virtues that defined knighthood: skill, courage, loyalty, and honor.",
      "**What We Look For**",
      "Our selection process is deliberately demanding. We seek candidates with proven military or security backgrounds, preferably from Tier 1 or Tier 2 units. But technical qualification is just the starting point.",
      "We evaluate character as rigorously as capability. A Knight must demonstrate sound judgment under pressure, the ability to work within a team while maintaining individual initiative, and an unwavering commitment to ethical conduct.",
      "**The Selection Process**",
      "Candidates begin with a comprehensive application review. We examine service records, certifications, references, and personal statements. Those who pass initial screening proceed to assessment.",
      "Assessment includes physical evaluation, skills testing, psychological screening, and scenario-based exercises. We're not just measuring what you can do—we're observing how you think, how you adapt, and how you handle adversity.",
      "**Training and Development**",
      "Selection is the beginning, not the end. Knights undergo continuous training to maintain and expand their capabilities. Our instructors—drawn from the world's elite units—ensure that every operator remains at the cutting edge.",
      "Technology integration training is particularly important. Our operations depend on sophisticated systems, and every Knight must be proficient in their use. This isn't just button-pushing—it's understanding how technology extends human capability.",
      "**The Reward**",
      "KDT offers industry-leading compensation. But for most Knights, the real reward is the work itself: meaningful missions, exceptional colleagues, and the knowledge that you're operating at the highest level your profession allows.",
      "We would rather die than fail. If that ethos resonates with you, we want to hear from you.",
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
            <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============ PAGE ============
export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = posts[slug];
  
  if (!post) {
    return (
      <main className="min-h-screen bg-[#0a0a0a]">
        <Nav />
        <div className="pb-24 px-6 text-center" style={{ paddingTop: '8rem' }}>
          <h1 className="text-[32px] font-bold text-white mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-[#f97316] hover:underline">Back to Blog</Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Nav />
      
      {/* Hero */}
      <section className="pb-8 px-6" style={{ paddingTop: '8rem' }}>
        <div className="max-w-[800px] mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[14px] text-gray-500 hover:text-white transition-colors mb-8">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <span className={`px-2 py-0.5 rounded text-[11px] font-medium ${post.badge}`}>
              {post.category}
            </span>
            <span className="text-[13px] text-gray-500">{post.date}</span>
          </div>
          
          <h1 className="text-[clamp(28px,4vw,40px)] font-bold text-white leading-tight mb-8">
            {post.title}
          </h1>
          
          {/* Featured image */}
          <div className="aspect-video rounded-xl overflow-hidden mb-12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* Content */}
      <section className="pb-24 px-6">
        <div className="max-w-[800px] mx-auto">
          <div className="space-y-6 text-[16px] text-gray-300 leading-relaxed">
            {post.content.map((paragraph, i) => {
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <h2 key={i} className="text-[22px] font-bold text-white mt-8 mb-4">
                    {paragraph.replace(/\*\*/g, '')}
                  </h2>
                );
              }
              return (
                <p key={i}>{paragraph}</p>
              );
            })}
          </div>
          
          {/* Share / CTA */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="text-[15px] text-gray-500">
                Interested in learning more about KDT?
              </p>
              <div className="flex items-center gap-4">
                <Link href="/careers" className="px-5 py-2.5 bg-[#f97316] text-black text-[14px] font-medium rounded-lg hover:bg-[#f97316]/90 transition-all">
                  View Careers
                </Link>
                <Link href="/contact" className="px-5 py-2.5 bg-white/5 text-white text-[14px] font-medium rounded-lg hover:bg-white/10 transition-all border border-white/10">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
