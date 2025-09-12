import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Rose Park Dumpster Rental - Professional Services in Rose Park, UT | Icon Dumpsters",
  description: "Get reliable dumpster rental in Rose Park, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available. Call (801) 918-6000.",
  keywords: "Rose Park dumpster rental, dumpster rental Rose Park UT, Rose Park Utah dumpster, roll-off dumpster Rose Park, construction dumpster Rose Park, waste management Rose Park",
  openGraph: {
    title: "Rose Park Dumpster Rental - Professional Services in Rose Park, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Rose Park, Utah. Same-day delivery, competitive pricing, and excellent customer service. 15-30 yard roll-off dumpsters available.",
    url: 'https://icondumpsters.com/rose-park',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/Icon_Dumpsters_Final.png',
        width: 1200,
        height: 630,
        alt: 'Rose Park Dumpster Rental - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Rose Park Dumpster Rental - Professional Services in Rose Park, UT | Icon Dumpsters",
    description: "Get reliable dumpster rental in Rose Park, Utah. Same-day delivery, competitive pricing, and excellent customer service.",
    images: ['/Icon_Dumpsters_Final.png'],
  },
  alternates: {
    canonical: '/rose-park',
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
};

import CityPageTemplate from '../../../components/CityPageTemplate';

export default function RoseParkPage() {
  return (
    <CityPageTemplate
      cityName="Rose Park"
      citySlug="rose-park"
      state="UT"
      phoneNumber="(801) 918-6000"
      latitude="40.7899"
      longitude="-111.9247"
      landmarks={[
        {
          name: "Rose Park Golf Course",
          address: "1386 N Redwood Rd, Salt Lake City, UT 84116",
          url: "https://www.slc.gov/parks/rose-park-golf-course/",
          description: "Public golf course in Rose Park"
        },
        {
          name: "Jordan River Parkway Trail",
          address: "Along Jordan River",
          url: "https://www.slc.gov/parks/jordan-river-parkway/",
          description: "Scenic walking and biking trail"
        },
        {
          name: "Rose Park Library",
          address: "1205 W 1000 N, Salt Lake City, UT 84116",
          url: "https://www.slcpl.org/locations/rose-park",
          description: "Salt Lake City Public Library branch"
        }
      ]}
      businessDistricts={[
        {
          name: "Redwood Road Corridor",
          description: "Major retail and commercial area",
          link: "/"
        },
        {
          name: "North Temple Area",
          description: "Mixed residential and commercial",
          link: "/"
        }
      ]}
      permitInfo={{
        cityName: "Salt Lake City",
        phoneNumber: "(801) 535-6000",
        requirements: "Permits may be required for street placement. Contact Salt Lake City for permit requirements."
      }}
      contentSections={{
        overview: "Icon Dumpsters provides reliable dumpster rental services throughout Rose Park, Utah. Whether you're tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.",
        residentialServices: [
          "Home renovations and remodeling",
          "Basement cleanouts",
          "Garage organization",
          "Yard waste removal",
          "Estate cleanouts"
        ],
        commercialServices: [
          "Construction and demolition",
          "Office renovations",
          "Retail store cleanouts",
          "Industrial waste removal",
          "Event cleanup"
        ],
        whyChooseUs: "Rose Park residents and businesses trust Icon Dumpsters for reliable, affordable dumpster rental services. We've been serving the Salt Lake Valley for years, providing exceptional customer service and competitive pricing.",
        dumpsterSizes: [
          {
            size: "15 Yard Dumpster",
            description: "Perfect for small to medium projects",
            useCases: ["Kitchen remodel", "Bathroom renovation", "Garage cleanout", "Small construction"]
          },
          {
            size: "20 Yard Dumpster",
            description: "Great for medium to large projects",
            useCases: ["Full home renovation", "Large construction", "Commercial projects", "Major cleanouts"]
          },
          {
            size: "30 Yard Dumpster",
            description: "For major projects and construction",
            useCases: ["Large construction", "Commercial demolition", "Major renovations", "Industrial projects"]
          }
        ],
        localInfo: "Rose Park is a neighborhood in Salt Lake City, Utah, known for its family-friendly atmosphere and convenient location. The area features the Rose Park Golf Course, Jordan River Parkway Trail, and easy access to major transportation routes.",
        serviceAreas: "We serve all of Rose Park and surrounding communities, including Jordan River, Fairpark Border, and North Temple areas, ensuring convenient access to dumpster rental services throughout the neighborhood."
      }}
    />
  );
}
