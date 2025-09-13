import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Rolloff Dumpster Rental Riverton - Professional Services | Icon Dumpsters",
  description: "Professional rolloff dumpster rental services in Riverton, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.",
  keywords: [
    "rolloff dumpster rental Riverton",
    "Riverton rolloff dumpster rental",
    "rolloff dumpster Riverton Utah",
    "construction rolloff dumpster Riverton",
    "rolloff dumpster rental near me Riverton",
    "Riverton rolloff waste management",
    "rolloff dumpster delivery Riverton",
    "Riverton rolloff dumpster services",
    "rolloff dumpster rental Utah Riverton",
    "rolloff construction waste disposal Riverton",
    "rolloff home renovation dumpster Riverton",
    "rolloff commercial dumpster rental Riverton",
    "rolloff demolition dumpster Riverton",
    "rolloff concrete disposal Riverton",
    "rolloff container rental Riverton",
    "rolloff bin rental Riverton"
  ],
  openGraph: {
    title: "Rolloff Dumpster Rental Riverton - Professional Services | Icon Dumpsters",
    description: "Professional rolloff dumpster rental services in Riverton, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/rolloff-dumpster-rental-riverton-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/rolloff-dumpster-rental-riverton-ut',
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

// Generated with randomization seed: 1831 at 1757646733729
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