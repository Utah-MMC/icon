import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Dumpster Rental Near Me Sandy - Local Services | Icon Dumpsters",
  description: "Find reliable dumpster rental near me in Sandy, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental near me Sandy",
    "Sandy dumpster rental near me",
    "dumpster rental near me Sandy Utah",
    "local dumpster rental Sandy",
    "dumpster rental near me Sandy Utah",
    "Sandy local dumpster services",
    "dumpster delivery near me Sandy",
    "Sandy nearby dumpster rental",
    "dumpster rental near me Utah Sandy",
    "local construction dumpster Sandy",
    "nearby home renovation dumpster Sandy",
    "local commercial dumpster rental Sandy",
    "dumpster rental near me demolition Sandy",
    "local concrete disposal Sandy",
    "closest dumpster rental Sandy",
    "dumpster rental near me same day Sandy"
  ],
  openGraph: {
    title: "Dumpster Rental Near Me Sandy - Local Services | Icon Dumpsters",
    description: "Find reliable dumpster rental near me in Sandy, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/dumpster-rental-near-me-Sandy-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/dumpster-rental-near-me-Sandy-ut',
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
    'geo.placename': 'Sandy, Utah',
    'geo.position': '40.5649;-111.8381',
    'ICBM': '40.5649, -111.8381',
  },
};

// Generated with randomization seed: 5248 at 1757646733780
export default function SandyDumpsterRentalPage() {
  const cityData = getCityData('sandy');
  const slcCityData = getSaltLakeCountyCity('sandy');
  
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