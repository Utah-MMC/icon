import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dumpster Inventory Management - Track Your Fleet | Icon Dumpsters",
  description: "Manage your dumpster fleet with our comprehensive inventory tracking system. Monitor rentals, utilization rates, and fleet status in real-time.",
  keywords: "dumpster inventory management, fleet tracking, dumpster rental management, waste management system, Icon Dumpsters inventory",
  openGraph: {
    title: "Dumpster Inventory Management - Track Your Fleet | Icon Dumpsters",
    description: "Manage your dumpster fleet with our comprehensive inventory tracking system. Monitor rentals, utilization rates, and fleet status in real-time.",
    url: 'https://icondumpsters.com/inventory',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Dumpster Inventory Management - Track Your Fleet | Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dumpster Inventory Management - Track Your Fleet | Icon Dumpsters",
    description: "Manage your dumpster fleet with our comprehensive inventory tracking system. Monitor rentals, utilization rates, and fleet status in real-time.",
    images: ['/images/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/inventory',
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

import InventoryClient from './InventoryClient';

export default function InventoryPage() {
  return <InventoryClient />;
}