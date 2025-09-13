import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Roll-Off Dumpster Rental Magna - Professional Services | Icon Dumpsters",
  description: "Professional roll-off dumpster rental services in Magna, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "roll-off dumpster rental Magna",
    "Magna roll-off dumpster rental",
    "roll-off dumpster Magna Utah",
    "construction roll-off dumpster Magna",
    "roll-off dumpster rental near me Magna",
    "Magna roll-off waste management",
    "roll-off dumpster delivery Magna",
    "Magna roll-off dumpster services",
    "roll-off dumpster rental Utah Magna",
    "roll-off construction waste disposal Magna",
    "roll-off home renovation dumpster Magna",
    "roll-off commercial dumpster rental Magna",
    "roll-off demolition dumpster Magna",
    "roll-off concrete disposal Magna"
  ],
  openGraph: {
    title: "Roll-Off Dumpster Rental Magna - Professional Services | Icon Dumpsters",
    description: "Professional roll-off dumpster rental services in Magna, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/roll-off-dumpster-rental-magna",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/roll-off-dumpster-rental-magna',
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
    'geo.placename': 'Magna, Utah',
    'geo.position': '40.7089;-112.1014',
    'ICBM': '40.7089, -112.1014',
  },
};

export default function MagnaDumpsterRentalPage() {
  const cityData = getCityData('magna');
  const slcCityData = getSaltLakeCountyCity('magna');
  
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