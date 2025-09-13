import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import { getSaltLakeCountyCity } from '../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Dumpster Rental Near Me Bluffdale - Local Services | Icon Dumpsters",
  description: "Find reliable dumpster rental near me in Bluffdale, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "dumpster rental near me Bluffdale",
    "Bluffdale dumpster rental near me",
    "dumpster rental near me Bluffdale Utah",
    "local dumpster rental Bluffdale",
    "dumpster rental near me Bluffdale Utah",
    "Bluffdale local dumpster services",
    "dumpster delivery near me Bluffdale",
    "Bluffdale nearby dumpster rental",
    "dumpster rental near me Utah Bluffdale",
    "local construction dumpster Bluffdale",
    "nearby home renovation dumpster Bluffdale",
    "local commercial dumpster rental Bluffdale",
    "dumpster rental near me demolition Bluffdale",
    "local concrete disposal Bluffdale",
    "closest dumpster rental Bluffdale",
    "dumpster rental near me same day Bluffdale"
  ],
  openGraph: {
    title: "Dumpster Rental Near Me Bluffdale - Local Services | Icon Dumpsters",
    description: "Find reliable dumpster rental near me in Bluffdale, Utah. Local same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/dumpster-rental-near-me-bluffdale-ut",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/dumpster-rental-near-me-bluffdale-ut',
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

// Generated with randomization seed: 766 at 1757646733821
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