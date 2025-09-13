import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Roll-Off Dumpster Rental Copperton - Professional Services | Icon Dumpsters",
  description: "Professional roll-off dumpster rental services in Copperton, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "roll-off dumpster rental Copperton",
    "Copperton roll-off dumpster rental",
    "roll-off dumpster Copperton Utah",
    "construction roll-off dumpster Copperton",
    "roll-off dumpster rental near me Copperton",
    "Copperton roll-off waste management",
    "roll-off dumpster delivery Copperton",
    "Copperton roll-off dumpster services",
    "roll-off dumpster rental Utah Copperton",
    "roll-off construction waste disposal Copperton",
    "roll-off home renovation dumpster Copperton",
    "roll-off commercial dumpster rental Copperton",
    "roll-off demolition dumpster Copperton",
    "roll-off concrete disposal Copperton"
  ],
  openGraph: {
    title: "Roll-Off Dumpster Rental Copperton - Professional Services | Icon Dumpsters",
    description: "Professional roll-off dumpster rental services in Copperton, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/roll-off-dumpster-rental-copperton",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/roll-off-dumpster-rental-copperton',
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