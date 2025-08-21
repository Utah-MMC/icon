import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Riverton Dumpster Rental - Professional Services in Riverton, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Riverton, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Riverton dumpster rental, dumpster rental Riverton UT, Riverton Utah dumpster, roll-off dumpster Riverton, construction dumpster Riverton, waste management Riverton",
  openGraph: {
    title: "Riverton Dumpster Rental - Professional Services in Riverton, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Riverton, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/riverton',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Riverton Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Riverton Dumpster Rental - Professional Services in Riverton, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Riverton, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/riverton',
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

export default function RivertonPage() {
  const nearbyCities = [
  {
    "name": "South Jordan",
    "href": "/south-jordan"
  },
  {
    "name": "Herriman",
    "href": "/herriman"
  },
  {
    "name": "Bluffdale",
    "href": "/bluffdale"
  },
  {
    "name": "Draper",
    "href": "/draper"
  },
  {
    "name": "West Jordan",
    "href": "/west-jordan"
  }
];
  
  return (
    <CityPageClient
      cityName="riverton"
      cityDisplayName="Riverton"
      nearbyCities={nearbyCities}
      historicalInfo="Riverton, located along the Jordan River, offers beautiful river views and family-friendly communities. Our dumpster services support Riverton's riverside development."
      landmarks="Jordan River, Riverton City Hall, Riverton Park"
      localProjects="Supporting Riverton's Jordan River Parkway improvements and residential projects"
      neighborhoods="Riverton Central, Riverton East, Riverton West"
      localBusinesses="Preferred provider for Riverton's riverside and residential projects"
    />
  );
}
