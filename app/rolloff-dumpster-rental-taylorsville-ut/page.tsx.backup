import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Rolloff Dumpster Rental Taylorsville - Professional Services | Icon Dumpsters",
  description: "Professional rolloff dumpster rental services in Taylorsville, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.",
  keywords: [
    "rolloff dumpster rental Taylorsville",
    "Taylorsville rolloff dumpster rental",
    "rolloff dumpster Taylorsville Utah",
    "construction rolloff dumpster Taylorsville",
    "rolloff dumpster rental near me Taylorsville",
    "Taylorsville rolloff waste management",
    "rolloff dumpster delivery Taylorsville",
    "Taylorsville rolloff dumpster services",
    "rolloff dumpster rental Utah Taylorsville",
    "rolloff construction waste disposal Taylorsville",
    "rolloff home renovation dumpster Taylorsville",
    "rolloff commercial dumpster rental Taylorsville",
    "rolloff demolition dumpster Taylorsville",
    "rolloff concrete disposal Taylorsville",
    "rolloff container rental Taylorsville",
    "rolloff bin rental Taylorsville"
  ],
  openGraph: {
    title: "Rolloff Dumpster Rental Taylorsville - Professional Services | Icon Dumpsters",
    description: "Professional rolloff dumpster rental services in Taylorsville, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/rolloff-dumpster-rental-taylorsville-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/rolloff-dumpster-rental-taylorsville-ut',
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
    'geo.placename': 'Taylorsville, Utah',
    'geo.position': '40.6677;-111.9388',
    'ICBM': '40.6677, -111.9388',
  },
};

// Generated with randomization seed: 7729 at 1757646733743
export default function TaylorsvilleDumpsterRentalPage() {
  const cityData = getCityData('taylorsville');
  const slcCityData = getSaltLakeCountyCity('taylorsville');
  
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