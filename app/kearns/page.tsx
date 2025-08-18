import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Kearns Dumpster Rental - Professional Services in Kearns, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Kearns, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Kearns dumpster rental, dumpster rental Kearns UT, Kearns Utah dumpster, roll-off dumpster Kearns, construction dumpster Kearns, waste management Kearns",
  openGraph: {
    title: "Kearns Dumpster Rental - Professional Services in Kearns, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Kearns, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/kearns',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Kearns Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kearns Dumpster Rental - Professional Services in Kearns, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Kearns, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/kearns',
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

export default function KearnsPage() {
  const nearbyCities = [
  {
    "name": "West Valley City",
    "href": "/west-valley-city"
  },
  {
    "name": "Magna",
    "href": "/magna"
  },
  {
    "name": "Taylorsville",
    "href": "/taylorsville"
  },
  {
    "name": "Murray",
    "href": "/murray"
  },
  {
    "name": "Tooele",
    "href": "/tooele"
  }
];
  
  return (
    <CityPageClient
      cityName="kearns"
      cityDisplayName="Kearns"
      nearbyCities={nearbyCities}
    />
  );
}