import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Dumpster Rental Near Me Herriman - Local Services | Icon Dumpsters",
  description: "Find reliable dumpster rental near me in Herriman, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental near me Herriman",
    "Herriman dumpster rental near me",
    "dumpster rental near me Herriman Utah",
    "local dumpster rental Herriman",
    "dumpster rental near me Herriman Utah",
    "Herriman local dumpster services",
    "dumpster delivery near me Herriman",
    "Herriman nearby dumpster rental",
    "dumpster rental near me Utah Herriman",
    "local construction dumpster Herriman",
    "nearby home renovation dumpster Herriman",
    "local commercial dumpster rental Herriman",
    "dumpster rental near me demolition Herriman",
    "local concrete disposal Herriman",
    "closest dumpster rental Herriman",
    "dumpster rental near me same day Herriman"
  ],
  openGraph: {
    title: "Dumpster Rental Near Me Herriman - Local Services | Icon Dumpsters",
    description: "Find reliable dumpster rental near me in Herriman, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/dumpster-rental-near-me-herriman-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/dumpster-rental-near-me-herriman-ut',
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
    'geo.placename': 'Herriman, Utah',
    'geo.position': '40.5141;-112.0329',
    'ICBM': '40.5141, -112.0329',
  },
};

// Generated with randomization seed: 926 at 1757646733770
export default function HerrimanDumpsterRentalPage() {
  const cityData = getCityData('herriman');
  const slcCityData = getSaltLakeCountyCity('herriman');
  
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