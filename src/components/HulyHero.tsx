'use client';

import Image from 'next/image';

export default function HulyHero() {
  return (
    <div className="relative w-full">
      {/* Laser/Glow Effect Container - Very tall, spanning top of site */}
      <div className="relative w-full h-[80vh] md:h-[90vh] lg:h-screen overflow-hidden">
        {/* Animated laser beams - CSS-based for better performance */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Central glow */}
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[60%]"
            style={{
              background: 'radial-gradient(ellipse at center top, rgba(138, 43, 226, 0.4) 0%, rgba(138, 43, 226, 0.2) 25%, rgba(75, 0, 130, 0.1) 50%, transparent 70%)',
            }}
          />
          
          {/* Laser beam 1 - left */}
          <div 
            className="absolute top-0 left-[20%] w-[2px] h-full animate-pulse"
            style={{
              background: 'linear-gradient(to bottom, rgba(138, 43, 226, 0.8) 0%, rgba(138, 43, 226, 0.4) 30%, transparent 60%)',
              boxShadow: '0 0 20px 5px rgba(138, 43, 226, 0.5), 0 0 40px 10px rgba(138, 43, 226, 0.3)',
              animationDuration: '2s',
            }}
          />
          
          {/* Laser beam 2 - center left */}
          <div 
            className="absolute top-0 left-[35%] w-[3px] h-full animate-pulse"
            style={{
              background: 'linear-gradient(to bottom, rgba(147, 51, 234, 0.9) 0%, rgba(147, 51, 234, 0.5) 40%, transparent 70%)',
              boxShadow: '0 0 30px 8px rgba(147, 51, 234, 0.6), 0 0 60px 15px rgba(147, 51, 234, 0.3)',
              animationDuration: '2.5s',
              animationDelay: '0.3s',
            }}
          />
          
          {/* Laser beam 3 - center */}
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[4px] h-full animate-pulse"
            style={{
              background: 'linear-gradient(to bottom, rgba(168, 85, 247, 1) 0%, rgba(168, 85, 247, 0.6) 35%, rgba(168, 85, 247, 0.2) 60%, transparent 80%)',
              boxShadow: '0 0 40px 10px rgba(168, 85, 247, 0.7), 0 0 80px 20px rgba(168, 85, 247, 0.4), 0 0 120px 30px rgba(168, 85, 247, 0.2)',
              animationDuration: '3s',
              animationDelay: '0.1s',
            }}
          />
          
          {/* Laser beam 4 - center right */}
          <div 
            className="absolute top-0 right-[35%] w-[3px] h-full animate-pulse"
            style={{
              background: 'linear-gradient(to bottom, rgba(147, 51, 234, 0.9) 0%, rgba(147, 51, 234, 0.5) 40%, transparent 70%)',
              boxShadow: '0 0 30px 8px rgba(147, 51, 234, 0.6), 0 0 60px 15px rgba(147, 51, 234, 0.3)',
              animationDuration: '2.5s',
              animationDelay: '0.5s',
            }}
          />
          
          {/* Laser beam 5 - right */}
          <div 
            className="absolute top-0 right-[20%] w-[2px] h-full animate-pulse"
            style={{
              background: 'linear-gradient(to bottom, rgba(138, 43, 226, 0.8) 0%, rgba(138, 43, 226, 0.4) 30%, transparent 60%)',
              boxShadow: '0 0 20px 5px rgba(138, 43, 226, 0.5), 0 0 40px 10px rgba(138, 43, 226, 0.3)',
              animationDuration: '2s',
              animationDelay: '0.7s',
            }}
          />
          
          {/* Horizontal glow band */}
          <div 
            className="absolute top-[40%] left-0 right-0 h-[200px] opacity-30"
            style={{
              background: 'linear-gradient(to bottom, transparent, rgba(138, 43, 226, 0.3) 50%, transparent)',
              filter: 'blur(40px)',
            }}
          />
        </div>
        
        {/* Subtle particle/star effect */}
        <div className="absolute inset-0 opacity-40">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 60}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        
        {/* Fade to black at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-[#050a05] via-[#050a05]/80 to-transparent" />
      </div>
      
      {/* Operator Image - Below the laser, very large */}
      <div className="relative w-full -mt-[30vh] md:-mt-[40vh] z-10">
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-purple-900/20 border border-purple-500/10">
            <Image
              src="/images/operations.jpg"
              alt="KDT Operator"
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority
            />
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050a05] via-transparent to-transparent opacity-60" />
          </div>
        </div>
      </div>
    </div>
  );
}
