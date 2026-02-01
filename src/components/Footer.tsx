import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="KDT" className="w-8 h-8 object-contain" />
              <span className="text-white font-semibold text-lg tracking-tight">KDT</span>
            </Link>
            <p className="text-[14px] text-gray-500 leading-relaxed">
              The highest echelon of private military services, enabled by one-of-one technology.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-[13px] text-gray-400 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-[14px] text-gray-500 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/team" className="text-[14px] text-gray-500 hover:text-white transition-colors">Team</Link></li>
              <li><Link href="/careers" className="text-[14px] text-gray-500 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="text-[14px] text-gray-500 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-[13px] text-gray-400 uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-[14px] text-gray-500 hover:text-white transition-colors">All Services</Link></li>
              <li><Link href="/hire" className="text-[14px] text-gray-500 hover:text-white transition-colors">Hire KDT</Link></li>
              <li><Link href="/training" className="text-[14px] text-gray-500 hover:text-white transition-colors">Training</Link></li>
              <li><Link href="/contact" className="text-[14px] text-gray-500 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-[13px] text-gray-400 uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2 text-[14px] text-gray-500">
              <li>contact@knightdivisiontactical.com</li>
              <li>New York, NY</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-[14px] text-gray-500">
              Copyright © {new Date().getFullYear()} Knight Division Tactical. All rights reserved.
            </span>
            <div className="flex flex-wrap items-center gap-6 text-[14px]">
              <Link href="/terms" className="text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
