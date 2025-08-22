import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Downtown Salt Lake Dumpster Rental - Professional Services in Downtown Salt Lake, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Downtown Salt Lake, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Downtown Salt Lake dumpster rental, dumpster rental Downtown Salt Lake UT, Downtown Salt Lake Utah dumpster, roll-off dumpster Downtown Salt Lake, construction dumpster Downtown Salt Lake, waste management Downtown Salt Lake",
  openGraph: {
    title: "Downtown Salt Lake Dumpster Rental - Professional Services in Downtown Salt Lake, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Downtown Salt Lake, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/downtown-salt-lake',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Downtown Salt Lake Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Downtown Salt Lake Dumpster Rental - Professional Services in Downtown Salt Lake, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Downtown Salt Lake, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/downtown-salt-lake',
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

import CityPageTemplate from '../components/CityPageTemplate';

export default function DowntownSaltLakePage() {
  return (
    <CityPageTemplate
      city="Downtown Salt Lake, UT"
      neighborhoods={["Downtown Central", "Temple Square", "The Gateway", "Capitol Hill"]}
      nearbyLinks={[
        { label: 'Salt Lake City', href: '/salt-lake-city' },
        { label: 'Rose Park', href: '/rose-park' },
        { label: 'Glendale', href: '/glendale' }
      ]}
      heroImages={[
        { src: '/images/dumpster500x200-4.webp', fallback: '/images/dumpster500x200-4.webp' },
        { src: '/images/dumpsters2.webp', fallback: '/images/dumpsters2.webp' }
      ]}
    />
  );
}
