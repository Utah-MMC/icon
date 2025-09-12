import { Metadata } from 'next';
import EnhancedCityPageTemplate from '../components/EnhancedCityPageTemplate';
import { getCityData } from '../config/cityData';
import Link from 'next/link';

interface SaltLakeCountyCityPageProps {
  citySlug: string;
  cityName: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
}

export function generateSaltLakeCountyCityMetadata(
  citySlug: string,
  cityName: string,
  coordinates: { latitude: string; longitude: string }
): Metadata {
  return {
    title: `${cityName} Dumpster Rental - Professional Services in ${cityName}, UT | Icon Dumpsters`,
    description: `Get reliable dumpster rental in ${cityName}, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.`,
    keywords: [
      `dumpster rental ${cityName}`,
      `${cityName} dumpster rental`,
      `roll-off dumpster ${cityName}`,
      `construction dumpster ${cityName}`,
      `dumpster rental near me ${cityName}`,
      `${cityName} waste management`,
      `dumpster delivery ${cityName}`,
      `${cityName} dumpster services`,
      `Salt Lake County dumpster rental`,
      `Utah dumpster rental ${cityName}`,
      `construction waste disposal ${cityName}`,
      `home renovation dumpster ${cityName}`,
      `commercial dumpster rental ${cityName}`,
      `demolition dumpster ${cityName}`,
      `concrete disposal ${cityName}`
    ],
    openGraph: {
      title: `${cityName} Dumpster Rental - Professional Services | Icon Dumpsters`,
      description: `Professional dumpster rental services in ${cityName}, Utah. Same-day delivery, competitive pricing, and excellent customer service.`,
      url: `https://icondumpsters.com/slc-dumpster-rental-${citySlug}-ut`,
      siteName: "Icon Dumpsters",
      images: ['/images/og-image.png'],
    },
    alternates: {
      canonical: `https://icondumpsters.com/slc-dumpster-rental-${citySlug}-ut`,
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
      'geo.placename': `${cityName}, Utah`,
      'geo.position': `${coordinates.latitude};${coordinates.longitude}`,
      'ICBM': `${coordinates.latitude}, ${coordinates.longitude}`,
    },
  };
}

export default function SaltLakeCountyCityPage({
  citySlug,
  cityName,
  coordinates
}: SaltLakeCountyCityPageProps) {
  const cityData = getCityData(citySlug);
  
  if (!cityData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">City Data Not Found</h1>
          <p className="text-gray-600 mb-4">We're working on adding data for {cityName}.</p>
          <Link 
            href="/" 
            className="bg-[#4e37a8] text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return <EnhancedCityPageTemplate {...cityData} />;
}
