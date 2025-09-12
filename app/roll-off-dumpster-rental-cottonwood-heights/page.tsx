import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../../../components/EnhancedCityPageTemplate';
import { getCityData } from '../../../config/cityData';
import { getSaltLakeCountyCity } from '../../../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Roll-Off Dumpster Rental Cottonwood Heights - Professional Services | Icon Dumpsters",
  description: "Professional roll-off dumpster rental services in Cottonwood Heights, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "roll-off dumpster rental Cottonwood Heights",
    "Cottonwood Heights roll-off dumpster rental",
    "roll-off dumpster Cottonwood Heights Utah",
    "construction roll-off dumpster Cottonwood Heights",
    "roll-off dumpster rental near me Cottonwood Heights",
    "Cottonwood Heights roll-off waste management",
    "roll-off dumpster delivery Cottonwood Heights",
    "Cottonwood Heights roll-off dumpster services",
    "roll-off dumpster rental Utah Cottonwood Heights",
    "roll-off construction waste disposal Cottonwood Heights",
    "roll-off home renovation dumpster Cottonwood Heights",
    "roll-off commercial dumpster rental Cottonwood Heights",
    "roll-off demolition dumpster Cottonwood Heights",
    "roll-off concrete disposal Cottonwood Heights"
  ],
  openGraph: {
    title: "Roll-Off Dumpster Rental Cottonwood Heights - Professional Services | Icon Dumpsters",
    description: "Professional roll-off dumpster rental services in Cottonwood Heights, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/roll-off-dumpster-rental-Cottonwood Heights",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/roll-off-dumpster-rental-Cottonwood Heights',
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