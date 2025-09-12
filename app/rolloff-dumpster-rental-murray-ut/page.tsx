import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Rolloff Dumpster Rental Murray - Professional Services | Icon Dumpsters",
  description: "Professional rolloff dumpster rental services in Murray, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.",
  keywords: [
    "rolloff dumpster rental Murray",
    "Murray rolloff dumpster rental",
    "rolloff dumpster Murray Utah",
    "construction rolloff dumpster Murray",
    "rolloff dumpster rental near me Murray",
    "Murray rolloff waste management",
    "rolloff dumpster delivery Murray",
    "Murray rolloff dumpster services",
    "rolloff dumpster rental Utah Murray",
    "rolloff construction waste disposal Murray",
    "rolloff home renovation dumpster Murray",
    "rolloff commercial dumpster rental Murray",
    "rolloff demolition dumpster Murray",
    "rolloff concrete disposal Murray",
    "rolloff container rental Murray",
    "rolloff bin rental Murray"
  ],
  openGraph: {
    title: "Rolloff Dumpster Rental Murray - Professional Services | Icon Dumpsters",
    description: "Professional rolloff dumpster rental services in Murray, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/rolloff-dumpster-rental-Murray-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/rolloff-dumpster-rental-Murray-ut',
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

// Generated with randomization seed: 7941 at 1757646733726
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