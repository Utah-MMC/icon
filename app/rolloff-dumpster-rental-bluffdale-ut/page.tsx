import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Rolloff Dumpster Rental Bluffdale - Professional Services | Icon Dumpsters",
  description: "Professional rolloff dumpster rental services in Bluffdale, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
  keywords: [
    "rolloff dumpster rental Bluffdale",
    "Bluffdale rolloff dumpster rental",
    "rolloff dumpster Bluffdale Utah",
    "construction rolloff dumpster Bluffdale",
    "rolloff dumpster rental near me Bluffdale",
    "Bluffdale rolloff waste management",
    "rolloff dumpster delivery Bluffdale",
    "Bluffdale rolloff dumpster services",
    "rolloff dumpster rental Utah Bluffdale",
    "rolloff construction waste disposal Bluffdale",
    "rolloff home renovation dumpster Bluffdale",
    "rolloff commercial dumpster rental Bluffdale",
    "rolloff demolition dumpster Bluffdale",
    "rolloff concrete disposal Bluffdale",
    "rolloff container rental Bluffdale",
    "rolloff bin rental Bluffdale"
  ],
  openGraph: {
    title: "Rolloff Dumpster Rental Bluffdale - Professional Services | Icon Dumpsters",
    description: "Professional rolloff dumpster rental services in Bluffdale, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    url: "https://icondumpsters.com/rolloff-dumpster-rental-bluffdale-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/rolloff-dumpster-rental-bluffdale-ut',
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

// Generated with randomization seed: 1012 at 1757646733701
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