import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../../../components/EnhancedCityPageTemplate';
import { getCityData } from '../../../config/cityData';
import { getSaltLakeCountyCity } from '../../../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "30 Yard Dumpster Rental Midvale - Professional Services | Icon Dumpsters",
  description: "Professional 30 yard dumpster rental services in Midvale, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000.",
  keywords: [
    "30 yard dumpster rental Midvale",
    "Midvale 30 yard dumpster rental",
    "30 yard dumpster Midvale Utah",
    "construction 30 yard dumpster Midvale",
    "30 yard dumpster rental near me Midvale",
    "Midvale 30 yard waste management",
    "30 yard dumpster delivery Midvale",
    "Midvale 30 yard dumpster services",
    "30 yard dumpster rental Utah Midvale",
    "30 yard construction waste disposal Midvale",
    "30 yard home renovation dumpster Midvale",
    "30 yard commercial dumpster rental Midvale",
    "30 yard demolition dumpster Midvale",
    "30 yard concrete disposal Midvale",
    "large dumpster rental Midvale",
    "big dumpster rental Midvale"
  ],
  openGraph: {
    title: "30 Yard Dumpster Rental Midvale - Professional Services | Icon Dumpsters",
    description: "Professional 30 yard dumpster rental services in Midvale, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000.",
    url: "https://icondumpsters.com/30-yard-dumpster-rental-Midvale-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/30-yard-dumpster-rental-Midvale-ut',
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
    'geo.placename': 'Midvale, Utah',
    'geo.position': '40.6111;-111.8994',
    'ICBM': '40.6111, -111.8994',
  },
};

export default function MidvaleDumpsterRentalPage() {
  const cityData = getCityData('midvale');
  const slcCityData = getSaltLakeCountyCity('midvale');
  
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