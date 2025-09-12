import type { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';
import { getCityData } from '../config/cityData';

export const metadata: Metadata = {
  title: "Glendale Dumpster Rentals - Professional Services in Glendale, UT | Icon Dumpsters",
  description: "Get reliable dumpster rentals in Glendale, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Glendale dumpster rentals, dumpster rental Glendale UT, Glendale Utah dumpster, roll-off dumpster Glendale, construction dumpster Glendale, waste management Glendale",
  openGraph: {
    title: "Glendale Dumpster Rentals - Professional Services in Glendale, UT | Icon Dumpsters",
    description: "Get reliable dumpster rentals in Glendale, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/glendale-dumpster-rentals',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Glendale Dumpster Rentals - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Glendale Dumpster Rentals - Professional Services in Glendale, UT | Icon Dumpsters",
    description: "Get reliable dumpster rentals in Glendale, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: '/glendale-dumpster-rentals',
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

export default function GlendaleDumpsterRentalsPage() {
  const cityData = getCityData('glendale');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}