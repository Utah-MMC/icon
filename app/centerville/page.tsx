import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Centerville Dumpster Rental - Professional Services in Centerville, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Centerville, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Centerville dumpster rental, dumpster rental Centerville UT, Centerville Utah dumpster, roll-off dumpster Centerville, construction dumpster Centerville, waste management Centerville",
  openGraph: {
    title: "Centerville Dumpster Rental - Professional Services in Centerville, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Centerville, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/centerville',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Centerville Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Centerville Dumpster Rental - Professional Services in Centerville, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Centerville, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/centerville',
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

export default function CentervillePage() {
  const nearbyCities = [
  {
    "name": "Bountiful",
    "href": "/bountiful"
  },
  {
    "name": "Farmington",
    "href": "/farmington"
  },
  {
    "name": "North Salt Lake",
    "href": "/north-salt-lake"
  },
  {
    "name": "Woods Cross",
    "href": "/woods-cross"
  },
  {
    "name": "Kaysville",
    "href": "/kaysville"
  }
];
  
  return (
    <CityPageClient
      cityName="centerville"
      cityDisplayName="Centerville"
      nearbyCities={nearbyCities}
      historicalInfo="Centerville, located in Davis County, offers beautiful mountain views and family-friendly communities. Our dumpster services support Centerville's development in the northern Salt Lake Valley."
      landmarks="Centerville City Hall, Centerville Park, Mueller Park"
      localProjects="Supporting Centerville's residential growth and community projects"
      neighborhoods="Centerville Central, Centerville East, Centerville West"
      localBusinesses="Trusted by Centerville's residential developers and community projects"
    />
  );
}