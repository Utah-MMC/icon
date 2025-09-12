import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../../../components/EnhancedCityPageTemplate';
import { getCityData } from '../../../config/cityData';
import { getSaltLakeCountyCity } from '../../../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "30 Yard Dumpster Rental Murray - Professional Services | Icon Dumpsters",
  description: "Professional 30 yard dumpster rental services in Murray, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000.",
  keywords: [
    "30 yard dumpster rental Murray",
    "Murray 30 yard dumpster rental",
    "30 yard dumpster Murray Utah",
    "construction 30 yard dumpster Murray",
    "30 yard dumpster rental near me Murray",
    "Murray 30 yard waste management",
    "30 yard dumpster delivery Murray",
    "Murray 30 yard dumpster services",
    "30 yard dumpster rental Utah Murray",
    "30 yard construction waste disposal Murray",
    "30 yard home renovation dumpster Murray",
    "30 yard commercial dumpster rental Murray",
    "30 yard demolition dumpster Murray",
    "30 yard concrete disposal Murray",
    "large dumpster rental Murray",
    "big dumpster rental Murray"
  ],
  openGraph: {
    title: "30 Yard Dumpster Rental Murray - Professional Services | Icon Dumpsters",
    description: "Professional 30 yard dumpster rental services in Murray, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000.",
    url: "https://icondumpsters.com/30-yard-dumpster-rental-Murray-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/30-yard-dumpster-rental-Murray-ut',
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
    'geo.placename': 'Murray, Utah',
    'geo.position': '40.6669;-111.8880',
    'ICBM': '40.6669, -111.8880',
  },
};

export default function MurrayDumpsterRentalPage() {
  const cityData = getCityData('murray');
  const slcCityData = getSaltLakeCountyCity('murray');
  
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