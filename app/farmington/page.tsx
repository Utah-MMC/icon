import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Farmington Dumpster Rental - Professional Services in Farmington, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Farmington, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Farmington dumpster rental, dumpster rental Farmington UT, Farmington Utah dumpster, roll-off dumpster Farmington, construction dumpster Farmington, waste management Farmington",
  openGraph: {
    title: "Farmington Dumpster Rental - Professional Services in Farmington, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Farmington, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/farmington',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Farmington Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Farmington Dumpster Rental - Professional Services in Farmington, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Farmington, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/farmington',
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

export default function FarmingtonPage() {
  const nearbyCities = [
  {
    "name": "Bountiful",
    "href": "/bountiful"
  },
  {
    "name": "Centerville",
    "href": "/centerville"
  },
  {
    "name": "Kaysville",
    "href": "/kaysville"
  },
  {
    "name": "Layton",
    "href": "/layton"
  },
  {
    "name": "North Salt Lake",
    "href": "/north-salt-lake"
  }
];
  
  return (
    <CityPageClient
      cityName="farmington"
      cityDisplayName="Farmington"
      nearbyCities={nearbyCities}
    />
  );
}