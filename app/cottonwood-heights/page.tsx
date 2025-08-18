import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cottonwood Heights Dumpster Rental - Professional Services in Cottonwood Heights, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Cottonwood Heights, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Cottonwood Heights dumpster rental, dumpster rental Cottonwood Heights UT, Cottonwood Heights Utah dumpster, roll-off dumpster Cottonwood Heights, construction dumpster Cottonwood Heights, waste management Cottonwood Heights",
  openGraph: {
    title: "Cottonwood Heights Dumpster Rental - Professional Services in Cottonwood Heights, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Cottonwood Heights, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/cottonwood-heights',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Cottonwood Heights Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cottonwood Heights Dumpster Rental - Professional Services in Cottonwood Heights, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Cottonwood Heights, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/cottonwood-heights',
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

export default function CottonwoodHeightsPage() {
  const nearbyCities = [
  {
    "name": "Sandy",
    "href": "/sandy"
  },
  {
    "name": "Holladay",
    "href": "/holladay"
  },
  {
    "name": "Millcreek",
    "href": "/millcreek"
  },
  {
    "name": "Murray",
    "href": "/murray"
  },
  {
    "name": "Midvale",
    "href": "/midvale"
  }
];
  
  return (
    <CityPageClient
      cityName="cottonwood-heights"
      cityDisplayName="Cottonwood Heights"
      nearbyCities={nearbyCities}
    />
  );
}