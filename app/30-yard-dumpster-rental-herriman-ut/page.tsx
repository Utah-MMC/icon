import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../../../components/EnhancedCityPageTemplate';
import { getCityData } from '../../../config/cityData';
import { getSaltLakeCountyCity } from '../../../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "30 Yard Dumpster Rental Herriman - Professional Services | Icon Dumpsters",
  description: "Professional 30 yard dumpster rental services in Herriman, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000.",
  keywords: [
    "30 yard dumpster rental Herriman",
    "Herriman 30 yard dumpster rental",
    "30 yard dumpster Herriman Utah",
    "construction 30 yard dumpster Herriman",
    "30 yard dumpster rental near me Herriman",
    "Herriman 30 yard waste management",
    "30 yard dumpster delivery Herriman",
    "Herriman 30 yard dumpster services",
    "30 yard dumpster rental Utah Herriman",
    "30 yard construction waste disposal Herriman",
    "30 yard home renovation dumpster Herriman",
    "30 yard commercial dumpster rental Herriman",
    "30 yard demolition dumpster Herriman",
    "30 yard concrete disposal Herriman",
    "large dumpster rental Herriman",
    "big dumpster rental Herriman"
  ],
  openGraph: {
    title: "30 Yard Dumpster Rental Herriman - Professional Services | Icon Dumpsters",
    description: "Professional 30 yard dumpster rental services in Herriman, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000.",
    url: "https://icondumpsters.com/30-yard-dumpster-rental-Herriman-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/30-yard-dumpster-rental-Herriman-ut',
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
  const cityData = getCityData('herriman');
  const slcCityData = getSaltLakeCountyCity('herriman');
  
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