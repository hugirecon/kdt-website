import { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Store",
  description: "Shop official Knight Division Tactical gear including the KDT Roman Eagle Patch, apparel, and tactical equipment.",
  openGraph: {
    title: "KDT Store | Knight Division Tactical",
    description: "Shop official Knight Division Tactical gear including the KDT Roman Eagle Patch, apparel, and tactical equipment.",
    url: "https://knightdivisiontactical.com/store",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Knight Division Tactical Store" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "KDT Store | Knight Division Tactical",
    description: "Shop official Knight Division Tactical gear including the KDT Roman Eagle Patch, apparel, and tactical equipment.",
    images: ["/og-image.png"],
  },
};

const products = [
  {
    "@type": "Product",
    "name": "KDT Roman Eagle Patch",
    "description": "Limited edition embroidered velcro-backed morale patch featuring the KDT Roman Eagle crest.",
    "brand": { "@type": "Brand", "name": "Knight Division Tactical" },
    "offers": { "@type": "Offer", "price": "11.50", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
    "image": "https://knightdivisiontactical.com/images/store/roman-eagle-patch-1.jpg",
    "url": "https://knightdivisiontactical.com/store/kdt-roman-eagle-patch"
  },
  {
    "@type": "Product",
    "name": "KDT Training T-Shirt",
    "description": "Premium black cotton tee with subdued KDT insignia. Moisture-wicking fabric for range days and PT.",
    "brand": { "@type": "Brand", "name": "Knight Division Tactical" },
    "offers": { "@type": "Offer", "price": "35.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
    "url": "https://knightdivisiontactical.com/store/kdt-training-t-shirt"
  },
  {
    "@type": "Product",
    "name": "KDT Tactical Cap",
    "description": "Fitted tactical cap in matte black with embroidered KDT logo.",
    "brand": { "@type": "Brand", "name": "Knight Division Tactical" },
    "offers": { "@type": "Offer", "price": "28.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
    "url": "https://knightdivisiontactical.com/store/kdt-tactical-cap"
  },
  {
    "@type": "Product",
    "name": "KDT Hoodie",
    "description": "Heavyweight black hoodie with kangaroo pocket and embroidered KDT branding.",
    "brand": { "@type": "Brand", "name": "Knight Division Tactical" },
    "offers": { "@type": "Offer", "price": "65.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
    "url": "https://knightdivisiontactical.com/store/kdt-hoodie"
  }
];

export default function StoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {products.map((product, i) => (
        <JsonLd key={i} data={{ "@context": "https://schema.org", ...product }} />
      ))}
      {children}
    </>
  );
}
