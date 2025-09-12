import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Roll-Off Dumpster Rental South Jordan - Professional Services | Icon Dumpsters",
  description: "Professional roll-off dumpster rental services in South Jordan, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "roll-off dumpster rental South Jordan",
    "South Jordan roll-off dumpster rental",
    "roll-off dumpster South Jordan Utah",
    "construction roll-off dumpster South Jordan",
    "roll-off dumpster rental near me South Jordan",
    "South Jordan roll-off waste management",
    "roll-off dumpster delivery South Jordan",
    "South Jordan roll-off dumpster services",
    "roll-off dumpster rental Utah South Jordan",
    "roll-off construction waste disposal South Jordan",
    "roll-off home renovation dumpster South Jordan",
    "roll-off commercial dumpster rental South Jordan",
    "roll-off demolition dumpster South Jordan",
    "roll-off concrete disposal South Jordan"
  ],
  openGraph: {
    title: "Roll-Off Dumpster Rental South Jordan - Professional Services | Icon Dumpsters",
    description: "Professional roll-off dumpster rental services in South Jordan, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/roll-off-dumpster-rental-South Jordan",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/roll-off-dumpster-rental-South Jordan',
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