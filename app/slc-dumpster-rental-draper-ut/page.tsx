import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../../../components/EnhancedCityPageTemplate';
import { getCityData } from '../../../config/cityData';
import { getSaltLakeCountyCity } from '../../../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Draper Dumpster Rental - Professional Services in Draper, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Draper, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental Draper",
    "Draper dumpster rental",
    "roll-off dumpster Draper",
    "construction dumpster Draper",
    "dumpster rental near me Draper",
    "Draper waste management",
    "dumpster delivery Draper",
    "Draper dumpster services",
    "Salt Lake County dumpster rental",
    "Utah dumpster rental Draper",
    "construction waste disposal Draper",
    "home renovation dumpster Draper",
    "commercial dumpster rental Draper",
    "demolition dumpster Draper",
    "concrete disposal Draper"
  ],
  openGraph: {
    title: "Draper Dumpster Rental - Professional Services in Draper, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Draper, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/slc-dumpster-rental-Draper-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/slc-dumpster-rental-Draper-ut',
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
    'geo.placename': 'Draper, Utah',
    'geo.position': '40.5247;-111.8638',
    'ICBM': '40.5247, -111.8638',
  },
};

export default function DraperDumpsterRentalPage() {
  const cityData = getCityData('draper');
  const slcCityData = getSaltLakeCountyCity('draper');
  
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