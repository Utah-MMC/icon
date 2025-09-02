import { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';

export const metadata: Metadata = {
  "title": "Roy Dumpster Rental Guide 2025 | Complete Waste Management Tips",
  "description": "Complete Roy dumpster rental guide for 2025. Learn about sizes, pricing, permits, and best practices for waste management in Utah.",
  "keywords": [
    "Roy dumpster rental guide",
    "utah waste management",
    "dumpster rental tips",
    "construction waste disposal"
  ],
  "alternates": {
    "canonical": "/roy-dumpster-rental-guide-2025"
  },
  "openGraph": {
    "title": "Roy Dumpster Rental Guide 2025 | Complete Waste Management Tips",
    "description": "Complete Roy dumpster rental guide for 2025. Learn about sizes, pricing, permits, and best practices.",
    "url": "https://icondumpsters.com/roy-dumpster-rental-guide-2025",
    "images": [
      {
        "url": "/images/og-image.png",
        "width": 1200,
        "height": 630,
        "alt": "Roy Dumpster Rental Guide - Icon Dumpsters"
      }
    ],
    "type": "article"
  },
  "robots": {
    "index": true,
    "follow": true
  }
};

export default function RoyDumpsterRental() {
  const cityData = {
    cityName: 'Roy',
    citySlug: 'roy',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.7608',
    longitude: '-111.8910',
    landmarks: [
  {
    "name": "Roy City Hall",
    "address": "City Hall Address",
    "url": "https://www.roy.utah.gov/"
  },
  {
    "name": "Roy Park",
    "address": "Local Park Address",
    "url": "https://www.google.com/maps/search/Roy%20Park"
  }
],
    businessDistricts: [
  {
    "name": "Roy Central",
    "description": "Major retail and dining district",
    "link": "/roy"
  },
  {
    "name": "Roy East",
    "description": "Residential and commercial mix",
    "link": "/roy"
  },
  {
    "name": "Roy West",
    "description": "Industrial and commercial area",
    "link": "/roy"
  }
],
    permitInfo: {
  "cityName": "Roy",
  "phoneNumber": "801-918-6000",
  "requirements": "Contact Roy for permit requirements and applications. We can help guide you through the process."
},
    contentSections: {
  "overview": "Icon Dumpsters provides reliable dumpster rental services throughout Roy, Utah. Whether you're tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.",
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
  "whyChooseUs": "When you need reliable dumpster rental services in Roy, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Roy's unique needs makes us the preferred choice for residents and businesses alike.",
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
  "localInfo": "Roy is home to several popular attractions and landmarks. Whether you're working on a project near these areas or just exploring the city, we're here to help with your dumpster rental needs.",
  "serviceAreas": "We provide dumpster rental services throughout Roy, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it."
}
  };

  return <CityPageTemplate {...cityData} />;
}