import { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';

export const metadata: Metadata = {
  title: 'Holladay Dumpster Rental - Professional Dumpster Services in Holladay, UT | (801-918-6000)',
  description: 'Professional dumpster rental services in Holladay, UT. Fast delivery, competitive pricing, and reliable waste management solutions. Call 801-918-6000 for instant quotes.',
  keywords: 'Holladay dumpster rental, dumpster rental Holladay UT, Holladay UT dumpster, roll-off dumpster Holladay, construction dumpster Holladay, waste management Holladay',
  openGraph: {
    title: 'Holladay Dumpster Rental - Professional Dumpster Services in Holladay, UT | (801-918-6000)',
    description: 'Professional dumpster rental services in Holladay, UT. Fast delivery, competitive pricing, and reliable waste management solutions.',
    url: 'https://icondumpsters.com/holladay',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Holladay Dumpster Rental - Professional Dumpster Services in Holladay, UT',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Holladay Dumpster Rental - Professional Dumpster Services in Holladay, UT | (801-918-6000)',
    description: 'Professional dumpster rental services in Holladay, UT. Fast delivery, competitive pricing, and reliable waste management solutions.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/holladay',
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
    'geo.placename': 'Holladay, UT',
    'geo.position': '40.7608;-111.8910',
    'ICBM': '40.7608, -111.8910',
  },
};

export default function HolladayDumpsterRental() {
  const cityData = {
    cityName: 'Holladay',
    citySlug: 'holladay',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.7608',
    longitude: '-111.8910',
    landmarks: [
  {
    "name": "Holladay City Hall",
    "address": "City Hall Address",
    "url": "https://www.holladay.utah.gov/"
  },
  {
    "name": "Holladay Park",
    "address": "Local Park Address",
    "url": "https://www.google.com/maps/search/Holladay%20Park"
  }
],
    businessDistricts: [
  {
    "name": "Holladay Central",
    "description": "Major retail and dining district",
    "link": "/holladay"
  },
  {
    "name": "Holladay East",
    "description": "Residential and commercial mix",
    "link": "/holladay"
  },
  {
    "name": "Holladay West",
    "description": "Industrial and commercial area",
    "link": "/holladay"
  }
],
    permitInfo: {
  "cityName": "Holladay",
  "phoneNumber": "801-918-6000",
  "requirements": "Contact Holladay for permit requirements and applications. We can help guide you through the process."
},
    contentSections: {
  "overview": "Icon Dumpsters provides reliable dumpster rental services throughout Holladay, Utah. Whether you're tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.",
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
  "whyChooseUs": "When you need reliable dumpster rental services in Holladay, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Holladay's unique needs makes us the preferred choice for residents and businesses alike.",
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
  "localInfo": "Holladay is home to several popular attractions and landmarks. Whether you're working on a project near these areas or just exploring the city, we're here to help with your dumpster rental needs.",
  "serviceAreas": "We provide dumpster rental services throughout Holladay, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it."
}
  };

  return <CityPageTemplate {...cityData} />;
}