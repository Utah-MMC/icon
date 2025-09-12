import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "30 Yard Dumpster Rental West Jordan - Professional Services | Icon Dumpsters",
  description: "Professional 30 yard dumpster rental services in West Jordan, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000.",
  keywords: [
    "30 yard dumpster rental West Jordan",
    "West Jordan 30 yard dumpster rental",
    "30 yard dumpster West Jordan Utah",
    "construction 30 yard dumpster West Jordan",
    "30 yard dumpster rental near me West Jordan",
    "West Jordan 30 yard waste management",
    "30 yard dumpster delivery West Jordan",
    "West Jordan 30 yard dumpster services",
    "30 yard dumpster rental Utah West Jordan",
    "30 yard construction waste disposal West Jordan",
    "30 yard home renovation dumpster West Jordan",
    "30 yard commercial dumpster rental West Jordan",
    "30 yard demolition dumpster West Jordan",
    "30 yard concrete disposal West Jordan",
    "large dumpster rental West Jordan",
    "big dumpster rental West Jordan"
  ],
  openGraph: {
    title: "30 Yard Dumpster Rental West Jordan - Professional Services | Icon Dumpsters",
    description: "Professional 30 yard dumpster rental services in West Jordan, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000.",
    url: "https://icondumpsters.com/30-yard-dumpster-rental-West Jordan-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/30-yard-dumpster-rental-West Jordan-ut',
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