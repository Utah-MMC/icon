import type { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';
import { getCityData } from '../config/cityData';

export const metadata: Metadata = {
  title: "Park City Dumpster Rentals - Professional Services in Park City, UT | Icon Dumpsters",
  description: "Get reliable dumpster rentals in Park City, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Park City dumpster rentals, dumpster rental Park City UT, Park City Utah dumpster, roll-off dumpster Park City, construction dumpster Park City, waste management Park City",
  openGraph: {
    title: "Park City Dumpster Rentals - Professional Services in Park City, UT | Icon Dumpsters",
    description: "Get reliable dumpster rentals in Park City, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/park-city-dumpster-rentals',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Park City Dumpster Rentals - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Park City Dumpster Rentals - Professional Services in Park City, UT | Icon Dumpsters",
    description: "Get reliable dumpster rentals in Park City, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: '/park-city-dumpster-rentals',
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

export default function ParkCityDumpsterRentalsPage() {
  const cityData = getCityData('park-city');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}