"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// Floating particles background - DESKTOP ONLY (heavy on mobile)
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState(true); // Default to mobile to prevent flash

  useEffect(() => {
    // Check if mobile on mount
    const checkMobile = () => window.innerWidth < 768;
    setIsMobile(checkMobile());
    
    // Don't run animation on mobile
    if (checkMobile()) return;

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

  // Don't render canvas on mobile
  if (isMobile) return null;

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

  // Add liquid shine animation and disable tap highlight
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes liquidShine {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      * {
        -webkit-tap-highlight-color: transparent !important;
        -webkit-touch-callout: none !important;
      }
      *:focus {
        outline: none !important;
      }
      *::selection {
        background: transparent !important;
      }
      *::-moz-selection {
        background: transparent !important;
      }
      a, button {
        -webkit-user-select: none !important;
        user-select: none !important;
        -webkit-tap-highlight-color: rgba(0,0,0,0) !important;
      }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

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
          className={`transition-all duration-1000 ease-out mb-16 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
            <Image
              src="/logo.png"
              alt="Knight Division Tactical"
              fill
              className="object-contain"
              priority
            />
            {/* Glow behind logo */}
            <div className="absolute inset-0 bg-[#f97316]/20 blur-3xl scale-150 -z-10" />
          </div>
        </div>

        {/* Buttons - Liquid Metal Style */}
        <div 
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl mb-16 transition-all duration-1000 delay-300 ease-out ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {buttons.map((btn, i) => (
            <Link
              key={btn.href}
              href={btn.href}
              onMouseEnter={() => setHoveredButton(btn.href)}
              onMouseLeave={() => setHoveredButton(null)}
              className="group relative select-none outline-none focus:outline-none focus-visible:outline-none"
              style={{ 
                transitionDelay: `${400 + i * 100}ms`,
                WebkitTapHighlightColor: 'transparent',
                WebkitTouchCallout: 'none',
                WebkitUserSelect: 'none',
                userSelect: 'none',
                outline: 'none',
              }}
              draggable={false}
            >
              {/* Liquid Metal Button */}
              <div 
                className={`
                  relative overflow-hidden rounded-2xl p-6 md:p-8
                  transition-all duration-500 ease-out select-none
                  ${hoveredButton === btn.href 
                    ? 'scale-[1.02] shadow-[0_0_50px_rgba(200,200,200,0.15)]' 
                    : 'hover:scale-[1.01]'
                  }
                `}
                style={{
                  background: hoveredButton === btn.href
                    ? 'linear-gradient(145deg, rgba(255,255,255,0.15) 0%, rgba(180,180,180,0.08) 50%, rgba(255,255,255,0.12) 100%)'
                    : 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(120,120,120,0.04) 50%, rgba(255,255,255,0.06) 100%)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: hoveredButton === btn.href
                    ? 'inset 0 1px 1px rgba(255,255,255,0.2), inset 0 -1px 1px rgba(0,0,0,0.1), 0 8px 32px rgba(0,0,0,0.3)'
                    : 'inset 0 1px 1px rgba(255,255,255,0.1), inset 0 -1px 1px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.2)',
                }}
              >
                {/* Liquid shine effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: 'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 55%, transparent 80%)',
                    transform: 'translateX(-100%)',
                    animation: hoveredButton === btn.href ? 'liquidShine 1.5s ease-in-out' : 'none',
                  }}
                />

                <div className="text-center relative z-10 select-none" style={{ WebkitUserSelect: 'none', userSelect: 'none' }}>
                  <div 
                    className="font-semibold text-lg md:text-xl mb-2 select-none text-gray-200 group-hover:text-white transition-colors duration-300"
                    style={{
                      WebkitUserSelect: 'none',
                      userSelect: 'none',
                    }}
                  >
                    {btn.label}
                  </div>
                  <div className="text-gray-500 text-xs md:text-sm group-hover:text-gray-400 transition-colors select-none" style={{ WebkitUserSelect: 'none', userSelect: 'none' }}>
                    {btn.desc}
                  </div>
                </div>
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
