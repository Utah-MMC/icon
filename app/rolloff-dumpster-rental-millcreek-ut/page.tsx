import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Rolloff Dumpster Rental Millcreek - Professional Services | Icon Dumpsters",
  description: "Professional rolloff dumpster rental services in Millcreek, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.",
  keywords: [
    "rolloff dumpster rental Millcreek",
    "Millcreek rolloff dumpster rental",
    "rolloff dumpster Millcreek Utah",
    "construction rolloff dumpster Millcreek",
    "rolloff dumpster rental near me Millcreek",
    "Millcreek rolloff waste management",
    "rolloff dumpster delivery Millcreek",
    "Millcreek rolloff dumpster services",
    "rolloff dumpster rental Utah Millcreek",
    "rolloff construction waste disposal Millcreek",
    "rolloff home renovation dumpster Millcreek",
    "rolloff commercial dumpster rental Millcreek",
    "rolloff demolition dumpster Millcreek",
    "rolloff concrete disposal Millcreek",
    "rolloff container rental Millcreek",
    "rolloff bin rental Millcreek"
  ],
  openGraph: {
    title: "Rolloff Dumpster Rental Millcreek - Professional Services | Icon Dumpsters",
    description: "Professional rolloff dumpster rental services in Millcreek, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/rolloff-dumpster-rental-Millcreek-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/rolloff-dumpster-rental-Millcreek-ut',
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
    'geo.placename': 'Millcreek, Utah',
    'geo.position': '40.6869;-111.8750',
    'ICBM': '40.6869, -111.8750',
  },
};

// Generated with randomization seed: 7751 at 1757646733746
export default function MillcreekDumpsterRentalPage() {
  const cityData = getCityData('millcreek');
  const slcCityData = getSaltLakeCountyCity('millcreek');
  
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