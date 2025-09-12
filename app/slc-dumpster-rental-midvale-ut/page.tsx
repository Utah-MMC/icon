import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../../../components/EnhancedCityPageTemplate';
import { getCityData } from '../../../config/cityData';
import { getSaltLakeCountyCity } from '../../../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Midvale Dumpster Rental - Professional Services in Midvale, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Midvale, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental Midvale",
    "Midvale dumpster rental",
    "roll-off dumpster Midvale",
    "construction dumpster Midvale",
    "dumpster rental near me Midvale",
    "Midvale waste management",
    "dumpster delivery Midvale",
    "Midvale dumpster services",
    "Salt Lake County dumpster rental",
    "Utah dumpster rental Midvale",
    "construction waste disposal Midvale",
    "home renovation dumpster Midvale",
    "commercial dumpster rental Midvale",
    "demolition dumpster Midvale",
    "concrete disposal Midvale"
  ],
  openGraph: {
    title: "Midvale Dumpster Rental - Professional Services | Icon Dumpsters",
    description: "Professional dumpster rental services in Midvale, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    url: "https://icondumpsters.com/slc-dumpster-rental-midvale-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/slc-dumpster-rental-midvale-ut',
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
    'geo.placename': 'Midvale, Utah',
    'geo.position': '40.6111;-111.8994',
    'ICBM': '40.6111, -111.8994',
  },
};

export default function MidvaleDumpsterRentalPage() {
  const cityData = getCityData('midvale');
  const slcCityData = getSaltLakeCountyCity('midvale');
  
  if (!cityData || !slcCityData) {
    return <div>City data not found</div>;
  }

  return (
    <EnhancedCityPageTemplate 
      {...cityData} 
      population={slcCityData.population}
      area={slcCityData.area}
      established={slcCityData.established}
    />
  );
}
