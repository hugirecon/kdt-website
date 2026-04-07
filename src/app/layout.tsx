import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Providers from "@/components/Providers";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: '#030305',
  width: 'device-width',
  initialScale: 1,
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Knight Division Tactical",
    template: "%s | Knight Division Tactical",
  },
  description: "The highest echelon of private military services, enabled by one-of-one technology.",
  keywords: ["PMC", "Private Military", "Security", "Training", "Knight Division", "Private Security", "Executive Protection"],
  authors: [{ name: "Knight Division Tactical" }],
  creator: "Knight Division Tactical",
  metadataBase: new URL("https://knightdivisiontactical.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://knightdivisiontactical.com",
    siteName: "Knight Division Tactical",
    title: "Knight Division Tactical",
    description: "The highest echelon of private military services, enabled by one-of-one technology.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Knight Division Tactical",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Knight Division Tactical",
    description: "The highest echelon of private military services, enabled by one-of-one technology.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ backgroundColor: '#030305' }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white min-h-screen`}
        style={{ backgroundColor: '#030305' }}
      >
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Knight Division Tactical",
          "legalName": "Knight Division Tactical LLC",
          "url": "https://knightdivisiontactical.com",
          "logo": "https://knightdivisiontactical.com/logo.png",
          "description": "Knight Division Tactical provides Tier 1 private military, executive protection, crisis response, and defense contracting services worldwide.",
          "foundingLocation": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Sheridan",
              "addressRegion": "WY",
              "addressCountry": "US"
            }
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "contact@knightdivisiontactical.com",
            "contactType": "customer service"
          },
          "sameAs": [
            "https://www.facebook.com/138690455996141",
            "https://www.instagram.com/knightdivisiontactical/",
            "https://www.linkedin.com/company/knight-division-tactical",
            "https://www.x.com/KDT_Security",
            "https://www.youtube.com/channel/UC12fOGZ9Mb9zTgAR5EgwrGA"
          ],
          "founder": [
            {
              "@type": "Person",
              "name": "Michael Schulz",
              "jobTitle": "Chief Executive Officer"
            },
            {
              "@type": "Person",
              "name": "Matthew McCalla",
              "jobTitle": "Chief Operating Officer"
            }
          ]
        }} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
