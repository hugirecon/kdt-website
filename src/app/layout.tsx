import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
