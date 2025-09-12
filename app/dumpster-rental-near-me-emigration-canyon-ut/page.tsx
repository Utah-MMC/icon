import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Dumpster Rental Near Me Emigration Canyon - Local Services | Icon Dumpsters",
  description: "Find reliable dumpster rental near me in Emigration Canyon, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental near me Emigration Canyon",
    "Emigration Canyon dumpster rental near me",
    "dumpster rental near me Emigration Canyon Utah",
    "local dumpster rental Emigration Canyon",
    "dumpster rental near me Emigration Canyon Utah",
    "Emigration Canyon local dumpster services",
    "dumpster delivery near me Emigration Canyon",
    "Emigration Canyon nearby dumpster rental",
    "dumpster rental near me Utah Emigration Canyon",
    "local construction dumpster Emigration Canyon",
    "nearby home renovation dumpster Emigration Canyon",
    "local commercial dumpster rental Emigration Canyon",
    "dumpster rental near me demolition Emigration Canyon",
    "local concrete disposal Emigration Canyon",
    "closest dumpster rental Emigration Canyon",
    "dumpster rental near me same day Emigration Canyon"
  ],
  openGraph: {
    title: "Dumpster Rental Near Me Emigration Canyon - Local Services | Icon Dumpsters",
    description: "Find reliable dumpster rental near me in Emigration Canyon, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/dumpster-rental-near-me-Emigration Canyon-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/dumpster-rental-near-me-Emigration Canyon-ut',
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
    'geo.placename': 'Emigration Canyon, Utah',
    'geo.position': '40.7500;-111.8000',
    'ICBM': '40.7500, -111.8000',
  },
};

// Generated with randomization seed: 2842 at 1757646733797
export default function EmigrationCanyonDumpsterRentalPage() {
  const cityData = getCityData('emigration-canyon');
  const slcCityData = getSaltLakeCountyCity('emigration-canyon');
  
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