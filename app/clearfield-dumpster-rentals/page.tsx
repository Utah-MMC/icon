import type { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';
import { getCityData } from '../config/cityData';

export const metadata: Metadata = {
  title: "Clearfield Dumpster Rentals - Professional Services in Clearfield, UT | Icon Dumpsters",
  description: "Get reliable dumpster rentals in Clearfield, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Clearfield dumpster rentals, dumpster rental Clearfield UT, Clearfield Utah dumpster, roll-off dumpster Clearfield, construction dumpster Clearfield, waste management Clearfield",
  openGraph: {
    title: "Clearfield Dumpster Rentals - Professional Services in Clearfield, UT | Icon Dumpsters",
    description: "Get reliable dumpster rentals in Clearfield, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/clearfield-dumpster-rentals',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Clearfield Dumpster Rentals - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Clearfield Dumpster Rentals - Professional Services in Clearfield, UT | Icon Dumpsters",
    description: "Get reliable dumpster rentals in Clearfield, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: '/clearfield-dumpster-rentals',
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

export default function ClearfieldDumpsterRentalsPage() {
  const cityData = getCityData('clearfield');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}