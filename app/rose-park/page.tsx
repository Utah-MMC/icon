import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Rose Park Dumpster Rental - Professional Services in Rose Park, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Rose Park, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Rose Park dumpster rental, dumpster rental Rose Park UT, Rose Park Utah dumpster, roll-off dumpster Rose Park, construction dumpster Rose Park, waste management Rose Park",
  openGraph: {
    title: "Rose Park Dumpster Rental - Professional Services in Rose Park, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Rose Park, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/rose-park',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Rose Park Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Rose Park Dumpster Rental - Professional Services in Rose Park, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Rose Park, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/rose-park',
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

export default function RoseParkPage() {
  return (
    <CityPageTemplate
      city="Rose Park, UT"
      neighborhoods={["Rose Park Central", "Jordan River", "Fairpark Border", "North Temple"]}
      nearbyLinks={[
        { label: 'Salt Lake City', href: '/salt-lake-city' },
        { label: 'North Salt Lake', href: '/north-salt-lake' },
        { label: 'Bountiful', href: '/bountiful' }
      ]}
      heroImages={[
        { src: '/images/dumpsterSmallBanner3.jpeg', fallback: '/images/dumpsterSmallBanner3.webp' },
        { src: '/images/dumpster500x500-2.jpeg', fallback: '/images/dumpster500x500-2.webp' }
      ]}
    />
  );
}
