import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../../../components/EnhancedCityPageTemplate';
import { getCityData } from '../../../config/cityData';
import { getSaltLakeCountyCity } from '../../../config/saltLakeCountyCities';

export const metadata: Metadata = {
  title: "Utah Dumpster Rental Emigration Canyon - Professional Services | Icon Dumpsters",
  description: "Professional Utah dumpster rental services in Emigration Canyon. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: [
    "Utah dumpster rental Emigration Canyon",
    "dumpster rental Utah Emigration Canyon",
    "roll-off dumpster Utah Emigration Canyon",
    "construction dumpster Utah Emigration Canyon",
    "dumpster rental near me Emigration Canyon Utah",
    "Emigration Canyon Utah waste management",
    "dumpster delivery Utah Emigration Canyon",
    "Emigration Canyon Utah dumpster services",
    "Utah dumpster rental services",
    "Utah construction waste disposal Emigration Canyon",
    "Utah home renovation dumpster Emigration Canyon",
    "Utah commercial dumpster rental Emigration Canyon",
    "Utah demolition dumpster Emigration Canyon",
    "Utah concrete disposal Emigration Canyon"
  ],
  openGraph: {
    title: "Utah Dumpster Rental Emigration Canyon - Professional Services | Icon Dumpsters",
    description: "Professional Utah dumpster rental services in Emigration Canyon. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
    url: "https://icondumpsters.com/utah-dumpster-rental-Emigration Canyon",
    siteName: "Icon Dumpsters",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/utah-dumpster-rental-Emigration Canyon',
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