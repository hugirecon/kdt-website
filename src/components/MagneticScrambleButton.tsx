"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";

interface MagneticScrambleButtonProps {
  children: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  scrambleChars?: string;
  magneticStrength?: number;
  scrambleSpeed?: number;
  theme?: "voc" | "kdt" | "light" | "dark";
}

export default function MagneticScrambleButton({ 
  children, 
  href, 
  onClick,
  className = "",
  scrambleChars = "!@#$%^&*()_+-=[]{}|;:,.<>?",
  magneticStrength = 0.3,
  scrambleSpeed = 30,
  theme = "voc"
}: MagneticScrambleButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [displayText, setDisplayText] = useState(children);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const themes = {
    voc: "bg-[#00ff41] text-black hover:shadow-[0_0_40px_rgba(0,255,65,0.5)]",
    kdt: "bg-[#f97316] text-black hover:shadow-[0_0_40px_rgba(249,115,22,0.5)]",
    light: "bg-white text-black hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]",
    dark: "bg-black text-white border border-white/20 hover:shadow-[0_0_40px_rgba(0,0,0,0.5)]",
  };
  
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
            if (char === " ") return " ";
            if (index < iteration) return children[index];
            return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
          })
          .join("")
      );
      
      if (iteration >= children.length) {
        clearInterval(interval);
      }
      iteration += 1/3;
    }, scrambleSpeed);
    
    return () => clearInterval(interval);
  }, [isHovered, children, scrambleChars, scrambleSpeed]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * magneticStrength);
    y.set((e.clientY - centerY) * magneticStrength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const baseClassName = `inline-block px-8 py-4 font-mono font-bold text-lg rounded-lg transition-shadow duration-300 ${themes[theme]} ${className}`;
  
  const motionProps = {
    ref: ref as any,
    style: { x: springX, y: springY },
    onMouseMove: handleMouseMove,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: handleMouseLeave,
    className: baseClassName,
  };

  if (href) {
    // External link
    if (href.startsWith("http") || href.startsWith("#")) {
      return (
        <motion.a href={href} {...motionProps}>
          {displayText}
        </motion.a>
      );
    }
    // Internal link using Next.js Link
    return (
      <Link href={href} passHref legacyBehavior>
        <motion.a {...motionProps}>
          {displayText}
        </motion.a>
      </Link>
    );
  }

  return (
    <motion.button onClick={onClick} {...motionProps}>
      {displayText}
    </motion.button>
  );
}
