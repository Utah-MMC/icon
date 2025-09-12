import { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';
import { getCityData } from '../config/cityData';

export const metadata: Metadata = {
  "title": "Murray Dumpster Rental Guide 2025 | Complete Waste Management Tips",
  "description": "Complete Murray dumpster rental guide for 2025. Learn about sizes, pricing, permits, and best practices for waste management in Utah.",
  "keywords": [
    "Murray dumpster rental guide",
    "utah waste management",
    "dumpster rental tips",
    "construction waste disposal"
  ],
  "alternates": {
    "canonical": "/murray-dumpster-rental-guide-2025"
  },
  "openGraph": {
    "title": "Murray Dumpster Rental Guide 2025 | Complete Waste Management Tips",
    "description": "Complete Murray dumpster rental guide for 2025. Learn about sizes, pricing, permits, and best practices.",
    "url": "https://icondumpsters.com/murray-dumpster-rental-guide-2025",
    "images": [
      {
        "url": "/images/og-image.png",
        "width": 1200,
        "height": 630,
        "alt": "Murray Dumpster Rental Guide - Icon Dumpsters"
      }
    ],
    "type": "article"
  },
  "robots": {
    "index": true,
    "follow": true
  }
};

export default function MurrayDumpsterRental() {
  console.log('🎯 MURRAY PAGE IS RENDERING FROM murray-dumpster-rental-guide-2025/page.tsx');
  
  const cityData = getCityData('murray');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}