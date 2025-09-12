import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../../../components/EnhancedCityPageTemplate';
import { getCityData } from '../../../config/cityData';
import { getSaltLakeCountyCity } from '../../../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "30 Yard Dumpster Rental Riverton - Professional Services | Icon Dumpsters",
  description: "Professional 30 yard dumpster rental services in Riverton, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000.",
  keywords: [
    "30 yard dumpster rental Riverton",
    "Riverton 30 yard dumpster rental",
    "30 yard dumpster Riverton Utah",
    "construction 30 yard dumpster Riverton",
    "30 yard dumpster rental near me Riverton",
    "Riverton 30 yard waste management",
    "30 yard dumpster delivery Riverton",
    "Riverton 30 yard dumpster services",
    "30 yard dumpster rental Utah Riverton",
    "30 yard construction waste disposal Riverton",
    "30 yard home renovation dumpster Riverton",
    "30 yard commercial dumpster rental Riverton",
    "30 yard demolition dumpster Riverton",
    "30 yard concrete disposal Riverton",
    "large dumpster rental Riverton",
    "big dumpster rental Riverton"
  ],
  openGraph: {
    title: "30 Yard Dumpster Rental Riverton - Professional Services | Icon Dumpsters",
    description: "Professional 30 yard dumpster rental services in Riverton, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000.",
    url: "https://icondumpsters.com/30-yard-dumpster-rental-Riverton-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/30-yard-dumpster-rental-Riverton-ut',
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
    'geo.placename': 'Riverton, Utah',
    'geo.position': '40.5219;-111.9391',
    'ICBM': '40.5219, -111.9391',
  },
};

export default function RivertonDumpsterRentalPage() {
  const cityData = getCityData('riverton');
  const slcCityData = getSaltLakeCountyCity('riverton');
  
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