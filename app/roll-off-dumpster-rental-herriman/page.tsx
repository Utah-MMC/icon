import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Roll-Off Dumpster Rental Herriman - Professional Services | Icon Dumpsters",
  description: "Professional roll-off dumpster rental services in Herriman, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "roll-off dumpster rental Herriman",
    "Herriman roll-off dumpster rental",
    "roll-off dumpster Herriman Utah",
    "construction roll-off dumpster Herriman",
    "roll-off dumpster rental near me Herriman",
    "Herriman roll-off waste management",
    "roll-off dumpster delivery Herriman",
    "Herriman roll-off dumpster services",
    "roll-off dumpster rental Utah Herriman",
    "roll-off construction waste disposal Herriman",
    "roll-off home renovation dumpster Herriman",
    "roll-off commercial dumpster rental Herriman",
    "roll-off demolition dumpster Herriman",
    "roll-off concrete disposal Herriman"
  ],
  openGraph: {
    title: "Roll-Off Dumpster Rental Herriman - Professional Services | Icon Dumpsters",
    description: "Professional roll-off dumpster rental services in Herriman, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/roll-off-dumpster-rental-Herriman",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/roll-off-dumpster-rental-Herriman',
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
    'geo.placename': 'Herriman, Utah',
    'geo.position': '40.5141;-112.0329',
    'ICBM': '40.5141, -112.0329',
  },
};

export default function HerrimanDumpsterRentalPage() {
  const cityData = getCityData('herriman');
  const slcCityData = getSaltLakeCountyCity('herriman');
  
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