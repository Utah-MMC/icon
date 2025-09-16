import CityPageTemplate from '../components/CityPageTemplate';

export default function NorthSaltLakePage() {
  return (
    <CityPageTemplate
      cityName="North Salt Lake"
      citySlug="north-salt-lake"
      state="Utah"
      phoneNumber="801-918-6000"
      latitude="40.8486"
      longitude="-111.9069"
      landmarks={[
        {
                "name": "North Salt Lake City Park",
                "address": "200 N 200 W, North Salt Lake, UT 84054",
                "url": "https://northsaltlake.org/parks-recreation/"
        },
        {
                "name": "North Salt Lake Library",
                "address": "200 N 200 W, North Salt Lake, UT 84054",
                "url": "https://slcolibrary.org/location/north-salt-lake/"
        },
        {
                "name": "North Salt Lake Historic District",
                "address": "Main St, North Salt Lake, UT 84054",
                "url": "https://northsaltlake.org/community/history/"
        },
        {
                "name": "North Salt Lake Cemetery",
                "address": "200 N 200 W, North Salt Lake, UT 84054",
                "url": "https://northsaltlake.org/cemetery/"
        },
        {
                "name": "North Salt Lake Golf Course",
                "address": "200 N 200 W, North Salt Lake, UT 84054",
                "url": "https://northsaltlake.org/parks-recreation/golf-course/"
        }
]}
      businessDistricts={[
        {
                "name": "North Salt Lake City Center",
                "description": "City government and services",
                "link": "/north-salt-lake-dumpster-rental-guide-2025"
        },
        {
                "name": "North Salt Lake East",
                "description": "Residential neighborhoods",
                "link": "/home-renovation-dumpster-guide"
        },
        {
                "name": "North Salt Lake West",
                "description": "Commercial and industrial",
                "link": "/commercial-dumpsters"
        },
        {
                "name": "North Salt Lake Business District",
                "description": "Mixed commercial area",
                "link": "/north-salt-lake-dumpster-rental-guide-2025"
        },
        {
                "name": "North Salt Lake Industrial Park",
                "description": "Industrial and manufacturing",
                "link": "/commercial-dumpsters"
        }
]}
      permitInfo={{
        cityName: "North Salt Lake",
        phoneNumber: "801-936-3887",
        requirements: "Contact North Salt Lake for permit requirements and applications. We can help guide you through the process."
      }}
      contentSections={{
        overview: "Icon Dumpsters provides reliable dumpster rental services throughout North Salt Lake, Utah. Whether you're tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.",
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
        whyChooseUs: "Icon Dumpsters is your trusted partner for dumpster rental in North Salt Lake. We understand the unique needs of this community and provide reliable, professional service for all your waste management needs.",
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
        localInfo: "North Salt Lake is a vibrant community in Utah known for its beautiful surroundings and strong community spirit. From residential neighborhoods to commercial districts, North Salt Lake offers a great place to live and work.",
        serviceAreas: "We provide dumpster rental services throughout North Salt Lake and surrounding areas. Our service area covers residential neighborhoods, commercial districts, and industrial areas to meet all your waste management needs."
      }}
    />
  );
}