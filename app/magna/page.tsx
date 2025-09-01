import CityPageTemplate from '../components/CityPageTemplate';

export default function MagnaPage() {
  return (
    <CityPageTemplate
      cityName="Magna"
      citySlug="magna"
      state="Utah"
      phoneNumber="801-918-6000"
      latitude="40.7091"
      longitude="-112.1016"
      landmarks={[
        {
                "name": "Magna City Park",
                "address": "8952 W 2700 S, Magna, UT 84044",
                "url": "https://www.slco.org/parks/magna-park/"
        },
        {
                "name": "Magna Library",
                "address": "2675 S 8950 W, Magna, UT 84044",
                "url": "https://slcolibrary.org/location/magna/"
        },
        {
                "name": "Magna Historic District",
                "address": "Main St, Magna, UT 84044",
                "url": "https://www.slco.org/planning/historic-preservation/"
        },
        {
                "name": "Magna Cemetery",
                "address": "8952 W 2700 S, Magna, UT 84044",
                "url": "https://www.slco.org/cemetery/"
        },
        {
                "name": "Magna Golf Course",
                "address": "8952 W 2700 S, Magna, UT 84044",
                "url": "https://www.slco.org/parks/golf-courses/"
        }
]}
      businessDistricts={[
        {
                "name": "Magna Town Center",
                "description": "City government and services",
                "link": "/magna-dumpster-rental-guide-2025"
        },
        {
                "name": "Magna East",
                "description": "Residential neighborhoods",
                "link": "/home-renovation-dumpster-guide"
        },
        {
                "name": "Magna West",
                "description": "Commercial and industrial",
                "link": "/commercial-dumpsters"
        },
        {
                "name": "Magna Business District",
                "description": "Mixed commercial area",
                "link": "/magna-dumpster-rental-guide-2025"
        },
        {
                "name": "Magna Industrial Park",
                "description": "Industrial and manufacturing",
                "link": "/commercial-dumpsters"
        }
]}
      permitInfo={{
        cityName: "Magna",
        phoneNumber: "801-535-6000",
        requirements: "Contact Magna for permit requirements and applications. We can help guide you through the process."
      }}
      contentSections={{
        overview: "Icon Dumpsters provides reliable dumpster rental services throughout Magna, Utah. Whether you're tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.",
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
        whyChooseUs: "Icon Dumpsters is your trusted partner for dumpster rental in Magna. We understand the unique needs of this community and provide reliable, professional service for all your waste management needs.",
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
        localInfo: "Magna is a vibrant community in Utah known for its beautiful surroundings and strong community spirit. From residential neighborhoods to commercial districts, Magna offers a great place to live and work.",
        serviceAreas: "We provide dumpster rental services throughout Magna and surrounding areas. Our service area covers residential neighborhoods, commercial districts, and industrial areas to meet all your waste management needs."
      }}
    />
  );
}