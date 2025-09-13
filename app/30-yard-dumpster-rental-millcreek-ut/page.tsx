import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "30 Yard Dumpster Rental Millcreek - Professional Services | Icon Dumpsters",
  description: "Professional 30 yard dumpster rental services in Millcreek, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
  keywords: [
    "30 yard dumpster rental Millcreek",
    "Millcreek 30 yard dumpster rental",
    "30 yard dumpster Millcreek Utah",
    "construction 30 yard dumpster Millcreek",
    "30 yard dumpster rental near me Millcreek",
    "Millcreek 30 yard waste management",
    "30 yard dumpster delivery Millcreek",
    "Millcreek 30 yard dumpster services",
    "30 yard dumpster rental Utah Millcreek",
    "30 yard construction waste disposal Millcreek",
    "30 yard home renovation dumpster Millcreek",
    "30 yard commercial dumpster rental Millcreek",
    "30 yard demolition dumpster Millcreek",
    "30 yard concrete disposal Millcreek",
    "large dumpster rental Millcreek",
    "big dumpster rental Millcreek"
  ],
  openGraph: {
    title: "30 Yard Dumpster Rental Millcreek - Professional Services | Icon Dumpsters",
    description: "Professional 30 yard dumpster rental services in Millcreek, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    url: "https://icondumpsters.com/30-yard-dumpster-rental-millcreek-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/30-yard-dumpster-rental-millcreek-ut',
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
    'geo.placename': 'Millcreek, Utah',
    'geo.position': '40.6869;-111.8750',
    'ICBM': '40.6869, -111.8750',
  },
};

export default function MillcreekDumpsterRentalPage() {
  const cityData = getCityData('millcreek');
  const slcCityData = getSaltLakeCountyCity('millcreek');
  
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