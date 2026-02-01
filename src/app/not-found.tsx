"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[400px] h-[400px] bg-[#f97316]/5 rounded-full blur-[150px]" />
      </div>
      
      <div className="relative z-10 text-center">
        {/* Glitch 404 */}
        <div className="relative mb-8">
          <h1 className="text-[120px] md:text-[180px] font-bold text-white/5 leading-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[60px] md:text-[80px] font-bold text-[#f97316] tracking-wider">
              NOT FOUND
            </span>
          </div>
        </div>
        
        <p className="text-[18px] text-gray-400 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/"
            className="px-6 py-3 bg-[#f97316] text-black text-[15px] font-medium rounded-lg hover:bg-[#f97316]/90 transition-all"
          >
            Return Home
          </Link>
          <Link 
            href="/contact"
            className="px-6 py-3 bg-white/5 text-white text-[15px] font-medium rounded-lg hover:bg-white/10 transition-all border border-white/10"
          >
            Contact Us
          </Link>
        </div>
        
        {/* Corner brackets */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] pointer-events-none">
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#f97316]/30" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#f97316]/30" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#f97316]/30" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#f97316]/30" />
        </div>
      </div>
    </main>
  );
}
