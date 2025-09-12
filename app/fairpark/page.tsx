import type { Metadata } from 'next';
import CityPageTemplate from '../../../components/CityPageTemplate';
import { getCityData } from '../../../config/cityData';

export const metadata: Metadata = {
  title: "Fairpark Dumpster Rental - Professional Services in Fairpark, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Fairpark, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Fairpark dumpster rental, dumpster rental Fairpark UT, Fairpark Utah dumpster, roll-off dumpster Fairpark, construction dumpster Fairpark, waste management Fairpark",
  openGraph: {
    title: "Fairpark Dumpster Rental - Professional Services in Fairpark, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Fairpark, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/fairpark',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Fairpark Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Fairpark Dumpster Rental - Professional Services in Fairpark, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Fairpark, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: '/fairpark',
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

export default function FairparkPage() {
  const cityData = getCityData('fairpark');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}