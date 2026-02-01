"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// Interactive Glitch Grid Background
function GlitchGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Grid elements
    const gridElements: Array<{
      x: number;
      y: number;
      w: number;
      h: number;
      type: "rect" | "line" | "dots" | "text";
      glitchOffset: number;
    }> = [];

    // Generate random grid elements
    for (let i = 0; i < 60; i++) {
      gridElements.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        w: Math.random() * 150 + 20,
        h: Math.random() * 80 + 10,
        type: ["rect", "line", "dots", "text"][Math.floor(Math.random() * 4)] as any,
        glitchOffset: Math.random() * 100,
      });
    }

    const animate = () => {
      time += 0.016;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Dark olive/green base
      ctx.fillStyle = "#0a0f0a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw base grid
      ctx.strokeStyle = "rgba(180, 200, 80, 0.05)";
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw glitchy elements
      gridElements.forEach((el, i) => {
        const distToMouse = Math.sqrt(Math.pow(el.x - mx, 2) + Math.pow(el.y - my, 2));
        const glitchIntensity = Math.max(0, 1 - distToMouse / 300);
        const glitchTime = time + el.glitchOffset;
        
        // Random glitch offset based on mouse proximity
        const offsetX = glitchIntensity * (Math.sin(glitchTime * 20) * 15 + Math.random() * 10 - 5);
        const offsetY = glitchIntensity * (Math.cos(glitchTime * 15) * 5);
        
        const alpha = 0.1 + glitchIntensity * 0.4 + Math.sin(glitchTime * 3 + i) * 0.05;
        
        ctx.save();
        ctx.translate(offsetX, offsetY);

        // Chromatic aberration near mouse
        if (glitchIntensity > 0.3) {
          ctx.fillStyle = `rgba(255, 0, 0, ${alpha * 0.3})`;
          ctx.fillRect(el.x - 2, el.y, el.w, el.h);
          ctx.fillStyle = `rgba(0, 255, 255, ${alpha * 0.3})`;
          ctx.fillRect(el.x + 2, el.y, el.w, el.h);
        }

        // Main color - yellow-green
        const color = `rgba(180, 200, 80, ${alpha})`;
        ctx.fillStyle = color;
        ctx.strokeStyle = color;

        if (el.type === "rect") {
          if (Math.random() > 0.5 || glitchIntensity > 0.5) {
            ctx.fillRect(el.x, el.y, el.w, el.h);
          } else {
            ctx.strokeRect(el.x, el.y, el.w, el.h);
          }
        } else if (el.type === "line") {
          ctx.lineWidth = 2 + glitchIntensity * 3;
          ctx.beginPath();
          ctx.moveTo(el.x, el.y);
          ctx.lineTo(el.x + el.w, el.y);
          ctx.stroke();
        } else if (el.type === "dots") {
          for (let dx = 0; dx < el.w; dx += 8) {
            for (let dy = 0; dy < el.h; dy += 8) {
              if (Math.random() > 0.3) {
                ctx.fillRect(el.x + dx, el.y + dy, 3, 3);
              }
            }
          }
        } else if (el.type === "text") {
          ctx.font = "10px monospace";
          const chars = "01アイウエオカキクケコ■□▪▫";
          for (let c = 0; c < 8; c++) {
            ctx.fillText(chars[Math.floor(Math.random() * chars.length)], el.x + c * 8, el.y);
          }
        }

        ctx.restore();

        // Random glitch slices
        if (glitchIntensity > 0.6 && Math.random() > 0.95) {
          const sliceY = el.y + Math.random() * el.h;
          const sliceH = Math.random() * 10 + 2;
          ctx.fillStyle = `rgba(180, 200, 80, ${0.5 + Math.random() * 0.5})`;
          ctx.fillRect(0, sliceY, canvas.width, sliceH);
        }
      });

      // Scan lines
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      for (let y = 0; y < canvas.height; y += 3) {
        ctx.fillRect(0, y, canvas.width, 1);
      }

      // Mouse glow
      const glowGradient = ctx.createRadialGradient(mx, my, 0, mx, my, 200);
      glowGradient.addColorStop(0, "rgba(180, 200, 80, 0.15)");
      glowGradient.addColorStop(0.5, "rgba(180, 200, 80, 0.05)");
      glowGradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = glowGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Global glitch effect - horizontal displacement
      if (Math.random() > 0.97) {
        const glitchY = Math.random() * canvas.height;
        const glitchH = Math.random() * 30 + 5;
        const imageData = ctx.getImageData(0, glitchY, canvas.width, glitchH);
        ctx.putImageData(imageData, Math.random() * 20 - 10, glitchY);
      }

      // Vignette
      const vignetteGradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) * 0.7
      );
      vignetteGradient.addColorStop(0, "rgba(0, 0, 0, 0)");
      vignetteGradient.addColorStop(0.7, "rgba(0, 0, 0, 0.3)");
      vignetteGradient.addColorStop(1, "rgba(0, 0, 0, 0.7)");
      ctx.fillStyle = vignetteGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: "#0a0f0a" }}
    />
  );
}

