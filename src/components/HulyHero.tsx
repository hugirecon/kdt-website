'use client';

import Image from 'next/image';

export default function HulyHero() {
  return (
    <div className="relative w-full min-h-[90vh] lg:min-h-[110vh]">
      {/* Laser video - exact huly.io video, positioned to show laser beams from top */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="absolute w-full h-auto min-h-full object-cover mix-blend-lighten"
          style={{
            top: '-10%',
            left: '50%',
            transform: 'translateX(-50%)',
            minWidth: '100%',
          }}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/hero/hero.mp4" type="video/mp4" />
          <source src="/videos/hero/hero.webm" type="video/webm" />
        </video>
      </div>
      
      {/* Operator image - positioned where the laser lands */}
      <div className="relative z-10 pt-[35vh] lg:pt-[45vh]">
        <div className="relative mx-auto" style={{ maxWidth: '90%' }}>
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
      
      {/* Bottom fade to page background */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050a05] to-transparent z-20 pointer-events-none" />
    </div>
  );
}
