import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "West Valley City Dumpster Rental - Professional Services in West Valley City, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in West Valley City, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental West Valley City",
    "West Valley City dumpster rental",
    "roll-off dumpster West Valley City",
    "construction dumpster West Valley City",
    "dumpster rental near me West Valley City",
    "West Valley City waste management",
    "dumpster delivery West Valley City",
    "West Valley City dumpster services",
    "Salt Lake County dumpster rental",
    "Utah dumpster rental West Valley City",
    "construction waste disposal West Valley City",
    "home renovation dumpster West Valley City",
    "commercial dumpster rental West Valley City",
    "demolition dumpster West Valley City",
    "concrete disposal West Valley City"
  ],
  openGraph: {
    title: "West Valley City Dumpster Rental - Professional Services in West Valley City, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in West Valley City, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/slc-dumpster-rental-West Valley City-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/slc-dumpster-rental-West Valley City-ut',
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
    'geo.placename': 'West Valley City, Utah',
    'geo.position': '40.6916;-111.9931',
    'ICBM': '40.6916, -111.9931',
  },
};

export default function WestValleyCityDumpsterRentalPage() {
  const cityData = getCityData('west-valley-city');
  const slcCityData = getSaltLakeCountyCity('west-valley-city');
  
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