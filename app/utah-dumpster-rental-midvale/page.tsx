import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Utah Dumpster Rental Midvale - Professional Services | Icon Dumpsters",
  description: "Professional Utah dumpster rental services in Midvale. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "Utah dumpster rental Midvale",
    "dumpster rental Utah Midvale",
    "roll-off dumpster Utah Midvale",
    "construction dumpster Utah Midvale",
    "dumpster rental near me Midvale Utah",
    "Midvale Utah waste management",
    "dumpster delivery Utah Midvale",
    "Midvale Utah dumpster services",
    "Utah dumpster rental services",
    "Utah construction waste disposal Midvale",
    "Utah home renovation dumpster Midvale",
    "Utah commercial dumpster rental Midvale",
    "Utah demolition dumpster Midvale",
    "Utah concrete disposal Midvale"
  ],
  openGraph: {
    title: "Utah Dumpster Rental Midvale - Professional Services | Icon Dumpsters",
    description: "Professional Utah dumpster rental services in Midvale. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/utah-dumpster-rental-midvale",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/utah-dumpster-rental-midvale',
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