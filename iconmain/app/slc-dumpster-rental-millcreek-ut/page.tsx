import { Metadata } from 'next';
import CityPageTemplate from '../../components/CityPageTemplate';
import { getCityData } from '../config/cityData';

export const metadata: Metadata = {
  title: "Millcreek Dumpster Rental - Professional Services in Millcreek, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Millcreek, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental Millcreek",
    "Millcreek dumpster rental",
    "roll-off dumpster Millcreek",
    "construction dumpster Millcreek",
    "dumpster rental near me Millcreek",
    "Millcreek waste management",
    "dumpster delivery Millcreek",
    "Millcreek dumpster services"
  ],
  openGraph: {
    title: "Millcreek Dumpster Rental - Professional Services | Icon Dumpsters",
    description: "Professional dumpster rental services in Millcreek, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    url: "https://icondumpsters.com/slc-dumpster-rental-millcreek-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/slc-dumpster-rental-millcreek-ut',
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
    'geo.placename': 'Millcreek, Utah',
    'geo.position': '40.6869;-111.8750',
    'ICBM': '40.6869, -111.8750',
  },
};

export default function MillcreekDumpsterRentalPage() {
  const cityData = getCityData('millcreek');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}
