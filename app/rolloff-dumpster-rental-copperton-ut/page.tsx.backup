import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Rolloff Dumpster Rental Copperton - Professional Services | Icon Dumpsters",
  description: "Professional rolloff dumpster rental services in Copperton, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.",
  keywords: [
    "rolloff dumpster rental Copperton",
    "Copperton rolloff dumpster rental",
    "rolloff dumpster Copperton Utah",
    "construction rolloff dumpster Copperton",
    "rolloff dumpster rental near me Copperton",
    "Copperton rolloff waste management",
    "rolloff dumpster delivery Copperton",
    "Copperton rolloff dumpster services",
    "rolloff dumpster rental Utah Copperton",
    "rolloff construction waste disposal Copperton",
    "rolloff home renovation dumpster Copperton",
    "rolloff commercial dumpster rental Copperton",
    "rolloff demolition dumpster Copperton",
    "rolloff concrete disposal Copperton",
    "rolloff container rental Copperton",
    "rolloff bin rental Copperton"
  ],
  openGraph: {
    title: "Rolloff Dumpster Rental Copperton - Professional Services | Icon Dumpsters",
    description: "Professional rolloff dumpster rental services in Copperton, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/rolloff-dumpster-rental-copperton-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/rolloff-dumpster-rental-copperton-ut',
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
    'geo.placename': 'Copperton, Utah',
    'geo.position': '40.5667;-112.1000',
    'ICBM': '40.5667, -112.1000',
  },
};

// Generated with randomization seed: 8088 at 1757646733706
export default function CoppertonDumpsterRentalPage() {
  const cityData = getCityData('copperton');
  const slcCityData = getSaltLakeCountyCity('copperton');
  
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