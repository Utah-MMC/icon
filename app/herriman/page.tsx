import CityPageTemplate from '../components/CityPageTemplate';

export default function HerrimanPage() {
  return (
    <CityPageTemplate
      cityName="Herriman"
      citySlug="herriman"
      state="Utah"
      phoneNumber="801-918-6000"
      latitude="40.5141"
      longitude="-112.0329"
      landmarks={[
        {
                "name": "Herriman City Park",
                "address": "13011 S Pioneer St, Herriman, UT 84096"
        },
        {
                "name": "Herriman Library",
                "address": "13011 S Pioneer St, Herriman, UT 84096"
        },
        {
                "name": "Herriman Golf Course",
                "address": "13011 S Pioneer St, Herriman, UT 84096"
        },
        {
                "name": "Herriman Cemetery",
                "address": "13011 S Pioneer St, Herriman, UT 84096"
        },
        {
                "name": "Herriman City Hall",
                "address": "13011 S Pioneer St, Herriman, UT 84096"
        }
]}
      businessDistricts={[
        {
                "name": "Herriman Town Center",
                "description": "City government and services",
                "link": "/"
        },
        {
                "name": "Herriman East",
                "description": "Residential neighborhoods",
                "link": "/"
        },
        {
                "name": "Herriman West",
                "description": "Industrial and commercial mix",
                "link": "/"
        },
        {
                "name": "Herriman South",
                "description": "Growing residential area",
                "link": "/"
        },
        {
                "name": "Herriman North",
                "description": "Established communities",
                "link": "/"
        },
        {
                "name": "Herriman Business District",
                "description": "Mixed residential and commercial",
                "link": "/"
        }
]}
      permitInfo={{
        cityName: "Herriman",
        phoneNumber: "801-446-5323",
        requirements: "Contact Herriman for permit requirements and applications. We can help guide you through the process."
      }}
      contentSections={{
        overview: "Icon Dumpsters provides reliable dumpster rental services throughout Herriman, Utah. Whether you're tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.",
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
        whyChooseUs: "Icon Dumpsters is your trusted partner for dumpster rental in Herriman. We understand the unique needs of this community and provide reliable, professional service for all your waste management needs.",
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
        localInfo: "Herriman is a vibrant community in Utah known for its beautiful surroundings and strong community spirit. From residential neighborhoods to commercial districts, Herriman offers a great place to live and work.",
        serviceAreas: "We provide dumpster rental services throughout Herriman and surrounding areas. Our service area covers residential neighborhoods, commercial districts, and industrial areas to meet all your waste management needs."
      }}
    />
  );
}