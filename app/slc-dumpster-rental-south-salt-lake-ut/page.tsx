import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "South Salt Lake Dumpster Rental - Professional Services in South Salt Lake, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in South Salt Lake, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental South Salt Lake",
    "South Salt Lake dumpster rental",
    "roll-off dumpster South Salt Lake",
    "construction dumpster South Salt Lake",
    "dumpster rental near me South Salt Lake",
    "South Salt Lake waste management",
    "dumpster delivery South Salt Lake",
    "South Salt Lake dumpster services",
    "Salt Lake County dumpster rental",
    "Utah dumpster rental South Salt Lake",
    "construction waste disposal South Salt Lake",
    "home renovation dumpster South Salt Lake",
    "commercial dumpster rental South Salt Lake",
    "demolition dumpster South Salt Lake",
    "concrete disposal South Salt Lake"
  ],
  openGraph: {
    title: "South Salt Lake Dumpster Rental - Professional Services in South Salt Lake, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in South Salt Lake, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/slc-dumpster-rental-South Salt Lake-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/slc-dumpster-rental-South Salt Lake-ut',
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
    'geo.placename': 'South Salt Lake, Utah',
    'geo.position': '40.7089;-111.8881',
    'ICBM': '40.7089, -111.8881',
  },
};

export default function SouthSaltLakeDumpsterRentalPage() {
  const cityData = getCityData('south-salt-lake');
  const slcCityData = getSaltLakeCountyCity('south-salt-lake');
  
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