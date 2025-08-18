import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Kaysville Dumpster Rental - Professional Services in Kaysville, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Kaysville, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Kaysville dumpster rental, dumpster rental Kaysville UT, Kaysville Utah dumpster, roll-off dumpster Kaysville, construction dumpster Kaysville, waste management Kaysville",
  openGraph: {
    title: "Kaysville Dumpster Rental - Professional Services in Kaysville, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Kaysville, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/kaysville',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Kaysville Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kaysville Dumpster Rental - Professional Services in Kaysville, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Kaysville, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/kaysville',
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

export default function KaysvillePage() {
  const nearbyCities = [
  {
    "name": "Layton",
    "href": "/layton"
  },
  {
    "name": "Farmington",
    "href": "/farmington"
  },
  {
    "name": "Bountiful",
    "href": "/bountiful"
  },
  {
    "name": "Centerville",
    "href": "/centerville"
  },
  {
    "name": "Syracuse",
    "href": "/syracuse"
  }
];
  
  return (
    <CityPageClient
      cityName="kaysville"
      cityDisplayName="Kaysville"
      nearbyCities={nearbyCities}
    />
  );
}