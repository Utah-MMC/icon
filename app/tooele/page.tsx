import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tooele Dumpster Rental - Professional Services in Tooele, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Tooele, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Tooele dumpster rental, dumpster rental Tooele UT, Tooele Utah dumpster, roll-off dumpster Tooele, construction dumpster Tooele, waste management Tooele",
  openGraph: {
    title: "Tooele Dumpster Rental - Professional Services in Tooele, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Tooele, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://www.icondumpsters.com/tooele',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Tooele Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tooele Dumpster Rental - Professional Services in Tooele, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Tooele, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/tooele',
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

export default function TooelePage() {
  const nearbyCities = [
  {
    "name": "Magna",
    "href": "/magna"
  },
  {
    "name": "West Valley City",
    "href": "/west-valley-city"
  },
  {
    "name": "Kearns",
    "href": "/kearns"
  },
  {
    "name": "Salt Lake City",
    "href": "/salt-lake-city"
  },
  {
    "name": "Taylorsville",
    "href": "/taylorsville"
  }
];
  
  return (
    <CityPageClient
      cityName="tooele"
      cityDisplayName="Tooele"
      nearbyCities={nearbyCities}
      historicalInfo="Tooele, located in Tooele County, offers beautiful mountain views and a strong sense of community. Our dumpster services support Tooele's mountain community development."
      landmarks="Tooele City Hall, Tooele Park, Oquirrh Mountains"
      localProjects="Supporting Tooele's mountain community development and residential projects"
      neighborhoods="Tooele Central, Tooele East, Tooele West"
      localBusinesses="Preferred provider for Tooele's mountain community and residential projects"
    />
  );
}