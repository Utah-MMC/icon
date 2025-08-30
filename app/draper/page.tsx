import type { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';
import { getCityData } from '../config/cityData';

export const metadata: Metadata = {
  title: "Draper Dumpster Rental - Professional Dumpster Services in Draper, UT | (801) 918-6000",
  description: "Professional dumpster rental services in Draper, Utah. Fast delivery, competitive pricing, and reliable waste management solutions. Call (801) 918-6000 for instant quotes.",
  keywords: "Draper dumpster rental, dumpster rental Draper UT, Draper Utah dumpster, roll-off dumpster Draper, construction dumpster Draper, waste management Draper",
  openGraph: {
    title: "Draper Dumpster Rental - Professional Dumpster Services in Draper, UT | (801) 918-6000",
    description: "Professional dumpster rental services in Draper, Utah. Fast delivery, competitive pricing, and reliable waste management solutions.",
    url: 'https://icondumpsters.com/draper',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Draper Dumpster Rental - Professional Dumpster Services in Draper, UT',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Draper Dumpster Rental - Professional Dumpster Services in Draper, UT | (801) 918-6000",
    description: "Professional dumpster rental services in Draper, Utah. Fast delivery, competitive pricing, and reliable waste management solutions.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/draper',
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
    'geo.placename': 'Draper, Utah',
    'geo.position': '40.7608;-111.8910',
    'ICBM': '40.7608, -111.8910',
  },
};

export default function DraperPage() {
  const cityData = getCityData('draper');
  
  if (!cityData) {
    return <div>City not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}





