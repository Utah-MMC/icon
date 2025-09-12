import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../../../components/EnhancedCityPageTemplate';
import { getCityData } from '../../../config/cityData';
import { getSaltLakeCountyCity } from '../../../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Rolloff Dumpster Rental Cottonwood Heights - Professional Services | Icon Dumpsters",
  description: "Professional rolloff dumpster rental services in Cottonwood Heights, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.",
  keywords: [
    "rolloff dumpster rental Cottonwood Heights",
    "Cottonwood Heights rolloff dumpster rental",
    "rolloff dumpster Cottonwood Heights Utah",
    "construction rolloff dumpster Cottonwood Heights",
    "rolloff dumpster rental near me Cottonwood Heights",
    "Cottonwood Heights rolloff waste management",
    "rolloff dumpster delivery Cottonwood Heights",
    "Cottonwood Heights rolloff dumpster services",
    "rolloff dumpster rental Utah Cottonwood Heights",
    "rolloff construction waste disposal Cottonwood Heights",
    "rolloff home renovation dumpster Cottonwood Heights",
    "rolloff commercial dumpster rental Cottonwood Heights",
    "rolloff demolition dumpster Cottonwood Heights",
    "rolloff concrete disposal Cottonwood Heights",
    "rolloff container rental Cottonwood Heights",
    "rolloff bin rental Cottonwood Heights"
  ],
  openGraph: {
    title: "Rolloff Dumpster Rental Cottonwood Heights - Professional Services | Icon Dumpsters",
    description: "Professional rolloff dumpster rental services in Cottonwood Heights, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard rolloff dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/rolloff-dumpster-rental-Cottonwood Heights-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/rolloff-dumpster-rental-Cottonwood Heights-ut',
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

// Generated with randomization seed: 8428 at 1757646733673
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