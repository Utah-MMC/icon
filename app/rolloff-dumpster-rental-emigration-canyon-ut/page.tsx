import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../../../components/EnhancedCityPageTemplate';
import { getCityData } from '../../../config/cityData';
import { getSaltLakeCountyCity } from '../../../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Rolloff Dumpster Rental Emigration Canyon - Professional Services | Icon Dumpsters",
  description: "Professional rolloff dumpster rental services in Emigration Canyon, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.",
  keywords: [
    "rolloff dumpster rental Emigration Canyon",
    "Emigration Canyon rolloff dumpster rental",
    "rolloff dumpster Emigration Canyon Utah",
    "construction rolloff dumpster Emigration Canyon",
    "rolloff dumpster rental near me Emigration Canyon",
    "Emigration Canyon rolloff waste management",
    "rolloff dumpster delivery Emigration Canyon",
    "Emigration Canyon rolloff dumpster services",
    "rolloff dumpster rental Utah Emigration Canyon",
    "rolloff construction waste disposal Emigration Canyon",
    "rolloff home renovation dumpster Emigration Canyon",
    "rolloff commercial dumpster rental Emigration Canyon",
    "rolloff demolition dumpster Emigration Canyon",
    "rolloff concrete disposal Emigration Canyon",
    "rolloff container rental Emigration Canyon",
    "rolloff bin rental Emigration Canyon"
  ],
  openGraph: {
    title: "Rolloff Dumpster Rental Emigration Canyon - Professional Services | Icon Dumpsters",
    description: "Professional rolloff dumpster rental services in Emigration Canyon, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/rolloff-dumpster-rental-Emigration Canyon-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/rolloff-dumpster-rental-Emigration Canyon-ut',
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
    'geo.placename': 'Emigration Canyon, Utah',
    'geo.position': '40.7500;-111.8000',
    'ICBM': '40.7500, -111.8000',
  },
};

// Generated with randomization seed: 3778 at 1757646733687
export default function EmigrationCanyonDumpsterRentalPage() {
  const cityData = getCityData('emigration-canyon');
  const slcCityData = getSaltLakeCountyCity('emigration-canyon');
  
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