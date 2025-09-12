import type { Metadata } from 'next';
import CityPageTemplate from '../../../components/CityPageTemplate';
import { getCityData } from '../../../config/cityData';

export const metadata: Metadata = {
  title: "Springville Dumpster Rentals - Professional Services in Springville, UT | Icon Dumpsters",
  description: "Get reliable dumpster rentals in Springville, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Springville dumpster rentals, dumpster rental Springville UT, Springville Utah dumpster, roll-off dumpster Springville, construction dumpster Springville, waste management Springville",
  openGraph: {
    title: "Springville Dumpster Rentals - Professional Services in Springville, UT | Icon Dumpsters",
    description: "Get reliable dumpster rentals in Springville, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/springville-dumpster-rentals',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Springville Dumpster Rentals - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Springville Dumpster Rentals - Professional Services in Springville, UT | Icon Dumpsters",
    description: "Get reliable dumpster rentals in Springville, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: '/springville-dumpster-rentals',
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

export default function SpringvilleDumpsterRentalsPage() {
  const cityData = getCityData('springville');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}