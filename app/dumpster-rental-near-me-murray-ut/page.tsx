import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../../../components/EnhancedCityPageTemplate';
import { getCityData } from '../../../config/cityData';
import { getSaltLakeCountyCity } from '../../../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Dumpster Rental Near Me Murray - Local Services | Icon Dumpsters",
  description: "Find reliable dumpster rental near me in Murray, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental near me Murray",
    "Murray dumpster rental near me",
    "dumpster rental near me Murray Utah",
    "local dumpster rental Murray",
    "dumpster rental near me Murray Utah",
    "Murray local dumpster services",
    "dumpster delivery near me Murray",
    "Murray nearby dumpster rental",
    "dumpster rental near me Utah Murray",
    "local construction dumpster Murray",
    "nearby home renovation dumpster Murray",
    "local commercial dumpster rental Murray",
    "dumpster rental near me demolition Murray",
    "local concrete disposal Murray",
    "closest dumpster rental Murray",
    "dumpster rental near me same day Murray"
  ],
  openGraph: {
    title: "Dumpster Rental Near Me Murray - Local Services | Icon Dumpsters",
    description: "Find reliable dumpster rental near me in Murray, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/dumpster-rental-near-me-Murray-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/dumpster-rental-near-me-Murray-ut',
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
    'geo.placename': 'Murray, Utah',
    'geo.position': '40.6669;-111.8880',
    'ICBM': '40.6669, -111.8880',
  },
};

// Generated with randomization seed: 1279 at 1757646733775
export default function MurrayDumpsterRentalPage() {
  const cityData = getCityData('murray');
  const slcCityData = getSaltLakeCountyCity('murray');
  
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