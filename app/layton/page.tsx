import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Layton Dumpster Rental - Professional Services in Layton, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Layton, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Layton dumpster rental, dumpster rental Layton UT, Layton Utah dumpster, roll-off dumpster Layton, construction dumpster Layton, waste management Layton",
  openGraph: {
    title: "Layton Dumpster Rental - Professional Services in Layton, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Layton, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/layton',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Layton Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Layton Dumpster Rental - Professional Services in Layton, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Layton, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/layton',
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

export default function LaytonPage() {
  const nearbyCities = [
  {
    "name": "Clearfield",
    "href": "/clearfield"
  },
  {
    "name": "Kaysville",
    "href": "/kaysville"
  },
  {
    "name": "Syracuse",
    "href": "/syracuse"
  },
  {
    "name": "Farmington",
    "href": "/farmington"
  },
  {
    "name": "Roy",
    "href": "/roy"
  }
];
  
  return (
    <CityPageClient
      cityName="layton"
      cityDisplayName="Layton"
      nearbyCities={nearbyCities}
      historicalInfo="Layton, located in Davis County, offers beautiful mountain views and growing residential communities. Our dumpster services support Layton's development in the northern Salt Lake Valley."
      landmarks="Layton City Hall, Layton Park, Antelope Island"
      localProjects="Supporting Layton's residential growth and community projects"
      neighborhoods="Layton Central, Layton East, Layton West"
      localBusinesses="Preferred provider for Layton's residential and community projects"
    />
  );
}
