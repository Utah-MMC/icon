import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Roll-Off Dumpster Rental Midvale - Professional Services | Icon Dumpsters",
  description: "Professional roll-off dumpster rental services in Midvale, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "roll-off dumpster rental Midvale",
    "Midvale roll-off dumpster rental",
    "roll-off dumpster Midvale Utah",
    "construction roll-off dumpster Midvale",
    "roll-off dumpster rental near me Midvale",
    "Midvale roll-off waste management",
    "roll-off dumpster delivery Midvale",
    "Midvale roll-off dumpster services",
    "roll-off dumpster rental Utah Midvale",
    "roll-off construction waste disposal Midvale",
    "roll-off home renovation dumpster Midvale",
    "roll-off commercial dumpster rental Midvale",
    "roll-off demolition dumpster Midvale",
    "roll-off concrete disposal Midvale"
  ],
  openGraph: {
    title: "Roll-Off Dumpster Rental Midvale - Professional Services | Icon Dumpsters",
    description: "Professional roll-off dumpster rental services in Midvale, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/roll-off-dumpster-rental-midvale",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/roll-off-dumpster-rental-midvale',
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