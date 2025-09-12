import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../../../components/EnhancedCityPageTemplate';
import { getCityData } from '../../../config/cityData';
import { getSaltLakeCountyCity } from '../../../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Utah Dumpster Rental Holladay - Professional Services | Icon Dumpsters",
  description: "Professional Utah dumpster rental services in Holladay. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "Utah dumpster rental Holladay",
    "dumpster rental Utah Holladay",
    "roll-off dumpster Utah Holladay",
    "construction dumpster Utah Holladay",
    "dumpster rental near me Holladay Utah",
    "Holladay Utah waste management",
    "dumpster delivery Utah Holladay",
    "Holladay Utah dumpster services",
    "Utah dumpster rental services",
    "Utah construction waste disposal Holladay",
    "Utah home renovation dumpster Holladay",
    "Utah commercial dumpster rental Holladay",
    "Utah demolition dumpster Holladay",
    "Utah concrete disposal Holladay"
  ],
  openGraph: {
    title: "Utah Dumpster Rental Holladay - Professional Services | Icon Dumpsters",
    description: "Professional Utah dumpster rental services in Holladay. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/utah-dumpster-rental-Holladay",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/utah-dumpster-rental-Holladay',
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