import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Herriman Dumpster Rental - Professional Services in Herriman, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Herriman, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental Herriman",
    "Herriman dumpster rental",
    "roll-off dumpster Herriman",
    "construction dumpster Herriman",
    "dumpster rental near me Herriman",
    "Herriman waste management",
    "dumpster delivery Herriman",
    "Herriman dumpster services"
  ],
  openGraph: {
    title: "Herriman Dumpster Rental - Professional Services | Icon Dumpsters",
    description: "Professional dumpster rental services in Herriman, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    url: "https://icondumpsters.com/slc-dumpster-rental-herriman-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/slc-dumpster-rental-herriman-ut',
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
  const cityData = getCityData('');
  const slcCityData = getSaltLakeCountyCity('');
  
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



