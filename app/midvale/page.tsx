import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Midvale Dumpster Rental - Professional Services in Midvale, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Midvale, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Midvale dumpster rental, dumpster rental Midvale UT, Midvale Utah dumpster, roll-off dumpster Midvale, construction dumpster Midvale, waste management Midvale",
  openGraph: {
    title: "Midvale Dumpster Rental - Professional Services in Midvale, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Midvale, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/midvale',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Midvale Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Midvale Dumpster Rental - Professional Services in Midvale, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Midvale, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/midvale',
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

export default function MidvalePage() {
  return (
    <CityPageTemplate
      city="Midvale, UT"
      neighborhoods={["Midvale Central", "Fort Union", "Union Park", "Bingham Junction"]}
      nearbyLinks={[
        { label: 'Murray', href: '/murray' },
        { label: 'Sandy', href: '/sandy' },
        { label: 'West Jordan', href: '/west-jordan' },
        { label: 'Taylorsville', href: '/taylorsville' }
      ]}

    />
  );
}
