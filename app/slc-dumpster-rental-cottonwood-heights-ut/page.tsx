import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../../../components/EnhancedCityPageTemplate';
import { getCityData } from '../../../config/cityData';
import { getSaltLakeCountyCity } from '../../../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Cottonwood Heights Dumpster Rental - Professional Services in Cottonwood Heights, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Cottonwood Heights, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental Cottonwood Heights",
    "Cottonwood Heights dumpster rental",
    "roll-off dumpster Cottonwood Heights",
    "construction dumpster Cottonwood Heights",
    "dumpster rental near me Cottonwood Heights",
    "Cottonwood Heights waste management",
    "dumpster delivery Cottonwood Heights",
    "Cottonwood Heights dumpster services",
    "Salt Lake County dumpster rental",
    "Utah dumpster rental Cottonwood Heights",
    "construction waste disposal Cottonwood Heights",
    "home renovation dumpster Cottonwood Heights",
    "commercial dumpster rental Cottonwood Heights",
    "demolition dumpster Cottonwood Heights",
    "concrete disposal Cottonwood Heights"
  ],
  openGraph: {
    title: "Cottonwood Heights Dumpster Rental - Professional Services in Cottonwood Heights, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Cottonwood Heights, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/slc-dumpster-rental-Cottonwood Heights-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/slc-dumpster-rental-Cottonwood Heights-ut',
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