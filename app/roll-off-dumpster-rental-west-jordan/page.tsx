import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../../../components/EnhancedCityPageTemplate';
import { getCityData } from '../../../config/cityData';
import { getSaltLakeCountyCity } from '../../../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Roll-Off Dumpster Rental West Jordan - Professional Services | Icon Dumpsters",
  description: "Professional roll-off dumpster rental services in West Jordan, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "roll-off dumpster rental West Jordan",
    "West Jordan roll-off dumpster rental",
    "roll-off dumpster West Jordan Utah",
    "construction roll-off dumpster West Jordan",
    "roll-off dumpster rental near me West Jordan",
    "West Jordan roll-off waste management",
    "roll-off dumpster delivery West Jordan",
    "West Jordan roll-off dumpster services",
    "roll-off dumpster rental Utah West Jordan",
    "roll-off construction waste disposal West Jordan",
    "roll-off home renovation dumpster West Jordan",
    "roll-off commercial dumpster rental West Jordan",
    "roll-off demolition dumpster West Jordan",
    "roll-off concrete disposal West Jordan"
  ],
  openGraph: {
    title: "Roll-Off Dumpster Rental West Jordan - Professional Services | Icon Dumpsters",
    description: "Professional roll-off dumpster rental services in West Jordan, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/roll-off-dumpster-rental-West Jordan",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/roll-off-dumpster-rental-West Jordan',
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