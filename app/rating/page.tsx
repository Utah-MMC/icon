import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Rate Our Service - Icon Dumpsters Customer Feedback | Icon Dumpsters",
  description: "Share your experience with Icon Dumpsters. Rate our dumpster rental service and help us continue providing excellent service to Utah customers.",
  keywords: "Icon Dumpsters reviews, dumpster rental reviews, customer feedback, rate dumpster service, Utah dumpster rental reviews",
  openGraph: {
    title: "Rate Our Service - Icon Dumpsters Customer Feedback | Icon Dumpsters",
    description: "Share your experience with Icon Dumpsters. Rate our dumpster rental service and help us continue providing excellent service to Utah customers.",
    url: 'https://icondumpsters.com/rating',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Rate Our Service - Icon Dumpsters Customer Feedback | Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Rate Our Service - Icon Dumpsters Customer Feedback | Icon Dumpsters",
    description: "Share your experience with Icon Dumpsters. Rate our dumpster rental service and help us continue providing excellent service to Utah customers.",
    images: ['/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/rating',
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

import RatingClient from './RatingClient';

export default function RatingPage() {
  return <RatingClient />;
}
