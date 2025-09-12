import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Copperton Dumpster Rental - Professional Services in Copperton, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Copperton, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental Copperton",
    "Copperton dumpster rental",
    "roll-off dumpster Copperton",
    "construction dumpster Copperton",
    "dumpster rental near me Copperton",
    "Copperton waste management",
    "dumpster delivery Copperton",
    "Copperton dumpster services",
    "Salt Lake County dumpster rental",
    "Utah dumpster rental Copperton",
    "construction waste disposal Copperton",
    "home renovation dumpster Copperton",
    "commercial dumpster rental Copperton",
    "demolition dumpster Copperton",
    "concrete disposal Copperton"
  ],
  openGraph: {
    title: "Copperton Dumpster Rental - Professional Services in Copperton, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Copperton, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/slc-dumpster-rental-Copperton-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/slc-dumpster-rental-Copperton-ut',
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
    'geo.placename': 'Copperton, Utah',
    'geo.position': '40.5667;-112.1000',
    'ICBM': '40.5667, -112.1000',
  },
};

export default function CoppertonDumpsterRentalPage() {
  const cityData = getCityData('copperton');
  const slcCityData = getSaltLakeCountyCity('copperton');
  
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