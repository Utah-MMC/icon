import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sugar House Dumpster Rental - Professional Services in Sugar House, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Sugar House, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Sugar House dumpster rental, dumpster rental Sugar House UT, Sugar House Utah dumpster, roll-off dumpster Sugar House, construction dumpster Sugar House, waste management Sugar House",
  openGraph: {
    title: "Sugar House Dumpster Rental - Professional Services in Sugar House, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Sugar House, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://www.icondumpsters.com/sugar-house',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Sugar House Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sugar House Dumpster Rental - Professional Services in Sugar House, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Sugar House, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/sugar-house',
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

export default function SugarHousePage() {
  return (
    <CityPageTemplate
      city="Sugar House, UT"
      neighborhoods={["Sugar House Park", "Westminster", "Highland Park", "15th & 15th"]}
      nearbyLinks={[
        { label: 'Salt Lake City', href: '/salt-lake-city' },
        { label: 'Millcreek', href: '/millcreek' },
        { label: 'Holladay', href: '/holladay' }
      ]}

    />
  );
}
