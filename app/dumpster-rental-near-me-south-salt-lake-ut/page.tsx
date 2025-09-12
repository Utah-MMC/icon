import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Dumpster Rental Near Me South Salt Lake - Local Services | Icon Dumpsters",
  description: "Find reliable dumpster rental near me in South Salt Lake, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental near me South Salt Lake",
    "South Salt Lake dumpster rental near me",
    "dumpster rental near me South Salt Lake Utah",
    "local dumpster rental South Salt Lake",
    "dumpster rental near me South Salt Lake Utah",
    "South Salt Lake local dumpster services",
    "dumpster delivery near me South Salt Lake",
    "South Salt Lake nearby dumpster rental",
    "dumpster rental near me Utah South Salt Lake",
    "local construction dumpster South Salt Lake",
    "nearby home renovation dumpster South Salt Lake",
    "local commercial dumpster rental South Salt Lake",
    "dumpster rental near me demolition South Salt Lake",
    "local concrete disposal South Salt Lake",
    "closest dumpster rental South Salt Lake",
    "dumpster rental near me same day South Salt Lake"
  ],
  openGraph: {
    title: "Dumpster Rental Near Me South Salt Lake - Local Services | Icon Dumpsters",
    description: "Find reliable dumpster rental near me in South Salt Lake, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/dumpster-rental-near-me-South Salt Lake-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/dumpster-rental-near-me-South Salt Lake-ut',
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
    'geo.placename': 'South Salt Lake, Utah',
    'geo.position': '40.7089;-111.8881',
    'ICBM': '40.7089, -111.8881',
  },
};

// Generated with randomization seed: 4536 at 1757646733790
export default function SouthSaltLakeDumpsterRentalPage() {
  const cityData = getCityData('south-salt-lake');
  const slcCityData = getSaltLakeCountyCity('south-salt-lake');
  
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