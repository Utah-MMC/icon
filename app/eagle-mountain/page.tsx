import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Eagle Mountain Dumpster Rental - Professional Services in Eagle Mountain, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Eagle Mountain, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Eagle Mountain dumpster rental, dumpster rental Eagle Mountain UT, Eagle Mountain Utah dumpster, roll-off dumpster Eagle Mountain, construction dumpster Eagle Mountain, waste management Eagle Mountain",
  openGraph: {
    title: "Eagle Mountain Dumpster Rental - Professional Services in Eagle Mountain, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Eagle Mountain, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/eagle-mountain',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Eagle Mountain Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Eagle Mountain Dumpster Rental - Professional Services in Eagle Mountain, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Eagle Mountain, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/eagle-mountain',
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

export default function EagleMountainPage() {
  const nearbyCities = [
  {
    "name": "Saratoga Springs",
    "href": "/saratoga-springs"
  },
  {
    "name": "Lehi",
    "href": "/lehi"
  },
  {
    "name": "American Fork",
    "href": "/american-fork"
  },
  {
    "name": "Pleasant Grove",
    "href": "/pleasant-grove"
  },
  {
    "name": "Orem",
    "href": "/orem"
  }
];
  
  return (
    <CityPageClient
      cityName="eagle-mountain"
      cityDisplayName="Eagle Mountain"
      nearbyCities={nearbyCities}
      historicalInfo="Eagle Mountain, one of Utah's fastest-growing cities, offers beautiful mountain views and family-friendly communities. Our dumpster services support Eagle Mountain's rapid growth."
      landmarks="Eagle Mountain City Hall, Eagle Mountain Park, Cedar Valley"
      localProjects="Supporting Eagle Mountain's residential expansion and community development"
      neighborhoods="Eagle Mountain Central, Eagle Mountain East, Eagle Mountain West"
      localBusinesses="Preferred provider for Eagle Mountain's residential and community projects"
    />
  );
}