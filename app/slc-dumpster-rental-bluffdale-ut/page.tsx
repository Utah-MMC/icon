import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Bluffdale Dumpster Rental - Professional Services in Bluffdale, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Bluffdale, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental Bluffdale",
    "Bluffdale dumpster rental",
    "roll-off dumpster Bluffdale",
    "construction dumpster Bluffdale",
    "dumpster rental near me Bluffdale",
    "Bluffdale waste management",
    "dumpster delivery Bluffdale",
    "Bluffdale dumpster services",
    "Salt Lake County dumpster rental",
    "Utah dumpster rental Bluffdale",
    "construction waste disposal Bluffdale",
    "home renovation dumpster Bluffdale",
    "commercial dumpster rental Bluffdale",
    "demolition dumpster Bluffdale",
    "concrete disposal Bluffdale"
  ],
  openGraph: {
    title: "Bluffdale Dumpster Rental - Professional Services in Bluffdale, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Bluffdale, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/slc-dumpster-rental-Bluffdale-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/slc-dumpster-rental-Bluffdale-ut',
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
    'geo.placename': 'Bluffdale, Utah',
    'geo.position': '40.4847;-111.9389',
    'ICBM': '40.4847, -111.9389',
  },
};

export default function BluffdaleDumpsterRentalPage() {
  const cityData = getCityData('bluffdale');
  const slcCityData = getSaltLakeCountyCity('bluffdale');
  
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