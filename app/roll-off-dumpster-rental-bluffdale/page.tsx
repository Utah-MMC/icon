import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../../../components/EnhancedCityPageTemplate';
import { getCityData } from '../../../config/cityData';
import { getSaltLakeCountyCity } from '../../../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Roll-Off Dumpster Rental Bluffdale - Professional Services | Icon Dumpsters",
  description: "Professional roll-off dumpster rental services in Bluffdale, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "roll-off dumpster rental Bluffdale",
    "Bluffdale roll-off dumpster rental",
    "roll-off dumpster Bluffdale Utah",
    "construction roll-off dumpster Bluffdale",
    "roll-off dumpster rental near me Bluffdale",
    "Bluffdale roll-off waste management",
    "roll-off dumpster delivery Bluffdale",
    "Bluffdale roll-off dumpster services",
    "roll-off dumpster rental Utah Bluffdale",
    "roll-off construction waste disposal Bluffdale",
    "roll-off home renovation dumpster Bluffdale",
    "roll-off commercial dumpster rental Bluffdale",
    "roll-off demolition dumpster Bluffdale",
    "roll-off concrete disposal Bluffdale"
  ],
  openGraph: {
    title: "Roll-Off Dumpster Rental Bluffdale - Professional Services | Icon Dumpsters",
    description: "Professional roll-off dumpster rental services in Bluffdale, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/roll-off-dumpster-rental-Bluffdale",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/roll-off-dumpster-rental-Bluffdale',
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