import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "30 Yard Dumpster Rental Magna - Professional Services | Icon Dumpsters",
  description: "Professional 30 yard dumpster rental services in Magna, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
  keywords: [
    "30 yard dumpster rental Magna",
    "Magna 30 yard dumpster rental",
    "30 yard dumpster Magna Utah",
    "construction 30 yard dumpster Magna",
    "30 yard dumpster rental near me Magna",
    "Magna 30 yard waste management",
    "30 yard dumpster delivery Magna",
    "Magna 30 yard dumpster services",
    "30 yard dumpster rental Utah Magna",
    "30 yard construction waste disposal Magna",
    "30 yard home renovation dumpster Magna",
    "30 yard commercial dumpster rental Magna",
    "30 yard demolition dumpster Magna",
    "30 yard concrete disposal Magna",
    "large dumpster rental Magna",
    "big dumpster rental Magna"
  ],
  openGraph: {
    title: "30 Yard Dumpster Rental Magna - Professional Services | Icon Dumpsters",
    description: "Professional 30 yard dumpster rental services in Magna, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    url: "https://icondumpsters.com/30-yard-dumpster-rental-magna-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/30-yard-dumpster-rental-magna-ut',
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
    'geo.placename': 'Magna, Utah',
    'geo.position': '40.7089;-112.1014',
    'ICBM': '40.7089, -112.1014',
  },
};

export default function MagnaDumpsterRentalPage() {
  const cityData = getCityData('magna');
  const slcCityData = getSaltLakeCountyCity('magna');
  
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