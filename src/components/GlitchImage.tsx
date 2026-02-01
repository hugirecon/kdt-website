"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface GlitchImageProps {
  src: string;
  alt: string;
  className?: string;
  glitchColors?: [string, string];
  scanLines?: boolean;
}

export default function GlitchImage({ 
  src, 
  alt,
  className = "",
  glitchColors = ["#00ff41", "#ff0040"],
  scanLines = true
}: GlitchImageProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`relative overflow-hidden rounded-2xl cursor-pointer group ${className}`}
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
        } : { filter: "hue-rotate(0deg)" }}
        transition={{ duration: 0.3, repeat: isHovered ? Infinity : 0 }}
      />
      
      {/* Glitch layers */}
      {isHovered && (
        <>
          <motion.div
            className="absolute inset-0 mix-blend-multiply"
            style={{ backgroundColor: glitchColors[0] }}
            animate={{ 
              opacity: [0, 0.5, 0],
              x: [-5, 5, -5],
            }}
            transition={{ duration: 0.1, repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-0 mix-blend-multiply"
            style={{ backgroundColor: glitchColors[1] }}
            animate={{ 
              opacity: [0, 0.5, 0],
              x: [5, -5, 5],
            }}
            transition={{ duration: 0.1, repeat: Infinity, delay: 0.05 }}
          />
          
          {/* Scan lines */}
          {scanLines && (
            <div className="absolute inset-0 pointer-events-none" style={{
              background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)"
            }} />
          )}
          
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
