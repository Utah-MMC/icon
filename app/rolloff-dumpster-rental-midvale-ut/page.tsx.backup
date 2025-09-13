import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Rolloff Dumpster Rental Midvale - Professional Services | Icon Dumpsters",
  description: "Professional rolloff dumpster rental services in Midvale, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.",
  keywords: [
    "rolloff dumpster rental Midvale",
    "Midvale rolloff dumpster rental",
    "rolloff dumpster Midvale Utah",
    "construction rolloff dumpster Midvale",
    "rolloff dumpster rental near me Midvale",
    "Midvale rolloff waste management",
    "rolloff dumpster delivery Midvale",
    "Midvale rolloff dumpster services",
    "rolloff dumpster rental Utah Midvale",
    "rolloff construction waste disposal Midvale",
    "rolloff home renovation dumpster Midvale",
    "rolloff commercial dumpster rental Midvale",
    "rolloff demolition dumpster Midvale",
    "rolloff concrete disposal Midvale",
    "rolloff container rental Midvale",
    "rolloff bin rental Midvale"
  ],
  openGraph: {
    title: "Rolloff Dumpster Rental Midvale - Professional Services | Icon Dumpsters",
    description: "Professional rolloff dumpster rental services in Midvale, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/rolloff-dumpster-rental-midvale-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/rolloff-dumpster-rental-midvale-ut',
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

// Generated with randomization seed: 2508 at 1757646733740
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