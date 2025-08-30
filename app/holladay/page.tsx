import CityPageTemplate from '../components/CityPageTemplate';

export default function HolladayPage() {
  return (
    <CityPageTemplate
      cityName="Holladay"
      citySlug="holladay"
      state="Utah"
      phoneNumber="801-918-6000"
      latitude="40.6688"
      longitude="-111.8249"
      landmarks={[
        {
                "name": "Holladay City Park",
                "address": "4580 S 2300 E, Holladay, UT 84117"
        },
        {
                "name": "Holladay Library",
                "address": "2150 E Murray Holladay Rd, Holladay, UT 84117"
        },
        {
                "name": "Holladay Golf Course",
                "address": "4580 S 2300 E, Holladay, UT 84117"
        },
        {
                "name": "Holladay Cemetery",
                "address": "4580 S 2300 E, Holladay, UT 84117"
        },
        {
                "name": "Holladay Historic District",
                "address": "Main St, Holladay, UT 84117"
        }
]}
      businessDistricts={[
        {
                "name": "Holladay Main Street",
                "description": "Historic downtown area",
                "link": "/"
        },
        {
                "name": "Holladay State Street",
                "description": "Major retail and commercial",
                "link": "/"
        },
        {
                "name": "Holladay East",
                "description": "Residential neighborhoods",
                "link": "/"
        },
        {
                "name": "Holladay West",
                "description": "Industrial and commercial mix",
                "link": "/"
        },
        {
                "name": "Holladay South",
                "description": "Growing residential area",
                "link": "/"
        },
        {
                "name": "Holladay North",
                "description": "Established communities",
                "link": "/"
        }
]}
      permitInfo={{
        cityName: "Holladay",
        phoneNumber: "801-272-9450",
        requirements: "Contact Holladay for permit requirements and applications. We can help guide you through the process."
      }}
      contentSections={{
        overview: "Icon Dumpsters provides reliable dumpster rental services throughout Holladay, Utah. Whether you're tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.",
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
        whyChooseUs: "Icon Dumpsters is your trusted partner for dumpster rental in Holladay. We understand the unique needs of this community and provide reliable, professional service for all your waste management needs.",
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
        localInfo: "Holladay is a vibrant community in Utah known for its beautiful surroundings and strong community spirit. From residential neighborhoods to commercial districts, Holladay offers a great place to live and work.",
        serviceAreas: "We provide dumpster rental services throughout Holladay and surrounding areas. Our service area covers residential neighborhoods, commercial districts, and industrial areas to meet all your waste management needs."
      }}
    />
  );
}