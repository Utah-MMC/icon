import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Poplar Grove Dumpster Rental - Professional Services in Poplar Grove, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Poplar Grove, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Poplar Grove dumpster rental, dumpster rental Poplar Grove UT, Poplar Grove Utah dumpster, roll-off dumpster Poplar Grove, construction dumpster Poplar Grove, waste management Poplar Grove",
  openGraph: {
    title: "Poplar Grove Dumpster Rental - Professional Services in Poplar Grove, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Poplar Grove, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/poplar-grove',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Poplar Grove Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Poplar Grove Dumpster Rental - Professional Services in Poplar Grove, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Poplar Grove, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/poplar-grove',
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

export default function PoplarGrovePage() {
  const nearbyCities = [
  {
    "name": "Salt Lake City",
    "href": "/salt-lake-city"
  },
  {
    "name": "Rose Park",
    "href": "/rose-park"
  },
  {
    "name": "North Salt Lake",
    "href": "/north-salt-lake"
  },
  {
    "name": "Bountiful",
    "href": "/bountiful"
  },
  {
    "name": "Centerville",
    "href": "/centerville"
  }
];
  
  return (
    <CityPageClient
      cityName="poplar-grove"
      cityDisplayName="Poplar Grove"
      nearbyCities={nearbyCities}
      historicalInfo="Poplar Grove, a historic neighborhood in Salt Lake City, offers a strong sense of community and convenient access to downtown. Our dumpster services support Poplar Grove's community growth."
      landmarks="Poplar Grove City Hall, Poplar Grove Park, Jordan River"
      localProjects="Supporting Poplar Grove's community development and residential projects"
      neighborhoods="Poplar Grove Central, Poplar Grove East, Poplar Grove West"
      localBusinesses="Preferred provider for Poplar Grove's community and residential projects"
    />
  );
}