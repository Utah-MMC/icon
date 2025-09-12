import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Roll-Off Dumpster Rental Riverton - Professional Services | Icon Dumpsters",
  description: "Professional roll-off dumpster rental services in Riverton, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "roll-off dumpster rental Riverton",
    "Riverton roll-off dumpster rental",
    "roll-off dumpster Riverton Utah",
    "construction roll-off dumpster Riverton",
    "roll-off dumpster rental near me Riverton",
    "Riverton roll-off waste management",
    "roll-off dumpster delivery Riverton",
    "Riverton roll-off dumpster services",
    "roll-off dumpster rental Utah Riverton",
    "roll-off construction waste disposal Riverton",
    "roll-off home renovation dumpster Riverton",
    "roll-off commercial dumpster rental Riverton",
    "roll-off demolition dumpster Riverton",
    "roll-off concrete disposal Riverton"
  ],
  openGraph: {
    title: "Roll-Off Dumpster Rental Riverton - Professional Services | Icon Dumpsters",
    description: "Professional roll-off dumpster rental services in Riverton, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/roll-off-dumpster-rental-Riverton",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/roll-off-dumpster-rental-Riverton',
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