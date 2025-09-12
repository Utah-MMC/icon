import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Utah Dumpster Rental Bluffdale - Professional Services | Icon Dumpsters",
  description: "Professional Utah dumpster rental services in Bluffdale. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "Utah dumpster rental Bluffdale",
    "dumpster rental Utah Bluffdale",
    "roll-off dumpster Utah Bluffdale",
    "construction dumpster Utah Bluffdale",
    "dumpster rental near me Bluffdale Utah",
    "Bluffdale Utah waste management",
    "dumpster delivery Utah Bluffdale",
    "Bluffdale Utah dumpster services",
    "Utah dumpster rental services",
    "Utah construction waste disposal Bluffdale",
    "Utah home renovation dumpster Bluffdale",
    "Utah commercial dumpster rental Bluffdale",
    "Utah demolition dumpster Bluffdale",
    "Utah concrete disposal Bluffdale"
  ],
  openGraph: {
    title: "Utah Dumpster Rental Bluffdale - Professional Services | Icon Dumpsters",
    description: "Professional Utah dumpster rental services in Bluffdale. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/utah-dumpster-rental-Bluffdale",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/utah-dumpster-rental-Bluffdale',
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