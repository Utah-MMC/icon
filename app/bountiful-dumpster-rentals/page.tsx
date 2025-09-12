import type { Metadata } from 'next';
import CityPageTemplate from '../../../components/CityPageTemplate';
import { getCityData } from '../../../config/cityData';

export const metadata: Metadata = {
  title: "Bountiful Dumpster Rentals - Professional Services in Bountiful, UT | Icon Dumpsters",
  description: "Get reliable dumpster rentals in Bountiful, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Bountiful dumpster rentals, dumpster rental Bountiful UT, Bountiful Utah dumpster, roll-off dumpster Bountiful, construction dumpster Bountiful, waste management Bountiful",
  openGraph: {
    title: "Bountiful Dumpster Rentals - Professional Services in Bountiful, UT | Icon Dumpsters",
    description: "Get reliable dumpster rentals in Bountiful, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/bountiful-dumpster-rentals',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bountiful Dumpster Rentals - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Bountiful Dumpster Rentals - Professional Services in Bountiful, UT | Icon Dumpsters",
    description: "Get reliable dumpster rentals in Bountiful, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: '/bountiful-dumpster-rentals',
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

export default function BountifulDumpsterRentalsPage() {
  const cityData = getCityData('bountiful');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}