import { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';

export const metadata: Metadata = {
  title: 'Riverton Dumpster Rental - Professional Dumpster Services in Riverton, UT | (801-918-6000)',
  description: 'Professional dumpster rental services in Riverton, UT. Fast delivery, competitive pricing, and reliable waste management solutions. Call 801-918-6000 for instant quotes.',
  keywords: 'Riverton dumpster rental, dumpster rental Riverton UT, Riverton UT dumpster, roll-off dumpster Riverton, construction dumpster Riverton, waste management Riverton',
  openGraph: {
    title: 'Riverton Dumpster Rental - Professional Dumpster Services in Riverton, UT | (801-918-6000)',
    description: 'Professional dumpster rental services in Riverton, UT. Fast delivery, competitive pricing, and reliable waste management solutions.',
    url: 'https://icondumpsters.com/riverton',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Riverton Dumpster Rental - Professional Dumpster Services in Riverton, UT',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Riverton Dumpster Rental - Professional Dumpster Services in Riverton, UT | (801-918-6000)',
    description: 'Professional dumpster rental services in Riverton, UT. Fast delivery, competitive pricing, and reliable waste management solutions.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/riverton',
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
    'geo.placename': 'Riverton, UT',
    'geo.position': '40.7608;-111.8910',
    'ICBM': '40.7608, -111.8910',
  },
};

export default function RivertonDumpsterRental() {
  const cityData = {
    cityName: 'Riverton',
    citySlug: 'riverton',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.7608',
    longitude: '-111.8910',
    landmarks: [
  {
    "name": "Riverton City Hall",
    "address": "City Hall Address",
    "url": "https://www.riverton.utah.gov/"
  },
  {
    "name": "Riverton Park",
    "address": "Local Park Address",
    "url": "https://www.google.com/maps/search/Riverton%20Park"
  }
],
    businessDistricts: [
  {
    "name": "Riverton Central",
    "description": "Major retail and dining district",
    "link": "/riverton"
  },
  {
    "name": "Riverton East",
    "description": "Residential and commercial mix",
    "link": "/riverton"
  },
  {
    "name": "Riverton West",
    "description": "Industrial and commercial area",
    "link": "/riverton"
  }
],
    permitInfo: {
  "cityName": "Riverton",
  "phoneNumber": "801-918-6000",
  "requirements": "Contact Riverton for permit requirements and applications. We can help guide you through the process."
},
    contentSections: {
  "overview": "Icon Dumpsters provides reliable dumpster rental services throughout Riverton, Utah. Whether you're tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.",
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
  "whyChooseUs": "When you need reliable dumpster rental services in Riverton, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Riverton's unique needs makes us the preferred choice for residents and businesses alike.",
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
  "localInfo": "Riverton is home to several popular attractions and landmarks. Whether you're working on a project near these areas or just exploring the city, we're here to help with your dumpster rental needs.",
  "serviceAreas": "We provide dumpster rental services throughout Riverton, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it."
}
  };

  return <CityPageTemplate {...cityData} />;
}