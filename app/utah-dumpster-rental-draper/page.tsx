import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../../../components/EnhancedCityPageTemplate';
import { getCityData } from '../../../config/cityData';
import { getSaltLakeCountyCity } from '../../../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Utah Dumpster Rental Draper - Professional Services | Icon Dumpsters",
  description: "Professional Utah dumpster rental services in Draper. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "Utah dumpster rental Draper",
    "dumpster rental Utah Draper",
    "roll-off dumpster Utah Draper",
    "construction dumpster Utah Draper",
    "dumpster rental near me Draper Utah",
    "Draper Utah waste management",
    "dumpster delivery Utah Draper",
    "Draper Utah dumpster services",
    "Utah dumpster rental services",
    "Utah construction waste disposal Draper",
    "Utah home renovation dumpster Draper",
    "Utah commercial dumpster rental Draper",
    "Utah demolition dumpster Draper",
    "Utah concrete disposal Draper"
  ],
  openGraph: {
    title: "Utah Dumpster Rental Draper - Professional Services | Icon Dumpsters",
    description: "Professional Utah dumpster rental services in Draper. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/utah-dumpster-rental-Draper",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/utah-dumpster-rental-Draper',
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
    'geo.placename': 'Draper, Utah',
    'geo.position': '40.5247;-111.8638',
    'ICBM': '40.5247, -111.8638',
  },
};

export default function DraperDumpsterRentalPage() {
  const cityData = getCityData('draper');
  const slcCityData = getSaltLakeCountyCity('draper');
  
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