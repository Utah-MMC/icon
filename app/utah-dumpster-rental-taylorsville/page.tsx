import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Utah Dumpster Rental Taylorsville - Professional Services | Icon Dumpsters",
  description: "Professional Utah dumpster rental services in Taylorsville. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "Utah dumpster rental Taylorsville",
    "dumpster rental Utah Taylorsville",
    "roll-off dumpster Utah Taylorsville",
    "construction dumpster Utah Taylorsville",
    "dumpster rental near me Taylorsville Utah",
    "Taylorsville Utah waste management",
    "dumpster delivery Utah Taylorsville",
    "Taylorsville Utah dumpster services",
    "Utah dumpster rental services",
    "Utah construction waste disposal Taylorsville",
    "Utah home renovation dumpster Taylorsville",
    "Utah commercial dumpster rental Taylorsville",
    "Utah demolition dumpster Taylorsville",
    "Utah concrete disposal Taylorsville"
  ],
  openGraph: {
    title: "Utah Dumpster Rental Taylorsville - Professional Services | Icon Dumpsters",
    description: "Professional Utah dumpster rental services in Taylorsville. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/utah-dumpster-rental-Taylorsville",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/utah-dumpster-rental-Taylorsville',
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
    'geo.placename': 'Taylorsville, Utah',
    'geo.position': '40.6677;-111.9388',
    'ICBM': '40.6677, -111.9388',
  },
};

export default function TaylorsvilleDumpsterRentalPage() {
  const cityData = getCityData('taylorsville');
  const slcCityData = getSaltLakeCountyCity('taylorsville');
  
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