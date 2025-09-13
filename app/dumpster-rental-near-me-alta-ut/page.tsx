import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Dumpster Rental Near Me Alta - Local Services | Icon Dumpsters",
  description: "Find reliable dumpster rental near me in Alta, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental near me Alta",
    "Alta dumpster rental near me",
    "dumpster rental near me Alta Utah",
    "local dumpster rental Alta",
    "dumpster rental near me Alta Utah",
    "Alta local dumpster services",
    "dumpster delivery near me Alta",
    "Alta nearby dumpster rental",
    "dumpster rental near me Utah Alta",
    "local construction dumpster Alta",
    "nearby home renovation dumpster Alta",
    "local commercial dumpster rental Alta",
    "dumpster rental near me demolition Alta",
    "local concrete disposal Alta",
    "closest dumpster rental Alta",
    "dumpster rental near me same day Alta"
  ],
  openGraph: {
    title: "Dumpster Rental Near Me Alta - Local Services | Icon Dumpsters",
    description: "Find reliable dumpster rental near me in Alta, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/dumpster-rental-near-me-alta-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/dumpster-rental-near-me-alta-ut',
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
    'geo.placename': 'Alta, Utah',
    'geo.position': '40.5833;-111.6333',
    'ICBM': '40.5833, -111.6333',
  },
};

// Generated with randomization seed: 2463 at 1757646733807
export default function AltaDumpsterRentalPage() {
  const cityData = getCityData('alta');
  const slcCityData = getSaltLakeCountyCity('alta');
  
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