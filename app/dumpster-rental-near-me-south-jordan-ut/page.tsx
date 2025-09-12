import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../../../components/EnhancedCityPageTemplate';
import { getCityData } from '../../../config/cityData';
import { getSaltLakeCountyCity } from '../../../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Dumpster Rental Near Me South Jordan - Local Services | Icon Dumpsters",
  description: "Find reliable dumpster rental near me in South Jordan, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental near me South Jordan",
    "South Jordan dumpster rental near me",
    "dumpster rental near me South Jordan Utah",
    "local dumpster rental South Jordan",
    "dumpster rental near me South Jordan Utah",
    "South Jordan local dumpster services",
    "dumpster delivery near me South Jordan",
    "South Jordan nearby dumpster rental",
    "dumpster rental near me Utah South Jordan",
    "local construction dumpster South Jordan",
    "nearby home renovation dumpster South Jordan",
    "local commercial dumpster rental South Jordan",
    "dumpster rental near me demolition South Jordan",
    "local concrete disposal South Jordan",
    "closest dumpster rental South Jordan",
    "dumpster rental near me same day South Jordan"
  ],
  openGraph: {
    title: "Dumpster Rental Near Me South Jordan - Local Services | Icon Dumpsters",
    description: "Find reliable dumpster rental near me in South Jordan, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/dumpster-rental-near-me-South Jordan-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/dumpster-rental-near-me-South Jordan-ut',
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
    'geo.placename': 'South Jordan, Utah',
    'geo.position': '40.5622;-111.9297',
    'ICBM': '40.5622, -111.9297',
  },
};

// Generated with randomization seed: 5932 at 1757646733787
export default function SouthJordanDumpsterRentalPage() {
  const cityData = getCityData('south-jordan');
  const slcCityData = getSaltLakeCountyCity('south-jordan');
  
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