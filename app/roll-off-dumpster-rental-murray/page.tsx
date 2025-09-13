import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Roll-Off Dumpster Rental Murray - Professional Services | Icon Dumpsters",
  description: "Professional roll-off dumpster rental services in Murray, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "roll-off dumpster rental Murray",
    "Murray roll-off dumpster rental",
    "roll-off dumpster Murray Utah",
    "construction roll-off dumpster Murray",
    "roll-off dumpster rental near me Murray",
    "Murray roll-off waste management",
    "roll-off dumpster delivery Murray",
    "Murray roll-off dumpster services",
    "roll-off dumpster rental Utah Murray",
    "roll-off construction waste disposal Murray",
    "roll-off home renovation dumpster Murray",
    "roll-off commercial dumpster rental Murray",
    "roll-off demolition dumpster Murray",
    "roll-off concrete disposal Murray"
  ],
  openGraph: {
    title: "Roll-Off Dumpster Rental Murray - Professional Services | Icon Dumpsters",
    description: "Professional roll-off dumpster rental services in Murray, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/roll-off-dumpster-rental-murray",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/roll-off-dumpster-rental-murray',
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
    'geo.placename': 'Murray, Utah',
    'geo.position': '40.6669;-111.8880',
    'ICBM': '40.6669, -111.8880',
  },
};

export default function MurrayDumpsterRentalPage() {
  const cityData = getCityData('murray');
  const slcCityData = getSaltLakeCountyCity('murray');
  
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