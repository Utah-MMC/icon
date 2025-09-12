import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Dumpster Rental Near Me Cottonwood Heights - Local Services | Icon Dumpsters",
  description: "Find reliable dumpster rental near me in Cottonwood Heights, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental near me Cottonwood Heights",
    "Cottonwood Heights dumpster rental near me",
    "dumpster rental near me Cottonwood Heights Utah",
    "local dumpster rental Cottonwood Heights",
    "dumpster rental near me Cottonwood Heights Utah",
    "Cottonwood Heights local dumpster services",
    "dumpster delivery near me Cottonwood Heights",
    "Cottonwood Heights nearby dumpster rental",
    "dumpster rental near me Utah Cottonwood Heights",
    "local construction dumpster Cottonwood Heights",
    "nearby home renovation dumpster Cottonwood Heights",
    "local commercial dumpster rental Cottonwood Heights",
    "dumpster rental near me demolition Cottonwood Heights",
    "local concrete disposal Cottonwood Heights",
    "closest dumpster rental Cottonwood Heights",
    "dumpster rental near me same day Cottonwood Heights"
  ],
  openGraph: {
    title: "Dumpster Rental Near Me Cottonwood Heights - Local Services | Icon Dumpsters",
    description: "Find reliable dumpster rental near me in Cottonwood Heights, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/dumpster-rental-near-me-Cottonwood Heights-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/dumpster-rental-near-me-Cottonwood Heights-ut',
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
    'geo.placename': 'Cottonwood Heights, Utah',
    'geo.position': '40.6197;-111.8103',
    'ICBM': '40.6197, -111.8103',
  },
};

// Generated with randomization seed: 9481 at 1757646733804
export default function CottonwoodHeightsDumpsterRentalPage() {
  const cityData = getCityData('cottonwood-heights');
  const slcCityData = getSaltLakeCountyCity('cottonwood-heights');
  
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