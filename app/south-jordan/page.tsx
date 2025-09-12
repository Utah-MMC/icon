import type { Metadata } from 'next';
import CityPageTemplate from '../../../components/CityPageTemplate';
import { getCityData } from '../../../config/cityData';

export const metadata: Metadata = {
  title: "South Jordan Dumpster Rental - Professional Services in South Jordan, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in South Jordan, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "South Jordan dumpster rental, dumpster rental South Jordan UT, South Jordan Utah dumpster, roll-off dumpster South Jordan, construction dumpster South Jordan, waste management South Jordan",
  openGraph: {
    title: "South Jordan Dumpster Rental - Professional Services in South Jordan, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in South Jordan, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/south-jordan',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'South Jordan Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "South Jordan Dumpster Rental - Professional Services in South Jordan, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in South Jordan, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: '/south-jordan',
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

export default function SouthJordanPage() {
  const cityData = getCityData('south-jordan');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}