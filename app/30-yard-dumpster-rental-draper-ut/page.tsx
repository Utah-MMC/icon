import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "30 Yard Dumpster Rental Draper - Professional Services | Icon Dumpsters",
  description: "Professional 30 yard dumpster rental services in Draper, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000.",
  keywords: [
    "30 yard dumpster rental Draper",
    "Draper 30 yard dumpster rental",
    "30 yard dumpster Draper Utah",
    "construction 30 yard dumpster Draper",
    "30 yard dumpster rental near me Draper",
    "Draper 30 yard waste management",
    "30 yard dumpster delivery Draper",
    "Draper 30 yard dumpster services",
    "30 yard dumpster rental Utah Draper",
    "30 yard construction waste disposal Draper",
    "30 yard home renovation dumpster Draper",
    "30 yard commercial dumpster rental Draper",
    "30 yard demolition dumpster Draper",
    "30 yard concrete disposal Draper",
    "large dumpster rental Draper",
    "big dumpster rental Draper"
  ],
  openGraph: {
    title: "30 Yard Dumpster Rental Draper - Professional Services | Icon Dumpsters",
    description: "Professional 30 yard dumpster rental services in Draper, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000.",
    url: "https://icondumpsters.com/30-yard-dumpster-rental-Draper-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/30-yard-dumpster-rental-Draper-ut',
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
    'geo.placename': 'Draper, Utah',
    'geo.position': '40.5247;-111.8638',
    'ICBM': '40.5247, -111.8638',
  },
};

export default function DraperDumpsterRentalPage() {
  const cityData = getCityData('draper');
  const slcCityData = getSaltLakeCountyCity('draper');
  
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