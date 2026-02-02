"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Nav from "@/components/Nav";
import EncryptButton from "@/components/EncryptButton";

// Magnetic Scramble Button Component
function MagneticScrambleButton({ children, href }: { children: string; href: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [displayText, setDisplayText] = useState(children);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  
  useEffect(() => {
    if (!isHovered) {
      setDisplayText(children);
      return;
    }
    
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        children
          .split("")
          .map((char, index) => {
            if (index < iteration) return children[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      
      if (iteration >= children.length) {
        clearInterval(interval);
      }
      iteration += 1/3;
    }, 30);
    
    return () => clearInterval(interval);
  }, [isHovered, children]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="inline-block px-8 py-4 bg-[#00ff41] text-black font-mono font-bold text-lg rounded-lg hover:shadow-[0_0_40px_rgba(0,255,65,0.5)] transition-shadow duration-300"
    >
      {displayText}
    </motion.a>
  );
}

// Glitch Image Component
function GlitchImage({ src, alt }: { src: string; alt: string }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative overflow-hidden rounded-2xl cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Base image */}
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-auto"
        animate={isHovered ? { 
          filter: ["hue-rotate(0deg)", "hue-rotate(90deg)", "hue-rotate(0deg)"],
        } : {}}
        transition={{ duration: 0.3, repeat: isHovered ? Infinity : 0 }}
      />
      
      {/* Glitch layers */}
      {isHovered && (
        <>
          <motion.div
            className="absolute inset-0 bg-[#00ff41] mix-blend-multiply"
            animate={{ 
              opacity: [0, 0.5, 0],
              x: [-5, 5, -5],
            }}
            transition={{ duration: 0.1, repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-0 bg-[#ff0040] mix-blend-multiply"
            animate={{ 
              opacity: [0, 0.5, 0],
              x: [5, -5, 5],
            }}
            transition={{ duration: 0.1, repeat: Infinity, delay: 0.05 }}
          />
          {/* Scan lines */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)"
          }} />
          {/* Glitch slice */}
          <motion.div
            className="absolute inset-0 overflow-hidden"
            animate={{
              clipPath: [
                "inset(0 0 100% 0)",
                "inset(40% 0 30% 0)",
                "inset(80% 0 10% 0)",
                "inset(0 0 100% 0)",
              ]
            }}
            transition={{ duration: 0.2, repeat: Infinity }}
          >
            <img src={src} alt="" className="w-full h-auto translate-x-2" />
          </motion.div>
        </>
      )}
      
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

// Testimonial Component
function Testimonial({ quote, author, role, image }: { quote: string; author: string; role: string; image?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#0d1a0d] border border-[#00ff41]/20 rounded-2xl p-8 relative overflow-hidden"
    >
      {/* Quote mark */}
      <div className="absolute top-4 left-4 text-[#00ff41]/10 text-8xl font-serif leading-none">"</div>
      
      <div className="relative z-10">
        <p className="text-lg text-gray-300 mb-6 italic">"{quote}"</p>
        <div className="flex items-center gap-4">
          {image && (
            <div className="w-12 h-12 rounded-full bg-[#00ff41]/20 overflow-hidden">
              <img src={image} alt={author} className="w-full h-full object-cover" />
            </div>
          )}
          <div>
            <div className="font-semibold text-white">{author}</div>
            <div className="text-sm text-[#00ff41]">{role}</div>
          </div>
        </div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#00ff41]/10 rounded-full blur-3xl" />
    </motion.div>
  );
}

// Shader Lines Background
function ShaderLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#00ff41" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00ff41]/5 to-transparent"
        animate={{ y: ["-100%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

export default function VOCPage() {
  return (
    <div className="min-h-screen bg-[#050a05] voc-theme">
      <Nav />
      <ShaderLines />
      
      {/* Hero Section */}
      <section className="relative pb-20 px-6" style={{ paddingTop: '8rem' }}>
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Join the </span>
              <span className="text-[#00ff41] text-glow">VOC</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-4">
              The Vanguard Operations Collective — a pre-cursor to a major new technology.
            </p>
            <p className="text-lg text-gray-500 max-w-xl mx-auto mb-12">
              What we're launching now will focus on you, the Contractor. Right now it's a server. 
              Later it will evolve. Your place in it will remain.
            </p>
            
            <EncryptButton />
          </motion.div>
        </div>
      </section>

      {/* Main Image with Glitch */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <GlitchImage 
            src="/images/voc-operator.jpg" 
            alt="VOC Operator"
          />
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="text-[#00ff41]">What You Get</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Intel Reports",
                description: "Access intel reports on global events, conflicts and more",
                icon: "🛰️"
              },
              {
                title: "Direct Communication",
                description: "Direct communication with the entire KDT team",
                icon: "📡"
              },
              {
                title: "Early Access",
                description: "Early access to KDT Training, technology, gear & merch",
                icon: "🔓"
              },
              {
                title: "KDT Events",
                description: "Access to exclusive Knight Division Tactical events",
                icon: "🏴"
              },
              {
                title: "Special Pricing",
                description: "Special pricing & discounts on products and services",
                icon: "💎"
              },
              {
                title: "Behind the Scenes",
                description: "Exclusive media from our ops & behind the scenes",
                icon: "🎯"
              },
              {
                title: "Insights & Updates",
                description: "Knight Division Tactical insights & exclusive updates",
                icon: "📋"
              },
              {
                title: "Brotherhood",
                description: "Professional, Capable & Virtuous Brotherhood",
                icon: "🛡️"
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#0a150a] border border-[#00ff41]/10 rounded-xl p-6 hover:border-[#00ff41]/30 transition-colors group"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#00ff41] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20 bg-[#030503]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-[#00ff41] text-2xl">★★★★★</span>
              <span className="text-gray-400 font-medium">5.0 on Google</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-white">What Clients </span>
              <span className="text-[#00ff41]">Say</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Testimonial
              quote="Matt and his team offer outstanding service and only employ the best people. If you're looking to hire a company that is made up of genuinely good guys, KDT is unmatched."
              author="John Lambert"
              role="Google Review"
            />
            <Testimonial
              quote="Excellent service and top-notch professionalism! The team is knowledgeable, reliable, and goes above and beyond to ensure safety and peace of mind. Highly recommend for anyone seeking trusted security solutions!"
              author="Cameron Polley"
              role="Google Review"
            />
            <Testimonial
              quote="Highly recommend Knight Division Tactical for all your security needs. They are extremely professional and their attention to detail is second to none."
              author="Doug Bennett"
              role="Google Review"
            />
            <Testimonial
              quote="A veteran-owned company that truly lives by their values. The level of professionalism and capability is unmatched in the industry."
              author="Robert Hayes"
              role="Google Review"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="subscribe" className="px-6 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00ff41]/5 to-transparent" />
        
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Ready to </span>
            <span className="text-[#00ff41]">Level Up?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Join the VOC today and get immediate access to all member benefits.
          </p>
          
          {/* Pricing Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#0a150a] border-2 border-[#00ff41]/30 rounded-2xl p-8 mb-8"
          >
            <div className="text-[#00ff41] text-sm font-semibold mb-2">VOC MEMBERSHIP</div>
            <div className="text-5xl font-bold text-white mb-4">
              $49<span className="text-xl text-gray-400">/month</span>
            </div>
            <ul className="text-left text-gray-300 space-y-3 mb-8">
              {[
                "Full access to all exclusive content",
                "Community Discord access",
                "Monthly live Q&A sessions",
                "Member-only discounts",
                "Priority booking for courses",
                "Cancel anytime"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="text-[#00ff41]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            
            <MagneticScrambleButton href="/subscribe">
              JOIN THE VOC
            </MagneticScrambleButton>
          </motion.div>
          
          <p className="text-sm text-gray-500">
            30-day money-back guarantee. No questions asked.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#00ff41]/10 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[#00ff41] font-bold text-xl">KDT VOC</div>
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Knight Division Tactical. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
