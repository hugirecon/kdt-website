"use client";

import Link from "next/link";
import Nav from "@/components/Nav";

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-black">
      <Nav />
      
      {/* Login Form */}
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="relative">
          {/* Outer glow layers */}
          <div className="absolute inset-[-2rem] opacity-5 border-l-2 border-r-2 border-transparent" style={{
            borderImage: 'linear-gradient(transparent, #ffe0a6, transparent) 1'
          }} />
          <div className="absolute inset-[-1rem] opacity-15 border-l-2 border-r-2 border-transparent" style={{
            borderImage: 'linear-gradient(transparent, #ffe0a6, transparent) 1'
          }} />
          
          {/* Main form container */}
          <form 
            className="relative p-8 md:p-12 flex flex-col items-center gap-12 border-l-2 border-r-2 border-transparent"
            style={{
              borderImage: 'linear-gradient(transparent, #ffe0a6, transparent) 1',
              background: 'radial-gradient(100% 61.73% at 100% 50%, rgba(255, 224, 166, 0.05) 0%, transparent 100%), radial-gradient(91.09% 56.23% at 0% 50%, rgba(255, 224, 166, 0.05) 0%, transparent 100%)'
            }}
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Animated texture overlay */}
            <div 
              className="absolute inset-0 pointer-events-none mix-blend-soft-light animate-movingLines"
              style={{
                backgroundImage: 'linear-gradient(0deg, #ffffff 1px, transparent 1px)',
                backgroundSize: '1px 5px',
                maskImage: 'radial-gradient(30% 45% at 100% 50%, white 0%, transparent 100%), radial-gradient(30% 45% at 0% 50%, white 0%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(30% 45% at 100% 50%, white 0%, transparent 100%), radial-gradient(30% 45% at 0% 50%, white 0%, transparent 100%)'
              }}
            />
            
            {/* Title */}
            <span 
              className="text-2xl md:text-3xl font-bold text-center tracking-[0.5rem] uppercase bg-clip-text text-transparent"
              style={{
                background: 'linear-gradient(rgb(170, 170, 170), rgb(78, 78, 78))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text'
              }}
            >
              Login
            </span>
            
            {/* Email Input */}
            <div 
              className="flex items-center w-full border-b border-transparent focus-within:border-[#ffe0a6] transition-all group"
              style={{
                background: 'radial-gradient(47.3% 73.08% at 50% 94.23%, rgba(255, 255, 255, 0.1) 5%, rgba(0, 0, 0, 0) 100%)',
                borderImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.445) 0%, rgba(0, 0, 0, 0) 100%) 1'
              }}
            >
              <svg 
                className="w-6 h-6 stroke-gray-500 group-focus-within:stroke-[#ffe0a6] transition-colors ml-2" 
                viewBox="0 0 24 24" 
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M4 7L10.94 11.3375C11.5885 11.7428 12.4115 11.7428 13.06 11.3375L20 7M5 18H19C20.1046 18 21 17.1046 21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-transparent border-none p-3 text-white focus:text-[#ffe0a6] focus:outline-none placeholder:text-gray-500"
              />
            </div>
            
            {/* Password Input */}
            <div 
              className="flex items-center w-full border-b border-transparent focus-within:border-[#ffe0a6] transition-all group"
              style={{
                background: 'radial-gradient(47.3% 73.08% at 50% 94.23%, rgba(255, 255, 255, 0.1) 5%, rgba(0, 0, 0, 0) 100%)',
                borderImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.445) 0%, rgba(0, 0, 0, 0) 100%) 1'
              }}
            >
              <svg 
                className="w-6 h-6 stroke-gray-500 group-focus-within:stroke-[#ffe0a6] transition-colors ml-2" 
                viewBox="0 0 24 24" 
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full bg-transparent border-none p-3 text-white focus:text-[#ffe0a6] focus:outline-none placeholder:text-gray-500"
              />
            </div>
            
            {/* Login Button */}
            <div className="relative w-full group transition-all hover:w-[105%] active:w-[95%]">
              {/* Button texture overlay */}
              <div 
                className="absolute inset-0 pointer-events-none mix-blend-soft-light"
                style={{
                  backgroundImage: 'linear-gradient(0deg, rgba(255, 255, 255, 0.376) 0.5px, transparent 0.5px)',
                  backgroundSize: '0.1px 3px',
                  maskImage: 'radial-gradient(40% 45% at 100% 50%, white 0%, transparent 100%), radial-gradient(40% 45% at 0% 50%, white 0%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(40% 45% at 100% 50%, white 0%, transparent 100%), radial-gradient(40% 45% at 0% 50%, white 0%, transparent 100%)'
                }}
              />
              <button 
                type="button"
                className="w-full p-4 text-[#ffe0a6] text-base text-center border-l border-r border-transparent cursor-pointer group-hover:animate-flicker"
                style={{
                  background: 'radial-gradient(100% 45% at 100% 50%, rgba(255, 224, 166, 0.084) 0%, rgba(115, 115, 115, 0) 100%), radial-gradient(100% 45% at 0% 50%, rgba(255, 224, 166, 0.084) 0%, rgba(115, 115, 115, 0) 100%)',
                  borderImage: 'linear-gradient(transparent, #ffe0a6, transparent) 1'
                }}
              >
                Coming Soon
              </button>
            </div>
          </form>
        </div>
      </div>
      
      {/* Keyframe animations */}
      <style jsx>{`
        @keyframes flicker {
          0% { filter: brightness(100%); }
          10% { filter: brightness(80%); }
          20% { filter: brightness(120%); }
          30% { filter: brightness(90%); }
          40% { filter: brightness(110%); }
          50% { filter: brightness(100%); }
          60% { filter: brightness(85%); }
          70% { filter: brightness(95%); }
          80% { filter: brightness(105%); }
          90% { filter: brightness(115%); }
          100% { filter: brightness(100%); }
        }
        
        @keyframes movingLines {
          0% { background-position: 0 0; }
          100% { background-position: 0 5px; }
        }
        
        .animate-flicker {
          animation: flicker 0.5s infinite;
        }
        
        .animate-movingLines {
          animation: movingLines 1s linear infinite;
        }
      `}</style>
    </div>
  );
}
