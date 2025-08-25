import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Glendale Dumpster Rental - Professional Services in Glendale, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Glendale, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Glendale dumpster rental, dumpster rental Glendale UT, Glendale Utah dumpster, roll-off dumpster Glendale, construction dumpster Glendale, waste management Glendale",
  openGraph: {
    title: "Glendale Dumpster Rental - Professional Services in Glendale, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Glendale, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/glendale',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Glendale Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Glendale Dumpster Rental - Professional Services in Glendale, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Glendale, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/glendale',
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

export default function GlendalePage() {
  return (
    <CityPageTemplate
      city="Glendale, UT"
      neighborhoods={["Glendale Central", "Jordan River", "Navajo", "Poplar Grove Border"]}
      nearbyLinks={[
        { label: 'Salt Lake City', href: '/salt-lake-city' },
        { label: 'Rose Park', href: '/rose-park' },
        { label: 'Poplar Grove', href: '/poplar-grove' },
        { label: 'Fairpark', href: '/fairpark' }
      ]}

    />
  );
}
