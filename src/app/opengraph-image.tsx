import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Knight Division Tactical';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(180deg, #0a0a0a 0%, #111111 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Glow effect */}
        <div
          style={{
            position: 'absolute',
            width: 600,
            height: 600,
            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        
        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 10,
          }}
        >
          {/* Logo placeholder */}
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: 24,
              background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.2) 0%, rgba(249, 115, 22, 0.1) 100%)',
              border: '2px solid rgba(249, 115, 22, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 32,
            }}
          >
            <span style={{ color: '#f97316', fontSize: 48, fontWeight: 'bold' }}>KDT</span>
          </div>
          
          {/* Title */}
          <h1
            style={{
              fontSize: 56,
              fontWeight: 'bold',
              color: 'white',
              margin: 0,
              letterSpacing: '-0.02em',
            }}
          >
            Knight Division Tactical
          </h1>
          
          {/* Tagline */}
          <p
            style={{
              fontSize: 24,
              color: '#888888',
              marginTop: 16,
            }}
          >
            The Premier Private Security Firm
          </p>
        </div>
        
        {/* Bottom line */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            display: 'flex',
            gap: 32,
            alignItems: 'center',
          }}
        >
          <span style={{ color: '#f97316', fontSize: 16 }}>knightdivisiontactical.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
