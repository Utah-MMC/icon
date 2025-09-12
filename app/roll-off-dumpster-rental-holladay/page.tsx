import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../../../components/EnhancedCityPageTemplate';
import { getCityData } from '../../../config/cityData';
import { getSaltLakeCountyCity } from '../../../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Roll-Off Dumpster Rental Holladay - Professional Services | Icon Dumpsters",
  description: "Professional roll-off dumpster rental services in Holladay, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "roll-off dumpster rental Holladay",
    "Holladay roll-off dumpster rental",
    "roll-off dumpster Holladay Utah",
    "construction roll-off dumpster Holladay",
    "roll-off dumpster rental near me Holladay",
    "Holladay roll-off waste management",
    "roll-off dumpster delivery Holladay",
    "Holladay roll-off dumpster services",
    "roll-off dumpster rental Utah Holladay",
    "roll-off construction waste disposal Holladay",
    "roll-off home renovation dumpster Holladay",
    "roll-off commercial dumpster rental Holladay",
    "roll-off demolition dumpster Holladay",
    "roll-off concrete disposal Holladay"
  ],
  openGraph: {
    title: "Roll-Off Dumpster Rental Holladay - Professional Services | Icon Dumpsters",
    description: "Professional roll-off dumpster rental services in Holladay, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/roll-off-dumpster-rental-Holladay",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/roll-off-dumpster-rental-Holladay',
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
    'geo.placename': 'Holladay, Utah',
    'geo.position': '40.6689;-111.8247',
    'ICBM': '40.6689, -111.8247',
  },
};

export default function HolladayDumpsterRentalPage() {
  const cityData = getCityData('holladay');
  const slcCityData = getSaltLakeCountyCity('holladay');
  
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