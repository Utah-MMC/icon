import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../../../components/EnhancedCityPageTemplate';
import { getCityData } from '../../../config/cityData';
import { getSaltLakeCountyCity } from '../../../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Rolloff Dumpster Rental West Jordan - Professional Services | Icon Dumpsters",
  description: "Professional rolloff dumpster rental services in West Jordan, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.",
  keywords: [
    "rolloff dumpster rental West Jordan",
    "West Jordan rolloff dumpster rental",
    "rolloff dumpster West Jordan Utah",
    "construction rolloff dumpster West Jordan",
    "rolloff dumpster rental near me West Jordan",
    "West Jordan rolloff waste management",
    "rolloff dumpster delivery West Jordan",
    "West Jordan rolloff dumpster services",
    "rolloff dumpster rental Utah West Jordan",
    "rolloff construction waste disposal West Jordan",
    "rolloff home renovation dumpster West Jordan",
    "rolloff commercial dumpster rental West Jordan",
    "rolloff demolition dumpster West Jordan",
    "rolloff concrete disposal West Jordan",
    "rolloff container rental West Jordan",
    "rolloff bin rental West Jordan"
  ],
  openGraph: {
    title: "Rolloff Dumpster Rental West Jordan - Professional Services | Icon Dumpsters",
    description: "Professional rolloff dumpster rental services in West Jordan, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/rolloff-dumpster-rental-West Jordan-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/rolloff-dumpster-rental-West Jordan-ut',
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
    'geo.placename': 'West Jordan, Utah',
    'geo.position': '40.6097;-111.9391',
    'ICBM': '40.6097, -111.9391',
  },
};

// Generated with randomization seed: 2985 at 1757646733676
export default function WestJordanDumpsterRentalPage() {
  const cityData = getCityData('west-jordan');
  const slcCityData = getSaltLakeCountyCity('west-jordan');
  
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