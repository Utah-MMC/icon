import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../../../components/EnhancedCityPageTemplate';
import { getCityData } from '../../../config/cityData';
import { getSaltLakeCountyCity } from '../../../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Utah Dumpster Rental Salt Lake City - Professional Services | Icon Dumpsters",
  description: "Professional Utah dumpster rental services in Salt Lake City. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "Utah dumpster rental Salt Lake City",
    "dumpster rental Utah Salt Lake City",
    "roll-off dumpster Utah Salt Lake City",
    "construction dumpster Utah Salt Lake City",
    "dumpster rental near me Salt Lake City Utah",
    "Salt Lake City Utah waste management",
    "dumpster delivery Utah Salt Lake City",
    "Salt Lake City Utah dumpster services",
    "Utah dumpster rental services",
    "Utah construction waste disposal Salt Lake City",
    "Utah home renovation dumpster Salt Lake City",
    "Utah commercial dumpster rental Salt Lake City",
    "Utah demolition dumpster Salt Lake City",
    "Utah concrete disposal Salt Lake City"
  ],
  openGraph: {
    title: "Utah Dumpster Rental Salt Lake City - Professional Services | Icon Dumpsters",
    description: "Professional Utah dumpster rental services in Salt Lake City. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/utah-dumpster-rental-Salt Lake City",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/utah-dumpster-rental-Salt Lake City',
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