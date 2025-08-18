import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Pleasant Grove Dumpster Rental - Professional Services in Pleasant Grove, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Pleasant Grove, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Pleasant Grove dumpster rental, dumpster rental Pleasant Grove UT, Pleasant Grove Utah dumpster, roll-off dumpster Pleasant Grove, construction dumpster Pleasant Grove, waste management Pleasant Grove",
  openGraph: {
    title: "Pleasant Grove Dumpster Rental - Professional Services in Pleasant Grove, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Pleasant Grove, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/pleasant-grove',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Pleasant Grove Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pleasant Grove Dumpster Rental - Professional Services in Pleasant Grove, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Pleasant Grove, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/pleasant-grove',
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

export default function PleasantGrovePage() {
  const nearbyCities = [
  {
    "name": "American Fork",
    "href": "/american-fork"
  },
  {
    "name": "Orem",
    "href": "/orem"
  },
  {
    "name": "Provo",
    "href": "/provo"
  },
  {
    "name": "Lehi",
    "href": "/lehi"
  },
  {
    "name": "Lindon",
    "href": "/lindon"
  }
];
  
  return (
    <CityPageClient
      cityName="pleasant-grove"
      cityDisplayName="Pleasant Grove"
      nearbyCities={nearbyCities}
      historicalInfo="Pleasant Grove, known as 'Utah's City of Trees,' offers a beautiful, tree-lined community in Utah County. Our dumpster services support Pleasant Grove's natural beauty."
      landmarks="Pleasant Grove City Hall, Grove Creek Canyon, Pleasant Grove Park"
      localProjects="Supporting Pleasant Grove's tree preservation and residential projects"
      neighborhoods="Pleasant Grove Central, Pleasant Grove East, Pleasant Grove West"
      localBusinesses="Preferred provider for Pleasant Grove's tree-friendly development projects"
    />
  );
}