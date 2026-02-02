"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// ============ SCRAMBLE TEXT COMPONENT ============
// Matches the effect from MagneticScrambleButton
function ScrambleText({ 
  text, 
  trigger,
  scrambleChars = "!@#$%^&*()_+-=[]{}|;:,.<>?",
  durationMs = 600
}: { 
  text: string; 
  trigger: number;
  scrambleChars?: string;
  durationMs?: number;
}) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    const intervalMs = 20;
    const totalTicks = durationMs / intervalMs;
    const charsPerTick = text.length / totalTicks;
    
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) return text[index];
            return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
          })
          .join("")
      );
      
      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += charsPerTick;
    }, intervalMs);
    
    return () => clearInterval(interval);
  }, [trigger, text, scrambleChars, durationMs]);

  return <>{displayText}</>;
}

// EXACT replica of Framer Mega Dropdown component
// https://www.framer.com/marketplace/components/mega-drop-down/
// https://mega-drop-down.framer.website/

interface DropdownItem {
  title: string;
  description: string;
  href: string;
  image: string;
}

interface NavItemWithDropdown {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

const NAV_ITEMS: NavItemWithDropdown[] = [
  { 
    label: "About", 
    href: "/about",
    dropdown: [
      { title: "Our Story", description: "Learn how Knight Division Tactical was founded and our journey to becoming an industry leader.", href: "/about#story", image: "/images/tactical-1.jpg" },
      { title: "Leadership", description: "Meet the command team driving KDT's mission and opera\u00ADtional excel\u00ADlence.", href: "/team", image: "/images/tactical-2.jpg" },
      { title: "Mission", description: "Discover the core values and prin\u00ADciples that guide every\u00ADthing we do.", href: "/about#mission", image: "/images/tactical-3.jpg" },
    ]
  },
  { 
    label: "Services", 
    href: "/services",
    dropdown: [
      { title: "Direct Action", description: "Elite capabil\u00ADities for high-threat environ\u00ADments and contested zones.", href: "/services/direct-action", image: "/images/tactical-1.jpg" },
      { title: "Reconnaissance", description: "Full-spectrum intelli\u00ADgence from collec\u00ADtion through dissem\u00ADination.", href: "/services/reconnaissance", image: "/images/tactical-2.jpg" },
      { title: "Counter-Trafficking", description: "Disrupt\u00ADing networks that profit from exploit\u00ADation.", href: "/services/counter-trafficking", image: "/images/tactical-3.jpg" },
      { title: "All Services", description: "Wild\u00ADlife Miti\u00ADgation, Mari\u00ADtime, and more.", href: "/services", image: "/images/tactical-4.jpg" },
    ]
  },
  { 
    label: "Careers", 
    href: "/careers",
    dropdown: [
      { title: "Open Positions", description: "Browse current oppor\u00ADtunities and find your place within KDT.", href: "/careers#positions", image: "/images/tactical-4.jpg" },
      { title: "Benefits", description: "Compet\u00ADitive compen\u00ADsation, training, and growth oppor\u00ADtunities for all team members.", href: "/careers#benefits", image: "/images/tactical-5.jpg" },
      { title: "Training Path", description: "Our compre\u00ADhensive program to develop elite security profes\u00ADsionals.", href: "/training", image: "/images/tactical-1.jpg" },
    ]
  },
  { label: "Training", href: "/training" },
  { label: "VOC", href: "/voc" },
];

interface NavProps {
  activePath?: string;
}

export default function Nav(_props: NavProps = {}) {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [hoveredItem, setHoveredItem] = useState<number>(0);

  return (
    <>
      {/* Google Font: Inria Sans & Inria Serif */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inria+Sans:wght@400&family=Inria+Serif:wght@400&display=swap" rel="stylesheet" />
      
      <style jsx global>{`
        /* ================================================
           EXACT Framer Mega Dropdown Component
           https://mega-drop-down.framer.website/
           ================================================ */
        
        .framer-nav {
          position: fixed;
          top: 16px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 50;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 0;
        }

        .framer-nav-item {
          position: relative;
        }

        .framer-nav-link {
          display: block;
          padding: 8px;
          font-family: 'Inria Sans', sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1em;
          color: rgb(170, 172, 171);
          text-decoration: none;
          cursor: pointer;
          user-select: none;
          transition: color 0.15s ease;
        }

        .framer-nav-link:hover {
          color: rgb(255, 255, 255);
        }

        .framer-nav-link-with-dropdown {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .framer-dropdown-arrow {
          width: 16px;
          height: 16px;
          color: rgb(255, 235, 240);
          transition: transform 0.2s ease;
        }

        .framer-nav-item:hover .framer-dropdown-arrow {
          transform: rotate(180deg);
        }

        /* ================================================
           MEGA DROPDOWN CONTAINER
           ================================================ */
        .framer-mega-dropdown {
          position: absolute;
          top: 48px;
          left: 0;
          background-color: rgb(13, 13, 13);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 0px;
          padding: 16px 16px 16px 8px;
          display: flex;
          flex-direction: row;
          gap: 16px;
          opacity: 0;
          visibility: hidden;
          transform: scale(0);
          transform-origin: 15% 0%;
          transition: all 0.2s ease;
        }

        .framer-mega-dropdown.active {
          opacity: 1;
          visibility: visible;
          transform: scale(1);
        }

        /* Corner decorations - exact 4x4px white squares */
        .framer-corner {
          position: absolute;
          width: 4px;
          height: 4px;
          background-color: rgb(255, 255, 255);
          z-index: 1;
        }

        .framer-corner-tl { top: -2px; left: -2px; }
        .framer-corner-tr { top: -2px; right: -2px; }
        .framer-corner-bl { bottom: -2px; left: -2px; }
        .framer-corner-br { bottom: -2px; right: -2px; }

        /* ================================================
           MENU ITEMS (LEFT COLUMN)
           ================================================ */
        .framer-menu-links {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 0;
          height: min-content;
          overflow: hidden;
        }

        .framer-menu-link {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px 16px;
          text-decoration: none;
          cursor: pointer;
          position: relative;
          width: min-content;
          height: min-content;
          overflow: hidden;
        }

        .framer-menu-link-wrapper {
          display: flex;
          align-items: center;
          gap: 8px;
          position: relative;
        }

        .framer-menu-indicator {
          position: absolute;
          left: -8px;
          top: 50%;
          transform: translateY(-50%) scale(0.8) rotate(-45deg);
          width: 4px;
          height: 4px;
          background-color: rgb(180, 255, 179);
          opacity: 0;
          transition: opacity 0.15s ease, transform 0.15s ease;
        }

        .framer-menu-link.active .framer-menu-indicator {
          opacity: 1;
          transform: translateY(-50%) scale(1) rotate(-45deg);
        }

        .framer-menu-link-text {
          font-family: 'Inria Sans', sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1em;
          color: rgb(170, 172, 171);
          white-space: nowrap;
          transition: color 0.15s ease;
        }

        .framer-menu-link.active .framer-menu-link-text {
          color: rgb(255, 255, 255);
        }

        /* ================================================
           PREVIEW CARDS (RIGHT COLUMN) - STACKED
           ================================================ */
        .framer-preview-cards {
          position: relative;
          width: 200px;
          height: 250px;
          overflow: hidden;
        }

        .framer-cards-stack {
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 16px;
          transition: transform 0.3s ease;
          z-index: 1;
          width: 200px;
        }

        .framer-preview-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 12px;
          padding: 12px;
          width: 200px;
          height: 250px;
          background-color: rgb(16, 17, 14);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          text-decoration: none;
          cursor: pointer;
          overflow: hidden;
          position: relative;
          flex-shrink: 0;
        }

        /* ================================================
           CARD IMAGE
           ================================================ */
        .framer-preview-image-wrapper {
          width: 100%;
          aspect-ratio: 1.76;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-shrink: 0;
        }

        .framer-preview-image-container {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 176px;
          border-radius: 8px;
          border: 2px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
          box-shadow: 
            rgba(0, 0, 0, 0.18) 0px 0.602187px 0.602187px -1.25px,
            rgba(0, 0, 0, 0.16) 0px 2.28853px 2.28853px -2.5px,
            rgba(0, 0, 0, 0.06) 0px 10px 10px -3.75px;
          transition: all 0.2s ease;
        }

        .framer-preview-card:hover .framer-preview-image-container {
          top: -4px;
          bottom: unset;
          left: -4px;
          right: -4px;
          width: auto;
          height: 105px;
          transform: none;
        }

        .framer-preview-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Arrow icon on image - appears on hover */
        .framer-card-icon {
          position: absolute;
          top: 6px;
          right: 6px;
          width: 16px;
          height: 16px;
          color: rgb(255, 235, 240);
          opacity: 0;
          transform: rotate(45deg);
          transition: opacity 0.2s ease, transform 0.2s ease;
          z-index: 4;
        }

        .framer-preview-card:hover .framer-card-icon {
          opacity: 1;
          transform: rotate(0deg);
        }

        /* ================================================
           CARD TEXT
           ================================================ */
        .framer-preview-text {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 8px;
          width: 100%;
          min-height: 0;
          position: relative;
          z-index: 1;
        }

        .framer-preview-title {
          font-family: 'Inria Sans', sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.4em;
          letter-spacing: 0em;
          color: rgb(255, 255, 255);
          margin: 0;
          user-select: none;
          pointer-events: none;
          width: 100%;
        }

        .framer-preview-description {
          font-family: 'Inria Serif', serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.4em;
          letter-spacing: 0em;
          color: rgb(170, 172, 171);
          margin: 0;
          user-select: none;
          pointer-events: none;
          width: 100%;
          height: 100%;
          hyphens: manual;
          -webkit-hyphens: manual;
        }

        /* ================================================
           BACKGROUND BLUR EFFECT
           ================================================ */
        .framer-preview-bg {
          position: absolute !important;
          inset: -64px;
          filter: blur(30px);
          -webkit-filter: blur(30px);
          opacity: 0.1;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .framer-preview-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>

      <nav className="framer-nav">
        {NAV_ITEMS.map((item, index) => (
          <div 
            key={item.href}
            className="framer-nav-item"
            onMouseEnter={() => {
              if (item.dropdown) {
                setActiveDropdown(index);
                setHoveredItem(0);
              }
            }}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {item.dropdown ? (
              <div className="framer-nav-link framer-nav-link-with-dropdown">
                <span>{item.label}</span>
                <svg 
                  className="framer-dropdown-arrow"
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" 
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            ) : (
              <Link href={item.href} className="framer-nav-link">
                {item.label}
              </Link>
            )}
            
            {item.dropdown && (
              <div className={`framer-mega-dropdown ${activeDropdown === index ? 'active' : ''}`}>
                {/* Corner decorations */}
                <div className="framer-corner framer-corner-tl" />
                <div className="framer-corner framer-corner-tr" />
                <div className="framer-corner framer-corner-bl" />
                <div className="framer-corner framer-corner-br" />
                
                {/* Left column - menu links */}
                <div className="framer-menu-links">
                  {item.dropdown.map((dropItem, dropIndex) => (
                    <Link
                      key={dropItem.href}
                      href={dropItem.href}
                      className={`framer-menu-link ${hoveredItem === dropIndex ? 'active' : ''}`}
                      onMouseEnter={() => setHoveredItem(dropIndex)}
                    >
                      <div className="framer-menu-link-wrapper">
                        <div className="framer-menu-indicator" />
                        <span className="framer-menu-link-text">{dropItem.title}</span>
                      </div>
                    </Link>
                  ))}
                </div>
                
                {/* Right column - stacked preview cards */}
                <div className="framer-preview-cards">
                  <div 
                    className="framer-cards-stack"
                    style={{ transform: `translateY(${-hoveredItem * 266}px)` }}
                  >
                    {item.dropdown.map((dropItem) => (
                      <Link 
                        key={dropItem.href}
                        href={dropItem.href}
                        className="framer-preview-card"
                      >
                        {/* Background blur */}
                        <div className="framer-preview-bg">
                          <img 
                            src={dropItem.image}
                            alt=""
                          />
                        </div>
                        
                        {/* Image with hover icon */}
                        <div className="framer-preview-image-wrapper">
                          <div className="framer-preview-image-container">
                            <img 
                              src={dropItem.image}
                              alt={dropItem.title}
                              className="framer-preview-image"
                            />
                            {/* Arrow icon - appears on hover */}
                            <svg 
                              className="framer-card-icon"
                              xmlns="http://www.w3.org/2000/svg" 
                              viewBox="0 0 20 20" 
                              fill="currentColor"
                            >
                              <path 
                                fillRule="evenodd" 
                                d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z" 
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Text content */}
                        <div className="framer-preview-text">
                          <p className="framer-preview-title">
                            <ScrambleText 
                              text={dropItem.title} 
                              trigger={hoveredItem}
                            />
                          </p>
                          <h3 className="framer-preview-description">
                            <ScrambleText 
                              text={dropItem.description} 
                              trigger={hoveredItem}
                            />
                          </h3>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>
    </>
  );
}
