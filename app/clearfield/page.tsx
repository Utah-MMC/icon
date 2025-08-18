import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Clearfield Dumpster Rental - Professional Services in Clearfield, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Clearfield, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Clearfield dumpster rental, dumpster rental Clearfield UT, Clearfield Utah dumpster, roll-off dumpster Clearfield, construction dumpster Clearfield, waste management Clearfield",
  openGraph: {
    title: "Clearfield Dumpster Rental - Professional Services in Clearfield, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Clearfield, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/clearfield',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Clearfield Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Clearfield Dumpster Rental - Professional Services in Clearfield, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Clearfield, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/clearfield',
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

export default function ClearfieldPage() {
  const nearbyCities = [
  {
    "name": "Layton",
    "href": "/layton"
  },
  {
    "name": "Roy",
    "href": "/roy"
  },
  {
    "name": "Syracuse",
    "href": "/syracuse"
  },
  {
    "name": "Ogden",
    "href": "/ogden"
  },
  {
    "name": "Kaysville",
    "href": "/kaysville"
  }
];
  
  return (
    <CityPageClient
      cityName="clearfield"
      cityDisplayName="Clearfield"
      nearbyCities={nearbyCities}
      historicalInfo="Clearfield, located near Hill Air Force Base, offers a strong military community and beautiful mountain views. Our dumpster services support Clearfield's military and residential community."
      landmarks="Hill Air Force Base, Clearfield City Hall, Clearfield Park"
      localProjects="Supporting Clearfield's military community and residential projects"
      neighborhoods="Clearfield Central, Clearfield East, Clearfield West"
      localBusinesses="Trusted by Clearfield's military community and residential developers"
    />
  );
}