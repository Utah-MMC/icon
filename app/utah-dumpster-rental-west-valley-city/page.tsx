import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../../../components/EnhancedCityPageTemplate';
import { getCityData } from '../../../config/cityData';
import { getSaltLakeCountyCity } from '../../../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Utah Dumpster Rental West Valley City - Professional Services | Icon Dumpsters",
  description: "Professional Utah dumpster rental services in West Valley City. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "Utah dumpster rental West Valley City",
    "dumpster rental Utah West Valley City",
    "roll-off dumpster Utah West Valley City",
    "construction dumpster Utah West Valley City",
    "dumpster rental near me West Valley City Utah",
    "West Valley City Utah waste management",
    "dumpster delivery Utah West Valley City",
    "West Valley City Utah dumpster services",
    "Utah dumpster rental services",
    "Utah construction waste disposal West Valley City",
    "Utah home renovation dumpster West Valley City",
    "Utah commercial dumpster rental West Valley City",
    "Utah demolition dumpster West Valley City",
    "Utah concrete disposal West Valley City"
  ],
  openGraph: {
    title: "Utah Dumpster Rental West Valley City - Professional Services | Icon Dumpsters",
    description: "Professional Utah dumpster rental services in West Valley City. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/utah-dumpster-rental-West Valley City",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/utah-dumpster-rental-West Valley City',
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
    'geo.placename': 'West Valley City, Utah',
    'geo.position': '40.6916;-111.9931',
    'ICBM': '40.6916, -111.9931',
  },
};

export default function WestValleyCityDumpsterRentalPage() {
  const cityData = getCityData('west-valley-city');
  const slcCityData = getSaltLakeCountyCity('west-valley-city');
  
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