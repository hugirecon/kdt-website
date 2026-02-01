"use client";

// Frosted Glass Card - Based on Jon Kantner's CodePen
// https://codepen.io/jkantner/pen/GgRagRY

interface FrostedGlassCardProps {
  title: string;
  logo?: string;
  url?: string;
  description?: string;
  image?: string;
  href?: string;
}

export default function FrostedGlassCard({ 
  title, 
  logo, 
  url, 
  description,
  image,
  href 
}: FrostedGlassCardProps) {
  const CardWrapper = href ? 'a' : 'div';
  
  return (
    <>
      <style jsx global>{`
        /* Frosted Glass Card - Jon Kantner Style */
        :root {
          --hue-primary: 223;
          --hue-secondary: 178;
          --primary500: hsl(var(--hue-primary), 90%, 50%);
          --primary600: hsl(var(--hue-primary), 90%, 60%);
          --primary700: hsl(var(--hue-primary), 90%, 70%);
          --secondary500: hsl(var(--hue-secondary), 90%, 50%);
          --secondary600: hsl(var(--hue-secondary), 90%, 60%);
        }
        
        .frosted-card {
          --border-radius: 1.5rem;
          --card-bg: rgba(255, 255, 255, 0.05);
          --card-border: rgba(255, 255, 255, 0.1);
          
          position: relative;
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 24rem;
          padding: 1.5rem;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: var(--border-radius);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .frosted-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0) 50%,
            rgba(255, 255, 255, 0.05) 100%
          );
          pointer-events: none;
        }
        
        .frosted-card:hover {
          transform: translateY(-4px);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.3),
            0 0 60px rgba(var(--hue-primary), 0.1);
        }
        
        .frosted-card__image {
          width: 100%;
          aspect-ratio: 16 / 9;
          object-fit: cover;
          border-radius: calc(var(--border-radius) - 0.5rem);
          margin-bottom: 1rem;
        }
        
        .frosted-card__content {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          position: relative;
          z-index: 1;
        }
        
        .frosted-card__logo {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--primary500);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .frosted-card__title {
          font-size: 1.5rem;
          font-weight: 600;
          line-height: 1.3;
          color: white;
          margin: 0;
        }
        
        .frosted-card__description {
          font-size: 0.875rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
        }
        
        .frosted-card__url {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
          margin-top: auto;
        }
        
        /* Glass effect overlay */
        .frosted-card__glass-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.08) 0%,
            transparent 40%,
            transparent 60%,
            rgba(255, 255, 255, 0.03) 100%
          );
          pointer-events: none;
          border-radius: inherit;
        }
        
        /* Glow effect on hover */
        .frosted-card__glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            circle at center,
            rgba(var(--hue-primary), 0.15) 0%,
            transparent 50%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        
        .frosted-card:hover .frosted-card__glow {
          opacity: 1;
        }
      `}</style>
      
      <CardWrapper 
        className="frosted-card"
        {...(href ? { href } : {})}
      >
        <div className="frosted-card__glass-overlay" />
        <div className="frosted-card__glow" />
        
        {image && (
          <img 
            src={image} 
            alt={title}
            className="frosted-card__image"
          />
        )}
        
        <div className="frosted-card__content">
          {logo && <div className="frosted-card__logo">{logo}</div>}
          <h3 className="frosted-card__title">{title}</h3>
          {description && <p className="frosted-card__description">{description}</p>}
          {url && <p className="frosted-card__url">{url}</p>}
        </div>
      </CardWrapper>
    </>
  );
}
