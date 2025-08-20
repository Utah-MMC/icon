import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "South Salt Lake Dumpster Rental - Professional Services in South Salt Lake, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in South Salt Lake, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "South Salt Lake dumpster rental, dumpster rental South Salt Lake UT, South Salt Lake Utah dumpster, roll-off dumpster South Salt Lake, construction dumpster South Salt Lake, waste management South Salt Lake",
  openGraph: {
    title: "South Salt Lake Dumpster Rental - Professional Services in South Salt Lake, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in South Salt Lake, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://www.icondumpsters.com/south-salt-lake',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'South Salt Lake Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "South Salt Lake Dumpster Rental - Professional Services in South Salt Lake, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in South Salt Lake, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/south-salt-lake',
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

export default function SouthSaltLakePage() {
  const nearbyCities = [
  {
    "name": "Salt Lake City",
    "href": "/salt-lake-city"
  },
  {
    "name": "Murray",
    "href": "/murray"
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
  }
];
  
  return (
    <CityPageClient
      cityName="south-salt-lake"
      cityDisplayName="South Salt Lake"
      nearbyCities={nearbyCities}
      historicalInfo="South Salt Lake, centrally located in the Salt Lake Valley, offers convenient access to downtown and growing business opportunities. Our dumpster services support South Salt Lake's development."
      landmarks="South Salt Lake City Hall, South Salt Lake Park, Central Valley"
      localProjects="Supporting South Salt Lake's business development and community projects"
      neighborhoods="South Salt Lake Central, South Salt Lake East, South Salt Lake West"
      localBusinesses="Preferred provider for South Salt Lake's business and community projects"
    />
  );
}