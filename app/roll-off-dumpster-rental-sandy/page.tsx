import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Roll-Off Dumpster Rental Sandy - Professional Services | Icon Dumpsters",
  description: "Professional roll-off dumpster rental services in Sandy, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "roll-off dumpster rental Sandy",
    "Sandy roll-off dumpster rental",
    "roll-off dumpster Sandy Utah",
    "construction roll-off dumpster Sandy",
    "roll-off dumpster rental near me Sandy",
    "Sandy roll-off waste management",
    "roll-off dumpster delivery Sandy",
    "Sandy roll-off dumpster services",
    "roll-off dumpster rental Utah Sandy",
    "roll-off construction waste disposal Sandy",
    "roll-off home renovation dumpster Sandy",
    "roll-off commercial dumpster rental Sandy",
    "roll-off demolition dumpster Sandy",
    "roll-off concrete disposal Sandy"
  ],
  openGraph: {
    title: "Roll-Off Dumpster Rental Sandy - Professional Services | Icon Dumpsters",
    description: "Professional roll-off dumpster rental services in Sandy, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/roll-off-dumpster-rental-Sandy",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/roll-off-dumpster-rental-Sandy',
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
    'geo.placename': 'Sandy, Utah',
    'geo.position': '40.5649;-111.8381',
    'ICBM': '40.5649, -111.8381',
  },
};

export default function SandyDumpsterRentalPage() {
  const cityData = getCityData('sandy');
  const slcCityData = getSaltLakeCountyCity('sandy');
  
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