"use client";

interface DynamicCopyrightProps {
  startYear?: number;
  companyName?: string;
  companyUrl?: string;
  className?: string;
}

export default function DynamicCopyright({ 
  startYear = 2024, 
  companyName = "Knight Division Tactical",
  companyUrl,
  className = "text-[14px] text-gray-500"
}: DynamicCopyrightProps) {
  const currentYear = new Date().getFullYear();
  const yearDisplay = startYear === currentYear ? `${currentYear}` : `${startYear}–${currentYear}`;
  
  return (
    <span className={className}>
      © {yearDisplay}{" "}
      {companyUrl ? (
        <a 
          href={companyUrl} 
          className="hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          {companyName}
        </a>
      ) : (
        companyName
      )}
      . All rights reserved.
    </span>
  );
}
