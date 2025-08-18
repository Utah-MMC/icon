import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bluffdale Dumpster Rental - Professional Services in Bluffdale, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Bluffdale, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Bluffdale dumpster rental, dumpster rental Bluffdale UT, Bluffdale Utah dumpster, roll-off dumpster Bluffdale, construction dumpster Bluffdale, waste management Bluffdale",
  openGraph: {
    title: "Bluffdale Dumpster Rental - Professional Services in Bluffdale, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Bluffdale, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/bluffdale',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Bluffdale Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Bluffdale Dumpster Rental - Professional Services in Bluffdale, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Bluffdale, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/bluffdale',
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

export default function BluffdalePage() {
  const nearbyCities = [
  {
    "name": "Riverton",
    "href": "/riverton"
  },
  {
    "name": "Herriman",
    "href": "/herriman"
  },
  {
    "name": "South Jordan",
    "href": "/south-jordan"
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
      cityName="bluffdale"
      cityDisplayName="Bluffdale"
      nearbyCities={nearbyCities}
    />
  );
}