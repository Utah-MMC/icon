import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../../../components/EnhancedCityPageTemplate';
import { getCityData } from '../../../config/cityData';
import { getSaltLakeCountyCity } from '../../../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "30 Yard Dumpster Rental Cottonwood Heights - Professional Services | Icon Dumpsters",
  description: "Professional 30 yard dumpster rental services in Cottonwood Heights, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000.",
  keywords: [
    "30 yard dumpster rental Cottonwood Heights",
    "Cottonwood Heights 30 yard dumpster rental",
    "30 yard dumpster Cottonwood Heights Utah",
    "construction 30 yard dumpster Cottonwood Heights",
    "30 yard dumpster rental near me Cottonwood Heights",
    "Cottonwood Heights 30 yard waste management",
    "30 yard dumpster delivery Cottonwood Heights",
    "Cottonwood Heights 30 yard dumpster services",
    "30 yard dumpster rental Utah Cottonwood Heights",
    "30 yard construction waste disposal Cottonwood Heights",
    "30 yard home renovation dumpster Cottonwood Heights",
    "30 yard commercial dumpster rental Cottonwood Heights",
    "30 yard demolition dumpster Cottonwood Heights",
    "30 yard concrete disposal Cottonwood Heights",
    "large dumpster rental Cottonwood Heights",
    "big dumpster rental Cottonwood Heights"
  ],
  openGraph: {
    title: "30 Yard Dumpster Rental Cottonwood Heights - Professional Services | Icon Dumpsters",
    description: "Professional 30 yard dumpster rental services in Cottonwood Heights, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000.",
    url: "https://icondumpsters.com/30-yard-dumpster-rental-Cottonwood Heights-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/30-yard-dumpster-rental-Cottonwood Heights-ut',
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