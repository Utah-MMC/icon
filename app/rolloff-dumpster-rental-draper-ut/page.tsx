import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Rolloff Dumpster Rental Draper - Professional Services | Icon Dumpsters",
  description: "Professional rolloff dumpster rental services in Draper, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.",
  keywords: [
    "rolloff dumpster rental Draper",
    "Draper rolloff dumpster rental",
    "rolloff dumpster Draper Utah",
    "construction rolloff dumpster Draper",
    "rolloff dumpster rental near me Draper",
    "Draper rolloff waste management",
    "rolloff dumpster delivery Draper",
    "Draper rolloff dumpster services",
    "rolloff dumpster rental Utah Draper",
    "rolloff construction waste disposal Draper",
    "rolloff home renovation dumpster Draper",
    "rolloff commercial dumpster rental Draper",
    "rolloff demolition dumpster Draper",
    "rolloff concrete disposal Draper",
    "rolloff container rental Draper",
    "rolloff bin rental Draper"
  ],
  openGraph: {
    title: "Rolloff Dumpster Rental Draper - Professional Services | Icon Dumpsters",
    description: "Professional rolloff dumpster rental services in Draper, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/rolloff-dumpster-rental-Draper-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/rolloff-dumpster-rental-Draper-ut',
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

// Generated with randomization seed: 2873 at 1757646733679
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