import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Roll-Off Dumpster Rental Salt Lake City - Professional Services | Icon Dumpsters",
  description: "Professional roll-off dumpster rental services in Salt Lake City, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "roll-off dumpster rental Salt Lake City",
    "Salt Lake City roll-off dumpster rental",
    "roll-off dumpster Salt Lake City Utah",
    "construction roll-off dumpster Salt Lake City",
    "roll-off dumpster rental near me Salt Lake City",
    "Salt Lake City roll-off waste management",
    "roll-off dumpster delivery Salt Lake City",
    "Salt Lake City roll-off dumpster services",
    "roll-off dumpster rental Utah Salt Lake City",
    "roll-off construction waste disposal Salt Lake City",
    "roll-off home renovation dumpster Salt Lake City",
    "roll-off commercial dumpster rental Salt Lake City",
    "roll-off demolition dumpster Salt Lake City",
    "roll-off concrete disposal Salt Lake City"
  ],
  openGraph: {
    title: "Roll-Off Dumpster Rental Salt Lake City - Professional Services | Icon Dumpsters",
    description: "Professional roll-off dumpster rental services in Salt Lake City, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/roll-off-dumpster-rental-Salt Lake City",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/roll-off-dumpster-rental-Salt Lake City',
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
    'geo.placename': 'Salt Lake City, Utah',
    'geo.position': '40.7608;-111.8910',
    'ICBM': '40.7608, -111.8910',
  },
};

export default function SaltLakeCityDumpsterRentalPage() {
  const cityData = getCityData('salt-lake-city');
  const slcCityData = getSaltLakeCountyCity('salt-lake-city');
  
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