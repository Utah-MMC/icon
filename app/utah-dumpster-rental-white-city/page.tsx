import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Utah Dumpster Rental White City - Professional Services | Icon Dumpsters",
  description: "Professional Utah dumpster rental services in White City. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "Utah dumpster rental White City",
    "dumpster rental Utah White City",
    "roll-off dumpster Utah White City",
    "construction dumpster Utah White City",
    "dumpster rental near me White City Utah",
    "White City Utah waste management",
    "dumpster delivery Utah White City",
    "White City Utah dumpster services",
    "Utah dumpster rental services",
    "Utah construction waste disposal White City",
    "Utah home renovation dumpster White City",
    "Utah commercial dumpster rental White City",
    "Utah demolition dumpster White City",
    "Utah concrete disposal White City"
  ],
  openGraph: {
    title: "Utah Dumpster Rental White City - Professional Services | Icon Dumpsters",
    description: "Professional Utah dumpster rental services in White City. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/utah-dumpster-rental-White City",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/utah-dumpster-rental-White City',
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
    'geo.placename': 'White City, Utah',
    'geo.position': '40.5656;-111.8639',
    'ICBM': '40.5656, -111.8639',
  },
};

export default function WhiteCityDumpsterRentalPage() {
  const cityData = getCityData('white-city');
  const slcCityData = getSaltLakeCountyCity('white-city');
  
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