import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Orem Dumpster Rental - Professional Services in Orem, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Orem, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Orem dumpster rental, dumpster rental Orem UT, Orem Utah dumpster, roll-off dumpster Orem, construction dumpster Orem, waste management Orem",
  openGraph: {
    title: "Orem Dumpster Rental - Professional Services in Orem, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Orem, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/orem',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Orem Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Orem Dumpster Rental - Professional Services in Orem, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Orem, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/orem',
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

export default function OremPage() {
  const nearbyCities = [
  {
    "name": "Provo",
    "href": "/provo"
  },
  {
    "name": "Pleasant Grove",
    "href": "/pleasant-grove"
  },
  {
    "name": "American Fork",
    "href": "/american-fork"
  },
  {
    "name": "Lindon",
    "href": "/lindon"
  },
  {
    "name": "Lehi",
    "href": "/lehi"
  }
];
  
  return (
    <CityPageClient
      cityName="orem"
      cityDisplayName="Orem"
      nearbyCities={nearbyCities}
      historicalInfo="Orem, known as 'Family City USA,' is home to Utah Valley University and offers beautiful mountain views. Our dumpster services support Orem's family-friendly community."
      landmarks="Utah Valley University, Orem City Hall, University Place, Orem Park"
      localProjects="Supporting UVU campus projects and Orem's family-oriented developments"
      neighborhoods="UVU Campus, Orem Central, Orem East, Orem West"
      localBusinesses="Trusted by UVU campus projects and Orem's family-oriented developers"
    />
  );
}
