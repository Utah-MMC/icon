import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Dumpster Rental Near Me Kearns - Local Services | Icon Dumpsters",
  description: "Find reliable dumpster rental near me in Kearns, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental near me Kearns",
    "Kearns dumpster rental near me",
    "dumpster rental near me Kearns Utah",
    "local dumpster rental Kearns",
    "dumpster rental near me Kearns Utah",
    "Kearns local dumpster services",
    "dumpster delivery near me Kearns",
    "Kearns nearby dumpster rental",
    "dumpster rental near me Utah Kearns",
    "local construction dumpster Kearns",
    "nearby home renovation dumpster Kearns",
    "local commercial dumpster rental Kearns",
    "dumpster rental near me demolition Kearns",
    "local concrete disposal Kearns",
    "closest dumpster rental Kearns",
    "dumpster rental near me same day Kearns"
  ],
  openGraph: {
    title: "Dumpster Rental Near Me Kearns - Local Services | Icon Dumpsters",
    description: "Find reliable dumpster rental near me in Kearns, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/dumpster-rental-near-me-Kearns-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/dumpster-rental-near-me-Kearns-ut',
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
    'geo.placename': 'Kearns, Utah',
    'geo.position': '40.6597;-111.9969',
    'ICBM': '40.6597, -111.9969',
  },
};

// Generated with randomization seed: 6670 at 1757646733813
export default function KearnsDumpsterRentalPage() {
  const cityData = getCityData('kearns');
  const slcCityData = getSaltLakeCountyCity('kearns');
  
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