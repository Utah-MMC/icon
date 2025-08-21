import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Magna Dumpster Rental - Professional Services in Magna, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Magna, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Magna dumpster rental, dumpster rental Magna UT, Magna Utah dumpster, roll-off dumpster Magna, construction dumpster Magna, waste management Magna",
  openGraph: {
    title: "Magna Dumpster Rental - Professional Services in Magna, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Magna, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/magna',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Magna Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Magna Dumpster Rental - Professional Services in Magna, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Magna, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/magna',
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

export default function MagnaPage() {
  const nearbyCities = [
  {
    "name": "West Valley City",
    "href": "/west-valley-city"
  },
  {
    "name": "Kearns",
    "href": "/kearns"
  },
  {
    "name": "Tooele",
    "href": "/tooele"
  },
  {
    "name": "Taylorsville",
    "href": "/taylorsville"
  },
  {
    "name": "Salt Lake City",
    "href": "/salt-lake-city"
  }
];
  
  return (
    <CityPageClient
      cityName="magna"
      cityDisplayName="Magna"
      nearbyCities={nearbyCities}
      historicalInfo="Magna, a historic mining community in the Salt Lake Valley, offers a strong sense of history and community. Our dumpster services support Magna's historic preservation and growth."
      landmarks="Magna City Hall, Magna Park, Historic Magna Main Street"
      localProjects="Supporting Magna's historic preservation and community projects"
      neighborhoods="Magna Central, Magna East, Magna West"
      localBusinesses="Trusted by Magna's historic preservation and community projects"
    />
  );
}
