import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../../../components/EnhancedCityPageTemplate';
import { getCityData } from '../../../config/cityData';
import { getSaltLakeCountyCity } from '../../../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Roll-Off Dumpster Rental Alta - Professional Services | Icon Dumpsters",
  description: "Professional roll-off dumpster rental services in Alta, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "roll-off dumpster rental Alta",
    "Alta roll-off dumpster rental",
    "roll-off dumpster Alta Utah",
    "construction roll-off dumpster Alta",
    "roll-off dumpster rental near me Alta",
    "Alta roll-off waste management",
    "roll-off dumpster delivery Alta",
    "Alta roll-off dumpster services",
    "roll-off dumpster rental Utah Alta",
    "roll-off construction waste disposal Alta",
    "roll-off home renovation dumpster Alta",
    "roll-off commercial dumpster rental Alta",
    "roll-off demolition dumpster Alta",
    "roll-off concrete disposal Alta"
  ],
  openGraph: {
    title: "Roll-Off Dumpster Rental Alta - Professional Services | Icon Dumpsters",
    description: "Professional roll-off dumpster rental services in Alta, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/roll-off-dumpster-rental-Alta",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/roll-off-dumpster-rental-Alta',
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
    'geo.placename': 'Alta, Utah',
    'geo.position': '40.5833;-111.6333',
    'ICBM': '40.5833, -111.6333',
  },
};

export default function AltaDumpsterRentalPage() {
  const cityData = getCityData('alta');
  const slcCityData = getSaltLakeCountyCity('alta');
  
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