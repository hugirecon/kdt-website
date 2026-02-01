"use client";

import { useEffect, useRef } from "react";

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    // Soft, large glowing orbs (like Huly's video)
    const orbs = [
      { x: 0.5, y: 0.25, size: 0.6, color: [0, 255, 80], intensity: 0.12, speed: 0.3 },
      { x: 0.75, y: 0.5, size: 0.5, color: [0, 220, 100], intensity: 0.08, speed: 0.4 },
      { x: 0.25, y: 0.65, size: 0.55, color: [0, 255, 120], intensity: 0.07, speed: 0.35 },
      { x: 0.85, y: 0.25, size: 0.4, color: [0, 200, 150], intensity: 0.05, speed: 0.5 },
      { x: 0.15, y: 0.35, size: 0.45, color: [0, 180, 80], intensity: 0.04, speed: 0.45 },
    ];

    // Subtle particles
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    const animate = () => {
      time += 0.008;
      
      // Clear with pure black
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw large, soft glowing orbs
      orbs.forEach((orb, i) => {
        const offsetX = Math.sin(time * orb.speed + i * 2) * 80;
        const offsetY = Math.cos(time * orb.speed * 0.7 + i * 1.5) * 60;
        const x = orb.x * canvas.width + offsetX;
        const y = orb.y * canvas.height + offsetY;
        const size = orb.size * Math.min(canvas.width, canvas.height);
        
        // Pulsing intensity
        const pulse = 0.85 + Math.sin(time * 1.5 + i * 0.8) * 0.15;
        const currentIntensity = orb.intensity * pulse;
        
        // Multiple layers for softer, more realistic glow
        for (let layer = 0; layer < 3; layer++) {
          const layerSize = size * (1 + layer * 0.3);
          const layerIntensity = currentIntensity / (1 + layer * 0.5);
          
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, layerSize);
          gradient.addColorStop(0, `rgba(${orb.color.join(",")}, ${layerIntensity})`);
          gradient.addColorStop(0.3, `rgba(${orb.color.join(",")}, ${layerIntensity * 0.5})`);
          gradient.addColorStop(0.6, `rgba(${orb.color.join(",")}, ${layerIntensity * 0.15})`);
          gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
          
          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
      });

      // Subtle light beam from top center
      const beamX = canvas.width / 2;
      const beamGradient = ctx.createLinearGradient(beamX, 0, beamX, canvas.height * 0.7);
      beamGradient.addColorStop(0, "rgba(0, 255, 100, 0.08)");
      beamGradient.addColorStop(0.2, "rgba(0, 255, 100, 0.04)");
      beamGradient.addColorStop(0.5, "rgba(0, 255, 100, 0.01)");
      beamGradient.addColorStop(1, "rgba(0, 255, 100, 0)");

      ctx.beginPath();
      ctx.moveTo(beamX - 3, 0);
      ctx.lineTo(beamX - 200, canvas.height * 0.7);
      ctx.lineTo(beamX + 200, canvas.height * 0.7);
      ctx.lineTo(beamX + 3, 0);
      ctx.closePath();
      ctx.fillStyle = beamGradient;
      ctx.fill();

      // Draw subtle floating particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
        gradient.addColorStop(0, `rgba(0, 255, 100, ${p.opacity})`);
        gradient.addColorStop(0.5, `rgba(0, 255, 100, ${p.opacity * 0.3})`);
        gradient.addColorStop(1, "rgba(0, 255, 100, 0)");
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Soft vignette for depth
      const vignetteGradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height * 0.4, 0,
        canvas.width / 2, canvas.height * 0.4, Math.max(canvas.width, canvas.height) * 0.8
      );
      vignetteGradient.addColorStop(0, "rgba(0, 0, 0, 0)");
      vignetteGradient.addColorStop(0.7, "rgba(0, 0, 0, 0.2)");
      vignetteGradient.addColorStop(1, "rgba(0, 0, 0, 0.6)");
      ctx.fillStyle = vignetteGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

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
      className="absolute inset-0 w-full h-full"
      style={{ background: "#000" }}
    />
  );
}
