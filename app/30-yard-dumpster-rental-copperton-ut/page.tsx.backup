import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "30 Yard Dumpster Rental Copperton - Professional Services | Icon Dumpsters",
  description: "Professional 30 yard dumpster rental services in Copperton, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000.",
  keywords: [
    "30 yard dumpster rental Copperton",
    "Copperton 30 yard dumpster rental",
    "30 yard dumpster Copperton Utah",
    "construction 30 yard dumpster Copperton",
    "30 yard dumpster rental near me Copperton",
    "Copperton 30 yard waste management",
    "30 yard dumpster delivery Copperton",
    "Copperton 30 yard dumpster services",
    "30 yard dumpster rental Utah Copperton",
    "30 yard construction waste disposal Copperton",
    "30 yard home renovation dumpster Copperton",
    "30 yard commercial dumpster rental Copperton",
    "30 yard demolition dumpster Copperton",
    "30 yard concrete disposal Copperton",
    "large dumpster rental Copperton",
    "big dumpster rental Copperton"
  ],
  openGraph: {
    title: "30 Yard Dumpster Rental Copperton - Professional Services | Icon Dumpsters",
    description: "Professional 30 yard dumpster rental services in Copperton, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000.",
    url: "https://icondumpsters.com/30-yard-dumpster-rental-copperton-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/30-yard-dumpster-rental-copperton-ut',
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
    'geo.placename': 'Copperton, Utah',
    'geo.position': '40.5667;-112.1000',
    'ICBM': '40.5667, -112.1000',
  },
};

export default function CoppertonDumpsterRentalPage() {
  const cityData = getCityData('copperton');
  const slcCityData = getSaltLakeCountyCity('copperton');
  
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