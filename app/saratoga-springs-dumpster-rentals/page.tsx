import type { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';
import { getCityData } from '../config/cityData';

export const metadata: Metadata = {
  title: "Saratoga Springs Dumpster Rentals - Professional Services in Saratoga Springs, UT | Icon Dumpsters",
  description: "Get reliable dumpster rentals in Saratoga Springs, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Saratoga Springs dumpster rentals, dumpster rental Saratoga Springs UT, Saratoga Springs Utah dumpster, roll-off dumpster Saratoga Springs, construction dumpster Saratoga Springs, waste management Saratoga Springs",
  openGraph: {
    title: "Saratoga Springs Dumpster Rentals - Professional Services in Saratoga Springs, UT | Icon Dumpsters",
    description: "Get reliable dumpster rentals in Saratoga Springs, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/saratoga-springs-dumpster-rentals',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Saratoga Springs Dumpster Rentals - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Saratoga Springs Dumpster Rentals - Professional Services in Saratoga Springs, UT | Icon Dumpsters",
    description: "Get reliable dumpster rentals in Saratoga Springs, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: '/saratoga-springs-dumpster-rentals',
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

export default function SaratogaSpringsDumpsterRentalsPage() {
  const cityData = getCityData('saratoga-springs');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}