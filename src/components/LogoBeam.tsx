"use client";

import { useEffect, useState } from "react";

// Sharp electric edge glow - neon outline tracing the logo
export default function LogoBeam() {
  const [pulse, setPulse] = useState(1);
  const [flicker, setFlicker] = useState(1);

  useEffect(() => {
    let time = 0;
    const animate = () => {
      time += 0.04;
      // Smooth pulse
      const p = 0.9 + Math.sin(time) * 0.1;
      setPulse(p);
      // Occasional flicker for electric feel
      const f = Math.random() > 0.95 ? 0.7 + Math.random() * 0.3 : 1;
      setFlicker(f);
      requestAnimationFrame(animate);
    };
    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, []);

  const intensity = pulse * flicker;

  // Sharp, tight drop shadows for crisp neon edge effect
  const sharpGlow = `
    drop-shadow(0 0 1px rgba(249, 115, 22, ${1 * intensity}))
    drop-shadow(0 0 2px rgba(249, 115, 22, ${0.9 * intensity}))
    drop-shadow(0 0 3px rgba(249, 115, 22, ${0.8 * intensity}))
    drop-shadow(0 0 5px rgba(249, 115, 22, ${0.6 * intensity}))
    drop-shadow(0 0 8px rgba(249, 115, 22, ${0.4 * intensity}))
    drop-shadow(0 0 12px rgba(249, 115, 22, ${0.3 * intensity}))
    drop-shadow(0 0 20px rgba(249, 115, 22, ${0.2 * intensity}))
  `;

  return (
    <div className="relative w-full max-w-lg aspect-square mx-auto flex items-center justify-center">
      {/* Subtle ambient glow behind */}
      <div 
        className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full"
        style={{
          background: `radial-gradient(ellipse at center, rgba(249, 115, 22, ${0.06 * intensity}) 0%, transparent 60%)`,
        }}
      />
      
      {/* Logo with sharp neon edge glow */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt="KDT Logo"
        className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain"
        style={{ 
          filter: sharpGlow,
          // Add slight brightness boost for neon pop
          WebkitFilter: sharpGlow,
        }}
      />
    </div>
  );
}
