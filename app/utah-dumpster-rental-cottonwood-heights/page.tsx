import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../../../components/EnhancedCityPageTemplate';
import { getCityData } from '../../../config/cityData';
import { getSaltLakeCountyCity } from '../../../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Utah Dumpster Rental Cottonwood Heights - Professional Services | Icon Dumpsters",
  description: "Professional Utah dumpster rental services in Cottonwood Heights. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "Utah dumpster rental Cottonwood Heights",
    "dumpster rental Utah Cottonwood Heights",
    "roll-off dumpster Utah Cottonwood Heights",
    "construction dumpster Utah Cottonwood Heights",
    "dumpster rental near me Cottonwood Heights Utah",
    "Cottonwood Heights Utah waste management",
    "dumpster delivery Utah Cottonwood Heights",
    "Cottonwood Heights Utah dumpster services",
    "Utah dumpster rental services",
    "Utah construction waste disposal Cottonwood Heights",
    "Utah home renovation dumpster Cottonwood Heights",
    "Utah commercial dumpster rental Cottonwood Heights",
    "Utah demolition dumpster Cottonwood Heights",
    "Utah concrete disposal Cottonwood Heights"
  ],
  openGraph: {
    title: "Utah Dumpster Rental Cottonwood Heights - Professional Services | Icon Dumpsters",
    description: "Professional Utah dumpster rental services in Cottonwood Heights. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/utah-dumpster-rental-Cottonwood Heights",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/utah-dumpster-rental-Cottonwood Heights',
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