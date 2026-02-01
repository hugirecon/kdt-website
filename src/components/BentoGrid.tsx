"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BentoItemProps {
  children: ReactNode;
  className?: string;
  colSpan?: 1 | 2;
  rowSpan?: 1 | 2;
}

export function BentoItem({ children, className = "", colSpan = 1, rowSpan = 1 }: BentoItemProps) {
  const colClass = colSpan === 2 ? "md:col-span-2" : "col-span-1";
  const rowClass = rowSpan === 2 ? "md:row-span-2" : "row-span-1";
  
  return (
    <motion.div
      className={`${colClass} ${rowClass} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children, className = "" }: BentoGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${className}`}>
      {children}
    </div>
  );
}
