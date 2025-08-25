import { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';

export const metadata: Metadata = {
  title: "West Jordan Dumpster Rental - Professional Services in West Jordan, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in West Jordan, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "West Jordan dumpster rental, dumpster rental West Jordan UT, West Jordan Utah dumpster, roll-off dumpster West Jordan, construction dumpster West Jordan, waste management West Jordan",
  openGraph: {
    title: "West Jordan Dumpster Rental - Professional Services in West Jordan, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in West Jordan, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://www.icondumpsters.com/west-jordan',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'West Jordan Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "West Jordan Dumpster Rental - Professional Services in West Jordan, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in West Jordan, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/west-jordan',
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

export default function WestJordanPage() {
  return (
    <CityPageTemplate
      city="West Jordan, UT"
      neighborhoods={["Jordan Landing", "Redwood", "Oquirrh", "Copper Hills"]}
      nearbyLinks={[
        { label: 'Taylorsville', href: '/taylorsville' },
        { label: 'South Jordan', href: '/south-jordan' },
        { label: 'West Valley City', href: '/west-valley-city' },
        { label: 'Midvale', href: '/midvale' }
      ]}

    />
  );
}
