import type { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';
import { getCityData } from '../config/cityData';

export const metadata: Metadata = {
  title: "Pleasant Grove Dumpster Rentals - Professional Services in Pleasant Grove, UT | Icon Dumpsters",
  description: "Get reliable dumpster rentals in Pleasant Grove, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Pleasant Grove dumpster rentals, dumpster rental Pleasant Grove UT, Pleasant Grove Utah dumpster, roll-off dumpster Pleasant Grove, construction dumpster Pleasant Grove, waste management Pleasant Grove",
  openGraph: {
    title: "Pleasant Grove Dumpster Rentals - Professional Services in Pleasant Grove, UT | Icon Dumpsters",
    description: "Get reliable dumpster rentals in Pleasant Grove, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/pleasant-grove-dumpster-rentals',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pleasant Grove Dumpster Rentals - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pleasant Grove Dumpster Rentals - Professional Services in Pleasant Grove, UT | Icon Dumpsters",
    description: "Get reliable dumpster rentals in Pleasant Grove, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: '/pleasant-grove-dumpster-rentals',
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

export default function PleasantGroveDumpsterRentalsPage() {
  const cityData = getCityData('pleasant-grove');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}