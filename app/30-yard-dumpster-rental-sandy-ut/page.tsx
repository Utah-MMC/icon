import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "30 Yard Dumpster Rental Sandy - Professional Services | Icon Dumpsters",
  description: "Professional 30 yard dumpster rental services in Sandy, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000.",
  keywords: [
    "30 yard dumpster rental Sandy",
    "Sandy 30 yard dumpster rental",
    "30 yard dumpster Sandy Utah",
    "construction 30 yard dumpster Sandy",
    "30 yard dumpster rental near me Sandy",
    "Sandy 30 yard waste management",
    "30 yard dumpster delivery Sandy",
    "Sandy 30 yard dumpster services",
    "30 yard dumpster rental Utah Sandy",
    "30 yard construction waste disposal Sandy",
    "30 yard home renovation dumpster Sandy",
    "30 yard commercial dumpster rental Sandy",
    "30 yard demolition dumpster Sandy",
    "30 yard concrete disposal Sandy",
    "large dumpster rental Sandy",
    "big dumpster rental Sandy"
  ],
  openGraph: {
    title: "30 Yard Dumpster Rental Sandy - Professional Services | Icon Dumpsters",
    description: "Professional 30 yard dumpster rental services in Sandy, Utah. Same-day delivery, competitive pricing, and excellent customer service. Perfect for large construction projects and home renovations. Call (801) 918-6000.",
    url: "https://icondumpsters.com/30-yard-dumpster-rental-Sandy-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/30-yard-dumpster-rental-Sandy-ut',
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
    'geo.placename': 'Sandy, Utah',
    'geo.position': '40.5649;-111.8381',
    'ICBM': '40.5649, -111.8381',
  },
};

export default function SandyDumpsterRentalPage() {
  const cityData = getCityData('sandy');
  const slcCityData = getSaltLakeCountyCity('sandy');
  
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