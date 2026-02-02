"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// Floating particles background
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(249, 115, 22, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections between nearby particles
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(249, 115, 22, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const buttons = [
    { href: "/careers", label: "Careers", desc: "Join our elite force" },
    { href: "/hire", label: "Hire KDT", desc: "Request our services" },
    { href: "/training", label: "Training", desc: "Develop your skills" },
    { href: "/contact", label: "Contact", desc: "Get in touch" },
  ];

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#030305]">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030305] via-[#0a0a12] to-[#030305]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#f97316]/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#f97316]/[0.02] rounded-full blur-[100px]" />
      </div>

      {/* Particles */}
      <ParticleField />

      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,#030305_70%)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-6 py-12">
        
        {/* Logo */}
        <div 
          className={`transition-all duration-1000 ease-out ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          <div className="relative w-24 h-24 md:w-32 md:h-32 mb-8">
            <Image
              src="/logo.png"
              alt="Knight Division Tactical"
              fill
              className="object-contain"
              priority
            />
            {/* Glow behind logo */}
            <div className="absolute inset-0 bg-[#f97316]/20 blur-2xl scale-150 -z-10" />
          </div>
        </div>

        {/* Title */}
        <div 
          className={`text-center mb-4 transition-all duration-1000 delay-200 ease-out ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Knight Division
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] to-[#fb923c]">
              Tactical
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <p 
          className={`text-gray-500 text-sm md:text-base tracking-[0.2em] uppercase mb-16 transition-all duration-1000 delay-300 ease-out ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Professional • Capable • Virtuous
        </p>

        {/* Buttons */}
        <div 
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl mb-16 transition-all duration-1000 delay-500 ease-out ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {buttons.map((btn, i) => (
            <Link
              key={btn.href}
              href={btn.href}
              onMouseEnter={() => setHoveredButton(btn.href)}
              onMouseLeave={() => setHoveredButton(null)}
              className="group relative"
              style={{ transitionDelay: `${600 + i * 100}ms` }}
            >
              <div 
                className={`
                  relative overflow-hidden rounded-xl p-6 md:p-8
                  bg-white/[0.02] backdrop-blur-sm
                  border border-white/[0.05]
                  transition-all duration-500 ease-out
                  ${hoveredButton === btn.href 
                    ? 'bg-white/[0.05] border-[#f97316]/30 shadow-[0_0_40px_rgba(249,115,22,0.15)]' 
                    : 'hover:bg-white/[0.04] hover:border-white/[0.1]'
                  }
                `}
              >
                {/* Top accent line */}
                <div 
                  className={`
                    absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#f97316] to-transparent
                    transition-opacity duration-500
                    ${hoveredButton === btn.href ? 'opacity-100' : 'opacity-0'}
                  `}
                />

                <div className="text-center">
                  <div className="text-white font-semibold text-lg md:text-xl mb-2 group-hover:text-[#f97316] transition-colors duration-300">
                    {btn.label}
                  </div>
                  <div className="text-gray-500 text-xs md:text-sm">
                    {btn.desc}
                  </div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/10 group-hover:border-[#f97316]/40 transition-colors duration-300" />
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/10 group-hover:border-[#f97316]/40 transition-colors duration-300" />
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/10 group-hover:border-[#f97316]/40 transition-colors duration-300" />
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/10 group-hover:border-[#f97316]/40 transition-colors duration-300" />
              </div>
            </Link>
          ))}
        </div>

        {/* Explore link */}
        <Link
          href="/home"
          className={`
            group inline-flex flex-col items-center gap-3 text-gray-500 hover:text-[#f97316] transition-all duration-500
            ${mounted ? 'opacity-100' : 'opacity-0'}
          `}
          style={{ transitionDelay: '1000ms' }}
        >
          <span className="text-sm tracking-widest uppercase">Explore</span>
          <div className="relative">
            <svg 
              className="w-5 h-5 animate-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            {/* Glow on hover */}
            <div className="absolute inset-0 bg-[#f97316] blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
          </div>
        </Link>
      </div>

      {/* Bottom line accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#f97316]/20 to-transparent" />
    </main>
  );
}
