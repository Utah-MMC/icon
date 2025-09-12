import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../../../components/EnhancedCityPageTemplate';
import { getCityData } from '../../../config/cityData';
import { getSaltLakeCountyCity } from '../../../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "30 Yard Dumpster Rental Salt Lake City - Professional Services | Icon Dumpsters",
  description: "Professional 30 yard dumpster rental services in Salt Lake City, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000.",
  keywords: [
    "30 yard dumpster rental Salt Lake City",
    "Salt Lake City 30 yard dumpster rental",
    "30 yard dumpster Salt Lake City Utah",
    "construction 30 yard dumpster Salt Lake City",
    "30 yard dumpster rental near me Salt Lake City",
    "Salt Lake City 30 yard waste management",
    "30 yard dumpster delivery Salt Lake City",
    "Salt Lake City 30 yard dumpster services",
    "30 yard dumpster rental Utah Salt Lake City",
    "30 yard construction waste disposal Salt Lake City",
    "30 yard home renovation dumpster Salt Lake City",
    "30 yard commercial dumpster rental Salt Lake City",
    "30 yard demolition dumpster Salt Lake City",
    "30 yard concrete disposal Salt Lake City",
    "large dumpster rental Salt Lake City",
    "big dumpster rental Salt Lake City"
  ],
  openGraph: {
    title: "30 Yard Dumpster Rental Salt Lake City - Professional Services | Icon Dumpsters",
    description: "Professional 30 yard dumpster rental services in Salt Lake City, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000.",
    url: "https://icondumpsters.com/30-yard-dumpster-rental-Salt Lake City-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/30-yard-dumpster-rental-Salt Lake City-ut',
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
    'geo.placename': 'Salt Lake City, Utah',
    'geo.position': '40.7608;-111.8910',
    'ICBM': '40.7608, -111.8910',
  },
};

export default function SaltLakeCityDumpsterRentalPage() {
  const cityData = getCityData('salt-lake-city');
  const slcCityData = getSaltLakeCountyCity('salt-lake-city');
  
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