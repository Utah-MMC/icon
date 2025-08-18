import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Ogden Dumpster Rental - Professional Services in Ogden, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Ogden, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Ogden dumpster rental, dumpster rental Ogden UT, Ogden Utah dumpster, roll-off dumpster Ogden, construction dumpster Ogden, waste management Ogden",
  openGraph: {
    title: "Ogden Dumpster Rental - Professional Services in Ogden, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Ogden, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/ogden',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Ogden Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ogden Dumpster Rental - Professional Services in Ogden, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Ogden, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/ogden',
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

export default function OgdenPage() {
  const nearbyCities = [
  {
    "name": "Roy",
    "href": "/roy"
  },
  {
    "name": "Clearfield",
    "href": "/clearfield"
  },
  {
    "name": "Layton",
    "href": "/layton"
  },
  {
    "name": "Syracuse",
    "href": "/syracuse"
  },
  {
    "name": "Kaysville",
    "href": "/kaysville"
  }
];
  
  return (
    <CityPageClient
      cityName="ogden"
      cityDisplayName="Ogden"
      nearbyCities={nearbyCities}
    />
  );
}