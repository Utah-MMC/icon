import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Dumpster Rental Near Me Magna - Local Services | Icon Dumpsters",
  description: "Find reliable dumpster rental near me in Magna, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental near me Magna",
    "Magna dumpster rental near me",
    "dumpster rental near me Magna Utah",
    "local dumpster rental Magna",
    "dumpster rental near me Magna Utah",
    "Magna local dumpster services",
    "dumpster delivery near me Magna",
    "Magna nearby dumpster rental",
    "dumpster rental near me Utah Magna",
    "local construction dumpster Magna",
    "nearby home renovation dumpster Magna",
    "local commercial dumpster rental Magna",
    "dumpster rental near me demolition Magna",
    "local concrete disposal Magna",
    "closest dumpster rental Magna",
    "dumpster rental near me same day Magna"
  ],
  openGraph: {
    title: "Dumpster Rental Near Me Magna - Local Services | Icon Dumpsters",
    description: "Find reliable dumpster rental near me in Magna, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/dumpster-rental-near-me-magna-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/dumpster-rental-near-me-magna-ut',
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
    'geo.placename': 'Magna, Utah',
    'geo.position': '40.7089;-112.1014',
    'ICBM': '40.7089, -112.1014',
  },
};

// Generated with randomization seed: 6448 at 1757646733785
export default function MagnaDumpsterRentalPage() {
  const cityData = getCityData('magna');
  const slcCityData = getSaltLakeCountyCity('magna');
  
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