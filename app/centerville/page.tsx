import CityPageTemplate from '../components/CityPageTemplate';

export default function CentervillePage() {
  return (
    <CityPageTemplate
      cityName="Centerville"
      citySlug="centerville"
      state="Utah"
      phoneNumber="801-918-6000"
      latitude="40.9180"
      longitude="-111.8722"
      landmarks={[
        {
                "name": "Centerville City Park",
                "address": "650 N 400 W, Centerville, UT 84014",
                "url": "https://www.centervilleutah.gov/parks-recreation/"
        },
        {
                "name": "Centerville Library",
                "address": "45 S 400 E, Centerville, UT 84014",
                "url": "https://slcolibrary.org/location/centerville/"
        },
        {
                "name": "Centerville Historic District",
                "address": "Main St, Centerville, UT 84014",
                "url": "https://www.centervilleutah.gov/community/history/"
        },
        {
                "name": "Centerville Golf Course",
                "address": "650 N 400 W, Centerville, UT 84014",
                "url": "https://www.centervilleutah.gov/parks-recreation/golf-course/"
        },
        {
                "name": "Centerville Cemetery",
                "address": "650 E 400 S, Centerville, UT 84014",
                "url": "https://www.centervilleutah.gov/cemetery/"
        }
]}
      businessDistricts={[
        {
                "name": "Centerville Town Center",
                "description": "City government and services",
                "link": "/centerville-dumpster-rental-guide-2025"
        },
        {
                "name": "Centerville East",
                "description": "Residential neighborhoods",
                "link": "/home-renovation-dumpster-guide"
        },
        {
                "name": "Centerville West",
                "description": "Commercial and residential mix",
                "link": "/commercial-dumpsters"
        },
        {
                "name": "Centerville Business District",
                "description": "Mixed residential and commercial",
                "link": "/centerville-dumpster-rental-guide-2025"
        },
        {
                "name": "Centerville Historic District",
                "description": "Historic preservation area",
                "link": "/home-renovation-dumpster-guide"
        }
]}
      permitInfo={{
        cityName: "Centerville",
        phoneNumber: "801-292-8036",
        requirements: "Contact Centerville for permit requirements and applications. We can help guide you through the process."
      }}
      contentSections={{
        overview: "Icon Dumpsters provides reliable dumpster rental services throughout Centerville, Utah. Whether you're tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.",
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
        whyChooseUs: "Icon Dumpsters is your trusted partner for dumpster rental in Centerville. We understand the unique needs of this community and provide reliable, professional service for all your waste management needs.",
        dumpsterSizes: [
          {
            size: "15 Yard",
            description: "Perfect for small to medium projects",
            useCases: [
              "Kitchen remodel",
              "Bathroom renovation",
              "Garage cleanout",
              "Small construction"
            ]
          },
          {
            size: "20 Yard",
            description: "Great for medium to large projects",
            useCases: [
              "Full home renovation",
              "Large construction",
              "Commercial projects",
              "Major cleanouts"
            ]
          },
          {
            size: "30 Yard",
            description: "For major projects and construction",
            useCases: [
              "Large construction",
              "Commercial demolition",
              "Major renovations",
              "Industrial projects"
            ]
          }
        ],
        localInfo: "Centerville is a vibrant community in Utah known for its beautiful surroundings and strong community spirit. From residential neighborhoods to commercial districts, Centerville offers a great place to live and work.",
        serviceAreas: "We provide dumpster rental services throughout Centerville and surrounding areas. Our service area covers residential neighborhoods, commercial districts, and industrial areas to meet all your waste management needs."
      }}
    />
  );
}