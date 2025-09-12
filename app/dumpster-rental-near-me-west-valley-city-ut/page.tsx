import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Dumpster Rental Near Me West Valley City - Local Services | Icon Dumpsters",
  description: "Find reliable dumpster rental near me in West Valley City, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental near me West Valley City",
    "West Valley City dumpster rental near me",
    "dumpster rental near me West Valley City Utah",
    "local dumpster rental West Valley City",
    "dumpster rental near me West Valley City Utah",
    "West Valley City local dumpster services",
    "dumpster delivery near me West Valley City",
    "West Valley City nearby dumpster rental",
    "dumpster rental near me Utah West Valley City",
    "local construction dumpster West Valley City",
    "nearby home renovation dumpster West Valley City",
    "local commercial dumpster rental West Valley City",
    "dumpster rental near me demolition West Valley City",
    "local concrete disposal West Valley City",
    "closest dumpster rental West Valley City",
    "dumpster rental near me same day West Valley City"
  ],
  openGraph: {
    title: "Dumpster Rental Near Me West Valley City - Local Services | Icon Dumpsters",
    description: "Find reliable dumpster rental near me in West Valley City, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/dumpster-rental-near-me-West Valley City-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/dumpster-rental-near-me-West Valley City-ut',
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
    'geo.placename': 'West Valley City, Utah',
    'geo.position': '40.6916;-111.9931',
    'ICBM': '40.6916, -111.9931',
  },
};

// Generated with randomization seed: 1050 at 1757646733794
export default function WestValleyCityDumpsterRentalPage() {
  const cityData = getCityData('west-valley-city');
  const slcCityData = getSaltLakeCountyCity('west-valley-city');
  
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