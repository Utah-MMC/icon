import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../../../components/EnhancedCityPageTemplate';
import { getCityData } from '../../../config/cityData';
import { getSaltLakeCountyCity } from '../../../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Rolloff Dumpster Rental Salt Lake City - Professional Services | Icon Dumpsters",
  description: "Professional rolloff dumpster rental services in Salt Lake City, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.",
  keywords: [
    "rolloff dumpster rental Salt Lake City",
    "Salt Lake City rolloff dumpster rental",
    "rolloff dumpster Salt Lake City Utah",
    "construction rolloff dumpster Salt Lake City",
    "rolloff dumpster rental near me Salt Lake City",
    "Salt Lake City rolloff waste management",
    "rolloff dumpster delivery Salt Lake City",
    "Salt Lake City rolloff dumpster services",
    "rolloff dumpster rental Utah Salt Lake City",
    "rolloff construction waste disposal Salt Lake City",
    "rolloff home renovation dumpster Salt Lake City",
    "rolloff commercial dumpster rental Salt Lake City",
    "rolloff demolition dumpster Salt Lake City",
    "rolloff concrete disposal Salt Lake City",
    "rolloff container rental Salt Lake City",
    "rolloff bin rental Salt Lake City"
  ],
  openGraph: {
    title: "Rolloff Dumpster Rental Salt Lake City - Professional Services | Icon Dumpsters",
    description: "Professional rolloff dumpster rental services in Salt Lake City, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/rolloff-dumpster-rental-Salt Lake City-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/rolloff-dumpster-rental-Salt Lake City-ut',
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
    'geo.placename': 'Salt Lake City, Utah',
    'geo.position': '40.7608;-111.8910',
    'ICBM': '40.7608, -111.8910',
  },
};

// Generated with randomization seed: 6231 at 1757646733697
export default function SaltLakeCityDumpsterRentalPage() {
  const cityData = getCityData('salt-lake-city');
  const slcCityData = getSaltLakeCountyCity('salt-lake-city');
  
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