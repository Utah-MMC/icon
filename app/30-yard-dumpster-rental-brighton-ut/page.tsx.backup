import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "30 Yard Dumpster Rental Brighton - Professional Services | Icon Dumpsters",
  description: "Professional 30 yard dumpster rental services in Brighton, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000.",
  keywords: [
    "30 yard dumpster rental Brighton",
    "Brighton 30 yard dumpster rental",
    "30 yard dumpster Brighton Utah",
    "construction 30 yard dumpster Brighton",
    "30 yard dumpster rental near me Brighton",
    "Brighton 30 yard waste management",
    "30 yard dumpster delivery Brighton",
    "Brighton 30 yard dumpster services",
    "30 yard dumpster rental Utah Brighton",
    "30 yard construction waste disposal Brighton",
    "30 yard home renovation dumpster Brighton",
    "30 yard commercial dumpster rental Brighton",
    "30 yard demolition dumpster Brighton",
    "30 yard concrete disposal Brighton",
    "large dumpster rental Brighton",
    "big dumpster rental Brighton"
  ],
  openGraph: {
    title: "30 Yard Dumpster Rental Brighton - Professional Services | Icon Dumpsters",
    description: "Professional 30 yard dumpster rental services in Brighton, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000.",
    url: "https://icondumpsters.com/30-yard-dumpster-rental-brighton-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/30-yard-dumpster-rental-brighton-ut',
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
    'geo.placename': 'Brighton, Utah',
    'geo.position': '40.6000;-111.5833',
    'ICBM': '40.6000, -111.5833',
  },
};

export default function BrightonDumpsterRentalPage() {
  const cityData = getCityData('brighton');
  const slcCityData = getSaltLakeCountyCity('brighton');
  
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