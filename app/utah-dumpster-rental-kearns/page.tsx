import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Utah Dumpster Rental Kearns - Professional Services | Icon Dumpsters",
  description: "Professional Utah dumpster rental services in Kearns. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "Utah dumpster rental Kearns",
    "dumpster rental Utah Kearns",
    "roll-off dumpster Utah Kearns",
    "construction dumpster Utah Kearns",
    "dumpster rental near me Kearns Utah",
    "Kearns Utah waste management",
    "dumpster delivery Utah Kearns",
    "Kearns Utah dumpster services",
    "Utah dumpster rental services",
    "Utah construction waste disposal Kearns",
    "Utah home renovation dumpster Kearns",
    "Utah commercial dumpster rental Kearns",
    "Utah demolition dumpster Kearns",
    "Utah concrete disposal Kearns"
  ],
  openGraph: {
    title: "Utah Dumpster Rental Kearns - Professional Services | Icon Dumpsters",
    description: "Professional Utah dumpster rental services in Kearns. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/utah-dumpster-rental-Kearns",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/utah-dumpster-rental-Kearns',
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
    'geo.placename': 'Kearns, Utah',
    'geo.position': '40.6597;-111.9969',
    'ICBM': '40.6597, -111.9969',
  },
};

export default function KearnsDumpsterRentalPage() {
  const cityData = getCityData('kearns');
  const slcCityData = getSaltLakeCountyCity('kearns');
  
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