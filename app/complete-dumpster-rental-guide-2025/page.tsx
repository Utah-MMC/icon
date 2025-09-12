import { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';
import { getCityData } from '../config/cityData';

export const metadata: Metadata = {
  "title": "Complete Dumpster Rental Guide 2025 | Utah Waste Management Tips",
  "description": "Complete guide to dumpster rental in Utah. Learn about sizes, pricing, permits, and best practices for waste management in 2025.",
  "keywords": [
    "dumpster rental guide",
    "utah waste management",
    "dumpster rental tips",
    "construction waste disposal"
  ],
  "alternates": {
    "canonical": "/complete-dumpster-rental-guide-2025"
  },
  "openGraph": {
    "title": "Complete Dumpster Rental Guide 2025 | Utah Waste Management Tips",
    "description": "Complete guide to dumpster rental in Utah. Learn about sizes, pricing, permits, and best practices for waste management in 2025.",
    "url": "https://icondumpsters.com/complete-dumpster-rental-guide-2025",
    "images": [
      {
        "url": "/images/og-image.png",
        "width": 1200,
        "height": 630,
        "alt": "Complete Dumpster Rental Guide - Icon Dumpsters"
      }
    ],
    "type": "article"
  },
  "robots": {
    "index": true,
    "follow": true
  }
};

export default function CompleteDumpsterRentalGuideDumpsterRental() {
  const cityData = getCityData('complete');
  
  if (!cityData) {
    return <div>City data not found</div>;
  }

  return <CityPageTemplate {...cityData} />;
}