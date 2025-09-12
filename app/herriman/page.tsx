import type { Metadata } from 'next';
import CityPageTemplate from '../../../components/CityPageTemplate';
import { getCityData } from '../../../config/cityData';

export const metadata: Metadata = {
  title: "Herriman Dumpster Rental - Professional Services in Herriman, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Herriman, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Herriman dumpster rental, dumpster rental Herriman UT, Herriman Utah dumpster, roll-off dumpster Herriman, construction dumpster Herriman, waste management Herriman",
  openGraph: {
    title: "Herriman Dumpster Rental - Professional Services in Herriman, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Herriman, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/herriman',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Herriman Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Herriman Dumpster Rental - Professional Services in Herriman, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Herriman, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: '/herriman',
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

export default function HerrimanPage() {
  const cityData = getCityData('herriman');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}