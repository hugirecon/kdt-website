'use client';

export default function HulyHero() {
  return (
    <div className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Portal glow video effect */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/glow/portal-glow.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
