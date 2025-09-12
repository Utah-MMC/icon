import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../../../components/EnhancedCityPageTemplate';
import { getCityData } from '../../../config/cityData';
import { getSaltLakeCountyCity } from '../../../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "30 Yard Dumpster Rental South Jordan - Professional Services | Icon Dumpsters",
  description: "Professional 30 yard dumpster rental services in South Jordan, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000.",
  keywords: [
    "30 yard dumpster rental South Jordan",
    "South Jordan 30 yard dumpster rental",
    "30 yard dumpster South Jordan Utah",
    "construction 30 yard dumpster South Jordan",
    "30 yard dumpster rental near me South Jordan",
    "South Jordan 30 yard waste management",
    "30 yard dumpster delivery South Jordan",
    "South Jordan 30 yard dumpster services",
    "30 yard dumpster rental Utah South Jordan",
    "30 yard construction waste disposal South Jordan",
    "30 yard home renovation dumpster South Jordan",
    "30 yard commercial dumpster rental South Jordan",
    "30 yard demolition dumpster South Jordan",
    "30 yard concrete disposal South Jordan",
    "large dumpster rental South Jordan",
    "big dumpster rental South Jordan"
  ],
  openGraph: {
    title: "30 Yard Dumpster Rental South Jordan - Professional Services | Icon Dumpsters",
    description: "Professional 30 yard dumpster rental services in South Jordan, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000.",
    url: "https://icondumpsters.com/30-yard-dumpster-rental-South Jordan-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/30-yard-dumpster-rental-South Jordan-ut',
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