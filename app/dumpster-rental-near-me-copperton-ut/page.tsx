import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Dumpster Rental Near Me Copperton - Local Services | Icon Dumpsters",
  description: "Find reliable dumpster rental near me in Copperton, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental near me Copperton",
    "Copperton dumpster rental near me",
    "dumpster rental near me Copperton Utah",
    "local dumpster rental Copperton",
    "dumpster rental near me Copperton Utah",
    "Copperton local dumpster services",
    "dumpster delivery near me Copperton",
    "Copperton nearby dumpster rental",
    "dumpster rental near me Utah Copperton",
    "local construction dumpster Copperton",
    "nearby home renovation dumpster Copperton",
    "local commercial dumpster rental Copperton",
    "dumpster rental near me demolition Copperton",
    "local concrete disposal Copperton",
    "closest dumpster rental Copperton",
    "dumpster rental near me same day Copperton"
  ],
  openGraph: {
    title: "Dumpster Rental Near Me Copperton - Local Services | Icon Dumpsters",
    description: "Find reliable dumpster rental near me in Copperton, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/dumpster-rental-near-me-Copperton-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/dumpster-rental-near-me-Copperton-ut',
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
    'geo.placename': 'Copperton, Utah',
    'geo.position': '40.5667;-112.1000',
    'ICBM': '40.5667, -112.1000',
  },
};

// Generated with randomization seed: 6701 at 1757646733772
export default function CoppertonDumpsterRentalPage() {
  const cityData = getCityData('copperton');
  const slcCityData = getSaltLakeCountyCity('copperton');
  
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