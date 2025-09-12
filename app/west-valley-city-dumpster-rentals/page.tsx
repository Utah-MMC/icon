import type { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';
import { getCityData } from '../config/cityData';

export const metadata: Metadata = {
  title: "West Valley City Dumpster Rentals - Professional Services in West Valley City, UT | Icon Dumpsters",
  description: "Get reliable dumpster rentals in West Valley City, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "West Valley City dumpster rentals, dumpster rental West Valley City UT, West Valley City Utah dumpster, roll-off dumpster West Valley City, construction dumpster West Valley City, waste management West Valley City",
  openGraph: {
    title: "West Valley City Dumpster Rentals - Professional Services in West Valley City, UT | Icon Dumpsters",
    description: "Get reliable dumpster rentals in West Valley City, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/west-valley-city-dumpster-rentals',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'West Valley City Dumpster Rentals - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "West Valley City Dumpster Rentals - Professional Services in West Valley City, UT | Icon Dumpsters",
    description: "Get reliable dumpster rentals in West Valley City, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: '/west-valley-city-dumpster-rentals',
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

export default function WestValleyCityDumpsterRentalsPage() {
  const cityData = getCityData('west-valley-city');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}