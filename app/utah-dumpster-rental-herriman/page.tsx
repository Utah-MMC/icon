import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Utah Dumpster Rental Herriman - Professional Services | Icon Dumpsters",
  description: "Professional Utah dumpster rental services in Herriman. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "Utah dumpster rental Herriman",
    "dumpster rental Utah Herriman",
    "roll-off dumpster Utah Herriman",
    "construction dumpster Utah Herriman",
    "dumpster rental near me Herriman Utah",
    "Herriman Utah waste management",
    "dumpster delivery Utah Herriman",
    "Herriman Utah dumpster services",
    "Utah dumpster rental services",
    "Utah construction waste disposal Herriman",
    "Utah home renovation dumpster Herriman",
    "Utah commercial dumpster rental Herriman",
    "Utah demolition dumpster Herriman",
    "Utah concrete disposal Herriman"
  ],
  openGraph: {
    title: "Utah Dumpster Rental Herriman - Professional Services | Icon Dumpsters",
    description: "Professional Utah dumpster rental services in Herriman. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/utah-dumpster-rental-herriman",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/utah-dumpster-rental-herriman',
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
    'geo.placename': 'Herriman, Utah',
    'geo.position': '40.5141;-112.0329',
    'ICBM': '40.5141, -112.0329',
  },
};

export default function HerrimanDumpsterRentalPage() {
  const cityData = getCityData('herriman');
  const slcCityData = getSaltLakeCountyCity('herriman');
  
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