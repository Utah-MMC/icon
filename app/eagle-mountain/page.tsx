import type { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';
import { getCityData } from '../config/cityData';

export const metadata: Metadata = {
  title: "Eagle Mountain Dumpster Rental - Professional Services in Eagle Mountain, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Eagle Mountain, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Eagle Mountain dumpster rental, dumpster rental Eagle Mountain UT, Eagle Mountain Utah dumpster, roll-off dumpster Eagle Mountain, construction dumpster Eagle Mountain, waste management Eagle Mountain",
  openGraph: {
    title: "Eagle Mountain Dumpster Rental - Professional Services in Eagle Mountain, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Eagle Mountain, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/eagle-mountain',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Eagle Mountain Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Eagle Mountain Dumpster Rental - Professional Services in Eagle Mountain, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Eagle Mountain, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: '/eagle-mountain',
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

export default function EagleMountainPage() {
  const cityData = getCityData('eagle-mountain');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}