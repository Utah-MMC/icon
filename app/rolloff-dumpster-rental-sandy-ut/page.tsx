import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Rolloff Dumpster Rental Sandy - Professional Services | Icon Dumpsters",
  description: "Professional rolloff dumpster rental services in Sandy, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.",
  keywords: [
    "rolloff dumpster rental Sandy",
    "Sandy rolloff dumpster rental",
    "rolloff dumpster Sandy Utah",
    "construction rolloff dumpster Sandy",
    "rolloff dumpster rental near me Sandy",
    "Sandy rolloff waste management",
    "rolloff dumpster delivery Sandy",
    "Sandy rolloff dumpster services",
    "rolloff dumpster rental Utah Sandy",
    "rolloff construction waste disposal Sandy",
    "rolloff home renovation dumpster Sandy",
    "rolloff commercial dumpster rental Sandy",
    "rolloff demolition dumpster Sandy",
    "rolloff concrete disposal Sandy",
    "rolloff container rental Sandy",
    "rolloff bin rental Sandy"
  ],
  openGraph: {
    title: "Rolloff Dumpster Rental Sandy - Professional Services | Icon Dumpsters",
    description: "Professional rolloff dumpster rental services in Sandy, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/rolloff-dumpster-rental-Sandy-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/rolloff-dumpster-rental-Sandy-ut',
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
    'geo.placename': 'Sandy, Utah',
    'geo.position': '40.5649;-111.8381',
    'ICBM': '40.5649, -111.8381',
  },
};

// Generated with randomization seed: 4475 at 1757646733703
export default function SandyDumpsterRentalPage() {
  const cityData = getCityData('sandy');
  const slcCityData = getSaltLakeCountyCity('sandy');
  
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