import type { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';
import { getCityData } from '../config/cityData';

export const metadata: Metadata = {
  title: "Centerville Dumpster Rentals - Professional Services in Centerville, UT | Icon Dumpsters",
  description: "Get reliable dumpster rentals in Centerville, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Centerville dumpster rentals, dumpster rental Centerville UT, Centerville Utah dumpster, roll-off dumpster Centerville, construction dumpster Centerville, waste management Centerville",
  openGraph: {
    title: "Centerville Dumpster Rentals - Professional Services in Centerville, UT | Icon Dumpsters",
    description: "Get reliable dumpster rentals in Centerville, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/centerville-dumpster-rentals',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Centerville Dumpster Rentals - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Centerville Dumpster Rentals - Professional Services in Centerville, UT | Icon Dumpsters",
    description: "Get reliable dumpster rentals in Centerville, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: '/centerville-dumpster-rentals',
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

export default function CentervilleDumpsterRentalsPage() {
  const cityData = getCityData('centerville');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}