// Landing page with 4 buttons
export default function LandingPage() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const buttons = [
    { href: "/careers", label: "Careers" },
    { href: "/hire", label: "Hire KDT" },
    { href: "/training", label: "Training" },
    { href: "/contact", label: "Contact" },
  ];

  // Glitch color
  const glitchColor = "#b4c850"; // Yellow-green

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0f0a]">
      <GlitchGridBackground />
      
      {/* Content */}
      <div className={`relative z-10 flex flex-col items-center justify-center w-full px-6 transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Logo/Wordmark */}
        <div className="text-center">
          <h1 
            className="text-2xl md:text-3xl lg:text-4xl font-light tracking-[0.3em] whitespace-nowrap"
            style={{ color: glitchColor }}
          >
            KNIGHT DIVISION TACTICAL
          </h1>
        </div>

        {/* Spacer */}
        <div className="h-16 md:h-20" />

        {/* 4 Button Grid - Cyberpunk style */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 w-full max-w-lg mb-12">
          {buttons.map((btn, i) => (
            <Link 
              key={btn.href}
              href={btn.href}
              className="group relative px-8 py-4 md:px-12 md:py-5 text-center overflow-hidden
                         bg-black/80 backdrop-blur-sm border-2 transition-all duration-300
                         hover:bg-[#b4c850]/10"
              style={{ 
                borderColor: glitchColor,
                boxShadow: `0 0 20px rgba(180, 200, 80, 0.1), inset 0 0 20px rgba(180, 200, 80, 0.05)`,
              }}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2" style={{ borderColor: glitchColor }} />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2" style={{ borderColor: glitchColor }} />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2" style={{ borderColor: glitchColor }} />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2" style={{ borderColor: glitchColor }} />
              
              {/* Glitch hover effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-100">
                <div className="absolute inset-0 bg-[#b4c850]/5" />
                <div 
                  className="absolute h-[2px] w-full bg-[#b4c850]/50 animate-pulse"
                  style={{ top: '30%' }}
                />
              </div>
              
              <span 
                className="relative z-10 text-base md:text-lg font-medium tracking-wider uppercase"
                style={{ color: glitchColor }}
              >
                {btn.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Explore link */}
        <Link 
          href="/home" 
          className="inline-flex items-center gap-2 transition-colors group"
          style={{ color: `${glitchColor}80` }}
        >
          <span className="text-sm tracking-wider group-hover:text-[#b4c850]">EXPLORE KDT</span>
          <svg 
            className="w-4 h-4 animate-bounce" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </div>
      
      {/* Corner brackets */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 z-10" style={{ borderColor: `${glitchColor}60` }} />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 z-10" style={{ borderColor: `${glitchColor}60` }} />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 z-10" style={{ borderColor: `${glitchColor}60` }} />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 z-10" style={{ borderColor: `${glitchColor}60` }} />
    </main>
  );
}
