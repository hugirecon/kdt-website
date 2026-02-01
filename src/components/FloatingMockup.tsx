"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingMockupProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  floatAmount?: number;
}

export default function FloatingMockup({ 
  children, 
  className = "",
  glowColor = "#f97316",
  floatAmount = 10
}: FloatingMockupProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Glow behind mockup */}
      <div 
        className="absolute inset-0 blur-[80px] opacity-30"
        style={{
          background: `radial-gradient(ellipse at center, ${glowColor} 0%, transparent 70%)`,
          transform: "scale(1.2)",
        }}
      />
      
      {/* Floating animation */}
      <motion.div
        className="relative"
        animate={{
          y: [-floatAmount / 2, floatAmount / 2, -floatAmount / 2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
