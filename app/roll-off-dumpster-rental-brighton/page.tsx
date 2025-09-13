import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Roll-Off Dumpster Rental Brighton - Professional Services | Icon Dumpsters",
  description: "Professional roll-off dumpster rental services in Brighton, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "roll-off dumpster rental Brighton",
    "Brighton roll-off dumpster rental",
    "roll-off dumpster Brighton Utah",
    "construction roll-off dumpster Brighton",
    "roll-off dumpster rental near me Brighton",
    "Brighton roll-off waste management",
    "roll-off dumpster delivery Brighton",
    "Brighton roll-off dumpster services",
    "roll-off dumpster rental Utah Brighton",
    "roll-off construction waste disposal Brighton",
    "roll-off home renovation dumpster Brighton",
    "roll-off commercial dumpster rental Brighton",
    "roll-off demolition dumpster Brighton",
    "roll-off concrete disposal Brighton"
  ],
  openGraph: {
    title: "Roll-Off Dumpster Rental Brighton - Professional Services | Icon Dumpsters",
    description: "Professional roll-off dumpster rental services in Brighton, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/roll-off-dumpster-rental-brighton",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/roll-off-dumpster-rental-brighton',
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