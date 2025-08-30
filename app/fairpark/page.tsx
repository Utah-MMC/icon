import CityPageTemplate from '../components/CityPageTemplate';

export default function FairparkPage() {
  return (
    <CityPageTemplate
      cityName="Fairpark"
      citySlug="fairpark"
      state="Utah"
      phoneNumber="801-918-6000"
      latitude="40.7608"
      longitude="-111.8910"
      landmarks={[
        {
                "name": "Utah State Fairpark",
                "address": "155 N 1000 W, Salt Lake City, UT 84116",
                "url": "https://utahstatefair.com/"
        },
        {
                "name": "Fairpark Golf Course",
                "address": "155 N 1000 W, Salt Lake City, UT 84116"
        },
        {
                "name": "Fairpark Library",
                "address": "155 N 1000 W, Salt Lake City, UT 84116"
        },
        {
                "name": "Fairpark Park",
                "address": "155 N 1000 W, Salt Lake City, UT 84116"
        },
        {
                "name": "Fairpark Historic District",
                "address": "Fairpark Area, Salt Lake City, UT 84116"
        }
]}
      businessDistricts={[
        {
                "name": "Fairpark Main Street",
                "description": "Historic downtown area",
                "link": "/"
        },
        {
                "name": "Fairpark State Street",
                "description": "Major retail and commercial",
                "link": "/"
        },
        {
                "name": "Fairpark East",
                "description": "Residential neighborhoods",
                "link": "/"
        },
        {
                "name": "Fairpark West",
                "description": "Industrial and commercial mix",
                "link": "/"
        },
        {
                "name": "Fairpark South",
                "description": "Growing residential area",
                "link": "/"
        },
        {
                "name": "Fairpark North",
                "description": "Established communities",
                "link": "/"
        }
]}
      permitInfo={{
        cityName: "Fairpark",
        phoneNumber: "801-535-6000",
        requirements: "Contact Fairpark for permit requirements and applications. We can help guide you through the process."
      }}
      contentSections={{
        overview: "Icon Dumpsters provides reliable dumpster rental services throughout Fairpark, Utah. Whether you're tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.",
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
        whyChooseUs: "Icon Dumpsters is your trusted partner for dumpster rental in Fairpark. We understand the unique needs of this community and provide reliable, professional service for all your waste management needs.",
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
        localInfo: "Fairpark is a vibrant community in Utah known for its beautiful surroundings and strong community spirit. From residential neighborhoods to commercial districts, Fairpark offers a great place to live and work.",
        serviceAreas: "We provide dumpster rental services throughout Fairpark and surrounding areas. Our service area covers residential neighborhoods, commercial districts, and industrial areas to meet all your waste management needs."
      }}
    />
  );
}