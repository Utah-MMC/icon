import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Roll-Off Dumpster Rental Taylorsville - Professional Services | Icon Dumpsters",
  description: "Professional roll-off dumpster rental services in Taylorsville, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "roll-off dumpster rental Taylorsville",
    "Taylorsville roll-off dumpster rental",
    "roll-off dumpster Taylorsville Utah",
    "construction roll-off dumpster Taylorsville",
    "roll-off dumpster rental near me Taylorsville",
    "Taylorsville roll-off waste management",
    "roll-off dumpster delivery Taylorsville",
    "Taylorsville roll-off dumpster services",
    "roll-off dumpster rental Utah Taylorsville",
    "roll-off construction waste disposal Taylorsville",
    "roll-off home renovation dumpster Taylorsville",
    "roll-off commercial dumpster rental Taylorsville",
    "roll-off demolition dumpster Taylorsville",
    "roll-off concrete disposal Taylorsville"
  ],
  openGraph: {
    title: "Roll-Off Dumpster Rental Taylorsville - Professional Services | Icon Dumpsters",
    description: "Professional roll-off dumpster rental services in Taylorsville, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/roll-off-dumpster-rental-Taylorsville",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/roll-off-dumpster-rental-Taylorsville',
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
    'geo.placename': 'Taylorsville, Utah',
    'geo.position': '40.6677;-111.9388',
    'ICBM': '40.6677, -111.9388',
  },
};

export default function TaylorsvilleDumpsterRentalPage() {
  const cityData = getCityData('taylorsville');
  const slcCityData = getSaltLakeCountyCity('taylorsville');
  
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