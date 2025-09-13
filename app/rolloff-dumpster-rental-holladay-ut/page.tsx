import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Rolloff Dumpster Rental Holladay - Professional Services | Icon Dumpsters",
  description: "Professional rolloff dumpster rental services in Holladay, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
  keywords: [
    "rolloff dumpster rental Holladay",
    "Holladay rolloff dumpster rental",
    "rolloff dumpster Holladay Utah",
    "construction rolloff dumpster Holladay",
    "rolloff dumpster rental near me Holladay",
    "Holladay rolloff waste management",
    "rolloff dumpster delivery Holladay",
    "Holladay rolloff dumpster services",
    "rolloff dumpster rental Utah Holladay",
    "rolloff construction waste disposal Holladay",
    "rolloff home renovation dumpster Holladay",
    "rolloff commercial dumpster rental Holladay",
    "rolloff demolition dumpster Holladay",
    "rolloff concrete disposal Holladay",
    "rolloff container rental Holladay",
    "rolloff bin rental Holladay"
  ],
  openGraph: {
    title: "Rolloff Dumpster Rental Holladay - Professional Services | Icon Dumpsters",
    description: "Professional rolloff dumpster rental services in Holladay, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    url: "https://icondumpsters.com/rolloff-dumpster-rental-holladay-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/rolloff-dumpster-rental-holladay-ut',
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
    'geo.placename': 'Holladay, Utah',
    'geo.position': '40.6689;-111.8247',
    'ICBM': '40.6689, -111.8247',
  },
};

// Generated with randomization seed: 5624 at 1757646733751
export default function HolladayDumpsterRentalPage() {
  const cityData = getCityData('holladay');
  const slcCityData = getSaltLakeCountyCity('holladay');
  
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