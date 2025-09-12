import type { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';
import { getCityData } from '../config/cityData';

export const metadata: Metadata = {
  title: "Roy Dumpster Rental - Professional Services in Roy, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Roy, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Roy dumpster rental, dumpster rental Roy UT, Roy Utah dumpster, roll-off dumpster Roy, construction dumpster Roy, waste management Roy",
  openGraph: {
    title: "Roy Dumpster Rental - Professional Services in Roy, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Roy, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/roy',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Roy Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Roy Dumpster Rental - Professional Services in Roy, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Roy, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: '/roy',
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

export default function RoyPage() {
  const cityData = getCityData('roy');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}