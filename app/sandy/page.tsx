import { Metadata } from "next";
import CityPageTemplate from '../../../components/CityPageTemplate';
import { getCityData } from '../../../config/cityData';

export const metadata: Metadata = {
  title: "Sandy Dumpster Rental - Professional Services in Sandy, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Sandy, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Sandy dumpster rental, dumpster rental Sandy UT, Sandy Utah dumpster, roll-off dumpster Sandy, construction dumpster Sandy, waste management Sandy",
  openGraph: {
    title: "Sandy Dumpster Rental - Professional Services in Sandy, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Sandy, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: "https://icondumpsters.com/sandy",
    siteName: "Icon Dumpsters",
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sandy Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandy Dumpster Rental - Professional Services in Sandy, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Sandy, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: "/sandy",
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
};

export default function SandyPage() {
  const cityData = getCityData('sandy');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}
