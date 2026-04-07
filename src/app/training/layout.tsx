import { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Training",
  description: "KDT offers elite private military contractor training including small arms, tactical operations, and combat preparation courses.",
  keywords: ["tactical training", "firearms training", "executive protection course", "TCCC", "security training", "PMC training"],
  openGraph: {
    title: "Training Programs | Knight Division Tactical",
    description: "KDT offers elite private military contractor training including small arms, tactical operations, and combat preparation courses.",
    url: "https://knightdivisiontactical.com/training",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "KDT Training Programs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Training Programs | Knight Division Tactical",
    description: "KDT offers elite private military contractor training including small arms, tactical operations, and combat preparation courses.",
    images: ["/og-image.png"],
  },
};

const courses = [
  {
    "@type": "Course",
    "name": "KDT Small Arms Training",
    "description": "2-day intensive small arms training course. Top performers may be invited to Agent Selection.",
    "provider": { "@type": "Organization", "name": "Knight Division Tactical" },
    "offers": { "@type": "Offer", "price": "1400", "priceCurrency": "USD" },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "onsite",
      "location": { "@type": "Place", "name": "Fountain, CO", "address": { "@type": "PostalAddress", "addressLocality": "Fountain", "addressRegion": "CO", "addressCountry": "US" } }
    },
    "url": "https://knightdivisiontactical.com/training/small-arms"
  },
  {
    "@type": "Course",
    "name": "Tactical Combat Casualty Care",
    "description": "3-day combat medical training for operators. Combat casualty care under fire.",
    "provider": { "@type": "Organization", "name": "Knight Division Tactical" },
    "offers": { "@type": "Offer", "price": "1800", "priceCurrency": "USD" },
    "url": "https://knightdivisiontactical.com/training/tactical-medicine"
  },
  {
    "@type": "Course",
    "name": "Executive Protection Fundamentals",
    "description": "5-day comprehensive protection training for those securing high-value principals.",
    "provider": { "@type": "Organization", "name": "Knight Division Tactical" },
    "offers": { "@type": "Offer", "price": "2500", "priceCurrency": "USD" },
    "url": "https://knightdivisiontactical.com/training/executive-protection"
  },
  {
    "@type": "Course",
    "name": "Crisis Response Operations",
    "description": "5-day advanced training for operating in crisis and disaster environments.",
    "provider": { "@type": "Organization", "name": "Knight Division Tactical" },
    "offers": { "@type": "Offer", "price": "3200", "priceCurrency": "USD" },
    "url": "https://knightdivisiontactical.com/training/crisis-response"
  }
];

export default function TrainingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {courses.map((course, i) => (
        <JsonLd key={i} data={{ "@context": "https://schema.org", ...course }} />
      ))}
      {children}
    </>
  );
}
