import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "30 Yard Dumpster Rental West Valley City - Professional Services | Icon Dumpsters",
  description: "Professional 30 yard dumpster rental services in West Valley City, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000.",
  keywords: [
    "30 yard dumpster rental West Valley City",
    "West Valley City 30 yard dumpster rental",
    "30 yard dumpster West Valley City Utah",
    "construction 30 yard dumpster West Valley City",
    "30 yard dumpster rental near me West Valley City",
    "West Valley City 30 yard waste management",
    "30 yard dumpster delivery West Valley City",
    "West Valley City 30 yard dumpster services",
    "30 yard dumpster rental Utah West Valley City",
    "30 yard construction waste disposal West Valley City",
    "30 yard home renovation dumpster West Valley City",
    "30 yard commercial dumpster rental West Valley City",
    "30 yard demolition dumpster West Valley City",
    "30 yard concrete disposal West Valley City",
    "large dumpster rental West Valley City",
    "big dumpster rental West Valley City"
  ],
  openGraph: {
    title: "30 Yard Dumpster Rental West Valley City - Professional Services | Icon Dumpsters",
    description: "Professional 30 yard dumpster rental services in West Valley City, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000.",
    url: "https://icondumpsters.com/30-yard-dumpster-rental-West Valley City-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/30-yard-dumpster-rental-West Valley City-ut',
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
    'geo.placename': 'West Valley City, Utah',
    'geo.position': '40.6916;-111.9931',
    'ICBM': '40.6916, -111.9931',
  },
};

export default function WestValleyCityDumpsterRentalPage() {
  const cityData = getCityData('west-valley-city');
  const slcCityData = getSaltLakeCountyCity('west-valley-city');
  
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