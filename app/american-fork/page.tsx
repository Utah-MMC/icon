import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "American Fork Dumpster Rental - Professional Services in American Fork, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in American Fork, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "American Fork dumpster rental, dumpster rental American Fork UT, American Fork Utah dumpster, roll-off dumpster American Fork, construction dumpster American Fork, waste management American Fork",
  openGraph: {
    title: "American Fork Dumpster Rental - Professional Services in American Fork, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in American Fork, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/american-fork',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'American Fork Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "American Fork Dumpster Rental - Professional Services in American Fork, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in American Fork, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/american-fork',
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

export default function AmericanForkPage() {
  const nearbyCities = [
  {
    "name": "Lehi",
    "href": "/lehi"
  },
  {
    "name": "Pleasant Grove",
    "href": "/pleasant-grove"
  },
  {
    "name": "Orem",
    "href": "/orem"
  },
  {
    "name": "Provo",
    "href": "/provo"
  },
  {
    "name": "Saratoga Springs",
    "href": "/saratoga-springs"
  }
];
  
  return (
    <CityPageClient
      cityName="american-fork"
      cityDisplayName="American Fork"
      nearbyCities={nearbyCities}
      historicalInfo="American Fork, located at the mouth of American Fork Canyon, offers stunning mountain views and outdoor recreation. Our dumpster services support American Fork's community growth."
      landmarks="American Fork Canyon, American Fork City Hall, American Fork Park"
      localProjects="Supporting American Fork's canyon access improvements and residential projects"
      neighborhoods="American Fork Central, American Fork East, American Fork West"
      localBusinesses="Trusted by American Fork's outdoor recreation and residential developers"
    />
  );
}
