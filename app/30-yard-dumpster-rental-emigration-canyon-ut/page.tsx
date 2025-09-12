import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../../../components/EnhancedCityPageTemplate';
import { getCityData } from '../../../config/cityData';
import { getSaltLakeCountyCity } from '../../../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "30 Yard Dumpster Rental Emigration Canyon - Professional Services | Icon Dumpsters",
  description: "Professional 30 yard dumpster rental services in Emigration Canyon, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000.",
  keywords: [
    "30 yard dumpster rental Emigration Canyon",
    "Emigration Canyon 30 yard dumpster rental",
    "30 yard dumpster Emigration Canyon Utah",
    "construction 30 yard dumpster Emigration Canyon",
    "30 yard dumpster rental near me Emigration Canyon",
    "Emigration Canyon 30 yard waste management",
    "30 yard dumpster delivery Emigration Canyon",
    "Emigration Canyon 30 yard dumpster services",
    "30 yard dumpster rental Utah Emigration Canyon",
    "30 yard construction waste disposal Emigration Canyon",
    "30 yard home renovation dumpster Emigration Canyon",
    "30 yard commercial dumpster rental Emigration Canyon",
    "30 yard demolition dumpster Emigration Canyon",
    "30 yard concrete disposal Emigration Canyon",
    "large dumpster rental Emigration Canyon",
    "big dumpster rental Emigration Canyon"
  ],
  openGraph: {
    title: "30 Yard Dumpster Rental Emigration Canyon - Professional Services | Icon Dumpsters",
    description: "Professional 30 yard dumpster rental services in Emigration Canyon, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000.",
    url: "https://icondumpsters.com/30-yard-dumpster-rental-Emigration Canyon-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/30-yard-dumpster-rental-Emigration Canyon-ut',
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