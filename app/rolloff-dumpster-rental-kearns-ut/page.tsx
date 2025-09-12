import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../../../components/EnhancedCityPageTemplate';
import { getCityData } from '../../../config/cityData';
import { getSaltLakeCountyCity } from '../../../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Rolloff Dumpster Rental Kearns - Professional Services | Icon Dumpsters",
  description: "Professional rolloff dumpster rental services in Kearns, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.",
  keywords: [
    "rolloff dumpster rental Kearns",
    "Kearns rolloff dumpster rental",
    "rolloff dumpster Kearns Utah",
    "construction rolloff dumpster Kearns",
    "rolloff dumpster rental near me Kearns",
    "Kearns rolloff waste management",
    "rolloff dumpster delivery Kearns",
    "Kearns rolloff dumpster services",
    "rolloff dumpster rental Utah Kearns",
    "rolloff construction waste disposal Kearns",
    "rolloff home renovation dumpster Kearns",
    "rolloff commercial dumpster rental Kearns",
    "rolloff demolition dumpster Kearns",
    "rolloff concrete disposal Kearns",
    "rolloff container rental Kearns",
    "rolloff bin rental Kearns"
  ],
  openGraph: {
    title: "Rolloff Dumpster Rental Kearns - Professional Services | Icon Dumpsters",
    description: "Professional rolloff dumpster rental services in Kearns, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/rolloff-dumpster-rental-Kearns-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/rolloff-dumpster-rental-Kearns-ut',
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
    'geo.placename': 'Kearns, Utah',
    'geo.position': '40.6597;-111.9969',
    'ICBM': '40.6597, -111.9969',
  },
};

// Generated with randomization seed: 2652 at 1757646733684
export default function KearnsDumpsterRentalPage() {
  const cityData = getCityData('kearns');
  const slcCityData = getSaltLakeCountyCity('kearns');
  
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