import CityPageTemplate from '../components/CityPageTemplate';

export default function MurrayPage() {
  return (
    <CityPageTemplate
      cityName="Murray"
      citySlug="murray"
      state="Utah"
      phoneNumber="801-918-6000"
      latitude="40.6669"
      longitude="-111.8878"
      landmarks={[
        {
                "name": "Murray City Park",
                "address": "296 E Murray Park Ave, Murray, UT 84107"
        },
        {
                "name": "Murray Library",
                "address": "166 E 5300 S, Murray, UT 84107"
        },
        {
                "name": "Murray Historic District",
                "address": "Main St, Murray, UT 84107"
        },
        {
                "name": "Murray Cemetery",
                "address": "296 E Murray Park Ave, Murray, UT 84107"
        },
        {
                "name": "Murray Golf Course",
                "address": "296 E Murray Park Ave, Murray, UT 84107"
        }
]}
      businessDistricts={[
        {
                "name": "Murray Main Street",
                "description": "Historic downtown area",
                "link": "/"
        },
        {
                "name": "Murray State Street",
                "description": "Major retail and commercial",
                "link": "/"
        },
        {
                "name": "Murray East",
                "description": "Residential neighborhoods",
                "link": "/"
        },
        {
                "name": "Murray West",
                "description": "Industrial and commercial mix",
                "link": "/"
        },
        {
                "name": "Murray South",
                "description": "Growing residential area",
                "link": "/"
        },
        {
                "name": "Murray North",
                "description": "Established communities",
                "link": "/"
        }
]}
      permitInfo={{
        cityName: "Murray",
        phoneNumber: "801-264-2660",
        requirements: "Contact Murray for permit requirements and applications. We can help guide you through the process."
      }}
      contentSections={{
        overview: "Icon Dumpsters provides reliable dumpster rental services throughout Murray, Utah. Whether you're tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.",
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
        whyChooseUs: "Icon Dumpsters is your trusted partner for dumpster rental in Murray. We understand the unique needs of this community and provide reliable, professional service for all your waste management needs.",
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
        localInfo: "Murray is a vibrant community in Utah known for its beautiful surroundings and strong community spirit. From residential neighborhoods to commercial districts, Murray offers a great place to live and work.",
        serviceAreas: "We provide dumpster rental services throughout Murray and surrounding areas. Our service area covers residential neighborhoods, commercial districts, and industrial areas to meet all your waste management needs."
      }}
    />
  );
}