import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Utah Dumpster Rental Copperton - Professional Services | Icon Dumpsters",
  description: "Professional Utah dumpster rental services in Copperton. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "Utah dumpster rental Copperton",
    "dumpster rental Utah Copperton",
    "roll-off dumpster Utah Copperton",
    "construction dumpster Utah Copperton",
    "dumpster rental near me Copperton Utah",
    "Copperton Utah waste management",
    "dumpster delivery Utah Copperton",
    "Copperton Utah dumpster services",
    "Utah dumpster rental services",
    "Utah construction waste disposal Copperton",
    "Utah home renovation dumpster Copperton",
    "Utah commercial dumpster rental Copperton",
    "Utah demolition dumpster Copperton",
    "Utah concrete disposal Copperton"
  ],
  openGraph: {
    title: "Utah Dumpster Rental Copperton - Professional Services | Icon Dumpsters",
    description: "Professional Utah dumpster rental services in Copperton. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/utah-dumpster-rental-Copperton",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/utah-dumpster-rental-Copperton',
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
    'geo.placename': 'Copperton, Utah',
    'geo.position': '40.5667;-112.1000',
    'ICBM': '40.5667, -112.1000',
  },
};

export default function CoppertonDumpsterRentalPage() {
  const cityData = getCityData('copperton');
  const slcCityData = getSaltLakeCountyCity('copperton');
  
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