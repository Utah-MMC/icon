import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Syracuse Dumpster Rental - Professional Services in Syracuse, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Syracuse, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Syracuse dumpster rental, dumpster rental Syracuse UT, Syracuse Utah dumpster, roll-off dumpster Syracuse, construction dumpster Syracuse, waste management Syracuse",
  openGraph: {
    title: "Syracuse Dumpster Rental - Professional Services in Syracuse, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Syracuse, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/syracuse',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Syracuse Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Syracuse Dumpster Rental - Professional Services in Syracuse, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Syracuse, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/syracuse',
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

export default function SyracusePage() {
  const nearbyCities = [
  {
    "name": "Layton",
    "href": "/layton"
  },
  {
    "name": "Clearfield",
    "href": "/clearfield"
  },
  {
    "name": "Roy",
    "href": "/roy"
  },
  {
    "name": "Ogden",
    "href": "/ogden"
  },
  {
    "name": "Kaysville",
    "href": "/kaysville"
  }
];
  
  return (
    <CityPageClient
      cityName="syracuse"
      cityDisplayName="Syracuse"
      nearbyCities={nearbyCities}
    />
  );
}