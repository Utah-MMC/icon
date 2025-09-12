import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "30 Yard Dumpster Rental South Salt Lake - Professional Services | Icon Dumpsters",
  description: "Professional 30 yard dumpster rental services in South Salt Lake, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000.",
  keywords: [
    "30 yard dumpster rental South Salt Lake",
    "South Salt Lake 30 yard dumpster rental",
    "30 yard dumpster South Salt Lake Utah",
    "construction 30 yard dumpster South Salt Lake",
    "30 yard dumpster rental near me South Salt Lake",
    "South Salt Lake 30 yard waste management",
    "30 yard dumpster delivery South Salt Lake",
    "South Salt Lake 30 yard dumpster services",
    "30 yard dumpster rental Utah South Salt Lake",
    "30 yard construction waste disposal South Salt Lake",
    "30 yard home renovation dumpster South Salt Lake",
    "30 yard commercial dumpster rental South Salt Lake",
    "30 yard demolition dumpster South Salt Lake",
    "30 yard concrete disposal South Salt Lake",
    "large dumpster rental South Salt Lake",
    "big dumpster rental South Salt Lake"
  ],
  openGraph: {
    title: "30 Yard Dumpster Rental South Salt Lake - Professional Services | Icon Dumpsters",
    description: "Professional 30 yard dumpster rental services in South Salt Lake, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000.",
    url: "https://icondumpsters.com/30-yard-dumpster-rental-South Salt Lake-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/30-yard-dumpster-rental-South Salt Lake-ut',
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