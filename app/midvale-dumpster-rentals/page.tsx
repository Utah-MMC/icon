import type { Metadata } from 'next';
import CityPageTemplate from '../../../components/CityPageTemplate';
import { getCityData } from '../../../config/cityData';

export const metadata: Metadata = {
  title: "Midvale Dumpster Rentals - Professional Services in Midvale, UT | Icon Dumpsters",
  description: "Get reliable dumpster rentals in Midvale, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Midvale dumpster rentals, dumpster rental Midvale UT, Midvale Utah dumpster, roll-off dumpster Midvale, construction dumpster Midvale, waste management Midvale",
  openGraph: {
    title: "Midvale Dumpster Rentals - Professional Services in Midvale, UT | Icon Dumpsters",
    description: "Get reliable dumpster rentals in Midvale, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/midvale-dumpster-rentals',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Midvale Dumpster Rentals - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Midvale Dumpster Rentals - Professional Services in Midvale, UT | Icon Dumpsters",
    description: "Get reliable dumpster rentals in Midvale, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: '/midvale-dumpster-rentals',
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

export default function MidvaleDumpsterRentalsPage() {
  const cityData = getCityData('midvale');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}