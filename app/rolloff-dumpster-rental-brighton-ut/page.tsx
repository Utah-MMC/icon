import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Rolloff Dumpster Rental Brighton - Professional Services | Icon Dumpsters",
  description: "Professional rolloff dumpster rental services in Brighton, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.",
  keywords: [
    "rolloff dumpster rental Brighton",
    "Brighton rolloff dumpster rental",
    "rolloff dumpster Brighton Utah",
    "construction rolloff dumpster Brighton",
    "rolloff dumpster rental near me Brighton",
    "Brighton rolloff waste management",
    "rolloff dumpster delivery Brighton",
    "Brighton rolloff dumpster services",
    "rolloff dumpster rental Utah Brighton",
    "rolloff construction waste disposal Brighton",
    "rolloff home renovation dumpster Brighton",
    "rolloff commercial dumpster rental Brighton",
    "rolloff demolition dumpster Brighton",
    "rolloff concrete disposal Brighton",
    "rolloff container rental Brighton",
    "rolloff bin rental Brighton"
  ],
  openGraph: {
    title: "Rolloff Dumpster Rental Brighton - Professional Services | Icon Dumpsters",
    description: "Professional rolloff dumpster rental services in Brighton, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/rolloff-dumpster-rental-Brighton-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/rolloff-dumpster-rental-Brighton-ut',
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

// Generated with randomization seed: 6401 at 1757646733735
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