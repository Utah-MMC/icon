import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Dumpster Rental Near Me Riverton - Local Services | Icon Dumpsters",
  description: "Find reliable dumpster rental near me in Riverton, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental near me Riverton",
    "Riverton dumpster rental near me",
    "dumpster rental near me Riverton Utah",
    "local dumpster rental Riverton",
    "dumpster rental near me Riverton Utah",
    "Riverton local dumpster services",
    "dumpster delivery near me Riverton",
    "Riverton nearby dumpster rental",
    "dumpster rental near me Utah Riverton",
    "local construction dumpster Riverton",
    "nearby home renovation dumpster Riverton",
    "local commercial dumpster rental Riverton",
    "dumpster rental near me demolition Riverton",
    "local concrete disposal Riverton",
    "closest dumpster rental Riverton",
    "dumpster rental near me same day Riverton"
  ],
  openGraph: {
    title: "Dumpster Rental Near Me Riverton - Local Services | Icon Dumpsters",
    description: "Find reliable dumpster rental near me in Riverton, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/dumpster-rental-near-me-Riverton-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/dumpster-rental-near-me-Riverton-ut',
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
    'geo.placename': 'Riverton, Utah',
    'geo.position': '40.5219;-111.9391',
    'ICBM': '40.5219, -111.9391',
  },
};

// Generated with randomization seed: 124 at 1757646733799
export default function RivertonDumpsterRentalPage() {
  const cityData = getCityData('riverton');
  const slcCityData = getSaltLakeCountyCity('riverton');
  
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