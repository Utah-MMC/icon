import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../../../components/EnhancedCityPageTemplate';
import { getCityData } from '../../../config/cityData';
import { getSaltLakeCountyCity } from '../../../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Magna Dumpster Rental - Professional Services in Magna, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Magna, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental Magna",
    "Magna dumpster rental",
    "roll-off dumpster Magna",
    "construction dumpster Magna",
    "dumpster rental near me Magna",
    "Magna waste management",
    "dumpster delivery Magna",
    "Magna dumpster services",
    "Salt Lake County dumpster rental",
    "Utah dumpster rental Magna",
    "construction waste disposal Magna",
    "home renovation dumpster Magna",
    "commercial dumpster rental Magna",
    "demolition dumpster Magna",
    "concrete disposal Magna"
  ],
  openGraph: {
    title: "Magna Dumpster Rental - Professional Services in Magna, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Magna, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/slc-dumpster-rental-Magna-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/slc-dumpster-rental-Magna-ut',
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
    'geo.placename': 'Magna, Utah',
    'geo.position': '40.7089;-112.1014',
    'ICBM': '40.7089, -112.1014',
  },
};

export default function MagnaDumpsterRentalPage() {
  const cityData = getCityData('magna');
  const slcCityData = getSaltLakeCountyCity('magna');
  
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