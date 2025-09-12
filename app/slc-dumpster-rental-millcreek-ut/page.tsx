import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Millcreek Dumpster Rental - Professional Services in Millcreek, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Millcreek, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental Millcreek",
    "Millcreek dumpster rental",
    "roll-off dumpster Millcreek",
    "construction dumpster Millcreek",
    "dumpster rental near me Millcreek",
    "Millcreek waste management",
    "dumpster delivery Millcreek",
    "Millcreek dumpster services",
    "Salt Lake County dumpster rental",
    "Utah dumpster rental Millcreek",
    "construction waste disposal Millcreek",
    "home renovation dumpster Millcreek",
    "commercial dumpster rental Millcreek",
    "demolition dumpster Millcreek",
    "concrete disposal Millcreek"
  ],
  openGraph: {
    title: "Millcreek Dumpster Rental - Professional Services in Millcreek, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Millcreek, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/slc-dumpster-rental-Millcreek-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/slc-dumpster-rental-Millcreek-ut',
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
    'geo.placename': 'Millcreek, Utah',
    'geo.position': '40.6869;-111.8750',
    'ICBM': '40.6869, -111.8750',
  },
};

export default function MillcreekDumpsterRentalPage() {
  const cityData = getCityData('millcreek');
  const slcCityData = getSaltLakeCountyCity('millcreek');
  
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