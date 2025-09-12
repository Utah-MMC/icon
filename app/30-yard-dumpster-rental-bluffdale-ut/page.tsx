import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../../../components/EnhancedCityPageTemplate';
import { getCityData } from '../../../config/cityData';
import { getSaltLakeCountyCity } from '../../../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "30 Yard Dumpster Rental Bluffdale - Professional Services | Icon Dumpsters",
  description: "Professional 30 yard dumpster rental services in Bluffdale, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000.",
  keywords: [
    "30 yard dumpster rental Bluffdale",
    "Bluffdale 30 yard dumpster rental",
    "30 yard dumpster Bluffdale Utah",
    "construction 30 yard dumpster Bluffdale",
    "30 yard dumpster rental near me Bluffdale",
    "Bluffdale 30 yard waste management",
    "30 yard dumpster delivery Bluffdale",
    "Bluffdale 30 yard dumpster services",
    "30 yard dumpster rental Utah Bluffdale",
    "30 yard construction waste disposal Bluffdale",
    "30 yard home renovation dumpster Bluffdale",
    "30 yard commercial dumpster rental Bluffdale",
    "30 yard demolition dumpster Bluffdale",
    "30 yard concrete disposal Bluffdale",
    "large dumpster rental Bluffdale",
    "big dumpster rental Bluffdale"
  ],
  openGraph: {
    title: "30 Yard Dumpster Rental Bluffdale - Professional Services | Icon Dumpsters",
    description: "Professional 30 yard dumpster rental services in Bluffdale, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000.",
    url: "https://icondumpsters.com/30-yard-dumpster-rental-Bluffdale-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/30-yard-dumpster-rental-Bluffdale-ut',
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
    'geo.placename': 'Bluffdale, Utah',
    'geo.position': '40.4847;-111.9389',
    'ICBM': '40.4847, -111.9389',
  },
};

export default function BluffdaleDumpsterRentalPage() {
  const cityData = getCityData('bluffdale');
  const slcCityData = getSaltLakeCountyCity('bluffdale');
  
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