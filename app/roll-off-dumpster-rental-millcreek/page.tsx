import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Roll-Off Dumpster Rental Millcreek - Professional Services | Icon Dumpsters",
  description: "Professional roll-off dumpster rental services in Millcreek, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
  keywords: [
    "roll-off dumpster rental Millcreek",
    "Millcreek roll-off dumpster rental",
    "roll-off dumpster Millcreek Utah",
    "construction roll-off dumpster Millcreek",
    "roll-off dumpster rental near me Millcreek",
    "Millcreek roll-off waste management",
    "roll-off dumpster delivery Millcreek",
    "Millcreek roll-off dumpster services",
    "roll-off dumpster rental Utah Millcreek",
    "roll-off construction waste disposal Millcreek",
    "roll-off home renovation dumpster Millcreek",
    "roll-off commercial dumpster rental Millcreek",
    "roll-off demolition dumpster Millcreek",
    "roll-off concrete disposal Millcreek"
  ],
  openGraph: {
    title: "Roll-Off Dumpster Rental Millcreek - Professional Services | Icon Dumpsters",
    description: "Professional roll-off dumpster rental services in Millcreek, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    url: "https://icondumpsters.com/roll-off-dumpster-rental-millcreek",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/roll-off-dumpster-rental-millcreek',
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
    'geo.placename': 'Millcreek, Utah',
    'geo.position': '40.6869;-111.8750',
    'ICBM': '40.6869, -111.8750',
  },
};

export default function MillcreekDumpsterRentalPage() {
  const cityData = getCityData('millcreek');
  const slcCityData = getSaltLakeCountyCity('millcreek');
  
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