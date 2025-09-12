import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../../../components/EnhancedCityPageTemplate';
import { getCityData } from '../../../config/cityData';
import { getSaltLakeCountyCity } from '../../../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Emigration Canyon Dumpster Rental - Professional Services in Emigration Canyon, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Emigration Canyon, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental Emigration Canyon",
    "Emigration Canyon dumpster rental",
    "roll-off dumpster Emigration Canyon",
    "construction dumpster Emigration Canyon",
    "dumpster rental near me Emigration Canyon",
    "Emigration Canyon waste management",
    "dumpster delivery Emigration Canyon",
    "Emigration Canyon dumpster services",
    "Salt Lake County dumpster rental",
    "Utah dumpster rental Emigration Canyon",
    "construction waste disposal Emigration Canyon",
    "home renovation dumpster Emigration Canyon",
    "commercial dumpster rental Emigration Canyon",
    "demolition dumpster Emigration Canyon",
    "concrete disposal Emigration Canyon"
  ],
  openGraph: {
    title: "Emigration Canyon Dumpster Rental - Professional Services in Emigration Canyon, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Emigration Canyon, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/slc-dumpster-rental-Emigration Canyon-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/slc-dumpster-rental-Emigration Canyon-ut',
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