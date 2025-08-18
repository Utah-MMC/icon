import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "West Valley City Dumpster Rental - Professional Services in West Valley City, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in West Valley City, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "West Valley City dumpster rental, dumpster rental West Valley City UT, West Valley City Utah dumpster, roll-off dumpster West Valley City, construction dumpster West Valley City, waste management West Valley City",
  openGraph: {
    title: "West Valley City Dumpster Rental - Professional Services in West Valley City, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in West Valley City, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/west-valley-city',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'West Valley City Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "West Valley City Dumpster Rental - Professional Services in West Valley City, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in West Valley City, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/west-valley-city',
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

export default function WestValleyCityPage() {
  const nearbyCities = [
  {
    "name": "Salt Lake City",
    "href": "/salt-lake-city"
  },
  {
    "name": "Taylorsville",
    "href": "/taylorsville"
  },
  {
    "name": "Kearns",
    "href": "/kearns"
  },
  {
    "name": "Magna",
    "href": "/magna"
  },
  {
    "name": "Murray",
    "href": "/murray"
  }
];
  
  return (
    <CityPageClient
      cityName="west-valley-city"
      cityDisplayName="West Valley City"
      nearbyCities={nearbyCities}
      historicalInfo="West Valley City, Utah's second-largest city, is home to the Maverik Center and the Utah Cultural Celebration Center. Our dumpster services support West Valley City's diverse community."
      landmarks="Maverik Center, Utah Cultural Celebration Center, West Valley City Hall"
      localProjects="Supporting West Valley City's cultural events and community projects"
      neighborhoods="West Valley Central, West Valley East, West Valley West, Kearns area"
      localBusinesses="Trusted partner for West Valley City's cultural and community projects"
    />
  );
}