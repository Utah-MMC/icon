import CityPageTemplate from '../components/CityPageTemplate';

export default function MillcreekPage() {
  return (
    <CityPageTemplate
      cityName="Millcreek"
      citySlug="millcreek"
      state="Utah"
      phoneNumber="801-918-6000"
      latitude="40.6895"
      longitude="-111.8291"
      landmarks={[
        {
                "name": "Millcreek Canyon",
                "address": "Millcreek Canyon, Millcreek, UT 84109"
        },
        {
                "name": "Millcreek City Hall",
                "address": "3330 S 1300 E, Millcreek, UT 84106"
        },
        {
                "name": "Millcreek Library",
                "address": "2266 E Evergreen Ave, Millcreek, UT 84109"
        },
        {
                "name": "Millcreek Park",
                "address": "3330 S 1300 E, Millcreek, UT 84106"
        },
        {
                "name": "Millcreek Historic District",
                "address": "Main St, Millcreek, UT 84109"
        }
]}
      businessDistricts={[
        {
                "name": "Millcreek Town Center",
                "description": "City government and services",
                "link": "/"
        },
        {
                "name": "Millcreek East",
                "description": "Residential neighborhoods",
                "link": "/"
        },
        {
                "name": "Millcreek West",
                "description": "Commercial and residential mix",
                "link": "/"
        },
        {
                "name": "Millcreek South",
                "description": "Growing residential area",
                "link": "/"
        },
        {
                "name": "Millcreek North",
                "description": "Established communities",
                "link": "/"
        },
        {
                "name": "Millcreek Business District",
                "description": "Mixed residential and commercial",
                "link": "/"
        }
]}
      permitInfo={{
        cityName: "Millcreek",
        phoneNumber: "801-214-2700",
        requirements: "Contact Millcreek for permit requirements and applications. We can help guide you through the process."
      }}
      contentSections={{
        overview: "Icon Dumpsters provides reliable dumpster rental services throughout Millcreek, Utah. Whether you're tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.",
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
        whyChooseUs: "Icon Dumpsters is your trusted partner for dumpster rental in Millcreek. We understand the unique needs of this community and provide reliable, professional service for all your waste management needs.",
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
        localInfo: "Millcreek is a vibrant community in Utah known for its beautiful surroundings and strong community spirit. From residential neighborhoods to commercial districts, Millcreek offers a great place to live and work.",
        serviceAreas: "We provide dumpster rental services throughout Millcreek and surrounding areas. Our service area covers residential neighborhoods, commercial districts, and industrial areas to meet all your waste management needs."
      }}
    />
  );
}