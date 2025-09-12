import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../../../components/EnhancedCityPageTemplate';
import { getCityData } from '../../../config/cityData';
import { getSaltLakeCountyCity } from '../../../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Utah Dumpster Rental Sandy - Professional Services | Icon Dumpsters",
  description: "Professional Utah dumpster rental services in Sandy. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "Utah dumpster rental Sandy",
    "dumpster rental Utah Sandy",
    "roll-off dumpster Utah Sandy",
    "construction dumpster Utah Sandy",
    "dumpster rental near me Sandy Utah",
    "Sandy Utah waste management",
    "dumpster delivery Utah Sandy",
    "Sandy Utah dumpster services",
    "Utah dumpster rental services",
    "Utah construction waste disposal Sandy",
    "Utah home renovation dumpster Sandy",
    "Utah commercial dumpster rental Sandy",
    "Utah demolition dumpster Sandy",
    "Utah concrete disposal Sandy"
  ],
  openGraph: {
    title: "Utah Dumpster Rental Sandy - Professional Services | Icon Dumpsters",
    description: "Professional Utah dumpster rental services in Sandy. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/utah-dumpster-rental-Sandy",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/utah-dumpster-rental-Sandy',
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