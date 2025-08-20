import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "South Jordan Dumpster Rental - Professional Services in South Jordan, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in South Jordan, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "South Jordan dumpster rental, dumpster rental South Jordan UT, South Jordan Utah dumpster, roll-off dumpster South Jordan, construction dumpster South Jordan, waste management South Jordan",
  openGraph: {
    title: "South Jordan Dumpster Rental - Professional Services in South Jordan, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in South Jordan, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://www.icondumpsters.com/south-jordan',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'South Jordan Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "South Jordan Dumpster Rental - Professional Services in South Jordan, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in South Jordan, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/south-jordan',
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

export default function SouthJordanPage() {
  const nearbyCities = [
  {
    "name": "West Jordan",
    "href": "/west-jordan"
  },
  {
    "name": "Sandy",
    "href": "/sandy"
  },
  {
    "name": "Riverton",
    "href": "/riverton"
  },
  {
    "name": "Draper",
    "href": "/draper"
  },
  {
    "name": "Herriman",
    "href": "/herriman"
  }
];
  
  return (
    <CityPageClient
      cityName="south-jordan"
      cityDisplayName="South Jordan"
      nearbyCities={nearbyCities}
      historicalInfo="South Jordan, part of the Salt Lake Valley, is known for its family-friendly communities and the South Jordan City Hall. We provide reliable dumpster services for South Jordan's growing population."
      landmarks="South Jordan City Hall, South Jordan Parkway, Daybreak Community"
      localProjects="Supporting South Jordan's Daybreak community development and park improvements"
      neighborhoods="Daybreak, South Jordan Central, South Jordan East, South Jordan West"
      localBusinesses="Preferred provider for South Jordan's residential and commercial projects"
    />
  );
}