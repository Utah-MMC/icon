import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Park City Dumpster Rental - Professional Services in Park City, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Park City, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Park City dumpster rental, dumpster rental Park City UT, Park City Utah dumpster, roll-off dumpster Park City, construction dumpster Park City, waste management Park City",
  openGraph: {
    title: "Park City Dumpster Rental - Professional Services in Park City, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Park City, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/park-city',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Park City Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Park City Dumpster Rental - Professional Services in Park City, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Park City, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/park-city',
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

export default function ParkCityPage() {
  const nearbyCities = [
  {
    "name": "Salt Lake City",
    "href": "/salt-lake-city"
  },
  {
    "name": "Heber City",
    "href": "/heber-city"
  },
  {
    "name": "Kamas",
    "href": "/kamas"
  },
  {
    "name": "Coalville",
    "href": "/coalville"
  },
  {
    "name": "Oakley",
    "href": "/oakley"
  }
];
  
  return (
    <CityPageClient
      cityName="park-city"
      cityDisplayName="Park City"
      nearbyCities={nearbyCities}
      historicalInfo="Park City, a historic mining town turned world-class ski destination, is home to the Sundance Film Festival and three world-class ski resorts. Our dumpster services support Park City's unique character."
      landmarks="Park City Mountain Resort, Deer Valley, Sundance Film Festival, Historic Main Street"
      localProjects="Supporting Park City's historic preservation and resort development"
      neighborhoods="Park City Central, Park City East, Park City West"
      localBusinesses="Trusted by Park City's luxury resort and historic preservation projects"
    />
  );
}
