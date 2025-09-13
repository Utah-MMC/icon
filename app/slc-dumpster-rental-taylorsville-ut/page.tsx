import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Taylorsville Dumpster Rental - Professional Services in Taylorsville, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Taylorsville, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental Taylorsville",
    "Taylorsville dumpster rental",
    "roll-off dumpster Taylorsville",
    "construction dumpster Taylorsville",
    "dumpster rental near me Taylorsville",
    "Taylorsville waste management",
    "dumpster delivery Taylorsville",
    "Taylorsville dumpster services",
    "Salt Lake County dumpster rental",
    "Utah dumpster rental Taylorsville",
    "construction waste disposal Taylorsville",
    "home renovation dumpster Taylorsville",
    "commercial dumpster rental Taylorsville",
    "demolition dumpster Taylorsville",
    "concrete disposal Taylorsville"
  ],
  openGraph: {
    title: "Taylorsville Dumpster Rental - Professional Services in Taylorsville, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Taylorsville, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/slc-dumpster-rental-taylorsville-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/slc-dumpster-rental-taylorsville-ut',
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
    'geo.placename': 'Taylorsville, Utah',
    'geo.position': '40.6677;-111.9388',
    'ICBM': '40.6677, -111.9388',
  },
};

export default function TaylorsvilleDumpsterRentalPage() {
  const cityData = getCityData('taylorsville');
  const slcCityData = getSaltLakeCountyCity('taylorsville');
  
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