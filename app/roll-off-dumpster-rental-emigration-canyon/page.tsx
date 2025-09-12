import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Roll-Off Dumpster Rental Emigration Canyon - Professional Services | Icon Dumpsters",
  description: "Professional roll-off dumpster rental services in Emigration Canyon, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "roll-off dumpster rental Emigration Canyon",
    "Emigration Canyon roll-off dumpster rental",
    "roll-off dumpster Emigration Canyon Utah",
    "construction roll-off dumpster Emigration Canyon",
    "roll-off dumpster rental near me Emigration Canyon",
    "Emigration Canyon roll-off waste management",
    "roll-off dumpster delivery Emigration Canyon",
    "Emigration Canyon roll-off dumpster services",
    "roll-off dumpster rental Utah Emigration Canyon",
    "roll-off construction waste disposal Emigration Canyon",
    "roll-off home renovation dumpster Emigration Canyon",
    "roll-off commercial dumpster rental Emigration Canyon",
    "roll-off demolition dumpster Emigration Canyon",
    "roll-off concrete disposal Emigration Canyon"
  ],
  openGraph: {
    title: "Roll-Off Dumpster Rental Emigration Canyon - Professional Services | Icon Dumpsters",
    description: "Professional roll-off dumpster rental services in Emigration Canyon, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/roll-off-dumpster-rental-Emigration Canyon",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/roll-off-dumpster-rental-Emigration Canyon',
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
    'geo.placename': 'Emigration Canyon, Utah',
    'geo.position': '40.7500;-111.8000',
    'ICBM': '40.7500, -111.8000',
  },
};

export default function EmigrationCanyonDumpsterRentalPage() {
  const cityData = getCityData('emigration-canyon');
  const slcCityData = getSaltLakeCountyCity('emigration-canyon');
  
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