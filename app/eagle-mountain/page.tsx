import CityPageTemplate from '../components/CityPageTemplate';

export default function EagleMountainPage() {
  return (
    <CityPageTemplate
      cityName="Eagle Mountain"
      citySlug="eagle-mountain"
      state="Utah"
      phoneNumber="801-918-6000"
      latitude="40.3141"
      longitude="-112.0069"
      landmarks={[
        {
                "name": "Eagle Mountain City Park",
                "address": "1650 E Stagecoach Run, Eagle Mountain, UT 84005"
        },
        {
                "name": "Eagle Mountain Library",
                "address": "1650 E Stagecoach Run, Eagle Mountain, UT 84005"
        },
        {
                "name": "Eagle Mountain Golf Course",
                "address": "1650 E Stagecoach Run, Eagle Mountain, UT 84005"
        },
        {
                "name": "Eagle Mountain Cemetery",
                "address": "1650 E Stagecoach Run, Eagle Mountain, UT 84005"
        },
        {
                "name": "Eagle Mountain City Hall",
                "address": "1650 E Stagecoach Run, Eagle Mountain, UT 84005"
        }
]}
      businessDistricts={[
        {
                "name": "Eagle Mountain Town Center",
                "description": "City government and services",
                "link": "/"
        },
        {
                "name": "Eagle Mountain East",
                "description": "Residential neighborhoods",
                "link": "/"
        },
        {
                "name": "Eagle Mountain West",
                "description": "Industrial and commercial mix",
                "link": "/"
        },
        {
                "name": "Eagle Mountain South",
                "description": "Growing residential area",
                "link": "/"
        },
        {
                "name": "Eagle Mountain North",
                "description": "Established communities",
                "link": "/"
        },
        {
                "name": "Eagle Mountain Business District",
                "description": "Mixed residential and commercial",
                "link": "/"
        }
]}
      permitInfo={{
        cityName: "Eagle Mountain",
        phoneNumber: "801-789-6600",
        requirements: "Contact Eagle Mountain for permit requirements and applications. We can help guide you through the process."
      }}
      contentSections={{
        overview: "Icon Dumpsters provides reliable dumpster rental services throughout Eagle Mountain, Utah. Whether you're tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.",
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
        whyChooseUs: "Icon Dumpsters is your trusted partner for dumpster rental in Eagle Mountain. We understand the unique needs of this community and provide reliable, professional service for all your waste management needs.",
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
        localInfo: "Eagle Mountain is a vibrant community in Utah known for its beautiful surroundings and strong community spirit. From residential neighborhoods to commercial districts, Eagle Mountain offers a great place to live and work.",
        serviceAreas: "We provide dumpster rental services throughout Eagle Mountain and surrounding areas. Our service area covers residential neighborhoods, commercial districts, and industrial areas to meet all your waste management needs."
      }}
    />
  );
}