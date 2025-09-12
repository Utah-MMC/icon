import { Metadata } from 'next';
import CityPageTemplate from '../../../components/CityPageTemplate';
import { getCityData } from '../../../config/cityData';

export const metadata: Metadata = {
  "title": "Salt Lake City Dumpster Rental Guide 2025 | Complete Waste Management Tips",
  "description": "Complete Salt Lake City dumpster rental guide for 2025. Learn about sizes, pricing, permits, and best practices for waste management in Utah.",
  "keywords": [
    "Salt Lake City dumpster rental guide",
    "utah waste management",
    "dumpster rental tips",
    "construction waste disposal"
  ],
  "alternates": {
    "canonical": "/salt-lake-city-dumpster-rental-guide-2025"
  },
  "openGraph": {
    "title": "Salt Lake City Dumpster Rental Guide 2025 | Complete Waste Management Tips",
    "description": "Complete Salt Lake City dumpster rental guide for 2025. Learn about sizes, pricing, permits, and best practices.",
    "url": "https://icondumpsters.com/salt-lake-city-dumpster-rental-guide-2025",
    "images": [
      {
        "url": "/images/og-image.png",
        "width": 1200,
        "height": 630,
        "alt": "Salt Lake City Dumpster Rental Guide - Icon Dumpsters"
      }
    ],
    "type": "article"
  },
  "robots": {
    "index": true,
    "follow": true
  }
};

export default function SaltLakeCityDumpsterRental() {
  const cityData = getCityData('salt-lake-city');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}