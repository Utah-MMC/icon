import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Rolloff Dumpster Rental Alta - Professional Services | Icon Dumpsters",
  description: "Professional rolloff dumpster rental services in Alta, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.",
  keywords: [
    "rolloff dumpster rental Alta",
    "Alta rolloff dumpster rental",
    "rolloff dumpster Alta Utah",
    "construction rolloff dumpster Alta",
    "rolloff dumpster rental near me Alta",
    "Alta rolloff waste management",
    "rolloff dumpster delivery Alta",
    "Alta rolloff dumpster services",
    "rolloff dumpster rental Utah Alta",
    "rolloff construction waste disposal Alta",
    "rolloff home renovation dumpster Alta",
    "rolloff commercial dumpster rental Alta",
    "rolloff demolition dumpster Alta",
    "rolloff concrete disposal Alta",
    "rolloff container rental Alta",
    "rolloff bin rental Alta"
  ],
  openGraph: {
    title: "Rolloff Dumpster Rental Alta - Professional Services | Icon Dumpsters",
    description: "Professional rolloff dumpster rental services in Alta, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/rolloff-dumpster-rental-alta-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/rolloff-dumpster-rental-alta-ut',
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

// Generated with randomization seed: 1254 at 1757646733749
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