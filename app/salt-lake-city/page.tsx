import { Metadata } from 'next';
import DumpsterCalculator from '../components/DumpsterCalculator';
import QuoteForm from '../components/QuoteForm';
import Link from 'next/link';
import CityPageTemplate from '../components/CityPageTemplate';

export const metadata: Metadata = {
  title: "Salt Lake City Dumpster Rental - Professional Services in SLC, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Salt Lake City, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Salt Lake City dumpster rental, dumpster rental SLC UT, Salt Lake City Utah dumpster, roll-off dumpster Salt Lake City, construction dumpster SLC, waste management Salt Lake City",
  openGraph: {
    title: "Salt Lake City Dumpster Rental - Professional Services in SLC, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Salt Lake City, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://www.icondumpsters.com/salt-lake-city',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Salt Lake City Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Salt Lake City Dumpster Rental - Professional Services in SLC, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Salt Lake City, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/salt-lake-city',
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

export default function SaltLakeCityPage() {
  return (
    <CityPageTemplate
      city="Salt Lake City, UT"
      neighborhoods={["Downtown", "Sugar House", "Rose Park", "Poplar Grove", "Glendale", "Fairpark"]}
      nearbyLinks={[
        { label: 'Downtown SLC', href: '/downtown-salt-lake' },
        { label: 'Sugar House', href: '/sugar-house' },
        { label: 'Rose Park', href: '/rose-park' },
        { label: 'Glendale', href: '/glendale' },
        { label: 'Poplar Grove', href: '/poplar-grove' },
        { label: 'Fairpark', href: '/fairpark' }
      ]}
      heroImages={[
        { src: '/images/dumpsterSmallBanner3.jpeg', fallback: '/images/dumpsterSmallBanner3.webp' },
        { src: '/images/IMG_0350.jpg', fallback: '/images/dumpsters.webp' }
      ]}
    />
  );
}
