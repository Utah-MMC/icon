import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Utah Dumpster Rental Millcreek - Professional Services | Icon Dumpsters",
  description: "Professional Utah dumpster rental services in Millcreek. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "Utah dumpster rental Millcreek",
    "dumpster rental Utah Millcreek",
    "roll-off dumpster Utah Millcreek",
    "construction dumpster Utah Millcreek",
    "dumpster rental near me Millcreek Utah",
    "Millcreek Utah waste management",
    "dumpster delivery Utah Millcreek",
    "Millcreek Utah dumpster services",
    "Utah dumpster rental services",
    "Utah construction waste disposal Millcreek",
    "Utah home renovation dumpster Millcreek",
    "Utah commercial dumpster rental Millcreek",
    "Utah demolition dumpster Millcreek",
    "Utah concrete disposal Millcreek"
  ],
  openGraph: {
    title: "Utah Dumpster Rental Millcreek - Professional Services | Icon Dumpsters",
    description: "Professional Utah dumpster rental services in Millcreek. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/utah-dumpster-rental-millcreek",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/utah-dumpster-rental-millcreek',
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