import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Utah Dumpster Rental Alta - Professional Services | Icon Dumpsters",
  description: "Professional Utah dumpster rental services in Alta. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "Utah dumpster rental Alta",
    "dumpster rental Utah Alta",
    "roll-off dumpster Utah Alta",
    "construction dumpster Utah Alta",
    "dumpster rental near me Alta Utah",
    "Alta Utah waste management",
    "dumpster delivery Utah Alta",
    "Alta Utah dumpster services",
    "Utah dumpster rental services",
    "Utah construction waste disposal Alta",
    "Utah home renovation dumpster Alta",
    "Utah commercial dumpster rental Alta",
    "Utah demolition dumpster Alta",
    "Utah concrete disposal Alta"
  ],
  openGraph: {
    title: "Utah Dumpster Rental Alta - Professional Services | Icon Dumpsters",
    description: "Professional Utah dumpster rental services in Alta. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/utah-dumpster-rental-Alta",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/utah-dumpster-rental-Alta',
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