import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "North Salt Lake Dumpster Rental - Professional Services in North Salt Lake, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in North Salt Lake, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "North Salt Lake dumpster rental, dumpster rental North Salt Lake UT, North Salt Lake Utah dumpster, roll-off dumpster North Salt Lake, construction dumpster North Salt Lake, waste management North Salt Lake",
  openGraph: {
    title: "North Salt Lake Dumpster Rental - Professional Services in North Salt Lake, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in North Salt Lake, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/north-salt-lake',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'North Salt Lake Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "North Salt Lake Dumpster Rental - Professional Services in North Salt Lake, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in North Salt Lake, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/north-salt-lake',
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

export default function NorthSaltLakePage() {
  return (
    <CityPageTemplate
      city="North Salt Lake, UT"
      neighborhoods={["Eaglewood", "Foxboro", "Downtown NSL", "Hatch Park"]}
      nearbyLinks={[
        { label: 'Bountiful', href: '/bountiful' },
        { label: 'Woods Cross', href: '/woods-cross' },
        { label: 'Salt Lake City', href: '/salt-lake-city' }
      ]}
      heroImages={[
        { src: '/images/dumpster500x200-2.jpeg', fallback: '/images/dumpster500x200-2.webp' },
        { src: '/images/dumpsters.jpeg', fallback: '/images/dumpsters.webp' }
      ]}
    />
  );
}
