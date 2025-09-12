import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Salt Lake City Dumpster Rental - Professional Services in Salt Lake City, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Salt Lake City, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental Salt Lake City",
    "Salt Lake City dumpster rental",
    "roll-off dumpster Salt Lake City",
    "construction dumpster Salt Lake City",
    "dumpster rental near me Salt Lake City",
    "Salt Lake City waste management",
    "dumpster delivery Salt Lake City",
    "Salt Lake City dumpster services",
    "Salt Lake County dumpster rental",
    "Utah dumpster rental Salt Lake City",
    "construction waste disposal Salt Lake City",
    "home renovation dumpster Salt Lake City",
    "commercial dumpster rental Salt Lake City",
    "demolition dumpster Salt Lake City",
    "concrete disposal Salt Lake City"
  ],
  openGraph: {
    title: "Salt Lake City Dumpster Rental - Professional Services in Salt Lake City, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Salt Lake City, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/slc-dumpster-rental-Salt Lake City-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/slc-dumpster-rental-Salt Lake City-ut',
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