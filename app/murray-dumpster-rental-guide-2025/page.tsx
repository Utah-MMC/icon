import { Metadata } from 'next';
import CityPageTemplate from '../components/CityPageTemplate';

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
  
  const cityData = {
    cityName: 'Murray',
    citySlug: 'murray',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.7608',
    longitude: '-111.8910',
    landmarks: [
      {
        name: 'Murray City Hall',
        address: '5025 S State St, Murray, UT 84107',
        url: 'https://www.murray.utah.gov/',
      },
      {
        name: 'Murray Park',
        address: '296 E Murray Park Ave, Murray, UT 84107',
        url: 'https://www.murray.utah.gov/parks-recreation/parks/murray-park/',
      },
      {
        name: 'Murray Library',
        address: '166 E 5300 S, Murray, UT 84107',
        url: 'https://www.murray.utah.gov/parks-recreation/library/',
      },
      {
        name: 'Murray Theater',
        address: '4959 S State St, Murray, UT 84107',
        url: 'https://www.murraytheater.com/',
      },
      {
        name: 'Murray Golf Course',
        address: '5600 S 900 E, Murray, UT 84107',
        url: 'https://www.murray.utah.gov/parks-recreation/golf/',
      },
    ],
    businessDistricts: [
      {
        name: 'Murray Central',
        description: 'Major retail and dining district',
        link: '/murray',
      },
      {
        name: 'Murray East',
        description: 'Residential and commercial mix',
        link: '/murray',
      },
      {
        name: 'Murray West',
        description: 'Industrial and commercial area',
        link: '/murray',
      },
      {
        name: 'Murray South',
        description: 'Growing residential area',
        link: '/murray',
      },
    ],
    permitInfo: {
      cityName: 'Murray',
      phoneNumber: '801-264-2660',
      requirements: 'Contact Murray for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Murray, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Murray, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Murray\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Murray is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Murray, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  };

  return <CityPageTemplate {...cityData} />;
}