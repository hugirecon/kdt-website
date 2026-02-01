"use client";

import { motion } from "framer-motion";

interface LogoTickerProps {
  items: string[];
  speed?: number;
}

export default function LogoTicker({ items, speed = 30 }: LogoTickerProps) {
  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items];
  
  return (
    <div className="relative overflow-hidden py-8">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050510] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050510] to-transparent z-10" />
      
      <motion.div
        className="flex items-center gap-16"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedItems.map((item, i) => (
          <div 
            key={i}
            className="flex-shrink-0 text-gray-500 text-lg font-medium whitespace-nowrap opacity-50 hover:opacity-100 transition-opacity"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
