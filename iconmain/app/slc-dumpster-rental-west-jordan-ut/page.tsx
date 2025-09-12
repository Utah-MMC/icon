import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "West Jordan Dumpster Rental - Professional Services in West Jordan, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in West Jordan, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental West Jordan",
    "West Jordan dumpster rental",
    "roll-off dumpster West Jordan",
    "construction dumpster West Jordan",
    "dumpster rental near me West Jordan",
    "West Jordan waste management",
    "dumpster delivery West Jordan",
    "West Jordan dumpster services"
  ],
  openGraph: {
    title: "West Jordan Dumpster Rental - Professional Services | Icon Dumpsters",
    description: "Professional dumpster rental services in West Jordan, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    url: "https://icondumpsters.com/slc-dumpster-rental-west-jordan-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/slc-dumpster-rental-west-jordan-ut',
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
    'geo.placename': 'West Jordan, Utah',
    'geo.position': '40.6097;-111.9391',
    'ICBM': '40.6097, -111.9391',
  },
};

export default function WestJordanDumpsterRentalPage() {
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



