import { Metadata } from 'next';
import CityPageTemplate from '../../components/CityPageTemplate';
import { getCityData } from '../../config/cityData';

export const metadata: Metadata = {
  title: "Murray Dumpster Rental - Professional Services in Murray, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Murray, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental Murray",
    "Murray dumpster rental",
    "roll-off dumpster Murray",
    "construction dumpster Murray",
    "dumpster rental near me Murray",
    "Murray waste management",
    "dumpster delivery Murray",
    "Murray dumpster services"
  ],
  openGraph: {
    title: "Murray Dumpster Rental - Professional Services | Icon Dumpsters",
    description: "Professional dumpster rental services in Murray, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    url: "https://icondumpsters.com/slc-dumpster-rental-murray-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/slc-dumpster-rental-murray-ut',
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
  other: {
    'geo.region': 'US-UT',
    'geo.placename': 'Murray, Utah',
    'geo.position': '40.6669;-111.8880',
    'ICBM': '40.6669, -111.8880',
  },
};

export default function MurrayDumpsterRentalPage() {
  const cityData = getCityData('murray');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}
