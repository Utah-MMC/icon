import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Dumpster Rental Near Me Holladay - Local Services | Icon Dumpsters",
  description: "Find reliable dumpster rental near me in Holladay, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental near me Holladay",
    "Holladay dumpster rental near me",
    "dumpster rental near me Holladay Utah",
    "local dumpster rental Holladay",
    "dumpster rental near me Holladay Utah",
    "Holladay local dumpster services",
    "dumpster delivery near me Holladay",
    "Holladay nearby dumpster rental",
    "dumpster rental near me Utah Holladay",
    "local construction dumpster Holladay",
    "nearby home renovation dumpster Holladay",
    "local commercial dumpster rental Holladay",
    "dumpster rental near me demolition Holladay",
    "local concrete disposal Holladay",
    "closest dumpster rental Holladay",
    "dumpster rental near me same day Holladay"
  ],
  openGraph: {
    title: "Dumpster Rental Near Me Holladay - Local Services | Icon Dumpsters",
    description: "Find reliable dumpster rental near me in Holladay, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/dumpster-rental-near-me-Holladay-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/dumpster-rental-near-me-Holladay-ut',
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
    'geo.placename': 'Holladay, Utah',
    'geo.position': '40.6689;-111.8247',
    'ICBM': '40.6689, -111.8247',
  },
};

// Generated with randomization seed: 480 at 1757646733777
export default function HolladayDumpsterRentalPage() {
  const cityData = getCityData('holladay');
  const slcCityData = getSaltLakeCountyCity('holladay');
  
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