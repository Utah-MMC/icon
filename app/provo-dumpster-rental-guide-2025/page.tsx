import { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';

export const metadata: Metadata = {
  "title": "Provo Dumpster Rental Guide 2025 | Complete Waste Management Tips",
  "description": "Complete Provo dumpster rental guide for 2025. Learn about sizes, pricing, permits, and best practices for waste management in Utah.",
  "keywords": [
    "Provo dumpster rental guide",
    "utah waste management",
    "dumpster rental tips",
    "construction waste disposal"
  ],
  "alternates": {
    "canonical": "/provo-dumpster-rental-guide-2025"
  },
  "openGraph": {
    "title": "Provo Dumpster Rental Guide 2025 | Complete Waste Management Tips",
    "description": "Complete Provo dumpster rental guide for 2025. Learn about sizes, pricing, permits, and best practices.",
    "url": "https://icondumpsters.com/provo-dumpster-rental-guide-2025",
    "images": [
      {
        "url": "/images/og-image.png",
        "width": 1200,
        "height": 630,
        "alt": "Provo Dumpster Rental Guide - Icon Dumpsters"
      }
    ],
    "type": "article"
  },
  "robots": {
    "index": true,
    "follow": true
  }
};

export default function ProvoDumpsterRental() {
  const cityData = {
    cityName: 'Provo',
    citySlug: 'provo',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.7608',
    longitude: '-111.8910',
    landmarks: [
  {
    "name": "Provo City Hall",
    "address": "City Hall Address",
    "url": "https://www.provo.utah.gov/"
  },
  {
    "name": "Provo Park",
    "address": "Local Park Address",
    "url": "https://www.google.com/maps/search/Provo%20Park"
  }
],
    businessDistricts: [
  {
    "name": "Provo Central",
    "description": "Major retail and dining district",
    "link": "/provo"
  },
  {
    "name": "Provo East",
    "description": "Residential and commercial mix",
    "link": "/provo"
  },
  {
    "name": "Provo West",
    "description": "Industrial and commercial area",
    "link": "/provo"
  }
],
    permitInfo: {
  "cityName": "Provo",
  "phoneNumber": "801-918-6000",
  "requirements": "Contact Provo for permit requirements and applications. We can help guide you through the process."
},
    contentSections: {
  "overview": "Icon Dumpsters provides reliable dumpster rental services throughout Provo, Utah. Whether you're tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.",
  "residentialServices": [
    "Home renovations and remodeling",
    "Basement cleanouts",
    "Garage organization",
    "Yard waste removal",
    "Estate cleanouts"
  ],
  "commercialServices": [
    "Construction and demolition",
    "Office renovations",
    "Retail store cleanouts",
    "Industrial waste removal",
    "Event cleanup"
  ],
  "whyChooseUs": "When you need reliable dumpster rental services in Provo, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Provo's unique needs makes us the preferred choice for residents and businesses alike.",
  "dumpsterSizes": [
    {
      "size": "15 Yard",
      "description": "Perfect for small to medium projects",
      "useCases": [
        "Kitchen remodel",
        "Bathroom renovation",
        "Garage cleanout",
        "Small construction"
      ]
    },
    {
      "size": "20 Yard",
      "description": "Great for medium to large projects",
      "useCases": [
        "Full home renovation",
        "Large construction",
        "Commercial projects",
        "Major cleanouts"
      ]
    },
    {
      "size": "30 Yard",
      "description": "For major projects and construction",
      "useCases": [
        "Large construction",
        "Commercial demolition",
        "Major renovations",
        "Industrial projects"
      ]
    }
  ],
  "localInfo": "Provo is home to several popular attractions and landmarks. Whether you're working on a project near these areas or just exploring the city, we're here to help with your dumpster rental needs.",
  "serviceAreas": "We provide dumpster rental services throughout Provo, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it."
}
  };

  return <CityPageTemplate {...cityData} />;
}