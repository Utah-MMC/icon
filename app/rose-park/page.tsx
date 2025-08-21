import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Rose Park Dumpster Rental - Professional Services in Rose Park, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Rose Park, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Rose Park dumpster rental, dumpster rental Rose Park UT, Rose Park Utah dumpster, roll-off dumpster Rose Park, construction dumpster Rose Park, waste management Rose Park",
  openGraph: {
    title: "Rose Park Dumpster Rental - Professional Services in Rose Park, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Rose Park, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/rose-park',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Rose Park Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Rose Park Dumpster Rental - Professional Services in Rose Park, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Rose Park, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/rose-park',
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

export default function RoseParkPage() {
  const nearbyCities = [
  {
    "name": "Salt Lake City",
    "href": "/salt-lake-city"
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
  },
  {
    "name": "Farmington",
    "href": "/farmington"
  }
];
  
  return (
    <CityPageClient
      cityName="rose-park"
      cityDisplayName="Rose Park"
      nearbyCities={nearbyCities}
      historicalInfo="Rose Park, a diverse neighborhood in Salt Lake City, offers a strong sense of community and convenient access to downtown. Our dumpster services support Rose Park's community growth."
      landmarks="Rose Park City Hall, Rose Park Park, Jordan River"
      localProjects="Supporting Rose Park's community development and residential projects"
      neighborhoods="Rose Park Central, Rose Park East, Rose Park West"
      localBusinesses="Preferred provider for Rose Park's community and residential projects"
    />
  );
}
