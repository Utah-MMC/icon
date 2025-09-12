import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Brighton Dumpster Rental - Professional Services in Brighton, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Brighton, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental Brighton",
    "Brighton dumpster rental",
    "roll-off dumpster Brighton",
    "construction dumpster Brighton",
    "dumpster rental near me Brighton",
    "Brighton waste management",
    "dumpster delivery Brighton",
    "Brighton dumpster services",
    "Salt Lake County dumpster rental",
    "Utah dumpster rental Brighton",
    "construction waste disposal Brighton",
    "home renovation dumpster Brighton",
    "commercial dumpster rental Brighton",
    "demolition dumpster Brighton",
    "concrete disposal Brighton"
  ],
  openGraph: {
    title: "Brighton Dumpster Rental - Professional Services in Brighton, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Brighton, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/slc-dumpster-rental-Brighton-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/slc-dumpster-rental-Brighton-ut',
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
    'geo.placename': 'Brighton, Utah',
    'geo.position': '40.6000;-111.5833',
    'ICBM': '40.6000, -111.5833',
  },
};

export default function BrightonDumpsterRentalPage() {
  const cityData = getCityData('brighton');
  const slcCityData = getSaltLakeCountyCity('brighton');
  
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