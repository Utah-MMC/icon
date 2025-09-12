import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Holladay Dumpster Rental - Professional Services in Holladay, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Holladay, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental Holladay",
    "Holladay dumpster rental",
    "roll-off dumpster Holladay",
    "construction dumpster Holladay",
    "dumpster rental near me Holladay",
    "Holladay waste management",
    "dumpster delivery Holladay",
    "Holladay dumpster services",
    "Salt Lake County dumpster rental",
    "Utah dumpster rental Holladay",
    "construction waste disposal Holladay",
    "home renovation dumpster Holladay",
    "commercial dumpster rental Holladay",
    "demolition dumpster Holladay",
    "concrete disposal Holladay"
  ],
  openGraph: {
    title: "Holladay Dumpster Rental - Professional Services in Holladay, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Holladay, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/slc-dumpster-rental-Holladay-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/slc-dumpster-rental-Holladay-ut',
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