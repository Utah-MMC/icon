import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Dumpster Rental Near Me Salt Lake City - Local Services | Icon Dumpsters",
  description: "Find reliable dumpster rental near me in Salt Lake City, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental near me Salt Lake City",
    "Salt Lake City dumpster rental near me",
    "dumpster rental near me Salt Lake City Utah",
    "local dumpster rental Salt Lake City",
    "dumpster rental near me Salt Lake City Utah",
    "Salt Lake City local dumpster services",
    "dumpster delivery near me Salt Lake City",
    "Salt Lake City nearby dumpster rental",
    "dumpster rental near me Utah Salt Lake City",
    "local construction dumpster Salt Lake City",
    "nearby home renovation dumpster Salt Lake City",
    "local commercial dumpster rental Salt Lake City",
    "dumpster rental near me demolition Salt Lake City",
    "local concrete disposal Salt Lake City",
    "closest dumpster rental Salt Lake City",
    "dumpster rental near me same day Salt Lake City"
  ],
  openGraph: {
    title: "Dumpster Rental Near Me Salt Lake City - Local Services | Icon Dumpsters",
    description: "Find reliable dumpster rental near me in Salt Lake City, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/dumpster-rental-near-me-Salt Lake City-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/dumpster-rental-near-me-Salt Lake City-ut',
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
    'geo.placename': 'Salt Lake City, Utah',
    'geo.position': '40.7608;-111.8910',
    'ICBM': '40.7608, -111.8910',
  },
};

// Generated with randomization seed: 4977 at 1757646733816
export default function SaltLakeCityDumpsterRentalPage() {
  const cityData = getCityData('salt-lake-city');
  const slcCityData = getSaltLakeCountyCity('salt-lake-city');
  
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