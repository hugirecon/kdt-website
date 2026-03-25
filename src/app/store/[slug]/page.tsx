"use client";

import { useState, useEffect } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import {
  getProductByHandle,
  getProductPrice,
  getProductCategory,
  getProductTag,
  type MedusaProduct,
} from "@/lib/store-data";

// ============ PRODUCT DATA (FALLBACK) ============
interface ProductData {
  slug: string;
  title: string;
  price: string;
  category: string;
  tag: string;
  badges: string[];
  description: string;
  details: string[];
  images: string[];
}

const FALLBACK_PRODUCTS: Record<string, ProductData> = {
  "kdt-roman-eagle-patch": {
    slug: "kdt-roman-eagle-patch",
    title: "KDT Roman Eagle Patch",
    price: "$11.50",
    category: "apparel",
    tag: "Limited Edition",
    badges: ["Bestseller"],
    description: "KDT Roman Eagle Patch. Woven, Velcro back (hook and loop), roughly 3 inches x 3 inches.",
    details: [
      "Woven, not embroidered, for higher definition and visibly higher quality",
      "Velcro back (hook and loop) — sticks to any typical velcro surface",
      "Approximately 3\" x 3\"",
      "Compatible with all standard plate carriers and gear",
    ],
    images: [
      "/images/store/roman-eagle-patch-1.jpg",
      "/images/store/roman-eagle-patch-2.jpg",
      "/images/store/roman-eagle-patch-3.jpg",
      "/images/store/roman-eagle-patch-4.jpg",
      "/images/store/roman-eagle-patch-5.jpg",
      "/images/store/roman-eagle-patch-6.jpg",
      "/images/store/roman-eagle-patch-7.jpg",
      "/images/store/roman-eagle-patch-8.jpg",
    ],
  },
  "kdt-training-t-shirt": {
    slug: "kdt-training-t-shirt",
    title: "KDT Training T-Shirt",
    price: "$35",
    category: "apparel",
    tag: "Apparel",
    badges: [],
    description: "Premium black cotton tee with subdued KDT insignia. Moisture-wicking fabric built for range days and PT sessions.",
    details: [
      "100% premium cotton, moisture-wicking",
      "Subdued KDT insignia",
      "Runs true to size",
      "Built for range days and PT sessions",
    ],
    images: [],
  },
  "kdt-tactical-cap": {
    slug: "kdt-tactical-cap",
    title: "KDT Tactical Cap",
    price: "$28",
    category: "apparel",
    tag: "Apparel",
    badges: [],
    description: "Fitted tactical cap in matte black with embroidered KDT logo. Low-profile design with adjustable strap.",
    details: [
      "Matte black fitted design",
      "Embroidered KDT logo",
      "Low-profile silhouette",
      "Adjustable strap — one size fits most",
    ],
    images: [],
  },
  "kdt-hoodie": {
    slug: "kdt-hoodie",
    title: "KDT Hoodie",
    price: "$65",
    category: "apparel",
    tag: "Apparel",
    badges: [],
    description: "Heavyweight black hoodie with kangaroo pocket and embroidered KDT branding. Double-lined hood, ribbed cuffs.",
    details: [
      "Heavyweight construction",
      "Kangaroo pocket",
      "Double-lined hood with ribbed cuffs",
      "Embroidered KDT branding",
    ],
    images: [],
  },
  "kdt-challenge-coin": {
    slug: "kdt-challenge-coin",
    title: "KDT Challenge Coin",
    price: "$20",
    category: "collectibles",
    tag: "Collectibles",
    badges: [],
    description: "Limited edition die-cast challenge coin with antique brass finish. KDT crest on front, unit motto on reverse.",
    details: [
      "Die-cast with antique brass finish",
      "KDT crest on front",
      "Unit motto on reverse",
      "Collector's item — limited run",
    ],
    images: [],
  },
  "kdt-range-bag": {
    slug: "kdt-range-bag",
    title: "KDT Range Bag",
    price: "$85",
    category: "gear",
    tag: "Gear",
    badges: [],
    description: "Tactical range bag with MOLLE webbing, padded compartments, and heavy-duty zippers. Fits handguns, mags, eyes, ears, and more.",
    details: [
      "MOLLE webbing for modular attachments",
      "Padded compartments",
      "Heavy-duty YKK zippers",
      "Fits handguns, magazines, eye/ear pro, and accessories",
    ],
    images: [],
  },
};

// ============ MAP MEDUSA PRODUCT TO LOCAL FORMAT ============
function mapMedusaToProductData(mp: MedusaProduct): ProductData {
  const price = getProductPrice(mp);
  return {
    slug: mp.handle,
    title: mp.title,
    price: price || "TBD",
    category: getProductCategory(mp),
    tag: getProductTag(mp),
    badges: mp.metadata?.badges
      ? (mp.metadata.badges as string[])
      : [],
    description: mp.description || "",
    details: mp.metadata?.details
      ? (mp.metadata.details as string[])
      : [],
    images: mp.images?.map((img) => img.url) ?? (mp.thumbnail ? [mp.thumbnail] : []),
  };
}

