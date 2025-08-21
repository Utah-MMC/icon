import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Woods Cross Dumpster Rental - Professional Services in Woods Cross, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Woods Cross, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Woods Cross dumpster rental, dumpster rental Woods Cross UT, Woods Cross Utah dumpster, roll-off dumpster Woods Cross, construction dumpster Woods Cross, waste management Woods Cross",
  openGraph: {
    title: "Woods Cross Dumpster Rental - Professional Services in Woods Cross, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Woods Cross, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://www.icondumpsters.com/woods-cross',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Woods Cross Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Woods Cross Dumpster Rental - Professional Services in Woods Cross, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Woods Cross, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/woods-cross',
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

export default function WoodsCrossPage() {
  const nearbyCities = [
  {
    "name": "Bountiful",
    "href": "/bountiful"
  },
  {
    "name": "North Salt Lake",
    "href": "/north-salt-lake"
  },
  {
    "name": "Centerville",
    "href": "/centerville"
  },
  {
    "name": "Salt Lake City",
    "href": "/salt-lake-city"
  },
  {
    "name": "Farmington",
    "href": "/farmington"
  }
];
  
  return (
    <CityPageClient
      cityName="woods-cross"
      cityDisplayName="Woods Cross"
      nearbyCities={nearbyCities}
      historicalInfo="Woods Cross, a small community in Davis County, offers a close-knit community feel and beautiful mountain views. Our dumpster services support Woods Cross's community growth."
      landmarks="Woods Cross City Hall, Woods Cross Park, Bountiful Peak"
      localProjects="Supporting Woods Cross's community development and residential projects"
      neighborhoods="Woods Cross Central, Woods Cross East, Woods Cross West"
      localBusinesses="Preferred provider for Woods Cross's community and residential projects"
    />
  );
}
