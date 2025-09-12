import type { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';
import { getCityData } from '../config/cityData';

export const metadata: Metadata = {
  title: "South Salt Lake Dumpster Rental - Professional Services in South Salt Lake, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in South Salt Lake, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "South Salt Lake dumpster rental, dumpster rental South Salt Lake UT, South Salt Lake Utah dumpster, roll-off dumpster South Salt Lake, construction dumpster South Salt Lake, waste management South Salt Lake",
  openGraph: {
    title: "South Salt Lake Dumpster Rental - Professional Services in South Salt Lake, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in South Salt Lake, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/south-salt-lake',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'South Salt Lake Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "South Salt Lake Dumpster Rental - Professional Services in South Salt Lake, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in South Salt Lake, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: '/south-salt-lake',
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

export default function SouthSaltLakePage() {
  const cityData = getCityData('south-salt-lake');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}