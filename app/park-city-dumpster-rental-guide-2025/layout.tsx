import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Park City Dumpster Rental Guide 2025 | Icon Dumpsters Utah",
  description: "Complete guide to dumpster rental in Park City, Utah. Get same-day delivery, competitive pricing, and expert service from Icon Dumpsters. Call (801) 918-6000.",
  keywords: "Park City dumpster rental, dumpster rental Park City, Utah dumpster rental, roll-off dumpster Park City, dumpster rental near me, Icon Dumpsters Park City",
  openGraph: {
    title: "Park City Dumpster Rental Guide 2025 | Icon Dumpsters Utah",
    description: "Complete guide to dumpster rental in Park City, Utah. Get same-day delivery, competitive pricing, and expert service from Icon Dumpsters.",
    url: 'https://icondumpsters.com/park-city-dumpster-rental-guide-2025',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Park City Dumpster Rental - Icon Dumpsters Utah',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Park City Dumpster Rental Guide 2025 | Icon Dumpsters Utah",
    description: "Complete guide to dumpster rental in Park City, Utah. Get same-day delivery, competitive pricing, and expert service from Icon Dumpsters.",
    images: ['/images/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/park-city-dumpster-rental-guide-2025',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'US-UT',
    'geo.placename': 'Park City, Utah',
    'geo.position': '40.7608;-111.8910',
    'ICBM': '40.7608, -111.8910',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
