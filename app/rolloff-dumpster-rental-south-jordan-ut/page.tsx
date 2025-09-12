import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Rolloff Dumpster Rental South Jordan - Professional Services | Icon Dumpsters",
  description: "Professional rolloff dumpster rental services in South Jordan, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.",
  keywords: [
    "rolloff dumpster rental South Jordan",
    "South Jordan rolloff dumpster rental",
    "rolloff dumpster South Jordan Utah",
    "construction rolloff dumpster South Jordan",
    "rolloff dumpster rental near me South Jordan",
    "South Jordan rolloff waste management",
    "rolloff dumpster delivery South Jordan",
    "South Jordan rolloff dumpster services",
    "rolloff dumpster rental Utah South Jordan",
    "rolloff construction waste disposal South Jordan",
    "rolloff home renovation dumpster South Jordan",
    "rolloff commercial dumpster rental South Jordan",
    "rolloff demolition dumpster South Jordan",
    "rolloff concrete disposal South Jordan",
    "rolloff container rental South Jordan",
    "rolloff bin rental South Jordan"
  ],
  openGraph: {
    title: "Rolloff Dumpster Rental South Jordan - Professional Services | Icon Dumpsters",
    description: "Professional rolloff dumpster rental services in South Jordan, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/rolloff-dumpster-rental-South Jordan-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/rolloff-dumpster-rental-South Jordan-ut',
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

// Generated with randomization seed: 7891 at 1757646733709
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