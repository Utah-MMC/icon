import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Icon Dumpsters - Utah Dumpster Rental Services | Icon Dumpsters",
  description: "Learn about Icon Dumpsters, a family-owned Utah dumpster rental company. From pond service to dumpster rentals, we serve Utah with reliability and integrity.",
  keywords: "about Icon Dumpsters, Utah dumpster rental company, family-owned dumpster service, Utah dumpster rental history, Icon Dumpsters story",
  openGraph: {
    title: "About Icon Dumpsters - Utah Dumpster Rental Services | Icon Dumpsters",
    description: "Learn about Icon Dumpsters, a family-owned Utah dumpster rental company. From pond service to dumpster rentals, we serve Utah with reliability and integrity.",
    url: 'https://icondumpsters.com/about',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'About Icon Dumpsters - Utah Dumpster Rental Services | Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "About Icon Dumpsters - Utah Dumpster Rental Services | Icon Dumpsters",
    description: "Learn about Icon Dumpsters, a family-owned Utah dumpster rental company. From pond service to dumpster rentals, we serve Utah with reliability and integrity.",
    images: ['/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/about',
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

import AboutClient from './AboutClient';

export default function AboutPage() {
  return <AboutClient />;
}
