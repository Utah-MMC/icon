import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Utah Dumpster Rental West Jordan - Professional Services | Icon Dumpsters",
  description: "Professional Utah dumpster rental services in West Jordan. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "Utah dumpster rental West Jordan",
    "dumpster rental Utah West Jordan",
    "roll-off dumpster Utah West Jordan",
    "construction dumpster Utah West Jordan",
    "dumpster rental near me West Jordan Utah",
    "West Jordan Utah waste management",
    "dumpster delivery Utah West Jordan",
    "West Jordan Utah dumpster services",
    "Utah dumpster rental services",
    "Utah construction waste disposal West Jordan",
    "Utah home renovation dumpster West Jordan",
    "Utah commercial dumpster rental West Jordan",
    "Utah demolition dumpster West Jordan",
    "Utah concrete disposal West Jordan"
  ],
  openGraph: {
    title: "Utah Dumpster Rental West Jordan - Professional Services | Icon Dumpsters",
    description: "Professional Utah dumpster rental services in West Jordan. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/utah-dumpster-rental-West Jordan",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/utah-dumpster-rental-West Jordan',
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
    'geo.placename': 'West Jordan, Utah',
    'geo.position': '40.6097;-111.9391',
    'ICBM': '40.6097, -111.9391',
  },
};

export default function WestJordanDumpsterRentalPage() {
  const cityData = getCityData('west-jordan');
  const slcCityData = getSaltLakeCountyCity('west-jordan');
  
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