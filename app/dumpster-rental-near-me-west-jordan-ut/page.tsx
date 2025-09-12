import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Dumpster Rental Near Me West Jordan - Local Services | Icon Dumpsters",
  description: "Find reliable dumpster rental near me in West Jordan, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental near me West Jordan",
    "West Jordan dumpster rental near me",
    "dumpster rental near me West Jordan Utah",
    "local dumpster rental West Jordan",
    "dumpster rental near me West Jordan Utah",
    "West Jordan local dumpster services",
    "dumpster delivery near me West Jordan",
    "West Jordan nearby dumpster rental",
    "dumpster rental near me Utah West Jordan",
    "local construction dumpster West Jordan",
    "nearby home renovation dumpster West Jordan",
    "local commercial dumpster rental West Jordan",
    "dumpster rental near me demolition West Jordan",
    "local concrete disposal West Jordan",
    "closest dumpster rental West Jordan",
    "dumpster rental near me same day West Jordan"
  ],
  openGraph: {
    title: "Dumpster Rental Near Me West Jordan - Local Services | Icon Dumpsters",
    description: "Find reliable dumpster rental near me in West Jordan, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/dumpster-rental-near-me-West Jordan-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/dumpster-rental-near-me-West Jordan-ut',
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
    'geo.placename': 'West Jordan, Utah',
    'geo.position': '40.6097;-111.9391',
    'ICBM': '40.6097, -111.9391',
  },
};

// Generated with randomization seed: 5850 at 1757646733818
export default function WestJordanDumpsterRentalPage() {
  const cityData = getCityData('west-jordan');
  const slcCityData = getSaltLakeCountyCity('west-jordan');
  
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