import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "30 Yard Dumpster Rental Holladay - Professional Services | Icon Dumpsters",
  description: "Professional 30 yard dumpster rental services in Holladay, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
  keywords: [
    "30 yard dumpster rental Holladay",
    "Holladay 30 yard dumpster rental",
    "30 yard dumpster Holladay Utah",
    "construction 30 yard dumpster Holladay",
    "30 yard dumpster rental near me Holladay",
    "Holladay 30 yard waste management",
    "30 yard dumpster delivery Holladay",
    "Holladay 30 yard dumpster services",
    "30 yard dumpster rental Utah Holladay",
    "30 yard construction waste disposal Holladay",
    "30 yard home renovation dumpster Holladay",
    "30 yard commercial dumpster rental Holladay",
    "30 yard demolition dumpster Holladay",
    "30 yard concrete disposal Holladay",
    "large dumpster rental Holladay",
    "big dumpster rental Holladay"
  ],
  openGraph: {
    title: "30 Yard Dumpster Rental Holladay - Professional Services | Icon Dumpsters",
    description: "Professional 30 yard dumpster rental services in Holladay, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    url: "https://icondumpsters.com/30-yard-dumpster-rental-holladay-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/30-yard-dumpster-rental-holladay-ut',
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