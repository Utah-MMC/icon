import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Poplar Grove Dumpster Rental - Professional Services in Poplar Grove, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Poplar Grove, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Poplar Grove dumpster rental, dumpster rental Poplar Grove UT, Poplar Grove Utah dumpster, roll-off dumpster Poplar Grove, construction dumpster Poplar Grove, waste management Poplar Grove",
  openGraph: {
    title: "Poplar Grove Dumpster Rental - Professional Services in Poplar Grove, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Poplar Grove, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/poplar-grove',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Poplar Grove Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Poplar Grove Dumpster Rental - Professional Services in Poplar Grove, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Poplar Grove, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/poplar-grove',
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

import CityPageTemplate from '../components/CityPageTemplate';

export default function PoplarGrovePage() {
  return (
    <CityPageTemplate
      city="Poplar Grove, UT"
      neighborhoods={["Poplar Grove Central", "Glendale Border", "Navajo", "Jordan River"]}
      nearbyLinks={[
        { label: 'Glendale', href: '/glendale' },
        { label: 'Salt Lake City', href: '/salt-lake-city' },
        { label: 'Fairpark', href: '/fairpark' }
      ]}

    />
  );
}
