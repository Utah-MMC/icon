import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Holladay Dumpster Rental - Professional Services in Holladay, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Holladay, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Holladay dumpster rental, dumpster rental Holladay UT, Holladay Utah dumpster, roll-off dumpster Holladay, construction dumpster Holladay, waste management Holladay",
  openGraph: {
    title: "Holladay Dumpster Rental - Professional Services in Holladay, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Holladay, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: 'https://icondumpsters.com/holladay',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Holladay Dumpster Rental - Professional Services in Holladay, UT | Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Holladay Dumpster Rental - Professional Services in Holladay, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Holladay, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    images: ['/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/holladay',
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

export default function HolladayPage() {
  return (
    <CityPageTemplate
      city="Holladay, UT"
      neighborhoods={["Olympus Hills", "Cottonwood", "Holladay Central", "Big Cottonwood"]}
      nearbyLinks={[
        { label: 'Millcreek', href: '/millcreek' },
        { label: 'Murray', href: '/murray' },
        { label: 'Cottonwood Heights', href: '/cottonwood-heights' }
      ]}
      heroImages={[
        { src: '/images/dumpsterSmallBanner2.jpeg', fallback: '/images/dumpsterSmallBanner2.webp' },
        { src: '/images/IMG_0336.jpg', fallback: '/images/dumpsters.webp' }
      ]}
    />
  );
}
