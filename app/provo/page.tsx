import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Provo Dumpster Rental - Professional Services in Provo, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Provo, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Provo dumpster rental, dumpster rental Provo UT, Provo Utah dumpster, roll-off dumpster Provo, construction dumpster Provo, waste management Provo",
  openGraph: {
    title: "Provo Dumpster Rental - Professional Services in Provo, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Provo, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/provo',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Provo Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Provo Dumpster Rental - Professional Services in Provo, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Provo, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/provo',
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

export default function ProvoPage() {
  const nearbyCities = [
  {
    "name": "Orem",
    "href": "/orem"
  },
  {
    "name": "Pleasant Grove",
    "href": "/pleasant-grove"
  },
  {
    "name": "American Fork",
    "href": "/american-fork"
  },
  {
    "name": "Springville",
    "href": "/springville"
  },
  {
    "name": "Spanish Fork",
    "href": "/spanish-fork"
  }
];
  
  return (
    <CityPageClient
      cityName="provo"
      cityDisplayName="Provo"
      nearbyCities={nearbyCities}
    />
  );
}