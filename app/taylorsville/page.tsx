import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Taylorsville Dumpster Rental - Professional Services in Taylorsville, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Taylorsville, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Taylorsville dumpster rental, dumpster rental Taylorsville UT, Taylorsville Utah dumpster, roll-off dumpster Taylorsville, construction dumpster Taylorsville, waste management Taylorsville",
  openGraph: {
    title: "Taylorsville Dumpster Rental - Professional Services in Taylorsville, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Taylorsville, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://www.icondumpsters.com/taylorsville',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Taylorsville Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Taylorsville Dumpster Rental - Professional Services in Taylorsville, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Taylorsville, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/taylorsville',
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

export default function TaylorsvillePage() {
  const nearbyCities = [
  {
    "name": "West Jordan",
    "href": "/west-jordan"
  },
  {
    "name": "West Valley City",
    "href": "/west-valley-city"
  },
  {
    "name": "Murray",
    "href": "/murray"
  },
  {
    "name": "Midvale",
    "href": "/midvale"
  },
  {
    "name": "Kearns",
    "href": "/kearns"
  }
];
  
  return (
    <CityPageClient
      cityName="taylorsville"
      cityDisplayName="Taylorsville"
      nearbyCities={nearbyCities}
      historicalInfo="Taylorsville, established in 1996, is a growing community in the Salt Lake Valley. Our dumpster services support Taylorsville's residential and commercial development."
      landmarks="Taylorsville City Hall, Taylorsville Park, Valley Regional Park"
      localProjects="Supporting Taylorsville's park improvements and residential development"
      neighborhoods="Taylorsville Central, Taylorsville East, Taylorsville West"
      localBusinesses="Trusted by Taylorsville's local contractors and developers"
    />
  );
}