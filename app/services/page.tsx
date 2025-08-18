import { Metadata } from 'next';
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Dumpster Rental Services - Professional Utah Dumpster Services | Icon Dumpsters",
  description: "Professional dumpster rental services in Utah. Residential, commercial, and construction dumpster rentals. Same-day delivery, competitive pricing, and reliable service. Call (801) 918-6000.",
  keywords: "dumpster rental services, residential dumpster rental, commercial dumpster rental, construction dumpster rental, Utah dumpster services, same-day dumpster delivery, Icon Dumpsters services",
  openGraph: {
    title: "Dumpster Rental Services - Professional Utah Dumpster Services | Icon Dumpsters",
    description: "Professional dumpster rental services in Utah. Residential, commercial, and construction dumpster rentals. Same-day delivery, competitive pricing, and reliable service.",
    url: 'https://icondumpsters.com/services',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Icon Dumpsters - Professional Dumpster Rental Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dumpster Rental Services - Professional Utah Dumpster Services | Icon Dumpsters",
    description: "Professional dumpster rental services in Utah. Residential, commercial, and construction dumpster rentals. Same-day delivery, competitive pricing, and reliable service.",
    images: ['/images/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/services',
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

export default function Services() {
  return <ServicesClient />;
}
