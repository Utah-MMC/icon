import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Rolloff Dumpster Rental Magna - Professional Services | Icon Dumpsters",
  description: "Professional rolloff dumpster rental services in Magna, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
  keywords: [
    "rolloff dumpster rental Magna",
    "Magna rolloff dumpster rental",
    "rolloff dumpster Magna Utah",
    "construction rolloff dumpster Magna",
    "rolloff dumpster rental near me Magna",
    "Magna rolloff waste management",
    "rolloff dumpster delivery Magna",
    "Magna rolloff dumpster services",
    "rolloff dumpster rental Utah Magna",
    "rolloff construction waste disposal Magna",
    "rolloff home renovation dumpster Magna",
    "rolloff commercial dumpster rental Magna",
    "rolloff demolition dumpster Magna",
    "rolloff concrete disposal Magna",
    "rolloff container rental Magna",
    "rolloff bin rental Magna"
  ],
  openGraph: {
    title: "Rolloff Dumpster Rental Magna - Professional Services | Icon Dumpsters",
    description: "Professional rolloff dumpster rental services in Magna, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    url: "https://icondumpsters.com/rolloff-dumpster-rental-magna-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/rolloff-dumpster-rental-magna-ut',
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
    'geo.placename': 'Magna, Utah',
    'geo.position': '40.7089;-112.1014',
    'ICBM': '40.7089, -112.1014',
  },
};

// Generated with randomization seed: 1548 at 1757646733694
export default function MagnaDumpsterRentalPage() {
  const cityData = getCityData('magna');
  const slcCityData = getSaltLakeCountyCity('magna');
  
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