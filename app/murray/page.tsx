import { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';

export const metadata: Metadata = {
  title: "Murray Dumpster Rental - Professional Services in Murray, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Murray, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Murray dumpster rental, dumpster rental Murray UT, Murray Utah dumpster, roll-off dumpster Murray, construction dumpster Murray, waste management Murray",
  openGraph: {
    title: "Murray Dumpster Rental - Professional Services in Murray, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Murray, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/murray',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Murray Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Murray Dumpster Rental - Professional Services in Murray, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Murray, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/murray',
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

export default function MurrayPage() {
  return (
    <CityPageTemplate
      city="Murray, UT"
      neighborhoods={["Murray Central", "Murray North", "Murray South", "Fashion Place", "Winchester"]}
      nearbyLinks={[
        { label: 'Salt Lake City', href: '/salt-lake-city' },
        { label: 'Millcreek', href: '/millcreek' },
        { label: 'Taylorsville', href: '/taylorsville' },
        { label: 'Holladay', href: '/holladay' }
      ]}

    />
  );
}
