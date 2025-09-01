import { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';

export const metadata: Metadata = {
  title: 'Eagle Mountain Dumpster Rental - Professional Dumpster Services in Eagle Mountain, UT | (801-918-6000)',
  description: 'Professional dumpster rental services in Eagle Mountain, UT. Fast delivery, competitive pricing, and reliable waste management solutions. Call 801-918-6000 for instant quotes.',
  keywords: 'Eagle Mountain dumpster rental, dumpster rental Eagle Mountain UT, Eagle Mountain UT dumpster, roll-off dumpster Eagle Mountain, construction dumpster Eagle Mountain, waste management Eagle Mountain',
  openGraph: {
    title: 'Eagle Mountain Dumpster Rental - Professional Dumpster Services in Eagle Mountain, UT | (801-918-6000)',
    description: 'Professional dumpster rental services in Eagle Mountain, UT. Fast delivery, competitive pricing, and reliable waste management solutions.',
    url: 'https://icondumpsters.com/eagle-mountain',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Eagle Mountain Dumpster Rental - Professional Dumpster Services in Eagle Mountain, UT',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eagle Mountain Dumpster Rental - Professional Dumpster Services in Eagle Mountain, UT | (801-918-6000)',
    description: 'Professional dumpster rental services in Eagle Mountain, UT. Fast delivery, competitive pricing, and reliable waste management solutions.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/eagle-mountain',
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
    'geo.placename': 'Eagle Mountain, UT',
    'geo.position': '40.7608;-111.8910',
    'ICBM': '40.7608, -111.8910',
  },
};

export default function EagleMountainDumpsterRental() {
  const cityData = {
    cityName: 'Eagle Mountain',
    citySlug: 'eagle-mountain',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.7608',
    longitude: '-111.8910',
    landmarks: [
  {
    "name": "Eagle Mountain City Hall",
    "address": "City Hall Address",
    "url": "https://www.eagle-mountain.utah.gov/"
  },
  {
    "name": "Eagle Mountain Park",
    "address": "Local Park Address",
    "url": "https://www.google.com/maps/search/Eagle Mountain%20Park"
  }
],
    businessDistricts: [
  {
    "name": "Eagle Mountain Central",
    "description": "Major retail and dining district",
    "link": "/eagle-mountain"
  },
  {
    "name": "Eagle Mountain East",
    "description": "Residential and commercial mix",
    "link": "/eagle-mountain"
  },
  {
    "name": "Eagle Mountain West",
    "description": "Industrial and commercial area",
    "link": "/eagle-mountain"
  }
],
    permitInfo: {
  "cityName": "Eagle Mountain",
  "phoneNumber": "801-918-6000",
  "requirements": "Contact Eagle Mountain for permit requirements and applications. We can help guide you through the process."
},
    contentSections: {
  "overview": "Icon Dumpsters provides reliable dumpster rental services throughout Eagle Mountain, Utah. Whether you're tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.",
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
  "whyChooseUs": "When you need reliable dumpster rental services in Eagle Mountain, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Eagle Mountain's unique needs makes us the preferred choice for residents and businesses alike.",
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
  "localInfo": "Eagle Mountain is home to several popular attractions and landmarks. Whether you're working on a project near these areas or just exploring the city, we're here to help with your dumpster rental needs.",
  "serviceAreas": "We provide dumpster rental services throughout Eagle Mountain, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it."
}
  };

  return <CityPageTemplate {...cityData} />;
}