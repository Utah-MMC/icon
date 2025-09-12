import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../../../components/EnhancedCityPageTemplate';
import { getCityData } from '../../../config/cityData';
import { getSaltLakeCountyCity } from '../../../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Rolloff Dumpster Rental West Valley City - Professional Services | Icon Dumpsters",
  description: "Professional rolloff dumpster rental services in West Valley City, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.",
  keywords: [
    "rolloff dumpster rental West Valley City",
    "West Valley City rolloff dumpster rental",
    "rolloff dumpster West Valley City Utah",
    "construction rolloff dumpster West Valley City",
    "rolloff dumpster rental near me West Valley City",
    "West Valley City rolloff waste management",
    "rolloff dumpster delivery West Valley City",
    "West Valley City rolloff dumpster services",
    "rolloff dumpster rental Utah West Valley City",
    "rolloff construction waste disposal West Valley City",
    "rolloff home renovation dumpster West Valley City",
    "rolloff commercial dumpster rental West Valley City",
    "rolloff demolition dumpster West Valley City",
    "rolloff concrete disposal West Valley City",
    "rolloff container rental West Valley City",
    "rolloff bin rental West Valley City"
  ],
  openGraph: {
    title: "Rolloff Dumpster Rental West Valley City - Professional Services | Icon Dumpsters",
    description: "Professional rolloff dumpster rental services in West Valley City, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/rolloff-dumpster-rental-West Valley City-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/rolloff-dumpster-rental-West Valley City-ut',
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
    'geo.placename': 'West Valley City, Utah',
    'geo.position': '40.6916;-111.9931',
    'ICBM': '40.6916, -111.9931',
  },
};

// Generated with randomization seed: 9525 at 1757646733737
export default function WestValleyCityDumpsterRentalPage() {
  const cityData = getCityData('west-valley-city');
  const slcCityData = getSaltLakeCountyCity('west-valley-city');
  
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