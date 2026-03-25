"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";

// ============ TYPES ============
interface Product {
  title: string;
  description: string;
  price: string;
  category: string;
  tag: string;
  image?: string;
  badges?: string[];
  icon?: React.ReactNode;
}

// ============ CATEGORIES ============
const CATEGORIES = [
  { id: "all", label: "All Products" },
  { id: "apparel", label: "Apparel" },
  { id: "gear", label: "Gear" },
  { id: "collectibles", label: "Collectibles" },
];

// ============ PRODUCTS ============
const PRODUCTS: Product[] = [
  {
    title: "KDT Roman Eagle Patch",
    description: "Limited edition embroidered velcro-backed morale patch featuring the KDT Roman Eagle crest. Hook-and-loop compatible with all standard plate carriers and gear.",
    price: "$11.50",
    category: "apparel",
    tag: "Limited Edition",
    image: "/images/store/roman-eagle-patch-1.jpg",
    badges: ["Bestseller"],
  },
  {
    title: "KDT Training T-Shirt",
    description: "Premium black cotton tee with subdued KDT insignia. Moisture-wicking fabric built for range days and PT sessions. Runs true to size.",
    price: "$35",
    category: "apparel",
    tag: "Apparel",
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
  {
    title: "KDT Tactical Cap",
    description: "Fitted tactical cap in matte black with embroidered KDT logo. Low-profile design with adjustable strap. One size fits most.",
    price: "$28",
    category: "apparel",
    tag: "Apparel",
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
  {
    title: "KDT Hoodie",
    description: "Heavyweight black hoodie with kangaroo pocket and embroidered KDT branding. Double-lined hood, ribbed cuffs. Built for cold range mornings.",
    price: "$65",
    category: "apparel",
    tag: "Apparel",
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
  {
    title: "KDT Challenge Coin",
    description: "Limited edition die-cast challenge coin with antique brass finish. KDT crest on front, unit motto on reverse. Collector's item.",
    price: "$20",
    category: "collectibles",
    tag: "Collectibles",
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "KDT Range Bag",
    description: "Tactical range bag with MOLLE webbing, padded compartments, and heavy-duty zippers. Fits handguns, mags, eyes, ears, and more.",
    price: "$85",
    category: "gear",
    tag: "Gear",
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
  },
];

// ============ HERO (DARK) ============
function Hero() {
  return (
    <section className="relative bg-[#0a0a0a] pb-24 px-6" style={{ paddingTop: '8rem' }}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.08),transparent_70%)]" />
      </div>
      
      <div className="relative z-10 max-w-[1200px] mx-auto text-center">
        <h1 className="text-[clamp(40px,5vw,56px)] font-bold text-white leading-[1.1] mb-6">
          KDT Store
        </h1>
        <p className="text-[18px] text-gray-400 leading-relaxed" style={{ maxWidth: "42rem", marginLeft: "auto", marginRight: "auto" }}>
          Official Knight Division Tactical gear and merchandise. Represent the standard.
        </p>
      </div>
    </section>
  );
}

// ============ CATEGORY FILTER ============
function CategoryFilter({ active, onChange }: { active: string; onChange: (id: string) => void }) {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-12">
      {CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`
            px-5 py-2.5 rounded-lg text-[14px] font-medium transition-all duration-300 border
            ${active === cat.id
              ? 'bg-[#f97316] text-black border-[#f97316]'
              : 'bg-white/[0.03] text-gray-400 border-white/[0.08] hover:border-[#f97316]/40 hover:text-white'
            }
          `}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

// ============ PRODUCT CARD ============
function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group p-0 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-[#f97316]/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.08)] transition-all duration-300 backdrop-blur-sm overflow-hidden">
      {/* Image or Icon Placeholder */}
      <div className="relative w-full aspect-square bg-white/[0.02] overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 text-white/10 group-hover:text-[#f97316]/20 transition-colors duration-300">
              {product.icon}
            </div>
          </div>
        )}
        
        {/* Badges */}
        {product.badges && product.badges.length > 0 && (
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            {product.badges.map((badge) => (
              <span key={badge} className="text-[11px] font-bold uppercase tracking-wider bg-[#f97316] text-black px-3 py-1 rounded">
                {badge}
              </span>
            ))}
          </div>
        )}
        
        {/* Category Tag */}
        <span className="absolute top-4 left-4 text-[11px] font-medium uppercase tracking-wider text-[#f97316] bg-[#f97316]/10 backdrop-blur-sm px-3 py-1 rounded border border-[#f97316]/20">
          {product.tag}
        </span>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="flex items-baseline justify-between mb-3">
          <h3 className="text-[18px] font-bold text-white group-hover:text-[#f97316] transition-colors">
            {product.title}
          </h3>
          <span className="text-[20px] font-bold text-[#f97316] ml-4 shrink-0">
            {product.price}
          </span>
        </div>
        
        <p className="text-[14px] text-gray-400 leading-relaxed mb-5">
          {product.description}
        </p>
        
        <div className="flex items-center text-[13px] font-semibold text-gray-500 border border-white/10 rounded-lg px-4 py-2.5 justify-center group-hover:border-[#f97316]/30 group-hover:text-[#f97316]/70 transition-all duration-300">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Coming Soon</span>
        </div>
      </div>
    </div>
  );
}

// ============ PRODUCT GRID ============
function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filtered = activeCategory === "all"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section className="py-24 px-6 bg-[#030305]">
      <div className="max-w-[1200px] mx-auto">
        <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
        
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-[16px]">No products in this category yet. Check back soon.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// ============ CTA (DARK WITH GLOW) ============
function CTA() {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-[#f97316]/5 rounded-full blur-[150px]" />
      </div>
      
      <div className="max-w-[600px] mx-auto text-center relative z-10">
        <h2 className="text-[36px] md:text-[44px] font-bold text-white mb-4 leading-tight">
          Full Store<br />
          <span className="text-[#f97316]">Launching Soon</span>
        </h2>
        <p className="text-[16px] text-gray-400 mb-8">
          Our complete product line is in production. Get notified when the store goes live — or reach out directly for bulk and unit orders.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="px-6 py-3 bg-white text-black text-[15px] font-medium rounded-lg hover:bg-gray-100 transition-all">
            Contact Us
          </Link>
          <Link href="/about" className="px-6 py-3 bg-[#f97316] text-black text-[15px] font-medium rounded-lg hover:bg-[#f97316]/90 transition-all">
            Learn About KDT
          </Link>
        </div>
      </div>
    </section>
  );
}

// ============ FOOTER ============
function Footer() {
  return (
    <footer className="py-8 px-6 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
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
    </footer>
  );
}

// ============ PAGE ============
export default function StorePage() {
  return (
    <main className="min-h-screen">
      <Nav activePath="/store" />
      <Hero />
      <ProductGrid />
      <CTA />
      <Footer />
    </main>
  );
}
