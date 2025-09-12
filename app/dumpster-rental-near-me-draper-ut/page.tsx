import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Dumpster Rental Near Me Draper - Local Services | Icon Dumpsters",
  description: "Find reliable dumpster rental near me in Draper, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental near me Draper",
    "Draper dumpster rental near me",
    "dumpster rental near me Draper Utah",
    "local dumpster rental Draper",
    "dumpster rental near me Draper Utah",
    "Draper local dumpster services",
    "dumpster delivery near me Draper",
    "Draper nearby dumpster rental",
    "dumpster rental near me Utah Draper",
    "local construction dumpster Draper",
    "nearby home renovation dumpster Draper",
    "local commercial dumpster rental Draper",
    "dumpster rental near me demolition Draper",
    "local concrete disposal Draper",
    "closest dumpster rental Draper",
    "dumpster rental near me same day Draper"
  ],
  openGraph: {
    title: "Dumpster Rental Near Me Draper - Local Services | Icon Dumpsters",
    description: "Find reliable dumpster rental near me in Draper, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/dumpster-rental-near-me-Draper-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/dumpster-rental-near-me-Draper-ut',
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
    'geo.placename': 'Draper, Utah',
    'geo.position': '40.5247;-111.8638',
    'ICBM': '40.5247, -111.8638',
  },
};

// Generated with randomization seed: 4746 at 1757646733782
export default function DraperDumpsterRentalPage() {
  const cityData = getCityData('draper');
  const slcCityData = getSaltLakeCountyCity('draper');
  
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