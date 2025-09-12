import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Rolloff Dumpster Rental South Salt Lake - Professional Services | Icon Dumpsters",
  description: "Professional rolloff dumpster rental services in South Salt Lake, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.",
  keywords: [
    "rolloff dumpster rental South Salt Lake",
    "South Salt Lake rolloff dumpster rental",
    "rolloff dumpster South Salt Lake Utah",
    "construction rolloff dumpster South Salt Lake",
    "rolloff dumpster rental near me South Salt Lake",
    "South Salt Lake rolloff waste management",
    "rolloff dumpster delivery South Salt Lake",
    "South Salt Lake rolloff dumpster services",
    "rolloff dumpster rental Utah South Salt Lake",
    "rolloff construction waste disposal South Salt Lake",
    "rolloff home renovation dumpster South Salt Lake",
    "rolloff commercial dumpster rental South Salt Lake",
    "rolloff demolition dumpster South Salt Lake",
    "rolloff concrete disposal South Salt Lake",
    "rolloff container rental South Salt Lake",
    "rolloff bin rental South Salt Lake"
  ],
  openGraph: {
    title: "Rolloff Dumpster Rental South Salt Lake - Professional Services | Icon Dumpsters",
    description: "Professional rolloff dumpster rental services in South Salt Lake, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/rolloff-dumpster-rental-South Salt Lake-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/rolloff-dumpster-rental-South Salt Lake-ut',
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
    'geo.placename': 'South Salt Lake, Utah',
    'geo.position': '40.7089;-111.8881',
    'ICBM': '40.7089, -111.8881',
  },
};

// Generated with randomization seed: 4352 at 1757646733690
export default function SouthSaltLakeDumpsterRentalPage() {
  const cityData = getCityData('south-salt-lake');
  const slcCityData = getSaltLakeCountyCity('south-salt-lake');
  
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