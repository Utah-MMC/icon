import { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';

export const metadata: Metadata = {
  title: "Bountiful Dumpster Rental - Fast Service in Bountiful, UT | Icon Dumpsters",
  description: "Reliable dumpster rental in Bountiful, Utah. Same-day delivery, transparent pricing, and friendly local service. 15-30 yard roll-off dumpsters.",
  alternates: { canonical: '/bountiful' }
};

export default function BountifulPage() {
  return (
    <CityPageTemplate
      city="Bountiful, UT"
      neighborhoods={["Downtown Bountiful", "Val Verda", "Bountiful Heights", "Orchard"]}
      nearbyLinks={[
        { label: 'North Salt Lake', href: '/north-salt-lake' },
        { label: 'Centerville', href: '/centerville' },
        { label: 'Salt Lake City', href: '/salt-lake-city' }
      ]}
      heroImages={[
        { src: '/images/dumpster500x500-1.jpeg', fallback: '/images/dumpster500x500-1.webp' },
        { src: '/images/dumpsterSmallBanner3.jpeg', fallback: '/images/dumpsterSmallBanner3.webp' }
      ]}
    />
  );
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bountiful Dumpster Rental - Professional Services in Bountiful, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Bountiful, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Bountiful dumpster rental, dumpster rental Bountiful UT, Bountiful Utah dumpster, roll-off dumpster Bountiful, construction dumpster Bountiful, waste management Bountiful",
  openGraph: {
    title: "Bountiful Dumpster Rental - Professional Services in Bountiful, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Bountiful, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/bountiful',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Bountiful Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Bountiful Dumpster Rental - Professional Services in Bountiful, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Bountiful, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/bountiful',
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

export default function BountifulPage() {
  const nearbyCities = [
  {
    "name": "Centerville",
    "href": "/centerville"
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
      cityName="bountiful"
      cityDisplayName="Bountiful"
      nearbyCities={nearbyCities}
      historicalInfo="Bountiful, located at the base of the Wasatch Mountains, offers stunning mountain views and a strong sense of community. Our dumpster services support Bountiful's mountain community."
      landmarks="Bountiful City Hall, Bountiful Park, Mueller Park"
      localProjects="Supporting Bountiful's mountain community development and residential projects"
      neighborhoods="Bountiful Central, Bountiful East, Bountiful West"
      localBusinesses="Preferred provider for Bountiful's mountain community and residential projects"
    />
  );
}
