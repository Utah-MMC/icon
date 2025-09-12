import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "South Jordan Dumpster Rental - Professional Services in South Jordan, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in South Jordan, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental South Jordan",
    "South Jordan dumpster rental",
    "roll-off dumpster South Jordan",
    "construction dumpster South Jordan",
    "dumpster rental near me South Jordan",
    "South Jordan waste management",
    "dumpster delivery South Jordan",
    "South Jordan dumpster services",
    "Salt Lake County dumpster rental",
    "Utah dumpster rental South Jordan",
    "construction waste disposal South Jordan",
    "home renovation dumpster South Jordan",
    "commercial dumpster rental South Jordan",
    "demolition dumpster South Jordan",
    "concrete disposal South Jordan"
  ],
  openGraph: {
    title: "South Jordan Dumpster Rental - Professional Services in South Jordan, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in South Jordan, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/slc-dumpster-rental-South Jordan-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/slc-dumpster-rental-South Jordan-ut',
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
    'geo.placename': 'South Jordan, Utah',
    'geo.position': '40.5622;-111.9297',
    'ICBM': '40.5622, -111.9297',
  },
};

export default function SouthJordanDumpsterRentalPage() {
  const cityData = getCityData('south-jordan');
  const slcCityData = getSaltLakeCountyCity('south-jordan');
  
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