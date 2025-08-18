import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Midvale Dumpster Rental - Professional Services in Midvale, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Midvale, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Midvale dumpster rental, dumpster rental Midvale UT, Midvale Utah dumpster, roll-off dumpster Midvale, construction dumpster Midvale, waste management Midvale",
  openGraph: {
    title: "Midvale Dumpster Rental - Professional Services in Midvale, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Midvale, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/midvale',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Midvale Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Midvale Dumpster Rental - Professional Services in Midvale, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Midvale, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/midvale',
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

export default function MidvalePage() {
  const nearbyCities = [
  {
    "name": "Murray",
    "href": "/murray"
  },
  {
    "name": "Sandy",
    "href": "/sandy"
  },
  {
    "name": "West Jordan",
    "href": "/west-jordan"
  },
  {
    "name": "Taylorsville",
    "href": "/taylorsville"
  },
  {
    "name": "Cottonwood Heights",
    "href": "/cottonwood-heights"
  }
];
  
  return (
    <CityPageClient
      cityName="midvale"
      cityDisplayName="Midvale"
      nearbyCities={nearbyCities}
      historicalInfo="Midvale, centrally located in the Salt Lake Valley, is known for its convenient location and growing business community. Our dumpster services support Midvale's development projects."
      landmarks="Midvale City Hall, Midvale Park, Historic Midvale Main Street"
      localProjects="Supporting Midvale's Main Street revitalization and business development"
      neighborhoods="Midvale Central, Midvale East, Midvale West"
      localBusinesses="Preferred provider for Midvale's business and residential projects"
    />
  );
}