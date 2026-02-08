'use client';

import Image from 'next/image';

export default function HulyHero() {
  return (
    <div className="relative w-full min-h-[80vh] lg:min-h-screen">
      {/* Laser video background - exact huly.io video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="absolute w-[200%] h-[150%] -left-[50%] -top-[25%] object-cover mix-blend-lighten opacity-90"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/hero/hero.mp4" type="video/mp4" />
          <source src="/videos/hero/hero.webm" type="video/webm" />
        </video>
      </div>
      
      {/* Operator image - large, below the laser center point */}
      <div className="relative z-10 pt-[30vh] lg:pt-[40vh]">
        <div className="relative max-w-5xl mx-auto px-4">
          <div className="relative rounded-t-xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 border-b-0">
            <Image
              src="/images/operations.jpg"
              alt="KDT Operator"
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050a05] to-transparent z-20 pointer-events-none" />
    </div>
  );
}
