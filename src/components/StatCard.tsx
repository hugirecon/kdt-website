"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface StatCardProps {
  value: string;
  label: string;
  description?: string;
}

export default function StatCard({ value, label, description }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");
  
  // Animate number if it's numeric
  useEffect(() => {
    if (!isInView) return;
    
    const numMatch = value.match(/^(\d+)/);
    if (numMatch) {
      const target = parseInt(numMatch[1]);
      const suffix = value.replace(/^\d+/, "");
      let current = 0;
      const duration = 2000;
      const increment = target / (duration / 16);
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current) + suffix);
        }
      }, 16);
      
      return () => clearInterval(timer);
    } else {
      setDisplayValue(value);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="text-[clamp(40px,6vw,64px)] font-bold text-white mb-1">
        {displayValue}
      </div>
      <div className="text-[15px] text-gray-400 mb-1">{label}</div>
      {description && (
        <div className="text-[13px] text-gray-600">{description}</div>
      )}
    </motion.div>
  );
}
