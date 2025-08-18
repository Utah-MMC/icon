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
        url: '/images/Icon_Dumpsters_Final.png',
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
    images: ['/images/Icon_Dumpsters_Final.png'],
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

import CityPageClient from '../components/CityPageClient';

export default function DowntownSaltLakePage() {
  const nearbyCities = [
  {
    "name": "Salt Lake City",
    "href": "/salt-lake-city"
  },
  {
    "name": "Rose Park",
    "href": "/rose-park"
  },
  {
    "name": "Poplar Grove",
    "href": "/poplar-grove"
  },
  {
    "name": "Glendale",
    "href": "/glendale"
  },
  {
    "name": "Fairpark",
    "href": "/fairpark"
  }
];
  
  return (
    <CityPageClient
      cityName="downtown-salt-lake"
      cityDisplayName="Downtown Salt Lake"
      nearbyCities={nearbyCities}
    />
  );
}