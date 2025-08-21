import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Lehi Dumpster Rental - Professional Services in Lehi, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Lehi, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Lehi dumpster rental, dumpster rental Lehi UT, Lehi Utah dumpster, roll-off dumpster Lehi, construction dumpster Lehi, waste management Lehi",
  openGraph: {
    title: "Lehi Dumpster Rental - Professional Services in Lehi, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Lehi, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/lehi',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Lehi Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Lehi Dumpster Rental - Professional Services in Lehi, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Lehi, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/lehi',
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

export default function LehiPage() {
  const nearbyCities = [
  {
    "name": "American Fork",
    "href": "/american-fork"
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
    "name": "Saratoga Springs",
    "href": "/saratoga-springs"
  },
  {
    "name": "Eagle Mountain",
    "href": "/eagle-mountain"
  }
];
  
  return (
    <CityPageClient
      cityName="lehi"
      cityDisplayName="Lehi"
      nearbyCities={nearbyCities}
      historicalInfo="Lehi, home to Thanksgiving Point and the Lehi Roller Mills, is experiencing rapid growth in Utah County. Our dumpster services support Lehi's expanding community."
      landmarks="Thanksgiving Point, Lehi Roller Mills, Lehi City Hall, Traverse Mountain"
      localProjects="Supporting Lehi's Thanksgiving Point expansion and residential growth"
      neighborhoods="Thanksgiving Point, Lehi Central, Lehi East, Lehi West, Traverse Mountain"
      localBusinesses="Preferred provider for Lehi's Thanksgiving Point and residential projects"
    />
  );
}
