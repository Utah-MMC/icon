import CityPageTemplate from '../components/CityPageTemplate';

export default function MidvalePage() {
  return (
    <CityPageTemplate
      cityName="Midvale"
      citySlug="midvale"
      state="Utah"
      phoneNumber="801-918-6000"
      latitude="40.6111"
      longitude="-111.8996"
      landmarks={[
        {
                "name": "Midvale City Park",
                "address": "455 W 7500 S, Midvale, UT 84047"
        },
        {
                "name": "Midvale Library",
                "address": "455 W 7500 S, Midvale, UT 84047"
        },
        {
                "name": "Midvale Historic District",
                "address": "Main St, Midvale, UT 84047"
        },
        {
                "name": "Midvale Cemetery",
                "address": "455 W 7500 S, Midvale, UT 84047"
        },
        {
                "name": "Midvale Golf Course",
                "address": "455 W 7500 S, Midvale, UT 84047"
        }
]}
      businessDistricts={[
        {
                "name": "Midvale Main Street",
                "description": "Historic downtown area",
                "link": "/"
        },
        {
                "name": "Midvale State Street",
                "description": "Major retail and commercial",
                "link": "/"
        },
        {
                "name": "Midvale East",
                "description": "Residential neighborhoods",
                "link": "/"
        },
        {
                "name": "Midvale West",
                "description": "Industrial and commercial mix",
                "link": "/"
        },
        {
                "name": "Midvale South",
                "description": "Growing residential area",
                "link": "/"
        },
        {
                "name": "Midvale North",
                "description": "Established communities",
                "link": "/"
        }
]}
      permitInfo={{
        cityName: "Midvale",
        phoneNumber: "801-567-7200",
        requirements: "Contact Midvale for permit requirements and applications. We can help guide you through the process."
      }}
      contentSections={{
        overview: "Icon Dumpsters provides reliable dumpster rental services throughout Midvale, Utah. Whether you're tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.",
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
        whyChooseUs: "Icon Dumpsters is your trusted partner for dumpster rental in Midvale. We understand the unique needs of this community and provide reliable, professional service for all your waste management needs.",
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
        localInfo: "Midvale is a vibrant community in Utah known for its beautiful surroundings and strong community spirit. From residential neighborhoods to commercial districts, Midvale offers a great place to live and work.",
        serviceAreas: "We provide dumpster rental services throughout Midvale and surrounding areas. Our service area covers residential neighborhoods, commercial districts, and industrial areas to meet all your waste management needs."
      }}
    />
  );
}