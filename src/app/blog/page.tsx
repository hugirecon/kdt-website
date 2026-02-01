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

// Placeholder posts
const posts = [
  {
    slug: "kdt-need-for-psc",
    title: "The Need for Private Security Contractors",
    excerpt: "Understanding why modern organizations require elite security solutions in an increasingly complex world.",
    date: "2026-01-25",
    category: "Industry Insights",
    badge: "bg-blue-500/10 text-blue-400",
    image: "/images/psc-blog.jpg",
  },
  {
    slug: "technology-enabled-security",
    title: "Technology-Enabled Security: The KDT Advantage",
    excerpt: "How AI, blockchain, and quantum computing are transforming private security operations.",
    date: "2026-01-20",
    category: "Technology",
    badge: "bg-purple-500/10 text-purple-400",
    image: "/images/operations.jpg",
  },
  {
    slug: "path-to-knighthood",
    title: "The Path to Modern Knighthood",
    excerpt: "What it takes to become a KDT Agent and join the elite ranks of private military contractors.",
    date: "2026-01-15",
    category: "Careers",
    badge: "bg-green-500/10 text-green-400",
    image: "/images/tactical-1.jpg",
  },
];

// ============ HERO (DARK) ============
function Hero() {
  return (
    <section className="relative bg-[#0a0a0a] pb-16 px-6" style={{ paddingTop: '8rem' }}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.08),transparent_70%)]" />
      </div>
      
      <div className="relative z-10 max-w-[1200px] mx-auto">
        <h1 className="text-[clamp(40px,5vw,56px)] font-bold text-white leading-[1.1] mb-4">
          Intel Updates
        </h1>
        <p className="text-[18px] text-gray-400 max-w-2xl">
          Insights, analysis, and updates from Knight Division Tactical.
        </p>
      </div>
    </section>
  );
}

// ============ BLOG POSTS (DARK - HULY STYLE) ============
function BlogPosts() {
  return (
    <section className="py-16 px-6 bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto">
        <div className="space-y-8">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col md:flex-row gap-6 p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all"
            >
              {/* Image */}
              <div className="md:w-72 flex-shrink-0">
                <div className="aspect-video rounded-lg overflow-hidden bg-white/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-2 py-0.5 rounded text-[11px] font-medium ${post.badge}`}>
                    {post.category}
                  </span>
                  <span className="text-[13px] text-gray-500">{post.date}</span>
                </div>
                
                <h2 className="text-[20px] font-semibold text-white group-hover:text-[#f97316] transition-colors mb-2">
                  {post.title}
                </h2>
                
                <p className="text-[15px] text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                
                <span className="text-[14px] text-[#f97316] font-medium">
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </div>
        
        {/* More coming */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-[15px]">More intel updates coming soon.</p>
        </div>
      </div>
    </section>
  );
}

// ============ CTA (DARK WITH GLOW) ============
function CTA() {
  return (
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
          Stay informed with the latest from KDT.
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
export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <BlogPosts />
      <CTA />
      <Footer />
    </main>
  );
}
