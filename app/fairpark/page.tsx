import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Fairpark Dumpster Rental - Professional Services in Fairpark, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Fairpark, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Fairpark dumpster rental, dumpster rental Fairpark UT, Fairpark Utah dumpster, roll-off dumpster Fairpark, construction dumpster Fairpark, waste management Fairpark",
  openGraph: {
    title: "Fairpark Dumpster Rental - Professional Services in Fairpark, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Fairpark, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/fairpark',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Fairpark Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Fairpark Dumpster Rental - Professional Services in Fairpark, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Fairpark, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/fairpark',
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

export default function FairparkPage() {
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
    "name": "Glendale",
    "href": "/glendale"
  },
  {
    "name": "Poplar Grove",
    "href": "/poplar-grove"
  },
  {
    "name": "North Salt Lake",
    "href": "/north-salt-lake"
  }
];
  
  return (
    <CityPageClient
      cityName="fairpark"
      cityDisplayName="Fairpark"
      nearbyCities={nearbyCities}
    />
  );
}