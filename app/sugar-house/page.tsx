import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sugar House Dumpster Rental - Professional Services in Sugar House, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Sugar House, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Sugar House dumpster rental, dumpster rental Sugar House UT, Sugar House Utah dumpster, roll-off dumpster Sugar House, construction dumpster Sugar House, waste management Sugar House",
  openGraph: {
    title: "Sugar House Dumpster Rental - Professional Services in Sugar House, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Sugar House, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/sugar-house',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Sugar House Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sugar House Dumpster Rental - Professional Services in Sugar House, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Sugar House, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/sugar-house',
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

export default function SugarHousePage() {
  const nearbyCities = [
  {
    "name": "Salt Lake City",
    "href": "/salt-lake-city"
  },
  {
    "name": "Millcreek",
    "href": "/millcreek"
  },
  {
    "name": "Holladay",
    "href": "/holladay"
  },
  {
    "name": "Cottonwood Heights",
    "href": "/cottonwood-heights"
  },
  {
    "name": "Murray",
    "href": "/murray"
  }
];
  
  return (
    <CityPageClient
      cityName="sugar-house"
      cityDisplayName="Sugar House"
      nearbyCities={nearbyCities}
      historicalInfo="Sugar House, a historic neighborhood in Salt Lake City, is known for its eclectic shops, restaurants, and community feel. Our dumpster services support Sugar House's unique character."
      landmarks="Sugar House Park, Sugar House City Hall, Historic Sugar House"
      localProjects="Supporting Sugar House's historic preservation and community projects"
      neighborhoods="Sugar House Central, Sugar House East, Sugar House West"
      localBusinesses="Trusted by Sugar House's historic preservation and community projects"
    />
  );
}