import { Metadata } from 'next';
import CityPageTemplate from '../../../components/CityPageTemplate';
import { getCityData } from '../../../config/cityData';

export const metadata: Metadata = {
  "title": "Ogden Dumpster Rental Guide 2025 | Complete Waste Management Tips",
  "description": "Complete Ogden dumpster rental guide for 2025. Learn about sizes, pricing, permits, and best practices for waste management in Utah.",
  "keywords": [
    "Ogden dumpster rental guide",
    "utah waste management",
    "dumpster rental tips",
    "construction waste disposal"
  ],
  "alternates": {
    "canonical": "/ogden-dumpster-rental-guide-2025"
  },
  "openGraph": {
    "title": "Ogden Dumpster Rental Guide 2025 | Complete Waste Management Tips",
    "description": "Complete Ogden dumpster rental guide for 2025. Learn about sizes, pricing, permits, and best practices.",
    "url": "https://icondumpsters.com/ogden-dumpster-rental-guide-2025",
    "images": [
      {
        "url": "/images/og-image.png",
        "width": 1200,
        "height": 630,
        "alt": "Ogden Dumpster Rental Guide - Icon Dumpsters"
      }
    ],
    "type": "article"
  },
  "robots": {
    "index": true,
    "follow": true
  }
};

export default function OgdenDumpsterRental() {
  const cityData = getCityData('ogden');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}