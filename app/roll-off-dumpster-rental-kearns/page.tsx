import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../../../components/EnhancedCityPageTemplate';
import { getCityData } from '../../../config/cityData';
import { getSaltLakeCountyCity } from '../../../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Roll-Off Dumpster Rental Kearns - Professional Services | Icon Dumpsters",
  description: "Professional roll-off dumpster rental services in Kearns, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "roll-off dumpster rental Kearns",
    "Kearns roll-off dumpster rental",
    "roll-off dumpster Kearns Utah",
    "construction roll-off dumpster Kearns",
    "roll-off dumpster rental near me Kearns",
    "Kearns roll-off waste management",
    "roll-off dumpster delivery Kearns",
    "Kearns roll-off dumpster services",
    "roll-off dumpster rental Utah Kearns",
    "roll-off construction waste disposal Kearns",
    "roll-off home renovation dumpster Kearns",
    "roll-off commercial dumpster rental Kearns",
    "roll-off demolition dumpster Kearns",
    "roll-off concrete disposal Kearns"
  ],
  openGraph: {
    title: "Roll-Off Dumpster Rental Kearns - Professional Services | Icon Dumpsters",
    description: "Professional roll-off dumpster rental services in Kearns, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/roll-off-dumpster-rental-Kearns",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/roll-off-dumpster-rental-Kearns',
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
    'geo.placename': 'Kearns, Utah',
    'geo.position': '40.6597;-111.9969',
    'ICBM': '40.6597, -111.9969',
  },
};

export default function KearnsDumpsterRentalPage() {
  const cityData = getCityData('kearns');
  const slcCityData = getSaltLakeCountyCity('kearns');
  
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