import type { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';
import { getCityData } from '../config/cityData';

export const metadata: Metadata = {
  title: "Sugar House Dumpster Rental - Professional Services in Sugar House, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Sugar House, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Sugar House dumpster rental, dumpster rental Sugar House UT, Sugar House Utah dumpster, roll-off dumpster Sugar House, construction dumpster Sugar House, waste management Sugar House",
  openGraph: {
    title: "Sugar House Dumpster Rental - Professional Services in Sugar House, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Sugar House, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/sugar-house',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sugar House Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sugar House Dumpster Rental - Professional Services in Sugar House, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Sugar House, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: '/sugar-house',
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

export default function SugarHousePage() {
  const cityData = getCityData('sugar-house');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}




