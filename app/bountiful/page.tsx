import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bountiful Dumpster Rental - Professional Services in Bountiful, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Bountiful, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Bountiful dumpster rental, dumpster rental Bountiful UT, Bountiful Utah dumpster, roll-off dumpster Bountiful, construction dumpster Bountiful, waste management Bountiful",
  openGraph: {
    title: "Bountiful Dumpster Rental - Professional Services in Bountiful, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Bountiful, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/bountiful',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Bountiful Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Bountiful Dumpster Rental - Professional Services in Bountiful, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Bountiful, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/bountiful',
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

export default function BountifulPage() {
  const nearbyCities = [
  {
    "name": "Centerville",
    "href": "/centerville"
  },
  {
    "name": "Farmington",
    "href": "/farmington"
  },
  {
    "name": "North Salt Lake",
    "href": "/north-salt-lake"
  },
  {
    "name": "Woods Cross",
    "href": "/woods-cross"
  },
  {
    "name": "Kaysville",
    "href": "/kaysville"
  }
];
  
  return (
    <CityPageClient
      cityName="bountiful"
      cityDisplayName="Bountiful"
      nearbyCities={nearbyCities}
    />
  );
}