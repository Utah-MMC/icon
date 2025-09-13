import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "30 Yard Dumpster Rental Kearns - Professional Services | Icon Dumpsters",
  description: "Professional 30 yard dumpster rental services in Kearns, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000.",
  keywords: [
    "30 yard dumpster rental Kearns",
    "Kearns 30 yard dumpster rental",
    "30 yard dumpster Kearns Utah",
    "construction 30 yard dumpster Kearns",
    "30 yard dumpster rental near me Kearns",
    "Kearns 30 yard waste management",
    "30 yard dumpster delivery Kearns",
    "Kearns 30 yard dumpster services",
    "30 yard dumpster rental Utah Kearns",
    "30 yard construction waste disposal Kearns",
    "30 yard home renovation dumpster Kearns",
    "30 yard commercial dumpster rental Kearns",
    "30 yard demolition dumpster Kearns",
    "30 yard concrete disposal Kearns",
    "large dumpster rental Kearns",
    "big dumpster rental Kearns"
  ],
  openGraph: {
    title: "30 Yard Dumpster Rental Kearns - Professional Services | Icon Dumpsters",
    description: "Professional 30 yard dumpster rental services in Kearns, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000.",
    url: "https://icondumpsters.com/30-yard-dumpster-rental-kearns-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/30-yard-dumpster-rental-kearns-ut',
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
    'geo.placename': 'Kearns, Utah',
    'geo.position': '40.6597;-111.9969',
    'ICBM': '40.6597, -111.9969',
  },
};

export default function KearnsDumpsterRentalPage() {
  const cityData = getCityData('kearns');
  const slcCityData = getSaltLakeCountyCity('kearns');
  
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