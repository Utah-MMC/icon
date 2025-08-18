import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Saratoga Springs Dumpster Rental - Professional Services in Saratoga Springs, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Saratoga Springs, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Saratoga Springs dumpster rental, dumpster rental Saratoga Springs UT, Saratoga Springs Utah dumpster, roll-off dumpster Saratoga Springs, construction dumpster Saratoga Springs, waste management Saratoga Springs",
  openGraph: {
    title: "Saratoga Springs Dumpster Rental - Professional Services in Saratoga Springs, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Saratoga Springs, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/saratoga-springs',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Saratoga Springs Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Saratoga Springs Dumpster Rental - Professional Services in Saratoga Springs, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Saratoga Springs, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/saratoga-springs',
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

export default function SaratogaSpringsPage() {
  const nearbyCities = [
  {
    "name": "Lehi",
    "href": "/lehi"
  },
  {
    "name": "Eagle Mountain",
    "href": "/eagle-mountain"
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
    "name": "Orem",
    "href": "/orem"
  }
];
  
  return (
    <CityPageClient
      cityName="saratoga-springs"
      cityDisplayName="Saratoga Springs"
      nearbyCities={nearbyCities}
      historicalInfo="Saratoga Springs, located on the shores of Utah Lake, offers beautiful lake views and outdoor recreation. Our dumpster services support Saratoga Springs' lakeside community."
      landmarks="Utah Lake, Saratoga Springs City Hall, Saratoga Springs Park"
      localProjects="Supporting Saratoga Springs' lakeside development and residential growth"
      neighborhoods="Saratoga Springs Central, Saratoga Springs East, Saratoga Springs West"
      localBusinesses="Trusted by Saratoga Springs' lakeside and residential developers"
    />
  );
}