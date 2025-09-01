import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cityData, getCityData } from '../config/cityData';
import CityPageTemplate from '../components/CityPageTemplate';

interface PageProps {
  params: {
    slug: string[];
  };
}

export async function generateStaticParams() {
  return Object.keys(cityData).map((citySlug) => ({
    slug: [citySlug, 'ut'],
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const citySlug = params.slug[0]; // First part is the city
  const cityData = getCityData(citySlug);
  
  if (!cityData || params.slug[1] !== 'ut') {
    return {
      title: 'City Not Found',
    };
  }

  return {
    title: `${cityData.cityName} Dumpster Rental - Professional Dumpster Services in ${cityData.cityName}, ${cityData.state} | (${cityData.phoneNumber})`,
    description: `Professional dumpster rental services in ${cityData.cityName}, ${cityData.state}. Fast delivery, competitive pricing, and reliable waste management solutions. Call ${cityData.phoneNumber} for instant quotes.`,
    keywords: `${cityData.cityName} dumpster rental, dumpster rental ${cityData.cityName} ${cityData.state}, ${cityData.cityName} ${cityData.state} dumpster, roll-off dumpster ${cityData.cityName}, construction dumpster ${cityData.cityName}, waste management ${cityData.cityName}`,
    openGraph: {
      title: `${cityData.cityName} Dumpster Rental - Professional Dumpster Services in ${cityData.cityName}, ${cityData.state} | (${cityData.phoneNumber})`,
      description: `Professional dumpster rental services in ${cityData.cityName}, ${cityData.state}. Fast delivery, competitive pricing, and reliable waste management solutions.`,
      url: `https://icondumpsters.com/dumpster-rental-${citySlug}-ut`,
      siteName: 'Icon Dumpsters',
      images: [
        {
          url: '/images/og-image.png',
          width: 1200,
          height: 630,
          alt: `${cityData.cityName} Dumpster Rental - Professional Dumpster Services in ${cityData.cityName}, ${cityData.state}`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${cityData.cityName} Dumpster Rental - Professional Dumpster Services in ${cityData.cityName}, ${cityData.state} | (${cityData.phoneNumber})`,
      description: `Professional dumpster rental services in ${cityData.cityName}, ${cityData.state}. Fast delivery, competitive pricing, and reliable waste management solutions.`,
      images: ['/images/og-image.png'],
    },
    alternates: {
      canonical: `https://icondumpsters.com/dumpster-rental-${citySlug}-ut`,
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
      'geo.placename': `${cityData.cityName}, ${cityData.state}`,
      'ICBM': `${cityData.latitude}, ${cityData.longitude}`,
    },
  };
}

export default function CityPage({ params }: PageProps) {
  const citySlug = params.slug[0]; // First part is the city
  const cityData = getCityData(citySlug);
  
  // Check if it's a valid city and ends with 'ut'
  if (!cityData || params.slug[1] !== 'ut') {
    notFound();
  }

  return (
    <CityPageTemplate
      cityName={cityData.cityName}
      citySlug={citySlug}
      state={cityData.state}
      phoneNumber={cityData.phoneNumber}
      latitude={cityData.latitude}
      longitude={cityData.longitude}
      landmarks={cityData.landmarks}
      businessDistricts={cityData.businessDistricts}
      permitInfo={cityData.permitInfo}
      contentSections={cityData.contentSections}
    />
  );
}
