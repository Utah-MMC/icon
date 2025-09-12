import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "30 Yard Dumpster Rental White City - Professional Services | Icon Dumpsters",
  description: "Professional 30 yard dumpster rental services in White City, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000.",
  keywords: [
    "30 yard dumpster rental White City",
    "White City 30 yard dumpster rental",
    "30 yard dumpster White City Utah",
    "construction 30 yard dumpster White City",
    "30 yard dumpster rental near me White City",
    "White City 30 yard waste management",
    "30 yard dumpster delivery White City",
    "White City 30 yard dumpster services",
    "30 yard dumpster rental Utah White City",
    "30 yard construction waste disposal White City",
    "30 yard home renovation dumpster White City",
    "30 yard commercial dumpster rental White City",
    "30 yard demolition dumpster White City",
    "30 yard concrete disposal White City",
    "large dumpster rental White City",
    "big dumpster rental White City"
  ],
  openGraph: {
    title: "30 Yard Dumpster Rental White City - Professional Services | Icon Dumpsters",
    description: "Professional 30 yard dumpster rental services in White City, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000.",
    url: "https://icondumpsters.com/30-yard-dumpster-rental-White City-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/30-yard-dumpster-rental-White City-ut',
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
    'geo.placename': 'White City, Utah',
    'geo.position': '40.5656;-111.8639',
    'ICBM': '40.5656, -111.8639',
  },
};

export default function WhiteCityDumpsterRentalPage() {
  const cityData = getCityData('white-city');
  const slcCityData = getSaltLakeCountyCity('white-city');
  
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