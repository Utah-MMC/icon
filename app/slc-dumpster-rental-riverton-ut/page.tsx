import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Riverton Dumpster Rental - Professional Services in Riverton, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Riverton, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental Riverton",
    "Riverton dumpster rental",
    "roll-off dumpster Riverton",
    "construction dumpster Riverton",
    "dumpster rental near me Riverton",
    "Riverton waste management",
    "dumpster delivery Riverton",
    "Riverton dumpster services",
    "Salt Lake County dumpster rental",
    "Utah dumpster rental Riverton",
    "construction waste disposal Riverton",
    "home renovation dumpster Riverton",
    "commercial dumpster rental Riverton",
    "demolition dumpster Riverton",
    "concrete disposal Riverton"
  ],
  openGraph: {
    title: "Riverton Dumpster Rental - Professional Services in Riverton, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Riverton, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/slc-dumpster-rental-Riverton-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/slc-dumpster-rental-Riverton-ut',
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
    'geo.placename': 'Riverton, Utah',
    'geo.position': '40.5219;-111.9391',
    'ICBM': '40.5219, -111.9391',
  },
};

export default function RivertonDumpsterRentalPage() {
  const cityData = getCityData('riverton');
  const slcCityData = getSaltLakeCountyCity('riverton');
  
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