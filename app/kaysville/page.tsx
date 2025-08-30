import CityPageTemplate from '../components/CityPageTemplate';

export default function KaysvillePage() {
  return (
    <CityPageTemplate
      cityName="Kaysville"
      citySlug="kaysville"
      state="Utah"
      phoneNumber="801-918-6000"
      latitude="41.0352"
      longitude="-111.9385"
      landmarks={[
        {
                "name": "Kaysville City Park",
                "address": "200 W Center St, Kaysville, UT 84037"
        },
        {
                "name": "Kaysville Library",
                "address": "215 N Fairfield Rd, Kaysville, UT 84037"
        },
        {
                "name": "Kaysville Historic District",
                "address": "Main St, Kaysville, UT 84037"
        },
        {
                "name": "Kaysville Cemetery",
                "address": "200 W Center St, Kaysville, UT 84037"
        },
        {
                "name": "Kaysville Golf Course",
                "address": "200 W Center St, Kaysville, UT 84037"
        }
]}
      businessDistricts={[
        {
                "name": "Kaysville Main Street",
                "description": "Historic downtown area",
                "link": "/"
        },
        {
                "name": "Kaysville Civic Center",
                "description": "Government and civic buildings",
                "link": "/"
        },
        {
                "name": "Kaysville East",
                "description": "Residential neighborhoods",
                "link": "/"
        },
        {
                "name": "Kaysville West",
                "description": "Commercial and light industrial",
                "link": "/"
        },
        {
                "name": "Kaysville South",
                "description": "Growing residential area",
                "link": "/"
        },
        {
                "name": "Kaysville North",
                "description": "Established neighborhoods",
                "link": "/"
        }
]}
      permitInfo={{
        cityName: "Kaysville",
        phoneNumber: "801-546-1235",
        requirements: "Contact Kaysville for permit requirements and applications. We can help guide you through the process."
      }}
      contentSections={{
        overview: "Icon Dumpsters provides reliable dumpster rental services throughout Kaysville, Utah. Whether you're tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.",
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
        whyChooseUs: "Icon Dumpsters is your trusted partner for dumpster rental in Kaysville. We understand the unique needs of this community and provide reliable, professional service for all your waste management needs.",
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
        localInfo: "Kaysville is a vibrant community in Utah known for its beautiful surroundings and strong community spirit. From residential neighborhoods to commercial districts, Kaysville offers a great place to live and work.",
        serviceAreas: "We provide dumpster rental services throughout Kaysville and surrounding areas. Our service area covers residential neighborhoods, commercial districts, and industrial areas to meet all your waste management needs."
      }}
    />
  );
}