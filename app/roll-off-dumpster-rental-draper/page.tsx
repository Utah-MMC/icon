import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Roll-Off Dumpster Rental Draper - Professional Services | Icon Dumpsters",
  description: "Professional roll-off dumpster rental services in Draper, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "roll-off dumpster rental Draper",
    "Draper roll-off dumpster rental",
    "roll-off dumpster Draper Utah",
    "construction roll-off dumpster Draper",
    "roll-off dumpster rental near me Draper",
    "Draper roll-off waste management",
    "roll-off dumpster delivery Draper",
    "Draper roll-off dumpster services",
    "roll-off dumpster rental Utah Draper",
    "roll-off construction waste disposal Draper",
    "roll-off home renovation dumpster Draper",
    "roll-off commercial dumpster rental Draper",
    "roll-off demolition dumpster Draper",
    "roll-off concrete disposal Draper"
  ],
  openGraph: {
    title: "Roll-Off Dumpster Rental Draper - Professional Services | Icon Dumpsters",
    description: "Professional roll-off dumpster rental services in Draper, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/roll-off-dumpster-rental-draper",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/roll-off-dumpster-rental-draper',
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