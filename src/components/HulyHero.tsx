'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

export default function HulyHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [maskPosition, setMaskPosition] = useState({ x: 300, y: 250 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMaskPosition({ x, y });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500px] lg:h-[600px]"
      style={{
        '--hero-mask-x': `${maskPosition.x}px`,
        '--hero-mask-y': `${maskPosition.y}px`,
        '--hero-mask-size': '300px',
      } as React.CSSProperties}
    >
      {/* Video background with laser/glow effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-[50%] -top-[30%] w-[200%] h-[160%] mix-blend-lighten">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/hero/hero.mp4" type="video/mp4" />
            <source src="/videos/hero/hero.webm" type="video/webm" />
          </video>
        </div>
      </div>

      {/* Mask overlay for glow/spotlight effect */}
      <div 
        className="absolute inset-0 z-10 mix-blend-overlay pointer-events-none"
        style={{
          clipPath: `circle(var(--hero-mask-size) at var(--hero-mask-x) var(--hero-mask-y))`
        }}
      >
        <Image
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/hero-mask-1.svg"
          width={800}
          height={600}
          alt=""
          loading="lazy"
          style={{
            maskImage: `radial-gradient(var(--hero-mask-size) at var(--hero-mask-x) var(--hero-mask-y), black 20%, transparent)`
          }}
        />
        <Image
          className="absolute inset-0 z-10 w-full h-full object-cover"
          src="/images/hero-mask-2.svg"
          width={800}
          height={600}
          alt=""
          loading="lazy"
          style={{
            maskImage: `radial-gradient(var(--hero-mask-size) at var(--hero-mask-x) var(--hero-mask-y), black 20%, transparent)`
          }}
        />
      </div>

      {/* The dashboard/product image */}
      <Image
        className="absolute bottom-0 left-0 right-0 mx-auto rounded-t-lg shadow-2xl shadow-black/50 z-20"
        src="/images/hero-illustration.jpg"
        width={600}
        height={333}
        alt="Dashboard"
        priority
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  );
}
