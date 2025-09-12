import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../../../components/EnhancedCityPageTemplate';
import { getCityData } from '../../../config/cityData';
import { getSaltLakeCountyCity } from '../../../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Rolloff Dumpster Rental White City - Professional Services | Icon Dumpsters",
  description: "Professional rolloff dumpster rental services in White City, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.",
  keywords: [
    "rolloff dumpster rental White City",
    "White City rolloff dumpster rental",
    "rolloff dumpster White City Utah",
    "construction rolloff dumpster White City",
    "rolloff dumpster rental near me White City",
    "White City rolloff waste management",
    "rolloff dumpster delivery White City",
    "White City rolloff dumpster services",
    "rolloff dumpster rental Utah White City",
    "rolloff construction waste disposal White City",
    "rolloff home renovation dumpster White City",
    "rolloff commercial dumpster rental White City",
    "rolloff demolition dumpster White City",
    "rolloff concrete disposal White City",
    "rolloff container rental White City",
    "rolloff bin rental White City"
  ],
  openGraph: {
    title: "Rolloff Dumpster Rental White City - Professional Services | Icon Dumpsters",
    description: "Professional rolloff dumpster rental services in White City, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/rolloff-dumpster-rental-White City-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/rolloff-dumpster-rental-White City-ut',
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
    'geo.placename': 'White City, Utah',
    'geo.position': '40.5656;-111.8639',
    'ICBM': '40.5656, -111.8639',
  },
};

// Generated with randomization seed: 9517 at 1757646733682
export default function WhiteCityDumpsterRentalPage() {
  const cityData = getCityData('white-city');
  const slcCityData = getSaltLakeCountyCity('white-city');
  
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