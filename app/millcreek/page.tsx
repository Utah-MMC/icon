import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Millcreek Dumpster Rental - Professional Services in Millcreek, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Millcreek, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Millcreek dumpster rental, dumpster rental Millcreek UT, Millcreek Utah dumpster, roll-off dumpster Millcreek, construction dumpster Millcreek, waste management Millcreek",
  openGraph: {
    title: "Millcreek Dumpster Rental - Professional Services in Millcreek, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Millcreek, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/millcreek',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Millcreek Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Millcreek Dumpster Rental - Professional Services in Millcreek, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Millcreek, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/millcreek',
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

export default function MillcreekPage() {
  return (
    <CityPageTemplate
      city="Millcreek, UT"
      neighborhoods={["Canyon Rim", "East Millcreek", "Millcreek Heights", "Olympus Cove"]}
      nearbyLinks={[
        { label: 'Holladay', href: '/holladay' },
        { label: 'Salt Lake City', href: '/salt-lake-city' },
        { label: 'Murray', href: '/murray' }
      ]}

    />
  );
}
