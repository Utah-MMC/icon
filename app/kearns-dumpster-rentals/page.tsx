import type { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';
import { getCityData } from '../config/cityData';

export const metadata: Metadata = {
  title: "Kearns Dumpster Rentals - Professional Services in Kearns, UT | Icon Dumpsters",
  description: "Get reliable dumpster rentals in Kearns, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Kearns dumpster rentals, dumpster rental Kearns UT, Kearns Utah dumpster, roll-off dumpster Kearns, construction dumpster Kearns, waste management Kearns",
  openGraph: {
    title: "Kearns Dumpster Rentals - Professional Services in Kearns, UT | Icon Dumpsters",
    description: "Get reliable dumpster rentals in Kearns, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/kearns-dumpster-rentals',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kearns Dumpster Rentals - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kearns Dumpster Rentals - Professional Services in Kearns, UT | Icon Dumpsters",
    description: "Get reliable dumpster rentals in Kearns, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: '/kearns-dumpster-rentals',
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
};

export default function KearnsDumpsterRentalsPage() {
  const cityData = getCityData('kearns');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}