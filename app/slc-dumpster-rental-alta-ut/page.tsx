import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../../../components/EnhancedCityPageTemplate';
import { getCityData } from '../../../config/cityData';
import { getSaltLakeCountyCity } from '../../../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Alta Dumpster Rental - Professional Services in Alta, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Alta, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental Alta",
    "Alta dumpster rental",
    "roll-off dumpster Alta",
    "construction dumpster Alta",
    "dumpster rental near me Alta",
    "Alta waste management",
    "dumpster delivery Alta",
    "Alta dumpster services",
    "Salt Lake County dumpster rental",
    "Utah dumpster rental Alta",
    "construction waste disposal Alta",
    "home renovation dumpster Alta",
    "commercial dumpster rental Alta",
    "demolition dumpster Alta",
    "concrete disposal Alta"
  ],
  openGraph: {
    title: "Alta Dumpster Rental - Professional Services in Alta, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Alta, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/slc-dumpster-rental-Alta-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/slc-dumpster-rental-Alta-ut',
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
    'geo.placename': 'Alta, Utah',
    'geo.position': '40.5833;-111.6333',
    'ICBM': '40.5833, -111.6333',
  },
};

export default function AltaDumpsterRentalPage() {
  const cityData = getCityData('alta');
  const slcCityData = getSaltLakeCountyCity('alta');
  
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