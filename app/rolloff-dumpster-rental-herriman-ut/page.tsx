import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../../../components/EnhancedCityPageTemplate';
import { getCityData } from '../../../config/cityData';
import { getSaltLakeCountyCity } from '../../../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Rolloff Dumpster Rental Herriman - Professional Services | Icon Dumpsters",
  description: "Professional rolloff dumpster rental services in Herriman, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.",
  keywords: [
    "rolloff dumpster rental Herriman",
    "Herriman rolloff dumpster rental",
    "rolloff dumpster Herriman Utah",
    "construction rolloff dumpster Herriman",
    "rolloff dumpster rental near me Herriman",
    "Herriman rolloff waste management",
    "rolloff dumpster delivery Herriman",
    "Herriman rolloff dumpster services",
    "rolloff dumpster rental Utah Herriman",
    "rolloff construction waste disposal Herriman",
    "rolloff home renovation dumpster Herriman",
    "rolloff commercial dumpster rental Herriman",
    "rolloff demolition dumpster Herriman",
    "rolloff concrete disposal Herriman",
    "rolloff container rental Herriman",
    "rolloff bin rental Herriman"
  ],
  openGraph: {
    title: "Rolloff Dumpster Rental Herriman - Professional Services | Icon Dumpsters",
    description: "Professional rolloff dumpster rental services in Herriman, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/rolloff-dumpster-rental-Herriman-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/rolloff-dumpster-rental-Herriman-ut',
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
    'geo.placename': 'Herriman, Utah',
    'geo.position': '40.5141;-112.0329',
    'ICBM': '40.5141, -112.0329',
  },
};

// Generated with randomization seed: 1786 at 1757646733732
export default function HerrimanDumpsterRentalPage() {
  const cityData = getCityData('herriman');
  const slcCityData = getSaltLakeCountyCity('herriman');
  
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