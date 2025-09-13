import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Dumpster Rental Near Me Brighton - Local Services | Icon Dumpsters",
  description: "Find reliable dumpster rental near me in Brighton, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental near me Brighton",
    "Brighton dumpster rental near me",
    "dumpster rental near me Brighton Utah",
    "local dumpster rental Brighton",
    "dumpster rental near me Brighton Utah",
    "Brighton local dumpster services",
    "dumpster delivery near me Brighton",
    "Brighton nearby dumpster rental",
    "dumpster rental near me Utah Brighton",
    "local construction dumpster Brighton",
    "nearby home renovation dumpster Brighton",
    "local commercial dumpster rental Brighton",
    "dumpster rental near me demolition Brighton",
    "local concrete disposal Brighton",
    "closest dumpster rental Brighton",
    "dumpster rental near me same day Brighton"
  ],
  openGraph: {
    title: "Dumpster Rental Near Me Brighton - Local Services | Icon Dumpsters",
    description: "Find reliable dumpster rental near me in Brighton, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/dumpster-rental-near-me-brighton-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/dumpster-rental-near-me-brighton-ut',
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
    'geo.placename': 'Brighton, Utah',
    'geo.position': '40.6000;-111.5833',
    'ICBM': '40.6000, -111.5833',
  },
};

// Generated with randomization seed: 4925 at 1757646733792
export default function BrightonDumpsterRentalPage() {
  const cityData = getCityData('brighton');
  const slcCityData = getSaltLakeCountyCity('brighton');
  
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