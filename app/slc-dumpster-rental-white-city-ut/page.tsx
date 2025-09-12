import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "White City Dumpster Rental - Professional Services in White City, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in White City, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental White City",
    "White City dumpster rental",
    "roll-off dumpster White City",
    "construction dumpster White City",
    "dumpster rental near me White City",
    "White City waste management",
    "dumpster delivery White City",
    "White City dumpster services",
    "Salt Lake County dumpster rental",
    "Utah dumpster rental White City",
    "construction waste disposal White City",
    "home renovation dumpster White City",
    "commercial dumpster rental White City",
    "demolition dumpster White City",
    "concrete disposal White City"
  ],
  openGraph: {
    title: "White City Dumpster Rental - Professional Services in White City, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in White City, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/slc-dumpster-rental-White City-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/slc-dumpster-rental-White City-ut',
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