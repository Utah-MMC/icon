import type { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';
import { getCityData } from '../config/cityData';

export const metadata: Metadata = {
  title: "American Fork Dumpster Rentals - Professional Services in American Fork, UT | Icon Dumpsters",
  description: "Get reliable dumpster rentals in American Fork, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "American Fork dumpster rentals, dumpster rental American Fork UT, American Fork Utah dumpster, roll-off dumpster American Fork, construction dumpster American Fork, waste management American Fork",
  openGraph: {
    title: "American Fork Dumpster Rentals - Professional Services in American Fork, UT | Icon Dumpsters",
    description: "Get reliable dumpster rentals in American Fork, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/american-fork-dumpster-rentals',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'American Fork Dumpster Rentals - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "American Fork Dumpster Rentals - Professional Services in American Fork, UT | Icon Dumpsters",
    description: "Get reliable dumpster rentals in American Fork, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: '/american-fork-dumpster-rentals',
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

export default function AmericanForkDumpsterRentalsPage() {
  const cityData = getCityData('american-fork');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}