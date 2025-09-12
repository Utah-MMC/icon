import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../../../components/EnhancedCityPageTemplate';
import { getCityData } from '../../../config/cityData';
import { getSaltLakeCountyCity } from '../../../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "30 Yard Dumpster Rental Taylorsville - Professional Services | Icon Dumpsters",
  description: "Professional 30 yard dumpster rental services in Taylorsville, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000.",
  keywords: [
    "30 yard dumpster rental Taylorsville",
    "Taylorsville 30 yard dumpster rental",
    "30 yard dumpster Taylorsville Utah",
    "construction 30 yard dumpster Taylorsville",
    "30 yard dumpster rental near me Taylorsville",
    "Taylorsville 30 yard waste management",
    "30 yard dumpster delivery Taylorsville",
    "Taylorsville 30 yard dumpster services",
    "30 yard dumpster rental Utah Taylorsville",
    "30 yard construction waste disposal Taylorsville",
    "30 yard home renovation dumpster Taylorsville",
    "30 yard commercial dumpster rental Taylorsville",
    "30 yard demolition dumpster Taylorsville",
    "30 yard concrete disposal Taylorsville",
    "large dumpster rental Taylorsville",
    "big dumpster rental Taylorsville"
  ],
  openGraph: {
    title: "30 Yard Dumpster Rental Taylorsville - Professional Services | Icon Dumpsters",
    description: "Professional 30 yard dumpster rental services in Taylorsville, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000.",
    url: "https://icondumpsters.com/30-yard-dumpster-rental-Taylorsville-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/30-yard-dumpster-rental-Taylorsville-ut',
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
    'geo.placename': 'Taylorsville, Utah',
    'geo.position': '40.6677;-111.9388',
    'ICBM': '40.6677, -111.9388',
  },
};

export default function TaylorsvilleDumpsterRentalPage() {
  const cityData = getCityData('taylorsville');
  const slcCityData = getSaltLakeCountyCity('taylorsville');
  
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