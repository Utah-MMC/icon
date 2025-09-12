import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "30 Yard Dumpster Rental Alta - Professional Services | Icon Dumpsters",
  description: "Professional 30 yard dumpster rental services in Alta, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000.",
  keywords: [
    "30 yard dumpster rental Alta",
    "Alta 30 yard dumpster rental",
    "30 yard dumpster Alta Utah",
    "construction 30 yard dumpster Alta",
    "30 yard dumpster rental near me Alta",
    "Alta 30 yard waste management",
    "30 yard dumpster delivery Alta",
    "Alta 30 yard dumpster services",
    "30 yard dumpster rental Utah Alta",
    "30 yard construction waste disposal Alta",
    "30 yard home renovation dumpster Alta",
    "30 yard commercial dumpster rental Alta",
    "30 yard demolition dumpster Alta",
    "30 yard concrete disposal Alta",
    "large dumpster rental Alta",
    "big dumpster rental Alta"
  ],
  openGraph: {
    title: "30 Yard Dumpster Rental Alta - Professional Services | Icon Dumpsters",
    description: "Professional 30 yard dumpster rental services in Alta, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000.",
    url: "https://icondumpsters.com/30-yard-dumpster-rental-Alta-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/30-yard-dumpster-rental-Alta-ut',
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
    'geo.placename': 'Alta, Utah',
    'geo.position': '40.5833;-111.6333',
    'ICBM': '40.5833, -111.6333',
  },
};

export default function AltaDumpsterRentalPage() {
  const cityData = getCityData('alta');
  const slcCityData = getSaltLakeCountyCity('alta');
  
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