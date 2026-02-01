"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export default function HoverCard({ 
  children, 
  className = "",
  glowColor = "rgba(249, 115, 22, 0.15)"
}: HoverCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  
  const rotateX = useTransform(y, [0, 1], [8, -8]);
  const rotateY = useTransform(x, [0, 1], [-8, 8]);
  
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width;
    const yPos = (e.clientY - rect.top) / rect.height;
    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${x.get() * 100}% ${y.get() * 100}%, ${glowColor}, transparent 40%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />
      
      {/* Card content */}
      <div 
        className="relative h-full bg-gradient-to-br from-stone-900/90 to-stone-950/90 backdrop-blur-sm border border-stone-800/50 rounded-2xl overflow-hidden"
        style={{ transform: "translateZ(0)" }}
      >
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 opacity-0 pointer-events-none"
          style={{
            background: `linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.03) 55%, transparent 60%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />
        
        {children}
      </div>
    </motion.div>
  );
}

// Simple card variant without 3D effect
export function SimpleCard({ 
  children, 
  className = "",
  href
}: { 
  children: React.ReactNode; 
  className?: string;
  href?: string;
}) {
  const Wrapper = href ? motion.a : motion.div;
  
  return (
    <Wrapper
      href={href}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={`block bg-gradient-to-br from-stone-900/80 to-stone-950/80 backdrop-blur-sm border border-stone-800/50 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-colors ${className}`}
    >
      {children}
    </Wrapper>
  );
}

// Feature card with icon
export function FeatureCard({
  icon,
  title,
  description,
  className = ""
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <HoverCard className={className}>
      <div className="p-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-stone-400 text-sm leading-relaxed">{description}</p>
      </div>
    </HoverCard>
  );
}

// Team member card
export function TeamCard({
  name,
  role,
  image,
  className = ""
}: {
  name: string;
  role: string;
  image?: string;
  className?: string;
}) {
  return (
    <HoverCard className={className}>
      <div className="aspect-[3/4] relative">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-stone-800 to-stone-900 flex items-center justify-center">
            <span className="text-6xl text-stone-700">{name[0]}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-semibold text-white">{name}</h3>
          <p className="text-orange-400 text-sm">{role}</p>
        </div>
      </div>
    </HoverCard>
  );
}
