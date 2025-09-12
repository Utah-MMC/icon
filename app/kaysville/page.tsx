import type { Metadata } from 'next';
import CityPageTemplate from '../../../components/CityPageTemplate';
import { getCityData } from '../../../config/cityData';

export const metadata: Metadata = {
  title: "Kaysville Dumpster Rental - Professional Services in Kaysville, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Kaysville, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Kaysville dumpster rental, dumpster rental Kaysville UT, Kaysville Utah dumpster, roll-off dumpster Kaysville, construction dumpster Kaysville, waste management Kaysville",
  openGraph: {
    title: "Kaysville Dumpster Rental - Professional Services in Kaysville, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Kaysville, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/kaysville',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kaysville Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kaysville Dumpster Rental - Professional Services in Kaysville, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Kaysville, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: '/kaysville',
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

export default function KaysvillePage() {
  const cityData = getCityData('kaysville');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}