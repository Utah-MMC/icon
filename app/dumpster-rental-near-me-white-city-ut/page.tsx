import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../../../components/EnhancedCityPageTemplate';
import { getCityData } from '../../../config/cityData';
import { getSaltLakeCountyCity } from '../../../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Dumpster Rental Near Me White City - Local Services | Icon Dumpsters",
  description: "Find reliable dumpster rental near me in White City, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental near me White City",
    "White City dumpster rental near me",
    "dumpster rental near me White City Utah",
    "local dumpster rental White City",
    "dumpster rental near me White City Utah",
    "White City local dumpster services",
    "dumpster delivery near me White City",
    "White City nearby dumpster rental",
    "dumpster rental near me Utah White City",
    "local construction dumpster White City",
    "nearby home renovation dumpster White City",
    "local commercial dumpster rental White City",
    "dumpster rental near me demolition White City",
    "local concrete disposal White City",
    "closest dumpster rental White City",
    "dumpster rental near me same day White City"
  ],
  openGraph: {
    title: "Dumpster Rental Near Me White City - Local Services | Icon Dumpsters",
    description: "Find reliable dumpster rental near me in White City, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/dumpster-rental-near-me-White City-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/dumpster-rental-near-me-White City-ut',
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
    'geo.placename': 'White City, Utah',
    'geo.position': '40.5656;-111.8639',
    'ICBM': '40.5656, -111.8639',
  },
};

// Generated with randomization seed: 9746 at 1757646733802
export default function WhiteCityDumpsterRentalPage() {
  const cityData = getCityData('white-city');
  const slcCityData = getSaltLakeCountyCity('white-city');
  
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