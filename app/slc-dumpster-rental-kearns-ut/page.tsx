import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../../../components/EnhancedCityPageTemplate';
import { getCityData } from '../../../config/cityData';
import { getSaltLakeCountyCity } from '../../../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Kearns Dumpster Rental - Professional Services in Kearns, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Kearns, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental Kearns",
    "Kearns dumpster rental",
    "roll-off dumpster Kearns",
    "construction dumpster Kearns",
    "dumpster rental near me Kearns",
    "Kearns waste management",
    "dumpster delivery Kearns",
    "Kearns dumpster services",
    "Salt Lake County dumpster rental",
    "Utah dumpster rental Kearns",
    "construction waste disposal Kearns",
    "home renovation dumpster Kearns",
    "commercial dumpster rental Kearns",
    "demolition dumpster Kearns",
    "concrete disposal Kearns"
  ],
  openGraph: {
    title: "Kearns Dumpster Rental - Professional Services in Kearns, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Kearns, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/slc-dumpster-rental-Kearns-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/slc-dumpster-rental-Kearns-ut',
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
    'geo.placename': 'Kearns, Utah',
    'geo.position': '40.6597;-111.9969',
    'ICBM': '40.6597, -111.9969',
  },
};

export default function KearnsDumpsterRentalPage() {
  const cityData = getCityData('kearns');
  const slcCityData = getSaltLakeCountyCity('kearns');
  
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