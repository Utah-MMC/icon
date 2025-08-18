import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Glendale Dumpster Rental - Professional Services in Glendale, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Glendale, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Glendale dumpster rental, dumpster rental Glendale UT, Glendale Utah dumpster, roll-off dumpster Glendale, construction dumpster Glendale, waste management Glendale",
  openGraph: {
    title: "Glendale Dumpster Rental - Professional Services in Glendale, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Glendale, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/glendale',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Glendale Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Glendale Dumpster Rental - Professional Services in Glendale, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Glendale, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/glendale',
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

export default function GlendalePage() {
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
    "name": "Poplar Grove",
    "href": "/poplar-grove"
  },
  {
    "name": "Fairpark",
    "href": "/fairpark"
  },
  {
    "name": "North Salt Lake",
    "href": "/north-salt-lake"
  }
];
  
  return (
    <CityPageClient
      cityName="glendale"
      cityDisplayName="Glendale"
      nearbyCities={nearbyCities}
      historicalInfo="Glendale, a diverse neighborhood in Salt Lake City, offers a strong sense of community and convenient access to downtown. Our dumpster services support Glendale's community growth."
      landmarks="Glendale City Hall, Glendale Park, Jordan River"
      localProjects="Supporting Glendale's community development and residential projects"
      neighborhoods="Glendale Central, Glendale East, Glendale West"
      localBusinesses="Preferred provider for Glendale's community and residential projects"
    />
  );
}