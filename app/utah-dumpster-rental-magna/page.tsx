import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Utah Dumpster Rental Magna - Professional Services | Icon Dumpsters",
  description: "Professional Utah dumpster rental services in Magna. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "Utah dumpster rental Magna",
    "dumpster rental Utah Magna",
    "roll-off dumpster Utah Magna",
    "construction dumpster Utah Magna",
    "dumpster rental near me Magna Utah",
    "Magna Utah waste management",
    "dumpster delivery Utah Magna",
    "Magna Utah dumpster services",
    "Utah dumpster rental services",
    "Utah construction waste disposal Magna",
    "Utah home renovation dumpster Magna",
    "Utah commercial dumpster rental Magna",
    "Utah demolition dumpster Magna",
    "Utah concrete disposal Magna"
  ],
  openGraph: {
    title: "Utah Dumpster Rental Magna - Professional Services | Icon Dumpsters",
    description: "Professional Utah dumpster rental services in Magna. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/utah-dumpster-rental-Magna",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/utah-dumpster-rental-Magna',
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
    'geo.placename': 'Magna, Utah',
    'geo.position': '40.7089;-112.1014',
    'ICBM': '40.7089, -112.1014',
  },
};

export default function MagnaDumpsterRentalPage() {
  const cityData = getCityData('magna');
  const slcCityData = getSaltLakeCountyCity('magna');
  
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