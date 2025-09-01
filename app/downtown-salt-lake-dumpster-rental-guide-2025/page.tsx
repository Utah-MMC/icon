import { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';

export const metadata: Metadata = {
  title: 'Downtown Salt Lake Dumpster Rental - Professional Dumpster Services in Downtown Salt Lake, UT | (801-918-6000)',
  description: 'Professional dumpster rental services in Downtown Salt Lake, UT. Fast delivery, competitive pricing, and reliable waste management solutions. Call 801-918-6000 for instant quotes.',
  keywords: 'Downtown Salt Lake dumpster rental, dumpster rental Downtown Salt Lake UT, Downtown Salt Lake UT dumpster, roll-off dumpster Downtown Salt Lake, construction dumpster Downtown Salt Lake, waste management Downtown Salt Lake',
  openGraph: {
    title: 'Downtown Salt Lake Dumpster Rental - Professional Dumpster Services in Downtown Salt Lake, UT | (801-918-6000)',
    description: 'Professional dumpster rental services in Downtown Salt Lake, UT. Fast delivery, competitive pricing, and reliable waste management solutions.',
    url: 'https://icondumpsters.com/downtown-salt-lake',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Downtown Salt Lake Dumpster Rental - Professional Dumpster Services in Downtown Salt Lake, UT',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Downtown Salt Lake Dumpster Rental - Professional Dumpster Services in Downtown Salt Lake, UT | (801-918-6000)',
    description: 'Professional dumpster rental services in Downtown Salt Lake, UT. Fast delivery, competitive pricing, and reliable waste management solutions.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/downtown-salt-lake',
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
    'geo.placename': 'Downtown Salt Lake, UT',
    'geo.position': '40.7608;-111.8910',
    'ICBM': '40.7608, -111.8910',
  },
};

export default function DowntownSaltLakeDumpsterRental() {
  const cityData = {
    cityName: 'Downtown Salt Lake',
    citySlug: 'downtown-salt-lake',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.7608',
    longitude: '-111.8910',
    landmarks: [
  {
    "name": "Downtown Salt Lake City Hall",
    "address": "City Hall Address",
    "url": "https://www.downtown-salt-lake.utah.gov/"
  },
  {
    "name": "Downtown Salt Lake Park",
    "address": "Local Park Address",
    "url": "https://www.google.com/maps/search/Downtown Salt Lake%20Park"
  }
],
    businessDistricts: [
  {
    "name": "Downtown Salt Lake Central",
    "description": "Major retail and dining district",
    "link": "/downtown-salt-lake"
  },
  {
    "name": "Downtown Salt Lake East",
    "description": "Residential and commercial mix",
    "link": "/downtown-salt-lake"
  },
  {
    "name": "Downtown Salt Lake West",
    "description": "Industrial and commercial area",
    "link": "/downtown-salt-lake"
  }
],
    permitInfo: {
  "cityName": "Downtown Salt Lake",
  "phoneNumber": "801-918-6000",
  "requirements": "Contact Downtown Salt Lake for permit requirements and applications. We can help guide you through the process."
},
    contentSections: {
  "overview": "Icon Dumpsters provides reliable dumpster rental services throughout Downtown Salt Lake, Utah. Whether you're tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.",
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
  "whyChooseUs": "When you need reliable dumpster rental services in Downtown Salt Lake, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Downtown Salt Lake's unique needs makes us the preferred choice for residents and businesses alike.",
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
  "localInfo": "Downtown Salt Lake is home to several popular attractions and landmarks. Whether you're working on a project near these areas or just exploring the city, we're here to help with your dumpster rental needs.",
  "serviceAreas": "We provide dumpster rental services throughout Downtown Salt Lake, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it."
}
  };

  return <CityPageTemplate {...cityData} />;
}