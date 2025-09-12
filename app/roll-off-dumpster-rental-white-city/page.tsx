import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Roll-Off Dumpster Rental White City - Professional Services | Icon Dumpsters",
  description: "Professional roll-off dumpster rental services in White City, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "roll-off dumpster rental White City",
    "White City roll-off dumpster rental",
    "roll-off dumpster White City Utah",
    "construction roll-off dumpster White City",
    "roll-off dumpster rental near me White City",
    "White City roll-off waste management",
    "roll-off dumpster delivery White City",
    "White City roll-off dumpster services",
    "roll-off dumpster rental Utah White City",
    "roll-off construction waste disposal White City",
    "roll-off home renovation dumpster White City",
    "roll-off commercial dumpster rental White City",
    "roll-off demolition dumpster White City",
    "roll-off concrete disposal White City"
  ],
  openGraph: {
    title: "Roll-Off Dumpster Rental White City - Professional Services | Icon Dumpsters",
    description: "Professional roll-off dumpster rental services in White City, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/roll-off-dumpster-rental-White City",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/roll-off-dumpster-rental-White City',
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