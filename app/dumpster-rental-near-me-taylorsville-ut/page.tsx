import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Dumpster Rental Near Me Taylorsville - Local Services | Icon Dumpsters",
  description: "Find reliable dumpster rental near me in Taylorsville, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental near me Taylorsville",
    "Taylorsville dumpster rental near me",
    "dumpster rental near me Taylorsville Utah",
    "local dumpster rental Taylorsville",
    "dumpster rental near me Taylorsville Utah",
    "Taylorsville local dumpster services",
    "dumpster delivery near me Taylorsville",
    "Taylorsville nearby dumpster rental",
    "dumpster rental near me Utah Taylorsville",
    "local construction dumpster Taylorsville",
    "nearby home renovation dumpster Taylorsville",
    "local commercial dumpster rental Taylorsville",
    "dumpster rental near me demolition Taylorsville",
    "local concrete disposal Taylorsville",
    "closest dumpster rental Taylorsville",
    "dumpster rental near me same day Taylorsville"
  ],
  openGraph: {
    title: "Dumpster Rental Near Me Taylorsville - Local Services | Icon Dumpsters",
    description: "Find reliable dumpster rental near me in Taylorsville, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/dumpster-rental-near-me-Taylorsville-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/dumpster-rental-near-me-Taylorsville-ut',
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
    'geo.placename': 'Taylorsville, Utah',
    'geo.position': '40.6677;-111.9388',
    'ICBM': '40.6677, -111.9388',
  },
};

// Generated with randomization seed: 7675 at 1757646733809
export default function TaylorsvilleDumpsterRentalPage() {
  const cityData = getCityData('taylorsville');
  const slcCityData = getSaltLakeCountyCity('taylorsville');
  
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