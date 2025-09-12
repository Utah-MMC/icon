import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Utah Dumpster Rental South Jordan - Professional Services | Icon Dumpsters",
  description: "Professional Utah dumpster rental services in South Jordan. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "Utah dumpster rental South Jordan",
    "dumpster rental Utah South Jordan",
    "roll-off dumpster Utah South Jordan",
    "construction dumpster Utah South Jordan",
    "dumpster rental near me South Jordan Utah",
    "South Jordan Utah waste management",
    "dumpster delivery Utah South Jordan",
    "South Jordan Utah dumpster services",
    "Utah dumpster rental services",
    "Utah construction waste disposal South Jordan",
    "Utah home renovation dumpster South Jordan",
    "Utah commercial dumpster rental South Jordan",
    "Utah demolition dumpster South Jordan",
    "Utah concrete disposal South Jordan"
  ],
  openGraph: {
    title: "Utah Dumpster Rental South Jordan - Professional Services | Icon Dumpsters",
    description: "Professional Utah dumpster rental services in South Jordan. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/utah-dumpster-rental-South Jordan",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/utah-dumpster-rental-South Jordan',
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