// ============ IMAGE GALLERY ============
function ImageGallery({ images, title }: { images: string[]; title: string }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (images.length === 0) {
    return (
      <div className="w-full aspect-square bg-white/[0.02] rounded-2xl border border-white/[0.08] flex items-center justify-center">
        <div className="text-center">
          <svg className="w-20 h-20 text-white/10 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
          </svg>
          <p className="text-gray-600 text-sm">Product images coming soon</p>
        </div>
      </div>
    );
  }

  const isExternal = (url: string) => url.startsWith("http");

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.08]">
        <Image
          src={images[selectedIndex]}
          alt={`${title} - Image ${selectedIndex + 1}`}
          fill
          className="object-cover"
          priority
          {...(isExternal(images[selectedIndex]) ? { unoptimized: true } : {})}
        />
        {/* Badges overlay */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded">
            {selectedIndex + 1} / {images.length}
          </span>
        </div>
      </div>

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className="grid grid-cols-8 gap-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelectedIndex(i)}
              className={`
                relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200
                ${selectedIndex === i
                  ? 'border-[#f97316] opacity-100'
                  : 'border-white/[0.08] opacity-50 hover:opacity-80'
                }
              `}
            >
              <Image
                src={img}
                alt={`${title} thumbnail ${i + 1}`}
                fill
                className="object-cover"
                {...(isExternal(img) ? { unoptimized: true } : {})}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ============ PRODUCT DETAIL PAGE ============
export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const fallback = FALLBACK_PRODUCTS[slug];
  const [product, setProduct] = useState<ProductData | null>(fallback || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function fetchProduct() {
      try {
        const medusaProduct = await getProductByHandle(slug);
        if (!cancelled && medusaProduct) {
          const mapped = mapMedusaToProductData(medusaProduct);
          // Merge: prefer Medusa data but keep fallback details/images if Medusa has none
          if (fallback) {
            if (mapped.details.length === 0) mapped.details = fallback.details;
            if (mapped.images.length === 0) mapped.images = fallback.images;
            if (mapped.badges.length === 0) mapped.badges = fallback.badges;
          }
          setProduct(mapped);
        }
      } catch (err) {
        console.error("Failed to fetch product from Medusa, using fallback:", err);
        // Keep fallback — already set as initial state
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchProduct();
    return () => { cancelled = true; };
  }, [slug]);

  // If no fallback and still loading, show loading state
  if (loading && !product) {
    return (
      <main className="min-h-screen bg-[#030305]">
        <Nav activePath="/store" />
        <div className="pt-32 pb-24 px-6 text-center">
          <div className="inline-block w-8 h-8 border-2 border-[#f97316]/30 border-t-[#f97316] rounded-full animate-spin" />
          <p className="text-gray-500 text-[14px] mt-4">Loading product...</p>
        </div>
      </main>
    );
  }

  // No product found at all
  if (!product) {
    notFound();
  }

  // Determine if this product has a live purchase link
  const hasLivePurchaseLink = product.slug === "kdt-roman-eagle-patch";

  return (
    <main className="min-h-screen bg-[#030305]">
      <Nav activePath="/store" />

      {/* Breadcrumb */}
      <div className="pt-24 pb-4 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-2 text-[13px] text-gray-500">
            <Link href="/store" className="hover:text-white transition-colors">Store</Link>
            <span>/</span>
            <span className="text-gray-400">{product.title}</span>
          </div>
        </div>
      </div>

      {/* Product Content */}
      <section className="pb-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Image Gallery */}
            <ImageGallery images={product.images} title={product.title} />

            {/* Right: Product Info */}
            <div className="flex flex-col">
              {/* Badges */}
              {product.badges.length > 0 && (
                <div className="flex gap-2 mb-4">
                  {product.badges.map((badge) => (
                    <span key={badge} className="text-[11px] font-bold uppercase tracking-wider bg-[#f97316] text-black px-3 py-1 rounded">
                      {badge}
                    </span>
                  ))}
                </div>
              )}

              {/* Tag */}
              <span className="text-[12px] font-medium uppercase tracking-wider text-[#f97316] mb-3">
                {product.tag}
              </span>

              {/* Title */}
              <h1 className="text-[36px] md:text-[44px] font-bold text-white leading-tight mb-4">
                {product.title}
              </h1>

              {/* Price */}
              <div className="text-[32px] font-bold text-[#f97316] mb-6">
                {product.price}
              </div>

              {/* Description */}
              <p className="text-[16px] text-gray-400 leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Details */}
              {product.details.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-[14px] font-semibold text-white uppercase tracking-wider mb-4">
                    Details
                  </h3>
                  <ul className="space-y-3">
                    {product.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-[15px] text-gray-400">
                        <svg className="w-5 h-5 text-[#f97316] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Buy / Coming Soon Button */}
              {hasLivePurchaseLink ? (
                <a
                  href="https://knightdivisiontactical.com/shop/ols/products/kdt-roman-eagle-patch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[15px] font-semibold text-black bg-[#f97316] rounded-lg px-6 py-4 justify-center hover:bg-[#ea580c] transition-all duration-300 mb-6"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                  <span>Buy Now</span>
                </a>
              ) : (
                <div className="flex items-center text-[15px] font-semibold text-gray-500 border border-white/10 rounded-lg px-6 py-4 justify-center hover:border-[#f97316]/30 hover:text-[#f97316]/70 transition-all duration-300 mb-6">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Coming Soon</span>
                </div>
              )}

              {/* Back to Store */}
              <Link
                href="/store"
                className="inline-flex items-center gap-2 text-[14px] text-gray-500 hover:text-[#f97316] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                Back to Store
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </main>
  );
}
