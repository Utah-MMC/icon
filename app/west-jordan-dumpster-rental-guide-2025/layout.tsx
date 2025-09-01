import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "West Jordan Dumpster Rental Guide 2025 | Icon Dumpsters Utah",
  description: "Complete guide to dumpster rental in West Jordan, Utah. Get same-day delivery, competitive pricing, and expert service from Icon Dumpsters. Call (801) 918-6000.",
  keywords: "West Jordan dumpster rental, dumpster rental West Jordan, Utah dumpster rental, roll-off dumpster West Jordan, dumpster rental near me, Icon Dumpsters West Jordan",
  openGraph: {
    title: "West Jordan Dumpster Rental Guide 2025 | Icon Dumpsters Utah",
    description: "Complete guide to dumpster rental in West Jordan, Utah. Get same-day delivery, competitive pricing, and expert service from Icon Dumpsters.",
    url: 'https://icondumpsters.com/west-jordan-dumpster-rental-guide-2025',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'West Jordan Dumpster Rental - Icon Dumpsters Utah',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "West Jordan Dumpster Rental Guide 2025 | Icon Dumpsters Utah",
    description: "Complete guide to dumpster rental in West Jordan, Utah. Get same-day delivery, competitive pricing, and expert service from Icon Dumpsters.",
    images: ['/images/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/west-jordan-dumpster-rental-guide-2025',
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
    'geo.placename': 'West Jordan, Utah',
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
