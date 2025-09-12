import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Dumpster Rental Near Me Millcreek - Local Services | Icon Dumpsters",
  description: "Find reliable dumpster rental near me in Millcreek, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental near me Millcreek",
    "Millcreek dumpster rental near me",
    "dumpster rental near me Millcreek Utah",
    "local dumpster rental Millcreek",
    "dumpster rental near me Millcreek Utah",
    "Millcreek local dumpster services",
    "dumpster delivery near me Millcreek",
    "Millcreek nearby dumpster rental",
    "dumpster rental near me Utah Millcreek",
    "local construction dumpster Millcreek",
    "nearby home renovation dumpster Millcreek",
    "local commercial dumpster rental Millcreek",
    "dumpster rental near me demolition Millcreek",
    "local concrete disposal Millcreek",
    "closest dumpster rental Millcreek",
    "dumpster rental near me same day Millcreek"
  ],
  openGraph: {
    title: "Dumpster Rental Near Me Millcreek - Local Services | Icon Dumpsters",
    description: "Find reliable dumpster rental near me in Millcreek, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/dumpster-rental-near-me-Millcreek-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/dumpster-rental-near-me-Millcreek-ut',
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

// Generated with randomization seed: 9396 at 1757646733811
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