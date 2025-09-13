import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Dumpster Rental Near Me Midvale - Local Services | Icon Dumpsters",
  description: "Find reliable dumpster rental near me in Midvale, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental near me Midvale",
    "Midvale dumpster rental near me",
    "dumpster rental near me Midvale Utah",
    "local dumpster rental Midvale",
    "dumpster rental near me Midvale Utah",
    "Midvale local dumpster services",
    "dumpster delivery near me Midvale",
    "Midvale nearby dumpster rental",
    "dumpster rental near me Utah Midvale",
    "local construction dumpster Midvale",
    "nearby home renovation dumpster Midvale",
    "local commercial dumpster rental Midvale",
    "dumpster rental near me demolition Midvale",
    "local concrete disposal Midvale",
    "closest dumpster rental Midvale",
    "dumpster rental near me same day Midvale"
  ],
  openGraph: {
    title: "Dumpster Rental Near Me Midvale - Local Services | Icon Dumpsters",
    description: "Find reliable dumpster rental near me in Midvale, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/dumpster-rental-near-me-midvale-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/dumpster-rental-near-me-midvale-ut',
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

// Generated with randomization seed: 96 at 1757646733823
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