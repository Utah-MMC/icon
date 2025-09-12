import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Roll-Off Dumpster Rental South Salt Lake - Professional Services | Icon Dumpsters",
  description: "Professional roll-off dumpster rental services in South Salt Lake, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "roll-off dumpster rental South Salt Lake",
    "South Salt Lake roll-off dumpster rental",
    "roll-off dumpster South Salt Lake Utah",
    "construction roll-off dumpster South Salt Lake",
    "roll-off dumpster rental near me South Salt Lake",
    "South Salt Lake roll-off waste management",
    "roll-off dumpster delivery South Salt Lake",
    "South Salt Lake roll-off dumpster services",
    "roll-off dumpster rental Utah South Salt Lake",
    "roll-off construction waste disposal South Salt Lake",
    "roll-off home renovation dumpster South Salt Lake",
    "roll-off commercial dumpster rental South Salt Lake",
    "roll-off demolition dumpster South Salt Lake",
    "roll-off concrete disposal South Salt Lake"
  ],
  openGraph: {
    title: "Roll-Off Dumpster Rental South Salt Lake - Professional Services | Icon Dumpsters",
    description: "Professional roll-off dumpster rental services in South Salt Lake, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/roll-off-dumpster-rental-South Salt Lake",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/roll-off-dumpster-rental-South Salt Lake',
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
    'geo.placename': 'South Salt Lake, Utah',
    'geo.position': '40.7089;-111.8881',
    'ICBM': '40.7089, -111.8881',
  },
};

export default function SouthSaltLakeDumpsterRentalPage() {
  const cityData = getCityData('south-salt-lake');
  const slcCityData = getSaltLakeCountyCity('south-salt-lake');
  
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